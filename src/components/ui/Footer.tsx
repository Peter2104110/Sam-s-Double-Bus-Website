
export default function Footer(){
    return(
        <footer className="bg-gray-900 text-white py-8 bottom-0">
            <div className="container mx-auto px-4 text-center">
                <p className="text-xl font-bold mb-2">Sam's Double Bus</p>
                <p className="text-gray-400 text-sm max-lg:text-xs">Serving food made with care, tradition, and love since 2010. ❤️</p>
                <p className="text-gray-500 mt-4 text-lg max-sm:text-xs">© {new Date().getFullYear()} Sam's Double Bus. All rights reserved.</p>
            </div>
        </footer>
    )
}