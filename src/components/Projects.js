// import web1 from '../assets/ecommerce-websites.jpg';
import web1 from '../assets/Task Manage.png'
import web2 from '../assets/food-ecommerce.jpg';
import web3 from '../assets/ecommerce-websites.jpg';

export default function Projects() {

    const projects = [
        {
            image: web1,
            title: 'TaskSphere',
            description: 'Built with MERN Stack',
            link: 'https://github.com/VaishuNaresh/TaskSphere'
        },
        {
            image: web2,
            title: 'Expense Tracker',
            description: 'MERN',
            // link: 'https://github.com/jvlcode/food'
        },
        {
            image: web3,
            title: 'Ecommerce Website',
            description: 'MERN',
            // link: 'https://github.com/jvlcode/blog'
        }
    ]

    return <section id='projects' className='px-8 py-20 bg-white'>
        <div className='max-w-6xl mx-auto'>
            <div className='text-center mb-12 animate-fade-in-up'>
                <h2 className='text-3xl font-bold text-gray-800 mb-2'>Projects</h2>
                <div className='w-12 h-1 bg-[#fe7b9a] rounded mx-auto mb-4'></div>
                <p className='text-gray-500 max-w-xl mx-auto'>Some of my best work built with React, MERN and Bootstrap</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {projects.map((project, index) => (
                    <div className={`card-white animate-fade-in-up delay-${index + 1}`}>
                        <img className='w-full h-48 object-cover' src={project.image} alt={project.title}/>
                        <div className='p-5'>
                            <h3 className='font-bold text-gray-800 mb-1'>{project.title}</h3>
                            <p className='text-gray-500 text-sm mb-4'>{project.description}</p>
                            <a className='btn text-xs inline-block' target='_blank' href={project.link}>View Project</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}