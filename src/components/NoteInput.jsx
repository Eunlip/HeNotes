import { Component } from 'react';

const MAX_LENGTH = 7;

class NoteInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: '',
			body: '',
			charLimit: MAX_LENGTH,
		};

		// this.onTitleChange = this.onTitleChange.bind(this);
		// this.onBodyChange = this.onBodyChange.bind(this);
		// this.onSubmitHandler = this.onSubmitHandler.bind(this);
	}

	render() {
		return (
			<div className='flex items-center justify-center py-10 '>
				<form>
					<div className='flex flex-col gap-2 mb-5'>
						<input
							className='px-5 py-3 w-[35rem] rounded-md bg-[#363C4E] text-gray-200 focus:outline-none placeholder:text-gray-400 border border-slate-600'
							type='text'
							placeholder='Input your title here...'
							required
							// value={this.state.title}
							// onChange={this.onTitleChange}
						/>
						<p className={`text-[12px] font-medium text-end ${this.state.charLimit < 6 ? 'text-red-500' : 'text-gray-300'}`}>
							Remaining characters: {this.state.charLimit}
						</p>
					</div>
					<textarea
						cols={48}
						rows={7}
						className='border border-slate-600 focus:outline-none placeholder:text-gray-400 text-gray-200 px-5 py-5 bg-[#363C4E] rounded-md'
						placeholder='Input your note here...'
						required
					></textarea>
				</form>
			</div>
		);
	}
}
export default NoteInput;
