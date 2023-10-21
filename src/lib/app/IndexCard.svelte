<script>
  export let title, items, route, type
</script>

<a href="{route}" class="pa-3 br-3 bg-light-2 b-all bw-1 b-light-3 u-0">
  <h3>{title}</h3>
  {#if items}
    <p>
      <span>{items}</span>
      {#if type}
        <span>{type}</span>
      {/if}
    </p>
  {/if}
</a>