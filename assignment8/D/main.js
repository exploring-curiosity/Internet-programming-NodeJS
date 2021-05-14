var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/Patient_Details";

MongoClient.connect(url, {useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Database Connected");
  var dbObject = db.db("Patient_Details");
  var myobj = { 
                Name:'murali',
                age:15,
                ID:126,
                gender:'Male',
                address:'Erode',
                marital_status:'single',
                DateOfVisit:Date() 
            };
    dbObject.collection("patients").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("inserted");
        dbObject.collection('patients').find().toArray(function(err,res){
            if(err) throw err;
            console.log(res);
            dbObject.collection('patients').deleteOne({Name:'murali'},function(err,res){
                if(err) throw err
                console.log('Deleted murali');
                dbObject.collection('patients').find().toArray(function(err,res){
                    if(err) throw err;
                    console.log(res);
                    var upd_url = { Name:"Raj" };
                    var upd_values = { $set: {Name: "Raj Kumar", address: "Chennai" } };
                    dbObject.collection("patients").updateOne(upd_url, upd_values, function(err, res) {
                        if (err) throw err;
                        console.log("updated Raj");
                        dbObject.collection('patients').find().toArray(function(err,res){
                            if(err) throw err;
                            console.log(res);
                            db.close();
                        });
                    });
                });
            });
        });   
    });
});