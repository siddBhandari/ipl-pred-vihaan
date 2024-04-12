import React from "react";
import Image from "next/image";
import { Button, Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-hero");

const HomeHero: React.FC = () => {
	return (
		<section className={classes("")} id="hero">
			<Image
				src="/favicon.png"
				alt="Hero"
				width={1920}
				height={1080}
				className={classes("-logo")}
			/>
			<Typography className={classes("-title")}>
				Manage Cricket Teams and Predict Results
			</Typography>
			<Typography className={classes("-subtitle")}>
				Ipl Preds is a tool to record, analyze and track cricketing
				performances of aspiring professional players
			</Typography>
			<Button
				size="large"
				className={classes("-btn")}
				onClick={() => {
					const matches = document.getElementById("matches");
					matches?.scrollIntoView({ behavior: "smooth" });
				}}
			>
				Predict Match
			</Button>
		</section>
	);
};

export default HomeHero;
