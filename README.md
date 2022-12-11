Process to wrap
1-approve Wrapped Contract from sender to wrap in NFT an amount of ft.
2-sender call wrap function from Wrapped Contract. 

Process to unwrap
1-owner of NFT call unwrap function from Wrapped Contract.

Enviroment:
1-Run task deployMock
2-Run task createToken 
3-Run task deployWRPT
4-Run task wrap
5-Run task totalOrders
6-Run task getOrderInfo
7-Run task getBalance to check the seller's balance
8-Run task unwrap 
9-Run task totalOrders => shoul return -1 order.
10-Run task getOrderInfor => should return 0 in all properties