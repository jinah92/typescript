import * as CryptoJS from 'crypto-js'
import { create } from 'domain';

class Block {
   public index:number;
   public hash: string;
   public previousHash: string;
   public data: string;
   public timestamp: number;

   static calculateBlockHash = (index:number, previousHash:string, timestamp: number, data:string): string=> CryptoJS.SHA256(index + previousHash +timestamp + data).toString();

   constructor(index:number, hash: string, previousHash: string, data: string, timestamp: number){
      this.index = index;
      this.hash = hash;
      this.previousHash = previousHash;
      this.data = data;
      this.timestamp = timestamp
   }
}

const genesisBlock:Block = new Block(0, "123456211", "", "Hello Block", 123456);

let blockchain: [Block] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLastBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimestamp = ():number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data:string): Block => {
   const previousBlock : Block = getLastBlock();
   const newIndex : number = previousBlock.index + 1;
   const nexTimestamp : number = getNewTimestamp();
   const nextHash : string = Block.calculateBlockHash(newIndex, previousBlock.hash, nexTimestamp, data);

   const newBlock : Block = new Block(newIndex, nextHash, previousBlock.hash, data, nexTimestamp);

   return newBlock;
}

console.log(createNewBlock("hello"), createNewBlock("bye bye"));

export {}