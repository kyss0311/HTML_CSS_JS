// var a="嗨";
// var b=10;
// var c = true;
// var d = "kevin is so cute";

// document.write("來福好可愛");
// document.write("<br/>");
// document.write(a+b+c);
// document.write("<br/>");
// document.write(a.length);
// document.write("<br/>");
// document.write(d.toUpperCase()); //tolowerCase()
// document.write("<br/>");
// document.write(d.charAt(0)); //回傳位置0的字
// document.write("<br/>");
// document.write(d.indexOf("e")); //回傳e的位置(最前面的e)(如果找不到該字元則會回傳-1)
// document.write("<br/>");
// document.write(d.substring(2,7).toUpperCase()); //回傳從第二位到第七位前的字 不含第七位
// document.write("<br/>");


// //數字用法
    // var num=-1.23;
    // document.write("<br/>");
    // document.write(Math.abs(num));
    // document.write("<br/>");
    // document.write(Math.round(num)); //4捨5入 
    // document.write("<br/>");
    // document.write(Math.max(1,5,10,-30,0,99));
    // document.write("<br/>");
    // document.write(Math.min(1,5,10,-30,0,99));
    // document.write("<br/>");
    // document.write(Math.pow(num,3)); //num的3次方
    // document.write("<br/>");
    // document.write(Math.sqrt(36));
    // document.write("<br/>");
    // document.write(Math.random()); //回傳0~1 之間的小數
    // document.write("<br/><br/><br/>");

// //基本計算機

    // var name = prompt("請輸入名字"); //網頁提示輸入值
    // document.write("<br/>");
    // document.write("<br/>");
    // document.write("hi"+name);
    // var num1 = prompt("數字1");
    // num1 = parseFloat(num1); //將字串轉成整數 網頁輸入會預設成字串
    // var num2 = parseFloat(prompt("數字2"));
    // document.write("數字1+數字2等於",(num1+num2))
    // document.write("<br/>");
    // document.write("<br/>");


//陣列ARRAY

    // var score = [80,60,50,70,90,"kevin",false];
    // document.write(score+"<br>");
    // score[2] = 65;  //可以直接改資料
    // document.write(score+"<br>");
    // document.write(score.length);



//函式function


    // function hello(name){
    //     document.write("hello"+name);
    // }

    // function add(n1,n2){
    //     return n1+n2;
    // }

    function br(){
        document.write("<br>")
    }
    // br();
    // var name = prompt("輸入名字")
    // hello(name); 
    // br();
    // document.write(add(9,12.352))
    // br();


// if判斷式  &&且  ||或  !not

    // var num1=parseFloat(prompt("請輸入一個數字"));

    // function number(num){
    //     if(num>0){
    //         document.write(num + ">0");
    //     }
    //     else if(num==0){
    //         document.write(num + "=0");
    //     }
    //     else{
    //         document.write(num + "<0");
    //     }
    // }

    // number(num1);

// 物件 object

    // key:value

    // var person = {
    //     name:"kevin",
    //     age:23,
    //     is_male:true,
    //     print_name:function(){
    //         document.write(this.name)  //這裡的this就是指person
    //     },
    //     like_song:[
    //         {
    //             name:"我喜歡你",
    //             singer:"芒果醬",
    //             time:4
    //         },
    //         {
    //             name:"淚橋",
    //             singer:"五百",
    //             time:5
    //         }
    //     ]
    // };

    // document.write(person.name)
    // br();
    // person.print_name();
    // br();
    // document.write(person.like_song[1].singer)


// while for迴圈

    // var i =1 ;
    // while(i<=10){
    //     document.write(i);
    //     br();
    //     i++;
    // }

    // br();
    function brr(num){
        for(i=0;i<num;i++){
            document.write("<br>")
        }
    }
    // brr(3);

    // var j=1;
    // do{            //會先執行程式再去做while判斷
    //     document.write(j);
    //     br();
    //     j++;
    // }while(j<=10);


//密碼輸入
    // var password = 123456;
    // var input;
    // var entry_count = 0;
    // var entyr_limit = 5;
    // var out_of_limit = false;

    // while(password != input ){
    //     entry_count++
    //     if(entry_count <= entyr_limit){
    //         input = parseFloat(prompt("請輸入密碼")); 
    //     }
    //     else{
    //         out_of_limit=true;
    //         break;
    //     }
              
    // }
    // if(!out_of_limit){
    //     alert("登入成功"); //系統顯示
    // }
    // else{
    //     alert("錯誤太多次");
    // }
    


