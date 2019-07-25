
function componentToHex(c){
    let hex = c.toString(16);

    return hex.length == 1 ? '0' + hex : hex;
}

export function rgbToHex(r, g, b){

    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function hexToRgb(hex){
    hex = hex.replace(/#/, '');
    let res = [];

    if(hex.length == 3){
        res[0] = parseInt(hex.substring(0, 1), 16);
        res[1] = parseInt(hex.substring(1, 2), 16);
        res[2] = parseInt(hex.substring(2, 3), 16);
    }else{
        res[0] = parseInt(hex.substring(0, 2), 16);
        res[1] = parseInt(hex.substring(2, 4), 16);
        res[2] = parseInt(hex.substring(4, 6), 16);
    }

    return res;
}