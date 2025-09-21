import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

type UserAcc = {
    name: string;
    last_name: string;
    Phone: string;
    email: string;
}
type AccType = {
    Acc: UserAcc;
    setAcc: Dispatch<SetStateAction<UserAcc>>;
}
export const AccContext = createContext<AccType | null>(null)

export function AccProvider({ children }: { children: ReactNode }) {
    const [Acc, setAcc] = useState<UserAcc>({
        name: "john",
        last_name: "morphin",
        Phone: "09133292009",
        email: "JohnMorphin@gmail.com",
    });
    return (
        <AccContext.Provider value={{ Acc,setAcc }}>
            {children}
        </AccContext.Provider >
    )
}
