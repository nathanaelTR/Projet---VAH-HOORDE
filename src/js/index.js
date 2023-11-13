let listing = document.getElementById("list-nav")


let bool = true;


let configLink = {

}


function list() {

if(bool == true) {

listing.innerHTML = `
<ul class="li-listing">
    <li>P</li>
    <li><img src="" alt="logo"></li>
    <li>A</li>
    <li>R</li>
    <li>C</li>
</ul>
    `
    bool = false
}else if(bool == false) {

    listing.innerHTML = ``
    bool = true
}
}

