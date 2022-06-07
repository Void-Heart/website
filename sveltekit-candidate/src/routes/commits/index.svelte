<script>
    export let github_data;
</script>
{#each github_data['commit_data'] as data}
    <h3>{data['message']}</h3>
{/each}
