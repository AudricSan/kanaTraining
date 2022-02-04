const head = document.getElementsByTagName('HEAD')[0]; 
var link = document.createElement('link');
link.rel = 'stylesheet'; 
link.type = 'text/css';
link.href = 'ellements/css/darktheme.css';

//Change Theme
function selectTheme(state) {
    console.log(state);
    console.log(stateEllement);

    switch (state) {
        case "dark":
            console.log('dark state to light');
            var NextTheme = 'light'
            head.removeChild(link);
            stateEllement.id = 'light';
            break;

        case "light":
            console.log('light state to dark');
            var NextTheme = 'dark'
            head.appendChild(link);
            stateEllement.id = 'dark';
            // console.log(stateEllement);
            break;
    }
}