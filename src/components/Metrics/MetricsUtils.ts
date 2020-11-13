export const getDaysArray = (
  start: string | number | Date,
  end: string | number | Date,
  asString: boolean = true
): Date[] | string[] => {
  // eslint-disable-next-line prefer-const
  let arr = [];
  for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
    arr.push(new Date(dt));
  }
  return asString
    ? arr.map((a: Date) => new Intl.DateTimeFormat('en-US').format(a))
    : arr;
};

export const randomChartData = (length: number): number[] => {
  // eslint-disable-next-line prefer-const
  let rngArr: number[] = [];
  for (let i = 0; i < length; i++) {
    Math.floor(Math.random() * 50 + 1);
  }
  return rngArr;
};
