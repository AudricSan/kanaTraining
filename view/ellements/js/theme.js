const head = document.getElementsByTagName('HEAD')[0];
var link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'ellements/css/darktheme.css';

//Change Theme
function selectTheme(NextTheme) {
    let cc = NextTheme
    switch (NextTheme) {
        case "light":
            console.log('in light');
            if (head.contains(link)) {
                head.removeChild(link);
            }
            break;

        case "dark":
            console.log('in dark');
            head.appendChild(link);
            break;

        default:
            console.log('default (Flip/Flop)');
            if (head.contains(link)) {
                head.removeChild(link);
                NextTheme = 'light'
            }else{
                head.appendChild(link);
                NextTheme = 'dark';
            }

            console.log(NextTheme);

            document.cookie = "theme=" + NextTheme;
            break;
    }
}