<script>
  let name = 'there';
  let status = '';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(function (reg) {
        status = 'Service worker registered.';
      })
      .catch(function (err) {
        status = 'Service worker not registered. This happened: ' + err.message;
      });
  }

  let queryParams = new URLSearchParams(location.search);
</script>

<h1>Hello {name}!</h1>
<div>Query params: ${queryParams}</div>
<div>Status: {status}</div>
