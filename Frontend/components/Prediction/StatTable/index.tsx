import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { IMatchPredictionCountryStats } from "@/types/match";
import { Typography } from "@/library";

interface PredictionStatTableProps extends IMatchPredictionCountryStats {
	style?: React.CSSProperties;
}

const classes = stylesConfig(styles, "prediction-stat-table");

const PredictionStatTable: React.FC<PredictionStatTableProps> = ({
	name,
	batting_stats,
	bowling_stats,
	style,
}) => {
	return (
		<div className={classes("")} style={style}>
			<Typography
				weight="bold"
				size="head-2"
				className={classes("-name")}
			>
				{name}
			</Typography>
			<table className={classes("-table")} id={`${name}-batting`}>
				<thead>
					<tr>
						<th>Batsman</th>
						<th>Runs Scored</th>
					</tr>
				</thead>
				<tbody>
					{batting_stats.map((batsman, index) => (
						<tr key={index}>
							<td>{batsman.name}</td>
							<td>
								{batsman.played
									? Math.round(Math.max(batsman.runs, 0))
									: "-"}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<table className={classes("-table")} id={`${name}-bowling`}>
				<thead>
					<tr>
						<th>Bowler</th>
						<th>Wickets</th>
						<th>Economy</th>
					</tr>
				</thead>
				<tbody>
					{bowling_stats.map((bowler, index) => (
						<tr key={index}>
							<td>{bowler.name}</td>
							<td>
								{bowler.played
									? Math.round(Math.max(bowler.wickets, 0))
									: "-"}
							</td>
							<td>
								{bowler.played
									? Math.round(bowler.economy * 100) / 100
									: "-"}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default PredictionStatTable;
