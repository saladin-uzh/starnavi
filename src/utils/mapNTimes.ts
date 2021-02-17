export default (n: number, mapFunction: (index: number) => JSX.Element): Array<JSX.Element> =>
  Array(n)
    .fill(null)
    .map((_, index) => mapFunction(index))
