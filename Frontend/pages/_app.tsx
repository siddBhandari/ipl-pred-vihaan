import type { AppProps } from "next/app";
import Layout from "@/layouts";
import "@/styles/globals.scss";
import GlobalContext from "@/context/GlobalContext";
import useContextData from "@/context/useContext";

export default function App({ Component, pageProps }: AppProps) {
	const context = useContextData();
	return (
		<GlobalContext.Provider value={context}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</GlobalContext.Provider>
	);
}
