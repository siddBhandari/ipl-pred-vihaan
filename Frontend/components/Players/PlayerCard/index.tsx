import React, { useEffect, useState } from "react";
import Image from "next/image";
import Gradient from "./Gradient";
import { Typography } from "@/library";
import { IPlayer, TPlayerRole } from "@/types/player";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IPlayersPlayerCardProps extends Omit<IPlayer, "allrounder"> {
	role: TPlayerRole;
	color: string;
	label: string;
	onClick: () => void;
}

const classes = stylesConfig(styles, "players-player-card");

const PlayersPlayerCard: React.FC<IPlayersPlayerCardProps> = ({
	role,
	name,
	country,
	playerAvatar,
	batting,
	bowling,
	color,
	label,
	onClick,
}) => {
	const highLevelStats = (() => {
		if (role === "Batsman") {
			return {
				Matches: Math.round(Math.max(batting.matches, 0)),
				Runs: Math.round(Math.max(batting.runs, 0)),
				"Strike Rate": Math.max(batting.strike_rate, 0),
			};
		} else {
			return {
				Matches: Math.round(Math.max(bowling.matches, 0)),
				Wickets: Math.round(Math.max(bowling.wickets, 0)),
				Economy: Math.max(bowling.economy, 0),
			};
		}
	})();
	const lowLevelStats = (() => {
		if (role === "Batsman") {
			return {
				"Batting Average": Math.max(batting.average, 0),
				"Batting Strength": Math.max(batting.strength, 0),
				"Batting Potential": Math.max(batting.potential, 0),
				"Strike Rate": Math.max(batting.strike_rate, 0),
			};
		} else {
			return {
				Runs: Math.round(Math.max(bowling.runs_conceeded, 0)),
				Overs: Math.round(Math.max(bowling.overs, 0)),
				"Bowling Average": Math.max(bowling.average, 0),
				Economy: Math.max(bowling.economy, 0),
			};
		}
	})();

	const [showPlayerImage, setShowPlayerImage] = useState(true);

	useEffect(() => {
		setShowPlayerImage(true);
	}, [playerAvatar]);

	return (
		<div className={classes("")} onClick={onClick}>
			<div className={classes("-content")}>
				<div className={classes("-top")}>
					<Typography className={classes("-name")}>{name}</Typography>
					<Typography className={classes("-country")}>
						{country}
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
									)?.[1] as number
								)}
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
									)?.[1] as number
								)}
							</Typography>
						</div>
					))}
				</div>
			</div>
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
			<Typography
				size="head-1"
				className={classes("-label")}
				family="prosto-one"
			>
				{label}
			</Typography>
			<Gradient
				color={color}
				id={`players-player-card-body-team-${name}-${color}`}
				className={classes("-gradient")}
			/>
		</div>
	);
};

export default PlayersPlayerCard;
