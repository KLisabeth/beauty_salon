# Pretty-Woman Backend
Pretty woman web app for beauty salon

## Installation
#### Requirements

Backend runs on virtually any system where Node.js is supported. This means it runs on Linux, macOS, Windows as well as container solutions such as Docker and Heroku.
#### Versions
- MongoDB 4.4
- NodeJS 12.8

#### Create and/or configure environment variables

- Create a .env file at the root of the backend folder
- Replace all variables noted with $ below, and save it to the .env file
```
PORT=$port_number
DB_CNN=mongodb://localhost:27017/$db_name
JWT_SECRET_SEED=$long_random_characters
```

#### Installation of packages with npm

- `npm i`

#### Run the node
- To install nodemon: `npm install nodemon --save-dev`
- To run in nodemon : `nodemon server.js`


