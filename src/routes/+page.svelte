<script>
	import { AccordionItem, Alert } from 'flowbite-svelte';
	import { Blockquote } from 'flowbite-svelte'
	import {  Heading, P, A, Mark, Secondary, Hr, Accordion, ActivityItem, Label, Input, Button} from 'flowbite-svelte'
	import {onMount} from 'svelte';
	let cardName = "";
	let cardImage = "https://api.scryfall.com/cards/named?format=image&version=small&fuzzy=" + cardName;
	let userID = ""
	let postText = ""
	async function doPost () {
		const res = await fetch('https://kvupdate.mattinhvt.workers.dev/', {
			method: 'POST',
			body: postText
			})
	}
	function handleClick(){
		let cName = cardName.replace(/\s/g, '');
		postText = userID + cName + " true";
		doPost();
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
	<div class="MainContent">
		<div class="SearchInput">
			<Label for='default-input' class='block mb-2'>User ID</Label>
  			<Input id='default-input' placeholder="Default input" bind:value={userID} />
			<Label for='large-input' class='block mb-2'>Search</Label>
  			<Input id="large-input" size="lg" placeholder="Large input" bind:value={cardName}/>
			<img src="https://api.scryfall.com/cards/named?format=image&version=small&fuzzy={cardName}" alt="magic card">
			<Button on:click={handleClick}>Add</Button>
		</div>	
	</div>	
</div>

<style>
	.SearchInput {
		position: absolute;
		top: 55vh;
		left: 60vh;
		
	}

	:global(body) {
		background: url('$lib/images/newBG.jpg') no-repeat center center fixed;
		background: cover;
		height: 100%;
		overflow: hidden;
	}
	.centertext {
		color: black;
		font-weight: bold;
		border: 3px solid black	;
		position: absolute;
		top: 10vh;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 80%;
		padding: 20px;
		text-align: center;
		font-size: 40px;
	}

	.p1 {
		color: black;
		font-weight: bold;
		position: absolute;
		top: 25vh;
		font-size: 40px;
	}
	.p2 {
		color: black;
		font-weight: bold;
		font-size: 20px;
	}

	.a1 {
		position: absolute;
		top: 20vh;
		left: 15vw;
		width: 70%;
	}
</style>
