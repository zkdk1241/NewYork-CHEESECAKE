$(document).ready(function(){
    $('.check_group').click(function(e){
        let num=$('.check_group').index(this)
        let img_str="#check_image"+(num+1);
        // let label_str="#check_label"+(num+1);
        $('.check_group img').attr('src', '../images/check_before.png');
        // $('.check_group label').css('background-color', 'transparent');
        $(img_str).attr('src', '../images/check_after.png');
        // $(label_str).css('background-color', '#FEF2CE');
    })
    $('#play_btn').click(function(){
        //의사결정나무
    })
})