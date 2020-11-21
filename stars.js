

function showStars(row){

    for(i=1; i<=row;i++){
        pattern = ''
        for(j = 0;j <i ; j++ )
        pattern += '*'
    console.log(pattern )
    }

}

showStars(5)