//製作一個問答程式

    // var questions = [
    //     {
    //         prompt:"香蕉顏色? \na綠色 \nb紅色 \nc黃色",
    //         answer:"c"
    //     },
    //     {
    //         prompt:"草莓顏色?\na綠色 \nb紅色 \nc黃色",
    //         answer:"b"
    //     },
    //     {
    //         prompt:"草顏色?\na綠色 \nb紅色 \nc黃色",
    //         answer:"a"
    //     }
    // ]

    // var score=0;
    // for(var i=0;i<questions.length;i++){
    //     var input = prompt(questions[i].prompt);
    //     if(input==questions[i].answer){
    //         score++;
    //         alert("答對了")
    //     }
    //     else alert("答錯了");
    // }

    // alert("答對了"+score+"題");

//2維陣列 朝狀迴圈
    // var number = [
    //     [1,2,3],
    //     [4,5,6],
    //     [7,8,9],
    //     [0]
    // ];
    // // document.write(number[1][1],number[0][2]);
    // for(var i=0;i<number.length;i++){ 
    //     for(var j=0;j<number[i].length;j++){
    //         document.write(number[i][j])
    //     }
    //     br();
    // }


// class

    // class Phone{
    //     constructor(number, year ,is_waterproof){
    //         this.number = number;
    //         this.year = year;
    //         this.is_waterproof = is_waterproof;
    //     }
    //     phone_page(){
    //         return 2023 - this.year;
    //     }
    // }

    // var phone1 = new Phone("iphone",2017,false);
    // document.write(phone1.number);


//取得html元素

    // var h1 = document.getElementById("title");
    // console.log(h1);    //在console中印出h1標籤
    // h1.innerText = "公主好可愛";
    // h1.style.backgroundColor = "yellow";
    // h1.style.color="blue";



//event listener
    // function handle_click(element){
    //     // alert("按屁");
    //     // console.log(element);
    //     element.innerText = "按屁";
    //     element.style.color = "red"
    // }

    // var btn = document.getElementById("btn2");
    // btn.addEventListener("click",function(){
    //     this.innerText = "按屁阿";
    // })


//部落格

    var title = document.getElementById("title")    
    var content = document.getElementById("content") 
    var bt = document.getElementById("bt") 
    var list1 = document.getElementById("list1") 


    bt.addEventListener("click" ,function(){
        list1.innerHTML = list1.innerHTML +  //下面那行最前面的點式esc下面那個點 式模板語法的寫法
        `<div class = 'article'>   
            <h2>${title.value}</h2>
            <p>${content.value}</p>
        </div>
        <hr>
        `; 
        title.value = "" ;
        content.value = "";
    })


    // const text1 = document.querySelector(".text1");
    //     const lists = document.querySelector(".lists");
    //     const btt = document.querySelector(".btt");
        
        

    //     function news(){
    //         if(text1.value === ""){
    //             return;
    //         }
    //         const newtask = document.createElement("li");
    //         newtask.innerHTML = `
    //             <input type = "checkbox" class = "box">
    //             <label>${text1.value}</label>
    //             <button class="trush">🗑️</button>
                
    //         `
    //         const trush = newtask.querySelector(".trush");
    //         const box = newtask.querySelector(".box")

    //         trush.addEventListener("click",function(){
    //         newtask.remove();
    //         })

    //         box.addEventListener("change",function(){
    //             if(box.checked){
    //                 newtask.style.textDecoration  = "line-thriugh";
    //                 newtask.style.color = "#999";
    //                 lists.append(newtask);
    //             }
    //             else{
    //                 newtask.style.textDecoration  = "none";
    //                 newtask.style.color = "";
    //                 lists.prepend(newtask);
    //             }
    //         })
    //         lists.append(newtask);
    //         text1.value="";
    //     }

    //     btt.addEventListener("click",news)
        

    //     text1.addEventListener("keyup", function(e) {
    //         if(e.key === "Enter"){
    //             news();
    //         }
    //     });

