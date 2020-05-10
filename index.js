const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
// var moment = require('moment');
// var now = moment();

// moment().format();




  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
    // res.send(`<span id='clk'>${clock}</span> 
    
    // <script>
            
           
            
        
   
    
    // setInterval(() => {
    //     re()
    //     console.log('ok')
    // }, 1000);
    
    // </script>`);
  });



// app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
