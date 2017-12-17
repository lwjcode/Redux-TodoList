import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../../component/List';
import { loadTaskList } from '../../component/List/indexRedux';
import { updateTask, deleteTask } from '../../component/ListItem/indexRedux';
import { addTask } from '../../component/SubmitDialog/indexRedux';

class TodoList extends Component {

	render () {
		return (
			<List {...this.props} />
		);
	}
}

export default connect( state => {
	return {
		loading: state.taskListData.loading,
		error: state.taskListData.error,
		taskList: state.taskListData.taskList,
	};
}, dispatch => {
	return {
		loadTaskList: bindActionCreators(loadTaskList, dispatch),
		updateTask: bindActionCreators(updateTask, dispatch),
		deleteTask: bindActionCreators(deleteTask, dispatch),
		addTask: bindActionCreators(addTask, dispatch),
	};
})(TodoList);