function encode(text, openAlph, secureAlph) {
    let result = "";
    text = text.toLowerCase();
    openAlph = openAlph.toLowerCase();
    secureAlph = secureAlph.toLowerCase();
    if (text.length > 0 && openAlph.length > 0 && secureAlph.length > 0) {
        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < openAlph.length; j++) {
                if (openAlph.includes(text[i])) {
                    if (text[i] == openAlph[j]) {
                        if (secureAlph[j] === undefined) {
                            result += text[i];
                        } else {
                            result += secureAlph[j];
                        }
                    }
                } else {
                    result += text[i];
                    break;
                }

            }
        }
    }

    return result;
}

console.log(encode('АБВГДЙ', 'АБВГДЕЕЗЖ', '1234567'));

