<script lang="ts">
	import { json } from '@sveltejs/kit';
    import type { PageProps } from './$types';

    let {data} : PageProps = $props();
    let a : number = $state(0);
    let b : number = $derived(a * 2);
    let total : number = $state(0);
    async function getData() {
        const response = await fetch('/api/add', 
            {
                method: 'POST',
                body: JSON.stringify({a, b}),
                headers: {
				'content-type': 'application/json'
			}
            }
        );

        total = await response.json();
    }

</script>

<h1>{data.message}</h1>
by 
<h2 style="color: blue;">{data.name}</h2>

<input type="text" name="a" id="" bind:value={a}>
<label for="a">Value of a: </label>
<h2> b : {b}</h2>

<button onclick={getData} >fetch data</button>

{#if total == 0}
<div></div>
{:else}
    <div>Total is {total}</div>    
{/if}
