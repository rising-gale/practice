class circleArray{
    elements = [];
    add(elem){
        this.elements.push(elem);
    }
    get(index){
        if(index >= 0)
        {
            while(index >= this.elements.length)
            {
                index -= this.elements.length;
            }
        } else 
        {
            while(index < 0)
            {
                index += this.elements.length;
            }
        }
        return this.elements[index];
    }
}

// let circledArray = new circleArray();
// circledArray.add("Kiev");
// circledArray.add("Kharkiv");
// circledArray.add("Kherson");
// console.log(circledArray.get(-2));