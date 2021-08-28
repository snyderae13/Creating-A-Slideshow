const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
]

//Query for the Image selector

const image = document.querySelector('.image')


const bubbleZero = document.querySelector('#button-0');
const bubbleOne = document.querySelector('#button-1');
const bubbleTwo = document.querySelector('#button-2');
const bubbleThree = document.querySelector('#button-3');
const bubbleFour = document.querySelector('#button-4');
const bubbleFive = document.querySelector('#button-5');

//set a counter

let counter = 0;
// set the image src attribute to the first image in the array

image.setAttribute('src', images[counter])

// query for the right button element

const rightButton = document.querySelector('.next')

//initially set the first bubble to filled

bubbleZero.textContent = '●'

// create an event listener on the right button
rightButton.addEventListener('click', function(){
    // when the button is clicked, increment the counter by one
    counter++;
    // when the button is clicked, also check if the counter is less than or greater than the images array length
    // since arrays are 0 indexed we need to check for images.length - 1 , we -1 because .length only counts items starting at 1.
    if(counter <= images.length - 1){
        image.setAttribute('src', images[counter])
        fillInBubbles()
    }
   return;
})

// Query for the left button element
const leftButton = document.querySelector('.previous');
//create an event listener on the left button
leftButton.addEventListener('click', function(){
// if the counter is 0 we don't want to do anything
    if(counter===0){
        return;
    }else{
        counter--;
        image.setAttribute('src', images[counter])
        fillInBubbles()
    }
// if the counter is anything but 0 we watn to decrement the counter


})


// this is where we create the function for the fillInBubbles, setting it to be exactly the number of picture and when it will be filled or not

function fillInBubbles(){
    if(counter===0){
        bubbleZero.textContent = '●'
        bubbleOne.textContent = '○'
        bubbleTwo.textContent = '○'
        bubbleThree.textContent = '○'
        bubbleFour.textContent = '○'
        bubbleFive.textContent = '○'
    }else if (counter==1){
        bubbleZero.textContent = '○'
        bubbleOne.textContent = '●'
        bubbleTwo.textContent = '○'
        bubbleThree.textContent = '○'
        bubbleFour.textContent = '○'
        bubbleFive.textContent = '○'
    }else if (counter===2){
        bubbleZero.textContent = '○'
        bubbleOne.textContent = '○'
        bubbleTwo.textContent = '●'
        bubbleThree.textContent = '○'
        bubbleFour.textContent = '○'
        bubbleFive.textContent = '○'  
    }else if (counter===3){
        bubbleZero.textContent = '○'
        bubbleOne.textContent = '○'
        bubbleTwo.textContent = '○'
        bubbleThree.textContent = '●'
        bubbleFour.textContent = '○'
        bubbleFive.textContent = '○'
    }else if (counter===4){
        bubbleZero.textContent = '○'
        bubbleOne.textContent = '○'
        bubbleTwo.textContent = '○'
        bubbleThree.textContent = '○'
        bubbleFour.textContent = '●'
        bubbleFive.textContent = '○'
    }else if (counter===5){
        bubbleZero.textContent = '○'
        bubbleOne.textContent = '○'
        bubbleTwo.textContent = '○'
        bubbleThree.textContent = '○'
        bubbleFour.textContent = '○'
        bubbleFive.textContent = '●'
    }
}

//create event listeners for each bubble button to set the image src attribute when clicked

bubbleZero.addEventListener('click', function(){
    // set counter 
    counter = 0;
    image.setAttribute('src', images[counter]);
    fillInBubbles();
})
bubbleOne.addEventListener('click', function(){
    counter = 1;
    image.setAttribute('src', images[counter]);
    fillInBubbles();
})
bubbleTwo.addEventListener('click', function(){
    counter = 2;
    image.setAttribute('src', images[counter]);
    fillInBubbles();
})
bubbleThree.addEventListener('click', function(){
    counter = 3;
    image.setAttribute('src', images[counter]);
    fillInBubbles();
})
bubbleFour.addEventListener('click', function(){
    counter = 4;
    image.setAttribute('src', images[counter]);
    fillInBubbles();
})
bubbleFive.addEventListener('click', function(){
    counter = 5;
    image.setAttribute('src', images[counter]);    
    fillInBubbles();
})






