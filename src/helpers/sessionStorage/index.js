import AsyncStorage from '@react-native-community/async-storage';

export const getStorage = async (key) => {
  return await AsyncStorage.getItem(key);
};

export const setStorage = async (key, value) => {
  await AsyncStorage.setItem(key, value);
  const newstorage = getStorage(key);
  return newstorage;
};

export const removeStorage = async (key) => {
  await AsyncStorage.removeItem(key);
  console.log(`Storage value has been removed for: ${key}`);
};
