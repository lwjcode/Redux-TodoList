//处理添加任务后的taskList的状态;

const ADD_TASK = 'ADD_TASK';

export function addTask (task) {
	return dispatch => {
		dispatch({
			type: ADD_TASK,
			payload: task,
		});
	}
}

