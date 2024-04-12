import React from "react";
import TeamCard from "./Team";
import { Location } from "@/assets/icons/Location/linear";
import { ITeamMapperModel, teamMapper } from "@/constants/team";
import { Typography } from "@/library";
import { IMatch } from "@/types/match";
import { slugify, stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { placeholderTeam } from "@/constants/variables";

interface IHomeMatchesCardProps extends IMatch {
	index: number;
}

const classes = stylesConfig(styles, "home-matches-card");

const HomeMatchesCard: React.FC<IHomeMatchesCardProps> = ({
	id,
	title,
	index,
	location,
	team1,
	team2,
}) => {
	const router = useRouter();
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
			onClick={() => {
				router.push(`/matches/${id}/players`);
			}}
		>
			<div className={classes("-wrapper")}>
				<div className={classes("-head")}>
					<Typography size="s" className={classes("-head-title")}>
						{title}
					</Typography>
					<div className={classes("-head-meta")}>
						<Typography size="sm">{`Match ${
							index + 1
						}`}</Typography>
						{location ? (
							<>
								|
								<Typography size="sm">
									<Location />
									{location}
								</Typography>
							</>
						) : null}
					</div>
				</div>
				<div className={classes("-body")}>
					<TeamCard {...model1} index={0} />
					<Typography size="xs" className={classes("-body-vs")}>
						VS
					</Typography>
					<TeamCard {...model2} index={1} flip />
				</div>
			</div>
		</div>
	);
};

export default HomeMatchesCard;
