//   [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]
//    4    7    2    5    1    6    8    0
//
//          0                              4
//     1        2                ->    7       2
//  3     4  5     6                5    1  6    8

// left-child = parent * 2 + 1  , right-child = parent * 2 + 2

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
            if (a[parent_idx] < a[bigger_child_id               x]) {
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

// Frequency count...  iterating over input characters and tallying by character

// Make a heap of frequency / tree nodes associations

// Grab two nodes that are the 'smallest' (lowest frequency), create an internal node with those two as children,
//     stop when only one node left
// Re-encode input using our new knowledge expressed in the huffman tree that we just built
//  - Make a dictionary mapping letters to bit strings
//  - Go through each input letter, lookup mapping, output bits
 
 // string -> array of integers index by character containing the frequency count for each character

// str = "hobgoblins are green"
// str = "evles have pointy ears"
function charCounter(str) {
    let counts = [];
    
    for (let i = 0; i<str.length; ++i) {
        let char = str[i];
        if (char in counts) {
            counts[char] = counts[char] + 1;
        } else {
            counts[char] = 1;
        }
    }
    return counts;    
}

function addToHeap(heap, val, compare) {
    const heap_begin_idx = 0;
    var heap_end_idx = heap.length;
    heap.push(val);
    var current_child_idx = heap_end_idx;
    while (current_child_idx <= heap_begin_idx) {
        var current_parent_idx = Math.floor((current_child_idx - 1) / 2);
        if (compare(heap[current_child_idx],  heap[current_parent_idx]) > 0) {
            const saved_value = heap[current_child_idx];
            heap[current_child_idx] = heap[current_parent_idx];
            heap[current_parent_idx] = saved_value;
            current_child_idx = current_parent_idx;
        } else {
            break;
        }
    }
}

// Returns the top of the heap and removes it.  But, the heap is _still_ a heap
// after this function completes.
function popFromHeap(heap, compare) {
}

function frequencyToNodes(counts) {
    nodelist = []
    for (letter in counts) {
        nodelist.push({'letter': letter, 'frequency': counts[letter]})
    }
}


/**************************************************************************************

==== Associative array ==== (https://www.dyn-web.com/javascript/arrays/associative.php)
// counts= []
// counts['a']= 5
// > 'a' in counts
// true
// > 'b' in counts
// false
// counts['a'] = 5
// counts['b'] = 3
// > charCounter("hobgoblins are green")
// [
//   h: 1, o: 2, b: 2,
//   g: 2, l: 1, i: 1,
//   n: 2, s: 1, ' ': 2,
//   a: 1, r: 2, e: 3
// ]
// [ O10:20 ];

       / \
      0   1

        O2: 3    O3: 4    O4: 4
         / \      / \      /   \
       a:1 o:2  b:2 g:2  n:2 ' ':2
    
    
                 O5: 4
              ___/    \___
             /            \
           r:2           O0:2
                         /  \
                        h:1 l:1
 
                 O6: 5
              ___/    \___
             /            \
           O1:2           e:3
           / \
         i:1 s:1
         
         
         O7: 7 (O2, O3)
         O8: 8 (O4, O5)
         O9:12 (O6, O7)
        O10:20 (O8, O9)
        
        e: 101
        a: 1100
        r: 010    - Huffman tree

*/

// AST (aka Abstract Syntax Tree)
 
//      x * (a + b)
//
//         *
//      x      +
//           a   b

//     ((x * a) + b) - 5
//               -
//         +        5
//      *    b
//    x   a
