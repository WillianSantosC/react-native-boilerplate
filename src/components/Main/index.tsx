import { Text, View } from 'react-native';
import { styles } from './styles';

const Main = () => {
  return (
    <View className="flex-1 items-center justify-center">
      <Text accessibilityHint="header" className={styles.text}>
        Hello World
      </Text>
    </View>
  );
};

export default Main;
