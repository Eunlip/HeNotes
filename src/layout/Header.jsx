import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png';
import heroImage from '../assets/images/image-6.png';
import rectangle from '../assets/images/rectangle-10.png';

export default function Header() {
	return (
		<header className='container px-5 mx-auto xl:h-screen '>
			<img className='relative z-20 md:mx-0' src={logo} alt='brand logo' />
			<div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
				<div className='relative z-20 flex flex-col items-center gap-3 mt-10 md:items-start'>
					<h1 className='text-center md:text-start text-4xl sm:text-5xl tracking-wide leading-snug sm:leading-normal font-semibold text-[#f5f5f5]'>
						Keep Your Ideas <br /> with HeNotes
					</h1>
					<p className='md:text-xl text-sm font-medium text-[#9ca3af]'>
						Simplifying Note-Taking for You
					</p>
					<div className='mt-10'>
						<Link
							to='notesInput'
							smooth={true}
							duration={500}
							className='cursor-pointer rounded-lg py-2 px-6 text-sm sm:text-lg bg-[#FFA000] text-[#F5F5F5] hover:bg-[#f1ae3a]'
						>
							Try Now !
						</Link>
					</div>
				</div>
				<img
					className='relative right-0 z-10 mt-10 w-96 md:w-80 lg:w-auto'
					src={heroImage}
					alt='hero image'
				/>
				<div className='absolute top-0 right-0 z-0'>
					<img src={rectangle} alt='rectangle' />
				</div>
			</div>
		</header>
	);
}
