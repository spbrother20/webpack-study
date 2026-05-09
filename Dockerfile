# ===== 第一步：构建阶段 =====
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build


# ===== 第二步：运行阶段（nginx）=====
FROM nginx:alpine

# 删除默认页面
RUN rm -rf /usr/share/nginx/html/*

# 拷贝构建产物
COPY --from=builder /app/dist /usr/share/nginx/html

# nginx配置（可选，但推荐）
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]