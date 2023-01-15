document.getElementById("submit").onclick = function(){

    let message = document.getElementById("inputplaintext").value;
    let k = document.getElementById("key").value;
    k = Number(k);
    message = String(message);
    function transpose(message, key) {
        // Create an array to store the transposed message
        var transposed = [];
        // Loop through the message by key
        for (var i = 0; i < key; i++) {
            // Loop through the message by character
            for (var j = i; j < message.length; j += key) {
                // Add the current character to the transposed message
                transposed.push(message[j]);
            }
        }
        // Return the transposed message as a string
        return transposed.join('');
    }
    console.log("type= ",typeof(message));
    // Example usage:
    //var message = "HELLO WORLD";
    //var key = 3;
    console.log(transpose(message, k)); // Output: "HOE LRWL OD"
    document.getElementById("output").innerHTML = transpose(message, k);
    
}

document.getElementById("dsubmit").onclick =function(){

    var ciphertext = document.getElementById("dinputplaintext").value;
    var key = document.getElementById("dkey").value;
    key = Number(key);
    console.log(typeof(ciphertext),typeof(key));
   
    function decryptTransposition(ciphertext, key) {
        var plaintext = "";
        var grid = createGrid(ciphertext, key);
        for (var i = 0; i < key; i++) {
            for (var j = 0; j < grid.length; j++) {
                plaintext += grid[j][i];
            }
        }
        return plaintext;
    }
    
    function createGrid(ciphertext, key) {
        var grid = [];
        for (var i = 0; i < Math.ceil(ciphertext.length / key); i++) {
            grid[i] = new Array(key);
        }
        var index = 0;
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[i].length; j++) {
                if (index < ciphertext.length) {
                    grid[i][j] = ciphertext[index];
                    index++;
                } else {
                    grid[i][j] = "";
                }
            }
        }
        return grid;
    }
    //ciphertext = "CENRAKOTESESPR";
    //key = 4;
    var plaintext = decryptTransposition(ciphertext, key);
    console.log(plaintext);
    console.log(plaintext);
    document.getElementById("doutput").innerHTML = plaintext;
}