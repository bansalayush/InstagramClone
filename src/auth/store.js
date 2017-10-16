import { observable } from "mobx";
import Auth from "../services/Auth";
class Store {
    @observable isLogging = false;
    @observable signinErrorMessage = "";
    @observable signinSuccessMessage = "";

    @observable isChecking = false;

    login(successCallback, failureCallback) {
        this.isLogging = true;
        Auth.login("peter@klaven", "cityslicka")
            .then(response => {
                console.log("====================================");
                console.log(response);
                console.log("====================================");
                this.isLogging = false;
                successCallback();
            })
            .catch(error => {
                failureCallback();
                this.isLogging = false;
                alert("error in login");
                console.log("error in logging in ", error);
            });
    }

    check(successCallback, failureCallback) {
        this.isChecking = true;
        Auth.check()
            .then(response => {
                console.log("====================================");
                console.log(response);
                console.log("====================================");

                if (response) {
                    successCallback();
                } else {
                    failureCallback();
                }
                this.isChecking = false;
            })
            .catch(error => {
                console.log("error in finding storage Token", error);
                alert(error);
                failureCallback();
                this.isChecking = false;
            });
    }
}

export default new Store();
