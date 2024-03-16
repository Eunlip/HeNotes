import NoteInput from '../components/NoteInput';
import rectangleMain from '../assets/images/rectangle-main.png';
import NoteItem from '../components/NoteItem';

export default function MainSection() {
	return (
		<main className='container h-screen py-44 lg:py-0'>
			<img className='absolute left-0 z-0' src={rectangleMain} alt='' />
			<h2 className='relative z-20 mt-10 text-4xl font-bold text-center text-white'>
				Make your notes below
			</h2>
			<NoteInput />
      <NoteItem />
		</main>
	);
}
