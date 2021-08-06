import { createContext } from "react";
const NotificationContext=createContext({
    notification :null, //{Title,message,status}
    showNotification :function(){},
    hideNotification:function(){}
});
function NotificationContextProvider(props){
    <NotificationContext.Provider>
    {props.children}

    </NotificationContext.Provider>
}

export default NotificationContext