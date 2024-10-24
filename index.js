/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { CustomAlertProvider } from './src/components/AlertBox';
import Splash from './src/screens/splash';

const WrappedApp = () => {
    return (
        <CustomAlertProvider>
            <App />
        </CustomAlertProvider>
    )
}

AppRegistry.registerComponent(appName, () => WrappedApp);
