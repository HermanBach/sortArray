var arraySort, arraySort2, vbubble1, bubble2, insertion1, insertion2, selection, selection2;

function startSort() {
    let TimeToSort;
    if ($('#2').val().length == 0) {
        let promise = new Promise(function(resolve) {
            warningUp(arraySortBubble, 100)
            let time = performance.now();
            bubble1 = arraySortBubble(arraySort);
            let time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
        });
        promise.then(
            function() {
                $('#2').val(bubble1);
                $('#9').val(bubble2);
                $('#3').val(TimeToSort);
            }, );
        let promise1 = new Promise(function(resolve) {
            warningUp(arraySortBubble, 100)
            let time = performance.now();
            bubble1 = arraySortBubble(arraySort2);
            let time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
        });
        promise1.then(
            function() {
                $('#4').val(TimeToSort);
            }, );

        let promise2 = new Promise(function(resolve) {
            warningUp(arrSortSelection, 100)
            time = performance.now();
            bubble2 = arrSortSelection(arraySort);
            time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
        });
        promise2.then(
            function() {
                $('#5').val(TimeToSort);
            }, );

        let promise3 = new Promise(function(resolve) {
            warningUp(arrSortSelection, 100)
            let time = performance.now();
            bubble2 = arrSortSelection(arraySort2);
            let time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
        });
        promise3.then(
            function() {
                $('#6').val(TimeToSort);
            }, );

        let promise4 = new Promise(function(resolve) {
            warningUp(arrSortInsertion, 100)
            time = performance.now();
            bubble2 = arrSortInsertion(arraySort);
            time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
        });
        promise4.then(
            function() {
                $('#7').val(TimeToSort);
            }, );

        let promise5 = new Promise(function(resolve) {
            warningUp(arrSortInsertion, 100)
            let time = performance.now();
            bubble2 = arrSortInsertion(arraySort2);
            let time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
        });
        promise5.then(
            function() {
                $('#8').val(TimeToSort);
            }, );
    } else {
        generateArray();
        startSort();
    }
}

function returnArrayLengthDOM() {
    return parseInt(document.getElementById("array").value);
}

function warningUp(funcFromWarning, i) {
    for (x = 0; x < i; x++) {
        let warningUp = returnArrayLengthwise(returnArrayLengthDOM());
        funcFromWarning(warningUp);
    }
}

function generateArray() {
    if ($('#1').val().length == 0) {
        arraySort = returnArrayLengthwise(returnArrayLengthDOM());
        arraySort2 = returnDecreasingArray(returnArrayLengthDOM());
        $('#1').val(arraySort);
        $('#10').val(arraySort2);
    } else {
        arraySort = [];
        arraySort2 = [];
        $('#1').val(arraySort);
        $('#2').val(arraySort);
        $('#9').val(arraySort2);
        $('#3').val("");
        $('#4').val("");
        $('#5').val("");
        $('#6').val("");
        $('#7').val("");
        $('#8').val("");
        arraySort = returnArrayLengthwise(returnArrayLengthDOM());
        arraySort2 = returnDecreasingArray(returnArrayLengthDOM());
        $('#1').val(arraySort);
        $('#10').val(arraySort2);
    }
}

function returnArrayLengthwise(length) {
    let array = [];
    let random;
    for (let i = 0; i < length; i++) {
        random = (Math.floor(Math.random() * (300 - 1)) + 1);
        array.push(random);
    }
    return array;
}

function returnDecreasingArray(length) {
    let array = [];
    let random;
    let max = 300;
    for (let i = 0; i < length; i++) {
        random = (max - (Math.floor(Math.random() * (300 - 1)) + 1));
        array.push(random);
        max = random;
    }
    return array;
}