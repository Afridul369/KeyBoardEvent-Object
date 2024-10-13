let textarea = document.querySelector('textarea');

textarea.addEventListener('keydown',function(e){
    // console.log(e.key);
    
})
textarea.addEventListener('keypress',function(e){
    // console.log(e.key);
    
})
textarea.addEventListener('keyup',function(e){
    // console.log(e.key);
    
})
textarea.addEventListener('keydown',function(e){
    // console.log(e.keyCode);
    
})
textarea.addEventListener('keydown',function(e){
    // console.log(e.code);
    
})

// ==============shiftkey======

textarea.addEventListener('keyup',function(e){
    if (e.shiftKey) {
        console.log('Shift+'+ e.key); 
    }
})
// ========repeat========

textarea.addEventListener('keydown',function(e){
    if (e.repeat) {
        alert('do not repeat')  
    }  
})