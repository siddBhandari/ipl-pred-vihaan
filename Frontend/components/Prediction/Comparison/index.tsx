import React, { useEffect, useRef } from "react";
import Matrix from "./Matrix";
import { Typography } from "@/library";
import { IMatchPredictionComparisonMatrix } from "@/types/match";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import Image from "next/image";

interface IPredictionComparisonProps {
	country_1: {
		name: string;
		flag: string;
		color: string;
	};
	country_2: {
		name: string;
		flag: string;
		color: string;
	};
	winner: {
		name: string;
		percentage: number;
	};
	matrix?: IMatchPredictionComparisonMatrix;
	componentsToShow?: ("seek" | "title" | "matrix")[];
	setHeight?: (_: number) => void;
}

const classes = stylesConfig(styles, "prediction-comparison");

const PredictionComparison: React.FC<IPredictionComparisonProps> = ({
	country_1,
	country_2,
	winner,
	matrix,
	componentsToShow = ["seek", "title", "matrix"],
	setHeight,
}) => {
	const ref = useRef<any>();

	useEffect(() => {
		if (setHeight) {
			setHeight(ref.current?.offsetHeight);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ref.current]);

	return (
		<div className={classes("")} ref={ref}>
			{componentsToShow.includes("seek") ? (
				<div className={classes("-top")}>
					<div className={classes("-top-country")}>
						<Image
							src={country_1.flag}
							alt={country_1.name}
							width={100}
							height={100}
						/>
						<Typography size="md" weight="bold">
							{country_1.name}
						</Typography>
					</div>
					<div
						className={classes("-top-slider")}
						style={{
							backgroundImage: `linear-gradient(to right , ${country_1.color} 0%, var(--theme-grey) ${winner.percentage}%, var(--theme-grey) ${winner.percentage}%, ${country_2.color} 100%)`,
						}}
					>
						<div
							className={classes("-top-slider-seek")}
							style={{
								left: `${winner.percentage}%`,
								borderColor:
									winner.percentage > 50
										? country_1.color
										: country_2.color,
								color:
									winner.percentage > 50
										? country_1.color
										: country_2.color,
							}}
						>
							<Typography size="xs" weight="bold">
								{winner.percentage}%
							</Typography>
						</div>
					</div>
					<div className={classes("-top-country")}>
						<Image
							src={country_2.flag}
							alt={country_2.name}
							width={100}
							height={100}
						/>
						<Typography size="md" weight="bold">
							{country_2.name}
						</Typography>
					</div>
				</div>
			) : null}
			{componentsToShow.includes("title") ? (
				<Typography
					weight="bold"
					size="xxl"
					className={classes("-statement")}
				>
					<span
						style={{
							color:
								winner.percentage > 50
									? country_1.color
									: country_2.color,
						}}
					>
						{winner.name}
					</span>
					{"'s"}
					&nbsp;chances of winning are&nbsp;
					<span
						style={{
							color:
								winner.percentage > 50
									? country_1.color
									: country_2.color,
						}}
					>
						{winner.percentage}%
					</span>
				</Typography>
			) : null}
			{componentsToShow.includes("matrix") && matrix ? (
				<Matrix
					{...matrix}
					team1={{
						name: country_1.name,
						color: country_1.color,
					}}
					team2={{
						name: country_2.name,
						color: country_2.color,
					}}
				/>
			) : null}
		</div>
	);
};

export default PredictionComparison;
