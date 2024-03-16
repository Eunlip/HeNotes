import NoteInput from '../components/NoteInput';
import rectangleMain from '../assets/images/rectangle-main.png';

export default function MainSection() {
	return (
		<main id='notesInput' className='container h-screen py-10 md:py-60 xl:py-1'>
			<img className='absolute left-0 z-0' src={rectangleMain} alt='' />
			<div className='relative z-10'>
				<h2 className='z-20 mt-10 text-2xl font-bold text-center text-white sm:text-4xl'>
					Make your notes below
				</h2>
				<NoteInput />
			</div>
		</main>
	);
}
