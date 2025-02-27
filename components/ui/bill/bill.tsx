import {Button, StyleSheet, Text, View} from "react-native";
import {Bill} from "@/components/ui/bill/bill.type";
import {removeBill} from "@/components/service/bill.service";

export default function BillView(bill: Bill) {
  return (
    <View style={styles.billContainer}>
      <Text style={styles.billDescription}>{bill.description}</Text>
      <Text style={styles.billAmount}>${bill.amount.toFixed(2)}</Text>
      <Text style={styles.billDate}>Initial Date: {bill.initialDate.toString()}</Text>
      <Text style={styles.billDate}>Due Date: {bill.dueDate.toString()}</Text>
      <Button title={"Delete"} onPress={() => {
        bill.id ? removeBill(bill.id) : console.log("error")
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  billContainer: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  billDescription: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  billAmount: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  billDate: {
    fontSize: 14,
    color: "#666",
  },
});