//import library
import express = require('express');

//Instantiate an Express app
const app: express.Application = express();

//Process any GET request to the root route. Ex: https://bheftye.com/
app.get('/', function (req, res){
    //req -> Request, res -> Response
    //req allows to gather Request attributes (params, query, source, etc).
    //res allows to return values to the request made (result: {json, xml, code})

    res.send('Hello World!');
});

//Where will this server listen to requests locahost:3000/ would be the app root
app.listen(3000, function (){
    console.log('Example app listening in port 3000');
});
