import React, { useState } from "react";
import Card from "../PlayerCard";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { IPlayer, TPlayerRole } from "@/types/player";
import { Typography } from "@/library";

export interface IPlayersBatsmen extends Omit<IPlayer, "allrounder"> {
	role: TPlayerRole;
}

interface IPlayersBatsmenProps {
	players: IPlayersBatsmen[];
	setPlayers: (_: IPlayersBatsmen[]) => void;
	color: string;
}

const classes = stylesConfig(styles, "players-batsmen");

const PlayersBatsmen: React.FC<IPlayersBatsmenProps> = ({
	players,
	setPlayers,
	color,
}) => {
	const [activePlayer, setActivePlayer] = useState(0);

	return (
		<div className={classes("")}>
			<div className={classes("-table")}>
				{players.length > 0 &&
					players.map((player, index) =>
						activePlayer === index ? (
							<Card
								key={`players-player-${index}`}
								{...player}
								onClick={() => setActivePlayer(-1)}
								color={color}
								label={(() => {
									const labelStr = "no. ";
									return labelStr + (activePlayer + 1);
								})()}
							/>
						) : (
							<div
								className={classes("-player")}
								key={`players-player-${index}`}
								onClick={(e: any) => {
									if (
										e.target.name !==
										`player-${index}-bencher`
									)
										setActivePlayer(index);
								}}
							>
								<button
									className={classes("-player-dot")}
									name={`player-${index}-bencher`}
									onClick={() => {
										const newPlayers = [...players];
										newPlayers[index].benched =
											!newPlayers[index].benched;
										setPlayers(newPlayers);
									}}
								>
									{player.benched ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
										>
											<path
												d="M9.99996 1.66667C5.40829 1.66667 1.66663 5.40833 1.66663 10C1.66663 14.5917 5.40829 18.3333 9.99996 18.3333C14.5916 18.3333 18.3333 14.5917 18.3333 10C18.3333 5.40833 14.5916 1.66667 9.99996 1.66667ZM13.3333 10.625H10.625V13.3333C10.625 13.675 10.3416 13.9583 9.99996 13.9583C9.65829 13.9583 9.37496 13.675 9.37496 13.3333V10.625H6.66663C6.32496 10.625 6.04163 10.3417 6.04163 10C6.04163 9.65833 6.32496 9.375 6.66663 9.375H9.37496V6.66667C9.37496 6.325 9.65829 6.04167 9.99996 6.04167C10.3416 6.04167 10.625 6.325 10.625 6.66667V9.375H13.3333C13.675 9.375 13.9583 9.65833 13.9583 10C13.9583 10.3417 13.675 10.625 13.3333 10.625Z"
												fill="#7EE787"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 20 20"
											fill="none"
										>
											<path
												d="M9.99996 1.66704C5.40829 1.66704 1.66663 5.4087 1.66663 10.0004C1.66663 14.592 5.40829 18.3337 9.99996 18.3337C14.5916 18.3337 18.3333 14.592 18.3333 10.0004C18.3333 5.4087 14.5916 1.66704 9.99996 1.66704ZM13.2666 10.6254H6.59996C6.25829 10.6254 5.97496 10.342 5.97496 10.0004C5.97496 9.65871 6.25829 9.37537 6.59996 9.37537H13.2666C13.6083 9.37537 13.8916 9.65871 13.8916 10.0004C13.8916 10.342 13.6166 10.6254 13.2666 10.6254Z"
												fill="#FF5E59"
											/>
										</svg>
									)}
								</button>
								{/* <span className={classes("-player-dot")} /> */}
								<div className={classes("-player-content")}>
									<Typography
										className={classes(
											"-player-content__name"
										)}
									>
										{player.name}
										{/* {player} */}
									</Typography>
									<Typography
										className={classes(
											"-player-content__role"
										)}
									>
										{player.role}
										{/* Batsmen */}
									</Typography>
								</div>
								{player.benched ? null : (
									<Typography
										className={classes("-player-index")}
									>
										{index === 0
											? "Opener"
											: `at No. ${index + 1}`}
									</Typography>
								)}
							</div>
						)
					)}
			</div>
		</div>
	);
};

export default PlayersBatsmen;
