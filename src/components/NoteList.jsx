import NoteItem from './NoteItem';

export default function NoteList({ notes, onDelete, onArchive, isArchive }) {
	return (
		<>
			{notes.length ? (
				<div className='grid items-baseline mt-2 sm:mt-5 lg:gap-3 sm:gap-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{notes.map((note) => (
						<NoteItem
							key={note.id}
							id={note.id}
							onDelete={onDelete}
							onArchive={onArchive}
							isArchive={isArchive}
							{...note}
						/>
					))}
				</div>
			) : (
				<p className='my-10 text-center sm:text-start text-neutral-100'>No notes found</p>
			)}
		</>
	);
}
