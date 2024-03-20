import randomColor from 'randomcolor';
import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import tinycolor from 'tinycolor2';

const ITEM_HEIGHT = 150;

const data = Array.from({ length: 150 }, (_, i) => i + 1);

const TestScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={data}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => <RenderItem item={item} />}
      />
    </View>
  );
};

export default TestScreen;

const RenderItem = ({ item }) => {
  const color = randomColor({ seed: item });

  const pressIn = useSharedValue(0);

  const longPressGesture = useMemo(() => {
    return Gesture.LongPress()
      .minDuration(250)

      .onBegin(() => {
        pressIn.value = withTiming(1, { duration: 100 });
      })
      .onFinalize(() => {
        pressIn.value = withTiming(0, { duration: 200 });
      });
  }, [pressIn]);

  const isLight = useMemo(() => {
    return tinycolor(color).isLight();
  }, [color]);

  const containerStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        pressIn.value,
        [0, 1],
        [color, isLight ? 'black' : 'white']
      ),
    };
  }, [color, isLight]);

  const textStyle = useAnimatedStyle(() => {
    return {
      color: interpolateColor(
        pressIn.value,
        [0, 1],
        [isLight ? 'black' : 'white', isLight ? 'white' : 'black']
      ),
    };
  }, [color, isLight]);

  return (
    <GestureDetector gesture={longPressGesture}>
      <Animated.View
        style={[
          containerStyle,
          {
            height: ITEM_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        <Animated.Text style={textStyle}>{item}</Animated.Text>
      </Animated.View>
    </GestureDetector>
  );
};
