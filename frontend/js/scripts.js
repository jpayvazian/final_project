const gitBtn = document.getElementById('gitBtn'),
    instructionOverlay = document.getElementById('instructionOverlay'),
    joinOverlay = document.getElementById('joinOverlay'),
    hostOverlay = document.getElementById('hostOverlay'),
    waitOverlay = document.getElementById('waitOverlay'),
    hostBtn = document.getElementById('host'),
    joinBtn = document.getElementById('join'),
    enterBtn = document.getElementById('enter'),
    submitBtn = document.getElementById('submit'),
    hostBack = document.getElementById('hostBack'),
    joinBack = document.getElementById('joinBack');

//Hosts a game
hostBtn.addEventListener('click', function() {
    document.body.removeChild(instructionOverlay)
    hostOverlay.style.display = 'block'
    document.body.appendChild(hostOverlay)
})

//Goes back to instructions overlay from host overlay
hostBack.addEventListener('click', function() {
    document.body.removeChild(hostOverlay)
    document.body.appendChild(instructionOverlay)
})

//Joins a game
joinBtn.addEventListener('click', function() {
    document.body.removeChild(instructionOverlay)
    joinOverlay.style.display = 'block'
    document.body.appendChild(joinOverlay)
})

//Goes back to instructions overlay from join overlay
joinBack.addEventListener('click', function() {
    document.body.removeChild(joinOverlay)
    document.body.appendChild(instructionOverlay)
})

//User joining a game will need to enter a valid room key
enterBtn.addEventListener('click', function() {
    roomKey = document.getElementById('roomKey').value
    //Will need to check if there is an existing room with that specific key
    if (roomKey === "") {
        alert("Please enter a room key")
        return false
    }
    document.body.removeChild(joinOverlay)
    waitOverlay.style.display = 'block'
})

//User hosting a game will need to create a room key
submitBtn.addEventListener('click', function() {
    newKey = document.getElementById('newRoomKey').value
    //Will need to add room key to database
    if (newKey === "") {
        alert("Enter a valid room key")
        return false
    }
    document.body.removeChild(hostOverlay)
    waitOverlay.style.display = 'block'
})