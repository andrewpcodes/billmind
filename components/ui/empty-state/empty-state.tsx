import {View, Text, StyleSheet} from "react-native";

export const EmptyState = (props: {message: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{props.message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    color: '#666',
  },
});