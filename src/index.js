console.log('%c HI', 'color: firebrick')

function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 

    fetch(imgURL)
    .then(res => res.json)
    .then((imgObj) => {
        imgObj.message.forEach(img => addImage(img)) 
    } )

}

function addImage(dogURL){
    let container = document.querySelector('#dog-image-container');
    let newImg = document.createElement('img');
    newImg.src = dogURL; 

    container.append(newImg);


}   