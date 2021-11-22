// подсчет гласных букв в строке методом forEach

function vowels_forEach() {
    let str = prompt('Введите любое слово или предложение');
    const strArray = str.toLowerCase().split('');
    const array = ['а', 'я', 'о', 'ё', 'ы', 'и', 'э', 'е', 'у', 'ю'];
    let count = 0;

    while(!isNaN(str)) {
        str = prompt('Введите любое слово или предложение');
    };
    
    strArray.forEach((item) => {
        
        array.forEach((elem) => {
            
            if (item == elem) {
                return count += 1;
            };
            
        });
        
    });
    
    return count;

};

console.log(vowels_forEach());
