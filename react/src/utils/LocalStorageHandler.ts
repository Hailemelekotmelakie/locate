const passcode = 'passcode'
const initial = 'fIy#71.00.02.'


export const putToLocalStorage = ( value:string) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(passcode, serializedValue);
  } catch (error) {
    console.error('Error saving to localStorage', error);
  }
}

export const getFromLocalStorage = () => {
  try {
    const serializedValue = localStorage.getItem(passcode);
    return serializedValue ? JSON.parse(serializedValue) : initial;
  } catch (error) {
    console.error('Error retrieving from localStorage', error);
    return initial;
  }
}