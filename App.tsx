/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {FansProvider} from './src/context/FansContext';

function App(): React.JSX.Element {
  return (
    <FansProvider>
      <MainNavigation />
    </FansProvider>
  );
}

export default App;
