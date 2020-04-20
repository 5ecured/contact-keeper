const router = require('express').Router()

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', async (req, res) => {
    res.send('Get logged in user')
})

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public
router.post('/', async (req, res) => {
    res.send('Log in user')
})

module.exports = router