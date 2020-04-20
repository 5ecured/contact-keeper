const router = require('express').Router()

// @route   GET api/contacts
// @desc    Get all user's(!) contacts. Not all contacts in the database. Only the particluar user's contacts
// @access  Private
router.get('/', async (req, res) => {
    res.send('Get all contacts')
})

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', async (req, res) => {
    res.send('Add contact')
})

// @route   PUT api/contacts/:id
// @desc    Update contact
// @access  Private
router.put('/:id', async (req, res) => {
    res.send('Update contact')
})

// @route   DELETE api/contacts/:id
// @desc    Delete contact
// @access  Private
router.delete('/:id', async (req, res) => {
    res.send('Delete contact')
})

module.exports = router