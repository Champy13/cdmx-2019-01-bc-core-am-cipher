document.getElementById("btn_encode").addEventListener("click", encode_btn);

function encode_btn() {
    const offset_encode = parseInt(document.getElementById("offset").value);
    const string_encode = document.getElementById("str_recive").value;
    document.getElementById("str_result").innerHTML = window.cipher.encode(offset_encode,string_encode);
}

document.getElementById("btn_decode").addEventListener("click", decode_btn);

function decode_btn() {
    const offset_decode = parseInt(document.getElementById("offset").value);
    const string_decode= document.getElementById("str_recive").value;
    document.getElementById("str_result").innerHTML = window.cipher.decode(offset_decode,string_decode);
}

document.getElementById("btn_clear").addEventListener("click", clear_btn);

function clear_btn(){
    document.getElementById("str_recive").value="";
    document.getElementById("str_result").innerHTML = "";
    document.getElementById("offset").value = "";
}
