const getHouses = (req, res, next) => {
  req.app
    .get("db")
    .get_houses()
    .then(response => {
      // console.log(response); 
      res.status(200).json(response);
    })
    .catch(err => {res.status(500).json(err)});
};

const addHouse = (req, res, next) => {
  req.app
    .get("db")
    .add_house([req.body.property_name, req.body.address, req.body.city, req.body.state, req.body.zip])
    .then(response => {
      res.status(200).json('all good')
    })
    .catch(err => {console.log('err: ', err); res.status(500).json(err)});
};

const removeHouse = (req, res, next) => {
  console.log(req.params.id);
  req.app
    .get("db")
    .remove_house(req.params.id)
    .then(response => {
      res.status(200).json('all good')
    })
    .catch(err => {console.log('err: ', err); res.status(500).json(err)});
}

module.exports = {
  getHouses,
  addHouse,
  removeHouse
};