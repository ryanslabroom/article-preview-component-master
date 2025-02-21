var ShareIcon = document.getElementById("ShareIcon")
var ShareSocials = document.getElementById("Socials")


ShareIcon.addEventListener("click", popUp)

function popUp() {
    ShareSocials.style.display = (ShareSocials.style.display === 'none' || ShareSocials.style.display === '') ? 'flex' : 'none';
}