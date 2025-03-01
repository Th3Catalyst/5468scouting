document.addEventListener("DOMContentLoaded", function() {
    const minusButton = document.getElementById("minusL1");
    const plusButton = document.getElementById("plusL1");
    const counterDiv = document.getElementById("cvL1");

    let count = 0;

    minusButton.addEventListener("click", function() {
        if (count > 0){
            count--;
        }
        counterDiv.textContent = count;
    });

    plusButton.addEventListener("click", function() {
        count++;
        counterDiv.textContent = count;
    });
});
