function login(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    email=="" || password=="" ? alert("Boş Geçilmez") : alert(email+" adlı kullanıcı giriş yaptı")

    document.getElementById("email").value=null;
    document.getElementById("password").value=null;
}