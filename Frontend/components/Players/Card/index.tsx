import React from "react";
import Team from "./Team";
import { placeholderTeam } from "@/constants/variables";
import { ITeamMapperModel, teamMapper } from "@/constants/team";
import { slugify, stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Typography } from "@/library";

interface IPlayersMatchCardProps {
	team1: string;
	team2: string;
	timestamp: string;
}

const classes = stylesConfig(styles, "players-match-card");

const PlayersMatchCard: React.FC<IPlayersMatchCardProps> = ({
	team1,
	team2,
}) => {
	const model1: ITeamMapperModel =
		teamMapper[slugify(team1)] ?? placeholderTeam;
	const model2: ITeamMapperModel =
		teamMapper[slugify(team2)] ?? placeholderTeam;
	return (
		<div
			className={classes("")}
			style={{
				backgroundImage: `linear-gradient(to right, ${model1.color}, ${model2.color})`,
			}}
		>
			<div className={classes("-wrapper")}>
				<div className={classes("-body")}>
					<Team {...model1} />
					<Typography size="lg" className={classes("-body-vs")}>
						VS
					</Typography>
					<Team {...model2} flip />
				</div>
			</div>
		</div>
	);
};

export default PlayersMatchCard;
