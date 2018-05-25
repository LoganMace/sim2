require('dotenv').config();
const express = require('express'),
      cors = require('cors'),
      { json } = require('body-parser'),
      massive = require('massive'),
      app = express(),
      port = 3002;
const { getHouses, addHouse, removeHouse } = require(`./controller`);

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
}).catch((error)=>console.log(error));

// const app = express();
app.use((req, res, next) => {
  console.log('HIT');
  next();
})
app.use(cors());
app.use(json());


app.get('/api/houses', getHouses);

app.post('/api/houses', addHouse);

app.delete('/api/houses/:id', removeHouse);

app.listen(port, ()=>console.log(`Listening on port: ${port}`));