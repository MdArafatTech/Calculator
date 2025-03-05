// let displayResult = parseFloat("");

// function powerOn() {
//     displayResult = 0;
//     document.getElementById("display").innerHTML= displayResult;
// }
// function powerOff() {
//     displayResult = ("");
//     document.getElementById("display").innerHTML= displayResult;
// }


// let display = document.getElementById("display");
// let buttons = document.querySelectorAll(".calc-first button");
// let powerOnFlag = false;

// document.getElementById("powerOn").addEventListener("click", () => {
//     display.innerText = "";
//     powerOnFlag = true;
// });

// document.getElementById("powerOff").addEventListener("click", () => {
//     display.innerText = "";
//     powerOnFlag = false;
// });

// document.getElementById("Delete").addEventListener("click", () => {
//     if (powerOnFlag) {
//         display.innerText = display.innerText.slice(0, -1);
//     }
// });

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         if (powerOnFlag) {
//             let value = button.innerText;
//             if (value === "=") {
//                 try {
//                     display.innerText = eval(display.innerText);
//                 } catch {
//                     display.innerText = "Error";
//                 }
//             } else {
//                 display.innerText += value;
//             }
//         }
//     });
// });
let display = document.getElementById("display");
let buttons = document.querySelectorAll(".calc-first button");
let powerOnFlag = false;

document.getElementById("powerOn").addEventListener("click", () => {
    display.value = "";
    powerOnFlag = true;
});

document.getElementById("powerOff").addEventListener("click", () => {
    display.value = "";
    powerOnFlag = false;
});

document.getElementById("Delete").addEventListener("click", () => {
    if (powerOnFlag) {
        display.value = display.value.slice(0, -1);
    }
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (powerOnFlag) {
            let value = button.innerText;
            if (value === "=") {
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = "Error";
                }
            } else {
                display.value += value;
            }
        }
    });
});
