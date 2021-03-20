<template>
  <div class="layout">
    <Header />
    <div class="container pt-20"><slot /></div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from "~/components/created/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style></style>
