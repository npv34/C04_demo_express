const express = require('express');
const path = require("path");
const UserController = require("./src/controller/UserController");

const app = express();
const PORT = 8000;
// set up static  file
app.use(express.static(path.join(__dirname, 'public')));
// set thu muc views mac dinh
app.set('views', path.join(__dirname, './src/views'))
// set view engine su dung la ejs
app.set('view engine', 'ejs')

let userController = new UserController();

//router list
app.get('/', ((req, res, next) =>  {
  userController.showListUser(req, res, next)
}))

//router delete
app.get('/users/:id/delete', (req, res, next) => {
    userController.deleteUser(req, res, next)
})


app.listen(PORT, 'localhost', () => {
    console.log(`server listening on  http://localhost:${PORT}`)
});
