window.cipher = {
  encode: (offset, string) => {

    let str_encode = '';

    for (let i = 0; i < string.length; i++) {
      let charac_ascii = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
      let charac_encode = String.fromCharCode(charac_ascii);
      str_encode += charac_encode;
    }
    return str_encode;
  },
  
  decode: (offset, string) => {

    let str_decode = '';

    for (let i = 0; i < string.length; i++) {
      let charac_ascii = (string.charCodeAt(i) + 65 - offset) % 26 + 65;
      let charac_decode = String.fromCharCode(charac_ascii);
      str_decode += charac_decode;
    }
    return str_decode;
  }
};
