document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    const offset = document.getElementById("offset").value;
    const string = document.getElementById("str_encode").value;
    window.cipher.encode(offset,string);
}


