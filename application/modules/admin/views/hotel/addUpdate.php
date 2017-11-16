
<style>
    li{
        display:inline;
    }
</style>

<form action="<?=my_site_url(admin_hotel_uri."/$mode")?>" method="post">
업체명<input type="text" name="name" value="<?=set_value_data($row,'name')?>" > <?=form_error('name',false,false)?><br> 
<!-- 호텔설명<input type="text" name="desc" value="<?=set_value_data($row,'desc')?>"> <?=form_error('desc',false,false)?><br> -->
객실 수<input type="text" name="room_count" value="<?=set_value_data($row,'room_count')?>"> <?=form_error('room_count',false,false)?><br>
객실 타입<input type="text" name="room_type" value="<?=set_value_data($row,'room_type')?>"> <?=form_error('room_type',false,false)?><br>
침실<input type="text" name="bedroom" value="<?=set_value_data($row,'bedroom')?>"> <?=form_error('bedroom',false,false)?><br>
화장실<input type="text" name="bathroom" value="<?=set_value_data($row,'bathroom')?>"> <?=form_error('bathroom',false,false)?><br>
최대 인원<input type="text" name="maxium_number_of_people" value="<?=set_value_data($row,'maxium_number_of_people')?>"> <?=form_error('maxium_number_of_people',false,false)?><br>
침대<input type="text" name="bed" value="<?=set_value_data($row,'bed')?>"> <?=form_error('bed',false,false)?><br>
체크인/체크아웃<input type="text" name="check_in_out" value="<?=set_value_data($row,'check_in_out')?>"> <?=form_error('check_in_out',false,false)?><br>
평일 가격<input type="text" name="weekday_price" value="<?=set_value_data($row,'weekday_price')?>"> <?=form_error('weekday_price',false,false)?><br>
주말 가격<input type="text" name="weekend_price" value="<?=set_value_data($row,'weekend_price')?>"> <?=form_error('weekend_price',false,false)?><br>
공휴일 가격<input type="text" name="holiday_price" value="<?=set_value_data($row,'holiday_price')?>"> <?=form_error('holiday_price',false,false)?><br>
<input type="submit" value="보내기">
</form>
<br>



<?php if(strpos($mode, "update") >-1 ){?>
<!-- 호텔옵션 시작 -->
<form   action="<?=my_site_url(admin_hotel_uri."/options_reset")?>" method ="post">
<?php 
        $v_options=array("한국스태프","와이파이(로비)","와이파이(룸)","공항 셔틀 버스","수영장","피트니스 센터","사우나",
        "마사지 샵","커피숍","레스토랑","바","룸 서비스","+24시간 룸 서비스","24시간 체크인"
        ,"레이트 체크 아웃","금고","헤어 드라이기","비데","생수","노래방","편의점","편의점","택시대기","환전","냉난방",
        "흡연가능");
        for($i=0 ; $i < count($v_options); $i++){?>
        <div class="ui checkbox">
          <input type="checkbox" tabindex="0" class="hidden" name="option[]" value="<?=$v_options[$i]?>" <?=my_set_checked_arr($options,'name',$v_options[$i])?>>
          <label><?=$v_options[$i]?></label>
        </div>
        <?php }?>


  
  <input type="hidden" name="hotel_id" value="<?=$row->id?>">
  <input type="submit" value="호텔옵션 추가">
</form>
<!-- 호텔옵션 끝-->

<!-- 호텔 ref 상품 시작 -->
상품 추가하기
<form method="post"action="<?=my_site_url(admin_hotel_uri."/ref_product_add")?>">
<input type="hidden" name="hotel_id" value="<?=$row->id?>">
<?php for($i=0; $i < count($products) ; $i++){
    if($i%5 === 0) echo "<br>"    ;
    ?>
<input type='radio' name='product_id' value='<?=$products[$i]->id?>' /><a href="<?=my_site_url(admin_product_uri."/update/{$products[$i]->id}")?>"><?=$products[$i]->name?></a></label>
<?php }?>
<input type="submit" value="보내기">
</form>

<br>
이 호텔과 연결된 상품 리스트
<ul>
    <?php for($i=0; $i<count($ref_products) ; $i++){?>
    
        <li><a href="<?=my_site_url(admin_product_uri."/update/{$ref_products[$i]->product_id}")?>"><?=$ref_products[$i]->name?></a></li>
        <li><a onclick="confirm_redirect('<?=my_site_url(admin_hotel_uri."/ref_product_delete/{$ref_products[$i]->id}")?>','정말 삭제하시겠습니까? 복구 할 방법이 없습니다.')" href="#">삭제</a></li>
        <br>
    <?php }?>

</ul>

<!-- 호텔 ref 상품 끝 -->

<?php }?>





<br>
<a href="<?=my_site_url(admin_hotel_uri."/gets")?>">목록으로</a>

<script>
$('.ui.radio.checkbox')
  .checkbox()
;
$('.ui.checkbox')
  .checkbox()
;
</script>