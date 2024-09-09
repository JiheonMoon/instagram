document.addEventListener("DOMContentLoaded",function(e){
    let name = document.querySelector("#nameHere")
    let editButton = document.querySelector("#nameEditButton")
    let edit = document.querySelector("#editNameField")
    let newName = document.querySelector("#newName")
    let okButton = document.querySelector("#okButton")

    editButton.addEventListener("click",function(e){
        edit.style.display = "block"
        editButton.style.display = "none"
    })



    okButton.addEventListener("click",function(e){
        name.textContent = newName.value
        edit.style.display = "none"
        editButton.style.display = "block"
    })

})