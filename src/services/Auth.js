import Http from "./Http";
import Store from "../store";
import { AsyncStorage } from "react-native";

class AuthService {
    _authTokenKey;
    _authUser;

    login(username, password) {
        console.log(username, password);
        return new Promise(async (resolve, reject) => {
            Http.post(
                "api/login",
                {
                    email: username,
                    password: password
                },
                {
                    "Content-Type": "application/json"
                }
            )
                .then(async response => {
                    // console.log(
                    //     "ssssssss",
                    //     JSON.parse(JSON.stringify(response))
                    // );
                    // const jsoonResponse = JSON.parse(JSON.stringify(response));
                    // console.log("jsoonResponse.status", jsoonResponse.status);

                    if (response.status === 200) {
                        const responseToken = JSON.parse(response._bodyInit)
                            .token;
                        //store token in async storage
                        await AsyncStorage.setItem(
                            "@InstaClone:key",
                            responseToken
                        );
                        resolve(response);
                    } else {
                        reject(response);
                    }
                })
                .catch(error => {
                    reject(error);
                });
        });
    }

    check() {
        return new Promise(async (resolve, reject) => {
            try {
                const token = await AsyncStorage.getItem("@InstaClone:key");
                if (token !== null) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            } catch (error) {
                reject(error);
                console.log("error in geting token ", error);
                alert(error);
            }
        });
    }
}

export default new AuthService();
