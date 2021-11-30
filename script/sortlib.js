var testArr = [1, 5, 10, 7, 35, 96];

function arraySortBubble(arrIn, dir = 0) {
    let arr = arrIn;
    let ind = 0;
    if (dir == 0) {
        while (ind < arr.length) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] > arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    ind = 0;
                } else {
                    ind++;
                }
            }
        }
    } else {
        while (ind < arr.length) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] < arr[j + 1]) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    ind = 0;
                } else {
                    ind++;
                }
            }
        }
    }
    return arr;
}

function arrSortSelection(arrIn, dir = 0) {
    let arr = arrIn;
    if (dir == 0) {
        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    } else {
        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > arr[min]) {
                    min = j;
                }
            }
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
}

function arrSortInsertion(arrIn, dir = 0) {
    let arr = arrIn;
    if (dir == 0) {
        for (let i = 1, l = arr.length; i < l; i++) {
            const current = arr[i];
            let j = i;
            while (j > 0 && arr[j - 1] > current) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = current;
        }
    } else {
        for (let i = 1, l = arr.length; i < l; i++) {
            const current = arr[i];
            let j = i;
            while (j > 0 && arr[j - 1] < current) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = current;
        }
    }
    return arr;
}