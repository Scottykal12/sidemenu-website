let blob = document.getElementById('blob')

const onMouseMove = (e) => {
    blob.style.left = e.pageX + 'px';
    blob.style.top = e.pageY + 'px';
    blob.style.transitionDuration = '.1s'
}

document.addEventListener('mousemove', onMouseMove);