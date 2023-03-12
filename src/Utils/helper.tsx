import * as Constants from "./constants";
import { notification } from "antd";

export declare type NotificationPlacement =
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight";

export const NotificationWithIcon = (
    type: string,
    message: string,
    placement: NotificationPlacement = "topRight"
): void => {
    if (type === "success") {
        notification.success({
            message,
            placement,
        });
    } else if (type === "error") {
        notification.error({
            message,
            placement,
        });
    } else {
        notification.info({
            message,
            placement,
        });
    }
};

export const getUserToken = () => {
    const { AUTH_TOKEN } = Constants;
    return localStorage.getItem(AUTH_TOKEN);
};

export const isUserLoggedIn = () => {
    const token = getUserToken();
    if (token) {
        return true;
    }
    return false;
};