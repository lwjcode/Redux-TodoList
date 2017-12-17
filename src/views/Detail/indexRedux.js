import axios from 'axios';

const LOAD_TASK = 'LOAD_TASK';
const LOAD_TASK_SUCCESS = 'LOAD_TASK_SUCCESS';
const LOAD_TASK_ERROR = 'LOAD_TASK_ERROR';

const taskData = {
	loading: false,
	error: false,
	task: {},
};

function taskLoading (loading) {
	return {
		type: LOAD_TASK,
		payload: loading,
	};
}

function taskError (error) {
	return {
		type: LOAD_TASK_ERROR,
		payload: error,
	};
} 

function taskLoadSuccess (data) {
	return {
		type: LOAD_TASK_SUCCESS,
		payload: data,
	};
} 

export function loadTask (taskId) {
	return dispatch => {
		dispatch(taskLoading(true));
		axios.get('/data/taskList.json')
		.then( response => {
			dispatch(taskLoading(false));
			let taskList = response.data.result.taskList;
			let task = {};
			task = taskList.find( item => item.id === taskId);
			dispatch(taskLoadSuccess(task));
		})
		.catch( error => {
			dispatch(taskLoading(false));
			dispatch(taskError(true));
		});
	}
} 

function taskReducer (state = { taskData }, action) {
	switch(action.type) {
		case LOAD_TASK: {
			return {
				...state,
				loading: true,
				error: false,
			};
		}

		case LOAD_TASK_ERROR: {
			return {
				...state,
				loading: false,
				error: true,
			};
		}

		case LOAD_TASK_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				task: action.payload,
			}
		}

		default: {
			return state;
		}

	}
}

export default taskReducer;