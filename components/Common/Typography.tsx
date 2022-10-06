import React from 'react';
import styled from 'styled-components';

// Types
export const FONT_WEIGHT_ENUM = {
	normal: `font-weight: 400;`,
	bold: `font-weight: 700;`,
	inherit: 'font-weight: inherit;',
} as const;
export const TEXT_ALIGN_ENUM = {
	left: 'text-align: left;',
	center: 'text-align: center;',
	right: 'text-align: right;',
	inherit: 'text-align: inherit;',
} as const;
export const TEXT_SIZE_ENUM = {
	display5: `
		font-size: 2.5rem;
		line-height: 3.25rem;
		font-weight: bold;
	`,
	display4: `
		font-size: 2.25rem;
		line-height: 2.875rem;
		font-weight: bold;
	`,
	display3: `
		font-size: 2rem;
		line-height: 2.625rem;
		font-weight: bold;
	`,
	display2: `
		font-size: 1.75rem;
		line-height: 2.375rem;
		font-weight: bold;
	`,
	display1: `
		font-size: 1.5rem;
		line-height: 2.125rem;
		font-weight: bold;
	`,
	headline: `
		font-size: 1.25rem;
		line-height: 1.75rem;
		font-weight: bold;
	`,
	subhead3: `
		font-size: 1rem;
		line-height: 1.375rem;
		font-weight: bold;
	`,
	subheadLong3: `
		font-size: 1rem;
		line-height: 1.75rem;
		font-weight: bold;
	`,
	subhead2: `
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: bold;
	`,
	subheadLong2: `
		font-size: 0.875rem;
		line-height: 1.5rem;
		font-weight: bold;
	`,
	subhead1: `
		font-size: 0.75rem;
		line-height: 1.125rem;
		font-weight: bold;
	`,
	body2: `
		font-size: 1rem;
		line-height: 1.5rem;
	`,
	bodyLong2: `
		font-size: 1rem;
		line-height: 1.75rem;
	`,
	body1: `
		font-size: 0.875rem;
		line-height: 1.25rem;
	`,
	bodyLong1: `
		font-size: 0.875rem;
		line-height: 1.5rem;
	`,
	caption: `
		font-size: 0.75rem;
		line-height: 1.125rem;
	`,
	badge: `
		font-size: 0.75rem;
		line-height: 1.125rem;
	`,
	inherit: `
		font-size: inherit;
		line-height: inherit;
		font-weight: inherit;
	`,
};

export const TEXT_DECORATION_ENUM = {
	none: 'text-decoration: none;',
	underline: 'text-decoration: underline;',
	inherit: 'text-decoration: inherit;',
};

export type FontWeightType = keyof typeof FONT_WEIGHT_ENUM;
export type TextAlignType = keyof typeof TEXT_ALIGN_ENUM;
export type TextSizeType = keyof typeof TEXT_SIZE_ENUM;
export type TextDecorationType = keyof typeof TEXT_DECORATION_ENUM;
// Interfaces

interface TypographyProps {
	variant?: TextSizeType;
	weight?: FontWeightType;
	align?: TextAlignType;
	color?: string;
	margin?: string;
	whiteSpace?: string;
	textOverflow?: string;
	textDecoration?: TextDecorationType;
	children?: React.ReactNode;
}

interface TypographyDivProps {
	variant: TextSizeType;
	align: TextAlignType;
	weight: FontWeightType;
	color: string;
	margin: string;
	whiteSpace: string;
	textOverflow: string;
	textDecoration: TextDecorationType;
	children?: React.ReactNode;
}

interface TypographyAnchorProps {
	variant?: TextSizeType;
	weight?: FontWeightType;
	align?: TextAlignType;
	color?: string;
	margin?: string;
	whiteSpace?: string;
	textOverflow?: string;
	textDecoration?: TextDecorationType;
	href?: string;
	children?: React.ReactNode;
}

interface TypographyAProps {
	variant: TextSizeType;
	align: TextAlignType;
	weight: FontWeightType;
	color: string;
	margin: string;
	whiteSpace: string;
	textOverflow: string;
	textDecoration: TextDecorationType;
	children?: React.ReactNode;
}

const TypographyDiv = styled.div`
	${(props: TypographyDivProps) => TEXT_SIZE_ENUM[props.variant]};
	${(props: TypographyDivProps) => TEXT_ALIGN_ENUM[props.align]};
	${(props: TypographyDivProps) => FONT_WEIGHT_ENUM[props.weight]};
	color: ${(props: TypographyDivProps) => props.color};
	margin: ${(props: TypographyDivProps) => props.margin};
	white-space: ${(props: TypographyDivProps) => props.whiteSpace};
	text-overflow: ${(props: TypographyDivProps) => props.textOverflow};
	text-decoration: ${(props: TypographyDivProps) => props.textDecoration};
`;

const TypographyA = styled.a`
	${(props: TypographyAProps) => TEXT_SIZE_ENUM[props.variant]};
	${(props: TypographyAProps) => TEXT_ALIGN_ENUM[props.align]};
	${(props: TypographyAProps) => FONT_WEIGHT_ENUM[props.weight]};
	color: ${(props: TypographyAProps) => props.color};
	margin: ${(props: TypographyAProps) => props.margin};
	white-space: ${(props: TypographyAProps) => props.whiteSpace};
	text-overflow: ${(props: TypographyAProps) => props.textOverflow};
	text-decoration: ${(props: TypographyAProps) => props.textDecoration};
	cursor: pointer;
`;

export const Typography: React.FC<TypographyProps> = ({
	variant = 'body1',
	align = 'left',
	weight = 'normal',
	color = '#ffffff',
	margin = '',
	whiteSpace = 'normal',
	textOverflow = 'ellipsis',
	textDecoration = 'none',
	children,
}) => {
	return (
		<TypographyDiv
			variant={variant}
			align={align}
			weight={weight}
			color={color}
			margin={margin}
			whiteSpace={whiteSpace}
			textOverflow={textOverflow}
			textDecoration={textDecoration}
		>
			{children}
		</TypographyDiv>
	);
};

export const TypographyAnchor: React.FC<TypographyAnchorProps> = ({
	variant = 'inherit',
	align = 'inherit',
	weight = 'inherit',
	color = 'inherit',
	margin = 'inherit',
	whiteSpace = 'inherit',
	textOverflow = 'inherit',
	textDecoration = 'underline',
	href = '',
	children,
}) => {
	return (
		<TypographyA
			variant={variant}
			align={align}
			weight={weight}
			color={color}
			margin={margin}
			whiteSpace={whiteSpace}
			textOverflow={textOverflow}
			textDecoration={textDecoration}
			href={href}
		>
			{children}
		</TypographyA>
	);
};
