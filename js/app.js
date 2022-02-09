let slider = document.getElementById('slider');
let output = document.getElementById('price');
let pageView = document.getElementById('pageview');
let checkBox = document.getElementById('checkbox');
let discountTag = document.getElementById('discount-tag');
let defaultPageView = "100K pageviews";



//outputting the slider value so when the page loads the slider is on 16 by default
pageView.textContent = defaultPageView;
output.textContent = "$" + slider.value + ".00";

//allows the number to correspond to the position of the slide
slider.oninput =  function(){

    output.textContent = '$'+ slider.value +'.00';

    let tenK = '10K pageviews';
    let fiftyK = '50K pageviews';
    let hundredK = '100K pageviews';
    let fivehundredK = '500K pageviews';
    let oneMil = '1M pageviews';
    let zero = '0 Pageviews';
    let nun = ' ';

    if(slider.value == 8){
        pageView.textContent = tenK;
    }
    else if(slider.value == 0){
        pageView.textContent = zero;
    }
    else if(slider.value == 12){
        pageView.textContent = fiftyK;
    }
    else if(slider.value == 16){
        pageView.textContent = hundredK;
    }
    else if(slider.value == 24){
        pageView.textContent = fivehundredK;
    }
    else if(slider.value == 36){
        pageView.textContent = oneMil;
    }
    else{
        pageView.textContent = nun;
    }

    

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


//toggle function for the discount tag
checkBox.onclick = () => {
    if (discountTag.style.display === "block") {
        discountTag.style.display = "none";
      } else {
        discountTag.style.display = "block";
      }
}



