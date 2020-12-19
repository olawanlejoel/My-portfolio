<template>
	<Layout>
		<main>
			<div class="flex h-screen">
				<SidebarIcons class="invisible lg:visible" />
				<Hero />
				<SidebarMail class="invisible lg:visible" />
			</div>
			<div class="h-screen " id="about">
				<div class="pt-20">
					<AboutMe />
				</div>
			</div>
			<div>
				<div class="lg:pt-20">
					<LatestPost />
				</div>
			</div>
			<div class="" id="projects">
				<div class="lg:pt-20">
					<Projects />
				</div>
			</div>
			<div class="" id="contact">
				<div class="lg:pt-20">
					<Contact />
				</div>
			</div>
			<div class="">
				<Footer />
			</div>
		</main>
	</Layout>
</template>

<script>
import Hero from "~/components/created/Hero.vue";
import SidebarIcons from "~/components/created/SidebarIcons.vue";
import SidebarMail from "~/components/created/SidebarMail.vue";

import AboutMe from "~/components/created/AboutMe.vue";

import LatestPost from "~/components/created/LatestPost.vue";

import Projects from "~/components/created/Projects.vue";

import Contact from "~/components/created/Contact.vue";

import Footer from "~/components/created/Footer.vue";

export default {
	metaInfo: {
		title: "Home",
	},
	components: {
		Hero,
		SidebarIcons,
		SidebarMail,
		AboutMe,
		LatestPost,
		Projects,
		Contact,
		Footer,
	},
};
</script>
