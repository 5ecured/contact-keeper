const router = require('express').Router()

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', async (req, res) => {
    res.send('register  user')
})

module.exports = router