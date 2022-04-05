
const compare = (item: any, arr: typeof item[]) : boolean => {
    if(item!=undefined&&arr!=undefined){
        console.log(arr.find(item));
        return arr!=undefined&&arr.includes(item);
    }
    return false;
}
export default compare;