import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-6 text-white">
            <div className="container mx-auto grid grid-cols-4 gap-4">
                {/* Column 1 - Logo */}
                <div className="flex items-center justify-center">
                    {/* Add your logo image here */}
                    <img src="/path/to/logo.png" alt="Logo" className="w-12 h-12" />
                </div>

                {/* Column 2 - Short Write-up */}
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                {/* Column 3 - List of Links */}
                <div>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                {/* Column 4 - Social Media */}
                <div className="flex items-center justify-center">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/facebook-logo.png" alt="Facebook" className="w-8 h-8 mr-4" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src="/path/to/twitter-logo.png" alt="Twitter" className="w-8 h-8" />
                    </a>
                </div>
            </div>
            <div className="container mx-auto text-center pt-7">
                <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
                <p>Made with ❤️ using React and Tailwind CSS</p>
            </div>
        </footer>
    )
}

export default Footer