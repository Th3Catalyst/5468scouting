console.log('working, api test v1.0');
document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

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

    minusButton.addEventListener("click", (event) => {
        if (count1 > 0) {
            count1--;
        }
        counterDiv.textContent = count1;
    });

    plusButton.addEventListener("click", (event) => {
        count1++;
        counterDiv.textContent = count1;
    });

    minusButton2.addEventListener("click", (event) => {
        if (count2 > 0) {
            count2--;
        }
        counterDiv2.textContent = count2;
    });

    plusButton2.addEventListener("click", (event) => {
        count2++;
        counterDiv2.textContent = count2;
    });

    minusButton3.addEventListener("click", (event) => {
        if (count3 > 0) {
            count3--;
        }
        counterDiv3.textContent = count3;
    });

    plusButton3.addEventListener("click", (event) => {
        count3++;
        counterDiv3.textContent = count3;
    });

    minusButton4.addEventListener("click", (event) => {
        if (count4 > 0) {
            count4--;
        }
        counterDiv4.textContent = count4;
    });

    plusButton4.addEventListener("click", (event) => {
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

    minusButtonN.addEventListener("click", (event) => {
        if (countN > 0) {
            countN--;
        }
        counterDivN.textContent = countN;
    });

    plusButtonN.addEventListener("click", (event) => {
        countN++;
        counterDivN.textContent = countN;
    });

    minusButtonS.addEventListener("click", (event) => {
        if (countS > 0) {
            countS--;
        }
        counterDivS.textContent = countS;
    });

    plusButtonS.addEventListener("click", (event) => {
        countS++;
        counterDivS.textContent = countS;
    });

    minusButtonP.addEventListener("click", (event) => {
        if (countP > 0) {
            countP--;
        }
        counterDivP.textContent = countP;
    });

    plusButtonP.addEventListener("click", (event) => {
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

    //TELEOP


    const TminusButton = document.getElementById("TminusL1");
    const TplusButton = document.getElementById("TplusL1");
    const TcounterDiv = document.getElementById("TcvL1");

    const TminusButton2 = document.getElementById("TminusL2");
    const TplusButton2 = document.getElementById("TplusL2");
    const TcounterDiv2 = document.getElementById("TcvL2");

    const TminusButton3 = document.getElementById("TminusL3");
    const TplusButton3 = document.getElementById("TplusL3");
    const TcounterDiv3 = document.getElementById("TcvL3");

    const TminusButton4 = document.getElementById("TminusL4");
    const TplusButton4 = document.getElementById("TplusL4");
    const TcounterDiv4 = document.getElementById("TcvL4");

    let Tcount1 = 0;
    let Tcount2 = 0;
    let Tcount3 = 0;
    let Tcount4 = 0;

    TminusButton.addEventListener("click", (event) => {
        if (Tcount1 > 0) {
            Tcount1--;
        }
        TcounterDiv.textContent = Tcount1;
    });

    TplusButton.addEventListener("click", (event) => {
        Tcount1++;
        TcounterDiv.textContent = Tcount1;
    });

    TminusButton2.addEventListener("click", (event) => {
        if (Tcount2 > 0) {
            Tcount2--;
        }
        TcounterDiv2.textContent = Tcount2;
    });

    TplusButton2.addEventListener("click", (event) => {
        Tcount2++;
        TcounterDiv2.textContent = Tcount2;
    });

    TminusButton3.addEventListener("click", (event) => {
        if (Tcount3 > 0) {
            Tcount3--;
        }
        TcounterDiv3.textContent = Tcount3;
    });

    TplusButton3.addEventListener("click", (event) => {
        Tcount3++;
        TcounterDiv3.textContent = Tcount3;
    });

    TminusButton4.addEventListener("click", (event) => {
        if (Tcount4 > 0) {
            Tcount4--;
        }
        TcounterDiv4.textContent = Tcount4;
    });

    TplusButton4.addEventListener("click", (event) => {
        Tcount4++;
        TcounterDiv4.textContent = Tcount4;
    });

    // Algae counters
    const TminusButtonN = document.getElementById("TminusN");
    const TplusButtonN = document.getElementById("TplusN");
    const TcounterDivN = document.getElementById("TcvN");

    const TminusButtonS = document.getElementById("TminusS");
    const TplusButtonS = document.getElementById("TplusS");
    const TcounterDivS = document.getElementById("TcvS");

    const TminusButtonP = document.getElementById("TminusP");
    const TplusButtonP = document.getElementById("TplusP");
    const TcounterDivP = document.getElementById("TcvP");

    let TcountN = 0;
    let TcountS = 0;
    let TcountP = 0;

    TminusButtonN.addEventListener("click", (event) => {
        if (TcountN > 0) {
            TcountN--;
        }
        TcounterDivN.textContent = TcountN;
    });

    TplusButtonN.addEventListener("click", (event) => {
        TcountN++;
        TcounterDivN.textContent = TcountN;
    });

    TminusButtonS.addEventListener("click", (event) => {
        if (TcountS > 0) {
            TcountS--;
        }
        TcounterDivS.textContent = TcountS;
    });

    TplusButtonS.addEventListener("click", (event) => {
        TcountS++;
        TcounterDivS.textContent = TcountS;
    });

    TminusButtonP.addEventListener("click", (event) => {
        if (TcountP > 0) {
            TcountP--;
        }
        TcounterDivP.textContent = TcountP;
    });

    TplusButtonP.addEventListener("click", (event) => {
        TcountP++;
        TcounterDivP.textContent = TcountP;
    });

    // Mobile increments
    const TminusButtonM = document.getElementById("TminusL1M");
    const TplusButtonM = document.getElementById("TplusL1M");
    const TcounterDivM = document.getElementById("TcvL1M");

    const TminusButton2M = document.getElementById("TminusL2M");
    const TplusButton2M = document.getElementById("TplusL2M");
    const TcounterDiv2M = document.getElementById("TcvL2M");

    const TminusButton3M = document.getElementById("TminusL3M");
    const TplusButton3M = document.getElementById("TplusL3M");
    const TcounterDiv3M = document.getElementById("TcvL3M");

    const TminusButton4M = document.getElementById("TminusL4M");
    const TplusButton4M = document.getElementById("TplusL4M");
    const TcounterDiv4M = document.getElementById("TcvL4M");

    let Tcount1M = 0;
    let Tcount2M = 0;
    let Tcount3M = 0;
    let Tcount4M = 0;

    TminusButtonM.addEventListener("click", (event) => {
        event.preventDefault();
        if (Tcount1M > 0) {
            Tcount1M--;
        }
        TcounterDivM.innerHTML = Tcount1M;
        console.log(Tcount1M);
    });

    TplusButtonM.addEventListener("click", (event) => {
        event.preventDefault();
        Tcount1M++;
        TcounterDivM.innerHTML = Tcount1M;
        console.log(Tcount1M);
    });

    TplusButton2M.addEventListener("click", (event) => {
        event.preventDefault();
        Tcount2M++;
        TcounterDiv2M.innerHTML = Tcount2M;
    });

    TminusButton2M.addEventListener("click", (event) => {
        event.preventDefault();
        if (Tcount2M > 0) {
            Tcount2M--;
        }
        TcounterDiv2M.innerHTML = Tcount2M;
    });

    TplusButton3M.addEventListener("click", (event) => {
        event.preventDefault();
        Tcount3M++;
        TcounterDiv3M.innerHTML = Tcount3M;
    });

    TminusButton3M.addEventListener("click", (event) => {
        event.preventDefault();
        if (Tcount3M > 0) {
            Tcount3M--;
        }
        TcounterDiv3M.innerHTML = Tcount3M;
    });

    TplusButton4M.addEventListener("click", (event) => {
        event.preventDefault();
        Tcount4M++;
        TcounterDiv4M.innerHTML = Tcount4M;
    });

    TminusButton4M.addEventListener("click", (event) => {
        event.preventDefault();
        if (Tcount4M > 0) {
            Tcount4M--;
        }
        TcounterDiv4M.innerHTML = Tcount4M;
    });

    // Mobile increments for algae
    const TminusButtonNM = document.getElementById("TminusNM");
    const TplusButtonNM = document.getElementById("TplusNM");
    const TcounterDivNM = document.getElementById("TcvNM");

    const TminusButtonSM = document.getElementById("TminusSM");
    const TplusButtonSM = document.getElementById("TplusSM");
    const TcounterDivSM = document.getElementById("TcvSM");

    const TminusButtonPM = document.getElementById("TminusPM");
    const TplusButtonPM = document.getElementById("TplusPM");
    const TcounterDivPM = document.getElementById("TcvPM");

    let TcountNM = 0;
    let TcountSM = 0;
    let TcountPM = 0;

    TminusButtonNM.addEventListener("click", (event) => {
        event.preventDefault();
        if (TcountNM > 0) {
            TcountNM--;
        }
        TcounterDivNM.innerHTML = TcountNM;
        console.log(TcountNM);
    });

    TplusButtonNM.addEventListener("click", (event) => {
        event.preventDefault();
        TcountNM++;
        TcounterDivNM.innerHTML = TcountNM;
        console.log(TcountNM);
    });

    TplusButtonSM.addEventListener("click", (event) => {
        event.preventDefault();
        TcountSM++;
        TcounterDivSM.innerHTML = TcountSM;
    });

    TminusButtonSM.addEventListener("click", (event) => {
        event.preventDefault();
        if (TcountSM > 0) {
            TcountSM--;
        }
        TcounterDivSM.innerHTML = TcountSM;
    });

    TplusButtonPM.addEventListener("click", (event) => {
        event.preventDefault();
        TcountPM++;
        TcounterDivPM.innerHTML = TcountPM;
    });

    TminusButtonPM.addEventListener("click", (event) => {
        event.preventDefault();
        if (TcountPM > 0) {
            TcountPM--;
        }
        TcounterDivPM.innerHTML = TcountPM;
    });

    submitButton.addEventListener("click", (event) => {
        const startPos = document.querySelector('input[name="startPos"]:checked');
        const leavePos = document.querySelector('input[name="leave"]:checked');
        const finalStatus = document.querySelector('input[name="status"]:checked');
        const coralPickup = document.querySelector('input[name="coralPickup"]:checked');
        const algaePickup = document.querySelector('input[name="algaePickup"]:checked');
        const coopertition = document.querySelector('input[name="coopertition"]:checked');
        const driverSkill = document.querySelector('input[name="skill"]:checked');
        const defense = document.querySelector('input[name="defense"]:checked');
        const speed = document.querySelector('input[name="speed"]:checked');
        const notes = document.getElementById("notes").value;

        const assessments = [];
        document.querySelectorAll('input[name="assess"]:checked').forEach((checkbox) => {
            assessments.push(checkbox.id);
        });

        const data = {
            counter1: count1 ? count1.value : count1M,
            counter2: count2 ? count2.value : count2M,
            counter3: count3 ? count3.value : count3M,
            counter4: count4 ? count4.value : count4M,
            counterN: countN ? countN.value : countNM,
            counterS: countS ? countS.value : countSM,
            counterP: countP ? countP.value : countPM,
            startPos: startPos ? startPos.value : null,
            leavePos: leavePos ? leavePos.value : null,
            finalStatus: finalStatus ? finalStatus.value : null,
            coralPickup: coralPickup ? coralPickup.value : null,
            algaePickup: algaePickup ? algaePickup.value : null,
            coopertition: coopertition ? coopertition.value : null,
            driverSkill: driverSkill ? driverSkill.value : null,
            defense: defense ? defense.value : null,
            speed: speed ? speed.value : null,
            assessments: assessments.join(', '),
            notes: notes
        };
        //i love apis
        //NO TOUCHIES UR GONNA MESS IT UP
        fetch('https://script.google.com/macros/s/AKfycbyJFv9cfYzMDKPe0Z-0z1Rl4Q-g74HdkET0v41lTMHW4_ubirnZWM_cliOIQYFFVgPYsg/exec', {
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
