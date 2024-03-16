import { Component } from 'react';

const MAX_LENGTH = 50;

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
		let charLimit = MAX_LENGTH - e.target.value.length;

		if (charLimit < 0) charLimit = 0;

		this.setState({
			title: e.target.value.slice(0, MAX_LENGTH),
			charLimit: charLimit,
		});
	}

	onBodyChange(e) {
		this.setState({ body: e.target.value });
	}

	onSubmitHandler(e) {
		e.preventDefault();
		this.props.addNote(this.state);

		this.setState({
			title: '',
			body: '',
			charLimit: MAX_LENGTH,
		});
	}

	render() {
		return (
			<div className='relative z-20 flex items-center justify-center py-10'>
				<form onSubmit={this.onSubmitHandler}>
					<div className='flex flex-col gap-2 mb-5'>
						<input
							className='px-5 py-3 w-[35rem] rounded-md bg-[#363C4E] text-gray-200 focus:outline-none placeholder:text-gray-400 border border-slate-600'
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
						className='w-[35rem] border border-slate-600 focus:outline-none placeholder:text-gray-400 text-gray-200 px-5 py-5 bg-[#363C4E] rounded-md'
						placeholder='Input your note here...'
						required
						value={this.state.body}
						onChange={this.onBodyChange}
					></textarea>
					<button className='block rounded-lg mt-5 py-2 px-6 w-[35rem] text-sm sm:text-lg bg-indigo-600 text-[#F5F5F5] hover:bg-indigo-500'>
						Create
					</button>
				</form>
			</div>
		);
	}
}
export default NoteInput;
