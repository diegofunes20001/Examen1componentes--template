import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import { Alert, FlatList, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useOrder } from '../context/OrderContext';

export default function OrderScreen() {
  const { cartItems, removeFromCart, clearCart } = useOrder();
  const [customerName, setCustomerName] = useState('');

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleConfirm = () => {
    if (!customerName.trim()) {
      Alert.alert('Error', 'Por favor ingrese su nombre');
      return;
    }
    Alert.alert(
      'Confirmación',
      `Compra realizada correctamente\nCliente: ${customerName}\nTotal: $${total}`,
      [{ text: 'OK', onPress: () => {
        clearCart();
        setCustomerName('');
      }}]
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title}>Su Pedido</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Ingrese su nombre"
        value={customerName}
        onChangeText={setCustomerName}
      />
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <ThemedText>{item.name} - ${item.price}</ThemedText>
            <TouchableOpacity 
              style={styles.removeButton}
              onPress={() => removeFromCart(item.id)}>
              <ThemedText style={styles.buttonText}>Eliminar</ThemedText>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <View style={styles.totalContainer}>
        <ThemedText style={styles.total}>Total: ${total}</ThemedText>
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={handleConfirm}>
          <ThemedText style={styles.buttonText}>Confirmar Compra</ThemedText>
        </TouchableOpacity>
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  removeButton: {
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 5,
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  totalContainer: {
    marginTop: 20,
    gap: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
