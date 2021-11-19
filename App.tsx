// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import AppNavigator from './src/navigation/AppNavigator'
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
// import rootReducer from './src/shared/redux/index';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { persistStore, persistReducer } from 'redux-persist';
// import { PersistGate } from 'redux-persist/es/integration/react';


// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);
// let store = createStore(persistedReducer, applyMiddleware(thunk));
// let persistor = persistStore(store);
// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <AppNavigator />
//       </PersistGate>
//     </Provider>
//   );
// };


// export default App

// const styles = StyleSheet.create({})



import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigator from './src/navigation/AppNavigator'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/shared/redux/index';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);
// let store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};


export default App

const styles = StyleSheet.create({})
