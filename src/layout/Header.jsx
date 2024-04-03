import { Link } from 'react-scroll';
import logo from '../assets/images/logo.png';
import heroImage from '../assets/images/Illustration-hero.png';
import rectangle from '../assets/images/rectangle-10.png';

export default function Header() {
	return (
		<header className='container px-5 mx-auto'>
			<div className='relative z-20 flex items-center justify-between'>
				<img className='md:mx-0' src={logo} alt='brand logo' />
				<nav className='hidden gap-10 text-lg font-medium cursor-pointer sm:flex text-neutral-200'>
					<Link className='hover:text-neutral-300' to='activeNotes' smooth={true} duration={500}>
						Active Notes
					</Link>
					<Link className='hover:text-neutral-300' to='archiveNotes' smooth={true} duration={500}>
						Archive Notes
					</Link>
				</nav>
			</div>
			<div className='flex flex-col items-center justify-center md:flex-row md:justify-between'>
				<div className='relative z-20 flex flex-col items-center gap-3 mt-10 md:items-start'>
					<h1 className='text-4xl font-semibold leading-snug tracking-wide text-center md:text-start sm:text-5xl sm:leading-normal text-neutral-100'>
						Keep Your Ideas <br /> with HeNotes
					</h1>
					<p className='md:text-xl text-sm font-medium text-[#9ca3af]'>
						Simplifying Note-Taking for You
					</p>
					<a
						href='https://henotes-app.vercel.app/'
						className='mt-10 font-medium cursor-pointer rounded-lg py-2 px-6 text-sm sm:text-lg bg-[#608B8F] text-[#F5F5F5] hover:bg-[#68969a]'
					>
						Try Now !
					</a>
				</div>
				<img
					className='relative z-10 mt-10 -left-4 sm:right-0 w-96 md:w-80 lg:w-auto'
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
