import { type ClassValue, clsx } from "clsx"
import { format } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function formatStartEndDate({
	startDate,
	endDate,
}: {
	startDate: Date
	endDate: Date | null
}) {
	return `${format(startDate, "MMM yyyy")} - ${
		endDate ? format(endDate, "MMM yyyy") : "Present"
	}`
}
