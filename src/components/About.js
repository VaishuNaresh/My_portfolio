import AboutImg from '../assets/about.png';

export default function About () {
    const config = {
        line1: 'Hi, My name is Vaishali. I am a MERN stack web developer. I built beautiful Websites with React.js, Tailwind CSS + Bootstrap',
        line2: 'I am proficient in Frontend skills like React.js, Vue Js, Redux, Tailwind CSS and backend in Node.js, Express.js, MongoDB'
    }

    return <section className='bg-secondary px-8 py-20' id='about'>
        <div className='max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-12'>
                <div className='md:w-1/2 animate-fade-in-up flex justify-center'>
                    <img className='w-[320px] rounded-2xl shadow-xl shadow-black/5' src={AboutImg} alt="about" />
                </div>
                <div className='md:w-1/2 animate-fade-in-up delay-1'>
                    <h2 className='text-3xl font-bold text-gray-800 mb-2'>About Me</h2>
                    <div className='w-12 h-1 bg-[#fe7b9a] rounded mb-6'></div>
                    <p className='text-gray-600 leading-relaxed mb-4'>{config.line1}</p>
                    <p className='text-gray-600 leading-relaxed'>{config.line2}</p>
                </div>
            </div>
        </div>
    </section>
}