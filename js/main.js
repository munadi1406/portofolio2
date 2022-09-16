const project1 = document.querySelector(".project1");

const link = {
    linkProject1 : "https://hexaa.fathullahmunadi.repl.co",
    linkProject2 : "",
    linkProject3 : ""
};
function goToLink(namaAtribut,link){
    namaAtribut.addEventListener('click',()=>{
        window.open(link,"blank");
        window.focus;
    });
};

goToLink(project1,link.linkProject1);