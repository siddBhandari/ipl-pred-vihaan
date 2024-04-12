import React from "react";
import Card from "./Card";
import { ISeries } from "@/types/series";
import Responsive from "@/layouts/Responsive";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

interface IHomeSeriesProps {
	series: ISeries[];
}

const classes = stylesConfig(styles, "home-series");

const HomeSeries: React.FC<IHomeSeriesProps> = ({ series }) => {
	return (
		<section className={classes("")} id="series">
			<div className={classes("-head")}>
				<Typography size="head-2" weight="bold">
					Upcoming Series
				</Typography>
			</div>
			<div className={classes("-body")}>
				<Responsive.Row>
					{series.map((series) => (
						<Responsive.Col
							key={`home-series-${series.id}`}
							xlg={33}
							lg={33}
							md={50}
							sm={100}
							xsm={100}
						>
							<Card {...series} />
						</Responsive.Col>
					))}
				</Responsive.Row>
			</div>
		</section>
	);
};

export default HomeSeries;
