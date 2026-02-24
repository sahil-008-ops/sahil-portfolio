import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    const [darkMode, setDarkMode] = useState(true)

    useEffect(() => {
        // Check localStorage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) || localStorage.theme === undefined) {
            setDarkMode(true)
            document.documentElement.classList.add('dark')
        } else {
            setDarkMode(false)
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const toggleDarkMode = () => {
        if (darkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
            setDarkMode(false)
        } else {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
            setDarkMode(true)
        }
    }

    return (
        <div className="relative min-h-screen text-gray-900 dark:text-gray-100 selection:bg-blue-500/30">
            {/* Background ambient gradients */}
            <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/20 dark:bg-blue-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-purple-500/20 dark:bg-purple-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-indigo-500/20 dark:bg-indigo-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-blob" style={{ animationDelay: '4s' }}></div>
            </div>

            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 space-y-40">
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>

            <Footer />
        </div>
    )
}

export default App
