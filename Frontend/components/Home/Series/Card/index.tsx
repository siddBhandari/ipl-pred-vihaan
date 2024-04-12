import React from "react";
import { ISeries } from "@/types/series";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Typography } from "@/library";
import useDevice from "@/hooks/device";
import moment from "moment";

interface IHomeSeriesCardProps extends ISeries {}

const classes = stylesConfig(styles, "home-series-card");

const HomeSeriesCard: React.FC<IHomeSeriesCardProps> = ({
	cover,
	title,
	start,
	end,
}) => {
	const { platform } = useDevice();
	return (
		<div
			className={classes("")}
			style={{
				backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 59.31%, #090909 94.73%), url(${cover});`,
			}}
		>
			<Typography size="s">{title}</Typography>
			<Typography size="sm">
				{(() => {
					if (platform === "client") {
						return (
							moment(start).format("D MMM") +
							" - " +
							moment(end).format("D MMM")
						);
					} else {
						return start + " - " + end;
					}
				})()}
			</Typography>
		</div>
	);
};

export default HomeSeriesCard;
