import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import * as React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import ReactMain from './src/ReactMain';

export default function App() {
  return (
    <>
      <GestureHandlerRootView style={styles.root}>
        <BottomSheetModalProvider>
          <ReactMain />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
}

const styles = {root: {flex: 1}};
