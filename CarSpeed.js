

function checkSpeed(speed){

    points = Math.floor((speed - 70) / 5)
    if (speed < 75) console.log('Ok');  
        
    if (points >= 12)
        console.log('License Suspended')
    else
        console.log(points, 'Points')
}

checkSpeed(120)