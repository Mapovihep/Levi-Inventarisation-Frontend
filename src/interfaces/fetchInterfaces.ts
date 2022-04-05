export interface fetchState {
    get: boolean,
    update: boolean,
    add: boolean,
    delete: boolean,
    error: any
}
export const inititialFetchState = {
    get: false,
    update: false,
    add: false,
    delete: false,
    error: null
}