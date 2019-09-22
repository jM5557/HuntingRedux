function importAll (r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    
    return convertToArray(images);
}

function convertToArray (data_obj) {
    let result = [];

    for(var i in data_obj)
        result.push([i, data_obj [i]]);

    return result;
} 

export default importAll;