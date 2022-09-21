window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            document.querySelector(".ads").style
            .display ="block";
            

        },
        15000
    )
})



document.querySelector("#close2").addEventListener
("click", function(){
    document.querySelector(".ads").style.display ="none";

});
