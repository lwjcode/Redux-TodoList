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

//处理添加action的reducer;
function addTaskReducer (state = { taskList: []}, action) {

	let len = state.taskListData.taskList.length;
	let index = len > 0 ? len - 1 : 0;
	let lastTaskId = index !== 0 ? state.taskListData.taskList[index].id : 0; 

	switch (action.type) {
		case ADD_TASK: {
			state.taskListData.taskList.push({
				id: lastTaskId + 1,
				name: action.payload.name,
				status: false,
			});
			return {
				...state,
				taskList: state.taskListData.taskList,
			}
		} 

		default: {
			return state;
		}
	}
}

export default addTaskReducer;