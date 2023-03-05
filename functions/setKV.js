export async function setKeyValue (context, key, value) {
  await MainTest.put(key, value);
}
