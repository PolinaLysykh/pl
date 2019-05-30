var groupmates = [
    {
    "name": "Марьяна",
    "group": "1703",
    "age": 20,
    "marks": [5, 6, 7, 8, 9]
    },
    {
    "name": "Полина",
    "group": "1703",
    "age": 20,
    "marks": [2, 2, 2, 2, 2]
    },
    {
    "name": "Дед Хасан",
    "group": "1702",
    "age": 19,
    "marks": [6, 6, 6, 6, 1]
    },
    {
    "name": "Саша",
    "group": "1701",
    "age": 18,
    "marks": [1, 2, 3, 4, 5]
    }
];   
var rpad = function(str, length) {
    str = str+""; // преобразование в строку
    while (str.length < length)
        str = str + ' '; // добавление пробела в конец строки
    return str; // когда все пробелы добавлены, возвратить строку
};
var printStudents = function(students){
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 8),
        rpad("Оценки", 20)
    );
    // был выведен заголовок таблицы
    for (var i = 0; i<=students.length-1; i++){
        // в цикле выводится каждый экземпляр студента
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['surname'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['marks'], 20)
        );
    }
    console.log('\n'); // добавляется пустая строка в конце вывода
};
printStudents(groupmates);
var printStudentsForGroup = function(students, group){
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 8),
        rpad("Оценки", 20)
    );
    for (var i = 0; i<=students.length-1; i++){
        if (students[i]['group'] == group){
            console.log(
                rpad(students[i]['name'], 15),
                rpad(students[i]['surname'], 15),
                rpad(students[i]['group'], 8),
                rpad(students[i]['marks'], 20)
            );
        }
    }
    console.log('\n'); // добавляется пустая строка в конце вывода
};
 var group = prompt('Input Group');
 printStudentsForGroup(groupmates, group);