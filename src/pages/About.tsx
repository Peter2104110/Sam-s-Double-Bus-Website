import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Phone, MapPin, Clock } from "lucide-react";
import Footer from "../components/ui/Footer";
import { useEffect } from "react";


export default function About() {

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;

      const el = document.querySelector(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>

    <div className="min-h-screen text-foreground bg-background">

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

          <div className="relative z-5 text-center text-white max-w-2xl px-4" style={{}}>
            <h2 className="text-background text-5xl md:text-7xl font-thin max-sm:text-4xl mb-4" style={{textShadow: '0 5px 10px rgba(0, 0, 0, 0.226)'}}>
              Welcome to <span className="text-primary">Sam's</span>
            </h2>
            <p className="text-background text-lg md:text-2xl mb-8" style={{textShadow: '0 5px 10px rgba(0, 0, 0, 0.35)'}}>
              A family-owned restaurant serving you since 2010.
            </p>
            <a href="#contact">
              <Button size="lg" className="bg-primary hover:bg-red-700 text-background text-lg px-8 py-6 rounded-lg font-bold">
                Order Now
              </Button>
            </a>
          </div>

        </div>

        {/* Diagonal Cut Divider */}
        <div className="md:h-20 bg-background"></div>
      </section>

      

      {/* Featured Items Section */}
      <section className="md:py-16 py-10 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-center mb-4 text-primary">Signature Dishes</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="flex max-sm:flex-col gap-8 mb-12">
            {/* Featured Image */}
            <div className="relative overflow-hidden rounded-lg shadow-xl flex items-center justify-center bg-gray-100 flex-1">
              <img
                src="/sams-burger.png"
                alt="Featured menu items - burgers and fries"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm">
                Double Cheese Burger
              </div>
            </div>

            {/* Featured Items Cards */}
            <div className="space-y-4 flex-1">
              
              <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
                <CardHeader className="bg-primary text-white flex items-center py-1">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                      Double Cheese Burger
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-foreground text-sm md:text-lg">Our prime Angus beef patties, caramelized onions, cheddar cheese, lettuce, pickles, and our signature cocktail sauce. A true masterpiece.</p>
                  <p className="text-primary font-bold text-lg md:text-xl mt-2">$10</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
                <CardHeader className="bg-primary text-white flex items-center py-1">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    Loaded Curly Fries
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-foreground text-sm md:text-lg">Large plate of crispy, golden fries topped with melted cheddar, BBQ sauce, and our signature toppings. Pure indulgence.</p>
                  <p className="text-primary font-bold text-lg md:text-xl mt-2">$14</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary hover:shadow-xl transition-shadow">
                <CardHeader className="bg-primary text-white flex items-center py-1">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    Broasted Chicken
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-foreground text-sm md:text-lg">Golden, crispy broasted chicken that's never disappointing. A box that keeps customers coming back.</p>
                  <p className="text-primary font-bold text-lg md:text-xl mt-2">$9 - $16</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-sidebar"> {/*gray-50 */}
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-center mb-4 text-primary">About Sam's Double Bus</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm md:text-xl text-foreground mb-6">
              Located in the heart of Aley, Lebanon, Sam's Double Bus has been serving authentic, delicious food since 2010. 
              Our commitment to quality ingredients and traditional recipes has made us a local favorite.
            </p>
            <p className="text-sm md:text-xl text-foreground">
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
              <div className="flex flex-col justify-center text-center md:w-fit">
                <Phone className="max-sm:w-10 max-sm:h-10 md:w-12 md:h-12 mx-auto mb-4" />
                <h3 className="max-sm:text-lg md:text-xl font-bold mb-2">Call Us</h3>
                <p className="md:text-lg max-sm:text-sm">+961 03 851 050. Click to Call on WhatsApp</p>
              </div>
            </a>

            <a href="https://maps.app.goo.gl/tsdoFvTmEgWcMiq2A" target="_blank" style={{boxShadow: '0 5px 10px rgba(0, 0, 0, 0.226)', borderRadius:'15px', padding:'.5rem', width:'10rem', justifyItems:'center'}}>
              <div className="flex flex-col justify-center text-center md:w-fit">
                <MapPin className="max-sm:w-10 max-sm:h-10 md:w-12 md:h-12 mx-auto mb-4" />
                <h3 className="max-sm:text-lg md:text-xl font-bold mb-2">Location</h3>
                <p className="md:text-lg max-sm:text-sm">Aley, Lebanon. <br/> Click to View on Maps</p>
              </div>
            </a>

            <a style={{boxShadow: '0 5px 10px rgba(0, 0, 0, 0.226)', borderRadius:'15px', padding:'.5rem', width:'10rem', justifyItems:'center'}}>
              <div className="flex flex-col justify-center text-center md:w-fit">
                <Clock className="max-sm:w-10 max-sm:h-10 md:w-12 md:h-12 mx-auto mb-4" />
                <h3 className="max-sm:text-lg md:text-xl font-bold mb-2">Hours</h3>
                <p className="md:text-lg max-sm:text-sm font-[Bebas Neue]">Open Friday to Wednesday: 12-10:30pm</p>
              </div>
            </a>

          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
