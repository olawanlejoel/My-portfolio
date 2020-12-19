<template>
	<div class="grid  gap-4 lg:grid-cols-3">
		<div v-for="project in projects" :key="project.id">
			<div
				class="project  p-6 rounded shadow hover:shadow-xl relative text-gray-300 transform hover:-translate-y-2 transition ease-in-out duration-500"
			>
				<div class="">
					<div class="flex justify-between">
						<i class="title far fa-folder-open text-4xl"></i>
						<div class="">
							<a
								target="_blank"
								rel="noopener"
								:href="project.github_link"
								><i
									class="fab fa-github icons text-base px-1 transition duration-500"
									aria-hidden="true"
								></i
							></a>
							<a
								target="_blank"
								rel="noopener"
								:href="project.live_link"
								><i
									class="fas fa-external-link-alt icons text-base px-1 transition duration-500"
									aria-hidden="true"
								></i
							></a>
						</div>
					</div>
					<div class="py-2">
						<h2 class="py-2 text-xl text-gray-200 font-semibold">
							{{ project.title }}
						</h2>
						<p>{{ project.description }}</p>
					</div>
					<div class="tags">
						<ul class="flex text-xs font-semibold mt-6">
							<li class="px-1">{{ project.tag1 }}</li>
							<li class="px-1">{{ project.tag2 }}</li>
							<li class="px-1">{{ project.tag3 }}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		projects: Array,
	},
};
</script>

<style scoped>
.project {
	background: url("https://www.transparenttextures.com/patterns/stardust.png")
		repeat fixed #150d1c;
}
.icons:hover {
	color: #f1d64f;
}
li {
	color: #f1d64f;
}
</style>
