//const alphabet = {"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const alphabet = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z'};

function digitalDecipher (eMessage, key) {
        let eMessage = new Array(eMessage);
        var output = "";
        
        var key = key;
        var keyArr = String(num).split("").map((num) => {
            return Number(num)}
        
        var x = eMessage.map(function(item, index) {
            return item - keyArr[index];
            });
        for (let i = 0; i < x.length; i ++) {
             output += alphabet[x[i]];
        };
    };
