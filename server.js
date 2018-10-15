//Install express server
const express = require('express');
const path = require('path');
const app = express();

// Basic Auth
// https://stackoverflow.com/questions/23616371/basic-http-authentication-with-node-and-express-4
app.use((req, res, next) => {

// -----------------------------------------------------------------------
// authentication middleware

const auth = {login: 'bold', password: 'penguin'} // change this

// parse login and password from headers
const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
const [login, password] = new Buffer(b64auth, 'base64').toString().split(':')

// Verify login and password are set and correct
if (!login || !password || login !== auth.login || password !== auth.password) {
  res.set('WWW-Authenticate', 'Basic realm="401"') // change this
  res.status(401).send('Authentication required.') // custom message
  return
}

// -----------------------------------------------------------------------
// Access granted...
next()

})

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
