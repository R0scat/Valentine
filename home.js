window.onload = function() {
    var btnNo = document.getElementById("no");
    btnNo.style.position = "absolute";
    btnNo.style.left = "60%";
    btnNo.onclick = no;
    
    function no(){
        //alert("smth");
        let w = window.innerWidth / 2;
        let h = window.innerHeight / 2 + 200;
        let posx = Math.floor(Math.random() * w);
        let posy = Math.floor(Math.random() * h);
        btnNo.style.left = posx + "px";
        btnNo.style.top = posy + "px";
    }
}
