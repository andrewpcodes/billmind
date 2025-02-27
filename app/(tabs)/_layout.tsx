import React from 'react';
import { Tabs, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const TabLayout = () => {

  return (
    <Tabs
      initialRouteName={'CalendarScreen'}
      backBehavior="history"
    >
      <Tabs.Screen
        name="CalendarScreen"
        options={{
          title: 'Calendar',
          headerTitle: 'Calendar',
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'calendar' : 'calendar-outline'} size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bills"
        options={{
          title: 'Bills',
          headerTitle: 'Bills',
          tabBarIcon: ({ focused, size, color }) => (
            <Ionicons name={focused ? 'wallet' : 'wallet-outline'} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;