const error = document.getElementById("error")
const input = document.querySelector('input')
const notify = document.getElementById("notMe")
notify.addEventListener("click", function(){
    if(input.value === ""){
        input.style.borderColor = "hsl(354, 100%, 66%)";
        error.textContent = "Please provide a valid email address"
    }
})