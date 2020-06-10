import AsyncStorage from "@react-native-community/async-storage"

/**
 * Loads a string from storage.
 */
export const loadString = async () =>{
  try {
    return await AsyncStorage.getItem(key)
  } catch {
    return null
  }
}

/**
 * Saves a string to storage.
 */
export const saveString = async () => {
  try {
    await AsyncStorage.setItem(key, value)
    return true
  } catch {
    return false
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 */
export const loadParse = async () => {
  try {
    const loadParse = await AsyncStorage.getItem(key)
    return JSON.parse(loadParse)
  } catch {
    return null
  }
}

/**
 * Saves an object to storage.
 */
export const save = async () => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

/**
 * Removes something from storage.
 */
export const remove = async () => {
  try {
    await AsyncStorage.removeItem(key)
  } catch {}
}

/**
 * clear the storage.
 */
export const clear = async () => {
  try {
    await AsyncStorage.clear()
  } catch {}
}
