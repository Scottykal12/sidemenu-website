let blob = document.getElementById('blob')

// follow the mouse 
const onMouseMove = (e) => {
    blob.style.left = e.pageX + 'px';
    blob.style.top = e.pageY + 'px';
    blob.style.transitionDuration = '.2s'
}

document.addEventListener('mousemove', onMouseMove);