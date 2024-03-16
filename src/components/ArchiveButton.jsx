export default function ArchiveButton({ onArchive }) {
	return (
		<button onClick={onArchive} className='rounded-lg py-2 px-5 text-[#F5F5F5] bg-[#2563EB]'>
			Archive
		</button>
	);
}
