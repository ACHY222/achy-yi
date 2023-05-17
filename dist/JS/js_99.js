const genTable = () => {
    let n1 = document.querySelector('#n1');
    let n2 = document.querySelector('#n2');


    // console.log(n1, n2);
    // console.log(n1.value, n2.value)

    if (!n1) {
        return;
    }

    if (n1.value <= 0) {
        return;
    }

    if (n2.value <= 0) {
        return;
    }

    console.log(n1, n2);

    let result = [];
    for (let i = 1; i <= n1.value; i++) {
        for (let j = 1; j <= n2.value; j++) {
            result.push(`${i} * ${j} = ${i * j}`);
        }

    }
    console.log(result);
}

let make = document.querySelector('#make');

make.addEventListener('click', genTable);