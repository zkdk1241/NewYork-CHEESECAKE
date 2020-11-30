$(document).ready(function(){
    var resizeId = "";

window.addEventListener('resize', function(){
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 250);
});

function doneResizing(){
    console.log('doneResizing Window Width: '+window.innerWidth);
    //반응형 레이아웃 처리
}
})