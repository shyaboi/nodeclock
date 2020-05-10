const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");
var ghpages = require('gh-pages');

// var moment = require('moment');
// var now = moment();

// moment().format();

let clock = 0;

function clockTic() {
  clock++;
  // console.log(clock);
}

function reload() {
  
}

function html() {
  app.get("/", (req, res) => {
    // res.sendFile(path.join(__dirname, "public", "index.html"));
    res.send(`<span id='clk'>${clock}</span> 
    
    <script>
            
           
            
        
    function re() {
    location.reload();   
    }
    
    setInterval(() => {
        re()
        console.log('ok')
    }, 1000);
    
    </script>`);
  });
}

setInterval(() => {
  clockTic();
  html();
}, 1000);

// app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
