//document 객체를 대상으로 하는 이벤트리스너를 추가함
//이벤트의 종류는 DOMContentLoaded
//DOMContentLoaded 문서의 콘텐츠 로딩이 완료되었음을 의미하는 이벤트

document.addEventListener("DOMContentLoaded", function (e) {
    //HTML코드가 로딩된 다음 처리할 작업
    //input 태그를 찾아 button변수에 저장
    let button = document.querySelector("input");
    //button 변수에 이벤트리스너 추가
    //이벤트 종류는 input
    button.addEventListener("input",
        function (e) { //e 이벤트에 대한 정보, 이벤트 발생한 대한 정보
            console.log(e.target.value);//콘솔창에 입력창의 값을 출력
        });
})

function hi() {
    alert("hi");
}



