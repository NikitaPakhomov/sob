function checkAnagram(anagramArray) {

    for (let i = 0; i < anagramArray.length - 1; i++) {

        if (sortirovka(anagramArray[i]) !== sortirovka(anagramArray[i + 1])) {
            return false;
        }
    }
    if (anagramArray.length > 1) {
        return true;
    } else {
        return false;
    }

}
function sortirovka(array) {
    return array.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
}





