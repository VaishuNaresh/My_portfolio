import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {
    const [toggleMenu, setToggleMenu]  = useState(false);

    return <header className="flex justify-between px-8 py-3 bg-primary sticky top-0 z-50 glass-header">
        <a className="font-bold text-[#fe7b9a] text-lg" href="/" >Vaishali</a>
        <nav className="hidden md:block">
            <ul className="flex text-gray-500 gap-2 text-sm">
                <li><a href="/" className="px-3 py-2 rounded-lg hover:text-[#fe7b9a] transition-colors">Home</a></li>
                <li><a href="/#about" className="px-3 py-2 rounded-lg hover:text-[#fe7b9a] transition-colors">About</a></li>
                <li><a href="/#projects" className="px-3 py-2 rounded-lg hover:text-[#fe7b9a] transition-colors">Projects</a></li>
                <li><a href="/#contact" className="px-3 py-2 rounded-lg hover:text-[#fe7b9a] transition-colors">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden">
            <ul onClick={() => setToggleMenu(prev => !prev)} className="flex flex-col text-gray-600 mobile-nav">
                <li><a href="/">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button aria-label="Toggle menu" onClick={() => setToggleMenu(prev => !prev)} className='block md:hidden'><Bars3Icon className='text-gray-500 h-5'/></button>
    </header>
}