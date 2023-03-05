export async function setKeyValue (key, value) {
  await env.MainTest.put(key, value);
}
