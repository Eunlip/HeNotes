export default function DeleteButton({ id, onDelete }) {
	return (
		<button
			onClick={() => onDelete(id)}
			className='font-medium py-2 w-screen px-10 text-neutral-100 bg-[#50727B]'
		>
			Delete
		</button>
	);
}
