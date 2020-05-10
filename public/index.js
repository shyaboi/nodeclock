

let clock = 0;

        function clockTic() {
            clock++;
            // console.log(clock);
        }


        function re() {
            location.reload();
        }

        function html() {
            document.querySelector('span')
            
                
            }
        
        setInterval(() => {
          clockTic();
          re()
          html()
        }, 1000);