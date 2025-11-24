
var con = document.querySelector('.container')
var h3 = document.querySelector('keys h3')
for(i=0;i<10;i++){

    var div = document.createElement('div')
    div.innerHTML= String.fromCharCode(66+i)
    div.classList.add("keys")
    con.appendChild(div)
}



