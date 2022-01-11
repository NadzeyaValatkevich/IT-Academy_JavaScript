// создание класса для хранения в публичном хэше
// произвольных пар ключ-значение
class HashStorageClass {
    // constructor () {
    //     this.publhash = {};
    // }

    addValue(key, value) {
        this[key] = value;
    }

    getValue(key) {
       return this[key];
    }

    deleteValue(key) {
        if(!(key in this)) {  
            return false;
        } else {
            delete this[key];
            return true;
        };
    }

    getKeys() {
        return Object.keys(this);
    }
};

// создание объекта drinkStorage для хранения рецептов напитков

const drinkStorage = new HashStorageClass();

drinkStorage.addValue('мохито', {name:'мохито', alch:'да', recipe:'В каждый стакан выдавить сок 1/4 лайма и лимона, добавить сахар и листья мяты. Выложить в стаканы дольки лайма и лимона.Добавить лед. Влить ром и наполнить стаканы тоником до верха.'});
drinkStorage.addValue('морс', {name:'морс', alch:'нет', recipe:'Клюкву залить водой. Затем поставить на огонь, довести до кипения, прокипятить 10 минут на небольшом огне. Для сбора отвара поставить дуршлаг на другую кастрюлю. Ягоды вместе с отваром откинуть на дуршлаг. Ягоды размять, процедить и отжать в отвар. В отвар добавить сахар, довести до кипения и охладить.'});
drinkStorage.addValue('пунш', {name:'пунш', alch:'нет', recipe:'В большой сотейник положить мешочек со специями и остальные ингредиенты, перемешать и поставить на средний огонь, довести до кипения. Уменьшить огонь до минимального и готовить, помешивая, около 15 минут. Мешочек со специями достать из сотейника, а клюкву пюрировать с помощью картофелемялки. Готовить на медленном огне еще 10 минут. Процедить массу через сито, жмых удалить, а пунш разлить в 4 порционные кружки, можно украсить палочками корицы.'});

// создание кнопок для работы с хранилищем рецептов напитков

// ввод информации о напитке

const btn1 = document.getElementById('add-drink');
btn1.onclick = function() {
    const name = prompt('Введите название напитка');
    const alch = prompt('Напиток алкогольный?');
    const recipe  = prompt('Какой рецепт приготовления?');

    drinkStorage.addValue(name, {name, alch, recipe});
};

// получение информации о напитке

const btn2 = document.getElementById('get-drink');
btn2.onclick = function() {
    const name = prompt('Введите название напитка');

    if(name in drinkStorage) {
        console.log(drinkStorage.getValue(name))
    } else {
        alert('Нет такого напитка');
    }
};

// удаление информации о напитке

const btn3 = document.getElementById('delete-drink');
btn3.onclick = function() {
    const name = prompt('Введите название напитка');

    drinkStorage.deleteValue(name);   
};

// перечень всех напитков

const btn4 = document.getElementById('list-all-drink');
btn4.onclick = function() {
    console.log(drinkStorage.getKeys());
};

console.log(drinkStorage);
