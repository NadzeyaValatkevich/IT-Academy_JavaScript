// подсчет гласных букв в строке методом filter;

function vowels_filter() {
    let str = prompt('Введите любое слово или предложение');
    const strArray = str.toLowerCase().split('');
    const array = ['а', 'я', 'о', 'ё', 'ы', 'и', 'э', 'е', 'у', 'ю'];
    let count = 0;

    while(!isNaN(str)) {
        str = prompt('Введите любое слово или предложение');
    };

    let other_array = strArray.filter((item) => {
        if (array.includes(item)) {
            return true;
        };
    });
     return other_array.length;
};

console.log(vowels_filter());
