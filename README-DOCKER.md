# 🚀 Lucas Net - Guia Docker

## 📋 Pré-requisitos

- Docker instalado (versão 20.10+)
- Docker Compose instalado (versão 2.0+)
- Portas 80, 8001 disponíveis

## 🎯 Métodos de Instalação

### Método 1: Desenvolvimento (Recomendado para testes)

Este método monta os diretórios locais, permitindo edição em tempo real.

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/lucas-net.git
cd lucas-net

# Rodar em modo desenvolvimento
docker-compose up -d

# Ver logs
docker-compose logs -f

# Acessar
# Frontend: http://localhost
# Backend: http://localhost:8001
# MongoDB: mongodb://localhost:27017
```

### Método 2: Produção (Build das imagens)

Este método faz build das imagens otimizadas para produção.

```bash
# Editar IP/domínio no docker-compose.production.yml
# Linha: REACT_APP_BACKEND_URL=http://SEU_IP_OU_DOMINIO:8001

# Build e rodar
docker-compose -f docker-compose.production.yml up -d --build

# Acessar
# Frontend: http://SEU_IP
# Backend: http://SEU_IP:8001
```

### Método 3: Registry (Pull from Docker Hub/GHCR)

```bash
# 1. Fazer build e push (uma vez)
docker-compose -f docker-compose.production.yml build
docker tag lucas-net-frontend:latest seususario/lucas-net-frontend:latest
docker tag lucas-net-backend:latest seususario/lucas-net-backend:latest
docker push seususario/lucas-net-frontend:latest
docker push seususario/lucas-net-backend:latest

# 2. Em outro servidor (Proxmox), apenas pull e run
# Editar docker-compose.production.yml para usar as imagens:
# image: seususario/lucas-net-frontend:latest
# image: seususario/lucas-net-backend:latest

docker-compose -f docker-compose.production.yml pull
docker-compose -f docker-compose.production.yml up -d
```

## 🔧 Comandos Úteis

```bash
# Ver containers rodando
docker-compose ps

# Ver logs de todos os serviços
docker-compose logs -f

# Ver logs de um serviço específico
docker-compose logs -f frontend
docker-compose logs -f backend
docker-compose logs -f mongodb

# Parar tudo
docker-compose down

# Parar e remover volumes (CUIDADO: apaga banco de dados)
docker-compose down -v

# Restart de um serviço
docker-compose restart frontend
docker-compose restart backend

# Rebuild de um serviço
docker-compose up -d --build frontend

# Entrar em um container
docker exec -it lucas-net-frontend sh
docker exec -it lucas-net-backend bash
docker exec -it lucas-net-mongo mongosh

# Ver uso de recursos
docker stats

# Limpar tudo (containers, imagens, volumes não usados)
docker system prune -a --volumes
```

## 📦 Estrutura dos Arquivos

```
lucas-net/
├── docker-compose.yml              # Desenvolvimento
├── docker-compose.production.yml   # Produção
├── .dockerignore                   # Arquivos ignorados no build
├── backend/
│   ├── Dockerfile                  # Build do backend
│   ├── server.py
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── Dockerfile                  # Build do frontend
│   ├── package.json
│   ├── src/
│   └── .env
└── README-DOCKER.md
```

## 🌐 Configuração de Rede

### Para Proxmox/Servidor:

1. **Configurar IP no docker-compose.production.yml:**
```yaml
environment:
  - REACT_APP_BACKEND_URL=http://192.168.1.100:8001  # Seu IP
```

2. **Liberar portas no firewall:**
```bash
ufw allow 80/tcp
ufw allow 8001/tcp
ufw status
```

3. **Configurar DNS (opcional):**
```bash
# Adicionar entrada no /etc/hosts
192.168.1.100  lucasnet.local
```

## 🔍 Troubleshooting

### Frontend não conecta no Backend
```bash
# Verificar se backend está rodando
curl http://localhost:8001/api/

# Verificar variável de ambiente do frontend
docker exec lucas-net-frontend env | grep REACT_APP_BACKEND_URL

# Recriar frontend com variável correta
docker-compose up -d --force-recreate frontend
```

### MongoDB não inicia
```bash
# Ver logs
docker-compose logs mongodb

# Verificar volume
docker volume ls
docker volume inspect lucas-net_mongo_data

# Recriar MongoDB
docker-compose stop mongodb
docker-compose rm mongodb
docker-compose up -d mongodb
```

### Porta 80 ocupada
```bash
# Ver quem está usando
sudo lsof -i :80

# Mudar porta no docker-compose.yml
ports:
  - "8080:3000"  # Agora acessa em localhost:8080
```

### Rebuild completo
```bash
# Parar tudo
docker-compose down

# Remover imagens antigas
docker rmi lucas-net-frontend:latest
docker rmi lucas-net-backend:latest

# Rebuild
docker-compose -f docker-compose.production.yml up -d --build
```

## 📊 Monitoramento

### Ver logs em tempo real
```bash
docker-compose logs -f --tail=100
```

### Ver uso de recursos
```bash
docker stats --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}"
```

### Health checks
```bash
# Backend
curl http://localhost:8001/api/

# Frontend
curl http://localhost/

# MongoDB
docker exec lucas-net-mongo mongosh --eval "db.runCommand('ping')"
```

## 🚀 Deploy em Produção

### 1. Build otimizado
```bash
docker-compose -f docker-compose.production.yml build --no-cache
```

### 2. Testar localmente
```bash
docker-compose -f docker-compose.production.yml up
```

### 3. Push para registry
```bash
docker login
docker push seususario/lucas-net-frontend:latest
docker push seususario/lucas-net-backend:latest
```

### 4. Pull no servidor
```bash
docker pull seususario/lucas-net-frontend:latest
docker pull seususario/lucas-net-backend:latest
docker-compose -f docker-compose.production.yml up -d
```

## 🔐 Segurança

### 1. Usar secrets para senhas
```bash
# Criar arquivo .env
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=senha_segura_aqui
```

### 2. Não expor MongoDB publicamente
```yaml
# No docker-compose.yml, remover:
# ports:
#   - "27017:27017"
```

### 3. Usar HTTPS com Nginx/Traefik
```bash
# Adicionar reverse proxy na frente
```

## 📞 Suporte

- **Logs não aparecem?** Use `docker-compose logs -f`
- **Container reinicia sempre?** Verifique `docker-compose logs <servico>`
- **Mudou código mas não atualiza?** Faça rebuild: `docker-compose up -d --build`

---

**Criado para Lucas Net** 🌐
