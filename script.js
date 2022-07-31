const body = document.getElementsByTagName("li");
const contoh = document.getElementById("popup");
const contoh1 = contoh.getElementsByTagName("p");
const contoh2 = document.getElementsByClassName("btn")
var fungsi = function(elemen){
    for(i = 0; i < body.length; i++){
        console.log(elemen[i])
    }
}
fungsi(contoh2)
body[0].innerHTML="Indonesia Raya Merdeka Merdeka"