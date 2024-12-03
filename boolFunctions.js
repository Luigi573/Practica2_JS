function isLessThan(a, b){
    let result = false;

    if(a < b){
        result = true;
    }

    return result;
}

console.log("Función isLessThan(3, 5): " + isLessThan(3,5));
console.log("Función islessThan(3, 2):" + isLessThan(3, 2));

function isGtREqual2(a, b){
    let result = false;

    if(a >= b){
        result = true;
    }

    return result;
}

console.log("\nFunción isGtREqual2(5, 3): " + isGtREqual2(5, 3));
console.log("Función isGtREqual2(2, 5): " + isGtREqual2(2, 5));

function isSpeeding(speed){
    let result = false;

    if(speed >= 120){
        result = true;
    }

    return result;
}

console.log("\nFunción isSpeeding(90): " + isSpeeding(90));
console.log("Función isSpeeding(160): " + isSpeeding(160));

function isTeenager(age){
    let result = false;

    if(age >= 13 && age <= 18){
        result = true;
    }

    return result;
}

console.log("\nFunción isTeenager(10):" + isTeenager(10));
console.log("Función isTeenager(16):" + isTeenager(16));

function isGoodMusic(artist){
    let artists = ["GRANRODEO", "Yoko Shimomura", "Toby Fox", "Christopher Larkin", "Eric Barone"]
    let result = false;

    if(artists.includes(artist)){
        result = true;
    }

    return result;
}

console.log("\nFunción isGoodMusic(Bad Bunny): " + isGoodMusic("Bad Bunny"));
console.log("Función isGoodMusic(Yoko Shimomura): " + isGoodMusic("Yoko Shimomura"));