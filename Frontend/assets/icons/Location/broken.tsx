import React from "react";
import { IconProps } from "../types";

export const ArrowSquare: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12.1406 15.0691V13.1091C12.1406 10.5891 14.1806 8.53906 16.7106 8.53906H18.6706"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.62109 8.55078H7.58112C10.1011 8.55078 12.1511 10.5908 12.1511 13.1208V13.7708V17.2508"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.13983 6.75L5.33984 8.55L7.13983 10.35"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.8594 6.75L18.6594 8.55L16.8594 10.35"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V13.02"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Arrow: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 22V20"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 18V16"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 14V11C12 7.13 15.13 4 19 4H22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.44922 5.60156C11.0092 6.88156 11.9992 8.83156 11.9992 11.0016V12.0016V14.0016"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 4H5"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4 2L2 4L4 6"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 2L22 4L20 6"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const DirectDown: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.07127 7.69819C1.62127 4.94819 4.55127 1.95819 7.33127 3.34819L10.5713 4.96819C11.4713 5.41819 12.5313 5.41819 13.4313 4.96819L16.6713 3.34819C19.4513 1.95819 22.3713 4.94819 20.9313 7.69819L14.8313 19.2882C13.6313 21.5682 10.3713 21.5682 9.17127 19.2882L5.50127 12.3182"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const DirectLeft: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M16.3 3.07127C19.05 1.62127 22.04 4.55127 20.65 7.33127L19.03 10.5713C18.58 11.4713 18.58 12.5313 19.03 13.4313L20.65 16.6713C22.04 19.4513 19.05 22.3713 16.3 20.9313L4.71 14.8313C2.43 13.6313 2.43 10.3713 4.71 9.17127L11.68 5.50127"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const DirectRight: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7.69819 3.07127C4.94819 1.62127 1.95819 4.55127 3.34819 7.33127L4.96819 10.5713C5.41819 11.4713 5.41819 12.5313 4.96819 13.4313L3.34819 16.6713C1.95819 19.4513 4.94819 22.3713 7.69819 20.9313L19.2882 14.8313C21.5682 13.6313 21.5682 10.3713 19.2882 9.17127L12.3182 5.50127"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const DirectUp: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M3.07127 16.3C1.62127 19.05 4.55127 22.04 7.33127 20.65L10.5713 19.03C11.4713 18.58 12.5313 18.58 13.4313 19.03L16.6713 20.65C19.4513 22.04 22.3713 19.05 20.9313 16.3L14.8313 4.71C13.6313 2.43 10.3713 2.43 9.17127 4.71L5.50127 11.68"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Discover: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.71 14.03C15.51 13.07 16 11.84 16 10.5C16 9.13 14.87 8 13.5 8C10.47 8 8 10.48 8 13.5C8 14.87 9.12 16 10.5 16"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const GlobalEdit: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 8.99908C18.08 8.02908 15.04 7.53906 12 7.53906"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 8.99982C4.59 8.46982 6.21001 8.08984 7.85001 7.83984"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.2091 15.741L15.6691 19.281C15.5291 19.421 15.3991 19.681 15.3691 19.871L15.1791 21.221C15.1091 21.711 15.4491 22.051 15.9391 21.981L17.2891 21.791C17.4791 21.761 17.7491 21.631 17.8791 21.491L21.4191 17.951C22.0291 17.341 22.3191 16.631 21.4191 15.731C20.5291 14.841 19.8191 15.131 19.2091 15.741Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const GlobalRefresh: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M21 8.99908C18.08 8.02908 15.04 7.53906 12 7.53906"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 8.99982C4.59 8.46982 6.21001 8.08984 7.85001 7.83984"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.00156 3H9.00156C7.05156 8.84 7.05156 15.16 9.00156 21H8.00156"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.5017 14.6995C19.1317 14.5895 18.7117 14.5195 18.2517 14.5195C16.1817 14.5195 14.5117 16.1995 14.5117 18.2595C14.5117 20.3295 16.1917 21.9995 18.2517 21.9995C20.3117 21.9995 21.9917 20.3195 21.9917 18.2595C21.9917 17.4895 21.7617 16.7695 21.3617 16.1795"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.043 14.8011L18.793 13.3711"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.0421 14.8008L18.582 15.8608"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const GlobalSearch: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.00156 3H9.00156C7.05156 8.84 7.05156 15.16 9.00156 21H8.00156"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 16V15C5.92 15.97 8.96 16.46 12 16.46"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 8.99908C18.08 8.02908 15.04 7.53906 12 7.53906"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 8.99982C4.59 8.46982 6.21001 8.08984 7.85001 7.83984"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.2 21.4C19.9673 21.4 21.4 19.9673 21.4 18.2C21.4 16.4327 19.9673 15 18.2 15C16.4327 15 15 16.4327 15 18.2C15 19.9673 16.4327 21.4 18.2 21.4Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 22L21 21"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Global: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.53906 12C7.53906 15.04 8.02906 18.08 8.99906 21H7.99906"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.99844 3H8.99844C8.50844 4.46 8.14844 5.95 7.89844 7.46"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16.13 16.3594C15.88 17.9194 15.51 19.4794 15 20.9994"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 9.00156C8.84 7.05156 15.16 7.05156 21 9.00156"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const GpsSlash: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9 18.88C9.92 19.28 10.93 19.5 12 19.5C16.14 19.5 19.5 16.14 19.5 12C19.5 10.93 19.28 9.92 18.88 9"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.77 10.0117C4.59 10.6417 4.5 11.3117 4.5 12.0017C4.5 14.0117 5.29 15.8417 6.58 17.1917"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.21 6.6C15.86 5.3 14.02 4.5 12 4.5C10.08 4.5 8.33 5.22 7 6.41"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 4V2"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4 12H2"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 20V22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 12H22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M14.12 9.88L9.88 14.12C9.34 13.58 9 12.83 9 12C9 10.34 10.34 9 12 9C12.83 9 13.58 9.34 14.12 9.88Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 2L2 22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Gps: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.5 5.36505C9.54486 4.81273 10.7359 4.5 12 4.5C16.1421 4.5 19.5 7.85786 19.5 12C19.5 16.1421 16.1421 19.5 12 19.5C7.85786 19.5 4.5 16.1421 4.5 12C4.5 10.7359 4.81273 9.54486 5.36505 8.5"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 4V2"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4 12H2"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 20V22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20 12H22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const LocationAdd: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.25 11H14.75"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M12 13.75V8.25"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const LocationCross: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.9991 12.96L10.0391 9"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.96 9.03906L10 12.9991"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const LocationMinus: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.25 11H14.75"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const LocationSlash: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M10.4189 13.0014C9.49891 12.4614 8.87891 11.4614 8.87891 10.3114C8.87891 8.59141 10.2689 7.19141 11.9989 7.19141C13.1489 7.19141 14.1489 7.81141 14.6889 8.74141"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.51172 3.84166C10.0517 1.05166 15.7117 1.43166 18.6817 4.98166"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.9891 17.8083C4.1491 15.2983 2.8091 12.0883 3.6291 8.48828"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.3806 8.5C21.5306 13.58 18.3706 17.88 15.6006 20.54C13.5906 22.48 10.4106 22.48 8.39062 20.54"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M22 2L2 22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const LocationTick: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M9.25 11.5L10.75 13L14.75 9"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Location: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M15.1189 10.3114C15.1189 12.0314 13.7289 13.4314 11.9989 13.4314C10.2689 13.4314 8.87891 12.0414 8.87891 10.3114C8.87891 8.58141 10.2789 7.19141 11.9989 7.19141C12.3389 7.19141 12.6689 7.24141 12.9689 7.34141"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Map1: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.26906 5.49193L3.29906 6.05193C2.74906 6.37193 2.28906 7.15193 2.28906 7.79193V17.5219C2.28906 19.4219 3.63906 20.2019 5.27906 19.2619L7.62906 17.9219C8.13906 17.6319 8.98906 17.6019 9.51906 17.8719L14.7691 20.5019C15.2991 20.7619 16.1491 20.7419 16.6591 20.4519L20.9891 17.9719C21.5391 17.6519 21.9991 16.8719 21.9991 16.2319V6.49193C21.9991 4.59193 20.6491 3.81193 19.0091 4.75193L16.6591 6.09193C16.1491 6.38193 15.2991 6.41193 14.7691 6.14193L9.51906 3.52193C8.98906 3.26193 8.13906 3.28193 7.62906 3.57193"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.55859 4V17"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.7305 6.62109V20.0011"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Map: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 8.99953V14.9995C22 17.4995 21.5 19.2495 20.38 20.3795L14 13.9995L21.73 6.26953C21.91 7.05953 22 7.95953 22 8.99953Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 9C2 4 4 2 9 2H15C18.96 2 21.04 3.26 21.73 6.27L6.26999 21.73C3.25999 21.04 2 18.96 2 15V12.94"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.3795 20.38C19.2495 21.5 17.4995 22 14.9995 22H8.99954C7.95954 22 7.05953 21.91 6.26953 21.73L13.9995 14L20.3795 20.38Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.24124 7.97875C6.92124 5.04875 11.3212 5.04875 12.0012 7.97875C12.3912 9.69875 11.3112 11.1588 10.3612 12.0588C9.67123 12.7188 8.58125 12.7188 7.88125 12.0588C6.93125 11.1588 5.84124 9.69875 6.24124 7.97875Z"
				stroke="#292D32"
				strokeWidth="1.5"
			/>
			<path
				d="M9.09607 8.69922H9.10505"
				stroke="#292D32"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const PictureFrame: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M22 11V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 2L13.95 22"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.53 12.2188L2 14.9987"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Radar2: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 12.0009L3.32999 7.02094C2.48999 8.49094 2 10.1909 2 12.0009C2 17.5209 6.48 22.0009 12 22.0009C17.52 22.0009 22 17.5209 22 12.0009C22 9.95095 21.38 8.04094 20.32 6.46094"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6 4C7.67 2.75 9.75 2 12 2C13.88 2 15.63 2.52001 17.13 3.42001"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.82999 8.95999C6.29999 9.84999 6 10.89 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C11.09 6 10.22 6.20001 9.45001 6.57001"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Radar: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M20.32 6.46094C21.38 8.05094 22 9.95095 22 12.0009C22 17.5209 17.52 22.0009 12 22.0009C6.48 22.0009 2 17.5209 2 12.0009C2 10.1909 2.47999 8.49094 3.32999 7.02094L12 12.0009"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6 4C7.67 2.75 9.75 2 12 2C13.93 2 15.73 2.53999 17.25 3.48999"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const RouteSquare: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.3509 9.05077L15.0109 16.5908C14.4509 18.3808 11.9409 18.4108 11.3509 16.6308L10.651 14.5608C10.461 13.9908 10.0109 13.5308 9.44095 13.3508L7.36095 12.6508C5.59095 12.0608 5.62095 9.53077 7.41095 8.99077L14.951 6.64077C16.431 6.19077 17.8209 7.58077 17.3509 9.05077Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Routing2: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M5.46875 9C7.40175 9 8.96875 7.433 8.96875 5.5C8.96875 3.567 7.40175 2 5.46875 2C3.53575 2 1.96875 3.567 1.96875 5.5C1.96875 7.433 3.53575 9 5.46875 9Z"
				stroke="#292D32"
				strokeWidth="1.5"
			/>
			<path
				d="M19.9687 22H16.9687C15.8687 22 14.9688 21.1 14.9688 20V17C14.9688 15.9 15.8687 15 16.9687 15H19.9687C21.0687 15 21.9687 15.9 21.9687 17V19"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.0017 5H14.6817C16.5317 5 17.3917 7.29 16.0017 8.51L8.01165 15.5C6.62165 16.71 7.48165 19 9.32165 19H12.0017"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.48768 5.5H5.49924"
				stroke="#292D32"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.4877 18.5H18.4992"
				stroke="#292D32"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Routing: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6.94003 9.41891C6.12003 10.1989 4.83003 10.1889 4.01003 9.41891C2.89003 8.34891 1.60002 6.62891 2.07002 4.59891C2.87002 1.13891 8.08003 1.13891 8.87003 4.59891C8.99003 5.08891 9.00002 5.54891 8.94002 5.99891"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.07 16.5989C15.87 13.1389 21.11 13.1389 21.91 16.5989C22.38 18.6289 21.09 20.3489 19.96 21.4189C19.14 22.1989 17.84 22.1889 17.02 21.4189C15.89 20.3489 14.6 18.6289 15.07 16.5989Z"
				stroke="#292D32"
				strokeWidth="1.5"
			/>
			<path
				d="M11.9997 5H14.6797C16.5297 5 17.3897 7.29 15.9997 8.51L8.0097 15.5C6.6197 16.71 7.4797 19 9.3197 19H11.9997"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.9997 5H14.6797C16.5297 5 17.3897 7.29 15.9997 8.51L8.0097 15.5C6.6197 16.71 7.4797 19 9.3197 19H11.9997"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.48573 5.5H5.49728"
				stroke="#292D32"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.4857 17.5H18.4973"
				stroke="#292D32"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
