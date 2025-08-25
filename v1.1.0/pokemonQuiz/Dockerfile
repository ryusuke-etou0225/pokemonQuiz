FROM nginx:alpine

# 作業ディレクトリを設定
WORKDIR /usr/share/nginx/html

# カスタムHTML/JSをコンテナにコピー
COPY . .

# NGINXはデフォルトで80番ポートをListen
EXPOSE 80