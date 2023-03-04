<script lang="ts">
  export let value = "";
  export let placeholderText = "";
</script>

<input bind:value placeholder={placeholderText} />

<style>
  input {
    font-size: 1.2rem;
    padding: var(--spacing-m);
    margin: 0 0 var(--spacing-m);
    border-radius: var(--border-radius-m);
    border: var(--border-style) var(--color-primary-light);
    color: var(--color-primary);
  }

  input:focus {
    border-color: var(--color-primary);
    outline: none;
  }
</style>