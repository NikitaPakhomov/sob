function encode(text, openAlph, secureAlph) {
    let result = "";

    if (text.length > 0 && openAlph.length > 0 && secureAlph.length > 0) {
        for (let i = 0; i < text.length; i++) {
            for (let j = 0; j < openAlph.length; j++) {
                if (openAlph.toLowerCase().includes(text[i].toLowerCase())) {
                    if (text[i].toLowerCase() === openAlph[j].toLowerCase()) {
                        if (secureAlph[j] === undefined) {
                            result += text[i];
                        } else {
                            if (text[i] === text[i].toUpperCase()) {
                                result += secureAlph[j].toUpperCase();
                            } else {
                                result += secureAlph[j];
                            }
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



