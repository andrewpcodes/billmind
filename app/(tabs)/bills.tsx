import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, Text, Button} from "react-native";
import BillView from "@/components/ui/bill/bill";
import {Bill} from "@/components/ui/bill/bill.type";
import {EmptyState} from "@/components/ui/empty-state/empty-state";
import {useRouter} from "expo-router";
import {fetchBills} from "@/components/service/bill.service";

const BillsScreen = () => {
  const [bills, setBills] = useState([] as Bill[]);
  const router = useRouter()

  useEffect(() => {
    fetchBills()
      .then(fetchedBills => setBills(fetchedBills))
      .catch(error => console.error('Failed to fetch bills:', error));
  }, [bills]);

  return (
    <View style={styles.container}>
      <Button title="Add Bill" onPress={() => router.push('/(modals)/addBillScreen')} />
      { bills.length === 0 ? <EmptyState message="No Bills Found" /> : <FlatList data={bills} renderItem={({item}) => (BillView(item))} style={styles.list}/> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    flex: 1,
  },
});

export default BillsScreen;