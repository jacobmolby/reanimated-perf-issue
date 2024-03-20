# Perf degradation between reanimated 3.6.3 and 3.7.2

To run the benchmark:

1. Install the dependencies: `npm install`
2. Install Flashlight: https://docs.flashlight.dev/
3. Install Maestro: https://maestro.mobile.dev/getting-started/installing-maestro

## To run for for reanimated 3.6.3

1. `npm install react-native-reanimated@3.6.3`
2. `npm run android:release`
3. ```
   flashlight test --bundleId com.anonymous.reanimatedperfissue \
      --testCommand "maestro test scroll.yml" \
      --duration 30000 \
      --iterationCount 5 \
      --resultsFilePath 3_6_3.json --resultsTitle "3.6.3"
   ```

## To run for for reanimated 3.7.2

1. `npm install react-native-reanimated@3.7.2`
2. `npm run android:release`
3. ```
   flashlight test --bundleId com.anonymous.reanimatedperfissue \
      --testCommand "maestro test scroll.yml" \
      --duration 30000 \
      --iterationCount 5 \
      --resultsFilePath 3_7_2.json --resultsTitle "3.7.2"
   ```

## Results

The included results have been run on a Samsung Galaxy A52G

`flashlight report 3_6_3.json 3_7_2.json`

![Overview](overview.png)

![FPS](fps.png)

### Video of the example on 3.6.3

https://github.com/jacobmolby/reanimated-perf-issue/assets/25974867/6e545b06-7bf0-4cf4-a1a0-50cc49835d80

### Video of the example on 3.7.2

https://github.com/jacobmolby/reanimated-perf-issue/assets/25974867/18898df8-33b1-499a-b5c6-ee7447603e0d
