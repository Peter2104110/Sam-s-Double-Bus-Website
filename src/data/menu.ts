export interface MenuItem {
  name: string;
  price: string;
  desc: string;
  image?: string;
}

export const menuData: Record<string, MenuItem[]> = {
  "Chicken Sandwiches": [
    { name: "The Famous ZAHALAN ★", price: "$7", desc: "Marinated chicken, our signature sauce, double cheese, lettuce and mayo" },
    { name: "CHICKEN SUB", price: "$7", desc: "Marinated chicken, green pepper, onions, our classic sauce, mozzarella cheese, lettuce and mayo" },
    { name: "FAJITA", price: "$7", desc: "Marinated Mexican chicken, green pepper, onions, corn, mozzarella cheese, lettuce and mayo" },
    { name: "FRANKI", price: "$7", desc: "Tawook chicken, soya sauce, mozzarella cheese, lettuce and mayo" },
    { name: "FRANSISCO", price: "$7", desc: "Marinated chicken, green pepper, onions, corn, our classic sauce, mozzarella cheese, lettuce and mayo" },
    { name: "MUSHROOM CHICKEN", price: "$7", desc: "Marinated chicken, onions and fresh mushrooms, house-made mushroom sauce, double cheese, mayo" },
    { name: "YELLOW", price: "$7", desc: "Marinated chicken, our signature sauce, corn, cheddar cheese, lettuce and mayo" },
  ],
  "Steak Sandwiches": [
    { name: "MUSHROOM STEAK", price: "$8", desc: "Our premium steak, fresh mushrooms, caramelized onions, homemade mushroom sauce, double cheese, mayo" },
    { name: "PHILLY STEAK", price: "$8", desc: "Our premium steak, green pepper, fresh mushrooms, caramelized onions, home-style sauce, mozzarella cheese, lettuce and mayo" },
    { name: "STEAK & CHEESE", price: "$8", desc: "Our premium steak, caramelized onions, fresh mushrooms, home-style sauce, double cheese, lettuce and mayo" },
  ],
  "Burgers": [
    { name: "Mozzarella Chicken Burger ★", price: "$8", desc: "Chicken breast, BBQ sauce, mozzarella patty, mayo-garlic sauce, lettuce and pickles", image: "/menu-burger.webp" },
    { name: "CHEESE BURGER", price: "$8", desc: "Our prime Angus beef, caramelized onions, cheddar cheese, lettuce, pickles, cocktail sauce" },
    { name: "CHICKEN BURGER", price: "$7", desc: "Crispy chicken, coleslaw, cocktail sauce and fries" },
    { name: "DOUBLE CHEESE BURGER", price: "$10", desc: "Our Double prime Angus beef patties, caramelized onions, cheddar cheese, lettuce, pickles, cocktail sauce", image: "/sams-burger.webp" },
    { name: "K BOMB", price: "$8", desc: "Our prime angus beef, double cheese, lettuce, potato chips, BBQ and cocktail sauce" },
    { name: "LEBANESE BURGER", price: "$7", desc: "Prime Angus beef, coleslaw, cocktail sauce and fries" },
    { name: "MUSHROOM SWISS", price: "$8", desc: "Our prime Angus beef, caramelized onions, fresh mushrooms, House made mushroom sauce, and our delicious cheese" },
  ],
  "Light Toasted Subs": [
    { name: "GRILLED CHICKEN", price: "$7", desc: "Chicken, classic sauce, mozzarella cheese, onions, fresh tomatoes, mustard, lettuce and mayo" },
    { name: "KB SANDWICH", price: "$7", desc: "Grilled chicken, soya sauce, mozzarella cheese, corn, pickles, garlic, lettuce and mayo" },
    { name: "ROSTO", price: "$8", desc: "Grilled steak, fresh tomato slices, pickles, mayo, mustard" },
    { name: "TAWOOK", price: "$7", desc: "Marinated white tawook, pickles, garlic, coleslaw & fries" },
    { name: "TIKA", price: "$7", desc: "Cooked chicken, onions, green peppers, Indian curry, spicy sauce, garlic and pickles" },
  ],
  "Crispy Subs": [
    { name: "A1", price: "$7", desc: "Deep fried chicken, BBQ, cheddar, crispy potato chips, pickles, lettuce, coleslaw and mayo" },
    { name: "CR7", price: "$7", desc: "Deep fried Crispy chicken, BBQ, double cheese, lettuce and mayo" },
    { name: "CRISPY", price: "$7", desc: "Deep fried crispy chicken, ketchup, fries, coleslaw and mayo" },
    { name: "ESCALOPE", price: "$7", desc: "Deep fried escalope chicken, ketchup, fries, coleslaw and mayo" },
    { name: "SPICY CRISPY", price: "$7", desc: "Deep fried crispy chicken, BBQ, hot sauce, jalapeño, cheddar cheese, coleslaw and mayo" },
    { name: "ZINGER", price: "$7", desc: "Deep fried Zinger chicken, BBQ, cheddar cheese, lettuce and mayo" },
  ],
  "Plates": [
    { name: "Crispy Plate", price: "$16", desc: "8 Chicken tenders, fries, coleslaw, house made cocktail sauce (Half portion $9)", image: "/menu-crispy-plate.webp" },
    { name: "Escalope Plate", price: "$16", desc: "8 Escalope tenders, fries, coleslaw, house made cocktail sauce (Half portion $9)" },
    { name: "Flavored Crispy Plate", price: "$16", desc: "8 Chicken tenders and fries (Half portion $9). Flavor options: BBQ sauce, Buffalo hot. Dips: Cocktail sauce and coleslaw" },
  ],
  "Salads": [
    { name: "Chicken Caesar Salad", price: "$6", desc: "Grilled chicken, croutons, lettuce and Caesar dressing" },
  ],
  "Broasted Fried Chicken": [
    { name: "Half Broasted Chicken", price: "$9", desc: "4 pieces comes with potato wedges, garlic, pickles and coleslaw (Dine in $11)" },
    { name: "Whole Broasted Chicken", price: "$16", desc: "8 pieces comes with potato wedges, garlic, pickles and coleslaw (Dine in $18)" },
  ],
  "Fries": [
    { name: "Large Curly Fries", price: "$8", desc: "Served with Cocktail sauce" },
    { name: "Large Fries", price: "$6", desc: "Crispy golden fries" },
    { name: "Loaded Fries", price: "$14", desc: "Large plate of fries topped with Crispy, melted cheddar, BBQ and our signature sauce (half portion $8)" },
    { name: "Small Curly Fries", price: "$5", desc: "Served with Cocktail sauce" },
    { name: "Small Fries", price: "$4", desc: "Perfect for a light snack" },
  ],
  "Vegetarian Sandwiches": [
    { name: "Vegetarian Sandwich", price: "$6", desc: "Green pepper, onions, mushrooms, corn, home-style sauce, mozzarella cheese, lettuce and mayo" },
  ],
  "Soft Drinks": [
    { name: "Pepsi", price: "$1", desc: "" },
    { name: "Pepsi Diet", price: "$1", desc: "" },
    { name: "7 UP", price: "$1", desc: "" },
    { name: "7 UP Diet", price: "$1", desc: "" },
    { name: "Ice Tea", price: "$1", desc: "" },
    { name: "Miranda", price: "$1", desc: "" },
    { name: "Water", price: "$0.50", desc: "" },
  ],
};
