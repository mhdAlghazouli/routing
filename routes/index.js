const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  //add some stuff in a min
  res.render('template',{
    locals: {
      title: "My first Template"
    },
    partials: {
      index : `index`
    }
  });
});

module.exports = router;

