import { Component } from 'react';

class SearchField extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keywords: '',
		};

		this.onSearchHandler = this.onSearchHandler.bind(this);
	}

	onSearchHandler(value) {
		this.setState({ keywords: value });
		this.props.onSearch(value);
	}

	render() {
		return (
			<div>
				<input
					className='px-5 py-3 sm:w-96 w-[22rem] rounded-md bg-[#363C4E] text-gray-200 focus:outline-none placeholder:text-gray-400 border border-slate-600'
					type='text'
					placeholder='Find your notes here...'
					value={this.state.keywords}
					onChange={(e) => this.onSearchHandler(e.target.value)}
				/>
			</div>
		);
	}
}

export default SearchField;
