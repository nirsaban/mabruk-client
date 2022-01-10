import { createSelector } from 'reselect';

const selectMonitor = state => state.monitoring;

export const selectMonitoringData = createSelector(
  [selectMonitor],
  monitoring => monitoring.all_data
);
