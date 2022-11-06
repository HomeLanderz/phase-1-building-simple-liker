// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeButtons = document.querySelectorAll("span.like-glyph")
likeButtons.forEach(button => {
  button.addEventListener("click", () => {
    mimicServerCall()
      .then(resp => {
        if (button.textContent === '♥') {
          button.classList.remove("activated-heart")
          button.textContent = '♡'
          console.log("Unliked")
        } else {
          button.classList.add("activated-heart")
          button.textContent = '♥'
          console.log("Done")
        }
      })
      .catch(error => {
        const errorDiv = document.getElementById("modal")
        errorDiv.classList.remove("hidden")
        console.log("Error")
        setTimeout(function(){
          errorDiv.classList.add("hidden")
        }, 3000)
      })
    })
})

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
