
const contact = (function(){
    const nodes = document.querySelector("#content");
    function Heading(str){
        let listHeading = document.createElement("div");
        listHeading.classList.add("listHeading");
        listHeading.textContent = str;
        nodes.appendChild(listHeading);
    }

    function createList(str,size){
        str = str.split(".");
        const list1 = document.createElement("ul");
        list1.classList.add("menuList");
        for(let i = 0; i < size;i++){
            let li = document.createElement("li");
            li.innerHTML = str[i];
            list1.appendChild(li);
        }
        nodes.appendChild(list1);
    }


    function create(){
        const headline = document.createElement("div");
        headline.classList.add("headline")
        headline.textContent = "Deliciously Crafted, Authentically Served";
        nodes.appendChild(headline);


        const subHeading =  document.createElement("div");
        subHeading.classList.add("subHeading");
        subHeading.textContent = "\"Whether you're booking a table, placing an order, or just have a question, we're always here to help.\"";
        nodes.appendChild(subHeading);


        let headingStr = ["📍 Address","📱 Phone","📧 Email","🕒 Opening Hours"];
        let str = ["123 Flavour Street, Foodie Town, IN 654321","+91-9876543210","hello@spicesymphony.com","Monday – Friday: 11 AM – 11 PM.Saturday – Sunday: 10 AM – 12 Midnight"]
        for(let i =0; i<4;i++){
            Heading(headingStr[i]);
            
            if(i ==3){
                createList(str[i],2);
            }
            else{
            createList(str[i],1);
            }
        }


    }

    return {create};

})();

export{contact};