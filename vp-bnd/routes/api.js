const expres = require('express')
const router = expres.Router()
const mongoose=require('mongoose')

const db='mongodb://localhost:27017/videos'
mongoose.Promise=global.Promise

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Successfully connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database', error);
  });

router.get('/', (req, res) => {
    res.status(200).send('Server is working')
})


module.exports = router;