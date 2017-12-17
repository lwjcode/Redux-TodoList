import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '../ListItem';
import SubmitDialog from '../SubmitDialog';
import './index.css';

class TodoList extends Component {

	static propTypes = {
		loading: PropTypes.bool,
		error: PropTypes.bool,
		loadTaskList: PropTypes.func,
		taskList: PropTypes.arrayOf(PropTypes.object),
		updateTask: PropTypes.func,
		deleteTask: PropTypes.func,
		addTask: PropTypes.func,
	}

	componentDidMount () {
		this.props.loadTaskList();
	}

	getFinished () {
		let sum = 0;
		this.props.taskList.forEach( (item, index) => {
			if (item.status) {
				sum++;
			}
		});
		return sum;
	}
	
	render () {
		const { loading, error, taskList } = this.props;
		if (loading) {
			return <p>loding...</p>
		}
		if (error) {
			return <p>something error!!!</p>
		}

		if (taskList) {
			const totalFinish = this.getFinished();
			return (
				<div className="container">
					<h1>TodoList</h1>
					<ul>
						{ this.props.taskList.map ((item, index) =>
							<ListItem 
								item={item}
								key={index}
								updateTask={this.props.updateTask}
								deleteTask={this.props.deleteTask}
							/>
						)}
						<li>{totalFinish}已完成&nbsp;/&nbsp;{this.props.taskList.length}总数</li>
					</ul>
					<SubmitDialog addTask={this.props.addTask} />
				</div>
			);
		}
	}
}

export default TodoList;