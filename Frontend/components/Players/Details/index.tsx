import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Button, Typography } from "@/library";
import { Location } from "@/assets/icons/Location/linear";
import { Calendar, Clock } from "@/assets/icons/Time/linear";
import moment from "moment";

interface IPlayersDetails {
	team1: string;
	team2: string;
	label: string;
	location: string;
	timestamp: string;
	onPredict: () => void;
	predicting: boolean;
}

const classes = stylesConfig(styles, "players-details");

const PlayersDetails: React.FC<IPlayersDetails> = ({
	team1,
	team2,
	label,
	location,
	timestamp,
	onPredict,
	predicting,
}) => {
	return (
		<div className={classes("")}>
			<div className={classes("-head")}>
				<Typography size="head-3" weight="bold">
					{team1} vs {team2}
				</Typography>
				<Typography size="lg" className={classes("-head-label")}>
					{label}
				</Typography>
			</div>
			<div className={classes("-body")}>
				<div className={classes("-body-stat")}>
					<Location className={classes("-body-stat-icon")} />
					<Typography className={classes("-body-stat-label")}>
						{location}
					</Typography>
				</div>
				<div className={classes("-body-stat")}>
					<Calendar className={classes("-body-stat-icon")} />
					<Typography className={classes("-body-stat-label")}>
						{moment(timestamp).format("DD MMM YYYY")}
					</Typography>
				</div>
				<div className={classes("-body-stat")}>
					<Clock className={classes("-body-stat-icon")} />
					<Typography className={classes("-body-stat-label")}>
						{moment(timestamp).format("hh:mm A")}
					</Typography>
				</div>
			</div>
			<Button
				className={classes("-details-button")}
				onClick={() => onPredict()}
				variant="filled"
				loading={predicting}
			>
				Predict Score
			</Button>
		</div>
	);
};

export default PlayersDetails;
