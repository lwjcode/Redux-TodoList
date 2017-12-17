import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadTask } from './indexRedux';

class Detail extends Component {
	componentDidMount () {
		this.props.loadTask(this.props.match.params.id);
	}
	render () {
		if (this.props.loading) {
			return <div>loading...</div>
		}

		if (this.props.error) {
			return <div>error!!!</div>
		}

		if (this.props.task) {
			const content = this.props.task.name  ? this.props.task.name : '暂无内容';
			return (
				<div>{content}</div>
			);
		}
	}
}

export default connect( state => {
	return {
		...state.taskData,
	}
}, dispatch => {
	return {
		loadTask: bindActionCreators(loadTask, dispatch),
	}
})(Detail);