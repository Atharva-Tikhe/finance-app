<script lang="ts">
    import { gsap } from "gsap";
    import {TabulatorFull as Tabulator} from 'tabulator-tables';
    import { onMount } from 'svelte';
    const {data} : any = $props();

    let tableComponent: HTMLDivElement;
    console.log(data.transactions)
    onMount(() => {
        new Tabulator(tableComponent, {
            data : data.transactions,
            autoColumns : true,
            layout: "fitDataTable",
            columnCalcs: 'table'
        })

        gsap.from(".container", {opacity: 0})
        gsap.to(".container", {opacity: 1, duration: 1.2})
    }) 

    // var mytable : HTMLDivElement; 

    // var table = new Tabulator(
    //     mytable, {
    //     data: data,
    //     autoColumns : true,
    // })

</script>  

<div class="container">
  <div class="table">
  <h2 class="text-xl font-semibold mb-4">Transactions</h2>
  <div class="mainTable" bind:this={tableComponent}></div>
</div>
</div>

<style>
  .container {
    margin: 10px 20%;
    display: flex;
    justify-content: center;
  }
</style>




  <!-- {#if data.transactions.length > 0}
    <table class="table-auto border-collapse border border-gray-400">
      <thead>
        <tr>
          <th class="border border-gray-300 px-4 py-2">ID</th>
          <th class="border border-gray-300 px-4 py-2">Amount</th>
          <th class="border border-gray-300 px-4 py-2">Bank</th>
          <th class="border border-gray-300 px-4 py-2">Recipient</th>
          <th class="border border-gray-300 px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {#each data.transactions as tx}
          <tr>
            <td class="border border-gray-300 px-4 py-2">{tx.id}</td>
            <td class="border border-gray-300 px-4 py-2">{tx.amount}</td>
            <td class="border border-gray-300 px-4 py-2">{tx.sender}</td>
            <td class="border border-gray-300 px-4 py-2">{tx.receiver}</td>
            <td class="border border-gray-300 px-4 py-2">{tx.transac_date}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>No transactions found.</p>
  {/if} -->


<svelte:head>

  <link href="https://unpkg.com/tabulator-tables@4.9.1/dist/css/tabulator_site.min.css" rel="stylesheet">
  <script type="text/javascript" src="https://unpkg.com/tabulator-tables@6.3.1/dist/js/tabulator.min.js"></script>
</svelte:head>