/*let plant = {
    color: 'green',
    changeColor: function(newColor) {
        this.color = newColor;
        document.getElementById('plant').style.backgroundColor = newColor;
    }
};*/

function animateBug() {
    var bug = document.getElementById('Bug-animation');
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos >= 550) {
            clearInterval(id);
            bug.style.display = 'none'; // Hide bug after animation
        } else {
            pos++;
            bug.style.top = pos + 'px';
            bug.style.left = pos + 'px';
        }
    }
}

// Animate the bug after a delay
setTimeout(animateBug, 5000); // Delay of 3 seconds (3000 milliseconds)