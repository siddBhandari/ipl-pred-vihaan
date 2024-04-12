import React from "react";
import { IconProps } from "../types";

export const Additem: React.FC<IconProps> = ({ ...props }) => {
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
				opacity="0.4"
				d="M8 16H5.43C3.14 16 2 14.86 2 12.57V5.43C2 3.14 3.14 2 5.43 2H10C12.29 2 13.43 3.14 13.43 5.43"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.5703 22H14.0003C11.7103 22 10.5703 20.86 10.5703 18.57V11.43C10.5703 9.14 11.7103 8 14.0003 8H18.5703C20.8603 8 22.0003 9.14 22.0003 11.43V18.57C22.0003 20.86 20.8603 22 18.5703 22Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g opacity="0.4">
				<path
					d="M14.8691 15H18.1291"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16.5 16.6311V13.3711"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export const BackwardItem: React.FC<IconProps> = ({ ...props }) => {
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
				d="M22 5.14999V7.85001C22 10.1 21.1 11 18.85 11H16.15C13.9 11 13 10.1 13 7.85001V5.14999C13 2.89999 13.9 2 16.15 2H18.85C21.1 2 22 2.89999 22 5.14999Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11 16.15V18.85C11 21.1 10.1 22 7.85 22H5.15C2.9 22 2 21.1 2 18.85V16.15C2 13.9 2.9 13 5.15 13H7.85C10.1 13 11 13.9 11 16.15Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M17.3791 11.0011V13.6211C17.3791 16.3111 16.3091 17.3811 13.6191 17.3811H10.9991V16.1511C10.9991 13.9011 10.0991 13.0011 7.84914 13.0011H6.61914V10.3811C6.61914 7.6911 7.68914 6.62109 10.3791 6.62109H12.9991V7.8511C12.9991 10.1011 13.8991 11.0011 16.1491 11.0011H17.3791Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Bezier: React.FC<IconProps> = ({ ...props }) => {
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
				d="M3 9C4.10457 9 5 8.10457 5 7C5 5.89543 4.10457 5 3 5C1.89543 5 1 5.89543 1 7C1 8.10457 1.89543 9 3 9Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 9C22.1046 9 23 8.10457 23 7C23 5.89543 22.1046 5 21 5C19.8954 5 19 5.89543 19 7C19 8.10457 19.8954 9 21 9Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19 7H15"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9 7H5"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.5 16.5V18.5C7.5 19.11 7.13 19.64 6.61 19.86C6.42 19.95 6.22 20 6 20H4C3.17 20 2.5 19.33 2.5 18.5V16.5C2.5 15.67 3.17 15 4 15H6C6.83 15 7.5 15.67 7.5 16.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21.5 16.5V18.5C21.5 19.33 20.83 20 20 20H18C17.78 20 17.58 19.95 17.39 19.86C16.87 19.64 16.5 19.11 16.5 18.5V16.5C16.5 15.67 17.17 15 18 15H20C20.83 15 21.5 15.67 21.5 16.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15 5.5V8.5C15 9.32 14.32 10 13.5 10H10.5C9.68 10 9 9.32 9 8.5V5.5C9 4.68 9.68 4 10.5 4H13.5C14.32 4 15 4.68 15 5.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M15 7.73047C17.37 8.93047 19 11.5105 19 14.5005C19 14.6705 18.99 14.8305 18.97 15.0005"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M5.03 15.0005C5.01 14.8305 5 14.6705 5 14.5005C5 11.5105 6.63 8.93047 9 7.73047"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Blend2: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M14.9707 8C14.9707 11.87 11.8407 15 7.9707 15C7.6507 15 7.3407 14.98 7.0407 14.93C3.6107 14.48 0.970703 11.55 0.970703 8C0.970703 4.13 4.1007 1 7.9707 1C11.5207 1 14.4507 3.64 14.9007 7.07C14.9507 7.37 14.9707 7.68 14.9707 8Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M20.971 14.0003C20.971 17.8703 17.841 21.0003 13.971 21.0003C10.421 21.0003 7.49102 18.3603 7.04102 14.9303C7.34102 14.9803 7.65102 15.0003 7.97102 15.0003C11.841 15.0003 14.971 11.8703 14.971 8.00031C14.971 7.68031 14.951 7.37031 14.901 7.07031C18.331 7.52031 20.971 10.4503 20.971 14.0003Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M13.1211 13.1211L14.4311 14.4111"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M15.9707 11L14.9707 10"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M10.9707 16L9.9707 15"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Blend: React.FC<IconProps> = ({ ...props }) => {
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
				opacity="0.4"
				d="M21.9707 12C21.9707 15.31 19.2807 18 15.9707 18C14.4307 18 13.0307 17.42 11.9707 16.46C13.2007 15.37 13.9707 13.77 13.9707 12C13.9707 10.23 13.2007 8.63 11.9707 7.54C13.0307 6.58 14.4307 6 15.9707 6C19.2807 6 21.9707 8.69 21.9707 12Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.9707 12C13.9707 13.77 13.2007 15.37 11.9707 16.46C10.9107 17.42 9.5107 18 7.9707 18C4.6607 18 1.9707 15.31 1.9707 12C1.9707 8.69 4.6607 6 7.9707 6C9.5107 6 10.9107 6.58 11.9707 7.54C13.2007 8.63 13.9707 10.23 13.9707 12Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Blur: React.FC<IconProps> = ({ ...props }) => {
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
				d="M12.6103 2.21C12.2503 1.93 11.7503 1.93 11.3903 2.21C9.49032 3.66 3.88028 8.39 3.91028 13.9C3.91028 18.36 7.54031 22 12.0103 22C16.4803 22 20.1103 18.37 20.1103 13.91C20.1203 8.48 14.5003 3.67 12.6103 2.21Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
			/>
			<g opacity="0.4">
				<path
					d="M12 2V22"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 18.9587L19.7 15.2188"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 13.9589L19.37 10.3789"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 8.96172L17.03 6.51172"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export const Brush1: React.FC<IconProps> = ({ ...props }) => {
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
				d="M21.8095 3.94183C20.2695 7.78183 16.4095 13.0018 13.1795 15.5918L11.2095 17.1718C10.9595 17.3518 10.7095 17.5118 10.4295 17.6218C10.4295 17.4418 10.4195 17.2418 10.3895 17.0518C10.2795 16.2118 9.89953 15.4318 9.22953 14.7618C8.54953 14.0818 7.71953 13.6818 6.86953 13.5718C6.66953 13.5618 6.46953 13.5418 6.26953 13.5618C6.37953 13.2518 6.54953 12.9618 6.75953 12.7218L8.31953 10.7518C10.8995 7.52183 16.1395 3.64183 19.9695 2.11183C20.5595 1.89183 21.1295 2.05183 21.4895 2.42183C21.8695 2.79183 22.0495 3.36183 21.8095 3.94183Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.4293 17.6188C10.4293 18.7188 10.0093 19.7688 9.2193 20.5688C8.6093 21.1788 7.7793 21.5988 6.7893 21.7288L4.3293 21.9988C2.9893 22.1488 1.8393 21.0088 1.9993 19.6488L2.2693 17.1888C2.5093 14.9988 4.3393 13.5988 6.2793 13.5588C6.4793 13.5488 6.6893 13.5588 6.8793 13.5688C7.7293 13.6788 8.5593 14.0688 9.2393 14.7588C9.9093 15.4288 10.2893 16.2088 10.3993 17.0488C10.4093 17.2388 10.4293 17.4288 10.4293 17.6188Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M14.2398 14.4683C14.2398 11.8583 12.1198 9.73828 9.50977 9.73828"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Brush2: React.FC<IconProps> = ({ ...props }) => {
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
				opacity="0.4"
				d="M10.9707 2H8.9707C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V13"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21.8795 3.56022C20.6495 6.63022 17.5595 10.8102 14.9795 12.8802L13.3995 14.1402C13.1995 14.2902 12.9995 14.4102 12.7695 14.5002C12.7695 14.3502 12.7595 14.2002 12.7395 14.0402C12.6495 13.3702 12.3495 12.7402 11.8095 12.2102C11.2595 11.6602 10.5995 11.3502 9.91945 11.2602C9.75945 11.2502 9.59945 11.2402 9.43945 11.2502C9.52945 11.0002 9.65945 10.7702 9.82945 10.5802L11.0895 9.00022C13.1595 6.42022 17.3495 3.31022 20.4095 2.08022C20.8795 1.90022 21.3395 2.04022 21.6295 2.33022C21.9295 2.63022 22.0695 3.09022 21.8795 3.56022Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12.7801 14.4885C12.7801 15.3685 12.4401 16.2085 11.8101 16.8485C11.3201 17.3385 10.6601 17.6785 9.87009 17.7785L7.90009 17.9885C6.83009 18.1085 5.91009 17.1985 6.03009 16.1085L6.24009 14.1385C6.43009 12.3885 7.89009 11.2685 9.45009 11.2385C9.61009 11.2285 9.77009 11.2385 9.93009 11.2485C10.6101 11.3385 11.2701 11.6485 11.8201 12.1985C12.3601 12.7385 12.6601 13.3585 12.7501 14.0285C12.7701 14.1885 12.7801 14.3485 12.7801 14.4885Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M15.8193 11.9814C15.8193 9.89141 14.1293 8.19141 12.0293 8.19141"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Brush3: React.FC<IconProps> = ({ ...props }) => {
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
				d="M9.5 19.5V18H4.5C3.95 18 3.45 17.78 3.09 17.41C2.72 17.05 2.5 16.55 2.5 16C2.5 14.97 3.3 14.11 4.31 14.01C4.37 14 4.43 14 4.5 14H19.5C19.57 14 19.63 14 19.69 14.01C20.17 14.05 20.59 14.26 20.91 14.59C21.32 14.99 21.54 15.56 21.49 16.18C21.4 17.23 20.45 18 19.39 18H14.5V19.5C14.5 20.88 13.38 22 12 22C10.62 22 9.5 20.88 9.5 19.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g opacity="0.4">
				<path
					d="M20.1702 5.3L19.6902 14.01C19.6302 14 19.5702 14 19.5002 14H4.50016C4.43016 14 4.37016 14 4.31016 14.01L3.83016 5.3C3.65016 3.53 5.04016 2 6.81016 2H17.1902C18.9602 2 20.3502 3.53 20.1702 5.3Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7.99023 2V7"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 2V4"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export const Brush4: React.FC<IconProps> = ({ ...props }) => {
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
				opacity="0.4"
				d="M10 16C10 14.34 10 13 13 13H17C20 13 20 12 20 10V8C20 6 20 5 17 5H16"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.9992 2H7.99922C7.34922 3.95 7.34922 6.05 7.99922 8H11.9992C12.6492 6.05 12.6492 3.95 11.9992 2Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8 2H7C5 2 4 3 4 5C4 7 5 8 7 8H8C7 6 7 4 8 2Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13 2H12C13 4 13 6 12 8H13C15 8 16 7 16 5C16 3 15 2 13 2Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M9.5 22H10.5C12 22 12 21 12 20.5V17.5C12 17 12 16 10.5 16H9.5C8 16 8 17 8 17.5V20.5C8 21 8 22 9.5 22Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Brush: React.FC<IconProps> = ({ ...props }) => {
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
				opacity="0.4"
				d="M6 2H18C19.1 2 20 2.9 20 4V8.32001H4V4C4 2.9 4.9 2 6 2Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4 8.32031V11.8803C4 12.9603 4.58003 13.9603 5.53003 14.4903L8.48999 16.1603C9.11999 16.5103 9.51001 17.1803 9.51001 17.9003V20.0003C9.51001 21.1003 10.41 22.0003 11.51 22.0003H12.51C13.61 22.0003 14.51 21.1003 14.51 20.0003V17.9003C14.51 17.1803 14.9 16.5103 15.53 16.1603L18.49 14.4903C19.43 13.9603 20.02 12.9603 20.02 11.8803V8.32031H4Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const BucketCircle: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.4">
				<path
					d="M9.40994 15.9496L7.01992 13.5598C6.21992 12.7598 6.21992 11.9597 7.01992 11.1697L11.0099 7.17969L15.3999 11.5697C15.6199 11.7897 15.6199 12.1497 15.3999 12.3697L11.8099 15.9597C11.0099 16.7497 10.2099 16.7496 9.40994 15.9496Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M10.2109 6.37891L11.011 7.17889"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6.46094 12.3275L15.4909 11.9375"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M16.4711 14.168C16.4711 14.168 15.3711 15.3679 15.3711 16.0979C15.3711 16.7079 15.8711 17.1979 16.4711 17.1979C17.0811 17.1979 17.5711 16.6979 17.5711 16.0979C17.5811 15.3579 16.4711 14.168 16.4711 14.168Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const BucketSquare: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.4">
				<path
					d="M8.93931 16.9308L6.1093 14.1008C5.1693 13.1608 5.1693 12.2108 6.1093 11.2708L10.8293 6.55078L16.0193 11.7408C16.2793 12.0008 16.2793 12.4208 16.0193 12.6808L11.7693 16.9308C10.8293 17.8708 9.87931 17.8708 8.93931 16.9308Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M9.87891 5.60156L10.8289 6.54156"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.43945 12.6418L16.1295 12.1719"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.3002 14.8125C17.3002 14.8125 15.9902 16.2324 15.9902 17.1024C15.9902 17.8224 16.5802 18.4125 17.3002 18.4125C18.0202 18.4125 18.6102 17.8224 18.6102 17.1024C18.6002 16.2324 17.3002 14.8125 17.3002 14.8125Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Bucket: React.FC<IconProps> = ({ ...props }) => {
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
				d="M7.00914 18.0008L2.99914 13.9908C1.65914 12.6508 1.65914 11.3208 2.99914 9.98077L9.67914 3.30078L17.0291 10.6508C17.3991 11.0208 17.3991 11.6208 17.0291 11.9908L11.0091 18.0108C9.68914 19.3308 8.34914 19.3308 7.00914 18.0008Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.34961 1.94922L9.68961 3.28918"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M2.07031 11.9217L17.1903 11.2617"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3 22H16"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const ColorSwatch: React.FC<IconProps> = ({ ...props }) => {
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
				d="M10 4.5V18C10 19.08 9.55999 20.07 8.85999 20.79L8.82001 20.83C8.73001 20.92 8.63001 21.01 8.54001 21.08C8.24001 21.34 7.89999 21.54 7.54999 21.68C7.43999 21.73 7.33 21.77 7.22 21.81C6.83 21.94 6.41 22 6 22C5.73 22 5.46001 21.97 5.20001 21.92C5.07001 21.89 4.94 21.86 4.81 21.82C4.65 21.77 4.50001 21.72 4.35001 21.65C4.35001 21.64 4.35 21.64 4.34 21.65C4.06 21.51 3.79001 21.35 3.54001 21.16L3.53 21.15C3.4 21.05 3.28001 20.95 3.17001 20.83C3.06001 20.71 2.95 20.59 2.84 20.46C2.65 20.21 2.49001 19.94 2.35001 19.66C2.36001 19.65 2.36001 19.65 2.35001 19.65C2.35001 19.65 2.35 19.64 2.34 19.63C2.28 19.49 2.22999 19.34 2.17999 19.19C2.13999 19.06 2.10999 18.93 2.07999 18.8C2.02999 18.54 2 18.27 2 18V4.5C2 3 3 2 4.5 2H7.5C9 2 10 3 10 4.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M22 16.5V19.5C22 21 21 22 19.5 22H6C6.41 22 6.83 21.94 7.22 21.81C7.33 21.77 7.43999 21.73 7.54999 21.68C7.89999 21.54 8.24001 21.34 8.54001 21.08C8.63001 21.01 8.73001 20.92 8.82001 20.83L8.85999 20.79L15.66 14H19.5C21 14 22 15 22 16.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.80969 21.8214C4.20969 21.6414 3.63971 21.3114 3.16971 20.8314C2.68971 20.3614 2.35969 19.7914 2.17969 19.1914C2.56969 20.4414 3.55969 21.4314 4.80969 21.8214Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.3694 11.2909L15.6594 14.0009L8.85938 20.7909C9.55937 20.0709 9.99939 19.0809 9.99939 18.0009V8.34093L12.7094 5.63094C13.7694 4.57094 15.1894 4.57094 16.2494 5.63094L18.3694 7.75093C19.4294 8.81093 19.4294 10.2309 18.3694 11.2909Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M6 19C6.55228 19 7 18.5523 7 18C7 17.4477 6.55228 17 6 17C5.44772 17 5 17.4477 5 18C5 18.5523 5.44772 19 6 19Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Colorfilter: React.FC<IconProps> = ({ ...props }) => {
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
				d="M14 16.0009C14 17.7709 13.23 19.3709 12 20.4609C10.94 21.4209 9.54 22.0009 8 22.0009C4.69 22.0009 2 19.3109 2 16.0009C2 13.2409 3.88 10.9009 6.42 10.2109C7.11 11.9509 8.59 13.2909 10.42 13.7909C10.92 13.9309 11.45 14.0009 12 14.0009C12.55 14.0009 13.08 13.9309 13.58 13.7909C13.85 14.4709 14 15.2209 14 16.0009Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18 8C18 8.78 17.85 9.53 17.58 10.21C16.89 11.95 15.41 13.29 13.58 13.79C13.08 13.93 12.55 14 12 14C11.45 14 10.92 13.93 10.42 13.79C8.59 13.29 7.11 11.95 6.42 10.21C6.15 9.53 6 8.78 6 8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M22 16.0009C22 19.3109 19.31 22.0009 16 22.0009C14.46 22.0009 13.06 21.4209 12 20.4609C13.23 19.3709 14 17.7709 14 16.0009C14 15.2209 13.85 14.4709 13.58 13.7909C15.41 13.2909 16.89 11.9509 17.58 10.2109C20.12 10.9009 22 13.2409 22 16.0009Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const ColorsSquare: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.4">
				<path
					d="M13.2 14.3997C13.2 15.4597 12.74 16.4197 12 17.0797C11.36 17.6597 10.52 17.9997 9.59998 17.9997C7.60998 17.9997 6 16.3897 6 14.3997C6 12.7397 7.13002 11.3397 8.65002 10.9297C9.06002 11.9697 9.94999 12.7797 11.05 13.0797C11.35 13.1597 11.67 13.2097 12 13.2097C12.33 13.2097 12.65 13.1697 12.95 13.0797C13.11 13.4797 13.2 13.9297 13.2 14.3997Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M15.6003 9.6C15.6003 10.07 15.5103 10.52 15.3503 10.93C14.9403 11.97 14.0504 12.78 12.9504 13.08C12.6504 13.16 12.3304 13.21 12.0004 13.21C11.6704 13.21 11.3504 13.17 11.0504 13.08C9.95035 12.78 9.06039 11.98 8.65039 10.93C8.49039 10.52 8.40039 10.07 8.40039 9.6C8.40039 7.61 10.0104 6 12.0004 6C13.9904 6 15.6003 7.61 15.6003 9.6Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18 14.4019C18 16.3919 16.39 18.0019 14.4 18.0019C13.48 18.0019 12.64 17.6519 12 17.0819C12.74 16.4319 13.2 15.4719 13.2 14.4019C13.2 13.9319 13.11 13.4819 12.95 13.0719C14.05 12.7719 14.94 11.9719 15.35 10.9219C16.87 11.3419 18 12.7419 18 14.4019Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Component: React.FC<IconProps> = ({ ...props }) => {
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
				d="M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const CopySuccess: React.FC<IconProps> = ({ ...props }) => {
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
				opacity="0.4"
				d="M22 11.1V6.9C22 3.4 20.6 2 17.1 2H12.9C9.4 2 8 3.4 8 6.9V8H11.1C14.6 8 16 9.4 16 12.9V16H17.1C20.6 16 22 14.6 22 11.1Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M16 17.1V12.9C16 9.4 14.6 8 11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.08008 15.0008L8.03008 16.9508L11.9201 13.0508"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Copy: React.FC<IconProps> = ({ ...props }) => {
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
				d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Designtools: React.FC<IconProps> = ({ ...props }) => {
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
				d="M10.4293 17.6188C10.4293 18.7188 10.0093 19.7688 9.2193 20.5688C8.6093 21.1788 7.7793 21.5988 6.7893 21.7288L4.3293 21.9988C2.9893 22.1488 1.8393 21.0088 1.9993 19.6488L2.2693 17.1888C2.5093 14.9988 4.3393 13.5988 6.2793 13.5588C6.4793 13.5488 6.6893 13.5588 6.8793 13.5688C7.7293 13.6788 8.5593 14.0688 9.2393 14.7588C9.9093 15.4288 10.2893 16.2088 10.3993 17.0488C10.4093 17.2388 10.4293 17.4288 10.4293 17.6188Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g opacity="0.4">
				<path
					d="M21.8095 3.93792C20.2695 7.77792 16.4095 12.9979 13.1795 15.5879L11.2095 17.1679C10.9595 17.3479 10.7095 17.5079 10.4295 17.6179C10.4295 17.4379 10.4195 17.2379 10.3895 17.0479C10.2795 16.2079 9.89953 15.4279 9.22953 14.7579C8.54953 14.0779 7.71953 13.6779 6.86953 13.5679C6.66953 13.5579 6.46953 13.5379 6.26953 13.5579C6.37953 13.2479 6.54953 12.9579 6.75953 12.7179L8.31953 10.7479C10.8995 7.51792 16.1395 3.63792 19.9695 2.10792C20.5595 1.88792 21.1295 2.04792 21.4895 2.41792C21.8695 2.78792 22.0495 3.35792 21.8095 3.93792Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.2398 14.4683C14.2398 11.8583 12.1198 9.73828 9.50977 9.73828"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M20.1207 12.7305L20.8607 13.4605C22.3507 14.9505 22.3507 16.4205 20.8607 17.9105L17.9007 20.8705C16.4307 22.3405 14.9407 22.3405 13.4707 20.8705"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M3.11031 10.5086C1.64031 9.01859 1.64031 7.54859 3.11031 6.05859L6.07031 3.09859C7.54031 1.62859 9.03031 1.62859 10.5003 3.09859L11.2403 3.83859"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M11.2508 3.85156L7.55078 7.55156"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M20.1202 12.7305L17.1602 15.6805"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export const Eraser: React.FC<IconProps> = ({ ...props }) => {
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
				d="M9 22H21"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2.9107 17.5787L6.42071 21.0887C7.59071 22.2587 9.5007 22.2587 10.6607 21.0887L21.0908 10.6587C22.2608 9.48875 22.2608 7.57874 21.0908 6.41874L17.5807 2.90875C16.4107 1.73875 14.5008 1.73875 13.3408 2.90875L2.9107 13.3387C1.7407 14.4987 1.7407 16.4087 2.9107 17.5787Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g opacity="0.4">
				<path
					d="M7.11914 9.12891L14.8691 16.8789"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M3.51953 17.66L9.16949 12"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M6.33984 20.4881L11.9998 14.8281"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export const FlashCircle: React.FC<IconProps> = ({ ...props }) => {
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
				opacity="0.4"
				d="M8.67938 11.9098L10.3294 12.3198L9.37939 16.1599C9.15939 17.0599 9.59937 17.3598 10.3594 16.8298L15.5394 13.2398C16.1694 12.7998 16.0794 12.2898 15.3294 12.0998L13.6794 11.6898L14.6294 7.84981C14.8494 6.94981 14.4094 6.64983 13.6494 7.17983L8.46939 10.7699C7.83939 11.2099 7.92938 11.7198 8.67938 11.9098Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const ForwardItem: React.FC<IconProps> = ({ ...props }) => {
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
				d="M17.3794 10.3794V13.6094C17.3794 16.2994 16.2994 17.3794 13.6094 17.3794H10.3794C7.68938 17.3794 6.60938 16.2994 6.60938 13.6094V10.3794C6.60938 7.68939 7.68938 6.60938 10.3794 6.60938H13.6094C16.3094 6.61937 17.3794 7.68939 17.3794 10.3794Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M22.0005 5.76999V9C22.0005 11.69 20.9205 12.77 18.2305 12.77H17.3805V10.39C17.3805 7.70001 16.3005 6.62 13.6105 6.62H11.2305V5.76999C11.2305 3.07999 12.3105 2 15.0005 2H18.2305C20.9205 2 22.0005 3.07999 22.0005 5.76999Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M2 18.2305V15.0005C2 12.3105 3.08 11.2305 5.77 11.2305H6.62V13.6104C6.62 16.3004 7.7 17.3805 10.39 17.3805H12.77V18.2305C12.77 20.9205 11.69 22.0005 9 22.0005H5.77C3.08 22.0005 2 20.9205 2 18.2305Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Glass: React.FC<IconProps> = ({ ...props }) => {
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
				d="M8.16077 22C3.98077 22 3.14077 19.47 4.50077 16.39L8.75077 6.74H8.45077C7.80077 6.74 7.20077 6.48 6.77077 6.05C6.33077 5.62 6.07077 5.02 6.07077 4.37C6.07077 3.07 7.13077 2 8.44077 2H15.5508C16.2108 2 16.8008 2.27 17.2308 2.7C17.7908 3.26 18.0708 4.08 17.8608 4.95C17.5908 6.03 16.5508 6.74 15.4408 6.74H15.2808L19.5008 16.4C20.8508 19.48 19.9708 22 15.8308 22H8.16077Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M5.93945 13.1194C5.93945 13.1194 8.99945 12.9994 11.9995 13.9994C14.9995 14.9994 17.8295 13.1094 17.8295 13.1094"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Layer: React.FC<IconProps> = ({ ...props }) => {
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
				d="M13.0095 2.92031L18.9095 5.54031C20.6095 6.29031 20.6095 7.53031 18.9095 8.28031L13.0095 10.9003C12.3395 11.2003 11.2395 11.2003 10.5695 10.9003L4.66953 8.28031C2.96953 7.53031 2.96953 6.29031 4.66953 5.54031L10.5695 2.92031C11.2395 2.62031 12.3395 2.62031 13.0095 2.92031Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M3 11C3 11.84 3.63 12.81 4.4 13.15L11.19 16.17C11.71 16.4 12.3 16.4 12.81 16.17L19.6 13.15C20.37 12.81 21 11.84 21 11"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M3 16C3 16.93 3.55 17.77 4.4 18.15L11.19 21.17C11.71 21.4 12.3 21.4 12.81 21.17L19.6 18.15C20.45 17.77 21 16.93 21 16"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Lifebuoy: React.FC<IconProps> = ({ ...props }) => {
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
				d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M4.90039 4.92969L8.44039 8.45969"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M4.90039 19.0691L8.44039 15.5391"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M19.0498 19.0691L15.5098 15.5391"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M19.0498 4.92969L15.5098 8.45969"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Magicpen: React.FC<IconProps> = ({ ...props }) => {
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
				d="M3.49945 20.5014C4.32945 21.3314 5.66945 21.3314 6.49945 20.5014L19.4995 7.50141C20.3295 6.67141 20.3295 5.33141 19.4995 4.50141C18.6695 3.67141 17.3295 3.67141 16.4995 4.50141L3.49945 17.5014C2.66945 18.3314 2.66945 19.6714 3.49945 20.5014Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M18.0098 8.98828L15.0098 5.98828"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M8.5 2.44L10 2L9.56 3.5L10 5L8.5 4.56L7 5L7.44 3.5L7 2L8.5 2.44Z"
				stroke="#292D32"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M4.5 8.44L6 8L5.56 9.5L6 11L4.5 10.56L3 11L3.44 9.5L3 8L4.5 8.44Z"
				stroke="#292D32"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M19.5 13.44L21 13L20.56 14.5L21 16L19.5 15.56L18 16L18.44 14.5L18 13L19.5 13.44Z"
				stroke="#292D32"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const MainComponent: React.FC<IconProps> = ({ ...props }) => {
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
				d="M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g opacity="0.4">
				<path
					d="M6.25 6.25L17.75 17.75"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M17.75 6.25L6.25 17.75"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export const Mask1: React.FC<IconProps> = ({ ...props }) => {
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
			<g opacity="0.4">
				<path
					d="M17 12C17 14.76 14.76 17 12 17V7C14.76 7 17 9.24 17 12Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 7V17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 22V17"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 7V2"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export const Mask2: React.FC<IconProps> = ({ ...props }) => {
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
				d="M21.9693 12.0013C21.9693 14.9413 20.6893 17.6012 18.6493 19.4112C16.8893 21.0112 14.5593 21.9712 11.9993 21.9712C6.4993 21.9712 2.0293 17.5013 2.0293 12.0013C2.0293 6.50125 6.4993 2.03125 11.9993 2.03125C14.5593 2.03125 16.8893 2.99125 18.6493 4.59125C20.6893 6.40125 21.9693 9.06125 21.9693 12.0013Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M11.9693 16.3883C11.9493 18.0383 10.7193 18.4383 9.5693 17.9783C7.1993 17.0283 5.5293 14.7083 5.5293 11.9983C5.5293 9.28829 7.1993 6.96829 9.5693 6.00829C10.7193 5.54829 11.9493 5.95829 11.9693 7.59829V16.3883Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Mask: React.FC<IconProps> = ({ ...props }) => {
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
				d="M4.92999 19.07C3.11999 17.26 2 14.76 2 12C2 6.48 6.48 2 12 2C14.76 2 17.26 3.12 19.07 4.93"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.0697 4.92969C20.8797 6.73969 21.9997 9.23969 21.9997 11.9997C21.9997 17.5197 17.5197 21.9997 11.9997 21.9997C9.23969 21.9997 6.73969 20.8797 4.92969 19.0697"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g opacity="0.4">
				<path
					d="M19.0697 4.92969L4.92969 19.0697"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7.75977 16.2383L13.4097 21.8983"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.2891 12.7109L17.8691 19.2809"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.8301 9.16797L21.1201 15.468"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export const OmegaCircle: React.FC<IconProps> = ({ ...props }) => {
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
				opacity="0.4"
				d="M17 16.5H13.9L15.52 14.71C16.32 13.82 16.76 12.69 16.76 11.53C16.76 10.33 16.26 9.18002 15.37 8.33002C14.48 7.48002 13.27 7 12 7C10.74 7 9.53 7.48002 8.63 8.33002C7.74 9.18002 7.23999 10.33 7.23999 11.53C7.23999 12.7 7.67998 13.83 8.47998 14.71L10.1 16.5H7"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const OmegaSquare: React.FC<IconProps> = ({ ...props }) => {
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
				d="M22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M17 16.75H13.9L15.52 14.96C16.32 14.07 16.76 12.94 16.76 11.78C16.76 10.58 16.26 9.43002 15.37 8.58002C14.48 7.73002 13.27 7.25 12 7.25C10.74 7.25 9.53 7.73002 8.63 8.58002C7.74 9.43002 7.23999 10.58 7.23999 11.78C7.23999 12.95 7.67998 14.08 8.47998 14.96L10.1 16.75H7"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Paintbucket: React.FC<IconProps> = ({ ...props }) => {
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
				d="M3.7706 15.5585L7.2306 19.0185C9.6606 21.4485 10.4906 21.4085 12.8906 19.0185L18.4606 13.4485C20.4006 11.5085 20.8906 10.2185 18.4606 7.7885L15.0006 4.3285C12.4106 1.7385 11.2806 2.3885 9.3406 4.3285L3.7706 9.8985C1.3806 12.2985 1.1806 12.9685 3.7706 15.5585Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M19.1995 16.7895L18.5395 17.8795C17.6095 19.4295 18.3295 20.6995 20.1395 20.6995C21.9495 20.6995 22.6695 19.4295 21.7395 17.8795L21.0795 16.7895C20.5595 15.9295 19.7095 15.9295 19.1995 16.7895Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M2 12.2388C7.56 10.7288 13.42 10.6788 19 12.1088L19.5 12.2388"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Path2: React.FC<IconProps> = ({ ...props }) => {
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
				d="M9.87007 22.0016H14.1601C15.7801 22.0016 16.8501 20.8416 16.5301 19.4316L15.8401 16.3516H8.20007L7.51007 19.4316C7.20007 20.7616 8.34007 22.0016 9.87007 22.0016Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M15.8292 16.3511L18.7692 13.7411C20.4092 12.2811 20.4792 11.2611 19.1792 9.61109L13.9892 3.03109C12.8992 1.65109 11.1192 1.65109 10.0192 3.03109L4.83916 9.61109C3.53916 11.2611 3.53916 12.3311 5.24916 13.7411L8.18916 16.3511"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M12.0098 2.67188V6.97187"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const PathSquare: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.4">
				<path
					d="M16.7502 9.12047L14.9002 7.27047C14.2002 6.57047 13.2402 6.61047 12.7702 7.35047L11.7402 8.98047L15.0302 12.2705L16.6602 11.2405C17.3702 10.8005 17.4102 9.77047 16.7502 9.12047Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M11.7395 8.98163L9.34947 8.84163C8.00947 8.76163 7.54947 9.17163 7.39947 10.4416L6.79947 15.5116C6.66947 16.5816 7.43947 17.3416 8.50947 17.2216L13.5795 16.6216C14.8495 16.4716 15.3095 16.0116 15.1795 14.6716L15.0395 12.2816"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M7.49023 16.5219L9.34023 14.6719"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Path: React.FC<IconProps> = ({ ...props }) => {
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
				d="M19.7901 7.26814L16.7601 4.23814C15.6101 3.08814 14.0401 3.14814 13.2701 4.37814L11.5801 7.04814L16.9801 12.4481L19.6501 10.7581C20.8001 10.0281 20.8701 8.34814 19.7901 7.26814Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M11.58 7.0524L7.64999 6.8124C5.45999 6.6824 4.68999 7.3524 4.44999 9.4424L3.46999 17.7624C3.25999 19.5124 4.52999 20.7724 6.26999 20.5624L14.59 19.5824C16.68 19.3324 17.44 18.5724 17.22 16.3824L16.99 12.4524"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M4.60938 19.4189L7.63937 16.3789"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const PenAdd: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.4">
				<path
					d="M21.1901 8.04039L18.0101 4.8604C16.8101 3.6604 15.1601 3.72042 14.3501 5.01042L12.5801 7.81041L18.2501 13.4804L21.0501 11.7104C22.2601 10.9404 22.3301 9.17039 21.1901 8.04039Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.2506 13.4717L18.4906 17.5917C18.7206 19.8917 17.9206 20.6917 15.7406 20.9517L7.0206 21.9817C5.1806 22.1917 3.8606 20.8717 4.0806 19.0417L5.06059 10.7617"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.5801 7.8092L10.8301 7.69922"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.28125 20.7799L8.46126 17.5898"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M6.52148 8.1803V4.82031"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.16078 6.5H4.80078"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const PenClose: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.4">
				<path
					d="M21.1901 8.04039L18.0101 4.8604C16.8101 3.6604 15.1601 3.72042 14.3501 5.01042L12.5801 7.81041L18.2501 13.4804L21.0501 11.7104C22.2601 10.9404 22.3301 9.17039 21.1901 8.04039Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.2506 13.4717L18.4906 17.5917C18.7206 19.8917 17.9206 20.6917 15.7406 20.9517L7.0206 21.9817C5.1806 22.1917 3.8606 20.8717 4.0806 19.0417L5.06059 10.7617"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.5801 7.8092L10.8301 7.69922"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.28125 20.7799L8.46126 17.5898"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.81001 9.58 9.46001 9.88C8.67001 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.7003 7.68079L5.32031 5.30078"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M7.68077 5.32031L5.30078 7.70032"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const PenRemove: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.4">
				<path
					d="M21.1901 8.04039L18.0101 4.8604C16.8101 3.6604 15.1601 3.72042 14.3501 5.01042L12.5801 7.81041L18.2501 13.4804L21.0501 11.7104C22.2601 10.9404 22.3301 9.17039 21.1901 8.04039Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M18.2506 13.4717L18.4906 17.5917C18.7206 19.8917 17.9206 20.6917 15.7406 20.9517L7.0206 21.9817C5.1806 22.1917 3.8606 20.8717 4.0806 19.0417L5.06061 10.7617"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.5801 7.8092L10.8301 7.69922"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M5.28125 20.7799L8.46124 17.5898"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M11 6.5C11 6.91 10.94 7.32001 10.83 7.70001C10.72 8.10001 10.56 8.47001 10.35 8.82001C10.11 9.22001 9.80999 9.58 9.45999 9.88C8.66999 10.58 7.64 11 6.5 11C5.99 11 5.51 10.92 5.06 10.76C4.04 10.42 3.18999 9.72001 2.64999 8.82001C2.23999 8.14001 2 7.34 2 6.5C2 5.08 2.65 3.80999 3.69 2.98999C4.46 2.36999 5.44 2 6.5 2C8.99 2 11 4.01 11 6.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M8.1608 6.5H4.80078"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const PenTool2: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.4">
				<path
					d="M10.7493 22.4996H13.2693C14.2293 22.4996 14.8493 21.8196 14.6693 20.9896L14.2593 19.1797H9.75934L9.34935 20.9896C9.16935 21.7696 9.84934 22.4996 10.7493 22.4996Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.2605 19.1702L15.9906 17.6301C16.9606 16.7701 17.0005 16.1701 16.2305 15.2001L13.1805 11.3302C12.5405 10.5202 11.4906 10.5202 10.8506 11.3302L7.80055 15.2001C7.03055 16.1701 7.03054 16.8001 8.04054 17.6301L9.77055 19.1702"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.0098 11.1211V13.6511"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M12.5195 5H11.5195C10.9695 5 10.5195 4.55 10.5195 4V3C10.5195 2.45 10.9695 2 11.5195 2H12.5195C13.0695 2 13.5195 2.45 13.5195 3V4C13.5195 4.55 13.0695 5 12.5195 5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M3.26953 14.1719H4.26953C4.81953 14.1719 5.26953 13.7219 5.26953 13.1719V12.1719C5.26953 11.6219 4.81953 11.1719 4.26953 11.1719H3.26953C2.71953 11.1719 2.26953 11.6219 2.26953 12.1719V13.1719C2.26953 13.7219 2.71953 14.1719 3.26953 14.1719Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.7305 14.1719H19.7305C19.1805 14.1719 18.7305 13.7219 18.7305 13.1719V12.1719C18.7305 11.6219 19.1805 11.1719 19.7305 11.1719H20.7305C21.2805 11.1719 21.7305 11.6219 21.7305 12.1719V13.1719C21.7305 13.7219 21.2805 14.1719 20.7305 14.1719Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M10.52 3.55859C6.71 4.00859 3.75 7.23858 3.75 11.1686"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M20.2495 11.1686C20.2495 7.24858 17.3095 4.02859 13.5195 3.55859"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const PenTool: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g opacity="0.4">
				<path
					d="M10.7493 22.4996H13.2693C14.2293 22.4996 14.8493 21.8196 14.6693 20.9896L14.2594 19.1797H9.75935L9.34935 20.9896C9.16935 21.7696 9.84935 22.4996 10.7493 22.4996Z"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M14.2605 19.1702L15.9905 17.6301C16.9605 16.7701 17.0005 16.1701 16.2305 15.2001L13.1805 11.3302C12.5405 10.5202 11.4905 10.5202 10.8505 11.3302L7.80054 15.2001C7.03054 16.1701 7.03054 16.8001 8.04054 17.6301L9.77054 19.1702"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12.0098 11.1211V13.6511"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<path
				d="M11.1501 5.19063L10.3701 4.41061C9.90008 3.94061 9.90008 3.18065 10.3701 2.71065L11.1501 1.93062C11.6201 1.46062 12.3801 1.46062 12.8501 1.93062L13.6301 2.71065C14.1001 3.18065 14.1001 3.94061 13.6301 4.41061L12.8501 5.19063C12.3801 5.66063 11.6201 5.66063 11.1501 5.19063Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.45 9.80859H20.55C21.21 9.80859 21.75 10.3486 21.75 11.0086V12.1086C21.75 12.7686 21.21 13.3087 20.55 13.3087H19.45C18.79 13.3087 18.25 12.7686 18.25 12.1086V11.0086C18.25 10.3486 18.79 9.80859 19.45 9.80859Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.55 9.80859H3.45C2.79 9.80859 2.25 10.3486 2.25 11.0086V12.1086C2.25 12.7686 2.79 13.3087 3.45 13.3087H4.55C5.21 13.3087 5.75 12.7686 5.75 12.1086V11.0086C5.75 10.3486 5.21 9.80859 4.55 9.80859Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M18.5402 10.1008L13.2402 4.80078"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.46094 10.1008L10.7609 4.80078"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const RecoveryConvert: React.FC<IconProps> = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M13.6 11.5784V14.3084C13.6 16.5884 12.69 17.4984 10.41 17.4984H7.69C5.42 17.4984 4.5 16.5884 4.5 14.3084V11.5784C4.5 9.30844 5.41 8.39844 7.69 8.39844H10.42C12.69 8.39844 13.6 9.30844 13.6 11.5784Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.5004 7.68V10.41C17.5004 12.69 16.5904 13.6 14.3104 13.6H13.6004V11.58C13.6004 9.31 12.6904 8.4 10.4104 8.4H8.40039V7.68C8.40039 5.4 9.31039 4.5 11.5904 4.5H14.3204C16.5904 4.5 17.5004 5.41 17.5004 7.68Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M21 14C21 17.87 17.87 21 14 21L15.05 19.25"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M1 8C1 4.13 4.13 1 8 1L6.95 2.75"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const RulerPen: React.FC<IconProps> = ({ ...props }) => {
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
				d="M21.4707 19V5C21.4707 3 20.4707 2 18.4707 2H14.4707C12.4707 2 11.4707 3 11.4707 5V19C11.4707 21 12.4707 22 14.4707 22H18.4707C20.4707 22 21.4707 21 21.4707 19Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M11.4707 6H16.4707"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M11.4707 18H15.4707"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M11.4707 13.9492L16.4707 13.9992"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M11.4707 10H14.4707"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M5.4893 2C3.8593 2 2.5293 3.33 2.5293 4.95V17.91C2.5293 18.36 2.7193 19.04 2.9493 19.43L3.7693 20.79C4.7093 22.36 6.2593 22.36 7.1993 20.79L8.0193 19.43C8.2493 19.04 8.4393 18.36 8.4393 17.91V4.95C8.4393 3.33 7.1093 2 5.4893 2Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M8.4393 7H2.5293"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export const Ruler: React.FC<IconProps> = ({ ...props }) => {
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
				d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M18 7V12"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M6 7V11"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M10.05 7L10 12"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				opacity="0.4"
				d="M14 7V10"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export const Scissor: React.FC<IconProps> = ({ ...props }) => {
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
				d="M5.5 10C7.433 10 9 8.433 9 6.5C9 4.567 7.433 3 5.5 3C3.567 3 2 4.567 2 6.5C2 8.433 3.567 10 5.5 10Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M5.5 21C7.433 21 9 19.433 9 17.5C9 15.567 7.433 14 5.5 14C3.567 14 2 15.567 2 17.5C2 19.433 3.567 21 5.5 21Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<g opacity="0.4">
				<path
					d="M22.0004 6L8.65039 15.98"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M22.0004 17.9705L8.65039 7.98047"
					stroke="#292D32"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export const Shapes1: React.FC<IconProps> = ({ ...props }) => {
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
				d="M16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M21.97 7.5C21.97 10.37 19.78 12.72 16.97 12.97V12.25C16.97 8.5 15.47 7 11.72 7H11C11.25 4.19 13.6 2 16.47 2C19.26 2 21.56 4.07 21.91 6.77C21.95 7 21.97 7.25 21.97 7.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Shapes: React.FC<IconProps> = ({ ...props }) => {
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
				d="M13.4303 15.0014H4.40034C2.58034 15.0014 1.42034 13.0514 2.30034 11.4514L4.63034 7.21141L6.81034 3.24141C7.72034 1.59141 10.1003 1.59141 11.0103 3.24141L13.2003 7.21141L14.2503 9.12141L15.5303 11.4514C16.4103 13.0514 15.2503 15.0014 13.4303 15.0014Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M22 15.5C22 19.09 19.09 22 15.5 22C11.91 22 9 19.09 9 15.5C9 15.33 9.01 15.17 9.02 15H13.43C15.25 15 16.41 13.05 15.53 11.45L14.25 9.12C14.65 9.04 15.07 9 15.5 9C19.09 9 22 11.91 22 15.5Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export const Size: React.FC<IconProps> = ({ ...props }) => {
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
				d="M16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				opacity="0.4"
				d="M21.9707 5.85V9.15C21.9707 11.9 20.8707 13 18.1207 13H16.9707V12.25C16.9707 8.5 15.4707 7 11.7207 7H10.9707V5.85C10.9707 3.1 12.0707 2 14.8207 2H18.1207C20.8707 2 21.9707 3.1 21.9707 5.85Z"
				stroke="#292D32"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
