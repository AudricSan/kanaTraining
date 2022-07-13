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
    // console.log(save);

    if (save) {
        save.forEach(element => {
            console.log(element);

            switch (element[0]) {
                case "dificulty":
                    // console.log('Dificulty Cookies');
                    // console.log(element);
                    element = element[1];
                    // console.log(element);

                    if (element != '') {
                        let split = element.split(',');
                        // console.log(split);

                        difTable = split
                        // console.log(difTable)

                        difTable.forEach(element => {
                            // console.log(element);

                            document.getElementById(element).checked = true
                            selectDificulty(element);

                        });
                    }
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