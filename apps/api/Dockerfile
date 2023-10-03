FROM node:18.18.0-alpine AS builder
RUN apk update
# Set working directory
WORKDIR /app
RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=api --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:18.18.0-alpine AS installer
RUN apk update
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/turbo.json ./turbo.json
RUN yarn install --frozen-lockfile

FROM node:18.18.0-alpine AS sourcer
WORKDIR /app
COPY --from=installer /app/ .
COPY --from=builder /app/out/full/ .
COPY .gitignore .gitignore
RUN yarn turbo run build --scope=api --include-dependencies --no-deps

FROM node:18.18.0-alpine as runner
WORKDIR /app
COPY --from=sourcer /app/ .

# ENV APP_ENV=production
# # ENV HOST=localhost
# ENV HOST=0.0.0.0
# ENV PORT=3000
# ENV AUTH0_AUDIENCE=NwzopyOdrj0eldLUtfq62TUF1Kd0Mhej
# ENV AUTH0_ISSUER_URL=https://dev-kgkf6visc6s4d2sg.us.auth0.com/
# ENV AUTH0_CLIENT_SECRET=jtFZ5m3VsCFOl7rZRRyr8C4kgoLA6r-ze83q1QW02aWjacWeuGzcJhsZekPplAtl

# ENV NEXTAUTH_SECRET="7/yLxjRDPO9fWNDOZy6HN0vixpo67fI0mGceKfigrPo="

# # ENV DATABASE_URL="postgresql://test:test@localhost:5432/mydb?schema=public"
# # ENV DATABASE_URL="postgresql://test:test@host.docker.internal:5432/mydb?schema=public"

# # これでデプロイしたら動いた！
# ENV DATABASE_URL="postgresql://testuser:Asaikazuto1@localhost:5432/testdb?host=/cloudsql/nextauth-test-393412:asia-northeast1:waonpad-postgre-test"

# CMD [ "node", "apps/api/dist/main.js" ]
CMD [ "sh", "-c", "yarn prisma migrate deploy && node apps/api/dist/main.js" ]