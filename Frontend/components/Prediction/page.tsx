import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "@/library";
import { IMatchPrediction } from "@/types/match";
import { slugify, stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Prediction.module.scss";
import { ITeamMapperModel, teamMapper } from "@/constants/team";
import Responsive from "@/layouts/Responsive";
import { Comparison, StatTable, Team } from "@/components/Prediction";
import useDevice from "@/hooks/device";
import { useRouter } from "next/router";

interface PredictionProps extends IMatchPrediction {}

const classes = stylesConfig(styles, "prediction");

const Prediction: React.FC<PredictionProps> = ({
	title,
	result,
	country_1,
	country_2,
	matrix,
}) => {
	const { type } = useDevice();
	const router = useRouter();
	const [predictionStatsBoxHeight, setPredictionStatsBoxHeight] = useState(0);
	const team_1: ITeamMapperModel = teamMapper[slugify(country_1.name)] ?? {
		name: "Unknown",
		code: "UNK",
		flag: "https://i.redd.it/7vzha41nzcsa1.png",
		captain: {
			name: "Unknown",
			image: "/favicon.png",
		},
		color: "var(--team-india-color)",
		gradient: "var(--team-india-gradient)",
	};

	const team_2: ITeamMapperModel = teamMapper[slugify(country_2.name)] ?? {
		name: "Unknown",
		code: "UNK",
		flag: "https://i.redd.it/7vzha41nzcsa1.png",
		captain: {
			name: "Unknown",
			image: "/favicon.png",
		},
		color: "var(--team-india-color)",
		gradient: "var(--team-india-gradient)",
	};

	return (
		<div className={classes("")}>
			<header className={classes("-header")}>
				<Typography weight="bold" size="head-2" as="h1">
					{title}
				</Typography>
				<Image
					src="/favicon.png"
					alt="logo"
					width={100}
					height={100}
					onClick={() => router.push("/")}
					className={classes("-header__logo")}
				/>
			</header>
			<Typography
				weight="bold"
				size="head-3"
				as="h1"
				className={classes("-header__title")}
			>
				{result.status === "draw" ? (
					"Match is likely to be a draw"
				) : (
					<>
						<span
							style={{
								color:
									result.winner === country_1.name
										? team_1.color
										: team_2.color,
							}}
						>
							{result.winner}
						</span>
						&nbsp;is likely to win
					</>
				)}
			</Typography>
			<Responsive.Row className={classes("-teams")}>
				{type === "mobile" ? (
					<Responsive.Col xlg={33} lg={33} md={33} sm={100} xsm={100}>
						<Comparison
							country_1={{
								name: country_1.name,
								flag: team_1.flag,
								color: team_1.color,
							}}
							country_2={{
								name: country_2.name,
								flag: team_2.flag,
								color: team_2.color,
							}}
							winner={{
								name: result.winner,
								percentage: result.percentage,
							}}
							componentsToShow={["seek"]}
						/>
					</Responsive.Col>
				) : null}
				<Responsive.Col xlg={33} lg={33} md={33} sm={50} xsm={50}>
					<Team
						{...country_1}
						{...team_1}
						style={{
							height:
								type === "mobile"
									? "auto"
									: predictionStatsBoxHeight,
						}}
					/>
				</Responsive.Col>
				<Responsive.Col xlg={33} lg={33} md={33} sm={50} xsm={50}>
					<Team
						{...country_2}
						{...team_2}
						style={{
							height:
								type === "mobile"
									? "auto"
									: predictionStatsBoxHeight,
						}}
					/>
				</Responsive.Col>
				<Responsive.Col xlg={33} lg={33} md={33} sm={100} xsm={100}>
					<Comparison
						country_1={{
							name: country_1.name,
							flag: team_1.flag,
							color: team_1.color,
						}}
						country_2={{
							name: country_2.name,
							flag: team_2.flag,
							color: team_2.color,
						}}
						winner={{
							name: result.winner,
							percentage: result.percentage,
						}}
						matrix={matrix}
						componentsToShow={
							type === "mobile"
								? ["title", "matrix"]
								: ["seek", "title", "matrix"]
						}
						setHeight={(height) => {
							setPredictionStatsBoxHeight(height);
						}}
					/>
				</Responsive.Col>
			</Responsive.Row>
			<Responsive.Row className={classes("-stats")}>
				<Responsive.Col xlg={50} lg={50} md={50} sm={100} xsm={100}>
					<StatTable
						style={{
							marginRight: type === "mobile" ? 0 : "auto",
						}}
						{...country_1}
					/>
				</Responsive.Col>
				<Responsive.Col xlg={50} lg={50} md={50} sm={100} xsm={100}>
					<StatTable
						style={{
							marginLeft: type === "mobile" ? 0 : "auto",
						}}
						{...country_2}
					/>
				</Responsive.Col>
			</Responsive.Row>
		</div>
	);
};

export default Prediction;
