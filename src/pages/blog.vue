<template>
  <Layout>
    <div class="flex text-gray-300">
      <SidebarIcons class="invisible lg:visible" />
      <div class="lg:px-36 lg:pt-16 pt-16">
        <div class="flex items-center">
          <h2 class="title font-bold text-4xl">Blog</h2>
          <hr class="w-1/4 ml-3 bg-gray-500 h-0.5 border-none mt-3" />
        </div>
        <p class="text-sm">
          This is where I write down some notes and findings that I feel is
          worth sharing.
        </p>

        <BlogPostList
          :posts="$page.posts.edges"
          class="grid gap-4 lg:grid-cols-2 mt-10 "
        />

        <div class="">
          <Footer />
        </div>
      </div>
      <SidebarMail class="invisible lg:visible" />
    </div>
  </Layout>
</template>

<script>
import BlogPostList from "~/components/created/BlogPostList.vue";
import SidebarIcons from "~/components/created/SidebarIcons.vue";
import SidebarMail from "~/components/created/SidebarMail.vue";

import Footer from "~/components/created/Footer.vue";

export default {
  metaInfo: {
    title: "Blog",
  },
  components: {
    BlogPostList,
    SidebarIcons,
    SidebarMail,
    Footer,
  },
};
</script>

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date (format: "D. MMMM YYYY")
        timeToRead
        description
        cover_image (width: 770, height: 380, blur: 10)
        path
        tags {
          id
          title
          path
        }
      }
    }
  }
}
</page-query>
