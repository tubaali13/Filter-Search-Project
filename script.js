const recipes = [
{name: "Bacon And Cheese Stuffed Plantains", image:"https://img.buzzfeed.com/video-api-prod/assets/bd33ccb13c774097bce6f3948f4f2c44/Video_Thumb.jpg"},
{name: "Eton Mess Pops", image:"https://img.buzzfeed.com/video-api-prod/assets/45ec337f256749338f6ddc2b91a5a223/Video_Thumb.jpg"},
{name: "Country Ham Biscuits With Honey Sriracha Mayo", image:"https://img.buzzfeed.com/video-api-prod/assets/916387cd957c468e8d0fd58d6e7132ef/BFV5861_CountryHamBiscuit-ThumbTextless1080.jpg"},
{name: "Rice Cooker Blue Velvet Cake", image:"https://img.buzzfeed.com/video-api-prod/assets/7721b2cf7e9a4b65bec2252eb951618d/BFV4117_RiceCookerBlueVelvetCake-Thumb1080_c.jpg"},
{name: "Potato Bhajias", image:"https://img.buzzfeed.com/video-api-prod/assets/5c8fd8eda9b7413e8e4793fccc1f3734/Video_Thumb.jpg"},
{name: "4-Ingredient Kiwi-Strawberry Fruit Leathers", image:"https://img.buzzfeed.com/video-api-prod/assets/e25c2f050adf4e4f983862c1365314db/BFV16952_4-IngredientStrawberry-KiwiFruitLeathers_ThumbFB.jpg"},
{name: "Orange Semifreddo", image:"https://img.buzzfeed.com/video-api-prod/assets/0d447e0b9acd49ef9ff9bf98d4369dd7/IMG_2992_THUMB.jpg"},
{name: "Veggie Ribbon Pie", image:"https://img.buzzfeed.com/video-api-prod/assets/1afbb148012546edbbbc0534a7412746/BFV17624_VeggieRibbonPieThumb.jpg"}
]

var cardContainer = document.querySelector(".titles");
const RecipeCard = (recipeList) => {

    for( let i = 0; i < recipeList.length; i++) {
    	var card =  document.createElement("div");
		card.classList.add("card");
		var image = document.createElement("img");
		var container = document.createElement("div");
		container.classList.add("container");
		var recipeName = document.createElement("h4");
    	image.src = recipeList[i].image;
        recipeName.innerHTML = recipeList[i].name;
        container.appendChild(recipeName);
        card.appendChild(image); 
        card.appendChild(container);
		cardContainer.appendChild(card);
    }	  		
}

RecipeCard(recipes);

function myFunction() {
	var card = document.querySelectorAll(".card");
	var input, filter, a, i, txtValue,b;

    input = document.querySelector("input");
    filter = input.value.toUpperCase();

	for (i = 0; i < card.length; i++) {
		a = document.querySelectorAll("h4")[i];
	    txtValue = a.textContent || a.innerText;
	    if (txtValue.toUpperCase().indexOf(filter) > -1) {
	        card[i].style.display = "";
	    } else {
	        card[i].style.display = "none";
	    }
    }
}


