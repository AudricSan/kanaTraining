//random Int
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Hiragana Function
function getRandomHiragana() {
    let selectedHiragana;
    while (selectedHiragana != "undefined") {
        let selectedHiragana = hiragana.hiragana;
        let nb = getRandomInteger(0, selectedHiragana.length - 1);

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

//add-Remove difficulty
function selectDificulty(id) {
    let ellement = document.getElementById(id);
    if (ellement.checked) {
        //console.log('checked');
        dificulty.push(ellement.id);
        console.log(dificulty);
        document.cookie = "dificulty=" + dificulty;
    } else {
        //console.log('unchecked');
        const index = dificulty.indexOf(ellement.id);
        if (index > -1) {
            dificulty.splice(index, 1);
        }
        console.log(dificulty);
        document.cookie = "dificulty=" + dificulty;
    }
    
    startGame();
}

//GAME RUN
function startGame() {
    const int = getRandomInteger(0, dificulty.length - 1)
    // console.log(dific ulty);
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

    character.innerHTML = selectedCharacter[0];
}

//notification
function createNotification(txt, c) {
    const notif = document.createElement("div");
    const correct = document.createElement('span');

    notif.classList.add("toast");

    notif.innerText = txt + " ";

    if (c != undefined) {
        correct.innerText = "\"" + c + "\"";
    }

    container.appendChild(notif);
    notif.appendChild(correct);

    setTimeout(() => {
        notif.remove();
    }, delay);
}

//Answerd checker
function checkAnswerd() {
    if (document.getElementsByClassName("toast").length === 0) {
        let a = input.value.toLowerCase()
        let b = selectedCharacter[1];
        c = b.split("-");
        d = c.indexOf(a);

        if (d != -1) {
            e = c[d];
            if (a === e) {
                input.value = "";
                goodAnswerd();
                return true;
            } else {
                input.value = "";
                badAnswerd();
                return false;
            }
        } else {
            input.value = "";
            badAnswerd();
            return false;
        }
    } else {
        return;
    }
}

//If is good
function goodAnswerd() {
    createNotification("good ! " + "+1");
    incrementGood();
}

//if is not!
function badAnswerd() {
    let a = selectedCharacter[1];
    createNotification("Nop bad answerd, the good one is", a);
    incrementTotal();
}

//increment point
function incrementGood() {
    a = parseInt(myPoint.innerText);
    a += 1;
    myPoint.innerText = a.toString();

    incrementTotal();
};

//increment total
function incrementTotal() {
    b = parseInt(totalPoint.innerText);
    b += 1;

    totalPoint.innerText = b.toString();

    setTimeout(() => {
        startGame();
    }, delay);

    a = myPoint.innerText;
    document.cookie = "score=" + a + "/" + b;
};

//share to Twitter
twitter.addEventListener('click', event => {
    var b = twitter.getAttribute('href');

    var good = myPoint.textContent;
    var total = totalPoint.textContent;

    b = "https://twitter.com/intent/tweet?text=" + encodeURIComponent("I just scored " + good + " out of " + total + " in my Hiragana Training. \nCan you do better? https://kana.audricrosier.be");
    twitter.setAttribute("href", b);
})

function getAllKana() {
    let helpTable = [];

    dificulty.forEach(e => {
        helpTable.push(hiragana[e]);
    });

    const ul = document.createElement('ul');
    ul.classList.add("items");

    helpContainer.appendChild(ul);

    helpTable.forEach(e => {
        e.forEach(a => {
            const li = document.createElement('li');
            const helpHiragana = document.createElement("div");
            const helpRomanji = document.createElement('div');

            helpHiragana.classList.add("kana");
            helpRomanji.classList.add("romanji");

            helpHiragana.innerText = a[0];
            helpRomanji.innerText = a[1];

            ul.appendChild(li);
            li.appendChild(helpHiragana);
            li.appendChild(helpRomanji);
        });
    });
}

//Open help
helpbtn.addEventListener('click', event => {
    closer.classList.remove('hidden')
    getAllKana();
})

closer.addEventListener('click', event => {
    todel = helpContainer.children
    helpContainer.removeChild(todel[0]);
    closer.classList.add('hidden');
})