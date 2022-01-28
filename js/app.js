let slider = document.getElementById('slider');
let output = document.getElementById('price');





//outputting the slider value so when the page loads the slider is on 16 by default
output.textContent = "$" + slider.value + ".00";

slider.oninput =  function(){

    output.textContent = '$'+ slider.value +'.00';

}



//filling the range with color when thumb is moved
slider.addEventListener('input',function(){
   
    let x = Number(slider.value); 
    let max = Number(slider.max);
    let changeValue = x/max * 100; 

    //let color = `linear-gradient(90deg, rgb(165, 243, 235) ${x}%, rgb(165, 243, 235) ${x}%)`;
    let color = `linear-gradient(90deg, hsl(174, 76%, 80%) 0% ${changeValue}%, rgb(234, 238, 251) ${changeValue}% 100%)`;


    slider.style.background = color;

    

});


