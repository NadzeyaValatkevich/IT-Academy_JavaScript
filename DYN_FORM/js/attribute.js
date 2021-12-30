export function setAttributes(elem, attribs) {
    for(let key in attribs) {
        elem.setAttribute(key, attribs[key]);
    }
};
