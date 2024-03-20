import 'react-native-gesture-handler';
//
import TestScreen from './TestScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TestScreen />
    </GestureHandlerRootView>
  );
}
