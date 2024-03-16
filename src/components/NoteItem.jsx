import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../utils';

export default function NoteItem({ id, title, body, createdAt, onDelete, onArchive, isArchive }) {
	const formattedDate = showFormattedDate(createdAt)
	return (
		<div className='p-5 text-white rounded-lg border-t border-[#E5E7EB] w-[300px] bg-[#4E5762]'>
			<div className='flex flex-col'>
				<h2 className='text-2xl font-bold'>{title}</h2>
				<p className='text-sm font-light'>{formattedDate}</p>
				<p className='my-4 text-[16px] font-medium'>
					{body}
				</p>
				<div className='flex gap-4'>
					<DeleteButton id={id} onDelete={onDelete}/>
					<ArchiveButton id={id} onArchive={onArchive}>
						{!isArchive ? 'Archive' : 'UnArchive'}
					</ArchiveButton>
				</div>
			</div>
		</div>
	);
}
