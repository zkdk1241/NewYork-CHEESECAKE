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
        console.log("sdf")
        let starting_point=$('#start_place_text').attr('value');
        let destination=$('#end_place_text').attr('value');
        let desirability=$('#check_label'+select_num).attr('value');

       // $('#rank_text1').text(starting_point);
       // $('#rank_text2').text(destination);
       // $('#rank_text3').text(desirability);

        let str="https://www.google.co.kr/maps/dir/"+starting_point+", New York/"+destination+", New York";
        window.open(str);
        
        //의사결정나무
    })
})