import axios from "axios";
import Service from "../../Lib/service";

const AuthService = {
    postLoginDetail: async (data: any) => {
        try {
            return await Service.post(
                {
                    url: `agent/login`,
                    data,
                }
            );
        } catch (error) {
            throw error;
        }
    }
}

export default AuthService;
