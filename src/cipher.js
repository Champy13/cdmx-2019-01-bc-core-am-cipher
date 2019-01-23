window.cipher = {
  encode: (offset, string) => {
    
    let str_encode = '';
      
    for (let i = 0; i < string.length; i++){ 
      
        if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
          let charac_ascii_new = (string.charCodeAt(i) - 65 + offset) % 26 + 65;
          str_encode += String.fromCharCode(charac_ascii_new);

        } else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
          let charac_ascii = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
          str_encode += String.fromCharCode(charac_ascii); 

        } else {
          let charac_str = string[i];
          str_encode += charac_str; 
      } 
    }
    return str_encode;
  },
  
  decode: (offset, string) => {

    let str_decode = '';

    for (let i = 0; i < string.length; i++) {
     
        if(string.charCodeAt(i)>=65 && string.charCodeAt(i)<=90){
          let charac_ascii = (string.charCodeAt(i) + 65 - offset) % 26 + 65;
          str_decode += String.fromCharCode(charac_ascii);
      
        } else if (string.charCodeAt(i)>=97 && string.charCodeAt(i)<=122){
          let charac_ascii = (string.charCodeAt(i) -122 - offset) % 26 + 122;         
          str_decode += String.fromCharCode(charac_ascii);  
          
        } else {
          let charac_str = string[i];
          str_decode += charac_str;
      } 
    }
    return str_decode;
  }
};
