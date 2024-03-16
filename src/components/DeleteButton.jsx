export default function DeleteButton({ id, onDelete }) {
	return (
		<button onClick={() => onDelete(id)} className='rounded-lg py-2 px-8 text-[#F5F5F5] bg-red-500'>
			Delete
		</button>
	);
}
