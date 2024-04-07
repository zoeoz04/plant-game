
var bugInterval = null;
var count = 0;
var brownLeaves=0;
var bugkill =0;
function createBug() { 
    var bugBrownLimit = 2; // Number of bugs per leaf color change
    
    // Calculate the number of leaves to turn brown based on bugCounter
    var leavesToBrown = Math.floor(count / bugBrownLimit) + (0);
    // Change color of each leaf to green
    for (var i = 1; i <= 12; i++) {
        document.getElementById('L' + i).style.backgroundColor = '#008000'; // Green color
    }
   
    // Change color of the specified number of leaves to brown
    for (var j = 1; j <= leavesToBrown; j++) {
        document.getElementById('L' + j).style.backgroundColor = '#513918'; // Brown color
        brownLeaves++;
    }

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
    count ++;
    bug.addEventListener('click', function() {
        bug.style.display = 'none'; // Hide the clicked bug
        count--;
        bugkill ++;
        const initBugNum = document.getElementById('bug-number');
        initBugNum.textContent = bugkill.toString();
    });
  
}

function startBugAnimation() {
    createBug(); // Create a bug immediately
    bugInterval = setInterval(createBug, 2000); // Create a bug every 5 seconds
}

function stopBugAnimation() {
    clearInterval(bugInterval);
}

/*
document.addEventListener('DOMContentLoaded', function() {
    startCountdown();
    startBugAnimation();
    const initBugNum = document.getElementById('bug-number');
    initBugNum.textContent = bugkill.toString();
});
*/

function startCountdown() {
    let timeleft = 30;
    const countdown1 = document.getElementById('countdown');
    
    const interval = setInterval(() => {
        countdown1.textContent = "00:" + timeleft.toString().padStart(2, '0');
      
      timeleft--;
      if (timeleft < 0 ) {
        clearInterval(interval);
        stopBugAnimation();
        showScore();
      }
    }, 1000);
    timerEnd();
  }

function startGame() {
    var start = document.getElementById("start");
    start.style.display = "none";
    startBugAnimation();
    startCountdown();
    
}

function showScore(){
    var score = bugkill - (brownLeaves);
    if(score < 0 ){
        score = 0;
    }
    
    document.getElementById('scoreDisplay').innerText = 'Your Score: ' + score;
    document.getElementById('scorePopUp').style.display = "block";
}
