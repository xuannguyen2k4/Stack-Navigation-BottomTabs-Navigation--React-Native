import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const avatarUrl = require('./assets/Ellipse.png');
  const scanIconUrl = require('./assets/Group 157.png');
  const counterfeitIconUrl = require('./assets/Frame.png');
  const successIconUrl = require('./assets/Group 158.png');
  const directoryIconUrl = require('./assets/Group 151.png');
  const home = require('./assets/Group 152.png');
  const bell = require('./assets/Group 153.png');
  const scan = require('./assets/Vector.png');
  const clock = require('./assets/Group 154.png');
  const sell = require('./assets/Group 161.png');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Christie Doe</Text>
        </View>
        <Image 
          style={styles.avatar}
          source={avatarUrl}
        />
      </View>
      
      <Text style={styles.insightsTitle}>Your Insights</Text>
      
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={[styles.insightBox, styles.scanBox]} onPress={() => navigation.navigate('Scan')}>
          <View style={styles.iconBackground}>
            <Image style={styles.icon} resizeMode="contain" source={scanIconUrl} />
          </View>
          <Text style={styles.insightBoxTitle}>Scan new</Text>
          <Text style={styles.insightBoxSubtitle}>Scanned 483</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.insightBox, styles.counterfeitBox]} onPress={() => navigation.navigate('Counterfeits')}>
          <View style={styles.iconBackground} backgroundColor="#F6E3DB">
            <Image style={styles.icon} resizeMode="contain" source={counterfeitIconUrl} />
          </View>
          <Text style={styles.insightBoxTitle}>Counterfeits</Text>
          <Text style={styles.insightBoxSubtitle}>Counterfeited 32</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.insightBox, styles.successBox]} onPress={() => navigation.navigate('Success')}>
          <View style={styles.iconBackground} backgroundColor="#D8F3F1">
            <Image style={styles.icon} source={successIconUrl} />
          </View>
          <Text style={styles.insightBoxTitle}>Success</Text>
          <Text style={styles.insightBoxSubtitle}>Checkouts 8</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.insightBox, styles.directoryBox]} onPress={() => navigation.navigate('Directory')}>
          <View style={styles.iconBackground} backgroundColor="#D0EDFB">
            <Image style={styles.icon} source={directoryIconUrl} />
          </View>
          <Text style={styles.insightBoxTitle}>Directory</Text>
          <Text style={styles.insightBoxSubtitle}>History 26</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.exploreMore}>
        <Text style={styles.exploreMoreText}>Explore More</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
          <Text style={styles.arrow}>→</Text>
        </TouchableOpacity>
      </View>

      {/* New horizontal icons section */}
      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconcommon} onPress={() => navigation.navigate('Home')}>
          <Image style={styles.iconSmall} backgroundColor='#D0EDFB' borderRadius={10} resizeMode='contain' source={home} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconcommon} onPress={() => navigation.navigate('Notifications')}>
          <Image style={styles.iconSmall} resizeMode='contain' source={bell} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconcommon} onPress={() => navigation.navigate('Scan')}>
          <Image style={styles.iconSmall} resizeMode='contain' source={scan} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconcommon} onPress={() => navigation.navigate('Clock')}>
          <Image style={styles.iconSmall} resizeMode='contain' source={clock} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconcommon} onPress={() => navigation.navigate('Sell')}>
          <Image style={styles.iconSmall} resizeMode='contain' source={sell} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  name: {
    fontSize: 16,
    color: '#666',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  insightsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  insightBox: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  iconBackground: {
    width: 60,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  insightBoxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  insightBoxSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  exploreMore: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  exploreMoreText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 45,
  },
  // Background color for each icon container
  scanBox: {
    backgroundColor: '#F8F8FB', 
  },
  counterfeitBox: {
    backgroundColor: '#F8F8FB', 
  },
  successBox: {
    backgroundColor: '#F8F8FB', 
  },
  directoryBox: {
    backgroundColor: '#F8F8FB', 
  },
  iconcommon: {
    width: 30, 
    height: 30, 
    marginHorizontal: 8, 
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 70,
    marginBottom: 20,
  },
  iconSmall: {
    width: '100%',
    height: '100%',
  },
});

export default HomeScreen;
