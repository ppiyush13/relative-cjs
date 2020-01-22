import relative from 'relative';

function unixify(str) {
    return str.replace(/[\\\/]+/g, '/');
}

export default (from, to) => {
    const relativePath = relative(from, to);
    const unixifiedPath = unixify(relativePath);

    if(unixifiedPath.length === 1 && unixifiedPath === '.')
        return './.';
    else if(unixifiedPath.charAt(0) === '.')
        return unixifiedPath;
    else
        return './' + unixifiedPath;
};
