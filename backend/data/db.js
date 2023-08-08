var DBConnect = require('mongoose');
var url = "mongodb+srv://Golshim123:Golshim123@webdevproject.k2obzer.mongodb.net/surfDB";


DBConnect.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('DB Connection Success!');
  })
  .catch((err) => {
    console.log(err);
  });

  module.exports=DBConnect.connect();