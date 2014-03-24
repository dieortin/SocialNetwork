SocialNetwork
=============

This project attempts to create a simple social network.

Node.js is used for the server side (together with a MySQL database) and in the client side HTML, CSS and Dart/Javascript are used.

In the database (called "socialNetwork" in my code) there should be two tables:
  *One called 'users' for confirmed users
  *One called 'users_unconfirmed' for unconfirmed users (accounts that still need to be validated)
(I'll be publishing my tables' schema soon)

The server requires a file called "conf.json" to be in the "/server" directory (it isn't included in the repository for security reasons) that must be formatted the following way for the server to work:

    {
      "urlParams": {
        "url": "put.your.server.url",
        "port": "your server port (HTTP default is 80)"
      },
      "db": {
        "host": "your database's url",
        "user": "your database's user",
        "password": "your password"
      }
    }
