import React, { useEffect, useState } from 'react'

const Chat = () => {

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

  const user = 'raja'

  useEffect(() => {
    let x = document.body.scrollHeight
    window.scrollTo(0, x)
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

  return (
    <div className='p-4 mb-14'>

      {
        chats.map((chat) => {
          return <div key={chat.id} className={`relative p-2 shadow-sm w-3/4 mb-5 rounded-md ${chat.sender == user ? 'text-white bg-primary ml-auto mr-0' : "text-grey-dark bg-grey-light"} `}>
            <pre className='break-words'>
              {
                chat.message
              }
            </pre>

            <p className='text-right text-sm  opacity-50'>
              <small >{chat.time}</small>
            </p>

            <div className='cursor-pointer absolute top-1 right-1 text-sm'
              onClick={()=>{
                deleteChat(chat.id)
              }}
            >&#128465;</div>

          </div>
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
    </div>

  )
}

export default Chat