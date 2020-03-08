#   [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]
#    4    7    2    5    1    6    8    0
#
#          0
#     1        2
#  3     4  5     6



function heapsort(a) {
# Heapsort algorithm

    function heapify_down(a, heapend) {
        var complete = false;
        var i_parent = 0;
        while (!complete && (i_parent < i_heapend)) {
            var i_childleft = i_parent * 2 + 1;
            var i_childright = i_parent * 2 + 2;
            var i_comparechild = i_childleft;
            if ((i_childright < i_heapend) && (a[i_childright] > a[i_childleft])) {
                i_comparechild = i_childright;
            }
            if ((i_comparechild < i_heapend) && (a[i_comparechild] > a[i_parent])) {
                var temp = a[i_comparechild];
                a[i_childleft] = a[i_parent];
                a[i_parent] = temp;
                i_parent = i_comparechild;
            } else {
                complete = true;
            }
        }
    }

    function heapify_up(a, newchild) {
        var complete = false;
        while (!complete) {
            var i_parent = Math.floor((newchild - 1) / 2);
    }


    for (var i_heapend = 1; i_heapend <= a.length; ++i_heapend) {
    }
}


#   [0]  [1]  [2]  [3]  [4]  [5]  [6]  [7]
#    7    4    2    5    1    6    8    0
