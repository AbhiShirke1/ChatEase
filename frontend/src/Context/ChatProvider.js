import {useHistory} from 'react-router-dom'
import {createContext, useContext, useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
// import {useNavigate} from 'react-router-dom';


const ChatContext = createContext()

const ChatProvider = ({children}) =>{
    const [user, setUser] = useState()
    const [selectedChat, setSelectedChat] = useState()
    const [chats, setChats] = useState([]);

    const history = useHistory()
    // const navigate = useNavigate()

    useEffect(()=>{
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        setUser(userInfo)

        if(!userInfo){
            history.push("/")
            // navigate("/")
        }
    }, [history])

    return(
        <ChatContext.Provider value={{user, setUser, selectedChat, setSelectedChat, chats, setChats  }}>
            {children}
        </ChatContext.Provider>
    )
}

export const ChatState =()=>{
    return useContext(ChatContext)
}


export default ChatProvider