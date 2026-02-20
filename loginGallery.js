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

let correctUser = "6ea1c7dd7f80e44ce1502d8db17d45a2e0b08b18480d90b4e60c8d9ea3d8292f"; 
let correctPass = "8d025099d5d35d6ec264be641cfe83b200f15aeeef72ea0f5cc7352d0574e9c9"; 

if(userHash === correctUser && passHash === correctPass)
{
    sessionStorage.setItem("loggedIn","true");
    window.location.href = "gallery.html";
}
else
{

    message.style.color = "red";
    message.innerText = "Wrong username or password";

}

});