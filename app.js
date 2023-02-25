let subject = ['the', 'my', 'your', 'our', 'their']
let adjective = ['best', 'ultimate', 'uber', 'definitive']
let about = ['coding', 'design', 'computing', 'programming']
let where = ['.com', '.io', '.net', '.us']


console.log("hola")
for (let a = 0; a < subject.length; a++) {
    
    for (let b = 0; b < adjective.length; b++) {
        
        for (let c = 0; c < about.length; c++) {
            
            for (let d = 0; d < where.length; d++) {
                
                let randonName = `${subject[a]}${adjective[b]}${about[c]}${where[d]}`;

                // let div = document.createElement ('div')
                // div.innerText = `${subject[a]}${adjective[b]}${about[c]}${where[d]}`
                // document.body.appendChild(div);
                console.log(randonName)
            }

        }

    }

}