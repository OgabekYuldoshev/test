<template>
  <div id="app">
    <div>
      <b-navbar toggleable="lg" type="dark" class="d-flex justify-content-between aligin-items-center px-5" variant="info">
        <b-navbar-brand href="/">NavBar</b-navbar-brand>
          <b-navbar-nav class="ml-auto d-flex aligin-items-center">
            <b-link href="/employers">Employers</b-link>
          </b-navbar-nav>
      </b-navbar>
    </div>
    <div class="px-5 py-2">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    mounted(){
      this.$store.commit("getSectionAndPosition")
      this.$store.commit('getInfo')
      this.$store.commit("getEmployers")

    }
  }
</script>