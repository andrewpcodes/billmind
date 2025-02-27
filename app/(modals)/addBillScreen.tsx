import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Bill } from '@/components/ui/bill/bill.type';
import {useRouter} from "expo-router";
import {saveBill} from "@/components/service/bill.service";

const AddBillScreen = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const router = useRouter();

  const handleAddBill = () => {
    const newBill: Bill = {
      description,
      amount: parseFloat(amount),
      initialDate: new Date(initialDate),
      dueDate: new Date(dueDate),
    };

    saveBill(newBill)
      .then(r => {
        console.log(r)
      })
      .catch(e => {
        console.log(e)
      })

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Initial Date</Text>
      <TextInput
        style={styles.input}
        value={initialDate}
        onChangeText={setInitialDate}
        placeholder="YYYY-MM-DD"
      />
      <Text style={styles.label}>Due Date</Text>
      <TextInput
        style={styles.input}
        value={dueDate}
        onChangeText={setDueDate}
        placeholder="YYYY-MM-DD"
      />
      <Button title="Add Bill" onPress={handleAddBill} />
      <Button title="Close Modal" onPress={() => router.back()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
});

export default AddBillScreen;