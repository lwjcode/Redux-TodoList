import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class SubmitDialog extends Component {

	static propTypes = {
		addTask: PropTypes.func,
	};

	constructor (props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick () {
		var value = this.refs.myText.value;
		if (value !== '') {
			var task = {
				name: value,
			};
			this.props.addTask(task);
			this.refs.myText.value = '';
		}
	}

	render () {
		return (
			
			<div className="dialog">
				<div>
					<h3>Task</h3>
					<input type="text" ref="myText" placeholder="你想做点什么"/>
				</div>
				<div>
					<input type="button" value="Save Task" onClick={this.handleClick}/>
				</div>
			</div>
			
		);
	}
}

export default SubmitDialog;