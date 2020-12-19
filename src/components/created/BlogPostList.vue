<template>
	<div class="post-list ">
		<article
			class="post p-6 rounded shadow hover:shadow-xl relative border transition duration-300"
			v-for="post in posts"
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
</template>

<script>
export default {
	props: ["posts"],
};
</script>

<style>
.post {
	background: url("https://www.transparenttextures.com/patterns/stardust.png")
		repeat fixed #150d1c;
	border: 1px solid #150d1c;
}
.post:hover {
	border: 1px solid #f1d64f;
}
</style>
