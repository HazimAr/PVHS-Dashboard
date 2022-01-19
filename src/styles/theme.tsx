/* eslint-disable import/no-default-export */
import { extendTheme } from "@chakra-ui/react";
import Link from "./components/Link";

const theme = extendTheme({
	colors: {
		primary: "#006635",
		secondary: "#000000",
		tertiary: "#ffffff",
	},
	components: {
		Link,
	},
	styles: {
		global: () => ({
			body: {
				fontFamily:
					"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				lineHeight: "base",
				padding: 0,
				margin: 0,
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			ul: {
				listStyle: "none",
			},
		}),
	},
});

export default theme;
