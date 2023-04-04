const input = document.getElementById('input');
const grid = document.getElementsByClassName('grid')[0];

window.addEventListener('load',theme);

input.addEventListener('keydown',function (event){
    if(event.key === 'Enter'){
        loadimg();
    }
})

function loadimg() {

    removeimg();

    const url = 'https://api.unsplash.com/search/photos/?query='+input.value+'&per_page=24&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo';

    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        const imagenodes = [];
        for(let i=0;i<data.results.length;i++){
            imagenodes[i] = document.createElement('div');
            imagenodes[i].className = 'img';
            imagenodes[i].style.backgroundImage = 'url('+data.results[i].urls.raw+')';
            imagenodes[i].addEventListener('dblclick',()=>{
                window.open(data.results[i].links.download,'_blank');
            })
            grid.appendChild(imagenodes[i]);

        }
    })
 }

function removeimg() {
    grid.innerHTML ='';
}
function theme() {
    const date = new Date();
    const hour = date.getHours();

    if( hour >= 7 && hour <= 19){
        document.body.style.background = 'whitesmoke';
        document.body.style.color = 'black';

    }
   else{
    document.body.style.background = 'black';
        document.body.style.color = 'white';
   }
   
}
