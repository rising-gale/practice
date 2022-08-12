
function testString(string) {
    let flag = true;
    let count_kvadratnih = 0;
    let count_kruglih = 0;
    for (let i = 0; i < string.length; i++) {
        if(flag !== true) break;
        // console.log(string[i]);
        switch (string[i]) {
            case '(':
                count_kruglih++;
                let kvadratnaya = false;
                for (let j = i+1; j < string.length; j++) {
                    if(string[j]=='[') {
                        kvadratnaya = true
                    }
                    else if(string[j]==']' && kvadratnaya) 
                    {
                        kvadratnaya=false;
                    } else if(string[j]==']' && !kvadratnaya)
                    {
                        flag=false;
                        break;
                    } else if(string[j]==')' && kvadratnaya)
                    {
                        flag = false;
                        break;
                    } else if(string[j]==')') break;
                } 
                break;
            case '[':
                count_kvadratnih++;
                let kruglvaya = false;
                for (let j = i+1; j < string.length; j++) {
                    if(string[j]=='(') {
                        kruglvaya = true
                    }
                    else if(string[j]==')' && kruglvaya) 
                    {
                        kruglvaya=false;
                    } else if(string[j]==')' && !kruglvaya)
                    {
                        flag=false;
                        break;
                    } else if(string[j]==']' && kruglvaya)
                    {
                        flag = false;
                        break;
                    } else if(string[j]==']') break;
                } 
                break;
            case ')':
                count_kruglih--;
                break;
            case ']':
                count_kvadratnih--;
                break;
            default:
                break;
        }
    }
    if(count_kruglih != 0 || count_kvadratnih != 0) flag = false;
    return flag;    
}

// let string = "isu[[]syaf([)[)]]ts(crs)cs";
// let string = "isu[syv(stc]ts(scr))cs";
// console.log(testString(string));