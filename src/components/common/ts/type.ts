export type PopupPositionType = "bottom" | "left" | "right" | "center";
export type CalendarType = "single" | "multiple" | "range";
export type FieldType =
	| "text"
	| "password"
	| "number"
	| "email"
	| "tel"
	| "url";
export type ValidationFunction = (text: string) => boolean;