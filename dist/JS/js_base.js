// let age = 18;
// let firstName = 'SAM';
// let lastName = 'Yi';
// let country = 'TW';

// console.log('(' + country + ') ' + firstName + ' ' + lastName);

// console.log(`(${country}) ${firstName} ${lastName}`);

// let num1 = 1;
// let num2 = 2.1
// let num3 = num1 + num2;
// let num4 = '10'
// let num5 = num3 + num4;
// let num6 = num4 - num3;
// console.log(num1, num2, num3, num4, typeof num4);

// let num11 = parseInt(num1, 10) + parseInt(num4, 10);
// let num12 = +num1 + +num4;
// let num13 = +num1 + 'a';
// console.log(num11, num12, num13);

// // 字元 char,強型態與岩石一次只能塞一個
// let s1 = 'S1 \ S1'
// // 字串 string
// let s2 = 'S2 \ S2'

// // escape\
// // \n->new line
// // \r\n ->new line in windows
// // \t->tab

// console.log(s1);
// console.log(s2);

// console.log(num1, num1.toString(), typeof num1, typeof num1.toString());

// let b1 = true;
// let b2 = false;
// let b3 = 1;
// let b4 = 0;
// let b5 = -1;
// let b6 = 's';
// let b7 = ' ';

// if (b5) {
//     console.log('Yes');
// }
// else {
//     console.log('No');
// }


// let students = [1, 2, 3, 4]
// console.log(students);

// students.push(5);
// console.log(students);

// console.log(students[0]);
// console.log(students.join('::'));

// let index = students.indexOf(2);
// console.log(index);

// students.splice(index, 1);
// console.log(students);

// let nums = [40, 50, 80, 75];

// console.log('調整前');
// nums.forEach((snum, index) => {
//     console.log(`第 ${index + 1} 位學生: ${snum}`);
//     nums[index] = snum + 20;
// })

// console.log('調整後');
// nums.forEach((snum, index) => {
//     console.log(`第 ${index + 1} 位學生: ${snum}`);
// });

// let students100 = [];
// for (let sindex = 0; sindex < 100; sindex++) {
//     students100[sindex] = Math.ceil(Math.random() * 100);
// }

// console.table(students100);


// const a1 = function () {
//     console.log('Origin function');
// }

// const a2 = () => {
//     console.log('Error function');
// }

// nums.forEach(function (snum, index) {
//     console.log(`第${index + 1}位學生:${snum}`);
// })

// const add10 = function (snum, index) {
//     console.log(`具名函數--第${index + 1}位學生${snum}`);
// }

// nums.forEach(add20);

const addNum = (originNum, addNum) => {
    // let originNum =40;
    // let addNum =20;
    originNum = +originNum;
    addNum = +addNum;
    // 判斷是否是真的數字
    let total = originNum + addNum;
    // 判斷是否超過100分
    // console.log(`In function: ${total}`);
    return total;
}

// let students = [40, 50, 80, 77];
// let add = 30;
// students.forEach((s, index) => {
//     students[index] = addNum(s, add);
// }
// );

let students = [];
students.push(
    {
        name: 'Tony',
        num: 89
    }
);

students.push(
    {
        name: 'Peter',
        num: 80
    }
);

students.push(
    {
        name: 'Ben',
        num: 36
    }
);

students.push(
    {
        name: 'May',
        num: 55
    }
);

let add = 10;
students.forEach((student, index) => {
    console.log(`Students${student.name}:${student.num}`);
    student, num = addNum(student.num, add);
    students[index] = student;
})

console.table(students);

// for (let start = 1; start <= 9; start++) {
//     // console.log(start)
// }


// let n = 1;
// let n2 = ++n;
// let n3 = n++;

// console.log(n);
// console.log(n3);
// console.log(n2);

for (let start = 1; start <= 9; start++) {
    for (let end = 1; end <= 9; end++) {
        console.log(`${start} *${end} =${start * end}`)
    }
}

