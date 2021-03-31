export function collectionData(collection, key, returnField) {
    var singleDataFromCollection = collection[key];
    if (singleDataFromCollection !== undefined && singleDataFromCollection !== null){
        var specificRow =  singleDataFromCollection[returnField];
        if (specificRow !== undefined || specificRow !== null){
            return specificRow;
        }else{
            console.log('"'+returnField+'" Return Field Not Found');
            return null;
        }
    }else{
        console.log('"'+key+'" Key Not Found');
        return null;
    }
}