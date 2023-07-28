import { toQueryParams } from "@/utils/string-utils";
import { httpClient } from "../axios";
import { logOnDev } from "@/utils/logger/dev-logger";

interface Get {
    path: string,
    param: any
}

interface Post {
    path: string,
    body: any,
    param: any
}

interface Put {
    path: string,
    body: any,
    param: any
}

interface Delete {
    path: string,
    body: any,
    param: any
    recourceId: number,
}


export const httpGet = ({ path, param = null }: Get): Promise<any> => {
    return new Promise((resolve, reject) => {

        if (param) {
            path = `${path}${toQueryParams(param)}`
        }

        httpClient.get(path)
            .then((res) => {
                // check for internal status
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export const httpPost = ({ path, body = null, param = null }: Post): Promise<any>=> {
    return new Promise((resolve, reject) => {

        if (param) {
            path = `${path}${toQueryParams(param)}`
        }

        httpClient.post(path, body)
            .then((res) => {
                // check for internal status
                resolve(res)
            })
            .catch((error) => {
                reject(error);
            })

    })
}

export const httpPut = ({ path, body = null, param = null }: Put): Promise<any> => {
    return new Promise((resolve, reject) => {

        if (param) {
            path = `${path}${toQueryParams(param)}`
        }

        httpClient.put(path, body)
            .then((res) => {
                // check for internal status
                resolve(res)
            })
            .catch((error) => {
                reject(error);
            })
    })
}

export const httpDelete = ({ path, body = null, param = null, recourceId}: Delete): Promise<any> => {
    return new Promise((resolve, reject) => {

        if (param) {
            path = `${path}${toQueryParams(param)}`
        }

        if(!isNaN(recourceId) || recourceId == 0){
            logOnDev(`🚨 [API] DELETE ${path} | Error '\n' id of the resource getting deleted cannot be null or 0. No request sent`);
            reject("This resource cannot be deleted");
        }

        httpClient.delete(path, body)
            .then((res) => {
                // check for internal status
                resolve(res)
            })
            .catch((error) => {
                reject(error);
            })
    })
}

