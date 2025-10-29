import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
	return twMerge(clsx(inputs));
};

export const formatNumberToCurrency = ({
	amount,
	currency,
	locale,
}: {
	amount: number;
	currency: Intl.NumberFormatOptions["currency"];
	locale?: Intl.LocalesArgument;
}) => {
	return new Intl.NumberFormat(locale, {
		style: "currency",
		maximumFractionDigits: 0,
		minimumFractionDigits: 0,
		currencyDisplay: "narrowSymbol",
		currency,
	}).format(amount);
};
