const isNull = (val: any): boolean => {
	if (Array.isArray(val)) {
		return val.length === 0;
	} else if (typeof val === "object" && val !== null) {
		return Object.keys(val).length === 0;
	} else if (typeof val === "string") {
		return val === "";
	} else if (typeof val === "number") {
		return Number.isNaN(val);
	}
	return val === null || val === undefined;
};

export {
  isNull,
}
