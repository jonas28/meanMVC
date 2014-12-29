var Step = require('../models/step');

module.exports.create = function (req, res) {
  var step = new Step(req.body);
  step.save(function (err, result) {
    res.json(result);
  });
}

module.exports.list = function (req, res) {
  Step.find({}, function (err, results) {
    res.json(results);
  });
}

module.exports.show = function (req, res) {
  Step.findById(req.params.id, function (err, results) {
    res.json(results);
  });
}


module.exports.remove = function (req, res) {
  return Step.remove({ _id: req.params.id }, function(err) {
    if (!err) {
            console.log('notification!');
    }
    else {
            console.log('error!');
    }
  });
}

module.exports.update = function (req, res) {  
  return Step.findById(req.params.id, function (err, step) {
    step.title = req.body.title;
    step.save(function (err, result) {
      res.json(result);
    });
  });
}
