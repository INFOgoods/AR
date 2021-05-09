
class App(){
   constructor() {
        // Creating a container for the application

        const container = document.createElement('div2');
        document.body.appendChild(container);
   }
  function echoAR(var API_key)
{
 
var echoDB;

// Query echoAR
fetch('https://console.echoar.xyz/query?key=' + API_KEY)
.then((response) => response.json())
.then((json) => {
  // Store database
  echoDB = json; // The JSON response
})
.catch((error) => {
  console.error(error);
});
  
  
}
}


export { App };
