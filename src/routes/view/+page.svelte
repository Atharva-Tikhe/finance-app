<script lang="ts">
  import type { PageProps } from './$types';
  import Table from '$lib/Table.svelte';
  let {data} : PageProps = $props();
</script>
  
<Table data = {data}/>
  