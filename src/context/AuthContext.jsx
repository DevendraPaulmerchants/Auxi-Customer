import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin]);

    return (
         <AuthContext.Provider value={value}>
            {children}
         </AuthContext.Provider>
    )
}
