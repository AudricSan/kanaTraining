//random Int
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//keyboard listen
window.onkeydown = function (key) {
    let mykey = key['key'];
    //console.log(mykey);
    switch (mykey) {
        //Lowercase
        case "a":
        case "i":
        case "u":
        case "e":
        case "o":

        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
        case "h":
        case "j":
        case "k":
        case "l":
        case "m":
        case "n":
        case "p":
        case "q":
        case "r":
        case "s":
        case "t":
        case "v":
        case "w":
        case "x":
        case "z":


        //Uppercase
        case "A":
        case "I":
        case "U":
        case "E":
        case "O":

        case "B":
        case "C":
        case "D":
        case "F":
        case "G":
        case "H":
        case "J":
        case "K":
        case "L":
        case "M":
        case "N":
        case "P":
        case "Q":
        case "R":
        case "S":
        case "T":
        case "V":
        case "W":
        case "X":
        case "Z":

            if (input.textContent.length < 3) {
                input.textContent += mykey;
            }
            break;

        case 'Enter':
            checkAnswerd();
            break;

        case 'Backspace':
            input.textContent = input.textContent.substring(0, input.textContent.length - 1);
            break;

        case 'Escape':
            input.textContent = "";
            break;

        default:
            //console.log(key)
            break;
    }
}

//Hiragana Function
function getRandomHiragana() {
    let selectedHiragana;
    while (selectedHiragana != "undefined") {
        let selectedHiragana = hiragana.hiragana;
        let nb = getRandomInteger(0, selectedHiragana.length - 1);

        //console.log(selectedHiragana);
        //console.log(nb);
        //console.log(selectedHiragana[nb]);

        if (selectedHiragana != undefined) {
            selectedHiragana = selectedHiragana[nb]
            if (selectedHiragana[2] == true) {
                return selectedHiragana;
            }
        }
    }

}

function getRandomhiraganaCombo() {
    let selectedhiraganaCombo;
    while (selectedhiraganaCombo != "undefined") {
        let selectedhiraganaCombo = hiragana.hiraganaCombo;
        let nb = getRandomInteger(0, selectedhiraganaCombo.length - 1);

        if (selectedhiraganaCombo != undefined) {
            selectedhiraganaCombo = selectedhiraganaCombo[nb]
            if (selectedhiraganaCombo[2] == true) {
                return selectedhiraganaCombo;
            }
        }
    }
}

function getRandomhiraganaDakuon() {
    let selectedhiraganaDakuon;
    while (selectedhiraganaDakuon != "undefined") {
        let selectedhiraganaDakuon = hiragana.hiraganaDakuon;
        let nb = getRandomInteger(0, selectedhiraganaDakuon.length - 1);

        if (selectedhiraganaDakuon != undefined) {
            selectedhiraganaDakuon = selectedhiraganaDakuon[nb]
            if (selectedhiraganaDakuon[2] == true) {
                return selectedhiraganaDakuon;
            }
        }
    }
}

function getRandomhiraganaDakuonCombo() {
    let selectedhiraganaDakuonCombo;
    while (selectedhiraganaDakuonCombo != "undefined") {
        let selectedhiraganaDakuonCombo = hiragana.hiraganaDakuonCombo;
        let nb = getRandomInteger(0, selectedhiraganaDakuonCombo.length - 1);

        if (selectedhiraganaDakuonCombo != undefined) {
            selectedhiraganaDakuonCombo = selectedhiraganaDakuonCombo[nb]
            if (selectedhiraganaDakuonCombo[2] == true) {
                return selectedhiraganaDakuonCombo;
            }
        }
    }
}

//Katakana Function
function getRandomkatakana() {
    let selectedkatakana;
    while (selectedkatakana != "undefined") {
        let selectedkatakana = hiragana.katakana;
        let nb = getRandomInteger(0, selectedkatakana.length - 1);

        if (selectedkatakana != undefined) {
            selectedkatakana = selectedkatakana[nb]
            if (selectedkatakana[2] == true) {
                return selectedkatakana;
            }
        }
    }
}

function getRandomkatakanaCombo() {
    let selectedkatakanaCombo;
    while (selectedkatakanaCombo != "undefined") {
        let selectedkatakanaCombo = hiragana.katakanaCombo;
        let nb = getRandomInteger(0, selectedkatakanaCombo.length - 1);

        if (selectedkatakanaCombo != undefined) {
            selectedkatakanaCombo = selectedkatakanaCombo[nb]
            if (selectedkatakanaCombo[2] == true) {
                return selectedkatakanaCombo;
            }
        }
    }
}

