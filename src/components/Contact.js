
export default function Contact () {

    const config = {
        email : 'Vaishalisiva13@gmail.com',
        phone: '8778170252'
    }

    return <section id='contact' className='purple-section px-8 py-20'>
        <div className='max-w-4xl mx-auto text-center animate-fade-in-up'>
            <h2 className='text-3xl font-bold text-gray-800 mb-2'>Get In Touch</h2>
            <div className='w-12 h-1 bg-[#fe7b9a] rounded mx-auto mb-4'></div>
            <p className='text-gray-600 mb-8 max-w-lg mx-auto'>If you want to discuss more in detail, please contact me</p>
            <div className='bg-white/60 backdrop-blur rounded-2xl p-8 inline-block shadow-lg shadow-black/5'>
                <p className='py-2 text-gray-700'><span className='font-semibold text-[#fe7b9a]'>Email :</span> {config.email}</p>
                <p className='py-2 text-gray-700'><span className='font-semibold text-[#fe7b9a]'>Phone :</span> {config.phone}</p>
            </div>
        </div>
    </section>
}

