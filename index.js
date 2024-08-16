function toggleBulb() {
        
    let yellow = 'rgb(255, 255, 0)';
    let gray = 'rgb(128, 128, 128)';
    
    var currentColor = document.getElementById('bakgrunn').style.backgroundColor;
    var NewColor;

    if (currentColor === gray) {
      NewColor = yellow;
      document.getElementById('message').textContent = "Lyset er på!";
    } else {
      NewColor = gray;
      document.getElementById('message').textContent = "Lyset er av!";
    }

    document.getElementById('bakgrunn').style.backgroundColor = NewColor;
    
}

// function toggleSwitch() {
//     var currentState = document.getElementById('knapp').textContent;
//     var newState;
    
//     if (currentState === "Aktiver") {
//         newState = "Passiv";
//     } else {
//     newState = "Aktiver";
//     }
    
//     document.getElementById('knapp').textContent = newState;
    
//     toggleBulb();
// }