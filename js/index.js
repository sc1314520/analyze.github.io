// querySelector 選擇器 （只會抓 html 最前面的）--> ex: 選取h1 選擇網頁上的元素 const el =document.querySelector('h1'); // or 也可以選擇class 如:.header ~~
// querySelectorAll 多重選擇 （陣列） --> el[1].setAttribute("",""); 選擇第二個
// textContent 修改文字--> el.textContent =" hello world !";
// innerHTML 插入 HTML 標籤  --> ex. cont main =qs(".~");  main.innerHTML=｀<h1 class="header">hello!</h1>｀; // innerHTML 會刪除原本的資料。
// innerHTML 加入參數 --> ex. let x=123; main.innerHTML=｀<h1 class="header">${x}</h1>｀; 
// setAttribute 增加 HTML 標籤屬性 --> ex. myLink=setAttribute("href","src");
/*
    取值：
        getAttribute("href"); //取值
        innerHTML; //取結構
        textContent; //取文字
*/
/*
    表單取值：
        1. class.value
    賦予值：
        class.value="hello!";
    選單釘選：
        class.value="~";
*/
/*
    const btn= dc.qs("");
    btn.addEventListener("click",function(e){
        // code
    });
*/
const btn=document.getElementById("btn");
const btn2=document.getElementById("btn2");
const ans1 =document.getElementById("ans1");
const ans2 =document.getElementById("ans2");
const ans3 =document.getElementById("ans3");
const ans4 =document.getElementById("ans4");
btn.addEventListener("click",function(e){
    let method=document.getElementById("method").value;
    let a=parseFloat(document.getElementById("f1").value);
    let b=parseFloat(document.getElementById("e1").value);
    let c=parseFloat(document.getElementById("f2").value);
    let d=parseFloat(document.getElementById("e2").value);
    
    if(method=='plus'){
        ans1.value= a+c;
        ans2.value= Math.sqrt((Math.pow(b,2))+Math.pow(d,2));
    }
    else if(method=='minus'){
        ans1.value= a-c;
        ans2.value= Math.sqrt((Math.pow(b,2))+Math.pow(d,2));
    }
    else if(method=='mult'){
        ans1.value= a*c;
        let g=(b/a)*(b/a);
        let h=(d/c)*(d/c);
        ans2.value= ans1.value*(Math.sqrt(g+h));

    }
    else if(method=='div'){
        ans1.value= a/c;
        let g=(b/a)*(b/a);
        let h=(d/c)*(d/c);
        ans2.value= ans1.value*(Math.sqrt(g+h));
    }
});
btn2.addEventListener("click",function(e){
    let a=parseFloat(document.getElementById("f3").value);
    let b=parseFloat(document.getElementById("e3").value);
    let c=parseFloat(document.getElementById("p3").value);
    let d=parseFloat(document.getElementById("c3").value);
    let A=d*Math.pow(a,c);
    let B=A*(c*(b/a));
    ans3.value=A;
    ans4.value=B;
});