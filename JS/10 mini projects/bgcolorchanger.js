const parent = document.getElementById('parent');

parent.addEventListener('click',(e) => {
    const color = e.target.style.backgroundColor;
    document.body.style.backgroundColor = color;
})