const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDateToFormatDate = (date) => {
  return `${months[date.getMonth()]} ${date.getDay()}, ${date.getFullYear()}`;
};
