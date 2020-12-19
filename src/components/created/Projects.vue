<template>
	<div class="lg:px-36 lg:mt-2  lg:pt-0 pt-20">
		<div class="flex items-center">
			<h2 class="title font-semibold text-2xl">Projects</h2>
			<hr class="w-1/4 ml-3 bg-gray-500 h-0.5 border-none mt-2" />
		</div>
		<p class="text-sm">
			Some Amazing Projects. Check my Github
			<a
				target="_blank"
				rel="noopener"
				href="https://github.com/olawanlejoel?tab=repositories"
				class="title"
				>Repositories</a
			>
			for more.
		</p>
		<div class=" mt-8 ">
			<ProjectsList :projects="projects" />
		</div>
	</div>
</template>

<script>
import ProjectsList from "~/components/created/ProjectsList.vue";

export default {
	components: {
		ProjectsList,
	},
	data() {
		return {
			projects: [
				{
					github_link:
						"https://github.com/olawanlejoel/Todo-List-App",
					live_link: "https://joel-todolist.netlify.app/",
					title: "Todo List App",
					description:
						"A simple Todo List App built with JavaScript. All datas are stored in localstorage. It helps users check list out their plans and tick as they do them.",
					tag1: "JavaScript",
					tag2: "HTML",
					tag3: "CSS",
				},
				{
					github_link: "https://github.com/olawanlejoel/Book-Library",
					live_link: "https://books-library.netlify.app/",
					title: "Books Library App",
					description:
						"A simple Book Library App built with JavaScript. It helps readers have a good list of books they are eiter currently reading or have finished reading.",
					tag1: "JavaScript",
					tag2: "HTML",
					tag3: "CSS",
				},
				{
					github_link:
						"https://github.com/olawanlejoel/random-quote-generator",
					live_link:
						"https://olawanlejoel.github.io/random-quote-generator/",
					title: "Quotes Generator",
					description:
						"Helps you generates quotes from about 1600 quotes written by  different authors . Quotes are automatically copied to your clipboards.",
					tag1: "JavaScript",
					tag2: "HTML",
					tag3: "Bootstrap",
				},
				{
					github_link:
						"https://github.com/olawanlejoel/Password-Generator",
					live_link:
						"https://olawanlejoel.github.io/Password-Generator/",
					title: "Password Generator",
					description:
						"Helps you generates random passwords, you can select what you want your password to entail and also you can copy generated password to clipboard.",
					tag1: "JavaScript",
					tag2: "HTML",
					tag3: "CSS",
				},
				{
					github_link:
						"https://github.com/olawanlejoel/TwitterUI-clone",
					live_link: "https://twitterui-clone.netlify.app/",
					title: "Twitter UI Clone",
					description:
						"Simple Twitter UI clone built with TailwindCSS and Vue Js. This covers only the home page of Twitter UI. This is cool to get started with TailwindCSS as it helps understand basic concepts.",
					tag1: "TailwindCSS",
					tag2: "Vue Js",
				},
				{
					github_link:
						"https://github.com/olawanlejoel/TwitterUI-clone",
					title: "Awesome JavaScript",
					description:
						"This is a curated list of Awesome JavaScript Resources  for beginners. This cover almost every area of JavaScript with enough materials to learn both articles and videos.",
					tag1: "Markdown",
				},
			],
		};
	},
};
</script>

<style></style>
