import people from './users.js'
let users = people

const UserController = (app) => {
   app.get('/api/users', findUsers);
   app.get('/api/users/:uid', findUserById);
   app.post('/api/users', createUser);
   app.delete('/api/users/:uid', deleteUser);
   app.put('/api/users/:uid', updateUser);
}

// handler functions below

const findUsers = (req, res) => {
    const type = req.query.type
    if(type) {
      const usersOfType = users
        .filter(u => u.type === type)
      res.json(usersOfType)
      return
    }
  
   res.json(users)
}

const findUserById = (req, res) => {
    const userId = req.params.uid;
    const user = users
      .find(u => u._id === userId);
    res.json(user);
  }
  

  const createUser = (req, res) => {
    const newUser = req.body;
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
  }

  const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr =>usr._id !== userId);
    res.sendStatus(200);
  }

  const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updates = req.body;
    users = users.map((usr) => usr._id === userId ? {...usr, ...updates} : usr);
    res.sendStatus(200);
   }
   



export default UserController


// import the array of users. Include the extension


// use express instance app to declare HTTP GET
// request pattern /api/users to call a function


// function runs when /api/users requested
// responds with JSON array of users


// exports so app.js can import

