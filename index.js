/**
 * @format
 */

import {AppRegistry} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './musicPlayerServices';
import App from './App';
import App2 from './PJ2_Cards';
import App3 from './PJ3_PasswordGenerator';
import App4 from './PJ4_RandomBg';
import App5 from './PJ5_RollTheDice';
import PJ6_CurrencyConverter from './PJ6_CurrencyConverter';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => PJ6_CurrencyConverter);
TrackPlayer.registerPlaybackService(() => playbackService);