document.addEventListener("DOMContentLoaded",function(e){
    let keydown = document.querySelector("#keydown")
    keydown.addEventListener("keydown", function(e){
        console.log(e.key)
        if(e.key === 'q'){
            //key라는 키는 버튼에 대한 정보를 갖고있음
            alert('This is Q')
            //q를 눌렀을때 'This is Q'라는 문구의 경고창
        }
    })

    //change 이벤트 만들고 e.target.value 콘솔에 출력

    let change = document.querySelector("#change")
    change.addEventListener("change", function(e){
        console.log(e.target.value)
    })

    let input = document.querySelector("#input")
    input.addEventListener("input", function(e){
        console.log(e.target.value)
    })
})


