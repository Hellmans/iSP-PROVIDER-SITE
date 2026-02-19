#!/bin/bash

# Script de rebuild limpo para Lucas Net
# Remove cache e rebuild completo

echo "================================================"
echo "   REBUILD LIMPO - LUCAS NET"
echo "================================================"
echo ""

# Cores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

info "Parando e removendo containers existentes..."
docker-compose -f docker-compose.production.yml down -v

info "Removendo imagens antigas..."
docker rmi lucas-net-frontend:latest 2>/dev/null || true
docker rmi lucas-net-backend:latest 2>/dev/null || true

info "Limpando cache do Docker..."
docker builder prune -f

echo ""
warn "Iniciando build limpo (sem cache)..."
echo ""

info "Building backend..."
docker-compose -f docker-compose.production.yml build --no-cache backend

info "Building frontend..."
docker-compose -f docker-compose.production.yml build --no-cache frontend

echo ""
info "Iniciando containers..."
docker-compose -f docker-compose.production.yml up -d

echo ""
info "Aguardando serviços iniciarem..."
sleep 10

echo ""
info "Status dos containers:"
docker-compose -f docker-compose.production.yml ps

echo ""
info "Ver logs em tempo real:"
echo "  docker-compose -f docker-compose.production.yml logs -f"
echo ""
