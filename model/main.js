var mongoClient=require("mongodb");
var fs=require('fs');
var url="mongodb://localhost:27017/model";
mongoClient.connect(url,{useUnifiedTopology:true},function(err,db){
    if(err) throw err;
    console.log("Database Connected");
    var dbObject = db.db("model");
    dbObject.collection('music').find({Country:'India'}).sort({Artist:1}).limit(5).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        var i=0;
        var data=''
        for(i=0;i<res.length;i++)
        {
            data +="\n\nTitle:"+res[i].Title;
            data +="\nArtist:"+res[i].Artist;
            data +="\nCountry:"+res[i].Country;
            data+="\nCompany:"+res[i].Company;
            data+="\nPrice:"+res[i].Price;
            data+="\nYear:"+res[i].Year;
        }
        fs.writeFile("output.txt",data,function(err){
            if(err) throw err;
            db.close();
        })
    })
});