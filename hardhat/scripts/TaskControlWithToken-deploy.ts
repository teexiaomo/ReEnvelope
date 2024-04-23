import hre from "hardhat";
import {deployRedEnvelope} from "./LuckyRedEnvelopeV2-deploy"
import {
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";
export type {
  DefaultTaskControlWithToken
} from "../typechain-types/contracts";

  export async function deployTaskControlWithToken() {
    const  luckyRedEnvelope  = await loadFixture(deployRedEnvelope);
    //const { myToken } = await deployMyToken();
    const redEnvelopeAddr = await luckyRedEnvelope.getAddress();

    const [owner, otherAccount] = await hre.ethers.getSigners();

    const TaskControl = await hre.ethers.getContractFactory("DefaultTaskControlWithToken");
    const taskControl = await TaskControl.deploy(redEnvelopeAddr,true,true);
    await taskControl.waitForDeployment();

    //const address = await taskControl.getAddress();
    //console.log('TaskControl address:',address);
    return taskControl;
}