# social-network-api

Social network API using express and mongoose.

## Installation

To install necessary dependencies, run the following command:

```sh
npm install
```

## Usage

- Ensure a database called `socialNetworkDB` exists in the local mongodb instance.
- Run `npm start` to start the application.

### Available APIs

`/api/users`

- `GET` all users
- `POST` a new user

`/api/users/:userId`

- `GET` a single user by it's \_id and populated thought and friend data
- `PUT` to update an user by it's \_id
- `DELETE` to remove an user by it's \_id

`/api/users/:userId/friends`

- `POST` to add a friend

`/api/users/:userId/friends/:friendId`

- `DELETE` to remove a friend

`/api/thoughts`

- `GET` all thoughts
- `POST` a new thought

`/api/thoughts/:thoughtId`

- `GET` a single thought by it's \_id
- `PUT` to update a thought by it's \_id
- `DELETE` to remove a thought by it's \_id

`/api/thoughts/:thoughtId/reactions`

- `POST` a new reaction

`/api/thoughts/:thoughtId/reactions/:reactionId`

- `DELETE` to remove a reaction by it's \_id

## Credits

Third-party libraries used:

- Express JS: <https://expressjs.com/>
- Mongoose: <https://www.npmjs.com/package/mongoose>

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
