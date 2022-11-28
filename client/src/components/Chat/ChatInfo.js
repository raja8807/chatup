import React from 'react'
import Header from '../Header'
import Chat from './Chat'


function ChatInfo({ chat, setShowInfo,user }) {
    return (
        <div className={`z-10 fixed h-screen w-screen top-0 left-0 bg-grey-med`}>
            <Header />

            <div className={`h-1/2 bg-${chat.sender == user ? 'grey-light': 'primary'} flex items-center justify-center`}>
                <div  className={`relative p-2 shadow-sm w-3/4 mb-5 rounded-md ${chat.sender == user ? 'text-white bg-primary' : "text-grey-dark bg-grey-light"} `}>
                    <pre className='break-words'>
                        {
                            chat.message
                        }
                    </pre>
                </div>
            </div>

            <div className='p-5 text-black'>
                <p>SentBy : <span>{chat.sender}</span></p>
                <p>Date : <span>{chat.date}</span></p>
                <p>Time : <span>{chat.time}</span></p>
            </div>


            <div className='fixed w-full left-0 bottom-0 h-14 bg-grey-dark flex'>
                <button className='bg-primary text-white w-full h-14'
                    onClick={() => {
                        setShowInfo(false)
                    }}
                >Back</button>
            </div>

        </div>



    )
}

export default ChatInfo