import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {

  const handlePayment = () => {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_SlJ0TiXgj3m9VK', // Your Razorpay Key ID
      amount: '5000', // Amount in paise
      name: 'Acme Corp',
      prefill: {
        email: 'user@example.com',
        contact: '9191919191',
        name: 'John Doe'
      },
      theme: { color: '#F37254' }
    }

    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Pay with Razorpay"
        onPress={handlePayment}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
