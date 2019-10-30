// this -> ref to global instance

/**
 * @param {*} newState
 * adds the newState to the globalState
 * binds all the listeners to the globalState
 * mutation of the globalState
 */
function setState(newState) {
  this.state = {...this.state, ...newState};
  this.listeners.forEach(listener => listener(this.state));
}

/**
 * @param {*} React
 * creats newListener(setState method emitted by React.useState hook)
 * also removes the listeners from unmounted instances
 * @returns [state, actions]
 */
function useGlobal(React) {
  const newListener = React.useState()[1];

  React.useEffect(() => {
    this.listeners.push(newListener);

    return () => {
      this.listeners = this.listeners.filter(
        listener => listener !== newListener,
      );
    };
  }, [newListener]);

  return [this.state, this.actions];
}

/**
 * @param {*} store
 * @param {*} actions
 * associates actions to store
 * @returns object of actions
 */
function associateActions(store, actions) {
  const associatedActions = {};

  Object.keys(actions).forEach(key => {
    if (typeof actions[key] === 'function') {
      associatedActions[key] = actions[key].bind(null, store);
    }
    if (typeof actions[key] === 'object') {
      associatedActions[key] = associateActions(store, actions[key]);
    }
  });

  return associatedActions;
}

/**
 * @param {*} React
 * @param {*} initialState
 * @param {*} actions
 * The globalStateHookContainer performs bindings
 * @returns useGlobalHook
 */
function useGlobalStateContainer(React, initialState, actions) {
  const store = {state: initialState, listeners: []};
  store.setState = setState.bind(store);
  store.actions = associateActions(store, actions);
  return useGlobal.bind(store, React);
}

export default useGlobalStateContainer;
