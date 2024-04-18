import hre from "hardhat";
import {deployTaskControl} from "./TaskControl-deploy"
import {
    loadFixture,
  } from "@nomicfoundation/hardhat-toolbox/network-helpers";

  export async function deployEmptyTask() {

    const EmptyTask = await hre.ethers.getContractFactory("EmptyTask");
    const emptyTask = await EmptyTask.deploy();
    await emptyTask.waitForDeployment();


    //const address = await whileListTask.getAddress();
    //console.log('whileListTask address:',address);

    return  emptyTask;
}
export async function bindTaskControl(){
    const  emptyTask  = await loadFixture(deployEmptyTask);
    const  taskControl  = await loadFixture(deployTaskControl);
    
    const emptyTaskAddress = await emptyTask.getAddress();
    const rs = await taskControl.setTask(emptyTaskAddress,1);
    rs.wait();
    //const tx = await rs.getTransaction();
    //console.log('bindTaskControl tx:',tx?.hash);
    return rs
}

//执行部署
/*
bindTaskControl().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
    });
*/