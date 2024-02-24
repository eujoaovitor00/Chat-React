import { useChat } from "@/contexts/ChatContext";
import { useUser } from "@/contexts/UserContext";

export const ChatMessages = () => {
    const chatCtx = useChat();
    const UserCtx = useUser();
    return(
        <div className=" flex flex-col gap-1 ">
            {chatCtx?.chat.map(item => (
                <div
                    key={item.id}
                    className={`border border-white/20 rounded-md p-2 text-sm 
                       ${item.user === UserCtx?.user ? 
                        'self-end  bg-green-800 text-rigth ' :
                        'self-start bg-slate-600 text-left ' }
                    `}
                    >
                    
                        <div className=" max-w-full font-bold">{item.user}</div>
                        <p>{item.text}</p>
                </div>
            ))}
        </div>
    )
}