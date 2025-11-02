/**
//  * O(N log N) solution using a Fenwick Tree (Binary Indexed Tree).
//  * This avoids simulating rotations by calculating the count of remaining elements
//  * in the cyclic path in O(log N) time per removal.
//  * @param {number[]} nums The input array of distinct numbers.
//  * @return {number} The total number of operations.
//  */