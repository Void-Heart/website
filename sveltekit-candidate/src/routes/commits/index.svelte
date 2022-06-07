<script>
    export let github_data;
</script>
{#each github_data['commit_data'] as data}
    <h3>{data['message']} - {data['author']['name']}</h3>
{/each}
