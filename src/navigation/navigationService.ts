import {PartialState} from '@react-navigation/native';
import {NavigationState} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef<any>();

export function navigate(name: string, params?: any) {
  return navigationRef.current?.navigate(name, params || {});
}

export function goBack() {
  return navigationRef.current?.goBack();
}

export function reset(state: PartialState<NavigationState> | NavigationState) {
  return navigationRef.current?.reset(state);
}
