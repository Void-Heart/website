<script>
    import "../styles.css"
</script>
<svelte:head>
    <meta charset="utf-8" />
	<link rel="icon" href="/icon.png" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>
<nav class="nav">
    <div class="nav-item nav-title"><img src="/icon.png" alt="Icon" height=32/><a href="/" class="nav-text nav-title-text">Void Heart</a></div>
    <div class="nav-item"><a href="/commits" class="nav-text">Commit History</a></div>
</nav>

<slot />
