# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.


The worst case for this implementation is $\Theta$(n^2). This occurs here when the pivot is chosen as the "high"(last element) and it is the biggest or smallest element. By doing this, the partioning is only reducing the array by one each iteration which is not efficient as it makes unbalanced partitions. 



Sources

https://www.youtube.com/watch?v=7h1s2SojIRw - explained QS

https://github.com/COSC3020/quicksort-peppersmoke42 -  viewed this repository for parition 



"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
