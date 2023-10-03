// index.html
<script>
  function redirectToBuyPage(plan) {
    window.location.href = 'buypage.html?plan=' + encodeURIComponent(plan);
  }
</script>
