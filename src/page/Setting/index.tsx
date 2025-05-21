import React from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Avatar, Input, Space, TagContainer, TextArea} from '../../components';
import {tagData} from '../../utils/constants';
import {BackIcon} from '../../assets/images/icons';
import {Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import {goBack} from '../../navigation/navigationService';

const Setting = () => {
  const onSubmit = async (
    values: SettingForm,
    {setSubmitting, resetForm, setErrors}: FormikHelpers<SettingForm>,
  ) => {
    // To do when submit
  };

  return (
    <Formik
      initialValues={{
        fullName: '',
        email: '',
        bio: '',
        seo: '',
      }}
      validationSchema={Yup.object().shape({
        fullName: Yup.string().required('Field must required'),
        email: Yup.string().required('Field must required'),
      })}
      onSubmit={onSubmit}>
      {({handleSubmit, values, handleChange}) => (
        <SafeAreaView style={styles.safeView}>
          <TouchableOpacity style={styles.buttonBack} onPress={() => goBack()}>
            <BackIcon />
          </TouchableOpacity>
          <Space height={24} />
          <Avatar size={90} source={undefined} />
          <View style={styles.container}>
            <Space height={24} />
            <Input
              title="Full Name"
              value={values.fullName}
              onChangeText={handleChange('fullName')}
            />
            <Space height={16} />
            <Input
              title="Email"
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <Space height={16} />
            <TextArea
              title="Bio"
              value={values.bio}
              onChangeText={handleChange('bio')}
            />
            <Space height={16} />
            <TagContainer data={tagData} title="SEO Interests" />
          </View>
        </SafeAreaView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 24,
    width: '100%',
  },
  buttonBack: {
    alignSelf: 'flex-start',
    marginLeft: 24,
  },
});

export default Setting;
