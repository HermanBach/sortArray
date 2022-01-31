function generateArray() {
    if ($('#1').val().length === 0) {
        mixedArray = returnMixedArray(returnArrayLengthDOM());
        decreasingArray = returnDecreasingArray(returnArrayLengthDOM());
        $('#1').val(mixedArray);
        $('#10').val(decreasingArray);
    } else {
        mixedArray,
        decreasingArray = [];
        $('#1').val("");
        $('#2').val("");
        $('#3').val("");
        $('#4').val("");
        $('#5').val("");
        $('#6').val("");
        $('#7').val("");
        $('#8').val("");
        $('#9').val("");
        $('#10').val("");
        mixedArray = returnMixedArray(returnArrayLengthDOM());
        decreasingArray = returnDecreasingArray(returnArrayLengthDOM());
        $('#1').val(mixedArray);
        $('#10').val(decreasingArray);
    }
}

function returnArrayLengthDOM() {
    return parseInt(document.getElementById("array").value);
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

function returnMixedArray(length) {
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

function warningUp(funcFromWarning, i) {
    for (x = 0; x < i; x++) {
        let warningUp = returnArrayLengthwise(returnArrayLengthDOM());
        funcFromWarning(warningUp);
    }
}

function startSort() {
    if ($('#2').val().length === 0) {
        let sortBubbleMixedArray = new Promise(function(resolve, reject) {
            warningUp(arraySortBubble, 100)
            let time = performance.now();
            bubble = arraySortBubble(mixedArray);
            let time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
            reject(new Error("время вышло!"));
        });
        sortBubbleMixedArray.then(
            function() {
                $('#2').val(bubble);
                $('#3').val(TimeToSort);
            }, );

        let sortBubbleDecreasingArray = new Promise(function(resolve, reject) {
            warningUp(arraySortBubble, 100)
            let time = performance.now();
            bubble2 = arraySortBubble(decreasingArray);
            let time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
            reject(new Error("время вышло!"));
        });
        sortBubbleDecreasingArray.then(
            function() {
                $('#9').val(bubble2);
                $('#4').val(TimeToSort);
            }, );

        let sortSelectionMixedArray = new Promise(function(resolve, reject) {
            mixedArray = returnMixedArray(returnArrayLengthDOM());
            warningUp(arrSortSelection, 100)
            let time = performance.now();
            selection = arrSortSelection(mixedArray);
            let time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
            reject(new Error("время вышло!"));
        });
        sortSelectionMixedArray.then(
            function() {
                $('#6').val(TimeToSort);
            }, );

        let sortSelectionDecreasingArray = new Promise(function(resolve, reject) {
            decreasingArray = returnDecreasingArray(returnArrayLengthDOM());
            warningUp(arrSortSelection, 100)
            let time = performance.now();
            selection = arrSortSelection(decreasingArray);
            let time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
            reject(new Error("время вышло!"));
        });
        sortSelectionDecreasingArray.then(
            function() {
                $('#5').val(TimeToSort);
            }, );

        let sortInsertionMixedArray = new Promise(function(resolve, reject) {
            mixedArray = returnMixedArray(returnArrayLengthDOM());
            warningUp(arrSortInsertion, 100)
            let time = performance.now();
            insertion = arrSortInsertion(mixedArray);
            let time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
            reject(new Error("время вышло!"));
        });
        sortInsertionMixedArray.then(
            function() {
                $('#8').val(TimeToSort);
            }, );

        let sortInsertionDecreasingArray = new Promise(function(resolve, reject) {
            mixedArray = returnMixedArray(returnArrayLengthDOM());
            warningUp(arrSortSelection, 100)
            let time = performance.now();
            selection = arrSortSelection(decreasingArray);
            let time2 = performance.now();
            TimeToSort = ((time2 - time).toFixed(5));
            resolve("done");
            reject(new Error("время вышло!"));
        });
        sortInsertionDecreasingArray.then(
            function() {
                $('#7').val(TimeToSort);
            }, );
    } else {
        generateArray();
        startSort();
    }
}