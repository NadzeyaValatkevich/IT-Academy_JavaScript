// подсчет гласных букв в строке методом reduce;

function vowels_reduce() {

    let str = prompt('Введите любое слово или предложение');
    const strArray = str.toLowerCase().split('');
    const array = ['а', 'я', 'о', 'ё', 'ы', 'и', 'э', 'е', 'у', 'ю'];
    let count = 0;

    while(!isNaN(str)) {
        str = prompt('Введите любое слово или предложение');
    };
    
    return strArray.reduce((accum, item) => {

        if(array.includes(item)) {
            accum += 1;
        };

        return accum;
        
    }, 0);

};

console.log(vowels_reduce());
