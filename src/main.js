// Import main css
import "~/assets/style/index.scss";

import "~/assets/style/style.css";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
	// Set default layout as a global component
	Vue.component("Layout", DefaultLayout);

	head.link.push(
		{
			rel: "preconnect",
			href: "https://fonts.gstatic.com",
		},
		{
			rel: "stylesheet",
			href:
				"https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,500&display=swap",
		},
		{
			rel: "stylesheet",
			href:
				"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
			integrity:
				"sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==",
			crossorigin: "anonymous",
		},
		{
			href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
			rel: "stylesheet",
		}
	);
}
