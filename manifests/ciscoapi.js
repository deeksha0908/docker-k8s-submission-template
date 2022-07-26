const express = require('express');
const router = express.Router();

const app = express();
app.use(express.json());

//welcome = async(req,res)=>{
    //res.status(200).json({
        //success : true,
        //text : "CWiCS Assessment"
    //})
//}

app.get('/', async(req,res)=>{
    res.status(200).json({
        success : true,
        text : "CWiCS Assessment"
    });
});

const port = 8080;

const server = app.listen(port,"0.0.0.0", () => console.log(`server running on port ${port}`));

process.on("unhandledRejection",(err, promise)=>{
    console.log(`logged error : ${err}`);
    server.close(() => process.exit(1));
})
