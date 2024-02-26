// # Coins

// Given the coins _100, 25, 10, 5, 1_, find the smallest number of coins of each denomination for any given value. For example:

// ```text
// (107) ➞ 1 * 100,  1 * 5, 2 * 1
// (57) ➞ 2 * 25,  1 * 5, 2 * 1
// (34) ➞ 1 * 25,  1 * 5, 4 * 1
// (226) ➞ 2 * 100, 1 * 25, 1 * 1
// ```
// function denomination(num) {
//     const coins = [100, 25, 10, 5, 1]
//     const numbers = []
//     for (let i = 0; i < coins.length; i++) {
//         for (let j = coins[i]; j <= num; j++) {
//             numbers[j] = Math.min(numbers[j], numbers[j - coins[i]] + 1)
//         }
//         }
//         return numbers
//     }
    

// console.log(denomination(107))

// function denomination(num) {
//     const coins = [100, 25, 10, 5, 1]
//     const numbers = []

//     if (num !== 0 && num % 100 === 0) {
//         let coins100 = Math.round(num / 100)
//         let coins25 = Math.round((num - (coins100 * 100)) / 25)
//         let coins10 = Math.round((num - ((coins100 * 100) + (coins25 * 25))) / 10)

//         numbers.push(coins100)
//         numbers.push(coins25)
//         numbers.push(coins10)
//     }
// }
//  console.log(denomination(107))