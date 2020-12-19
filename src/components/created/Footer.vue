<template>
	<div class="w-full text-center  lg:mt-32 mt-28">
		<div class="social flex flex-row justify-center">
			<button class="focus:outline-none">
				<a
					target="_blank"
					rel="noopener"
					href="https://github.com/olawanlejoel/"
					><i
						class="fab fa-github text-xl text-gray-300 px-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
					></i
				></a>
			</button>
			<button>
				<a
					target="_blank"
					rel="noopener"
					href="https://www.linkedin.com/in/olawanlejoel/"
					><i
						class="fab fa-linkedin-in text-xl text-gray-300 px-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
					></i
				></a>
			</button>
			<button>
				<a
					target="_blank"
					rel="noopener"
					href="https://twitter.com/olawanle_joel"
					><i
						class="fab fa-twitter text-xl text-gray-300 px-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
					></i
				></a>
			</button>
			<button>
				<a
					target="_blank"
					rel="noopener"
					href="https://www.instagram.com/olawanle_joel/"
					><i
						class="fab fa-instagram text-xl text-gray-300 px-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
					></i
				></a>
			</button>
			<button>
				<a
					target="_blank"
					rel="noopener"
					href="https://dev.to/olawanle_joel/"
					><i
						class="fab fa-dev text-xl text-gray-300 px-2 transition duration-500 ease-in-out transform hover:-translate-y-1"
					></i
				></a>
			</button>
		</div>
		<p class="p-8 text-gray-300">
			&copy; {{ year }}, Designed & Built by Joel Olawanle.
		</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			year: new Date().getFullYear(),
		};
	},
};
</script>

<style scoped>
.fab:hover {
	color: #f1d64f;
}
@media (min-width: 900px) {
	.social {
		display: none;
	}
}
</style>
