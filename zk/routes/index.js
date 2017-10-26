var express = require('express');
var router = express.Router();
var fs=require('fs');

/* GET home page. */
router.post('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*')
  fs.readFile('public/ll.txt','utf-8',function(e,data){
    var num=JSON.parse(data)
    num.push({name:req.body.name})
    fs.writeFile('public/ll.txt',JSON.stringify(num),function(e,data){
      fs.readFile('public/ll.txt','utf-8',function(e,wgl){
        var sum=JSON.parse(wgl)
        res.send({name:sum})
      })
    })
  })
});

module.exports = router;
