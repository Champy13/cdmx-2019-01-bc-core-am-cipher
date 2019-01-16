document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    const offset = parseInt(document.getElementById("offset").value);
    const string = document.getElementById("str_encode").value;
    document.getElementById("str_encode_result").innerHTML = window.cipher.encode(offset,string);
}


