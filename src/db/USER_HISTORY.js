export const UserOrderHistory = [
    {
        userid: 1,
        username: 'John Doe',
        orderhistory: [
            {
                id: 1,
                date: '12/27/2023',
                time: '3:30:01 AM',
                items: [
                    { id: 1, name: 'Caffe Americano', price: 60, quantity: 1, total: 60 },
                    { id: 2, name: 'Caffe Latte', price: 75, quantity: 1, total: 75 },
                    { id: 3, name: 'Coffee Cappuccino', price: 65, quantity: 1, total: 65 },
                ],
                total: 200,
                payment: 'Cash',
                status: 'Completed',
            },
            {
                id: 2,
                date: '12/27/2023',
                time: '3:35:00 AM',
                items: [
                    { id: 4, name: 'Latte Macchiato', price: 75, quantity: 2, total: 150 },
                    { id: 6, name: 'Mango', price: 45, quantity: 1, total: 45 },
                ],
                total: 195,
                payment: 'Tally',
                status: 'Completed',
            },
            {
                id: 3,
                date: '12/27/2023',
                time: '4:15:45 AM',
                items: [
                    { id: 10, name: 'Iced Coffees', price: 85, quantity: 3, total: 255 },
                ],
                total: 255,
                payment: 'Cash',
                status: 'Cancelled',
            },
        ]
    },
    {
        userid: 2,
        username: 'Jane Doe',
        orderhistory: [
            {
                id: 1,
                date: '12/28/2023',
                time: '3:30:01 AM',
                items: [
                    { id: 1, name: 'Caffe Americano', price: 60, quantity: 1, total: 60 },
                    { id: 2, name: 'Caffe Latte', price: 75, quantity: 1, total: 75 },
                    { id: 3, name: 'Coffee Cappuccino', price: 65, quantity: 1, total: 65 },
                ],
                total: 200,
                payment: 'Cash',
                status: 'Completed',
            },
            {
                id: 2,
                date: '12/27/2023',
                time: '3:35:00 AM',
                items: [
                    { id: 4, name: 'Latte Macchiato', price: 75, quantity: 2, total: 150 },
                    { id: 6, name: 'Mango', price: 45, quantity: 1, total: 45 },
                ],
                total: 195,
                payment: 'Tally',
                status: 'Completed',
            },
            {
                id: 3,
                date: '12/27/2023',
                time: '4:15:45 AM',
                items: [
                    { id: 10, name: 'Iced Coffees', price: 85, quantity: 3, total: 255 },
                ],
                total: 255,
                payment: 'Cash',
                status: 'Cancelled',
            },
        ]
    }

  ];