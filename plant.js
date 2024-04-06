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
    bug.style.top = Math.random() * (container.clientHeight - 20) + 'px';
    bug.style.left = Math.random() * (container.clientWidth - 20) + 'px';
    container.appendChild(bug);
    
    bug.addEventListener('click', function() {
        bug.style.display = 'none'; // Hide the clicked bug
    });
}

function startBugAnimation() {
    createBug(); // Create a bug immediately
    bugInterval = setInterval(createBug, 5000); // Create a bug every 5 seconds
}

function stopBugAnimation() {
    clearInterval(bugInterval);
}

document.addEventListener('DOMContentLoaded', function() {
    startBugAnimation();
});



