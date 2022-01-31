function arraySortBubble(arr) {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}

function arrSortSelection(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}

function arrSortInsertion(arr) {
    for (let i = 0; i < arr.length; i++) {
        let act = arr[i],
            j = i - 1;
        while (j >= 0 && arr[j] > act) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = act;
    }
    return arr;
}