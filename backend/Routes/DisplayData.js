const express = require('express')
const router = express.Router()

router.post('/booksData',(req,res) => {
  try {
    res.send([global.books_items,global.branch_names])
  } catch (error) {
    console.error(error.message);
    res.send("Server Error")
  }
})

module.exports = router;