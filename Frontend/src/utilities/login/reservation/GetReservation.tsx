import { Eip1193Provider, ethers } from "ethers";

declare global {
    interface Window{
      ethereum : Eip1193Provider 
    }
  }

const reserve = async (
    contractID: string,
    year: number,
    month: number,
    day: number,
    hour: number,
    period: number
) => {
    const provider = new ethers.BrowserProvider(window.ethereum, "sepolia");
    const abi = [{"inputs":[{"internalType":"string","name":"_code","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reserver","type":"address"},{"indexed":true,"internalType":"uint256","name":"time","type":"uint256"}],"name":"roomOpened","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reserver","type":"address"},{"indexed":true,"internalType":"uint256","name":"time","type":"uint256"}],"name":"roomReserved","type":"event"},{"inputs":[],"name":"code","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"minutesAndSeconds","outputs":[{"internalType":"uint256","name":"truncatedTimestamp","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"reserverID","type":"address"}],"name":"openRoom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"year","type":"uint16"},{"internalType":"uint8","name":"month","type":"uint8"},{"internalType":"uint8","name":"day","type":"uint8"},{"internalType":"uint8","name":"hour","type":"uint8"},{"internalType":"uint8","name":"period","type":"uint8"},{"internalType":"address","name":"reserver","type":"address"}],"name":"reserveRoom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

    // WRITE operations require a signer
    let signer = await provider.getSigner();
    const reservationContract = new ethers.Contract(contractID, abi, signer);

    let reservation = await reservationContract.reserveRoom(year, month, day, hour, period, await signer.getAddress());
    await reservation.wait();
    return reservation;
}

export const getName = async (contractID: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum, "sepolia");
    const abi = [{"inputs":[{"internalType":"string","name":"_code","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reserver","type":"address"},{"indexed":true,"internalType":"uint256","name":"time","type":"uint256"}],"name":"roomOpened","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reserver","type":"address"},{"indexed":true,"internalType":"uint256","name":"time","type":"uint256"}],"name":"roomReserved","type":"event"},{"inputs":[],"name":"code","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"minutesAndSeconds","outputs":[{"internalType":"uint256","name":"truncatedTimestamp","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"reserverID","type":"address"}],"name":"openRoom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"year","type":"uint16"},{"internalType":"uint8","name":"month","type":"uint8"},{"internalType":"uint8","name":"day","type":"uint8"},{"internalType":"uint8","name":"hour","type":"uint8"},{"internalType":"uint8","name":"period","type":"uint8"},{"internalType":"address","name":"reserver","type":"address"}],"name":"reserveRoom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

    // WRITE operations require a signer
    let signer = await provider.getSigner();
    const reservationContract = new ethers.Contract(contractID, abi, signer);

    const name:string = await reservationContract.code();
    console.log(name);
    return name;
}

export const checkReservation = async (contractID: string) => {
    const provider = new ethers.BrowserProvider(window.ethereum, "sepolia");
    const abi = [{"inputs":[{"internalType":"string","name":"_code","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reserver","type":"address"},{"indexed":true,"internalType":"uint256","name":"time","type":"uint256"}],"name":"roomOpened","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"reserver","type":"address"},{"indexed":true,"internalType":"uint256","name":"time","type":"uint256"}],"name":"roomReserved","type":"event"},{"inputs":[],"name":"code","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"minutesAndSeconds","outputs":[{"internalType":"uint256","name":"truncatedTimestamp","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"reserverID","type":"address"}],"name":"openRoom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"year","type":"uint16"},{"internalType":"uint8","name":"month","type":"uint8"},{"internalType":"uint8","name":"day","type":"uint8"},{"internalType":"uint8","name":"hour","type":"uint8"},{"internalType":"uint8","name":"period","type":"uint8"},{"internalType":"address","name":"reserver","type":"address"}],"name":"reserveRoom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];

    // WRITE operations require a signer
    let signer = await provider.getSigner();
    const reservationContract = new ethers.Contract(contractID, abi, signer);

    const eventName = "roomReserved";
    const filter = reservationContract.filters[eventName](); // 이벤트 필터 생성

    const blockNumber = await provider.getBlockNumber(); // 현재 블록 번호
    const startBlock = blockNumber - 1000; // 시작 블록 번호 (현재 블록 기준으로 최근 1000개 블록 검색)

    // 과거 블록 범위에서 이벤트 검색
    const reservations = await reservationContract.queryFilter(filter, startBlock);
    
    return reservations.map((r) => {
        console.log('결과:',r.toJSON());
        console.log(typeof(r.data));
        return r.data;
    });
}

