import { slugify } from "@/utils/functions";
import React from "react";

interface HomeMatchesCardGradientProps
	extends Omit<React.SVGProps<SVGSVGElement>, "id"> {
	color: string;
	id: string;
}

const HomeMatchesCardGradient: React.FC<HomeMatchesCardGradientProps> = ({
	id: originalId,
	color,
	...props
}) => {
	const id = slugify(originalId);
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="251"
			height="200"
			viewBox="0 0 251 200"
			fill="none"
			{...props}
		>
			<g filter={`url(#filter-${id})`}>
				<ellipse
					cx="45.5"
					cy="144"
					rx="95.5"
					ry="71"
					fill={`url(#paint0-linear-${id})`}
				/>
			</g>
			<defs>
				<filter
					id={`filter-${id}`}
					x="-160"
					y="-37"
					width="411"
					height="362"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					/>
					<feGaussianBlur
						stdDeviation="55"
						result={`effect1-foregroundBlur-${id}`}
					/>
				</filter>
				<linearGradient
					id={`paint0-linear-${id}`}
					x1="135.349"
					y1="119.206"
					x2="-43.1608"
					y2="163.394"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color={color} />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default HomeMatchesCardGradient;
