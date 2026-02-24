export default function Footer() {
    return (
        <footer className="border-t border-gray-200 dark:border-white/10 pt-16 pb-12 mt-32 transition-colors">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400 font-medium font-sans flex flex-col items-center">
                <a href="#" className="mb-8 block hover:scale-105 transition-transform">
                    <img src="/logo.png" alt="Sahil Kochar Logo" className="h-10 w-auto object-contain mix-blend-difference dark:invert-0 invert" />
                </a>
                <p className="text-sm md:text-base">© {new Date().getFullYear()} Sahil Kochar. All rights reserved.</p>
                <p className="mt-2 text-xs text-gray-400 dark:text-gray-500">Built with React, Tailwind CSS & Framer Motion.</p>
            </div>
        </footer>
    );
}
