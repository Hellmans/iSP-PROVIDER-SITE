# 🚀 GUIA RÁPIDO - INSTALAÇÃO NO PROXMOX

## ⚡ Instalação Automática (Recomendado)

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/lucas-net.git
cd lucas-net

# 2. Configure seu IP
nano docker-compose.production.yml
# Altere linha 43: REACT_APP_BACKEND_URL=http://SEU_IP:8001

# 3. Execute o instalador
chmod +x install.sh
./install.sh
```

## 🛠️ Instalação Manual

### Passo 1: Instalar Docker
```bash
apt-get update
apt-get install -y docker.io docker-compose
systemctl start docker
systemctl enable docker
```

### Passo 2: Configurar IP
```bash
# Editar docker-compose.production.yml
nano docker-compose.production.yml

# Alterar linha 43:
environment:
  - REACT_APP_BACKEND_URL=http://192.168.1.100:8001  # SEU IP AQUI
```

### Passo 3: Build e Run
```bash
# Build das imagens
docker-compose -f docker-compose.production.yml build

# Iniciar containers
docker-compose -f docker-compose.production.yml up -d

# Ver logs
docker-compose -f docker-compose.production.yml logs -f
```

## 🌐 Acessar

- **Site**: http://SEU_IP
- **API**: http://SEU_IP:8001

## ❌ Solução do Erro "emergentintegrations"

O erro que você teve foi porque o `requirements.txt` continha um pacote interno do Emergent.

**JÁ CORRIGIDO!** O novo `requirements.txt` tem apenas:
```
fastapi==0.110.1
uvicorn==0.25.0
python-dotenv>=1.0.1
pymongo==4.5.0
pydantic>=2.6.4
motor==3.3.1
python-multipart>=0.0.9
```

Agora rode novamente:
```bash
docker-compose -f docker-compose.production.yml up -d --build
```

## 🔧 Comandos Úteis

```bash
# Ver status
docker-compose -f docker-compose.production.yml ps

# Ver logs
docker-compose -f docker-compose.production.yml logs -f

# Restart
docker-compose -f docker-compose.production.yml restart

# Parar tudo
docker-compose -f docker-compose.production.yml down

# Rebuild completo
docker-compose -f docker-compose.production.yml up -d --build --force-recreate
```

## 🐛 Troubleshooting

### Backend não conecta no MongoDB
```bash
# Ver logs do MongoDB
docker logs lucas-net-mongo

# Restart MongoDB
docker-compose -f docker-compose.production.yml restart mongodb
```

### Frontend não carrega
```bash
# Verificar se backend está rodando
curl http://localhost:8001/api/

# Ver logs do frontend
docker logs lucas-net-frontend

# Rebuild frontend
docker-compose -f docker-compose.production.yml up -d --build frontend
```

### Porta 80 ocupada
```bash
# Ver quem está usando
lsof -i :80

# Ou mude a porta no docker-compose.production.yml
ports:
  - "8080:3000"  # Acessa em http://SEU_IP:8080
```

## 📦 Arquivos Principais

```
lucas-net/
├── install.sh                        # Script automático
├── docker-compose.production.yml     # Configuração Docker
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt              # CORRIGIDO (sem emergentintegrations)
│   └── server.py
└── frontend/
    ├── Dockerfile
    └── src/
```

## ✅ Verificar se está funcionando

```bash
# Testar backend
curl http://localhost:8001/api/

# Testar frontend
curl http://localhost/

# Ver containers rodando
docker ps
```

Deve mostrar 3 containers:
- lucas-net-frontend
- lucas-net-backend
- lucas-net-mongo

---

**Dúvidas?** Execute `./install.sh` para instalação guiada!
