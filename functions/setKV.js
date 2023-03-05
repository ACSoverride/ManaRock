export async function setKeyValue (key, value) {
  await MainTest.put(key, value);
}
