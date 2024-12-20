let count = 0;

document.querySelectorAll('.optionB img').forEach(graphic => {
    graphic.onclick = () =>{
        document.querySelector('.optionB-popup').style.display = 'block';
        document.querySelector('.optionB-popup img').src = graphic.getAttribute('src');
    }
});

        document.querySelector('.optionB-popup span').onclick = () =>{
        document.querySelector('.optionB-popup').style.display = 'none';
        count+=1;
        document.getElementById("counterlabel-1").innerHTML = count;
        }

/*document.querySelector('.optionB').onclick = function(){

    count+=1;
    document.getElementById("counterlabel").innerHTML = count;
}*/
