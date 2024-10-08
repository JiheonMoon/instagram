document.addEventListener("DOMContentLoaded",function(e){
    let configID = document.querySelector("#id i")
    let idText = document.querySelector("#id span")

    configID.addEventListener("click", function(e){
        idText.textContent = prompt('새로운 아이디를 입력하세요')
    })

    let profileEditButton= document.querySelector("#profile_info button")
    let userInfo = document.querySelector("#userInfo")
    let summary = document.querySelector("#summary")
    let profileDetail = document.querySelector("#profileDetail")
    let changing = false;

    profileEditButton.addEventListener("click", function(e){
        if(changing){
            //input태그에 들어있는 값을 변수에 저장
            let _userInfo = userInfo.querySelector("input").value
            let _summary = summary.querySelector("input").value
            let _profileDetail = profileDetail.querySelector("input").value

            //innerHtml
            //태그에 HTML 코드를 삽입가능
            //HTML태그를 직접 조작 가능한 강력한 도구
            userInfo.innerHTML = _userInfo
            summary.innerHTML = _summary

            if(_profileDetail.startsWith("http")){
                //http면 a붙이고 아니면 그냥 넣음
                _profileDetail = '<a href = "' + _profileDetail +'">'+
                                 _profileDetail + "</a>"
            }
            profileDetail.innerHTML = _profileDetail;
            //버튼의 글자를 프로필편집으로 바꿈
            e.target.textContent = "프로필 편집"
            changing = false
        }else{//각각의 태그에 들어있는 내용을 변수에 저장
            let _userInfo = userInfo.textContent
            let _summary = summary.textContent
            let _profileDetail = profileDetail.textContent
            //<input value = "원래 들어있는것" ></input>
            userInfo.innerHTML = "<input value = " + _userInfo + "> </input>"
            summary.innerHTML = "<input value = " + _summary + "> </input>"
            profileDetail.innerHTML = "<input value = " + _profileDetail + "> </input>"
            //버튼의 글자를 "프로필 편집 완료"로 수정
            e.target.textContent = "프로필 편집 완료"
            changing = true
        }
    })

    let profile_pic = document.querySelector("#profile_pic .circle_pic")

    profile_pic.addEventListener("mouseover",function(e){
        e.target.style.filter = "grayscale(50%)"
    })
    //grayscale을 사용하여 흑백화 시킨다
    profile_pic.addEventListener("mouseleave",function(e){
        e.target.style.filter = "grayscale(0%)"
    })

    profile_pic.addEventListener("click", function(e){
        profile_pic.setAttribute("src",prompt("이미지 url를 입력해주세요"))
    })

})