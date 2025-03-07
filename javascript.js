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

    const minusButton4 = document.getElementById("minusL4");
    const plusButton4 = document.getElementById("plusL4");
    const counterDiv4 = document.getElementById("cvL4");

    const submitButton = document.getElementById("submit");

    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let count4 = 0;

    minusButton.addEventListener("click", function() {
        if (count1 > 0) {
            count1--;
        }
        counterDiv.textContent = count1;
    });

    plusButton.addEventListener("click", function() {
        count1++;
        counterDiv.textContent = count1;
    });

    minusButton2.addEventListener("click", function() {
        if (count2 > 0) {
            count2--;
        }
        counterDiv2.textContent = count2;
    });

    plusButton2.addEventListener("click", function() {
        count2++;
        counterDiv2.textContent = count2;
    });

    minusButton3.addEventListener("click", function() {
        if (count3 > 0) {
            count3--;
        }
        counterDiv3.textContent = count3;
    });

    plusButton3.addEventListener("click", function() {
        count3++;
        counterDiv3.textContent = count3;
    });

    minusButton4.addEventListener("click", function() {
        if (count4 > 0) {
            count4--;
        }
        counterDiv4.textContent = count4;
    });

    plusButton4.addEventListener("click", function() {
        count4++;
        counterDiv4.textContent = count4;
    });

    // Algae counters
    const minusButtonN = document.getElementById("minusN");
    const plusButtonN = document.getElementById("plusN");
    const counterDivN = document.getElementById("cvN");

    const minusButtonS = document.getElementById("minusS");
    const plusButtonS = document.getElementById("plusS");
    const counterDivS = document.getElementById("cvS");

    const minusButtonP = document.getElementById("minusP");
    const plusButtonP = document.getElementById("plusP");
    const counterDivP = document.getElementById("cvP");

    let countN = 0;
    let countS = 0;
    let countP = 0;

    minusButtonN.addEventListener("click", function() {
        if (countN > 0) {
            countN--;
        }
        counterDivN.textContent = countN;
    });

    plusButtonN.addEventListener("click", function() {
        countN++;
        counterDivN.textContent = countN;
    });

    minusButtonS.addEventListener("click", function() {
        if (countS > 0) {
            countS--;
        }
        counterDivS.textContent = countS;
    });

    plusButtonS.addEventListener("click", function() {
        countS++;
        counterDivS.textContent = countS;
    });

    minusButtonP.addEventListener("click", function() {
        if (countP > 0) {
            countP--;
        }
        counterDivP.textContent = countP;
    });

    plusButtonP.addEventListener("click", function() {
        countP++;
        counterDivP.textContent = countP;
    });

    // Mobile increments
    const minusButtonM = document.getElementById("minusL1M");
    const plusButtonM = document.getElementById("plusL1M");
    const counterDivM = document.getElementById("cvL1M");

    const minusButton2M = document.getElementById("minusL2M");
    const plusButton2M = document.getElementById("plusL2M");
    const counterDiv2M = document.getElementById("cvL2M");

    const minusButton3M = document.getElementById("minusL3M");
    const plusButton3M = document.getElementById("plusL3M");
    const counterDiv3M = document.getElementById("cvL3M");

    const minusButton4M = document.getElementById("minusL4M");
    const plusButton4M = document.getElementById("plusL4M");
    const counterDiv4M = document.getElementById("cvL4M");

    let count1M = 0;
    let count2M = 0;
    let count3M = 0;
    let count4M = 0;

    minusButtonM.addEventListener("click", (event) => {
        event.preventDefault();
        if (count1M > 0) {
            count1M--;
        }
        counterDivM.innerHTML = count1M;
        console.log(count1M);
    });

    plusButtonM.addEventListener("click", (event) => {
        event.preventDefault();
        count1M++;
        counterDivM.innerHTML = count1M;
        console.log(count1M);
    });

    plusButton2M.addEventListener("click", (event) => {
        event.preventDefault();
        count2M++;
        counterDiv2M.innerHTML = count2M;
    });

    minusButton2M.addEventListener("click", (event) => {
        event.preventDefault();
        if (count2M > 0) {
            count2M--;
        }
        counterDiv2M.innerHTML = count2M;
    });

    plusButton3M.addEventListener("click", (event) => {
        event.preventDefault();
        count3M++;
        counterDiv3M.innerHTML = count3M;
    });

    minusButton3M.addEventListener("click", (event) => {
        event.preventDefault();
        if (count3M > 0) {
            count3M--;
        }
        counterDiv3M.innerHTML = count3M;
    });

    plusButton4M.addEventListener("click", (event) => {
        event.preventDefault();
        count4M++;
        counterDiv4M.innerHTML = count4M;
    });

    minusButton4M.addEventListener("click", (event) => {
        event.preventDefault();
        if (count4M > 0) {
            count4M--;
        }
        counterDiv4M.innerHTML = count4M;
    });

    // Mobile increments for algae
    const minusButtonNM = document.getElementById("minusNM");
    const plusButtonNM = document.getElementById("plusNM");
    const counterDivNM = document.getElementById("cvNM");

    const minusButtonSM = document.getElementById("minusSM");
    const plusButtonSM = document.getElementById("plusSM");
    const counterDivSM = document.getElementById("cvSM");

    const minusButtonPM = document.getElementById("minusPM");
    const plusButtonPM = document.getElementById("plusPM");
    const counterDivPM = document.getElementById("cvPM");

    let countNM = 0;
    let countSM = 0;
    let countPM = 0;

    minusButtonNM.addEventListener("click", (event) => {
        event.preventDefault();
        if (countNM > 0) {
            countNM--;
        }
        counterDivNM.innerHTML = countNM;
        console.log(countNM);
    });

    plusButtonNM.addEventListener("click", (event) => {
        event.preventDefault();
        countNM++;
        counterDivNM.innerHTML = countNM;
        console.log(countNM);
    });

    plusButtonSM.addEventListener("click", (event) => {
        event.preventDefault();
        countSM++;
        counterDivSM.innerHTML = countSM;
    });

    minusButtonSM.addEventListener("click", (event) => {
        event.preventDefault();
        if (countSM > 0) {
            countSM--;
        }
        counterDivSM.innerHTML = countSM;
    });

    plusButtonPM.addEventListener("click", (event) => {
        event.preventDefault();
        countPM++;
        counterDivPM.innerHTML = countPM;
    });

    minusButtonPM.addEventListener("click", (event) => {
        event.preventDefault();
        if (countPM > 0) {
            countPM--;
        }
        counterDivPM.innerHTML = countPM;
    });

    submitButton.addEventListener("click", function() {
        const startPos = document.querySelector('input[name="startPos"]:checked');
        const leavePos = document.querySelector('input[name="leave"]:checked');

        const data = {
            counter1: count1,
            counter2: count2,
            counter3: count3,
            counter4: count4,
            counterN: countN,
            counterS: countS,
            counterP: countP,
            counter1M: count1M,
            counter2M: count2M,
            counter3M: count3M,
            counter4M: count4M,
            counterNM: countNM,
            counterSM: countSM,
            counterPM: countPM,
            startPos: startPos ? startPos.value : null,
            leavePos: leavePos ? leavePos.value : null
        };
        //i love apis
        //NO TOUCHIES UR GONNA MESS IT UP
        fetch('https://script.google.com/macros/s/AKfycbwzmnWC50BDLvRv7LJufgSnd6GN-6pVpqD-SQJsQQO1vuxHCMWUHYiWQaREOhZSTYxI0w/exec', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });
});
