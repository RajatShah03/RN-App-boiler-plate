import React from 'react';
import * as actions from '../Actions';
import useGlobalStateContainer from '../Hooks/useGlobalStateContainer';

// create the initialState tree
const initialState = {};

const useGlobalState = useGlobalStateContainer(React, initialState, actions);

export default useGlobalState;
