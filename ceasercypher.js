document.getElementById("submit").onclick = function(){
    let str = document.getElementById("inputplaintext").value;
    let k = document.getElementById("key").value;
    //console.log(typeof(str),typeof(k));
    const alphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ];     
      key = Number(k);
      console.log(typeof(key));

      let cc = (str, key) => {
        return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 + key ) % 26 + 65));
      }
      console.log(cc(str, key));
      document.getElementById("output").innerHTML = cc(str,key);
}

document.getElementById("dsubmit").onclick = function(){
    let str = document.getElementById("dinputplaintext").value;
    let k = document.getElementById("dkey").value;
    //console.log(typeof(str),typeof(k));
    const alphabet = [
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z'
      ];     
      key = Number(k);
      console.log(typeof(key));

      let cc = (str, key) => {
        return str.toUpperCase().replace(/[A-Z]/g, c => String.fromCharCode((c.charCodeAt(0)-65 - key ) % 26 + 65));
      }
      console.log(cc(str, key));
      document.getElementById("doutput").innerHTML = cc(str,key);
}