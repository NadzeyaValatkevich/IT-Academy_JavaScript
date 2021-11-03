let dataUser;
let surnameUser = prompt('Введите вашу фамилию');
while (surnameUser == null || surnameUser == '') {
    surnameUser = prompt('Введите вашу фамилию');   
}
    dataUser = `ваше ФИО: ${surnameUser + ' '}`;
let nameUser = prompt('Введите ваше имя');
while (nameUser == null || nameUser == '') {
    nameUser = prompt('Введите ваше имя');
}
    dataUser += nameUser + ' ';
let patronymicUser = prompt('Введите ваше отчество');
while (patronymicUser == null || patronymicUser == '') {
    patronymicUser = prompt('Введите ваше отчество');
}
    dataUser += patronymicUser + '\n';
let ageUser = +prompt('Введите ваш возраст в годах');
while (ageUser == null || ageUser == '') {
    ageUser = +prompt('Введите ваш возраст в годах')
}
    dataUser += `ваш возраст в годах: ${ageUser + '\n'}`;
    dataUser += `ваш возраст в днях: ${ageUser * 365 + '\n'}`;
    dataUser += `через 5 лет вам будет: ${ageUser + 5 + '\n'}`;
let genderUser = confirm('Ваш пол - мужской?');
if (genderUser) {
    dataUser += `ваш пол: ${'мужской' + '\n'}`;
} else {
    dataUser += `ваш пол: ${'женский' + '\n'}`;
}
let pension = confirm('Вы на пенсии?');
if (pension) {
    dataUser += `вы на пенсии: ${'да' + '\n'}`;
} else {
    dataUser += `вы на пенсии: ${'нет' + '\n'}`; 
}
alert (dataUser);
