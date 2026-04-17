//import { useTheme } from "../../contexts/ThemeContext";
import { SidebarTrigger } from "./sidebar";


export default function Navbar() {
    //const { theme, toggleTheme } = useTheme();
    //toggleTheme('light')

    return(
        <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-sm border-b-4 border-primary shadow-lg flex justify-center">

            <div className="container mx-0 flex items-center relative py-6 px-6">

                <div className="md:hidden translate-x-[-1rem]">
                    <SidebarTrigger className="h-auto w-[3rem] hover:bg-transparent" style={{boxSizing:"border-box", padding: ".5rem"}}>
                        <img src="/sideBar.png" className="w-full h-auto"></img>
                    </SidebarTrigger>
                </div>
                
                <nav>
                    <ul className="hidden md:flex gap-4 ml-10">
                        <a href="/" className="px-4 py-2">
                            <li className="text-2xl hover:underline hover:text-primary transition">Menu</li>
                        </a>
                        <a href="/about" className="px-4 py-2">
                            <li className="text-2xl hover:underline hover:text-primary transition">About</li>
                        </a>
                    </ul>
                </nav>

                <div className="absolute left-1/2 -translate-x-1/2 flex items-center md:w-72 w-52">
                    <img src="/SamsDoubleBus.png"/>
                </div>
                

            </div>
        </header>
    );
}

/*
    {/* Theme Toggle Button
    <button onClick={toggleTheme} className="w-fit border-foreground border-2 rounded-full p-2">
    {theme === "dark" ? "Light" : "Dark"} mode
    </button>

    <button
    onClick={toggleTheme}
    className="hidden  md:relative w-20 h-9 items-center justify-center rounded-full border-2 border-background transition-colors duration-300 cursor-pointer"> /* add flex instead of hidden


    <div
        className={`absolute inset-0 rounded-full transition-colors duration-300 ${
        theme === "dark" ? "bg-foreground/20" : "bg-muted"
        }`}/>

    {/* Knob 
    <div
        className={`absolute top-1 left-1 h-7 w-9 rounded-full bg-background transition-all duration-300 shadow-md flex items-center justify-center z-10 ${
        theme === "dark" ? "translate-x-8 translate-y-[-.15rem]" : "translate-x-0 translate-y-[-.15rem]"
        }`}
    >
        <span className="text-sm">
        {theme === "dark" ? "🌙" : "☀️"}
        </span>
    </div>
    </button>
*/