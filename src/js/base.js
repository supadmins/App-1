var docEl = document.documentElement;
function setRem() {
    var visualView = Math.min(docEl.getBoundingClientRect().width, 540);
    newBase = 100 * visualView / 750;
    docEl.style.fontSize = newBase + 'px';
}
var tid;
window.addEventListener('resize', function () {
    clearTimeout(tid);
    tid = setTimeout(setRem, 300);
});
window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        clearTimeout(tid);
        tid = setTimeout(setRem, 300);
    }
});
setRem();