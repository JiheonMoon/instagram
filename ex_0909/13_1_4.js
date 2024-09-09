//button을 눌렀을때 img태그의 이미지를 변경하기
//cat->hl1->hl2
document.addEventListener("DOMContentLoaded",function(e){
    let button = document.querySelector("input")
    let img = document.querySelector("img")
    let img1 = "img/cat.jpg";
    let img2 = "img/hl1.jpg";
    let img3 = "img/hl2.jpg";
    button.addEventListener("click", function(e){
        let src = img.getAttribute("src");
        if(src === img1){
            img.setAttribute("src",img2);
        }else if(src === img2){
            img.setAttribute("src",img3);
        }else{
            img.setAttribute("src",img1);
        }

    })
})