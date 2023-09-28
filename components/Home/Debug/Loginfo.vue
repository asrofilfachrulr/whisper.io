<template>
  <span class="text-slate-100 italic text-sm"
    >logged as {{ $auth.user.full_name }} ({{ $auth.user.id }}) <br />
    with email: {{ $auth.user.email }}</span
  >
</template>
<script>
export default {};
</script>