import { MonitroingActionTypes } from './monitoring.types';

const INITIAL_STATE = {
  all_data: null
};

const monitoringReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case MonitroingActionTypes.SET_MONITORING_DATA:
      return {
        ...state,
        all_data: add_dates(action.payload)
      };
    default:
      return state;
  }
};
const add_dates = ({data}) => {
  const dates = data[data.length - 1]['quiet'].map(({created_at})=> created_at)
  data.push(dates)
  return data
}

export default monitoringReducer;
