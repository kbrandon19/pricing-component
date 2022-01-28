let slider = document.getElementById('slider');
let output = document.getElementById('price');





//outputting the slider value

//output.textContent = '$16.00';
output.textContent = "$" + slider.value + ".00";

slider.oninput =  function(){

    output.textContent = '$'+ slider.value +'.00';

}



//filling the range with color when thumb is moved
slider.addEventListener('input',function(){
   
    
    var x = ((slider.value - slider.min) / (slider.max - slider.min) * 100 ); 
    let color = `linear-gradient(90deg, rgb(165, 243, 235) ${x}%, rgb(165, 243, 235) ${x}%)`;


    slider.style.background = color;

    

});


