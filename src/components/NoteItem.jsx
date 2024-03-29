import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../utils';
import { BiSolidArchiveIn, BiSolidArchiveOut } from 'react-icons/bi';

export default function NoteItem({ id, title, body, createdAt, onDelete, onArchive, isArchive }) {
	const formattedDate = showFormattedDate(createdAt);
	return (
		<div className='mx-5 max-w-96 min-w-[19rem] sm:mx-auto relative p-5 pb-10 text-neutral-100 rounded-lg border-t border-[#E5E7EB] min-h-72 max-h-[55rem] bg-[#334155] my-5 overflow-auto'>
			<div className='flex flex-col position-relative'>
				<h2 className='text-[20px] font-bold'>{title}</h2>
				<p className='text-sm font-light'>{formattedDate}</p>
				<div className='my-4 text-sm font-medium'>{body}</div>
			</div>
			<div className='absolute bottom-0 left-0 right-0 flex'>
				<DeleteButton id={id} onDelete={onDelete} />
				<ArchiveButton id={id} onArchive={onArchive}>
					{!isArchive ? <BiSolidArchiveIn className=''/> : <BiSolidArchiveOut />}
				</ArchiveButton>
			</div>
		</div>
	);
}
