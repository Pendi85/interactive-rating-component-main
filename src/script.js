//HTML Element
const thankyoustate = document.getElementById("thank-you-state");
const ratingstate = document.getElementById("rating-state");
const rating = document.getElementsByClassName("rating")[0];
const submitbtn = document.getElementById("submit-value-btn");
const ratingValue = document.getElementsByClassName("rating-value");

//Color ratingValue
const bkRatingValueNotHover = "hsl(213, 19%, 18%)";
const colorRatingValueNotHover = "hsl(217, 12%, 63%)";
const bkRatingValueHover = "hsl(25, 97%, 53%)";
const colorRatingValueHover = "white";
const bkRatingValueActive = "hsl(217, 12%, 63%)";
const colorRatingValueActive = "white";


let valueSelected = -1;

/*If the user click on the submit button then 
the "thankyoustate" part hide and the "ratingstate" part show*/
submitbtn.onclick = function() {
    if(valueSelected != -1) {
        thankyoustate.style.display = "flex";
        ratingstate.style.display = "none";

        document.getElementById("rating-value-selected").innerHTML = valueSelected;
    } else {
        console.error("No value selected : You must select a value :)");
    }

}

//Store the value selected on the "ratingstate" part
function setValueSelected(value) {
    valueSelected = value;
    console.log(valueSelected);
}

//Define an event listener for each rating button to select a value
for(let i = 0; i < ratingValue.length; i++) {
    hoverRatingDiv(i);
    ratingValue[i].onclick = function() {
        ratingValue[i].style.backgroundColor = bkRatingValueActive;
        ratingValue[i].style.color = colorRatingValueActive;

        if(valueSelected != -1) {
            ratingValue[valueSelected - 1].style.backgroundColor = bkRatingValueNotHover;
            ratingValue[valueSelected - 1].style.color = colorRatingValueNotHover;
            hoverRatingDiv(valueSelected - 1);
        }

        setValueSelected(ratingValue[i].innerHTML);
    }
}

//Define an event listener when the user hover a value
function hoverRatingDiv(value) {
    ratingValue[value].onmouseenter = function() {
        ratingValue[value].style.backgroundColor = bkRatingValueHover;
        ratingValue[value].style.color = colorRatingValueHover;
        ratingValue[value].style.cursor = "pointer";
    }

    ratingValue[value].onmouseleave = function(event) {
        if(event.target.innerHTML != valueSelected) {
            ratingValue[value].style.backgroundColor = bkRatingValueNotHover;
            ratingValue[value].style.color = colorRatingValueNotHover;
            ratingValue[value].style.cursor = "none";
        } else {
            ratingValue[value].style.backgroundColor = bkRatingValueActive;
            ratingValue[value].style.color = colorRatingValueActive;
        }
    }
}