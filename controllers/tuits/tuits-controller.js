// import data from folder, set variable
// import posts from "./tuits.js";
// let tuits = posts;

// import the dao, import datamodel
import * as tuitsDao from "./tuits-dao.js"

const createTuit = async (req, res) => {
  const newTuit = req.body;
  // newTuit._id = (new Date()).getTime()+'';  // cause database db create id auto for us
  newTuit.likes = 0;
  newTuit.dislikes = 0;
  newTuit.liked = true;
  newTuit.image = "NASA.png";
  // tuits.push(newTuit);
  const insertedTuit = await tuitsDao.createTuit(newTuit);  // 
  res.json(insertedTuit);
}

const findTuits  = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  // const tuitIndex = tuits.findIndex((t) => t._id === tuitdIdToUpdate)
  // tuits[tuitIndex] = {...tuits[tuitIndex], ...updates};
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.sendStatus(status);
}


const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  // tuits = tuits.filter((t) => t._id !== tuitdIdToDelete);
  res.sendStatus(status);
}


export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}