import HeroImg from '../assets/hero.png';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle: 'Full-stack Developer',
        social: {
            linkedin: 'https://www.linkedin.com/in/vaishu-naresh-1496b015a/'
        }
    }

    return <section className='hero-pink relative overflow-hidden min-h-screen flex items-center'>
        <div className='absolute -top-20 -left-20 w-72 h-72 bg-[#fcc88c]/30 rounded-full blur-3xl'></div>
        <div className='absolute top-10 right-10 w-40 h-40 bg-[#b8b0d4]/30 rounded-full blur-2xl'></div>
        <div className='absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
        <div className='max-w-6xl mx-auto px-8 w-full'>
            <div className='flex flex-col md:flex-row items-center gap-12'>
                <div className='md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left animate-fade-in-up'>
                    <p className='text-white/70 text-sm tracking-widest uppercase mb-3'>Welcome</p>
                    <h1 className='text-white text-5xl md:text-6xl font-bold leading-tight'>
                        I'm <span className='text-white'>Vaishali</span>
                    </h1>
                    <p className='text-2xl text-white/90 mt-2 font-hero-font'>{config.subtitle}</p>
                    <p className='text-white/60 text-base mt-4 max-w-md'>Crafting beautiful digital experiences with modern web technologies</p>
                    <div className='flex gap-4 mt-6'>
                        <a href="#projects" className='btn'>View My Work</a>
                        <a href="#contact" className='btn'>Contact</a>
                        <a href={config.social.linkedin} className='btn'>Linkedin</a>
                    </div>
                    <div className='flex gap-4 mt-8'>
                        {/* <a href={config.social.twitter} className='text-white/50 hover:text-white transition-colors'><AiOutlineTwitter size={24} /></a>
                        <a href={config.social.facebook} className='text-white/50 hover:text-white transition-colors'><AiOutlineFacebook size={24}/></a> */}
                        {/* <a href={config.social.linkedin} className='text-white/50 hover:text-white transition-colors'><AiOutlineLinkedin size={24}/></a> */}
                    </div>
                </div>
                <div className='md:w-1/2 flex justify-center animate-fade-in-up delay-2'>
                    <div className='relative'>
                        <div className='w-72 h-72 md:w-80 md:h-80 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl'>
                            <img className='w-full h-full object-cover' src={HeroImg} alt="hero" />
                        </div>
                        <div className='absolute -bottom-4 -right-4 w-24 h-24 bg-[#fcc88c]/40 rounded-full blur-xl'></div>
                        <div className='absolute -top-4 -left-4 w-16 h-16 bg-[#b8b0d4]/40 rounded-full blur-lg'></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}