import {View} from "react-native";
import {useFocusEffect, useRouter} from "expo-router";

const Home = () => {
  const router = useRouter();

  useFocusEffect(() => {
    router.replace('/(tabs)/CalendarScreen');
  });

 return <View />;
}

export default Home;