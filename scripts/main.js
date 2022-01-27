function initElement() {
    var discordLogo = document.getElementById("discord");
    discordLogo.onclick = CopyToClipBar;
}

function CopyToClipBar() {

    navigator.clipboard.writeText("Atalata#2363")
        .then(() => {
        console.log("Text copied to clipboard...");
        alert("Pseudo Discord copié !");
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
}