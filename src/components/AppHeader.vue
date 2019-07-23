<template>
  <div class="ui secondary pointing menu">
    <a class="active item" href="/">
      {{ $t('imageStorageButton') }}
    </a>
    <div class="right menu">
      <div v-if="isLoggedIn" class="horizontal">
        <div id="language" class="item btn-group">
          <button type="button" class="btn btn-secondary btn-sm btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ $t('language') }}
          </button>
          <div class="dropdown-menu">
            <a class="dropdown-item" @click='$i18n.set("en")'>English</a>
            <a class="dropdown-item" @click='$i18n.set("zh")'>正體中文</a>
          </div>
        </div>
        <!-- router-link enables quick update and do not do full page reload -->
        <router-link to="/" class="item">{{ $t('galleriesButton') }}</router-link>
        <router-link to="/upload" class="item">{{ $t('uploadButton') }}</router-link>
        <a class="item" @click="logout">{{ $t('logoutButton') }}</a>
      </div>
      <a v-else href="#" class="ui item" @click="login">
        {{ $t('loginButton') }}
      </a>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: "AppHeader",
    methods: mapActions(['login', 'logout']),
    computed: mapGetters(['isLoggedIn']),
  }
</script>

<style scoped>
  .horizontal {
    display: flex;
    flex-direction: row;
  }

  #language{
    padding: 0px 0px 4px 4px;
  }

</style>
