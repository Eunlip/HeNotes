import NoteInput from '../components/NoteInput';
import rectangleMain from '../assets/images/rectangle-main.png';
import SearchField from '../components/SearchField';
import NoteList from '../components/NoteList';

export default function MainSection({ notes, addNote, onDelete, onArchive, archivedNotes, isArchive ,onSearch }) {
	return (
		<main id='notesInput' className='container h-screen py-10 md:py-60 xl:py-1'>
			<img className='absolute left-0 z-0' src={rectangleMain} alt='' />
			<section className='relative z-10 '>
				<h2 className='z-20 mt-10 text-2xl font-bold text-center text-neutral-100 sm:text-4xl'>
					Make your notes below
				</h2>
				<NoteInput addNote={addNote}/>
			</section>
			<section className='flex flex-col gap-10 my-32 '>
				<div>
					<div className='flex flex-col-reverse items-end justify-between sm:flex-row'>
						<h3 className='text-2xl font-semibold text-neutral-100'>Active Notes</h3>
						<SearchField onSearch={onSearch} />
					</div>
					<NoteList notes={notes} onDelete={onDelete} onArchive={onArchive} isArchive={isArchive}/>
				</div>
				<div>
					<h3 className='text-2xl font-semibold text-neutral-100'>Archive Notes</h3>
					<NoteList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} isArchive={!isArchive}/>
				</div>
			</section>
		</main>
	);
}
