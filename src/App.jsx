import { Component } from 'react';
import Header from './layout/Header';
import MainSection from './layout/MainSection';
import { getInitialData } from './utils';
import swal from 'sweetalert';
import Footer from './layout/Footer';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			notes: getInitialData(),
			searchKeywords: '',
			archivedNotes: [],
		};

		this.onDeleteHandler = this.onDeleteHandler.bind(this);
		this.onArchiveHandler = this.onArchiveHandler.bind(this);
		this.onAddNote = this.onAddNote.bind(this);
		this.onSearchHandler = this.onSearchHandler.bind(this);
		this.filteredNotes = this.filteredNotes.bind(this);
	}

	onDeleteHandler(id) {
		const notes = this.state.notes.filter((note) => note.id !== id);
		const archivedNotes = this.state.archivedNotes.filter((note) => note.id !== id);

		swal({
			title: 'Are you sure?',
			text: 'You cannot recover this record again!',
			icon: 'warning',
			buttons: true,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				this.setState({ notes, archivedNotes });
				swal('Poof! Successfully deleted your note', {
					icon: 'success',
				});
			}
		});
	}

	onArchiveHandler(id) {
		const moveToArchive = this.state.notes.find((note) => note.id === id);
		const undoArchive = this.state.archivedNotes.find((note) => note.id === id);

		if (moveToArchive) {
			this.setState((prevState) => ({
				notes: this.state.notes.filter((note) => note.id !== id),
				archivedNotes: [...prevState.archivedNotes, moveToArchive],
			}));
		} else if (undoArchive) {
			this.setState((prevState) => ({
				notes: [...prevState.notes, undoArchive],
				archivedNotes: this.state.archivedNotes.filter((note) => note.id !== id),
			}));
		} else {
			return;
		}
	}

	onAddNote({ title, body, archived }) {
		const newNote = {
			id: +new Date(),
			title,
			body,
			createdAt: new Date().toISOString(),
			archived,
		};

		this.setState((prevState) => ({
			notes: [...prevState.notes, newNote],
		}));
	}

	onSearchHandler(value) {
		this.setState({ searchKeywords: value });
	}
  
	filteredNotes(notes, searchKeywords) {
		return notes.filter((note) => {
			const title = note.title.toLowerCase();
			const keywords = searchKeywords.toLowerCase();

			return title.includes(keywords);
		});
	}

	render() {
		const { notes, archivedNotes, searchKeywords } = this.state;

		return (
			<div className='mx-auto 2xl:px-14 font-Inter'>
				<Header />
				<MainSection
					notes={this.filteredNotes(notes, searchKeywords)}
					archivedNotes={this.filteredNotes(archivedNotes, searchKeywords)}
					addNote={this.onAddNote}
					onDelete={this.onDeleteHandler}
					onArchive={this.onArchiveHandler}
					onSearch={this.onSearchHandler}
				/>
				<Footer />
			</div>
		);
	}
}

export default App;
