# ---- Builder ----
FROM node:24.22.1-trixie-slim AS builder

# Enable pnpm via Corepack
RUN npm install -g pnpm@10.34.8

# Set working directory
WORKDIR /app

# Copy only dependency files first for better caching
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the app
RUN pnpm build && pnpm prune --prod && rm -rf .next/cache

# ---- Runner ----
FROM node:24.22.1-trixie-slim AS runner

# Install curl and Chromium for Puppeteer
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y --no-install-recommends curl chromium ca-certificates fonts-liberation && \
    rm -rf /var/lib/apt/lists/*

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium

# Package managers are build tools; the server runs Next directly.
RUN rm -rf /usr/local/lib/node_modules /usr/local/bin/npm /usr/local/bin/npx /usr/local/bin/corepack

WORKDIR /app

# Only copy the necessary files for running the app
COPY --chown=node:node --from=builder /app/package.json ./
COPY --chown=node:node --from=builder /app/pnpm-lock.yaml ./
COPY --chown=node:node --from=builder /app/.next ./.next
COPY --chown=node:node --from=builder /app/public ./public
COPY --chown=node:node --from=builder /app/node_modules ./node_modules

USER node

EXPOSE 3000

CMD ["node", "node_modules/next/dist/bin/next", "start", "--hostname", "0.0.0.0"] 
