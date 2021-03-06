<!-- Standard Meta -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width">


<?php if(is_semantic_dev) {?>
    <link rel="stylesheet/less" type="text/css" href="/public/framework/semantic/src/semantic.less">
<script src="/public/framework/semantic/src/less.min.js"></script>
<?php }else{?>
<link rel="stylesheet" type="text/css" href="/public/framework/semantic/out/semantic.css">
<link rel="stylesheet" type="text/css" href="/public/framework/semantic/out/semantic.js">
<?php }?>

<!-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.2.13/dist/semantic.min.css"> -->
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.2.13/dist/semantic.min.js"></script>
<!--  -->
<style>
    .column {
        max-width: 450px;
    }
</style>

<div style="margin-top:100px;"></div>


<div class="ui middle aligned center aligned grid">
    <div class="column">
        <form  action ="<?=my_site_url(user_uri."/{$mode}")?>" method="POST"  class="ui large form " style="max-width: 90%; margin: 0 auto;">
			<?php if($mode === 'add'){?>
            <!-- 프로필 사진 시작-->
            <div class="field">
                <iframe  style="height:160px;width:160px;"id="profilePhoto_upload" src="<?=site_url(user_uri."/profilePhoto_upload")?>" frameborder=0 framespacing=0 marginheight=0 marginwidth=0 scrolling=no vspace=0>
                <!-- <div class="ui middle aligned center aligned grid">
                </div> -->
                </iframe>   
            </div>
            <input type='hidden' name='profilePhoto' value="<?=set_value_data($user,'profilePhoto')?>"/>
            <!-- 프로필 사진 끝 -->

            <!-- <div style="margin-top:15px;"></div> -->
            
            <div class="field">
                <input type="text" name="userName" placeholder="아이디" value="<?=set_value('userName')?>">
            </div>
            <?php }else{?>

            <div class="ui items" style="margin-bottom:0px;">
                <div class="item" style="margin-bottom:0px;">
                    <div class="content" style="padding-top:20px; padding-bottom:10px;">
                        <div class="header">
                        <img style="width:40px;"src="<?=domain_url("/public/icon/golfman.png")?>" alt=""/>
                        <span ><?="{$user->name}({$user->userName})"?>
                        </span></div>
                        <div class="meta">
                        <span><i class="phone icon"></i><?=$user->phone?></span>
                        </div>
                    <!-- <div class="description">
                        <p></p>
                    </div> -->
                    <div class="extra">
                        골프패스 <?=$user->kind?>입니다.
                    </div>
                    </div>

                    <div class="field">
                        <iframe  style="width:159px"id="profilePhoto_upload" src="<?=site_url(user_uri."/profilePhoto_upload")?>" frameborder=0 framespacing=0 marginheight=0 marginwidth=0 scrolling=no vspace=0	 >
                            <div class="ui centered grid ">
                    </div>
                        </iframe>   
                        <input type='hidden' name='profilePhoto' value="<?=set_value_data($user,'profilePhoto')?>"/>
                    </div>
                </div>
            </div>
                <!-- <div style="margin-top:0px;" class="ui header"><img style="width:40px;"src="<?=domain_url("/public/icon/golfman.png")?>" alt=""><?="{$user->name}({$user->userName})"?></div>
                <p><i class="phone icon"></i><b><?=$user->phone?></b></p> -->
            <?php }?>
            <div class="field">
                <input type="password" name="password" placeholder="비밀번호" value="<?=set_value('password')?>" >
            </div>
            <div class="field">
                <input type="password" name="re_password" placeholder="비밀번호 확인" value="<?=set_value('re_password')?>">
            </div>


            <div class="field">
                <input type="text" name="name" placeholder="이름" value="<?=set_value_data($user,'name')?>">
            </div>


            <div class="field">
                <input type="text" name="birth" placeholder="생년월일" value="<?=set_value_data($user,'birth')?>">
            </div>

            <div class="two fields">
                <div class="field">
                    <input type="text" name="phone" placeholder="휴대폰 번호" value="<?=set_value_data($user,'phone')?>">
                    
                </div>
                <div class="field">
                    <a  style=""class="ui fluid positive basic button" href ="javascript:auth_popup('<?=site_url(user_uri."/phone_auth")?>','phone')">휴대폰 인증</a>
                </div>
            </div>
         
            <div class="field">
                <input type="text" name="email" placeholder="이메일" value="<?=set_value_data($user,'email')?>">
            </div>
            <div class="field">
                <input type="text" name="address" placeholder="주소" value="<?=set_value_data($user,'address')?>">
            </div>




            <!-- <div class="ui sub header">구력</div> -->
            <select name="option_1" class="ui fluid search dropdown">
                <option value="">구력</option>
                <option value="30년 이상" <?=my_set_selected($user,'option_1',"30년 이상")?>>30년 이상</option>
                <option value="20~29년" <?=my_set_selected($user,'option_1',"20~29년")?>>20~29년</option>
                <option value="15~19년"  <?=my_set_selected($user,'option_1',"15~19년")?>>15~19년</option>
                <option value="10~15년"  <?=my_set_selected($user,'option_1',"10~15년")?>>10~15년</option>
                <option value="5~9년"  <?=my_set_selected($user,'option_1',"5~9년")?>>5~9년</option>
                <option value="0~4년"  <?=my_set_selected($user,'option_1',"0~4년")?>>0~4년</option>
            </select>
            <!-- <div class="ui sub header">평균스코어</div> -->
            <div style="margin-top:15px;"></div>
            <select name="option_2" class="ui fluid search dropdown">
                <option value="">평균스코어</option>
                <option value="프로" <?=my_set_selected($user,'option_2',"프로")?>>프로</option>
                <option value="싱글" <?=my_set_selected($user,'option_2',"싱글")?>>싱글</option>
                <option value="~90" <?=my_set_selected($user,'option_2',"~90")?>>~90</option>
                <option value="91~100" <?=my_set_selected($user,'option_2',"91~100")?>>91~100</option>
                <option value="100~120" <?=my_set_selected($user,'option_2',"100~120")?>>100~120</option>
                <option value="입문자" <?=my_set_selected($user,'option_2',"입문자")?>>입문자</option>
            </select>
            <div style="margin-top:15px;"></div>
            <!-- <div class="ui sub header">해외 골프시 선호하는 국가(복수선택 가능)</div> -->
            <div class="ui fluid multiple search selection dropdown">
                <input name="option_3" type="hidden"  value="<?=set_value_data($user,'option_3')?>">
                <i class="dropdown icon"></i>
                <div class="default text">해외 골프 시 선호하는 국가 (복수 선택 가능)</div>
                <div class="menu">
                    <div class="item" data-value="일본">일본</div>
                    <div class="item" data-value="태국">태국</div>
                    <div class="item" data-value="필리핀">필리핀</div>
                    <div class="item" data-value="중국">중국</div>
                    <div class="item" data-value="말레이시아">말레이시아</div>
                    <div class="item" data-value="미국">미국</div>
                    <div class="item" data-value="유럽">유럽</div>
                    <div class="item" data-value="사이판/괌">사이판/괌</div>
                    <div class="item" data-value="기타">기타</div>
                </div>
            </div>
            <div style="margin-top:15px;"></div>
            <!-- <div class="ui sub header">해외 골프시 자주가본 국가(복수선택 가능)</div> -->
            <div class="ui fluid multiple search selection dropdown">
                <input name="option_4" type="hidden" value="<?=set_value_data($user,'option_4')?>">
                <i class="dropdown icon"></i>
                <div class="default text">해외 골프 시 자주 가본 국가 (복수 선택 가능)</div>
                <div class="menu">
                    <div class="item" data-value="일본">일본</div>
                    <div class="item" data-value="태국">태국</div>
                    <div class="item" data-value="필리핀">필리핀</div>
                    <div class="item" data-value="중국">중국</div>
                    <div class="item" data-value="말레이시아">말레이시아</div>
                    <div class="item" data-value="미국">미국</div>
                    <div class="item" data-value="유럽">유럽</div>
                    <div class="item" data-value="사이판/괌">사이판/괌</div>
                    <div class="item" data-value="기타">기타</div>
                </div>
            </div>

            <div style="margin-top:15px;"></div>

            <!-- <div class="ui sub header">해외 골프시 향후 가보고 싶은국가(복수선택 가능)</div> -->
            <div class="ui fluid multiple search selection dropdown">
                <input name="option_5" type="hidden" value="<?=set_value_data($user,'option_5')?>">
                <i class="dropdown icon"></i>
                <div class="default text">해외 골프 시 향후 가고 싶은 국가 (복수 선택 가능)</div>
                <div class="menu">
                    <div class="item" data-value="일본">일본</div>
                    <div class="item" data-value="태국">태국</div>
                    <div class="item" data-value="필리핀">필리핀</div>
                    <div class="item" data-value="중국">중국</div>
                    <div class="item" data-value="말레이시아">말레이시아</div>
                    <div class="item" data-value="미국">미국</div>
                    <div class="item" data-value="유럽">유럽</div>
                    <div class="item" data-value="사이판/괌">사이판/괌</div>
                    <div class="item" data-value="기타">기타</div>
                </div>
            </div>



            <input type="submit" class="ui fluid positive basic button" value="<?=$mode === "add" ? "회원가입" : "수정하기"?>" style="margin-top:10px;"></input>


            <div class="ui error message"></div>
			<div class="ui horizontal divider">
                Or
            </div>
			
            <a href="javascript:open_popup('<?=site_url(api_facebook_uri."/request_auth")?>','facebook','800','880');" class="ui facebook fluid large submit button" style="margin-bottom:10px;"><i class="facebook icon"></i>페이스북으로 로그인</a>
            <a href="javascript:open_popup('<?=site_url(api_naver_uri."/request_auth")?>','naver');" class="ui naver fluid large submit button" style="margin-bottom:10px;">네이버로 로그인</a>
            <a href="javascript:open_popup('<?=site_url(api_kakao_uri."/request_auth")?>','kakao');" class="ui kakao fluid large submit button"><i class="kakao icon"></i>카카오로 로그인</a>


        </form>
    </div>

</div>


<div style="margin-bottom:100px;"></div>

<script>
    function auth_popup(url,name){
    var option = "width=400,height=500";
    var input = document.querySelector("input[name="+name+"]");

    // console.log(input.value);
    window.open(url+"?"+name+"="+input.value,name+'_auth',option);
}
function img_upload_popup(url){
    var option = "width=400,height=500";

    // console.log(input.value);
    window.open(url,'이미지업로드',option);
}


    $('.ui.dropdown')
        .dropdown({
            allowAdditions: true
        });
</script>