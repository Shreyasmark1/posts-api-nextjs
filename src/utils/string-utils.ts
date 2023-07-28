// converts object to query param
export const toQueryParams = (queryParams : any): String => {
    // throw error if query param is empty
    if (Object.keys(queryParams).length === 0) throwEmptyQueryParam()
    return `?${new URLSearchParams(queryParams).toString()}`
}