function getRandomkatakanaDakuon() {
    let selectedkatakanaDakuon;
    while (selectedkatakanaDakuon != "undefined") {
        let selectedkatakanaDakuon = hiragana.katakanaDakuon;
        let nb = getRandomInteger(0, selectedkatakanaDakuon.length - 1);

        if (selectedkatakanaDakuon != undefined) {
            selectedkatakanaDakuon = selectedkatakanaDakuon[nb]
            if (selectedkatakanaDakuon[2] == true) {
                return selectedkatakanaDakuon;
            }
        }
    }
}

function getRandomkatakanaDakuonCombo() {
    let selectedkatakanaDakuonCombo;
    while (selectedkatakanaDakuonCombo != "undefined") {
        let selectedkatakanaDakuonCombo = hiragana.katakanaDakuonCombo;
        let nb = getRandomInteger(0, selectedkatakanaDakuonCombo.length - 1);

        if (selectedkatakanaDakuonCombo != undefined) {
            selectedkatakanaDakuonCombo = selectedkatakanaDakuonCombo[nb]
            if (selectedkatakanaDakuonCombo[2] == true) {
                return selectedkatakanaDakuonCombo;
            }
        }
    }
}

//add / Remove difficulty
function selectDificulty(id) {
    let ellement = document.getElementById(id);
    if (ellement.checked) {
        //console.log('checked');
        dificulty.push(ellement.id);
        //console.log(dificulty);
    } else {
        //console.log('unchecked');
        const index = dificulty.indexOf(ellement.id);
        if (index > -1) {
            dificulty.splice(index, 1);
        }
        //console.log(dificulty);
    }
}

//GAME RUN
function startGame() {
    const int = getRandomInteger(0, dificulty.length - 1)
    //console.log(dificulty[int]);
    switch (dificulty[int]) {
        case "hiragana":
            //console.log('hiragana');
            selectedCharacter = getRandomHiragana();
            break;

        case "hiraganaCombo":
            //console.log('hiraganaCombo');
            selectedCharacter = getRandomhiraganaCombo();
            break;

        case "hiraganaDakuon":
            //console.log('hiraganaDakuon');
            selectedCharacter = getRandomhiraganaDakuon();
            break;

        case "hiraganaDakuonCombo":
            //console.log('hiraganaDakuonCombo');
            selectedCharacter = getRandomhiraganaDakuonCombo();
            break;

        case "katakana":
            //console.log('katakana');
            selectedCharacter = getRandomkatakana();
            break;

        case "katakanaCombo":
            //console.log('katakanaCombo');
            selectedCharacter = getRandomkatakanaCombo();
            break;

        case "katakanaDakuon":
            //console.log('katakanaDakuon');
            selectedCharacter = getRandomkatakanaDakuon();
            break;

        case "katakanaDakuonCombo":
            //console.log('katakanaDakuonCombo');
            selectedCharacter = getRandomkatakanaDakuonCombo();
            break;

        default:
            //console.log('default');
            selectedCharacter = getRandomHiragana();
            break;
    }

    //console.log(character);
    //console.log(character.innerHTML);

    character.innerHTML = selectedCharacter[0];
}

//notification
function createNotification(txt) {
    const notif = document.createElement("div");
    notif.classList.add("toast");

    notif.innerText = txt;

    container.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);
}

//Answerd checker
function checkAnswerd(){
    //console.log(input);
    //console.log(input.innerHTML);
    //console.log(selectedCharacter);
    //console.log(selectedCharacter[1]);

    let a = input.innerHTML
    let b = selectedCharacter[1];
    //console.log(b);

    c = b.split("-");
    //console.log(c);

    c.forEach(e => {
        if(a === e){
            //console.log('Good');
            input.textContent = "";
            goodAnswerd();
        }else{
            //console.log('not Good');
            input.textContent = "";
            badAnswerd();
        }  
    });
}

//If is good
function goodAnswerd(){
    createNotification("good ! " + "+1");
    incrementGood();
}

//if is not!
function badAnswerd(){
    let a = selectedCharacter[1];
    createNotification("Nop bad answerd " + "the good one is " + a);
    incrementTotal();
}

//increment point
function incrementGood() {
    a = parseInt(myPoint.innerText);
    a += 1;
    myPoint.innerText = a.toString();

    b = parseInt(totalPoint.innerText);
    b += 1;
    totalPoint.innerText = b.toString();

    startGame();
};

//increment total
function incrementTotal() {

    b = parseInt(totalPoint.innerText);
    b += 1;

    totalPoint.innerText = b.toString();

    startGame();
};

//share to Twitter
twitter.addEventListener('click', event =>{    
    var b = twitter.getAttribute('href');

    var good = myPoint.textContent;
    var total = totalPoint.textContent;

    b = "https://twitter.com/intent/tweet?text=I just scored " + good + " out of " +  total + " in my Hiragana Training. Can you do better? http://www.hiragana.training";
    twitter.setAttribute("href", b);
})