var menu=document.querySelector ('.menu');
var menulst=document.querySelector('.ul-list');

menu.addEventListener('click',()=>{
    menulst.classList.toggle('activemenu')
})

// model
var model=document.createElement('div');
model.id="model"
document.body.append(model)
var imgcard=document.querySelectorAll('.imgcard');

imgcard.forEach((imges) => {
    imges.addEventListener('click',()=>{
      
        model.classList.add('actvity')
        const img=document.createElement('img');
        img.src=imges.src
        img.id="img"
        while (model.firstChild) {
            model.removeChild(model.firstChild)
        }
        model.append(img)
    })
});

model.addEventListener('click',()=>{
    model.classList.remove('actvity')
})
