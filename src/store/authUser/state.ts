import { AuthUser } from "@/models/authUser";

export interface IAuthUserState {
    token: string | null;
    authUser: AuthUser | null;
    isLoading: boolean;
}

function state(): IAuthUserState {
    return {
        token: null,
        authUser: null,
        isLoading: false, 
    }
}

export default state;