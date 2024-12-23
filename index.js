function sortRGBArray(arr){
    let low = 0
    let medium = 0 
    let high = arr.length - 1

    while (medium <= high){
        if (arr[medium] === 'B'){
            [arr[low], arr[medium]] = [arr[medium], arr[low]]
            low++
            medium++
        } else if (arr[medium] === 'G'){
            medium++
        } else if (arr[medium] === 'R'){
            [arr[medium], arr[high]] = [arr[high], arr[medium]]
            high--
        }
    }
    return arr
}



let inputArray = ['R', 'G', 'B', 'G', 'G', 'R', 'B', 'B', 'G']
let resultArray = sortRGBArray(inputArray)
console.log(resultArray)
