import React from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {

	const handleChange = value => {
		props.setContent(value);
	}

	return (
		<ReactQuill
			name='Editor'
			value={props.content}
			onChange={handleChange}
			modules={{
				toolbar: [
					[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

					['bold', 'italic', 'underline', 'strike'],        // toggled buttons
					['blockquote', 'code-block'],

					[{ 'list': 'ordered'}, { 'list': 'bullet' }],
					[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript

					[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
					[{ 'font': [] }],
					[{ 'align': [] }],

					['link', 'image'],

					['clean']                                         // remove formatting button
				]
			}}
		/>
	);
}

export default Editor;
