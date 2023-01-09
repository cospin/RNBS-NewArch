import React, {useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const App = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Pressable
              onPress={() => console.log('No action here')}
              style={styles.contentContainer}>
              <Text style={[styles.titleText]}>Press to nothing</Text>
              <Text>Pressable without action</Text>
              <Text>Crash when the sheet is closed</Text>
            </Pressable>
            <Pressable
              onPress={() => bottomSheetModalRef?.current?.dismiss()}
              style={styles.contentContainer}>
              <Text style={[styles.titleText]}>Press to close</Text>
              <Text>Pressable to close</Text>
              <Text>Auto close, auto crash</Text>
            </Pressable>
            <TouchableOpacity
              onPress={() => bottomSheetModalRef?.current?.dismiss()}
              style={styles.contentContainer}>
              <Text style={[styles.titleText]}>Press to close</Text>
              <Text>TouchableOpacity</Text>
              <Text>No crash with this</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    margin: 10,
  },
});

export default App;
