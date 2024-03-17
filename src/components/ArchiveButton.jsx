export default function ArchiveButton({ id, children, onArchive }) {
	return (
		<button
			onClick={() => onArchive(id)}
			className={` flex justify-center text-2xl font-medium py-2  right-0 w-screen text-neutral-100 bg-transparent border-[#50727B]  border-2`}
		>
			{children}
		</button>
	);
}
