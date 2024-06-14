const expres = require('express')
const router = expres.Router()


router.get('/', (req, res) => {
    res.status(200).send('Server is working')
})


module.exports = router;