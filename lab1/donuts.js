(function() {
    console.log("let's count from 0 to 10!")
    let entireMessage = "";
  
    for (let i = 0; i <= 10; i++) {
      let currentMessage = "i is " + i + "/10\n";
      entireMessage = entireMessage + currentMessage;
    }
  
    console.log(entireMessage); 
    console.log(currentMessage);
  })();