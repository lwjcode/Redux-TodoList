import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const initialState = {
	taskListData: {
		loading: false,
		error: false,
		taskList: [],
	}, 
	userData: {
		loading: false,
		error: false,
		user: {},
	},
	noticeListData: {
		loading: false,
		error: false,
		noticeList: [],
	},
	taskData: {
		loading: false,
		error: false,
		task: {},
	}
};

let enhancer = applyMiddleware(thunk);

let store = createStore(
	reducers,
	initialState,
	enhancer,
);

export default store;
