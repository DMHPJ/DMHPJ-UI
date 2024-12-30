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

const isUrl = (text: string) => {
	const reg = /^(http|https):\/\/[^ "]+$/;
	return reg.test(text);
};

const isEmail = (text: string) => {
	const reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	return reg.test(text);
};

const isTelephone = (text: string) => {
	const reg = /^1[3456789]\d{9}$/;
	return reg.test(text);
};

export {
  isNull,
	isUrl,
	isEmail,
	isTelephone
}
