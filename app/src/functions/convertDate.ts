
  // convertDate.ts
export const convertDate = (number: number | string): string => {
  const myDate = new Date(number);
  if (isNaN(myDate.getTime())) {
    throw new Error("Invalid date");
  }
  return `${myDate.getDate()}/${myDate.getMonth() + 1}`;
};
