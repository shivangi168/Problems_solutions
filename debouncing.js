function debounce(fn, delay) {
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context,args)
        },delay)
    }


}


debounce("heelo",300);

module.exports = debounce