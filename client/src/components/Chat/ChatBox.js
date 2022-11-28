import React, { useEffect, useState } from 'react'
import Chat from './Chat'



const ChatBox = () => {

  let chats_temp = [
    {
      id: "11111",
      sender: 'raja',
      message: 'Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js',
      date: "07-24-2022",
      time: "14:22"
    },
    {
      id: "22222",
      sender: 'raja1',
      message: 'Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js',
      date: "07-24-2022",
      time: "14:23"
    },
    {
      id: "33333",
      sender: 'raja',
      message: 'Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js',
      date: "07-24-2022",
      time: "14:30"
    },
    {
      id: "44444",
      sender: 'raja1',
      message: 'Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.js and postcss.config.js',
      date: "07-24-2022",
      time: "13:22"
    },
  ]

  const [chats, setChats] = useState([...chats_temp])
  const [message, setMessage] = useState('')
  const [showScrollBtn, setShowScrollBtn] = useState(false)

  const user = 'raja'

  var scrollHeight;
  useEffect(() => {
    let x = document.body.scrollHeight
    window.scrollTo(0, x)
    scrollHeight = window.scrollY
    // console.log(scrollHeight);
  }, [chats])

  function sendMessage(newMessage) {
    if (newMessage) {
      setMessage('')
      let current = new Date()
      let newId = Math.floor(Math.random() * 90000) + 10000

      // console.log(newId);

      let newChat = {
        id: newId,
        sender: user,
        message: newMessage,
        date: current.toLocaleDateString(),
        time: `${current.getHours()}:${current.getMinutes()}`
      }

      setChats((prevChats) => {
        return [...prevChats, newChat]
      })
    }
  }

  function deleteChat(id) {
    setChats((prevChats) => {
      return prevChats.filter((chat) => {
        return chat.id != id
      })
    })
  }


  window.addEventListener('scroll', () => {
    let x = window.scrollY - scrollHeight
    if (x < -70) {
      setShowScrollBtn(true)
    } else {
      setShowScrollBtn(false)
    }

  })

  return (
    <div className='p-4 mb-14'>

      {
        chats.map((chat) => {
          return <Chat key={chat.id} chat={chat} user={user} deleteChat={deleteChat} />
        })
      }

      <div className='fixed w-full left-0 bottom-0 h-14 bg-grey-dark flex'>
        <input type='text' placeholder='Message' className='h-full bg-grey-dark w-4/5 px-4 outline-none text-white'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          onKeyUp={(e) => {
            if (e.key == "Enter") {
              sendMessage(message)
            }
          }}
        />
        <button className='bg-primary text-white w-1/5 h-14'
          onClick={() => {
            sendMessage(message)
          }}
        >Send</button>
      </div>

      {
        showScrollBtn && <div className='cursor-pointer fixed bottom-16 right-1/2 h-10 w-10 bg-primary border-2 border-grey-dark rounded-full'
          onClick={() => {
            let x = document.body.scrollHeight

            window.scrollTo(0, x)
          }}
        >

        </div>
      }
    </div>

  )
}

export default ChatBox