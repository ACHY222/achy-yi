const init = () => {
    let addBtn = document.querySelector('#add-btn');
    let itemName = document.querySelector('#item-name');

    // 新增項目統一收納
    const doAddItem = () => {
        let value = itemName.value;

        if (!value) {
            Swal.fire({
                title: '新增錯誤',
                text: '請輸入項目名稱',
                icon: 'error',
            })
            itemName.focus();
            return;
        }

        console.log(value);
    }

    addBtn.addEventListener('click', () => {
        doAddItem();
    });

    itemName.addEventListener('keyup', (e) => {
        if (e.key == 'Enter') {
            doAddItem();
        }
    });


};

init();