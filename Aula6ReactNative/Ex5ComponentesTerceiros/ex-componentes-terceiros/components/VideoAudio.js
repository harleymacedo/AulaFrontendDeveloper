import { View, Text, StyleSheet } from 'react-native'
import Video, { VideoRef } from 'react-native-video'


export default function () {
    return (
        <View>
            <Video                
                source={require('./background.mp4')}                
                ref={useRef<VideoRef>(null)}            
                onBuffer={onBuffer}                
                onError={onError}
                style={styles.backgroundVideo}
            />
        </View>
    )
}

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
  })