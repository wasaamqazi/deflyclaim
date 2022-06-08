import React from 'react';

const VestingContext = React.createContext({
  contract: null,
  vesting_schedule: [],
  loadContract: () => { },
  loadVestingSchedule: () => { }
});

export default VestingContext;