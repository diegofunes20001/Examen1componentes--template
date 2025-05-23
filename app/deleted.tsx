import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FlatList, StyleSheet, View } from 'react-native';
import { useOrder } from '../context/OrderContext';

export default function DeletedScreen() {
  const { deletedItems } = useOrder();

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Platillos Eliminados</ThemedText>
      <ThemedText style={styles.subtitle}>
        Total de platillos eliminados: {deletedItems.length}
      </ThemedText>
      <FlatList
        data={deletedItems}
        renderItem={({ item }) => (
          <View style={styles.deletedItem}>
            <ThemedText>{item.name} - ${item.price}</ThemedText>
          </View>
        )}
        keyExtractor={(item, index) => `${item.id}-${index}`}
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  deletedItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});
