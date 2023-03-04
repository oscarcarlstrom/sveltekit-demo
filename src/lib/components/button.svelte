<script lang="ts">
  export let onClick = () => { console.log("WHAAY") };
</script>

<button on:click={onClick}>
  <slot/>
</button>

<style>
  button {
    font-size: 1.2rem;
    padding: var(--spacing-m);
    border-radius: var(--border-radius-m);
    border: var(--border-style) transparent;
    background-color: var(--color-primary);
    color: var(--color-white);
    cursor: pointer;
  }

  button:hover {
    transition: all 500ms;
    background-color: var(--color-primary-dark);
  }

  button:focus {
    border-color: var(--color-white);
    outline: solid var(--color-primary) 2px;
  }
</style>