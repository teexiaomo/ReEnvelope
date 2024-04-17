    // SPDX-License-Identifier: MIT
    // Compatible with OpenZeppelin Contracts ^5.0.0
    pragma solidity ^0.8.20;

    interface ITaskControl  {
        event TokenMint(address sender,address taskAddr,address receiveAddress,uint256 amount);
        event TicketGet(uint256 id,address fromAddress,address receiveAddress,uint256 amount,uint256 ticketNumbers,bool buy);
        
        //执行_taskAddr合约任务，并发放任务代币
        function mintToken(address _taskAddr,address _receiveAddress,uint256 _value,bytes calldata data) external;
        //花费自身任务代币并参与抽奖
        function getTicket(uint256 _id,address _receiveAddress,uint256 _ticketNumbers)external;

        function getTicketFrom(uint256 _id,address _fromAddress,address _receiveAddress,uint256 _ticketNumbers)external;
    }