//   [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]
//    4    7    2    5    1    6    8    0
//
//          0
//     1        2
//  3     4  5     6

//  [0] [1] [2] [3] [4] [5] [6]
//   4   9   11   12   10    7    1

// Make heap

//   4   9
//   9   4   11
//  11   4    9   12
//  11  12    9   4
//  12  11    9   4    10
//  12  11    9   4    10    7
//  12  11    9   4    10    7    1

// ----------------

//   1  11    9   4    10    7  | 12


//   1  11    9   4    10    7  | 12
//  11  10    9   4     1    7  | 12
//   7  10    9   4     1  | 11   12
//  10   7    9   4     1  | 11   12
//   9   7    1   4  |  10   11   12
//   7   4    1 | 9     10   11   12
//   1   4    7   9     10   11   12


//  13  11   12   4    10    7    9


function heapsort(array_to_sort)  // modifies input array
{
    let a = array_to_sort;
    const heap_begin_idx = 0;  // Begin is always the first thing, and end is one past the last thing
    let heap_end_idx = 1;
    if (a.length < 2) {
        return a;
    }
    while (heap_end_idx < a.length) {
        let current_child_idx = heap_end_idx;
        heap_end_idx = heap_end_idx + 1;
        while (current_child_idx > heap_begin_idx) {
            let current_parent_idx = Math.floor((current_child_idx - 1) / 2)
            // If our invariant is broken for this parent and child
            if (a[current_child_idx] > a[current_parent_idx]) {
                // Fix it
                const saved_value = a[current_child_idx];
                a[current_child_idx] = a[current_parent_idx];
                a[current_parent_idx] = saved_value;
                // Move up to see if maybe we just broke the invariant for the parent.
                current_child_idx = current_parent_idx;
            } else {
                // The invariant has been restored! Yay!
                break;
            }
        }
    }
    // We're done!  Now we have a heap!

    while (heap_end_idx > heap_begin_idx) {
        {
            heap_end_idx = heap_end_idx - 1;
            const saved_value = a[heap_end_idx];
            a[heap_end_idx] = a[heap_begin_idx];
            a[heap_begin_idx] = saved_value;
        }
        //   11    1    9   4    10    7  | 12
        let parent_idx = heap_begin_idx;
        let bigger_child_idx = parent_idx * 2 + 1;
        while (bigger_child_idx < heap_end_idx) {
            if (((bigger_child_idx + 1) < heap_end_idx)
                && (a[bigger_child_idx] < a[bigger_child_idx + 1]))
            {
                bigger_child_idx = bigger_child_idx + 1;
            }
            if (a[parent_idx] < a[bigger_child_idx]) {
                const saved_value = a[bigger_child_idx];
                a[bigger_child_idx] = a[parent_idx];
                a[parent_idx] = saved_value;
                parent_idx = bigger_child_idx;
                bigger_child_idx = parent_idx * 2 + 1;
            } else {
                break;
            }
        }
    }
    return a;
}
