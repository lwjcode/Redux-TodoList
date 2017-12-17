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

//处理更新状态和删除任务的reducer;
function modifyTaskReducer (state = {taskList: []}, action) {

	const index = state.taskListData.taskList.indexOf(
		state.taskListData.taskList.find(task => task.id === action.payload.id)
	);

	switch (action.type) {
		case UPDATE_TASK: {
			state.taskListData.taskList[index].status = !state.taskListData.taskList[index].state;
			return {
				...state,
				taskList: state.taskListData.taskList,
			};
		}

		case DELETE_TASK: {
			state.taskListData.taskList.splice(index, 1);
			return {
				...state,
				taskList: state.taskListData.taskList,
			};
		}

		default: {
			return state;
		}
	}
}

export default modifyTaskReducer;