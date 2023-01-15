document.getElementById("submit").onclick = function (){
    let length = document.getElementById("fname").value;
    function generateP(length) {
        var pass = '';
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';
          
        for (let i = 1; i <= length; i++) {
            var char = Math.floor(Math.random()
                        * str.length + 1);
              
            pass += str.charAt(char)
        }
          
        return pass;
    }
    console.log(generateP(length));
    document.getElementById("lname").innerHTML = generateP(length);
}