const aboutus = (function(){
    const nodes = document.querySelector("#content");
    function create(){
        const headline = document.createElement("div");
        headline.classList.add("headline")
        headline.textContent = "Our Story: Passion on a Plate";
        nodes.appendChild(headline);

        let str = `Founded in 2016, Spice Symphony was born from a simple idea — to blend rich culinary
        traditions with modern tastes. Our chefs bring decades of experience and a deep respect for ingredients and 
        culture, crafting each dish with precision, flavor, and love.

        Our kitchen is the heart of our restaurant, where every ingredient is thoughtfully selected and 
        every plate is a promise of quality. Over the years, we've built a loyal community of food lovers who 
        appreciate authenticity, creativity, and warmth.

        From farm to table, from tradition to innovation, from our hearts to your plates — we invite you 
        to become part of our flavorful journey.`;

        const subHeading =  document.createElement("div");
        subHeading.classList.add("message");
        subHeading.textContent = str;
        nodes.appendChild(subHeading);

    }

    return {create};


})();

export {aboutus};