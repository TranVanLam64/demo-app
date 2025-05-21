import React from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CardSection, Space, StatusContainer} from '../../components';
import {
  pendingEventsData,
  pendingSuppliersData,
  reportedPostsData,
  statusData,
} from '../../utils/constants';
import {SettingIcon} from '../../assets/images/icons';
import {navigate} from '../../navigation/navigationService';
import {navigationName} from '../../navigation/navigationName';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{paddingBottom: 60}}>
        <Space height={12} />
        <View style={styles.header}>
          <Text style={styles.title}>Admin Dashboard</Text>
          <TouchableOpacity
            style={styles.buttonSetting}
            onPress={() => navigate(navigationName.settingScreen)}>
            <SettingIcon />
          </TouchableOpacity>
        </View>

        <Space height={16} />
        <StatusContainer data={statusData} />
        <Space height={24} />
        <CardSection title="Pending Suppliers" data={pendingSuppliersData} />
        <Space height={24} />
        <CardSection title="Pending Events" data={pendingEventsData} />
        <Space height={24} />
        <CardSection title="Reported Posts" data={reportedPostsData} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 56 : 0,
  },
  container: {
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonSetting: {
    alignSelf: 'flex-end',
    marginRight: 24,
  },
});

export default Dashboard;
