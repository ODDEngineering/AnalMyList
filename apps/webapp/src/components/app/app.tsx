import React, { useEffect, useState } from 'react';
import { Message } from '@anal-my-list/api-interfaces';
import { Provider } from 'react-redux';
import { store } from '../../state';
import { Home } from '../home'

export const App = () => {

  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
