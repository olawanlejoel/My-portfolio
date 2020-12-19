<template>
	<div class="lg:px-36 lg:mt-2 mt-96 lg:pt-0 pt-20">
		<div class="flex items-center">
			<h2 class="title font-semibold text-2xl">Latest Articles</h2>
			<hr class="w-1/4 ml-3 bg-gray-500 h-0.5 border-none mt-2" />
		</div>
		<p class="text-sm">
			You can check out my
			<g-link class="title" to="/blog/">Blog</g-link> for more artices.
		</p>
		<div class=" mt-8 grid gap-4 lg:grid-cols-2 mt-10">
			<article
				class="post p-6 rounded shadow hover:shadow-xl relative border transition duration-300"
				v-for="post in $static.posts.edges"
				:key="post.node.id"
			>
				<g-link :to="post.node.path">
					<h4 class="font-semibold text-xl text-gray-200">
						{{ post.node.title }}
					</h4>

					<p class="mt-4">{{ post.node.description }}</p>

					<p class="title text-xs absolute bottom-0 right-0 m-4">
						{{ post.node.timeToRead }} min read
					</p>
				</g-link>
			</article>
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
