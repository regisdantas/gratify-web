export const isJsonString = (myString: string) => {
  try {
      JSON.parse(myString);
  } catch (e) {
      return false;
  }
  return true;
}
