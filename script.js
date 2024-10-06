let buttons=document.querySelectorAll(".box");
let h=document.querySelector("h3");
let body=document.querySelector("body");
let box=["one","two","three","four"];
let arr=[];
let input=[];
let i = 0;
let level=0;
let start=false;
body.addEventListener('keydown',function(){
    let i = 0;
    if(start==false){
        document.getElementsByClassName("over").innerText = ""
        start=true;
        arr=[];
        input=[];
        
        generatearr();

        // check();
    
    }
});


// input :- 1 -> 1, 3 -> 1, 3 ,4
// input arr = [1, 1, 3, 1, 3 ,4 ]



function generatearr(){

    level++;
    h.innerText=`level ${level}`;
    let idx=Math.floor(Math.random()*3);
    arr.push(box[idx]);
    // console.log(box[])
    input = [];
    i = 0;
    flash(buttons[idx]);
   
    
}
for(bt of buttons){
    
    bt.addEventListener("click",function(event){
        input.push(event.target.id);
        console.log(event.target.id);
        
        flash(this);
        //console.log(arr, input)
        if(arr[i] != input[i]){
            start = false;
            h.innerText = ` your score is ${level} `;
            document.querySelector(".over").innerText = "Game Over"; 
        }
        if(input.length==arr.length){
            check();
        }
        i++;
    });


}

function flash(btn){
    
    btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },200);

}

function check(){
    var check = true
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=input[i]){
            check=false;
            break;

        }
        
    }
    if(check){
        setTimeout(() => {
            generatearr();
        }, 900);
    }else{    // todo if failed
        start = false;
        h.innerText = `${level} is your score...`;
        document.querySelector(".over").innerText = "Game Over"
    }
}







    


    
    

