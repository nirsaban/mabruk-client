import { MonitroingActionTypes } from './monitoring.types';

export const setMonitoringData = monitoring => ({
  type: MonitroingActionTypes.SET_MONITORING_DATA,
  payload: monitoring
});

