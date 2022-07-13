console.log('Hello Wolrd, db.js');

// localStorage.setItem('myCat', 'Tom');

var localStorage = localStorage.getItem('');
console.log(localStorage)

function save(name, value) {
    // document.cookie = name + "=" + value;
    localStorage.setItem(name, value);

}