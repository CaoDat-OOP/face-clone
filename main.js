var username = document.getElementById("username");
var pass = document.getElementById("password")
document.getElementById("login-button").addEventListener("click", () =>{
    console.log(username.value)
    console.log(pass.value)
    if (
        username.value === "datct" && pass.value ==="alc"
    ){
      window.location.href="./personal.html"
    }
    else{
        if (!document.getElementById("error")){
            var e = document.createElement("p")
            e.textContent = "Sai tên đăng nhập hoặc mật khẩu"
            e.id = "error"
            var parrent = document.getElementById("login-box")
            parrent.appendChild(e)
        }
    }
})
username.addEventListener("input", () =>{
    if(!!document.getElementById("error")){
        document.getElementById("error").style.display="none"
    }
})
pass.addEventListener("input", () =>{
    if(!!document.getElementById("error")){
        document.getElementById("error").remove()
        document.getElementById("error").id = " ";
    }
})