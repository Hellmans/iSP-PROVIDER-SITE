#!/bin/bash

# Script de inicialização da Lucas Net para Proxmox/Docker
# Autor: Lucas Net Team
# Data: 2026

set -e

echo "================================================"
echo "   INSTALAÇÃO LUCAS NET - DOCKER/PROXMOX"
echo "================================================"
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para mostrar mensagens
info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERRO]${NC} $1"
}

# Verificar se Docker está instalado
if ! command -v docker &> /dev/null; then
    error "Docker não encontrado!"
    info "Instalando Docker..."
    apt-get update
    apt-get install -y docker.io docker-compose
    systemctl start docker
    systemctl enable docker
    info "Docker instalado com sucesso!"
else
    info "Docker já está instalado"
fi

# Verificar se docker-compose está instalado
if ! command -v docker-compose &> /dev/null; then
    error "docker-compose não encontrado!"
    info "Instalando docker-compose..."
    apt-get install -y docker-compose
    info "docker-compose instalado com sucesso!"
else
    info "docker-compose já está instalado"
fi

echo ""
info "Verificando arquivos necessários..."

# Verificar se os arquivos necessários existem
if [ ! -f "docker-compose.production.yml" ]; then
    error "Arquivo docker-compose.production.yml não encontrado!"
    exit 1
fi

if [ ! -f "backend/Dockerfile" ]; then
    error "Arquivo backend/Dockerfile não encontrado!"
    exit 1
fi

if [ ! -f "frontend/Dockerfile" ]; then
    error "Arquivo frontend/Dockerfile não encontrado!"
    exit 1
fi

info "Todos os arquivos necessários foram encontrados!"

echo ""
warn "================================================"
warn "   CONFIGURAÇÃO IMPORTANTE"
warn "================================================"
echo ""
warn "Antes de continuar, você precisa configurar o IP/domínio!"
echo ""
echo "Edite o arquivo: docker-compose.production.yml"
echo "Linha 43: REACT_APP_BACKEND_URL=http://SEU_IP_OU_DOMINIO:8001"
echo ""
read -p "Você já configurou o IP? (s/n): " configured

if [ "$configured" != "s" ] && [ "$configured" != "S" ]; then
    warn "Por favor, configure o IP antes de continuar!"
    echo ""
    echo "Exemplo:"
    echo "  nano docker-compose.production.yml"
    echo "  Altere: REACT_APP_BACKEND_URL=http://192.168.1.100:8001"
    echo ""
    exit 1
fi

echo ""
info "Iniciando build das imagens..."
echo ""

# Parar containers existentes
if docker ps -a | grep -q lucas-net; then
    info "Parando containers existentes..."
    docker-compose -f docker-compose.production.yml down
fi

# Build das imagens
info "Fazendo build do backend..."
docker-compose -f docker-compose.production.yml build backend

info "Fazendo build do frontend..."
docker-compose -f docker-compose.production.yml build frontend

echo ""
info "Build concluído com sucesso!"

echo ""
info "Iniciando containers..."
docker-compose -f docker-compose.production.yml up -d

echo ""
info "Aguardando serviços iniciarem..."
sleep 10

# Verificar se os containers estão rodando
echo ""
info "Verificando status dos containers..."
docker-compose -f docker-compose.production.yml ps

echo ""
echo "================================================"
echo "   INSTALAÇÃO CONCLUÍDA!"
echo "================================================"
echo ""

# Obter IP do servidor
SERVER_IP=$(hostname -I | awk '{print $1}')

info "Acesse sua aplicação:"
echo ""
echo "  Frontend (Site):  http://${SERVER_IP}"
echo "  Backend (API):    http://${SERVER_IP}:8001"
echo "  MongoDB:          mongodb://${SERVER_IP}:27017"
echo ""

info "Comandos úteis:"
echo ""
echo "  Ver logs:         docker-compose -f docker-compose.production.yml logs -f"
echo "  Parar:            docker-compose -f docker-compose.production.yml down"
echo "  Restart:          docker-compose -f docker-compose.production.yml restart"
echo "  Status:           docker-compose -f docker-compose.production.yml ps"
echo ""

info "Verificando saúde dos serviços..."
echo ""

# Testar backend
if curl -s -f http://localhost:8001/api/ > /dev/null 2>&1; then
    info "✓ Backend está respondendo"
else
    warn "✗ Backend não está respondendo (pode levar alguns segundos)"
fi

# Testar frontend
if curl -s -f http://localhost/ > /dev/null 2>&1; then
    info "✓ Frontend está respondendo"
else
    warn "✗ Frontend não está respondendo (pode levar alguns segundos)"
fi

echo ""
info "Para ver os logs em tempo real:"
echo "  docker-compose -f docker-compose.production.yml logs -f"
echo ""

exit 0
