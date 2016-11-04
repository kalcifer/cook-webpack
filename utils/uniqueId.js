const genUniqueId = (function () {
    let count = 0;

    return function (id = '') {
        return id + count++;
    };
})();

export default genUniqueId;
