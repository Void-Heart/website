<script> 
    export let github_data;
</script>

<div class="card-group">
    {#each github_data['commit_data'] as data}
        <div class="card">
            <h3 class="card-text">{data['message']}</h3>
            <h3 class="card-text">- {data['author']['name']}</h3>
        </div>
    {/each}
</div>
