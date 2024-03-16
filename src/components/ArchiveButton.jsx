export default function ArchiveButton({ id, children, onArchive }) {
	return (
		<button
			onClick={() => onArchive(id)}
			className={`rounded-lg py-2 ${
				children === 'UnArchive' ? 'px-[21px]' : 'px-8'
			} text-[#F5F5F5] bg-[#2563EB]`}
		>
			{children}
		</button>
	);
}
