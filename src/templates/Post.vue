<template>
  <Layout>
    <div class="article flex h-full text-gray-800 ">
      <SidebarIcons class="invisible lg:visible" />
      <div class="lg:px-36 w-full lg:mx-auto lg:w-3/4">
        <article class="bg-white lg:px-8 px-4 mt-4 py-1 shadow-xl rounded">
          <header class="my-8 text-center">
            <h2 class="font-bold lg:text-3xl text-2xl text-gray-900 mt-10">
              {{ $page.post.title }}
            </h2>
            <p class="mt-4">Published on {{ $page.post.date }}</p>
          </header>
          <div class="flex justify-center w-full">
            <hr class="w-3/4 h-0.5 bg-gray-500 mb-8 center" />
          </div>

          <div class="post__header">
            <g-image
              alt="Cover image"
              v-if="$page.post.cover_image"
              :src="$page.post.cover_image"
            />
          </div>

          <div class="markdown" v-html="$page.post.content"></div>

          <div class="post__footer">
            <PostTags :post="$page.post" />
          </div>
          <div class="thanks w-full py-4 mt-4 text-center rounded shadow">
            <p class="font-semibold text-white text-xl">Thanks for Reading!</p>
          </div>
          <RecentPost />
        </article>
        <div class="">
          <Footer />
        </div>
      </div>
      <SidebarMail class="invisible lg:visible" />
    </div>
  </Layout>
</template>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "MMMM, DD YYYY")
    timeToRead
    tags {
      id
      title
      path
    }
    description
    content
    cover_image (width: 860, blur: 10)
  }
}
</page-query>

<script>
import PostTags from "~/components/PostTags.vue";

import SidebarIcons from "~/components/created/SidebarIcons.vue";
import SidebarMail from "~/components/created/SidebarMail.vue";

import RecentPost from "~/components/created/RecentPost.vue";

import Footer from "~/components/created/Footer.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
  components: {
    PostTags,
    SidebarIcons,
    SidebarMail,
    RecentPost,
    Footer,
  },
};
</script>

<style scoped>
.thanks {
  color: #1c1026;
}
</style>
