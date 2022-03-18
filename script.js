
const olho = document.querySelector('.olho');

function mousedown(){
    document.querySelector('#senha').type = 'text';
}
function mouseup(){
    document.querySelector('#senha').type = 'password';
}
function mousemove(){
    document.querySelector('#senha').type = 'password'
}

olho.addEventListener('mousedown', mousedown)
olho.addEventListener('mouseup', mouseup)
olho.addEventListener('mousemove', mousemove)
