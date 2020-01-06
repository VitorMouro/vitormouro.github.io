var ball = document.createElement('div');
var rect = document.createElement('div');
var wrapper = document.createElement('div');
ball.setAttribute('id', 'ball');
rect.setAttribute('id', 'rect');
wrapper.setAttribute('id', 'wrapper');
wrapper.appendChild(ball);
wrapper.appendChild(rect);
document.body.appendChild(wrapper);
let dt, lastTime = 0;
let width = 0, height = 0;
requestAnimationFrame(loop)

function loop(timestamp) {
    dt = timestamp - lastTime;
    lastTime = timestamp;

    ball.style.width = width.toString() + 'px';
    ball.style.height = height.toString() + 'px';
    width += Math.round(dt) * window.innerHeight/500;
    height += Math.round(dt) * window.innerHeight/500;

    if(width > window.innerWidth*1.5 && height > window.innerHeight*1.5){
        deleteAll();
        unfade(document.getElementById('container'));
        return;
    }

    // ball.style.width = '50px';
    // ball.style.height = '50px';
    requestAnimationFrame(loop);
}

function deleteAll () {
    document.body.removeChild(wrapper);
}

function unfade(element) {
    element.style.opacity = 0;
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 50);
}
