<script lang="ts">
  import Input from '../input.svelte';
  import Results from './results.svelte';
  let searchString = "";
</script>

<Input bind:value={searchString} placeholderText="Search for artists..."/>
<hr/>
<Results {searchString}></Results>

<style>
  hr {
    border: none;
    background-color: var(--color-primary);
    height: 2px;
    border-radius: var(--border-radius-s);
    opacity: 0.5;
    margin-bottom: 20px;
  }
</style>