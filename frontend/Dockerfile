FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock* package-lock.json* ./

# Install dependencies (suporta yarn ou npm)
RUN if [ -f yarn.lock ]; then \
        yarn install --production --frozen-lockfile; \
    elif [ -f package-lock.json ]; then \
        npm ci --only=production; \
    else \
        npm install --production; \
    fi

# Copy application code
COPY . .

# Build the application
RUN if [ -f yarn.lock ]; then \
        yarn build; \
    else \
        npm run build; \
    fi

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install serve to serve the build
RUN npm install -g serve

# Copy build from previous stage
COPY --from=build /app/build ./build

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000 || exit 1

# Serve the application
CMD ["serve", "-s", "build", "-l", "3000"]
