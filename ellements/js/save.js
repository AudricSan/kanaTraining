function saveInArray() {
    var saveInfo = [];

    if (localStorage !== null) {
        const ls = Object.entries(localStorage);
        return ls;
    }

    return false;
}

function deleteAllCookies() {
    localStorage.clear();
}

function save(name, value) {
    localStorage.setItem(name, value);
}

function getSave() {
    let save = saveInArray();

    if (save) {
        save.forEach(element => {
            console.log(element);

            switch (element[0]) {
                case "dificulty":
                    element = element[1];

                    if (element != '') {
                        let split = element.split(',');
                        difTable = split

                        difTable.forEach(element => {
                            document.getElementById(element).checked = true
                            selectDificulty(element);
                        });

                    }else{
                        document.getElementById('hiragana').checked = true
                        selectDificulty('hiragana');                    }
                    break;

                case "score":
                    // console.log('Previous Score');
                    // console.log(element);
                    break;

                case "theme":
                    // console.log('Actual Theme');
                    // console.log(element);

                    NextTheme = element[1];
                    // console.log(NextTheme);

                    selectTheme(NextTheme);
                    break;

                default:
                    // console.log('default');
                    break;
            }
        });
    }
}