let listing = document.getElementById("list-nav")


let bool = true;


let configLink = {

}


function list() {

    if (bool == true) {

        listing.innerHTML = `
<ul class="li-listing">
    <li onclick="window.location.href = 'index.html'">P</li>
    <li onclick="window.location.href = 'perso.html'"><img src="./src/img/logo1.png" alt="logo" width="50px" height="50px"></li>
    <li onclick="window.location.href = 'annexe.html'">A</li>
    <li onclick="window.location.href = 'reservation.html'">R</li>
    <li onclick="window.location.href = 'commentaire.html'">C</li>
    <li onclick="window.location.href = 'cine-club.html'">C</li>
</ul>
    `
        bool = false
    } else if (bool == false) {

        listing.innerHTML = ``
        bool = true
    }
}
