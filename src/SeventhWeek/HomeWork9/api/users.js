const { Router } = require('express');
const fs = require('fs');
const userValidator = require('../middleWares/userValidator')
const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));
  res.json(users);
});

usersRouter.post('/', userValidator,(req, res) => {
    const newUser = req.body;
    const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));

    if(users.find(user => user.tel === newUser.tel)) {
      return res.status(400).send({
        error: 'User is already exist!'
      })
    }

    newUser.id = Date.now();
    users.push(newUser);
    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));
    res.status(201).send('New user add');
  })

usersRouter.get('/:userId', (req, res) => {
    const userId = +req.params.userId;
    console.log(userId);
    const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));

    const selectedUser = users.find(user => user.id === userId);
    if(!selectedUser) {
      res.status(404).send({
        error: 'user not found' 
      });
      return
    };
    res.send(selectedUser);
});

usersRouter.put('/:userId', userValidator, (req,res) => {
  const newUser = req.body;
  const userId = +req.params.userId;
  const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));
  const updatedUsers = users.map(user => user.id === userId ? { id: userId, ...newUser } : user);

  fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(updatedUsers));
  res.status(200).send('user has been updated');
})

usersRouter.delete('/:userId', (req,res) => {
  const userId = +req.params.userId;
  const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`));
  const userIndex = users.findIndex(user => user.id === userId);

  if(userIndex === -1) {
    return res.status(404).send({
      error: 'user not found'
    });
  } else {
    users.splice(userIndex,1);
    fs.writeFileSync(`${__dirname}/users.json`, JSON.stringify(users));

    return res.status(200).send('user has been deleted');
  }
})

module.exports = usersRouter;