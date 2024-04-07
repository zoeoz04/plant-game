/*let plant = {
    color: 'green',
    changeColor: function(newColor) {
        this.color = newColor;
        document.getElementById('plant').style.backgroundColor = newColor;
    }
};*/
/*var id = null;
function bugMove() {
    //var container = document.querySelector('.plant-area');
   // var containerRect = container.getBoundingClientRect();
    var bug = document.getElementById('Bug-animation');
    var pos =0;
    clearInterval(id);
    id = setInterval(frame,10);
    function frame(){
        if (pos ==350){
            clearInterval(id);
        }else{
            pos++;
            bug.style.top = pos + 'px';
            bug.style.left = pos + 'px';
        }

    }
    
}

// Animate the bug after a delay
//setTimeout(animateBug, 5000); // Delay of 3 seconds (3000 milliseconds)*/
var bugInterval = null;

function createBug() {
    var container = document.querySelector('.plant-area');
    var bug = document.createElement('div');
    bug.className = 'Bug-animation';
    bug.style.position = 'absolute'; // Set position to absolute
    bug.style.top = Math.random() * (container.clientHeight - 50) + 'px'; // Position bug randomly within plant area height
    bug.style.left = Math.random() * (container.clientWidth - 50) + 'px'; // Position bug randomly within plant area width
    bug.style.zIndex = '999'; // Set a high z-index to bring the bug to the front
    var bugImage = document.createElement('img');
    bugImage.src = 'ladybug.png'; // Path to your bug image
    bugImage.style.width = '50px'; // Set the width of the image
    bugImage.style.height = '50px'; // Set the height of the image
    bug.appendChild(bugImage);
    container.appendChild(bug);
    
    bug.addEventListener('click', function() {
        bug.style.display = 'none'; // Hide the clicked bug
    });
}

function startBugAnimation() {
    createBug(); // Create a bug immediately
    bugInterval = setInterval(createBug, 3000); // Create a bug every 5 seconds
}

function stopBugAnimation() {
    clearInterval(bugInterval);
}

document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    startBugAnimation();
});

function startCountdown() {
    let timeleft = 30;
    const countdown1 = document.getElementById('countdown');
    
    const interval = setInterval(() => {
        countdown1.textContent = "00:" + timeleft.toString().padStart(2, '0');
      
      timeleft--;
      if (timeleft < 0 ) {
        clearInterval(interval);
      }
    }, 1000);
  }


