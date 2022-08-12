function findKhrom(string){
    let words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
        if(words[i].indexOf('хром') >= 0)
        {
            return words[i];
        }
    }
}

// console.log(findKhrom("Абоба стахромирован афа"));