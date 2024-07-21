import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';

const ScanScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('./assets/background.png')} 
      style={styles.container}
    >
      <StatusBar barStyle="dark-content" />

      <Image
        source={require('./assets/Group 5.png')} 
        style={styles.firstImage}
      />

      <Image
        source={require('./assets/Rectangle 26.png')} 
        style={styles.secondImage}
      />
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          style={styles.backIcon} resizeMode='contain'
          source={require('./assets/Arrow 1.png')}
        />
      </TouchableOpacity>
     
      <View style={styles.bottomBar}>
        <Image
          style={styles.thumbnail} resizeMode='contain'
          source={require('./assets/background.png')}
        />
        <Text style={styles.juiceTitle}>Lauren's {'\n'}Orange Juice</Text>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  firstImage: {
    position: 'absolute',
    top: 100, // Đặt tại phần trên cùng của ảnh nền
    left: 35, // Đặt tại phần bên trái của ảnh nền
    width: '80%', // Chiếm toàn bộ chiều rộng của ảnh nền
    height: '70%', // Chiếm nửa chiều cao của ảnh nền (hoặc tùy chỉnh nếu cần)
    resizeMode: 'stretch', // Đảm bảo hình ảnh khít với ảnh nền
  },
  secondImage: {
    position: 'absolute',
    bottom: 20, // Đặt tại phần dưới cùng của ảnh nền
    left: 35, // Đặt tại phần bên trái của ảnh nền
    width: '80%', // Chiếm toàn bộ chiều rộng của ảnh nền
    height: '50%', // Chiếm nửa chiều cao của ảnh nền
    resizeMode: 'stretch', // Đảm bảo hình ảnh khít với ảnh nền
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#5A6CF3',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 5,
    left: 35,
    right: 35,
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  thumbnail: {
    width: 50,
    height: 60,
    borderRadius: 5,
    marginRight: 5,
  },
  juiceTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  addButtonContainer: {
    alignItems: 'center',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ScanScreen;
