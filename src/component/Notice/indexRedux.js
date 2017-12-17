import axios from 'axios';

//默认的state
const noticeListData = {
	loading: true,
	error: false,
	noticeList: [],
};

//不同的几种action
const LOAD_NOTICELIST = 'LOAD_NOTICELIST';
const LOAD_NOTICELIST_SUCCESS = 'LOAD_NOTICELIST_SUCCESS';
const LOAD_NOTICELIST_ERROR = 'LOAD_NOTICELIST_ERROR';

function noticeLoading (loading) {
	return {
		type: LOAD_NOTICELIST,
		payload: loading,
	};
}

function noticeSuccess (data) {
	return {
		type: LOAD_NOTICELIST_SUCCESS,
		payload: data,
	};
}

function noticeError (error) {
	return {
		type: LOAD_NOTICELIST_ERROR,
		payload: error,
	};
}

//action creator
export function loadNoticeList () {
	return dispatch => {
		dispatch(noticeLoading(true));
		axios.get('/data/noticeList.json')
		.then( response => {
			dispatch(noticeLoading(false));
			dispatch(noticeSuccess(response.data.result.noticeList));
		})
		.catch( error => {
			dispatch(noticeLoading(false));
			dispatch(noticeError(error));
		});
	}
}

//reducer
function noticeListReducer (state = { noticeListData }, action) {
	switch(action.type) {
		case LOAD_NOTICELIST: {
			return {
				...state,
				loading: true,
				error: false,
			}
		}

		case LOAD_NOTICELIST_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				noticeList: action.payload,
			};
		}

		case LOAD_NOTICELIST_ERROR: {
			return {
				...state,
				loading: false,
				error: true
			};
		}

		default: {
			return state;
		}
	}
}

export default noticeListReducer;