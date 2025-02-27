import {Bill} from "@/components/ui/bill/bill.type";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {uuid} from "expo-modules-core";

export const fetchBills = async (): Promise<Bill[]> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    return result
      .map(req => {
        if (req[1] != null) {
          const bill = JSON.parse(req[1]) as Bill;
          bill.id = req[0];
          return bill;
        }
        return null;
      })
      .filter(bill => bill != null) as Bill[];
  } catch (error) {
    console.error('Failed to fetch bills:', error);
    return [];
  }
};

export const saveBill = async (bill: Bill) => {
  try {
    const billValue = JSON.stringify(bill);
    await AsyncStorage.setItem(uuid.v4(), billValue);
    console.log('Bill saved successfully');
  } catch (error) {
    console.error('Failed to save bill:', error);
  }
};

export const removeBill = async (billId: string) => {
  try {
    await AsyncStorage.removeItem(billId);
    console.log('Bill removed successfully');
  } catch (error) {
    console.error('Failed to remove bill:', error);
  }
}

export const updateBill = async (billId: string, updatedBill: Bill) => {
  try {
    const billValue = JSON.stringify(updatedBill);
    await AsyncStorage.setItem(billId, billValue);
    console.log('Bill updated successfully');
  } catch (error) {
    console.error('Failed to update bill:', error);
  }
}