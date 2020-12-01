$(document).ready(function(){
    $('.select_group').click(function(e){
        //colorChange
        let num=$('.select_group').index(this)
        let img_str="#select_image"+(num+1);
        let label_str="#select_label"+(num+1);
        $('.select_group img').attr('src', '../images/select_before.png');
        $('.select_group label').css('background-color', 'transparent');
        $(img_str).attr('src', '../images/select_after.png');
        $(label_str).css('background-color', '#FEF2CE');

        //rankChange
    })
    $('.spot_rank_text').click(function(){
        window.open("https://www.google.co.kr/maps/search/Lady+M+Cake+Boutique")
    })
})