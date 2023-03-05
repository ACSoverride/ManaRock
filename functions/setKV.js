export async function setKeyValue (context, key, value) {
  await context.env.MainTest.put(key, value);
}
