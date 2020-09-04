
function rpsOnclick (yourChoise) {
    var humanChoise, computerChoise;
    humanChoise = yourChoise.id;
    
    computerChoise = numberToChoise( randToRpsInt() );
    
    var results = decisionToWinner(humanChoise, computerChoise);
    
    var message = finalMsg(results) // {'You won', 'color':'green'}
     
    rpsFrontend(humanChoise, computerChoise, message)
}

function randToRpsInt(){
    return Math.floor( Math.random() *3 );
}
function numberToChoise (number){
    return ['rock', 'paper', 'scissors'][number];
}

//decision to winner 
function decisionToWinner(yourChoise, compChoise) {
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0}, 
        'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': { 'paper': 1, 'scissors': 0.5, 'rock': 0}
    };
    var yourScore = rpsDatabase[yourChoise][compChoise];
    var computerScore = rpsDatabase [compChoise][yourChoise];
    
    return [yourScore, computerScore]
    
}


//final message of won or lost or tie/draw
function finalMsg ( [yourScore, computerScore]) {
    if(yourScore === 0){
        return {'message': 'You Lost', 'color': 'red' };
    }
    else if (yourScore === 1) {
        return { 'message': 'You won', 'color': 'green'}
    }
    else{
        return { 'message': 'TIE', 'color': 'yellow'}
    }
}

//fronten showing the final result
function rpsFrontend (humanImgChoise, computerImgChoise, message) {
    var rspImgDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    
    //let remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement('div');
    var compDiv = document.createElement('div');
    var msgDiv = document.createElement('div');
    
    humanDiv.innerHTML = " <img src= '" + rspImgDatabase[humanImgChoise] + "' style='box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.8)' >"
    
    msgDiv.innerHTML = " <h1 style='color: " + message['color'] + "; font-size: 30px; padding: 20px; '>" + message['message'] + "</h1>"
    
    compDiv.innerHTML = " <img src= '" + rspImgDatabase[computerImgChoise] + "' style='box-shadow: 0px 0px 25px rgba(0, 8, 255, 0.8)' >"
    
    document.getElementById('flex-box-img-div').appendChild(humanDiv);
    document.getElementById('flex-box-img-div').appendChild(msgDiv)
    document.getElementById('flex-box-img-div').appendChild(compDiv)
    
}













