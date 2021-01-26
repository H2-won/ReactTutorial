import React from 'react'

function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}

function UserList(){

    const users = [
        {
            id: 1,
            username: 'asd',
            email: 'asd@naver.com',
        },
        {
            id: 2,
            username: 'zxc',
            email: 'zxc@namver.com',
        },
        {
            id: 3,
            username: 'qwe',
            email: 'qwe@example.com',
        }
    ];

    return (
        <div>
            {
                users.map(
                    user => (<User user={user} key={user.id} />)
                )
            }
        </div>
    )
}

export default UserList;