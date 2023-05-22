const genTable = () => {
    //數字1的DOM
    let n1 = document.querySelector('#n1');
    // 數字2的DOM
    let n2 = document.querySelector('#n2');


    // console.log(n1, n2);
    // console.log(n1.value, n2.value)
    // 如果沒有數字1
    if (!n1) {
        return;
        // bye
    }

    // 如果數字1小於等於0
    if (n1.value <= 0) {
        // bye
        return;
    }

    // 如果沒有數字2
    if (!n2) {
        // bye
        return;
    }

    // 如果數字2小於等於0
    if (n2.value <= 0) {
        // bye
        return;
    }

    // 抓取table的DOM
    let table = document.querySelector('#table');
    let thead = table.querySelector('thead');
    let tbody = table.querySelector('tbody');


    // 初始化 thead UI
    // HTML 內容初始化
    let theadHTML = '<tr><th></th>';

    // 將 n1 的值跑 for loop(迴圈知道上限的喔) 產生 thead
    // 填入 thead 資料
    for (let i = 1; i <= n1.value; i++) {
        theadHTML += `<th>${i}</th>`;
    }

    theadHTML += '</tr>';
    // 更新 thead內容
    thead.innerHTML = theadHTML;

    // tbody UI 內容資料產生1
    let result = {};
    for (let i = 1; i <= n2.value; i++) {
        result[i] = [];
        for (let j = 1; j <= n1.value; j++) {
            result[i].push(i * j);
        }
    }

    // 產生UI 2
    let tbodyHTML = '';
    for (let row in result) {
        tbodyHTML = `<tr><td>${row}</td>`;
        let colunms = result[row];
        colunms.forEach(value => {
            tbodyHTML += `<td>${value}</td>`;
        });

        tbodyHTML += '</tr>';
        tbody.innerHTML += tbodyHTML;
    }

    console.log(result);

    return;



    for (let i = 1; i <= n1.value; i++) {
        thead.push(i);
        result[i] = [];
        for (let j = 1; j <= n2.value; j++) {
            result[i].push(i * j);
        }
    }

    // let table = document.querySelector('#table');
    let theadTr = table.querySelector('thead tr');

    theadTr.innerHTML = '';
    thead.forEach((n, nindex) => {
        thead.innerHTML += '<th>${n}</th>'
    });


    // let tbody = table.querySelector('tbody');
    let tbodyTr = '';
    tbody.innerHTML = '';

    for (let row in result) {
        tbodyTr = `<tr><td>${row}</td>`;
        let colunms = result[row];
        colunms.forEach(value => {
            tbodyTr += `<td>${value}</td>`
        });


        tbodyTr += '</tr>';
        tbody.innerHTML += tbodyTr;
    }
}


let make = document.querySelector('#make');

make.addEventListener('click', genTable);