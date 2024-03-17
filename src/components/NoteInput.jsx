import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const MAX_LENGTH = 50;

const notify = () => toast('Note added!', { icon: '📝' });

class NoteInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
			charLimit: MAX_LENGTH,
		};

		this.onTitleChange = this.onTitleChange.bind(this);
		this.onBodyChange = this.onBodyChange.bind(this);
		this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	onTitleChange(e) {
		const { value } = e.target;
		const charLimit = MAX_LENGTH - value.length;

		this.setState({
			title: value.slice(0, MAX_LENGTH),
			charLimit: charLimit < 0 ? 0 : charLimit,
		});
	}

	onBodyChange(e) {
		this.setState({ body: e.target.value });
	}

	onSubmitHandler(e) {
		e.preventDefault();
		this.props.addNote(this.state);

		notify();

		this.setState({
			title: '',
			body: '',
			charLimit: MAX_LENGTH,
		});
	}

	render() {
		return (
			<div className='z-20 flex items-center justify-center pt-5 '>
				<form onSubmit={this.onSubmitHandler}>
					<div className='flex flex-col items-center justify-center w-[25rem]  '>
						<div className='flex flex-col gap-2 mb-5'>
							<input
								className='px-5 py-3 sm:w-[35rem] w-[22rem] rounded-md bg-[#363C4E] text-gray-200 focus:outline-none placeholder:text-gray-400 border border-slate-600'
								type='text'
								placeholder='Input your title here...'
								required
								value={this.state.title}
								onChange={this.onTitleChange}
							/>
							<p
								className={`text-[12px] font-medium text-end  pe-1 ${
									this.state.charLimit < 6 ? 'text-red-500' : 'text-gray-400'
								}`}
							>
								Remaining characters: {this.state.charLimit}
							</p>
						</div>
						<textarea
							rows={7}
							className='sm:w-[35rem] w-[22rem] border border-slate-600 focus:outline-none placeholder:text-gray-400 text-gray-200 px-5 py-5 bg-[#363C4E] rounded-md'
							placeholder='Input your note here...'
							required
							value={this.state.body}
							onChange={this.onBodyChange}
						></textarea>
						<button className='block rounded-lg mt-5 py-2 px-6 sm:w-[35rem] w-[22rem] text-sm sm:text-lg bg-[#344955] text-[#F5F5F5] hover:bg-[#3a515e]'>
							Create
						</button>
						<Toaster position='top-right' toastOptions={{}} />
					</div>
				</form>
			</div>
		);
	}
}
export default NoteInput;

// 344955
