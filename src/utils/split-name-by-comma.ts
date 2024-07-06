const splitNameByComma = (name: string) => {
  const commaIndex = name.indexOf(',');
  const firstLine = name.substring(0, commaIndex + 1); // comma를 포함한 첫 번째 줄
  const secondLine = name.substring(commaIndex + 2); // comma 다음 줄
  return { firstLine, secondLine };
};
export default splitNameByComma;
