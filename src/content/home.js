
import homeImage from "../resources/redd-francisco-0KGiGx6_di0-unsplash.jpg";
import "./styleHome.css";

const home = (function(){

    const nodes = document.querySelector("#content");


    function create(){
        const headline = document.createElement("div");
        headline.classList.add("headline")
        headline.textContent = "A Taste of Tradition with a Modern Twist";
        nodes.appendChild(headline);

        const image = document.createElement("img");
        image.classList.add("homeImage");
        image.src= homeImage;

        nodes.append(image);

        const subHeading =  document.createElement("div");
        subHeading.classList.add("subHeading");
        subHeading.textContent = "\"Welcome to Spice Symphony— where every dish tells a story.We serve handcrafted meals inspired by rich cultural traditions, using fresh ingredients, bold spices, and a touch of culinary innovation.\"";
        nodes.appendChild(subHeading);


        const content =  document.createElement("div");
        content.classList.add("content");
        content.textContent = "At Spice Symphony, we believe food is more than just sustenance — it’s an experience. From the sizzle of the pan to the aroma that fills the air, we invite you to take a flavorful journey that satisfies your senses and warms your soul.Whether you're here for a quick lunch, a family dinner, or a romantic evening, our team is dedicated to making your time unforgettable. Join us and experience a perfect balance of flavor, atmosphere, and hospitality.";
        nodes.appendChild(content);

        const listHeading = document.createElement("div");
        listHeading.classList.add("listHeading");
        listHeading.textContent = "what we have here";
        nodes.appendChild(listHeading);

        const list = document.createElement("ul");
        list.classList.add("homeList");
        let str = "🌿 Fresh ingredients daily.🍛 Authentic Indian & fusion cuisine.🕯️ Cozy and elegant ambiance.🛵 Online ordering and home delivery.🧑‍🍳 Experienced chefs";
        str = str.split(".");

        for(let i = 0; i < 5;i++){
            let li = document.createElement("li");
            li.textContent = str[i];
            list.appendChild(li);
        }

        nodes.append(list);
   
    }

    return {create};


})();

export {home};