import { FaTrash } from 'react-icons/fa6';

export default function DeleteButton({ id, onDelete }) {
	return (
		<button
			onClick={() => onDelete(id)}
			className='flex justify-center text-2xl font-medium py-2 w-screen  text-neutral-100 bg-[#50727B]'
		>
			<FaTrash />
		</button>
	);
}
