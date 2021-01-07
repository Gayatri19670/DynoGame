document.onkeydown = function(e) {
    console.log("Key code is", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animationDino');
        setTimeout(() => {
            dino.classList.remove('animationDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputerStyle(dino, null).getPropertyValue('left'))
        dino.style.left = dinoX + 112 + "px";
    }
}



setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputerStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputerStyle(dino, null).getPropertyValue('top'));
    ox = parseInt(window.getComputerStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputerStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 93 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni');
    }





}, 100);