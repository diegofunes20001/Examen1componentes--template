import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import { Colors } from '../constant/Colors';
import { OrderProvider } from '../context/OrderContext';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <OrderProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Inicio',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="order"
          options={{
            title: 'Realizar Pedido',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.fill" color={color} />,
          }}
        />
        <Tabs.Screen
          name="deleted"
          options={{
            title: 'Eliminados',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="trash.fill" color={color} />,
          }}
        />
      </Tabs>
    </OrderProvider>
  );
}