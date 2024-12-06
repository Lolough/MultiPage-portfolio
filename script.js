//image resizing on same page

document.querySelectorAll('.optionB img').forEach(image => {
    image.onclick = () =>{
        document.querySelector('.optionB-popup').style.display = 'block';
        document.querySelector('.optionB-popup img').src = image.getAttribute('src');
    }
});

document.querySelector('.optionB-popup span').onclick = () =>{
    document.querySelector('.optionB img').style.display = 'none';
}
