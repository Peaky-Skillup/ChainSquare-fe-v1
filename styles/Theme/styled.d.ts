// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		color: {
			black: string;
			white: string;
			darkGrey: string;
			lightGrey: string;
			disabled: string;
			green: string;
			greenDisabled: string;
			blue: string;
			aqua: string;
			red: string;
		};
	}
}
