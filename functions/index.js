export async function onRequestPut(context){
	const task = context.env.MainTest.put("testkey", "testvalue");
	return new Response(task);
}
