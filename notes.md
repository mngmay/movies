Steps

- git status
- mkdir folderName
- cd folderName
- git init
- npm init -y
- code .
- npm i nodemon -D <- install nodemon as a dev dependency>
- npx gitignore node
- npm i express

endpoint (url + http method) === function

POST /api/movies (body: movie) === postApiMovies(movie)

| non REST         |         REST          |
| :--------------- | :-------------------: |
| /createMovie     |   POST /api/movies    |
| /removeMovie/:id | DELETE /api/movies:id |

Other Approaches to building Web API

- GraphQL
- gRPC
- RPC
- SOAP
