function numberCompare (num1, num2) {
    return num1 - num2
}

[5,6,1,15,10].sort(numberCompare)


function compareByLen(srt1, srt2) {
    return srt1.length - srt2.length
}

["Steele", "Colt", "Data Structure", "Algorithms"].sort(compareByLen)