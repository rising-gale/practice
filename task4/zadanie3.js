function strPad(input, fullLen, fillStr, fillType = 'FILL_RIGHT'){
    if(fullLen < input.length) return;
    let lenToFill = fullLen - input.length;
    let fillStrLen = fillStr.length;
    let fillTimes = parseInt(lenToFill/fillStrLen);
    // console.log(fillTimes);
    let result = '';
    switch(fillType)
    {
        case 'FILL_RIGHT':
            for (let i = 0; i < fillTimes; i++) {
                input += fillStr;
            }
            if(input.length < fullLen){
                let leftToFill = fullLen - input.length;
                for (let i = 0; i < leftToFill; i++) {
                    input += fillStr[i];
                }
            }
            return input;
        case 'FILL_LEFT':
            for (let i = 0; i < fillTimes; i++) {
                result += fillStr;
            }
            if((result.length + input.length) < fullLen){
                let leftToFill = fullLen - (result.length + input.length);
                for (let i = 0; i < leftToFill; i++) {
                    result += fillStr[i];
                }
            }
            result += input;
            return result;
        case 'FILL_BOTH':
            if(fillTimes % 2 == 0)
            {
                // console.log("even");
                for (let i = 0; i < fillTimes / 2; i++) {
                    result += fillStr;
                }
                result += input;
                for (let i = 0; i < fillTimes / 2; i++) {
                    result += fillStr;
                }
                if(result.length < fullLen){
                    let leftToFill = fullLen - result.length;
                    for (let i = 0; i < leftToFill; i++) {
                        result += fillStr[i];
                    }
                }
            } else{
                // console.log("odd");
                for (let i = 0; i < fillTimes / 2; i++) {
                    result += fillStr;
                }
                result += input;
                for (let i = 0; i < fillTimes / 2 - 1; i++) {
                    result += fillStr;
                }
                if(result.length < fullLen){
                    let leftToFill = fullLen - result.length;
                    for (let i = 0; i < leftToFill; i++) {
                        result += fillStr[i];
                    }
                }
            }
            return result;
    }
}

// console.log(strPad("star",14,'_*_', 'FILL_BOTH'));