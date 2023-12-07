
// Get the dice element
// Get the advice number
// Get the advice
const dice = document.querySelector('.dice');
const advideNum = document.querySelector('.advice-number');
const advice = document.querySelector('.advice');

// Cretate a function to get the advice with an HttpRequest
const getAdvice = () => {

   // Make a new request
   const req = new XMLHttpRequest();

   // The url (source) that we will make the request (api)
   const src = `https://api.adviceslip.com/advice?timestamp=${Date.now()}`;

   // Create the request by adding an event listener
   req.addEventListener('readystatechange', () => {
      // Check if the request was successful (get data)
      if (req.readyState === 4 && req.status === 200) {
         // Everything good to go

         // console log the response to see what I am getting back
         // console.log('GOOD TO GO!: ', req.responseText);
         // Parse the data .slip
         const data = JSON.parse(req.responseText).slip;
         // console.log(data);

         // Change the advice number header
         advideNum.textContent = `Advice #${data.id}`;

         // Change the advice
         advice.textContent = `"${data.advice}"`;

      } else if (req.readyState === 4) {
         // No go!
         console.log('Could not fetch the data!');
      }
   });

   // Open the request (get)
   req.open('GET', src);

   // Send the request
   req.send();
}

// Add click event to the dice
dice.addEventListener('click', () => {
   getAdvice();
});



