async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
    return hashHex;
}

document.getElementById("loginForm").addEventListener("submit", async function(e){

e.preventDefault();

let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;
let message = document.getElementById("message");

let userHash = await sha256(user);
let passHash = await sha256(pass);

let correctUser = "c6b438b0c071b0875f3579207f8391b6a60e1319b25832a0ad3fe4bc0a5ae7ea"; 
let correctPass = "12ca85682b74d092efd33bf7078758914970a43c1e51076059f824c00d19a736"; 

if(userHash === correctUser && passHash === correctPass)
{
    sessionStorage.setItem("loggedIn","true");
    window.location.href = "journal.html";
}
else
{

    message.style.color = "red";
    message.innerText = "Wrong username or password";

}

});