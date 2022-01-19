import { LOAD_PROFILE, 
    LOG_IN,
    SIGN_UP,
 } from "../actions/ReducerActions"

const initialState = {
    posts: [],
    userProfile: [],
    loggedIn: false,
    loaded: false,
    loadedProfile: false
}
const sorting = arr => {
    let dates = [];
    for(let el of arr){
        dates.unshift(Math.round(new Date(el.createdAt).getTime()/1000))
    }
    dates.sort(function(a, b) { return a - b });
    let sortedDate = []
    for(let el of arr){
        for(let date of dates){
            if(date===Math.round(new Date(el.createdAt).getTime()/1000)){
                sortedDate.unshift({...el, editCommentMode: false});
                if(el.comments&&el.comments.length!==undefined&&el.comments.length!==0&&el.comments.length!==1){
                    let array = sorting(el.comments);
                    el.comments = array;
                }
            }
        }
    }
    return sortedDate
}
export const sagaReducer = (state = initialState, action) =>{
       switch (action.type) {
        default:
            return state
       }
       
}