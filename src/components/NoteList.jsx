import NoteItem from './NoteItem';

export default function NoteList({ notes, onDelete, onArchive, isArchive }) {
	return (
		<>
			{notes.length ? (
				<div className='grid items-baseline grid-cols-4 gap-3 mt-5'>
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
				<p className='my-10 text-neutral-100'>No notes found</p>
			)}
		</>
	);
}
