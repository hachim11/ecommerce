import React from "react";
import {Toaster} from 'react-hot-toast'

import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
export default function App({ Component, pageProps }) {
	return (
		<StateContext>
			<Layout>
				<Toaster/>
				<Component {...pageProps} />
			</Layout>
		</StateContext>
	);
}
