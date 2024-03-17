import logo from '../assets/images/logo.png';
import githubIcon from '../assets/images/githubIcon.png';
import instagramIcon from '../assets/images/instagramIcon.png';
import linkedinIcon from '../assets/images/linkedinIcon.png';

export default function Footer() {
	return (
		<div className=' text-neutral-300 bg-[#273140]'>
			<div className='container py-10 mx-auto sm:px-5'>
				<div className='flex items-center justify-center sm:justify-between'>
					<h1 className='text-3xl font-notmal'>HeNotes App</h1>
					<img className='hidden w-24 sm:block' src={logo} alt='brand logo' />
				</div>
				<div className='flex gap-5 justify-center sm:justify-normal sm:gap-10 my-8 text-[1rem]'>
					<a href='https://github.com/Eunlip' target='_blank' className='flex items-center gap-2'>
						<img src={githubIcon} className='w-5 sm:w-auto' alt='github icon' />
						<p>Github</p>
					</a>
					<a href='https://www.instagram.com/eunlipp_' target='_blank' className='flex items-center gap-2'>
						<img src={instagramIcon} className='w-5 sm:w-auto' alt='instagram icon' />
						<p>Instagram</p>
					</a>
					<a href='https://www.linkedin.com/in/alifpahreza/' target='_blank' className='flex items-center gap-2'>
						<img src={linkedinIcon} className='w-5 sm:w-auto' alt='linkedin icon' />
						<p>LinkedIn</p>
					</a>
				</div>
				<div className='flex flex-col gap-7'>
					<div className='h-[1px] bg-neutral-300'></div>
					<p className='text-center sm:text-start'>© 2024 Alif Pahreza. All Rights Reserved</p>
				</div>
			</div>
		</div>
	);
}
