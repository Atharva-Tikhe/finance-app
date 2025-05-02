<script>

</script>

<div class="container">
    <form action="/api/login" method="post">
    
        <label for="username">Username:</label>
        <input type="text" name="username" id="username">
    
        <label for="password">Password:</label>
        <input type="password" name="password" id="password">

        <button type="submit">Login</button>
    </form>
</div>

<a href="/view"> Go to View</a>

<style>
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>