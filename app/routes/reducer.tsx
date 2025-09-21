export type Post = {
    title: string;
    id: number;
    body: string;
    userid: number;
}
 type State = {
    loading: boolean,
    data: Post[]
    error: string | null
}
type Action =
    | { type: "fech-Start" }
    | { type: "fech-succes"; payload: Post[] }
    | { type: "fech-err"; payload: string };
export function reducer(state: State, action: Action) {

    switch (action.type) {
        case "fech-Start":
            return { ...state, loading: true, error: null }
        case "fech-succes":
            return { loading: false, data: action.payload, error: null }
        case "fech-err":
            return { loading: false, data: [], error: action.payload }
        default:
            return state
    }
}
export const initialState: State = {
    loading: false,
    data: [],
    error: null,
};