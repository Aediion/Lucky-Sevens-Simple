
const getDie = () => Math.floor(Math.random() * 6) + 1;

"use strict"; 


function sum(iterable) {
    let total = 0;
    for (const value of iterable) total += value;
    return total;
}

function play() {
    const startingBet = Number(document.getElementById("startingBet").value);

    if (startingBet <= 0) {
        alert("Please bet a valid amount.");
        return;
    }

    let currency = startingBet;
    let rolls = 0;
    let maxWinnings = 0;
    let rollCountMax = 0;

    while (currency > 0) {
        ++rolls;
        const dies = [getDie(), getDie()];
        const diesTotal = sum(dies);
        if (diesTotal !== 7) {
            --currency;
            continue;
        }
        currency = currency + 4;

        if (currency > maxWinnings) {
            maxWinnings += currency - maxWinnings;
            rollCountMax = rolls;
        }
    }

    document.getElementById("results").style.display = "block";
    document.getElementById("currency").textContent = startingBet;
    document.getElementById("rolls").textContent = rolls;
    document.getElementById("maxWinnings").textContent = maxWinnings;
    document.getElementById("rollCountMax").textContent = rollCountMax;
}

document.getElementById("playButton").addEventListener("click", play, false);
