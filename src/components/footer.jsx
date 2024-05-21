import Logo from "./logo";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap items-center justify-between">
                    {/* Logo */}
                    <div className="w-full sm:w-auto mb-4 sm:mb-0">
                        <a href="/" className="flex items-center">
                            <Logo />
                            <span className="text-2xl font-bold">Tiked Master</span>
                        </a>
                    </div>

                    {/* Social Media Links */}
                    <div className="w-full sm:w-auto mb-4 sm:mb-0 flex space-x-4">
                        <a href="https://www.facebook.com" className="text-white hover:text-gray-400">
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M24 12a12 12 0 1 0-13.857 11.871v-8.387h-3.075v-3.484h3.075v-2.648c0-3.032 1.792-4.69 4.532-4.69 1.312 0 2.686.235 2.686.235v2.958h-1.514c-1.492 0-1.955.926-1.955 1.874v2.27h3.328l-.532 3.484h-2.796v8.387A12.003 12.003 0 0 0 24 12z"/>
                            </svg>
                        </a>
                        <a href="https://www.twitter.com" className="text-white hover:text-gray-400">
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723 9.828 9.828 0 0 1-3.127 1.195 4.92 4.92 0 0 0-8.379 4.482 13.978 13.978 0 0 1-10.15-5.146 4.822 4.822 0 0 0-.666 2.475c0 1.708.869 3.213 2.19 4.096a4.903 4.903 0 0 1-2.229-.616c-.053 2.28 1.581 4.415 3.946 4.89a4.935 4.935 0 0 1-2.224.085c.624 1.951 2.444 3.376 4.6 3.416A9.868 9.868 0 0 1 2 19.54a13.94 13.94 0 0 0 7.548 2.209c9.142 0 14.307-7.721 13.995-14.646a10.01 10.01 0 0 0 2.411-2.534z"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com" className="text-white hover:text-gray-400">
                            <svg className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.418.401a4.92 4.92 0 0 1 1.775 1.14 4.922 4.922 0 0 1 1.14 1.775c.161.448.347 1.248.401 2.418.059 1.267.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.401 2.418a4.92 4.92 0 0 1-1.14 1.775 4.922 4.922 0 0 1-1.775 1.14c-.448.161-1.248.347-2.418.401-1.267.059-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.418-.401a4.92 4.92 0 0 1-1.775-1.14 4.922 4.922 0 0 1-1.14-1.775c-.161-.448-.347-1.248-.401-2.418-.059-1.267-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.401-2.418a4.92 4.92 0 0 1 1.14-1.775 4.922 4.922 0 0 1 1.775-1.14c.448-.161 1.248-.347 2.418-.401 1.267-.059 1.646-.07 4.85-.07zm0-2.163c-3.27 0-3.667.012-4.947.072-1.278.061-2.153.277-2.905.599a6.767 6.767 0 0 0-2.425 1.588 6.768 6.768 0 0 0-1.588 2.425c-.322.752-.538 1.627-.599 2.905-.06 1.28-.072 1.677-.072 4.947s.012 3.667.072 4.947c.061 1.278.277 2.153.599 2.905a6.767 6.767 0 0 0 1.588 2.425 6.768 6.768 0 0 0 2.425 1.588c.752.322 1.627.538 2.905.599 1.28.06 1.677.072 4.947.072s3.667-.012 4.947-.072c1.278-.061 2.153-.277 2.905-.599a6.767 6.767 0 0 0 2.425-1.588 6.768 6.768 0 0 0 1.588-2.425c.322-.752.538-1.627.599-2.905.06-1.28.072-1.677.072-4.947s-.012-3.667-.072-4.947c-.061-1.278-.277-2.153-.599-2.905a6.767 6.767 0 0 0-1.588-2.425 6.768 6.768 0 0 0-2.425-1.588c-.752-.322-1.627-.538-2.905-.599-1.28-.06-1.677-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.323 6.162 6.162 0 0 0 0-12.323zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm7.833-11.389a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z"/>
                            </svg>
                        </a>
                    </div>

                    {/* Additional Links */}
                    <div className="w-full sm:w-auto">
                        <ul className="flex flex-wrap space-x-4">
                            <li><a href="/about" className="text-white hover:text-gray-400">Sobre Nosotros</a></li>
                            <li><a href="/events" className="text-white hover:text-gray-400">Eventos</a></li>
                            <li><a href="/contact" className="text-white hover:text-gray-400">Contacto</a></li>
                            <li><a href="/faq" className="text-white hover:text-gray-400">FAQ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
