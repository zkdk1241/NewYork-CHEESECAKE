$(document).ready(function(){
    var select_num=2;
    $('.check_group').click(function(e){
        let num=$('.check_group').index(this);
        select_num=num+1;
        let img_str="#check_image"+select_num;
        $('.check_group img').attr('src', '../images/check_before.png');
        $(img_str).attr('src', '../images/check_after.png');
    })
    $('#play_btn').click(function(){
        let starting_point=$('#start_place_text').attr('value');
        let destination=$('#end_place_text').attr('value');
        let time_zone=$('#check_label'+select_num).attr('value');

        $('#receipt_text1').text(starting_point);
        $('#receipt_text2').text(destination);
        $('#receipt_text3').text(time_zone);
        //let str="https://www.google.co.kr/maps/dir/"+starting_point+", New York/"+destination+", New York";
        //window.open(str);

        //영수증 업데이트
    })
})