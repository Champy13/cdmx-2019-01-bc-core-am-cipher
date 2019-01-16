window.cipher = {
  encode: (offset, string) => {

    let str_encode = '';

    for (let i = 0; i < string.length; i++) {
      let charac_ascci = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
      let charac_encode = String.fromCharCode(charac_ascci);
      str_encode += charac_encode;
    }
    return str_encode;
  },
  
  decode: (offset, string) => {

    let str_decode = '';

    for (let i = 0; i < string.length; i++) {
      let charac_ascci = (string.charCodeAt(i) + 65 - offset) % 26 - 65;
      let charac_decode = String.fromCharCode(charac_ascci);
      str_decode += charac_decode;
    }
    return str_decode;
  }
};
