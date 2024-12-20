//image resizing on same page

let count = 0;

document.querySelectorAll('.optionB img').forEach(graphic => {
    graphic.onclick = () =>{
        document.querySelector('.optionB-popup').style.display = 'block';
        document.querySelector('.optionB-popup img').src = graphic.getAttribute('src');
    }
});

        document.querySelector('.optionB-popup span').onclick = () =>{
        document.querySelector('.optionB-popup').style.display = 'none';
        }
        
let count = 0;
document.getdocumentbyid('.optionB img').onclick = function(){
    count += 1;
    document.getElementById('.counter') = count;
}
