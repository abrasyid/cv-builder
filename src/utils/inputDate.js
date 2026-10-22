export const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const currentYear = new Date().getFullYear();

export const years = Array.from(
    { length: currentYear - 2000 + 1 },
    (_, index) => currentYear - index,
);
