<template>
	<header>
		<nav
			class="header flex justify-between pt-5 items-center w-full lg:px-20 px-5 fixed shadow z-10"
		>
			<strong>
				<g-image src="~/assets/images/logo.png" width="50" />
				<!-- <g-link to="/">{{ $static.metadata.siteName }}</g-link> -->
			</strong>

			<button class="lg:hidden focus:outline-none" @click="openSidebar">
				<div class="lines flex flex-col items-end">
					<div class="w-10 h-1 my-0.5 bg-white rounded"></div>
					<div class="w-8  h-1 my-0.5 bg-white rounded"></div>
					<div class="w-6 h-1 my-0.5 bg-white rounded"></div>
				</div>
			</button>

			<div class="nav flex lg:block hidden">
				<g-link class="nav__link px-4" to="/"
					><button class="focus:outline-none">Home</button></g-link
				>
				<a href="/#about" class="nav__link px-4"
					><button class="focus:outline-none">About</button></a
				>
				<g-link class="nav__link px-4" to="/blog/"
					><button class="focus:outline-none">Blog</button></g-link
				>
				<a href="/#projects" class="nav__link px-4"
					><button class="focus:outline-none">Projects</button></a
				>
				<g-link class="nav__link px-4" to="/#contact"
					><button class="focus:outline-none">Contact</button></g-link
				>
				<button
					class="button outline-none py-1 hover:shadow-xl px-2 rounded transition duration-500 ease-in-out  "
				>
					Resume
				</button>
			</div>
		</nav>

		<aside
			class="sidebar lg:hidden fixed top-0 right-0 w-full transform translate-x-full h-full transition duration-700 ease-in-out z-10"
		>
			<div>
				<button
					class="absolute right-0 top-0 m-10 focus:outline-none"
					@click="closeSidebar"
				>
					<i class="fas fa-times text-2xl"></i>
				</button>
			</div>
			<div class="nav flex flex-col text-center w-full mt-20">
				<g-link class="nav__link py-5 m-auto outline-none" to="/"
					><button class="focus:outline-none" @click="closeSidebar">
						Home
					</button>
				</g-link>

				<a href="/#about" class="nav__link py-5"
					><button class="focus:outline-none" @click="closeSidebar">
						About
					</button></a
				>

				<g-link class="nav__link py-5 " to="/blog/"
					><button class="focus:outline-none" @click="closeSidebar">
						Blog
					</button></g-link
				>
				<a href="/#projects" class="nav__link py-5 "
					><button class="focus:outline-none" @click="closeSidebar">
						Projects
					</button></a
				>
				<g-link
					class="nav__link py-5 m-auto outline-none"
					to="/#contact"
					><button class="focus:outline-none" @click="closeSidebar">
						Contact
					</button></g-link
				>
				<button
					class="button m-auto outline-none py-2 hover:shadow-xl px-3 rounded transition duration-500 ease-in-out "
				>
					Resume
				</button>
			</div>
		</aside>
	</header>
</template>

<script>
export default {
	methods: {
		openSidebar() {
			let sidebar = document.querySelector(".sidebar");

			sidebar.classList.add("show");
		},
		closeSidebar() {
			let sidebar = document.querySelector(".sidebar");

			sidebar.classList.remove("show");
		},
	},
};
</script>

<style scoped>
.header {
	background: url("https://www.transparenttextures.com/patterns/stardust.png")
		repeat fixed #1c1026;
}
.nav__link:hover {
	color: #f1d64f;
	transition: all 0.5s ease-in-out;
}
.sidebar {
	background: url("https://www.transparenttextures.com/patterns/stardust.png")
		repeat fixed #1c1026;
}
.show {
	transform: translateX(0);
}
</style>
