import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Phone, MapPin, Clock, ChefHat } from "lucide-react";

/**
 * DESIGN PHILOSOPHY: Retro American Diner with Modern Polish
 * - Bold red (#DC143C) and white (#FFFFFF) color scheme
 * - Checkered patterns and bus-themed branding
 * - Asymmetric layouts with dynamic energy
 * - Fredoka One for headings, Poppins for body
 * - Neon-style effects and chrome accents on hover
 */

const menuData = {
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
    { name: "Mozzarella Chicken Burger ★", price: "$8", desc: "Chicken breast, BBQ sauce, mozzarella patty, mayo-garlic sauce, lettuce and pickles" },
    { name: "CHEESE BURGER", price: "$8", desc: "Our prime Angus beef, caramelized onions, cheddar cheese, lettuce, pickles, cocktail sauce" },
    { name: "CHICKEN BURGER", price: "$7", desc: "Crispy chicken, coleslaw, cocktail sauce and fries" },
    { name: "DOUBLE CHEESE BURGER", price: "$10", desc: "Our Double prime Angus beef patties, caramelized onions, cheddar cheese, lettuce, pickles, cocktail sauce" },
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
    { name: "Crispy Plate", price: "$16", desc: "8 Chicken tenders, fries, coleslaw, house made cocktail sauce (Half portion $9)" },
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

export default function Home() {
  const [activeTab, setActiveTab] = useState("Chicken Sandwiches");
  const categories = Object.keys(menuData);

  return (
    <>
    <div>

      <div className="min-h-screen text-foreground">
        {/* Navigation Header */}
        <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-sm border-b-4 border-primary shadow-lg">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 w-96 h-auto">
              <img src="./src/assets/SamsDoubleBus.png"/>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#menu" className="text-xl text-foreground hover:text-primary transition-all duration-200 font-semibold hover:scale-110 hover:underline underline-offset-4">
                Menu
              </a>
              <a href="#about" className="text-xl text-foreground hover:text-primary transition-all duration-200 font-semibold hover:scale-110 hover:underline underline-offset-4">
                About
              </a>
              <a href="#contact" className="text-xl text-foreground hover:text-primary transition-all duration-200 font-semibold hover:scale-110 hover:underline underline-offset-4">
                Contact
              </a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="relative h-96 md:h-screen flex items-center justify-center" style={{ backgroundColor: "rgb(255, 240, 228)" }}>
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: "url('/menu-background.png')",
                backgroundSize: "cover",
                backgroundPosition: "right bottom",
                backgroundRepeat: "no-repeat"
              }}
            ></div>
            <div className="absolute inset-0 bg-black/10"></div>

            <div className="relative z-10 text-center text-white max-w-2xl px-4" style={{}}>
              <h2 className="text-5xl md:text-7xl font-thin max-sm:text-4xl mb-4" style={{textShadow: '0 5px 10px rgba(0, 0, 0, 0.226)'}}>
                Welcome to <span className="text-primary">Sam's</span>
              </h2>
              <p className="text-xl md:text-2xl mb-8" style={{textShadow: '0 5px 10px rgba(0, 0, 0, 0.35)'}}>
                Serving Authentic Subs, Broasted Chicken & Burgers Since 2010
              </p>
              <a href="#contact">
                <Button size="lg" className="bg-primary hover:bg-red-700 text-white text-lg px-8 py-6 rounded-lg font-bold">
                  Order Now
                </Button>
              </a>
            </div>

          </div>

          {/* Diagonal Cut Divider */}
          <div
            className="md:h-20 bg-white"
            style={{
              clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
            }}
          ></div>
        </section>

        {/* Tabbed Menu Section */}
        <section id="menu" className="md:py-16 py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-center mb-4 text-primary">Our Menu</h2>

            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            {/* Tabs */}
            <div className="flex gap-2 mb-8 justify-start overflow-auto md:flex-wrap md:overflow-visible md:justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 rounded-lg font-bold transition-all min-w-max ${
                    activeTab === category
                      ? "bg-primary text-white shadow-lg max-sm:text-sm"
                      : "bg-gray-200 text-foreground hover:bg-gray-300 max-sm:text-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="grid md:grid-cols-2 gap-6">
              {menuData[activeTab as keyof typeof menuData].map((item, idx) => (
                <Card key={idx} className="border-l-4 border-primary hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg text-primary">{item.name}</CardTitle>
                      <span className="font-bold text-primary text-lg">{item.price}</span>
                    </div>
                  </CardHeader>
                  {item.desc && (
                    <CardContent>
                      <p className="text-sm text-foreground">{item.desc}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Items Section */}
        <section className="md:py-16 py-10 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-center mb-4 text-primary">Signature Dishes</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Featured Image */}
              <div className="relative overflow-hidden rounded-lg shadow-xl flex items-center justify-center bg-gray-100">
                <img
                  src="/sams-burger.png"
                  alt="Featured menu items - burgers and fries"
                  className="w-auto h-full object-contain hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold">
                  Double Cheese Burger
                </div>
              </div>

              {/* Featured Items Cards */}
              <div className="space-y-4">
                
                <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-primary text-white flex items-center py-1">
                    <CardTitle className="flex items-center gap-2">
                      <ChefHat className="w-5 h-5"/>
                        Double Cheese Burger
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-foreground">Our prime Angus beef patties, caramelized onions, cheddar cheese, lettuce, pickles, and our signature cocktail sauce. A true masterpiece.</p>
                    <p className="text-primary font-bold text-lg mt-2">$10</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-primary text-white flex items-center py-1">
                    <CardTitle className="flex items-center gap-2">
                      <ChefHat className="w-5 h-5" />
                      Loaded Curly Fries
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-foreground">Large plate of crispy, golden fries topped with melted cheddar, BBQ sauce, and our signature toppings. Pure indulgence.</p>
                    <p className="text-primary font-bold text-lg mt-2">$14</p>
                  </CardContent>
                </Card>

                <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-primary text-white flex items-center py-1">
                    <CardTitle className="flex items-center gap-2">
                      <ChefHat className="w-5 h-5" />
                      Broasted Chicken
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-foreground">Golden, crispy broasted chicken that's never disappointing. A box that keeps customers coming back.</p>
                    <p className="text-primary font-bold text-lg mt-2">$9 - $16</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-center mb-4 text-primary">About Sam's Double Bus</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-foreground mb-6">
                Located in the heart of Aley, Lebanon, Sam's Double Bus has been serving authentic, delicious food since 2010. 
                Our commitment to quality ingredients and traditional recipes has made us a local favorite.
              </p>
              <p className="text-lg text-foreground">
                From our signature chicken sandwiches to our famous broasted chicken and loaded fries, every item on our menu 
                is prepared with care and passion. We pride ourselves on quick service without compromising on taste.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-primary text-white">

          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-center mb-12">Get In Touch</h2>

            <div className="grid md:grid-cols-3 max-md:gap-7 max-w-4xl mx-auto place-items-center">

              <a href="https://wa.me/96103851050" target="_blank" style={{boxShadow: '0 5px 10px rgba(0, 0, 0, 0.226)', borderRadius:'15px', padding:'.5rem', width:'10rem', justifyItems:'center'}}>
                <div className="text-center w-fit">
                  <Phone className="max-sm:w-10 max-sm:h-10 md:w-12 md:h-12 mx-auto mb-4" />
                  <h3 className="max-sm:text-lg md:text-xl font-bold mb-2">Call Us</h3>
                  <p className="md:text-lg max-sm:text-sm">+961 03 851 050. Click to Call on WhatsApp</p>
                </div>
              </a>

              <a href="https://maps.app.goo.gl/tsdoFvTmEgWcMiq2A" target="_blank" style={{boxShadow: '0 5px 10px rgba(0, 0, 0, 0.226)', borderRadius:'15px', padding:'.5rem', width:'10rem', justifyItems:'center'}}>
                <div className="text-center w-fit">
                  <MapPin className="max-sm:w-10 max-sm:h-10 md:w-12 md:h-12 mx-auto mb-4" />
                  <h3 className="max-sm:text-lg md:text-xl font-bold mb-2">Location</h3>
                  <p className="md:text-lg max-sm:text-sm">Aley, Lebanon. <br/> Click to View on Maps</p>
                </div>
              </a>

              <a style={{boxShadow: '0 5px 10px rgba(0, 0, 0, 0.226)', borderRadius:'15px', padding:'.5rem', width:'10rem', justifyItems:'center'}}>
                <div className="text-center w-fit">
                  <Clock className="max-sm:w-10 max-sm:h-10 md:w-12 md:h-12 mx-auto mb-4" />
                  <h3 className="max-sm:text-lg md:text-xl font-bold mb-2">Hours</h3>
                  <p className="md:text-lg max-sm:text-sm">Open Friday to Wednesday: <br/>12-10pm</p>
                </div>
              </a>

            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-bold mb-2">Sam's Double Bus</p>
            <p className="text-gray-400 max-sm:text-sm">Serving food made with care, tradition, and love since 2010. ❤️</p>
            <p className="text-gray-500 mt-4 text-sm max-sm:text-xs">© {new Date().getFullYear()} Sam's Double Bus. All rights reserved.</p>
          </div>
        </footer>
      </div>

    </div>
    </>
  );
}
