import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useOrder } from '../context/OrderContext';

const MENU_ITEMS = [
  { id: '1', name: 'Hamburguesa', price: 15000 },
  { id: '2', name: 'Pizza', price: 25000 },
  { id: '3', name: 'Ensalada', price: 12000 },
  { id: '4', name: 'Pasta', price: 18000 },
];

export default function HomeScreen() {
  const { addToCart } = useOrder();

  type MenuItem = { id: string; name: string; price: number };

  const renderItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItem}>
      <ThemedText style={styles.itemName}>{item.name}</ThemedText>
      <ThemedText style={styles.itemPrice}>${item.price}</ThemedText>
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => addToCart(item)}>
        <ThemedText style={styles.buttonText}>Agregar</ThemedText>
      </TouchableOpacity>
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Menú Disponible</ThemedText>
      <FlatList
        data={MENU_ITEMS}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 16,
    flex: 1,
  },
  itemPrice: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});