let billAmount = document.getElementById("billAmount");
let tipPer = document.getElementById("percentageTip");

function calculate() {
    if (billAmount.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
    } else if (tipPer.value === "") {
        document.getElementById("errorMessage").textContent = "Please Enter a Valid Input";
    } else {
        let x = parseInt(billAmount.value);
        let v = parseInt(tipPer.value);
        let m = ((v / 100) * x);
        document.getElementById("tipAmount").value = m;
        document.getElementById("totalAmount").value = (m + x);
        document.getElementById("errorMessage").textContent = "";
    }
}