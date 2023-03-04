<script>
	import { AccordionItem, Alert } from 'flowbite-svelte';
	import { Blockquote } from 'flowbite-svelte'
	import '/src/styles.css'
	import {  Heading, P, A, Mark, Secondary, Hr, Accordion, ActivityItem} from 'flowbite-svelte'
	async function setKV(){
		await MainTest.put("TestKey", "TestValue")
	}
</script>
<div class="thebg"></div>
<div class="p-8">
	<div class="centertext">
		<h1>Welcome to Mana Rock!</h1>
	</div>
	<P class="p1" align="center">ManaRock is a svelte based app to help you manage your Magic the Gathering collection.
		Designed to be both beautiful and functional, ManaRock makes managing your cards a breeze.
	</P>
	<div class="a1">
		<Hr width="w-48" height="h-1"></Hr>
		<Accordion>
			<AccordionItem>
				<span slot="header">Speed</span>
				<P class="p2" align="center">
					Designed with Svelte ManaRock is fast and optimized, giving
					you the best experience possible
				</P>
			</AccordionItem>
			<AccordionItem>
				<span slot="header">API</span>
				<P class="p2" align="center">
					ManaRock uses the Scryfall API allowing access to almost any card you can
					think of! No card is left behind 
				</P>
			</AccordionItem>
			<AccordionItem>
				<span slot="header">For players by a player</span>
				<P class="p2" align="center">
					ManaRock is built for Magic players by a Magic player. The site will remain completely free for all users.
					The code is 100% open source and licenced under the GPLv3
				</P>
			</AccordionItem>
		</Accordion>
	</div>
</div>
<style>
	:global(body) {
		background: url('$lib/images/newBG.jpg') no-repeat center center fixed;
		background: cover;
		height: 100%;
		overflow: hidden;
	}
</style>
