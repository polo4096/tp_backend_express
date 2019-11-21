//import Omdb from '../API/omdb'
// Création de l'objet Omdb
const axios = require('axios');

const API_URL = "http://www.omdbapi.com/?apikey=5e9e08eb&";





var express = require('express');

var router = express.Router();

var moviesID=["tt0363771","tt4896340"];

let dataTab= [];

/* GET users listing. */
router.get('/', async(req, res) => {
  try {
     moviesID.forEach(async(id) => {
        let res = await axios
        .get(`${API_URL}i=${id}`, {
          crossdomain: true
        })
        dataTab.push(res.data);
        
    });
  }catch{
    console.error(error);
  }
    res.send(dataTab) 
    dataTab = [];
});

/* GET users listing. */
router.get('/:id', async (req, res) => {
  
  try {
    
    const res = await axios.get(`${API_URL}i=${req.params.id}`, {
      crossdomain: true
    })
    dataTab.push(res.data);
        
      
  } catch (error) {
    console.error(error);
  }
  res.status(200).send(dataTab) 
  dataTab = [];
  });
  


/* PUT new user. */
router.put('/', async (req, res) => {
  
  try {
    
        // Get the data from request from request
        const { movie } = req.body;
        // Create new unique id
         
        const res = await axios.get(`${API_URL}t=${movie}`, {
          crossdomain: true
        })
        moviesID.push(res.imdbID);
        res.json(res.imdbID);
            
          
      } catch (error) {
        console.error(error);
      }
    // Insert it in array (normaly with connect the data with the database)
      
    
    });
  
  
  /* DELETE user. */
  router.delete('/:id', (req, res) => {
    // Get the :id of the user we want to delete from the params of the request
    const { id } = req.params;
  
    // Remove from "DB"
    _.remove(users, ["id", id]);
  
    // Return message
    res.json({
      message: `Just removed ${id}`
    });
  });
  
  /* UPDATE user. */
  router.post('/:id', (req, res) => {
    // Get the :id of the user we want to update from the params of the request
    const { id } = req.params;
    // Get the new data of the user we want to update from the body of the request
    const { user } = req.body;
    // Find in DB
    const userToUpdate = _.find(users, ["id", id]);
    // Update data with new data (js is by address)
    userToUpdate.user = user;
  
    // Return message
    res.json({
      message: `Just updated ${id} with ${user}`
    });
  });
  
  

module.exports = router;
