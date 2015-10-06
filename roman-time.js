var hours = process.argv[2];
var minutes = process.argv[3];
var ascii = { '-':
        [
            '            ',
            '            ',
            '            ',
            '   XXXXXX   ',
            '            ',
            '            ',
            '            ',
        ],
    'I':
        [
            ' XXXXXXXXXX ',
            '     XX     ',
            '     XX     ',
            '     XX     ',
            '     XX     ',
            '     XX     ',
            ' XXXXXXXXXX ',
        ],
'V':
        [
        ' X        X ',
        ' XX      XX ',
        '  X      X  ',
        '   XX  XX   ',
        '    X  X    ',
        '     XX     ',
        '     XX     ',
    ],
 'X':
        [
        ' XX      XX ',
        '  XX    XX  ',
        '   XX  XX   ',
        '     XX     ',
        '   XX  XX   ',
        '  XX    XX  ',
        ' XX      XX ',
        ],
 'L':
        [
        '     XX     ',
        '     XX     ',
        '     XX     ',
        '     XX     ',
        '     XX     ',
        '     XX   X ',
        '    XXXXXXX ',
        ]

};

var dots =
        [
        '     XX     ',
        '     XX     ',
        '            ',
        '            ',
        '            ',
        '     XX     ',
        '     XX     ',
        ];

function checkTime(hours, minutes) {
    hours = Number(hours);      //если объект не может быть преобразован в число, возвращается NaN
    minutes = Number(minutes);
    if (isNaN(hours) || isNaN(minutes) || hours < 0 || hours > 23 || minutes < 0 || minutes > 59) {
        console.log("Время указано не верно");
        return false;
    }
    return true;

}

function arabicToRoman(number) {
    // начинаем с 50(L), потому что больше не может быть по условию
    var romanNumber = "";
    var l = parseInt(number / 50);
    romanNumber = appendSym('L', l, romanNumber);
    number = number % 50;
    var x = parseInt(number / 10);
    if (x == 4) {
        romanNumber += 'XL';
    }
    else {
        romanNumber = appendSym('X', x, romanNumber);
    }
    number = number % 10;
    romanNumber += basicRoman(number);
    return romanNumber;
}

function appendSym(sym, counter, str) {
    for (var i = 0; i < counter; i++) {
        str += sym;
    }
    return str;
}

function basicRoman(number) {
    var basic = ["-", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return basic[number];
}

function stringToAscii(romanHours, romanMinutes) {
    var string = '';
    for (var j = 0; j < 7; j++) {
        for (var i = 0; i < romanHours.length; i++) {
            string += ascii[romanHours[i]][j];
        }
        string += dots[j];
        for (var k = 0; k < romanMinutes.length; k++) {
            string += ascii[romanMinutes[k]][j];
        }
        string += '\n';
    }
    return string;
}


var check = checkTime(hours, minutes);
if (check) {
    var romanHours = arabicToRoman(hours);
    var romanMinutes = arabicToRoman(minutes);
    var asciiTime = stringToAscii(romanHours, romanMinutes);
    console.log(asciiTime);
}
