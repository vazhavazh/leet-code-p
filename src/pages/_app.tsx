import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Head>
				<title>Leet Code Clone</title>
				<meta
					name='description'
					content='Web applications tat contains 
					leetcode problems and video solutions'
				/>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					rel='icon'
					href='/favicon.png'
				/>
			</Head>
			<ToastContainer />
			<Component {...pageProps} />
		</RecoilRoot>
	);
}