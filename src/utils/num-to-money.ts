const numToMoney = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
export default numToMoney;
