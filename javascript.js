document.addEventListener("DOMContentLoaded", function() {
    const minusButton = document.getElementById("minusL1");
    const plusButton = document.getElementById("plusL1");
    const counterDiv = document.getElementById("cvL1");
    const minusButton2 = document.getElementById("minusL2");
    const plusButton2 = document.getElementById("plusL2");
    const counterDiv2 = document.getElementById("cvL2");
    const minusButton3 = document.getElementById("minusL3");
    const plusButton3 = document.getElementById("plusL3");
    const counterDiv3 = document.getElementById("cvL3");
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;

    minusButton.addEventListener("click", function() {
        if (count1 > 0){
            count1--;
        }
        counterDiv.textContent = count1;
    });

    plusButton.addEventListener("click", function() {
        count1++;
        counterDiv.textContent = count1;
    });

    plusButton2.addEventListener("click", function(){
        count2++;
        counterDiv2.textContent = count2;
    });

    minusButton2.addEventListener("click", function(){
        if (count2 > 0){
            count2--;
        }
        counterDiv2.textContent = count2;
    });

    plusButton3.addEventListener("click", function(){
        count3++;
        counterDiv3.textContent = count3
    });

    minusButton3.addEventListener("click", function(){
        if (count3 > 0){
            count3--;
        }
        counterDiv3.textContent = count3;
    });

});

// nerd shi frfr