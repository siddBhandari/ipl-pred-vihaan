import React from "react";
import { IMatchPredictionComparisonMatrix } from "@/types/match";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IPredictionComparisonMatricProps
	extends IMatchPredictionComparisonMatrix {
	team1: {
		name: string;
		color: string;
	};
	team2: {
		name: string;
		color: string;
	};
}

const classes = stylesConfig(styles, "prediction-comparison-matrix");

const PredictionComparisonMatric: React.FC<
	IPredictionComparisonMatricProps
> = ({
	c1_max_c2_max,
	c1_min_c2_min,
	c1_max_c2_min,
	c1_min_c2_max,
	team1,
	team2,
}) => {
	return (
		<div className={classes("")}>
			<div className={classes("-label", "-min-1")}>Minimum</div>
			<div className={classes("-label", "-min-2")}>Minimum</div>
			<div className={classes("-label", "-max-2")}>Maximum</div>
			<div className={classes("-label", "-max-1")}>Maximum</div>
			<div
				className={classes("-label", "-country-1")}
				style={{
					color: team1.color,
				}}
			>
				{team1.name} batting performance
			</div>
			<div
				className={classes("-label", "-country-2")}
				style={{
					color: team2.color,
				}}
			>
				{team2.name} batting performance
			</div>
			<div className={classes("-value", "-c1-max-c2-min")}>
				{c1_max_c2_min}%
			</div>
			<div className={classes("-value", "-c1-max-c2-max")}>
				{c1_max_c2_max}%
			</div>
			<div className={classes("-value", "-c1-min-c2-min")}>
				{c1_min_c2_min}%
			</div>
			<div className={classes("-value", "-c1-min-c2-max")}>
				{c1_min_c2_max}%
			</div>
		</div>
	);
};

export default PredictionComparisonMatric;
