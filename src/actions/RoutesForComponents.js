export const routesSaver = (e, postFlag) => {
    if(e.type==='click'){
        localStorage.setItem('route', e.target.id)
    }
    console.log(e);
    postFlag&&localStorage.setItem('route', e)
}