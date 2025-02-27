import {FlatList, StyleSheet, View} from "react-native";
import React, {useEffect} from "react";
import {Calendar, DateData} from "react-native-calendars";
import BillView from "@/components/ui/bill/bill";
import {Bill} from "@/components/ui/bill/bill.type";
import {EmptyState} from "@/components/ui/empty-state/empty-state";
import {fetchBills} from "@/components/service/bill.service";

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().split('T')[0]);
  const [bills, setBills] = React.useState([] as Bill[]);

  useEffect(() => {
    fetchBills()
      .then(fetchedBills => setBills(fetchedBills))
      .catch(error => console.error('Failed to fetch bills:', error));
  }, [bills, selectedDate]);

  return (
    <View style={styles.container}>
      <Calendar
        initialDate={selectedDate}
        onDayPress={(day: DateData) => setSelectedDate(day.dateString)}
      />
     { bills.length === 0 ? <EmptyState message="No Bills Found" /> : <FlatList data={bills} renderItem={({item}) => (BillView(item))} style={styles.list} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
});

export default CalendarScreen;