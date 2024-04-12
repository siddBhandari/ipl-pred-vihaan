import React from "react";
import Seo from "./Seo";
import { frontendBaseUrl } from "@/constants/variables";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const Layout: React.FC<any> = ({ children }) => {
	return (
		<>
			<Seo
				title="Ipl Preds - Sports Analytics"
				description="Ipl Preds is a tool to record, analyze and track cricketing performances of aspiring professional players. Let's Connect!"
				image="/images/og-image.png"
				icons={["icon", "shortcut icon", "apple-touch-icon"].map(
					(item) => {
						return {
							rel: item,
							href: "/favicon.ico",
							type: "icon/ico",
						};
					}
				)}
				twitter={{
					card: "summary_large_image",
					site: "@AthenasquareHQ",
					author: "@AthenasquareHQ",
					title: "Ipl Preds - Sports Analytics",
					description:
						"Ipl Preds is a tool to record, analyze and track cricketing performances of aspiring professional players. Let's Connect!",
					image: "/images/og-image.png",
					url: frontendBaseUrl,
				}}
				og={{
					title: "Ipl Preds - Sports Analytics",
					description:
						"Ipl Preds is a tool to record, analyze and track cricketing performances of aspiring professional players. Let's Connect!",
					images: [
						{
							url: "/images/og-image.png",
							secureUrl: "/images/og-image.png",
							type: "image/png",
							width: 1200,
							height: 630,
							alt: "Ipl Preds - Sports Analytics",
						},
					],
					url: frontendBaseUrl,
					type: "website",
					siteName: "Ipl Preds - Sports Analytics",
				}}
			/>
			{children}
			<Footer />
			<Toaster position="top-center" />
		</>
	);
};

export default Layout;
