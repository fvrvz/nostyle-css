FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@10.12.4 --activate
WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY nostyle/package.json nostyle/
COPY docs-site-nuxt/package.json docs-site-nuxt/
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# --- Development target ---
FROM base AS dev
EXPOSE 3000
CMD ["pnpm", "run", "dev"]

# --- Build target ---
FROM base AS build
RUN pnpm --filter nostyle-css run build
RUN pnpm --filter docs-site-nuxt run generate

# --- Production static server ---
FROM nginx:alpine AS production
COPY --from=build /app/docs-site-nuxt/.output/public /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
