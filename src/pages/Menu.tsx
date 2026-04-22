import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { useState } from "react";
import Footer from "../components/ui/Footer";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "../components/ui/dialog";
import { menuData } from "../data/menu";

export default function Menu() {

    const [activeTab, setActiveTab] = useState("Chicken Sandwiches");
    const categories = Object.keys(menuData);
    
  
    return (
        <div className="min-h-screen flex flex-col relative bg-transparent">

            {/* Background Image */}
            <div 
                className="fixed inset-0 z-0 bg-[url('/menu-background.webp')] bg-cover bg-center md:bg-bottom"
                aria-hidden="true"
            />
            
            <div className="relative z-10 flex flex-col flex-1">
                {/* Tabbed Menu Section */}
                <section id="menu" className="md:py-16 py-5 flex-1 md:max-w-[70vw] md:mx-auto">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl md:text-5xl max-sm:text-3xl font-bold text-center mb-4 text-primary">Our Menu</h2>

                        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>

                        {/* Tabs */}
                        <div className="flex gap-2 mb-8 justify-start overflow-auto md:flex-wrap md:overflow-visible md:justify-center">
                        {categories.map((category) => (
                            <button
                            key={category}
                            onClick={() => setActiveTab(category)}
                            className={`px-4 py-2 rounded-lg text-xl transition-all min-w-max ${
                                activeTab === category
                                ? "bg-custom-bg-active text-custom-bg-active-text shadow-lg max-sm:text-sm"
                                : "border-[2px] border-custom-bg-active text-primary md:hover:bg-custom-bg-active md:hover:text-white max-sm:text-sm" /*gray-200*/
                            }`}
                            >
                            {category}
                            </button>
                        ))}
                        </div>

                        {/* Menu Items */}
                        <div className="grid md:grid-cols-2 gap-2">
                        {menuData[activeTab].map((item, idx) => (
                            <Card key={idx} className="border-l-4 border-primary hover:shadow-lg transition-shadow bg-white/30 backdrop-blur-xs gap-2">
                            <CardHeader className="">
                                <div className="flex justify-between items-start">
                                <CardTitle className="text-lg md:text-xl text-primary">{item.name}</CardTitle>
                                <span className="font-bold text-primary text-lg md:text-xl">{item.price}</span>
                                </div>
                            </CardHeader>
                            {item.desc && (
                              <CardContent className="flex justify-between gap-4">
                                <p className="text-sm md:text-lg text-foreground flex-1 ">{item.desc}</p>

                                {item.image && (
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-sm cursor-zoom-in shrink-0"
                                            />
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-2xl border-none bg-transparent p-0 shadow-none flex">
                                            <DialogTitle className="sr-only">{item.name}</DialogTitle>
                                            <img 
                                                src={item.image} 
                                                alt={item.name} 
                                                className="w-full h-auto rounded-lg"
                                            />
                                        </DialogContent>
                                    </Dialog>
                                )}
                              </CardContent>
                            )}
                            </Card>
                        ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
}