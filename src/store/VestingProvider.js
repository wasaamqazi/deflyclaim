import { useReducer } from 'react';

import VestingContext from './vesting-context';

const defaultVestingState = {
  contract: null,
  vesting_schedule: [],
  loadVestingSchedule: null
};

const vestingReducer = (state, action) => {
  if (action.type === 'CONTRACT') {
    return {
      contract: action.contract,
      vesting_schedule: state.vesting_schedule,
      loadVestingSchedule: state.loadVestingSchedule
    };
  }

  if (action.type === 'LOADVESTINGSCHEDULE') {
    return {
      contract: state.contract,
      vesting_schedule: action.vesting_schedule,
    };
  }

  return defaultVestingState;
};

const VestingProvider = props => {
  const [VestingState, dispatchVestingAction] = useReducer(vestingReducer, defaultVestingState);

  const loadContractHandler = (web3, Vesting, deployedNetwork) => {
    const contract = deployedNetwork ? new web3.eth.Contract(Vesting.abi, deployedNetwork.address) : '';
    dispatchVestingAction({ type: 'CONTRACT', contract: contract });
    return contract;
  };

  const loadVestingsHandler = async (contract, address) => {
    const schedule = await contract.methods.getVestingSchedule().call();
    console.log(schedule);
    dispatchVestingAction({ type: 'LOADVESTINGSCHEDULE', vesting_schedule: schedule });
  };

  const vestingContext = {
    contract: VestingState.contract,
    vesting_schedule: VestingState.vesting_schedule,
    loadContract: loadContractHandler,
    loadVestingSchedule: loadVestingsHandler
  };

  return (
    <VestingContext.Provider value={vestingContext}>
      {props.children}
    </VestingContext.Provider>
  );
};

export default VestingProvider;