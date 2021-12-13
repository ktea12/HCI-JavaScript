const alphabet = ["Error","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function digitalDecipher (eMessage, key) {
        let eMessage = new Array(eMessage);
        
        var key = key;
        var keyArr = String(num).split("").map((num) => {
            return Number(num)}
        
        var x = eMessage.map(function(item, index) {
            return item - keyArr[index];
            });
    };