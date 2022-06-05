<script>
    export let github_data;
    export let page;
    let page_back = parseInt(page+"-1").toString();
    let page_next = parseInt(page+"+1").toString();
    console.log(page_back);
    console.log(page_next);
    console.log(page)
</script>
{#each github_data as data}
    <h1>{data['commit']['message']}</h1>
{/each}
<a href="/commits?page={page_next}">Next</a>
<a href="/commits?page={page_back}">Back</a>