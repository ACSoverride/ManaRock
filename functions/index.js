export async function onRequestPut(context){
	const task = await context.env.MainTest.put("testkey", "testvalue");
	return new Response(task);
}
