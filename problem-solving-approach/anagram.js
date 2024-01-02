function validAnagram(first, second) {
    if(first.length !== second.length){
        return false
    }
    //check if both words are the same length
    

    const lookup = {}

    for (let i = 0; i < first.length; i++){
        let letter = first[i]
        //if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1
    }

    for (let i = 0; i < second.length; i++){
        let letter = second[i]

        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1
        }
    }

    return true
}


validAnagram('anagram', "nagaram")
