/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

// if (__DEV__) {
//     import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
// }

LogBox.ignoreLogs(['Require cycle', 'Warning']);

function HeadlessCheck({ isHeadless }) {
    if (isHeadless) {
        return null;
    }
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(HeadlessCheck));
