
var con = document.querySelector('.container')
var key = document.querySelector('.keys')

let arr = ["A","S","D","F","G","H","J","K","L"];
let piano = [{
    "A": new Audio("tunes/28.mp3"),
},{
   "S": new Audio("tunes/29.mp3"),  
},{ 
    "D": new Audio("tunes/30.mp3"),
},{
     "F": new Audio("tunes/31.mp3"),

},{ 
    "G":new Audio("tunes/32.mp3"),

},{ 
    "H":new Audio("tunes/33.mp3"),

},{ 
    "J": new Audio("tunes/34.mp3"),

},{ 
    "K":new Audio("tunes/35.mp3"),

},{ 
    "L": new Audio("tunes/36.mp3"),
}];


let output = ""
for(i=0;i<9;i++){
    output += `<div class="keys">
         <h3>${arr[i]}</h3>
    </div>`

 
}

con.innerHTML = output;

   document.addEventListener("keydown",function(val){
       if (piano )
    })