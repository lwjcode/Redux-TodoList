import axios from 'axios';

//加载过程中的不同action;
const LOAD_TASKLIST = 'LOAD_TASKLIST';
const LOAD_TASKLIST_SUCCESS = 'LOAD_TASKLIST_SUCCESS';
const LOAD_TASKLIST_ERROR = 'LOAD_TASKLIST_ERROR';

function taskListLoading (loading) {
	return {
		type: LOAD_TASKLIST,
		payload: loading,
	};
}

function taskListSuccess (data) {
	return {
		type: LOAD_TASKLIST_SUCCESS,
		payload: data,
	};
}

function taskListError (error) {
	return {
		type: LOAD_TASKLIST_ERROR,
		payload: error,
	};
}

//action creator函数，用来分发action
export function loadTaskList () {
	return dispatch => {
		dispatch(taskListLoading(true));
		axios.get('/data/taskList.json')
		.then( (response => {
			dispatch(taskListLoading(false));
			dispatch(taskListSuccess(response.data.result.taskList));
		}))
		.catch( (error) => {
			console.log(error);
			dispatch(taskListLoading(false));
			dispatch(taskListError(true));
		});
	}
}
