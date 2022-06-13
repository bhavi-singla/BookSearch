const express = require("express");
const app = express();
const cors = require("cors");
const exp = require("constants");
const bodyParser = require('body-parser');
const dbConnect = require('./mongodb');
//nconst fetch = require("node-fetch")
//var jsonParser = bodyParser.json()
 
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));


const insertData=async ({name,email,book})=>{
  let data = await dbConnect();
 let result = await data.insert(
         {FullName:name,
          Email:email,
          BookSearch:book
        })
 if(result.acknowledged)
 {
     console.warn("data is inserted")
 }
 //console.log(name);
 //console.log(email);
 //console.log(book);
}


app.get("/", (req, res) => {
  res.send("Hello World!");
});
  
app.post("/post", (req, res) => {
    //console.log(req);
    //let {parcel}=req.body;
    //console.log(parcel);
    console.log("Connected to React");

    insertData(req.body);
    res.status(200).send({status:'recieved'});
    //res.redirect("/");
  });
  
  
const PORT = 9000;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));