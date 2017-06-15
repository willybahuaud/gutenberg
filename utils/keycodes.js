export const BACKSPACE = 8;
export const TAB = 9;
export const ENTER = 13;
export const ESCAPE = 27;
export const LEFT = 37;
export const UP = 38;
export const RIGHT = 39;
export const DOWN = 40;
export const DELETE = 46;

export function isAlphaKeyCode( keyCode ) {
	return ( keyCode >= 65 && keyCode <= 90 );
}
