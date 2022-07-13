// Create a Cookie with JavaScript
// document.cookie = "username=John Doe";
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// Read a Cookie with JavaScript
// With JavaScript, cookies can be read like this
// document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;
// let y = document.cookie;

// Change a Cookie with JavaScript
// With JavaScript, you can change a cookie the same way as you create it:
// The old cookie is overwritten.
// document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";

// Delete a Cookie with JavaScript
// Just set the expires parameter to a past date:
// document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";


function cookieInArray() {
    var cookies = [];
    if (document.cookie != '') {
        let docCookie = document.cookie;
        // console.log(docCookie);

        let split = docCookie.split(';');
        // console.log(split);

        split.forEach(element => {

            // console.log(element);
            let cookie = element.replace(' ', '');
            // console.log(cookie);

            let split = cookie.split('=');
            // console.log(split);

            cookies.push([split[0], split[1]]);
        });

        return cookies;
    }
    return false;
}

function deleteAllCookies() {
    var cookies = document.cookie;
    // console.log(cookies);

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];

        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function save(name, value) {
    document.cookie = name + "=" + value;
}

function getSave() {
    let cookies = cookieInArray();
    // console.log(cookies);

    if (cookies) {
        cookies.forEach(element => {
            // console.log(element);

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