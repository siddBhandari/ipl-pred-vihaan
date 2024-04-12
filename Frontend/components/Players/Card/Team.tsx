import React from "react";
import Image from "next/image";
import Gradient from "@/components/Home/Matches/Card/Gradient";
import { ITeamMapperModel } from "@/constants/team";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IPlayersMatchCardTeamProps extends ITeamMapperModel {
	style?: React.CSSProperties;
	flip?: boolean;
}

const classes = stylesConfig(styles, "players-match-card-team");

const PlayersMatchCardTeam: React.FC<IPlayersMatchCardTeamProps> = ({
	name,
	flag,
	code,
	captain,
	color,
	style,
	flip = false,
}) => {
	return (
		<div
			className={classes("", {
				"--flip": flip,
			})}
			style={{
				...style,
			}}
		>
			<Gradient
				color={color}
				id={`players-match-card-team-${name}-${color}`}
				className={classes("-gradient")}
			/>
			<div className={classes("-captain")}>
				<Image
					src={captain.image}
					alt={captain.name}
					title={captain.name}
					width={512}
					height={400}
				/>
			</div>
			<div className={classes("-details")}>
				<Image
					src={flag}
					alt={name}
					width={100}
					height={100}
					className={classes("-logo")}
				/>
				<div className={classes("-name")}>
					{(() => {
						if (name.length > 10) {
							return name.substring(0, 10) + "...";
						}
						return name;
					})()}
				</div>
			</div>
			<Typography family="prosto-one" className={classes("-code")}>
				{code}
			</Typography>
		</div>
	);
};

export default PlayersMatchCardTeam;
