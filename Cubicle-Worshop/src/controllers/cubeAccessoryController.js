const router = require('express').Router({ mergeParams: true });


router.get('/add', (req, res) => {
   console.log(req.param.cubeId);
   res.end();
});


module.exports = router;