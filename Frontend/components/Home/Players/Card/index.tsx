import React, { useEffect, useState } from "react";
import Image from "next/image";
import Gradient from "./Gradient";
import { Typography } from "@/library";
import { IPlayer, TPlayerRole } from "@/types/player";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { ITeamMapperModel, teamMapper } from "@/constants/team";
import { placeholderTeam } from "@/constants/variables";

interface IHomePlayersCardProps extends IPlayer {
	role: TPlayerRole;
	label: string;
}

const classes = stylesConfig(styles, "home-players-card");

const HomePlayersCard: React.FC<IHomePlayersCardProps> = ({
	role,
	name,
	country,
	playerAvatar,
	batting,
	bowling,
	allrounder,
	label,
}) => {
	const [showPlayerImage, setShowPlayerImage] = useState(true);
	const teamModel: ITeamMapperModel = teamMapper[country] ?? placeholderTeam;
	const highLevelStats = (() => {
		if (role === "Batsman") {
			return {
				Matches: Math.round(Math.max(batting.matches, 0)),
				Runs: Math.round(Math.max(batting.runs)),
				"Strike Rate": Math.max(batting.strike_rate, 0),
			};
		} else if (role === "Bowler") {
			return {
				Matches: Math.round(Math.max(bowling.matches, 0)),
				Wickets: Math.round(Math.max(bowling.wickets, 0)),
				Economy: Math.max(bowling.economy, 0),
			};
		} else {
			return {
				Matches: Math.round(Math.max(allrounder.matches, 0)),
				Runs: Math.round(Math.max(allrounder.runs, 0)),
				Wickets: Math.round(Math.max(allrounder.wickets, 0)),
			};
		}
	})();
	const lowLevelStats = (() => {
		if (role === "Batsman") {
			return {
				Average: Math.max(batting.average, 0),
				Strength: Math.max(batting.strength, 0),
				Potential: Math.max(batting.potential, 0),
				"Strike Rate": Math.max(batting.strike_rate, 0),
			};
		} else if (role === "Bowler") {
			return {
				Average: Math.max(bowling.average, 0),
				Runs: Math.round(Math.max(bowling.runs_conceeded, 0)),
				Overs: Math.round(Math.max(bowling.overs, 0)),
				Economy: Math.max(bowling.economy, 0),
			};
		} else {
			return {
				"Batting Average": Math.max(allrounder.batting_average),
				"Bowling Average": Math.max(allrounder.bowling_strike_rate),
				"Strike Rate": Math.max(allrounder.batting_strike_rate),
				Economy: Math.max(allrounder.economy),
			};
		}
	})();

	useEffect(() => {
		setShowPlayerImage(true);
	}, [playerAvatar]);

	return (
		<div
			className={classes("")}
			style={{
				borderColor: teamModel.color,
			}}
		>
			<div className={classes("-content")}>
				<div className={classes("-top")}>
					<Typography weight="bold" className={classes("-name")}>
						{name}
					</Typography>
					<Typography className={classes("-country")}>
						{teamModel.name === placeholderTeam.name
							? country
							: teamModel.name}
					</Typography>
				</div>
				<div className={classes("-high-level-stats")}>
					{Object.keys(highLevelStats).map((key) => (
						<div
							className={classes("-high-level-stats-stat")}
							key={`home-players-card-${key}`}
						>
							<Typography
								className={classes(
									"-high-level-stats-stat__key"
								)}
							>
								{Math.round(
									Object.entries(highLevelStats).find(
										([k]) => k === key
									)?.[1] * 100
								) / 100}
							</Typography>
							<Typography
								className={classes(
									"-high-level-stats-stat__value"
								)}
							>
								{key}
							</Typography>
						</div>
					))}
				</div>
				<div className={classes("-low-level-stats")}>
					{Object.keys(lowLevelStats).map((key) => (
						<div
							className={classes("-low-level-stats-stat")}
							key={`home-players-card-${key}`}
						>
							<Typography
								className={classes(
									"-low-level-stats-stat__key"
								)}
							>
								{key}
							</Typography>
							<Typography
								className={classes(
									"-low-level-stats-stat__value"
								)}
							>
								{Math.round(
									Object.entries(lowLevelStats).find(
										([k]) => k === key
									)?.[1] * 100
								) / 100}
							</Typography>
						</div>
					))}
				</div>
			</div>
			<Typography
				size="head-1"
				className={classes("-label")}
				family="prosto-one"
			>
				{label}
			</Typography>
			{playerAvatar ? (
				<div className={classes("-image")}>
					{showPlayerImage ? (
						<Image
							src={playerAvatar}
							alt={name}
							width={360}
							height={360}
							onError={() => setShowPlayerImage(false)}
						/>
					) : null}
				</div>
			) : null}
			<Gradient
				color={teamModel.color}
				id={`home-matches-card-body-team-${name}-${teamModel.color}`}
				className={classes("-gradient")}
			/>
		</div>
	);
};

export default HomePlayersCard;
