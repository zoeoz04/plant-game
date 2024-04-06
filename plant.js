let plant = {
    color: 'green',
    changeColor: function(newColor) {
        this.color = newColor;
        document.getElementById('plant').style.backgroundColor = newColor;
    }
};

function generateBug() {
    const bug = document.createElement('div');
    bug.className = 'bug';
    bug.style.left = Math.random() * (plant.clientWidth - 20) + 'px';
    bug.style.top = Math.random() * (plant.clientHeight - 20) + 'px';
    document.getElementById('plant').appendChild(bug);

    // Remove bug when clicked
    bug.addEventListener('click', () => {
        document.getElementById('plant').removeChild(bug);
    });

    // Remove bug after a set time
    setTimeout(() => {
        document.getElementById('plant').removeChild(bug);
    }, 2000); // Adjust this time as needed
}

// Generate bugs every 5 seconds
setInterval(generateBug, 5000);

// Change plant color based on health
plant.changeColor('yellow'); // Example of changing color

// Timer for round
let timeLeft = 30; // seconds for Easy level
const timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
        clearInterval(timer);
        // End game logic here
    }
}, 1000); // Update every second

