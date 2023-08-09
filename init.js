// Immediately Invoked Function Expression (IIFE, pronounced "iffy"). 
// IIFE is a function that is defined and then immediately called
(function(){
    const overworld = new Overworld({
        element: document.querySelector(".game-container")
    });
    overworld.init();
} ());