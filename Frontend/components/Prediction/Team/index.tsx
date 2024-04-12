import React from "react";
import Gradient from "./Gradient";
import { ITeamMapperModel } from "@/constants/team";
import { Typography } from "@/library";
import { IMatchPredictionCountryStats } from "@/types/match";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IPredictionTeamProps
	extends IMatchPredictionCountryStats,
		ITeamMapperModel {
	style?: React.CSSProperties;
}

const classes = stylesConfig(styles, "prediction-team");

const PredictionTeam: React.FC<IPredictionTeamProps> = ({
	name,
	runs,
	wickets,
	overs,
	color,
	style,
}) => {
	const data = [
		{
			label: "Predicted Runs Scored",
			min: Math.round(Math.max(runs.min, 0)),
			max: Math.round(Math.max(runs.max, 0)),
		},
		{
			label: "Wickets Fall",
			min: Math.round(Math.max(wickets.min, 0)),
			max: Math.round(Math.max(wickets.max, 0)),
		},
		{
			label: "Overs Played",
			min: Math.round(Math.max(overs.min, 0)),
			max: Math.round(Math.max(overs.max, 0)),
		},
	];
	return (
		<div
			className={classes("")}
			style={{
				borderColor: color,
				...style,
			}}
		>
			{data.map((item, index) =>
				item.min === undefined || item.max === undefined ? null : (
					<div className={classes("-item")} key={index}>
						<Typography
							size="md"
							weight="bold"
							className={classes("-item-label")}
						>
							{item.label}
						</Typography>
						<div className={classes("-item-body")}>
							<div className={classes("-item-body-box")}>
								<Typography size="xxxl" weight="bold">
									{(Math.round(item.min * 100) / 100).toFixed(
										0
									)}
								</Typography>
								<Typography size="sm" weight="light">
									Minimum
								</Typography>
							</div>
							<span className={classes("-item-body-separator")} />
							<div className={classes("-item-body-box")}>
								<Typography size="xxxl" weight="bold">
									{(Math.round(item.max * 100) / 100).toFixed(
										0
									)}
								</Typography>
								<Typography size="sm" weight="light">
									Maximum
								</Typography>
							</div>
						</div>
					</div>
				)
			)}
			<Typography
				size="head-2"
				weight="bold"
				className={classes("-name")}
			>
				{name}
			</Typography>
			<Gradient
				color={color}
				id={`prediction-team-${name}-${color}`}
				className={classes("-gradient")}
			/>
		</div>
	);
};

export default PredictionTeam;
