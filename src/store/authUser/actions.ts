import fakePlatziApi from "@/api/fakePlatziApi";
import { AuthUser } from "@/models/authUser";
import { UserRequest } from "@/models/userRequest";
import router from "@/router";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IAuthUserState } from "./state";

const actions: ActionTree<IAuthUserState, IState> = {
  async checkToken({ commit }) {
    const token = localStorage.getItem("token");
    commit("setToken", token);
  },

  async fetchToken({ commit }, body: UserRequest) {
    try {
      const { data } = await fakePlatziApi.post("/auth/login", body);
      console.log({ data });
      commit("setToken", data.access_token);
      //Guardamos el token en el localStorage y redirigimos a home
      localStorage.setItem("token", data.access_token);
      router.push({ name: "products" });
    } catch (error: any) {
      console.error(error);
      alert("Unauthorized user");
    }
  },

  async fetchAuthUser({ commit }, token: string) {
    commit("setIsLoading", true);
    console.log("fetchAuthUser", { token });
    const { data } = await fakePlatziApi.get<unknown, AxiosResponse<AuthUser>>(
      "/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    commit("setIsLoading", false);
    commit("setAuthUser", data);
    localStorage.setItem("name", data.name);
  },

  deleteToken({ commit }) {
    commit("deleteToken");
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    router.push({ name: "login" });
  },
};

export default actions;
