# Voice assistant Support for RecipeDB.
Techstack used for frontend : React JS.

## How to use it?

When you open the Website, you will see RecipeDB Header, two buttons, **SPEAK** and **CLEAR**, followed by a text area and a submit button.
Upon clicking on SPEAK button, the application starts listening to your query. As you speak, the text area will show our application's interpretation of your query. This is an editable text area, so if you think the application heard you wrong, you can make appropriate changes. After ensuring that the text appearing is what you wanted to say, you can now submit your query by clicking the **SUBMIT** button. At last, you can see the RecipeDB Footer.

After clicking, a new tab will open in your browser. As a result of your query, a table containing all the recipes fulfilling the filters added to your question will appear. The table will have four columns: **Recipe Title**, **Region**, **Country**, and **Servings**.  The table will show 20 recipes at a time. You can scroll down, see the current page number you are in, and navigate between pages using two buttons. If you want to know more about a particular recipe from the table, click on the Recipe name of that specific recipe. 

After clicking, a new tab will open in your browser. It will contain the Recipe Title at the top, followed by the recipe image, its cuisine and preparation time if available.  After that, you will see the list of all ingredients used in the recipe and, below it, all the cooking instructions. 

In each window, you can see the RecipeDB header at the top and the footer at the bottom. The header contains 3 Items in it. **Home** will navigate to the home page of our application, **Contact** will navigate to the contact details page of Prof. Ganesh Bagler, and **CoSyLab** will navigate to the CoSyLab website.

## Code documentation for frontend: 

“Apps.js” : This files contains all the pages that our application has. We have 4 different kind of pages : Home Page, Recipe List Page, Recipe Info Page and Contact Page.

“Home.js”: This handles the Home Page of our Applications. It has Routes for all the different pages. 

“Home.css”: Styling of our home pages is done in this file

“RecipeList.js” : This file loads the list of all recipies particular to user Transcript by making an  api call to backend. 

“RecipeList.css”: Styling done for Recipe List Page.

“RecipeInfo.js” : This page renders all the information of a particular recipe in a Recipe Info page using some API calls to get the information about a recipe. 

“RecipeInfo.css”: Styling done for Recipe Info Page.

“Contact.js”: This page renders all the Contact Us page. 

“Contact.css”: Styling for the Contact Us page.

“Header.js” : Handles the Header in all of our pages. Header contains 3 navigation items in it. 

1. Go to Home Page of our Application
2. Go to Contact Us Page .
3. Go to CoSyLab Website.

“Header.css”: Styling sheet for header.

“Footer.js” : This file handles the footer across all the pages. 

“Footer.css”: Styling sheet for footer.

“Columns.js” : Contains the column meta data for our Recipe List Table.

“BasicTable.js”: This create and set different table properties of the Recipe List Table.

“BasicTable.css”: Styling done to our Recipe List Table.


Backend :
TechStack :
Express, NodeJS 


Whenever you click on **SUBMIT** button the request gets forwarded to recipeDB backend which internally calls recipeDB api to fetch the recipes based on the entities extracted from the query.


For example - 
A query like  **"Show me some pakistani recipes having ginger"** .
For this type of query the entities extracted will be {country: **pakistani** , ingredient : **ginger**} , So we will display the recipes from Pakistan that have ingredient **ginger** present. 

The voice based queries can be made on recipeDB based on **cuisine (country)** , **ingredients** , **(ingredient category)** , **cookingProcess** , **continent**,**utensils** etc.

For entity extraction we used the original ner dictionaries already of CosyLab. We used the nltk module for finding and extracting important information from the text received from frontend after the user clicks the **SUBMIT** button. 

