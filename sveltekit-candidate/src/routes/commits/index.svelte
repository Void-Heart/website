<script> 
    export let github_data;
    function get_name(name) {
        if (name == "LukeG007") {
            return "natma_relniame";
        } else if (name == "LoganToast") {
            return "Cosmos";
        } else if (name == "BruhMan669") {
            return "RetardedKid";
        } else if (name == "Eros-Hai") {
            return "Eros_Hai"
        }
        return name;
    }
</script>

<title>Void Heart - Commit History</title>

<div class="card-group">
    {#each github_data['commit_data'] as data}
        <div class="card">
            <h3 class="card-text">{data['message']}</h3>
            <h3 class="card-text">- {get_name(data['author']['name'])}</h3>
        </div>
    {/each}
</div>
