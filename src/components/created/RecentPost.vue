<template>
  <div class=" lg:mt-2 mb-10 lg:pt-0 pt-4 w-full">
    <div class=" mt-8 grid gap-4 lg:grid-cols-2 mt-10">
      <article
        class="thanks text-gray-100 p-6 rounded shadow hover:shadow-xl relative border transition duration-300"
        v-for="post in $static.posts.edges"
        :key="post.node.id"
      >
        <g-link :to="post.node.path">
          <h4 class="font-semibold text-xl text-gray-100 ">
            {{ post.node.title }}
          </h4>

          <p class="mt-4 text-gray-400">{{ post.node.description }}</p>

          <p class="title text-xs absolute bottom-0 right-0 m-4">
            {{ post.node.timeToRead }} min read
          </p>
        </g-link>
      </article>
    </div>
    <div class="flex justify-center w-full">
      <g-link to="/blog/">
        <button
          class="button2 mt-8 font-bold outline-none py-2 hover:shadow-xl px-4 rounded transition duration-500 ease-in-out transform hover:-translate-y-2"
        >
          Visit Blog for more...
        </button></g-link
      >
    </div>
  </div>
</template>

<static-query>
query {
  posts: allPost(sortBy: "date", order: DESC, limit:4, filter:{published:{eq:true}}) {
    edges {
      node {
        id
        title
        description
        date (format: "MMMM D, YYYY")
        path
        timeToRead
      }
    }
  }
}
</static-query>

<script>
export default {};
</script>

<style></style>
