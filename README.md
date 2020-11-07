# go-react-todo

    - Todo REST API in Go
    - React frontend client with Redux.
    - Setup with docker & docker-compose.

Database library for postgres is [Gorp](https://github.com/go-gorp/gorp),
livereloading goes to [codegangsta/Gin](https://github.com/codegangsta/gin),
HTTP framework used is [gin-gonic/gin](https://github.com/gin-gonic/gin).

Docker-compose file contains the definition for three containers -
database (postgres), backend (Go) and frontend (React).

## Requirements

- docker
- docker-compose

## Development環境

    ```
    $ docker-compose up -d
    ```

Go API (バックエンド) は、http://localhost:8080でアクセスできます。
React(フロントエンド) は、 http://localhost:9000 で使用しています。
Live reloadはcodegangsta/Ginが提供しています。

## Production環境

Production環境ではLive reload、フロントエンドコンテナは必要ありません。
postgres(DB)、go(BackEnd)、nginxの３つのコンテナのみです。
以下の手順でビルド、公開を行います。

    ```
    $ docker-compose run client npm run build
    ```

公開時は別の docker-compose ファイルを使用します。

    ```
    docker-compose -f docker-compose.prod.yml up -d
    ```

## API endpoints

- **GET** api/v1/todos/
- **GET** api/v1/todos/:id
- **POST** api/v1/todos
- **PUT** api/v1/todos/:id
- **DELETE** api/v1/todos/:id
