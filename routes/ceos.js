const express = require('express'),
router = express.Router();

const db = require('../models/data');

router.get('/', (req,res) => {
  res.render('template', {
    locals: {
      title : 'Apple CEOs',
      data : db
    },
    partials : {
      index : 'partial-ceos'
    }
  });
});

router.get('/:slug', (req,res) => {
  const { slug } = req.params;
  const ceo = db.find(person => person.name === slug);
  if(ceo) {
    res.render('template', {
      locals : {
        title : `Detail CEO`,
        data : ceo
      },
      partials : {
        index : 'partial-ceos-details'
      }
    })

  }

})

module.exports = router;
