import React, { useEffect, useState } from "react";
import Card from "../Card";
import { teamCodeToNameMapper } from "@/constants/team";
import { Typography } from "@/library";
import { IPlayer, TPlayerRole } from "@/types/player";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IHomePlayersPaneProps {
	title: string;
	role: TPlayerRole;
	players: IPlayer[];
}

const classes = stylesConfig(styles, "home-players-pane");

const PlayersPane: React.FC<IHomePlayersPaneProps> = ({
	title,
	role,
	players = [],
}) => {
	const [activePlayer, setActivePlayer] = useState(
		players.length > 0 ? players[0] : ({} as IPlayer)
	);

	useEffect(() => {
		setActivePlayer(players.length > 0 ? players[0] : ({} as IPlayer));
	}, [players]);

	return (
		<div className={classes("")}>
			<Typography size="xxl" weight="bold" className={classes("-title")}>
				{title}
			</Typography>
			<div className={classes("-table")}>
				{players.map((player, index) =>
					activePlayer.id === player.id ? (
						<Card
							{...activePlayer}
							role={role}
							key={`home-players-pane-${title}-${player.id}`}
							label={(() => {
								const labelStr = "no. ";
								const index = players.findIndex(
									(player) => player.id === activePlayer.id
								);
								return labelStr + (index + 1);
							})()}
						/>
					) : (
						<div
							className={classes("-table-row")}
							key={`home-players-pane-${title}-${player.id}`}
							onClick={() => setActivePlayer(player)}
						>
							<Typography className={classes("-table-row-rank")}>
								{index + 1}
							</Typography>
							<div className={classes("-table-row-name")}>
								<Typography>{player.name}</Typography>
								<Typography>
									{teamCodeToNameMapper[player.country]}
								</Typography>
							</div>
							<div className={classes("-table-row-stat")}>
								<Typography>
									{(() => {
										if (role === "Batsman") {
											return player.batting.matches;
										} else if (role === "Bowler") {
											return player.bowling.matches;
										} else {
											return (
												player.allrounder.matches || 0
											);
										}
									})()}
								</Typography>
								<Typography>Matches</Typography>
							</div>
							<div className={classes("-table-row-stat")}>
								<Typography weight="bold">
									{(() => {
										if (role === "Batsman") {
											return player.batting.runs;
										} else if (role === "Bowler") {
											return player.bowling.wickets;
										} else {
											return player.allrounder.runs || 0;
										}
									})()}
								</Typography>
								<Typography weight="light">
									{(() => {
										if (role === "Batsman") {
											return "Runs";
										} else if (role === "Bowler") {
											return "Wickets";
										} else {
											return "Runs";
										}
									})()}
								</Typography>
							</div>
							{role === "All Rounder" ? (
								<div className={classes("-table-row-stat")}>
									<Typography weight="bold">
										{player.allrounder.wickets || 0}
									</Typography>
									<Typography weight="light">
										Wickets
									</Typography>
								</div>
							) : null}
						</div>
					)
				)}
			</div>
		</div>
	);
};

export default PlayersPane;
