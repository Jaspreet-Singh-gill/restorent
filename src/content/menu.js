
import "./menuStyle.css";

const menu = (function(){
    const nodes = document.querySelector("#content");
    function sublistHeading(name){
        const list = document.createElement("div");
        list.classList.add("sublistHeading");
        list.textContent = name;
        nodes.appendChild(list);
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
        subHeading.textContent = "\"Our menu is a carefully curated selection of traditional favorites and modern innovations. Each dish is crafted with love, using high-quality ingredients and secret spice blends that make every bite unforgettable.\"";
        nodes.appendChild(subHeading);

        let listHeading = document.createElement("div");
        listHeading.classList.add("listHeading");
        listHeading.textContent = "🌶️ Starters";
        nodes.appendChild(listHeading);


        let str = "<em>Tandoori Paneer Tikka</em> – Grilled cottage cheese with spices.<em>Crispy Corn Salt & Pepper</em> – Indo-Chinese delight.<em>Chicken Malai Seekh Kebab</em> – Creamy, juicy skewers";
        str = str.split(".");
        const list1 = document.createElement("ul");
        list1.classList.add("menuList");
        for(let i = 0; i < 3;i++){
            let li = document.createElement("li");
            li.innerHTML = str[i];
            list1.appendChild(li);
        }
        nodes.appendChild(list1);


        listHeading = document.createElement("div");
        listHeading.classList.add("listHeading");
        listHeading.textContent = "🍛 Mains";
        nodes.appendChild(listHeading);

        let new_str = ["Vegetarian",'Non-Vegetarian','Fusion Specials'];
        sublistHeading(new_str[0]);

        str = "<em>Paneer Butter Masala</em> – Rich tomato & cream gravy.<em>Dal Tadka</em> – Yellow lentils tempered with ghee";
        createList(str,2);

        sublistHeading(new_str[1]);
        str = "<em>Butter Chicken</em> – A timeless classic.<em>Rogan Josh</em> – Kashmiri lamb curry";
        createList(str,2);

        sublistHeading(new_str[2]);
        str = "<em>Masala Pasta</em> – Italian meets Indian.<em>Tandoori Pizza</em> – Baked in clay oven";
        createList(str,2);


        listHeading = document.createElement("div");
        listHeading.classList.add("listHeading");
        listHeading.textContent = "🍨 Desserts & Drinks";
        nodes.appendChild(listHeading);

        str = "Gulab Jamun, Rasmalai, Chocolate Lava Cake.Lassi, Masala Chai, Mocktails";
        createList(str,2);







    }

    return{create};

})();

export {menu};