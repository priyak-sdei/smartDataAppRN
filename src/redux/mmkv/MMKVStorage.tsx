import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

/*
//Encrypted storage
export const storage = new MMKV({
  id: `user-${userId}-storage`, //required: if when either path/encryptionKey exist
  path: `${USER_DIRECTORY}/storage`, //optional: changing storage path
  encryptionKey: 'hunter2' //optional: storing all values encrypted
})
*/

//TO BE USED IN REDUX PERSIST
export const reduxPersistStorage = {
    setItem: (key, value) => {
        storage.set(key, value);
        return Promise.resolve(true);
    },
    getItem: key => {
        const value = storage.getString(key);
        return Promise.resolve(value);
    },
    removeItem: key => {
        storage.delete(key);
        return Promise.resolve();
    },
};
