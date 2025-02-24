//小費計算機

let food = parseFloat(document.getElementById("food"));
let tipPercentage = parseFloat(document.getElementById("tipPercentage"));
let tipAmount = food*tipPercentage;
let total = (tipAmount + food);
let lists = document.getElementById("lists");

var bt = document.getElementById("bt")
console.log("小費金額" + tipAmount);
console.log("總金額" + total) ;

bt.addEventListener("click",function(){
   lists.innerHTML = lists.innerHTML +
   `
    <ul>
        <li>${food.valueOf}</li>
    </ul>
   `;
})


// switch(total){
//     case  1000 :
//         console.log("剛好1000");
//         break;

//     default:
//         console.log("不剛好");
//         break;

// }