import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
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
      <TouchableOpacity
        style={styles.buttonSetting}
        onPress={() => navigate(navigationName.settingScreen)}>
        <SettingIcon />
      </TouchableOpacity>
      <Space height={12} />
      <ScrollView style={styles.container}>
        <Space height={12} />
        <Text style={styles.title}>Admin Dashboard</Text>
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
  },
  container: {
    paddingHorizontal: 24,
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
