export const UserOngoingOrder = [
    {
        userid: 1234,
        username: 'John Doe',
        ongoingOrder :[
            {
                id: 1,
                date: '2021-09-01',
                time: '12:00:00',
                items : [
                  {id: 1, name: 'Caffe Americano', price: 60, quantity: 1, total: 60},
                  {id: 2, name: 'Caffe Latte', price: 75, quantity: 1, total: 75},
                  {id: 3, name: 'Coffee Cappuccino', price: 65, quantity: 1, total: 65},
                ],
                total: 200,
                payment: 'Cash',
                status: 'Pending',
            },
        ]
    },
    {
        userid: 5678,
        username: 'Jane Doe',
        ongoingOrder :[
            {
                id: 1,
                date: '2021-09-01',
                time: '12:00:00',
                items : [
                  {id: 1, name: 'Caffe Americano', price: 60, quantity: 1, total: 60},
                  {id: 2, name: 'Caffe Latte', price: 75, quantity: 1, total: 75},
                  {id: 3, name: 'Coffee Cappuccino', price: 65, quantity: 1, total: 65},
                ],
                total: 200,
                payment: 'Cash',
                status: 'Pending',
            },
        ]
    }
];