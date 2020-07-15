import produce from 'immer';
import * as types from './auth.types';

const INITIAL_STATE = {
  currentUser: null,
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {
      case types.SET_LOADING:
        draft.loading = action.payload;
        break;
      case types.LOGIN_SUCCESS:
      case types.REGISTER_SUCCESS:
        draft.currentUser = action.payload.data;
        break;
      case types.SET_CURRENT_USER:
        draft.currentUser = action.payload;
        break;
    }
  });

export default reducer;
