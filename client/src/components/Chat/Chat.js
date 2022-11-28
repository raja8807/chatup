import React, { useState } from 'react'
import ChatInfo from './ChatInfo'



const Chat = ({ chat, deleteChat, user }) => {

    const [showMenu, setShowMenu] = useState(false)
    const [showInfo, setShowInfo] = useState(false)

    return (
        <div key={chat.id} className={`relative p-2 shadow-sm w-3/4 mb-5 rounded-md ${chat.sender == user ? 'text-white bg-primary ml-auto mr-0' : "text-grey-dark bg-grey-light"} `}

        >
            <pre className='break-words'
                onClick={() => {
                    setShowMenu(false)
                }}
            >
                {
                    chat.message
                }
            </pre>

            <p className='text-right text-sm  opacity-50'>
                <small >{chat.time}</small>
            </p>

            <div className='cursor-pointer absolute top-1 right-3 text-sm'
                onClick={() => {
                    setShowMenu(!showMenu)
                }}
            >v</div>

            {
                showMenu && <div className='absolute top-6 right-2 bg-white text-grey-dark shadow-md rounded-md'>

                    <p className={`cursor-pointer border-b border-grey-light py-1 px-2 rounded-md
                hover:bg-${chat.sender == user ? 'grey-light' : 'primary'}`}
                        onClick={() => {
                            setShowInfo(true)
                            setShowMenu(false)
                        }}
                    >Show Info</p>

                    <p className={`cursor-pointer border-b border-grey-light py-1 px-2 rounded-md
                hover:bg-${chat.sender == user ? 'grey-light' : 'primary'}`}
                        onClick={() => {
                            deleteChat(chat.id)
                        }}
                    >Delete Message</p>
                </div>
            }

            {
                showInfo && <ChatInfo chat={chat} user={user} setShowInfo={setShowInfo} />
            }

        </div>
    )
}

export default Chat