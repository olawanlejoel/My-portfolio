<template>
	<div>
		<div class="lg:px-36 lg:pt-2 pt-4 ">
			<div class="flex items-center">
				<h2 class="title font-semibold text-2xl">About Me</h2>
				<hr class="w-1/4 ml-3 bg-gray-500 h-0.5 border-none mt-2" />
			</div>
			<div class="flex mt-8 justify-between flex-col-reverse lg:flex-row">
				<div class="content text-gray-300 w-full lg:w-1/2">
					<p class="">
						Hello! I'm Joel, a Frontend developer based in Nigeria.
						I enjoy creating things that live on the internet,
						whether they be websites, applications, or anything in
						between. I am currently studying Computer Science in
						<a href="https://www.osustech.edu.ng/" class="title"
							>OAUSTECH</a
						>.
					</p>

					<p>
						I’m passionate about making the web accessible to
						everyone and I enjoy solving complex problems using web
						technologies. I am always eager to learn new things
						every day and keep up with the new technologies. I work
						on a wide variety of interesting and meaningful projects
						on a daily basis.
					</p>
					<p>
						My Goal is to become one of the best Frontend Developer
						in the World and Work with Big Companies.
					</p>
					<p class="mt-4">
						Here are a few technologies I've been working with
						recently:
					</p>

					<div class="grid gap-4 grid-cols-2 mt-4">
						<div
							class="flex items-center"
							v-for="stack in stacks"
							:key="stack.id"
						>
							<i class="fas fa-hand-point-right"></i>
							<p class="pl-4 text-sm">{{ stack.language }}</p>
						</div>
					</div>
				</div>
				<div class="picture w-full lg:w-1/2 lg:-mt-20 mt-6">
					<g-image src="~/assets/images/joelo.png" width="500" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			stacks: [
				{ language: "JavaScript" },
				{ language: "HTML & (S)CSS" },
				{ language: "Vue" },
				{ language: "WordPress" },
			],
		};
	},
};
</script>

<style scoped>
.fas {
	color: #f1d64f;
}
</style>
