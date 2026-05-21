import ResumeImg from '../assets/resume.jpg';

export default function Resume () {
    const config = {
        link: '/Vaishu_pro.pdf'
    }

    return <section id='resume' className='bg-secondary px-8 py-20'>
        <div className='max-w-6xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center gap-12'>
                <div className='md:w-1/2 animate-fade-in-up flex justify-center'>
                    <img className='w-[280px] rounded-2xl shadow-xl shadow-black/5' src={ResumeImg} alt="resume" />
                </div>
                <div className='md:w-1/2 animate-fade-in-up delay-1'>
                    <h2 className='text-3xl font-bold text-gray-800 mb-2'>Resume</h2>
                    <div className='w-12 h-1 bg-[#fe7b9a] rounded mb-6'></div>
                    <p className='text-gray-600 mb-6'>Download my resume to learn more about my experience</p>
                    <a className='btn inline-block' href={config.link} download>Download Resume</a>
                </div>
            </div>
        </div>
    </section>
}