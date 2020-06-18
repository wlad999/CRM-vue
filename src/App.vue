<template>
    <div id="app">
        <component :is="layout">
            <router-view />
        </component>
      </div>
</template>

<script>

import EmptyLayout from '@/layouts/EmptyLayout'
import MainLayout from '@/layouts/MainLayout'
import Detail from '@/views/Detail.vue'
import Register from '@/views/Register.vue'
import History from '@/views/History.vue'
import Planning from '@/views/Planning.vue'
import Profile from '@/views/Profile.vue'
import Record from '@/views/Record.vue'

export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout,
    MainLayout,
    Detail,
    Register,
    History,
    Planning,
    Profile,
    Record
  }
}
</script>

<style lang="scss">
@import '~materialize-css/dist/css/materialize.min.css';
@import './assets/index.css';
</style>
