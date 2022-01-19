// google analytics measurement id
const GA_TRACKING_ID = "";

type MetaType = {
	title: string;
	lang: string;
	description: string;
	url: string;
	image: string;
	tags: string[];
};

const META: MetaType = {
	title: "NextJS ChakraUI Template | Hazim Arafa",
	lang: "en-us",
	description:
		"Boilerplate built to scale containing Typescript + NextJS + ChakraUI + Google Analytics + ESLint + Jest + Styled Components + Icons",
	url: "https://boilerplate.hazimarafa.tech",
	image: "/logo.png",
	tags: ["nextjs", "typescript", "chakraui", "google analytics", "eslint", "jest", "styled components", "icons"]
};

const schedule = [
	{
		start: "08:00:00",
		end: "09:21:00",
	},
	{
		start: "09:26:00",
		end: "10:54:00",
	},
	{
		start: "10:59:00",
		end: "12:50:00",
	},
	{
		start: "12:55:00",
		end: "14:16:00",
	},
];

export { GA_TRACKING_ID, META, schedule };
