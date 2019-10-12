//Caculate Tip
function caculateTip() {
    // debugger
    //Get value bill
    var billAmt = document.getElementById("billamt").value;
    console.log('billAmnt===>>>', billAmt);

    //Get value service
    var serviceQual = document.getElementById("serviceQual").value;
    console.log('serviceQual===>>>', serviceQual);

    //Get people sharing
    var numOfPeople = document.getElementById("peopleamt").value;
    console.log('numOfPeople===>>>', numOfPeople)

    //Validate input
    if (billAmt === "" | serviceQual == 0) {
        alert("Please enter values Bill Amount or services");
        return;
    }
    // else if (serviceQual == 0) {
    //     alert("Please choose services");
    //     return;
    // }

    //Check to see if this input empty or less than or equal to 1
    if (numOfPeople === "" || numOfPeople <= 1) {
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //Caculate Tip
    var total = (billAmt * serviceQual) / numOfPeople;
    console.log('total', total);

    //Round to two decimal places
    total = Math.round(total * 100) / 100;
    //Next line allows us to alwáy have two digits after decimal point
    total = total.toFixed(2);

    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//Call function caculateTip
document.getElementById('calculate').onclick = function() {
    caculateTip();
}

// //Calculate Tip
// function calculateTip() {
//     var billAmt = document.getElementById("billamt").value;
//     var serviceQual = document.getElementById("serviceQual").value;
//     var numOfPeople = document.getElementById("peopleamt").value;

//     //validate input
//     if (billAmt === "" || serviceQual == 0) {
//         alert("Please enter values");
//         return;
//     }
//     //Check to see if this input is empty or less than or equal to 1
//     if (numOfPeople === "" || numOfPeople <= 1) {
//         numOfPeople = 1;
//         document.getElementById("each").style.display = "none";
//     } else {
//         document.getElementById("each").style.display = "block";
//     }

//     //Calculate tip
//     var total = (billAmt * serviceQual) / numOfPeople;
//     //round to two decimal places
//     total = Math.round(total * 100) / 100;
//     //next line allows us to always have two digits after decimal point
//     total = total.toFixed(2);
//     //Display the tip
//     document.getElementById("totalTip").style.display = "block";
//     document.getElementById("tip").innerHTML = total;

// }

// //Hide the tip amount on load
// document.getElementById("totalTip").style.display = "none";
// document.getElementById("each").style.display = "none";

// //click to call function
// document.getElementById("calculate").onclick = function() {
//     calculateTip();

// };