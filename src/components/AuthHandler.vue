<template>
  <div>
    Please wait...
  </div>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: "AuthHandler",
    methods: mapActions(['finalizeLogin']),
    created() {
      //do something after creating vue instance
      this.finalizeLogin(window.location.hash);
    }
  };


</script>
