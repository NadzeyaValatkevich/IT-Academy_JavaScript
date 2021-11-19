function vowels(str) {
    const array = ['а', 'я', 'о', 'ё', 'э', 'е', 'ы', 'и', 'у', 'ю'];
    let count = 0;

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

console.log(vowels(str));
