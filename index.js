const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

let clock = 0;

function clockTic() {
  clock++;
  console.log(clock);
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
