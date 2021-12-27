function vowels() {
    let str = prompt('Введите любое слово или предложение');
    const array = ['а', 'я', 'о', 'ё', 'э', 'е', 'ы', 'и', 'у', 'ю'];
    let count = 0;

    while (!isNaN(str)) {
         str = prompt('Введите любое слово или предложение');
    }

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (str.toLowerCase()[i] === array[j]) {
                count += 1;
            }
            continue;
        }
    }
    return count;

};

console.log(vowels());
