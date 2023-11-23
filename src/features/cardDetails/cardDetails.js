import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    "I'm Back!": [
        ["/assets/img/1629619743.webp", "Fettucine Alfredo Pasta", "Pasta Made In Yummiest White Sauce With Chicken Chunks Topped With Cheese", "990.00"]
    ],
    "Starters": [
        ["/assets/img/starter/start1.webp", "Cheezy Sticks", "Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.", "590.00"],
        ["/assets/img/starter/start2.webp", "Oven Baked Wings", "Fresh Oven Baked Wings Served With Dip Sauce", "550.00"],
        ["/assets/img/starter/start3.webp", "Flaming Wings", "Fresh Oven Baked Wings Tossed In Hot Peri Peri Sauce And Served With Dip Sauce", "600.00"],
        ["/assets/img/starter/start4.webp", "Calzone Chunks", "4 Pcs Stuffed Calzone Chunks Served with Sauce & Fries", "1,050.00"],
        ["/assets/img/starter/start5.webp", "Arabic Rolls", "4 Pcs Arabic Rolls Stuffed with Yummiest Mix Served with Sauce", "650.00"],
        ["/assets/img/starter/start6.webp", "Behari Rolls", "4 Pcs Behari Rolls Stuffed with Yummiest Mix Served with Sauce", "650.00"]
    ],
    "Somewhat Local": [
        ["/assets/img/local/local1.webp", "Chicken Tikka", "Tender Chunks of Marinated Grilled Chicken with Savory Onion", "590.00"],
        ["/assets/img/local/local2.webp", "Chicken Fajita", "An Authentic Taste of Fajita Marinated Chicken Onion and Bell Peppers.", "590.00"],
        ["/assets/img/local/local3.webp", "Chicken Lover", "Extreme Quantity of Chicken and Onion with Rich Mozzarella Cheese", "590.00"],
        ["/assets/img/local/local4.webp", "Chicken Tandoori", "Our Traditionally Developed Tandoori Chicken with Onion, Olives, Jalapeno and Tomato Sauce", "590.00"],
        ["/assets/img/local/local5.webp", "Hot N Spicy", "Hot and Spicy Chicken Onion, Jalapeno", "590.00"],
        ["/assets/img/local/local6.webp", "Vegetable Pizza", "Vegetables, Pizza Sauce And Cheese", "590.00"]
    ],
    "Somewhat Sooper": [
        ["/assets/img/sooper/sop1.webp", "Euro", "Delight Combination of Specially Marinated Smoked Chicken Bell Pepper, Mushrooms with Tomato Sauce", "590.00"],
        ["/assets/img/sooper/sop2.webp", "Chicken Supreme", "A Combination Of 3 Flavors of Chicken, Black Olives, Mushrooms Bell Pepper and Onion with Tomato Sauce.", "590.00"],
        ["/assets/img/sooper/sop3.webp", "Black Pepper Tikka", "A Blend of Marinated Black Pepper Chicken, Onion & Bell Pepper", "590.00"],
        ["/assets/img/sooper/sop4.webp", "Chicken Mushroom", "Tender Chunks of Marinated Grilled Chicken Tikka, Lots of Mushrooms, Onion and Tomato Sauce", "590.00"],
        ["/assets/img/sooper/sop5.webp", "Sausage Pizza", "Chicken Sausages, Pizza Sauce and Cheese", "590.00"],
        ["/assets/img/sooper/sop6.webp", "Cheese Lover Pizza", "Yummiest Blend of Cheese and Pizza Sauce", "590.00"],
        ["/assets/img/sooper/sop7.webp", "Chicken Pepperoni Pizza", "Chicken Pepperoni, Pizza Sauce and Cheese", "590.00"]
    ],
    "Cheezy Treats": [
        ["/assets/img/cheezytreats/chees1.webp", "Cheezious Special", "Delicious Special Chicken with Black Olives, Sausages and Bell Pepper", "1,450.00"],
        ["/assets/img/cheezytreats/chees2.webp", "Behari Kebab", "Enjoy Special Chicken Bihari Kabab, Grilled Chicken with Onion Jalapenos and Ginger Garnishing", "1,450.00"],
        ["/assets/img/cheezytreats/chees3.webp", "Chicken Extreme", "Combination Of 3 Flavors of Chicken with Onion Bell Pepper, Green Olives, Mushrooms and Special Sauce", "1,450.00"],
    ],
    "Sandwiches & Platters": [
        ["/assets/img/sooper/sop1.webp", "Special Roasted Platter", "4 Pcs Behari Rolls, 6pcs Wings Served with Fries & Sauce", "1,080.00"],
        ["/assets/img/sooper/sop2.webp", "Mexican Sandwich", "Mozzarella Dipped Chicken Topped with Garlic Sauce, Tomato’s Served in Baked Bread.", "850.00"],
        ["/assets/img/sooper/sop3.webp", "Pizza Stacker", "A Unique Blend of Delicious Sauce, Crispy Chicken and Pizza Crust.", "850.00"],
        ["/assets/img/sooper/sop3.webp", "Euro Sandwich", "Mozzarella Dipped Black Pepper Chicken Topped with Garlic Sauce, Pineapples and Tomato’s Served in Baked Bread.", "850.00"],
        ["/assets/img/sooper/sop3.webp", "Classic Roll Platter", "4Pcs Behari Rolls, 4pcs Arabic Rolls Served with Fries & Sauce", "1,080.00"],
    ],
    "Pizza Deals": [
        ["/assets/img/deals/deal1.webp", "Small Pizza Deal", "Any Flavor From Local Love Or Over the Sea Flavor Category & 1 Soft Drink", "650.00"],
        ["/assets/img/deals/deal2.webp", "Regular Pizza Deal", "1 Regular Pizza and 2 Regular Drinks.", "1,350.00"],
        ["/assets/img/deals/deal3.webp", "Large Pizza Deal", "Any Flavor From Local Love Or Over the Sea Flavor Category & 1 Liter Drink", "1,790.00"],
    ],
    "Special Pizza": [
        ["/assets/img/special/spec1.webp", "Crown Crust", "Scrumptious Pizza with A Yummy Blend of Grilled Chicken, Olives, Onion, Capsicum and Special Sauce", "1,450.00"],
        ["/assets/img/special/spec2.webp", "Special Chicken", "Green Olives, Mushroom, Edges Filled With Cheese Or Kabab", "1,500.00"],
    ],
    "Somewhat Amazing": [
        ["/assets/img/amazing/somea1.webp", "Somewhat Amazing1", "2 Bazinga, Regular Fries, 2 Regular Drink", "1,150.00"],
        ["/assets/img/amazing/somea2.webp", "Somewhat Amazing2", "2 Bazinga Burger,2 Pcs Chicken, Large Fries,2 Regular Drink", "1,550.00"],
        ["/assets/img/amazing/somea3.webp", "Somewhat Amazing3", "3 Bazinga Burger, Large Fries, 1 Liter Drink", "1,750.00"],
        ["/assets/img/amazing/somea4.webp", "Somewhat Amazing4", "3 Bazinga, 3 Chicken Pieces, 1 Liter Drink", "1,850.00"],
    ],
    "Pastas": [
        ["/assets/img/pasta/past1.webp", "Crunchy Chicken Pasta", "Yummiest Macaroni Pasta in White Sauce Topped with Crispy Chicken & Cheese", "850.00"],
        ["/assets/img/pasta/past2.webp", "Fettuccine Alfredo Pasta", "Pasta Made In Yummiest White Sauce With Chicken Chunks Topped With Cheese", "990.00"],
    ],
    "Burgerz": [
        ["/assets/img/amazing/somea1.webp", "Bazinga Supreme", "2 Crispy Fried To Perfection Boneless Thigh with Signature Sauce, Lettuce and A Cheese Slice Held in Corn-Dusted Bun.", "730.00"],
        ["/assets/img/amazing/somea2.webp", "Reggy Burger", "Perfectly Fried Chicken Patty With Fresh Lettuce and Sauce in a Sesame Seed Bun", "390.00"],
        ["/assets/img/amazing/somea2.webp", "Bazinga Burger", "Crispy Fried To Perfection Boneless Thigh with Signature Sauce and Lettuce Held in Corn-Dusted Bun.", "530.00"],
    ],
    "Side Orders": [
        ["/assets/img/side/side1.webp", "Fries", "", "200.00"],
        ["/assets/img/side/side2.webp", "Nuggets", "5 pcs", "390.00"],
        ["/assets/img/side/side3.webp", "Chicken Piece", "Crispy Chicken", "270.00"],
    ],
    "Addons": [
        ["/assets/img/addons/add1.webp", "Juice", "", "50.00"],
        ["/assets/img/addons/add2.webp", "Mayo Dip", "", "70.00"],
        ["/assets/img/addons/add3.webp", "Drink", "", "90.00"],
        ["/assets/img/addons/add4.webp", "Water Small", "", "50.00"],
    ]
};

export const cardDetails = createSlice({
    name:'card_Details',
    initialState,
})

export default cardDetails.reducer