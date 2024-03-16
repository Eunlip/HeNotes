export default function DeleteButton({ onDelete }) {
	return (
		<button onClick={onDelete} className='rounded-lg py-2 px-6 text-[#F5F5F5] bg-[#EF4444]'>
			Delete
		</button>
	);
}
