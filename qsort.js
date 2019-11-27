quickSort = arr => {
    if (arr.length <= 1) { return arr; }

    const pivot = arr.shift();
    const smaller = arr.filter(val => val < pivot);
    const bigger = arr.filter(val => val > pivot);
    return quickSort(smaller).concat(pivot).concat(quickSort(bigger));
}

/**
 * Sorts an array in place.
 * @param {Array} a items An array containing the items.
 */
quickSort2 = arr => {
    qsortPartition = (arr, begin, end) => {
        if ((end - begin) <= 1) {
            return;
        }

        const pivoti = begin;
        const pivotv = arr[pivoti];
        var lessi = begin + 1;
        var greateri = end - 1;
        var done = false;
        while (!done) {
            while (!done && (arr[lessi] <= pivotv)) {
                if (lessi >= greateri) {
                    arr[pivoti] = arr[lessi];
                    arr[lessi] = pivotv;
                    done = true;
                } else {
                    ++lessi;
                }
            }
            while (!done && (arr[greateri] > pivotv)) {
                if (lessi >= greateri) {
                    --lessi;
                    if (lessi > pivoti) {
                        arr[pivoti] = arr[lessi];
                        arr[lessi] = pivotv;
                    }
                    done = true;
                } else {
                    --greateri;
                }
            }
            if (!done) {
                const tmp = arr[lessi];
                arr[lessi] = arr[greateri];
                arr[greateri] = tmp;
                const diff = greateri - lessi;
                if (diff > 1) {
                    --lessi;
                }
                --greateri;
            }
        }
        qsortPartition(arr, begin, lessi);
        qsortPartition(arr, lessi + 1, end);
    }

    qsortPartition(arr, 0, arr.length);
    return arr;
}


/**
 * Sorts an array in place.
 * @param {Array} a items An array containing the items.
 */
bubbleSort = ary => {
    for (var i = 0; i < ary.length; ++i) {
        for (j = 0; j < i; ++j) {
            if (ary[j] > ary[j + 1]) {
                const save = ary[j + 1];
                ary[j + 1] = ary[j];
                ary[j] = save;
            }
        }
    }
    return ary;
}

makeSequence = size => {
    const ary = Array(size);
    for (var i = 0; i < ary.length; ++i) {
        ary[i] = i;
    }
    return ary;
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
shuffleSequence = ary => {
    for (var i = ary.length - 1; i > 0; --i) {
        const selection = Math.floor(Math.random() * (i + 1));
        const save = ary[i];
        ary[i] = ary[selection];
        ary[selection] = save;
    }
    return ary;
}
