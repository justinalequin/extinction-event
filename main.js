const order = document.querySelectorAll('#ord');


 for (const position of order){
     position.addEventListener('click', function(){
         position.style.textDecoration = 'line-through';
     });
 }

const unOrd = document.querySelectorAll('#unOrd');

 for (const pos of unOrd){
     pos.addEventListener('click', function(){
         pos.style.opacity = '0';
     });
 }

const images = document.querySelectorAll('img')

 for (const image of images){
     image.addEventListener('click', function(){
         image.style.transition = 'all 2s';
         image.style.width = 0;
     })
 }

const button = document.querySelector('#destroy-all')

button.addEventListener('click', function(){
    
    for (const position of order){

            position.style.textDecoration = 'line-through';
    }

    for (const pos of unOrd){
    
            pos.style.opacity = '0';
    }

    for (const image of images){
  
            image.style.transition = 'all 2s';
            image.style.width = 0;

    }

})