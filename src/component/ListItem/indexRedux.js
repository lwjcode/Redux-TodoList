//处理更新任务状态后和删除任务后的taskList的状态;

const UPDATE_TASK = 'UPDATE_TASK';
const DELETE_TASK = 'DELETE_TASK';

//action creator
export function updateTask (task) {
	return dispatch => {
		dispatch({
			type: UPDATE_TASK,
			payload: task,
		});
	}
}

export function deleteTask (task) {
	return dispatch => {
		dispatch({
			type: DELETE_TASK,
			payload: task,
		});
	}
}
