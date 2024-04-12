import { slugify } from "@/utils/functions";
import React from "react";

interface PredictionTeamGradientProps
	extends Omit<React.SVGProps<SVGSVGElement>, "id"> {
	color: string;
	id: string;
}

/* 
<svg xmlns="http://www.w3.org/2000/svg" width="340" height="439" viewBox="0 0 340 439" fill="none">
  <g filter="url(#filter0_f_1580_1615)">
    <ellipse cx="102" cy="88.5" rx="102" ry="88.5" transform="matrix(-1 0 0 1 188 196)" fill="url(#paint0_linear_1580_1615)"/>
  </g>
  <defs>
    <filter id="filter0_f_1580_1615" x="-236" y="-24" width="644" height="617" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="110" result="effect1_foregroundBlur_1580_1615"/>
    </filter>
    <linearGradient id="paint0_linear_1580_1615" x1="154.962" y1="68.9204" x2="78.8513" y2="74.4583" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0D56D4"/>
      <stop offset="1" stop-color="#3F97E8"/>
    </linearGradient>
  </defs>
</svg>
 */

const PredictionTeamGradient: React.FC<PredictionTeamGradientProps> = ({
	id: originalId,
	color,
	...props
}) => {
	const id = slugify(originalId);
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="340"
			height="439"
			viewBox="0 0 340 439"
			fill="none"
			{...props}
		>
			<g filter={`url(#filter-${id})`}>
				<ellipse
					cx="102"
					cy="88.5"
					rx="102"
					ry="88.5"
					transform="matrix(-1 0 0 1 188 196)"
					fill={`url(#paint0-linear-${id})`}
				/>
			</g>
			<defs>
				<filter
					id={`filter-${id}`}
					x="-236"
					y="-24"
					width="644"
					height="617"
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
						stdDeviation="110"
						result={`effect1-foregroundBlur-${id}`}
					/>
				</filter>
				<linearGradient
					id={`paint0-linear-${id}`}
					x1="154.962"
					y1="68.9204"
					x2="78.8513"
					y2="74.4583"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color={color} />
					<stop offset="1" stop-color={color} />
				</linearGradient>
			</defs>
		</svg>
	);
};

export default PredictionTeamGradient;
