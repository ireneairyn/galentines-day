import { AuthUser } from '@/models/authUser';
import { MutationTree } from 'vuex';
import { IAuthUserState } from './state';

const mutations: MutationTree<IAuthUserState> = {
    //Mutación para añadir el token al state
    setToken(state: IAuthUserState, token: string) {
        console.log("setToken", {state, token})
        state.token = token;
    },

    //Mutación para añadir el usuario autorizado al state
    setAuthUser(state: IAuthUserState, authUser: AuthUser) {
        state.authUser = authUser;
    },
    //Mutación para saber si estoy cargando la petición
    setIsLoading(state: IAuthUserState, value: boolean){
        state.isLoading = value;
    },

    deleteToken(state: IAuthUserState) {
        state.token = null;
    },
}

export default mutations;