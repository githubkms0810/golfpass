<!DOCTYPE html>
<html lang="en-US" class="no-js">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name='robots' content='noindex,follow' />

    <link rel='stylesheet' id='tourmaster-style-css' href='/public/etc/package/css/style4_9_5.css' type='text/css' media='all' />
    <link rel='stylesheet' id='gdlr-core-google-font-css' href='/public/etc/package/css/style_font.css' type='text/css' media='all' />
    <link rel='stylesheet' id='tourmaster-style-css' href='/public/etc/package/css/style4_9_5_2.css' type='text/css' media='all' />
    <link rel='stylesheet' id='tourmaster-custom-style-css' href='/public/etc/package/css/style4_9_5_3.css' type='text/css' media='all' />
    <link rel='stylesheet' id='traveltour-style-core-css' href='/public/etc/package/css/style4_9_5_4.css' type='text/css' media='all' />
    <link rel='stylesheet' id='traveltour-custom-style-css' href='/public/etc/package/css/style4_9_5_5.css' type='text/css' media='all' />
    <link rel='stylesheet' id='gdlr-core-plugin-css' href='/public/etc/package/css/style4_9_5_6.css' type='text/css' media='all' />
    <link rel='stylesheet' id='gdlr-core-page-builder-css' href='/public/etc/package/css/style4_9_5_7.css' type='text/css' media='all' />
    <link rel='stylesheet' href='/public/etc/package/css/style.css' type='text/css' media='all' />
    <script src="/public/etc/package/js/jquery-3.2.1.min.js"></script>

    <script type='text/javascript' src='/public/etc/package/js/jquery1_12_4.js'></script>
    <link rel="stylesheet" href="http://cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">

    <link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" type="text/css" />
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
    <script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script>
	<title>골프패스</title>
    <!--[if lt IE 9]> <script type='text/javascript' src='https://demo.goodlayers.com/traveltour/wp-content/themes/traveltour/js/html5.js?ver=4.9.5'></script> <![endif]-->
</head>
<!-- 로딩딤시작 -->
    <style>
    .jy-dim
    {
        position: fixed;
        width: 100%;
        height :100%;
        background-color:black;
        z-index :10000;
    }
    .jy-loader {
        z-index :10001;
        position: fixed;
        top: 50%;
        left: 50%;
        margin-top: -150px;
        margin-left: -60px; 
        border: 16px solid #f3f3f3; /* Light grey */
        border-top: 16px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>
<script>
    $(document).ready(function(){
        $(".jy-dim").fadeOut(500);
    })
</script>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-82379730-2"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-82379730-2');
</script>

<div class="jy-dim">
    <div class="jy-loader"></div>
</div>
<!-- 로딩딤끝 -->
<body class="tour-template-default single single-tour postid-4649 gdlr-core-body tourmaster-body traveltour-body traveltour-body-front traveltour-full  traveltour-with-sticky-navigation gdlr-core-link-to-lightbox">
    <div class="menu-container position-fixed">
        <div class="menu-sliders"></div>
        <div class="menu-sliders"></div>
        <div class="menu-sliders"></div>
        <div class="menu">
            <ul class="list-unstyled">
                <?php if(is_admin()){?>
                <li><a style="font-family: 'notokr-light', sans-serif; font-size: 20px; font-weight: normal; color: #fff;" href="<?=site_url(admin_home_uri.'')?>">관리자 페이지</a></li>
                <?php }?>
                <li><a style="font-family: 'notokr-light', sans-serif; font-size: 20px; font-weight: normal; color: #fff;" href="<?=site_url(shop_category_uri.'/gets_by_name/나라별')?>">지역별 골프장</a></li>
                <li><a style="font-family: 'notokr-light', sans-serif; font-size: 20px; font-weight: normal; color: #fff;" href="<?=site_url(golfpass_panel_uri.'/gets')?>">그늘집 by GOLFPASS</a></li>
                <li><a style="font-family: 'notokr-light', sans-serif; font-size: 20px; font-weight: normal; color: #fff;" href="<?=site_url(content_uri.'/gets?board_id=4')?>">고객센터</a></li>
                <?php if(!is_login()){?>
                <li><a style="font-family: 'notokr-light', sans-serif; font-size: 20px; font-weight: normal; color: #fff;" href="<?=site_url(user_uri.'/login')?>">로그인</a></li>
                <li><a style="font-family: 'notokr-light', sans-serif; font-size: 20px; font-weight: normal; color: #fff;" href="<?=site_url(user_uri.'/register_agree_1')?>">회원가입</a></li>
                <?php }?>
                <?php if(is_login()){?>
                <li><a style="font-family: 'notokr-light', sans-serif; font-size: 20px; font-weight: normal; color: #fff;" href="<?=site_url(shop_mypage_uri.'/gets_wishlist')?>">마이페이지</a></li>
                <li><a style="font-family: 'notokr-light', sans-serif; font-size: 20px; font-weight: normal; color: #fff;" href="<?=site_url(user_uri.'/logout')?>">로그아웃</a></li>
                <?php }?>
            </ul>
        </div>
    </div>
    <header id="header" class="container-fluid">
        <!--  NOTE mobile -->
        <!--<nav id='sm-nav' class="row no-gutters justify-content align-items-stretch d-sm-none panel-nav">
            <div id="logo" class='col-3 justify-content-center d-flex align-self-center align-items-center'>
                <a href="<?=site_url()?>"> <img src="/public/sangmin/img/icon/logo_mobile.png" class="d-md-none" alt=""></a>
            </div>
            <div id='nav-icon-box' class="offset-2 col-5 d-flex align-items-stretch justify-content-end">
                <div id="search" class="d-flex align-items-center">
                    <a class="mk-search-trigger mk-fullscreen-trigger" href="#" id="search-button-listener">
                    <span><i class="xi xi-search" id="search-button"></i></span>
                </a>
                    <div class="mk-fullscreen-search-overlay" id="mk-search-overlay">
                        <a href="#" class="mk-fullscreen-close" id="mk-fullscreen-close-button"><i class="xi xi-close"></i></a>
                        <div id="mk-fullscreen-search-wrapper">
                            <div method="get" id="mk-fullscreen-searchform" action="">
                                <input type="text" value="" placeholder="Search..." id="mk-fullscreen-search-input">
                                <i class="xi xi-search fullscreen-search-icon"><input value="" id="mobile_search_btn" type="submit"></i>
                            </div>
                        </div>
                    </div>
                </div>-->
        <!--<?php if(!is_login()){?>-->
        <!--<div id="login" class="d-flex align-items-center">
                    <a href="<?=site_url(user_uri.'/login')?>" style="color:white;">
                    <span><i class="xi-log-in xi-x"></i></span>
                </a>
                </div>
                <div id="join" class="d-flex align-items-center">
                    <a href="<?=site_url(user_uri.'/register_agree_1')?>" style="color:white;">
                    <span><i class="xi xi-user-plus"></i></span>
                </a>
                </div>
                <!--<?php }else{?>
                <div style="margin-top:25px;"><a href="<?=site_url(shop_mypage_uri." /gets_wishlist ")?>"><img src="<?=$user->profilePhoto?>" alt="" style="width:30px; height:30px; border-radius: 15px;"></a></div>
                <?php }?>-->
        <!--</div>
            <div class="col-2 ml-auto toggle" onclick="$('body').toggleClass('menu-open'); $('.carousel-indicators').toggleClass('d-none d-flex');">
                <span>
                <i class="xi xi-bars"></i>
            </span>
            </div>
        </nav>
        <!--NOTE desktop,tabvar nav-->
        <nav id='md-nav' class="row no-gutters justify-content align-items-stretch d-none d-sm-flex">
            <div id="logo" class='col-6 d-flex align-items-center'>
                <!--<figure class="mb-0 d-flex align-items-center d-lg-none">
                    <img src="/public/sangmin/img/icon/logo_mobile.png" class="" alt="">
                </figure>-->
                <a href="<?=site_url()?>">
                    <figure class="mb-0 align-items-center d-none d-lg-flex">
                        <img src="/public/etc/package/image/logo.png" class="" alt="">
                    </figure>
                </a>
                <div class="search-container d-flex align-items-center position-relative">
                    <i class="xi xi-search"></i>
                    <input id="input_search" type="text" placeholder="관심있는 지역이나 골프장을 검색해보세요!">
                    <!--NOTE 검색결과 창-->
                    <div class="search-content-container position-absolute w-100">

                    </div>
                </div>
            </div>
            <div id='nav-icon-box' class="col  d-flex justify-content-end">
                <? if(!is_login()) { ?>
                <div id="login" class="d-flex align-items-center" style="cursor: pointer;" onclick="location.href='<?=site_url(user_uri.'/login')?>';">
                    <span><i class="xi-log-in xi-x"></i></span>
                    <p class="mb-0" style="margin-bottom: 0"><a style="color: white; font-family: 'notokr-regular', sans-serif; font-size: 12px;" href="<?=site_url(user_uri.'/login')?>">로그인</a></p>
                </div>
                <div id="join" class="d-flex align-items-center" style="cursor: pointer;" onclick="location.href='<?=site_url(user_uri.'/register_agree_1')?>';">
                    <span><i class="xi xi-user-plus"></i></span>
                    <p class="mb-0" style="margin-bottom: 0"><a style="color: white; font-family: 'notokr-regular', sans-serif; font-size: 12px;" href="<?=site_url(user_uri.'/register_agree_1')?>">회원가입</a></p>
                </div>
                <? } else { ?>
		        <div style="margin-top:25px; cursor: pointer;" onclick="location.href='<?=site_url(shop_mypage_uri."/gets_wishlist")?>';"><a href="<?=site_url(shop_mypage_uri."/gets_wishlist")?>"><img src="<?=$user->profilePhoto?>" alt="" style="width:30px; height:30px; border-radius: 15px;"></a></div>
		        <div id="logout" class="d-flex align-items-center" style="cursor: pointer;" onclick="location.href='<?=site_url(user_uri.'/logout')?>';">
		            <span><i class="xi-log-out xi-x"></i></span>
		            <p class="mb-0"><a style="color: white; font-family: 'notokr-regular', sans-serif; font-size: 12px;" href="<?=site_url(user_uri.'/logout')?>">로그아웃</a></p>
		        </div>
		        <? } ?>
            </div>
            <div class="col ml-auto toggle" onclick="$('body').toggleClass('menu-open'); $('.carousel-indicators').toggleClass('d-none d-flex');">
                <span>
            <i class="xi xi-bars"></i>
        </span>
            </div>
        </nav>
    </header>

    <div class="traveltour-body-outer-wrapper ">
        <div class="traveltour-body-wrapper clearfix  traveltour-with-transparent-header traveltour-with-frame">

            <div class="traveltour-page-wrapper" id="traveltour-page-wrapper">
                <div class="tourmaster-page-wrapper" id="tourmaster-page-wrapper">

                    <div class="tourmaster-single-header" style="background-image: url(<?=$product->photo?>);">
                        <div class="tourmaster-single-header-background-overlay"></div>
                        <div class="tourmaster-single-header-top-overlay"></div>
                        <div class="tourmaster-single-header-overlay"></div>
                        <div class="tourmaster-single-header-container tourmaster-container">
                            <div class="tourmaster-single-header-container-inner">
                                <div class="tourmaster-single-header-title-wrap tourmaster-item-pdlr">
                                    <h1 class="tourmaster-single-header-title"><?=$product->name?></h1>
                                    <div class="tourmaster-tour-rating tourmaster-tour-rating-empty">0</div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <script>
                        (function($) {
                            $.fn.goTo = function() {
                                $('html, body').animate({
                                    scrollTop: $(this).offset().top + 'px'
                                }, 'fast');
                                return this; // for chaining...
                            }
                        })(jQuery);
                        $.datepicker.setDefaults({
                            dateFormat: 'yy-mm-dd',
                            prevText: '이전 달',
                            nextText: '다음 달',
                            monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                            monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                            dayNames: ['일', '월', '화', '수', '목', '금', '토'],
                            dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
                            dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
                            showMonthAfterYear: true,
                            <?if($product->day_start != '0001-01-01'):?>
                            minDate: new Date("<?=$product->day_start?>"),
                    		maxDate: new Date("<?=$product->day_end?>"),
                    		<?endif?>
                            yearSuffix: '년',
                            onSelect: function(value, date) {
                            	var url = "<?=site_url(shop_package_uri."/get_daily_price")?>";
                            	$.ajax({
                                    type:"post",
                                    url : url,
                                    data : {id:<?=$product->id?>, date: value},
                                    success : function(data){
                                        if(data != "") {
	                                    	$("#price").val(data);
	                                    	var price = "";
	                                    	while(data/1000 >= 1) {
		                                    	temp = data % 1000;
		                                    	if(temp < 10) price = ',00' + temp + price;
		                                    	else if(temp < 100) price = ',0' + temp + price;
		                                    	data = data / 1000;
	                                    	}
	                                    	price = parseInt(data) + price;
	                                        $(".tourmaster-tail").html(price+"원~");
                                        } else {
                                        	$("#price").val("-1");
                                            $(".tourmaster-tail").html("상담요망");
                                        }
                                    },
                                    error: function(xhr, textStatus, errorThrown){
                                        alert('에러...');
                                        $('.loading').fadeOut(500);
                                        console.log('code: '+request.status+"\n"+'message: '+request.responseText+"\n"+'error: '+error);
                                        console.log(errorThrown);
                                    }
                                });
                            }
                        });

                        $(function() {
                            $("#datepicker1").datepicker();
                        });

                        $(function() {
                            $("#datepicker2").datepicker();
                        });

                    </script>






                    <div class="tourmaster-template-wrapper">
                        <div class="tourmaster-tour-booking-bar-container tourmaster-container">
                            <div class="tourmaster-tour-booking-bar-container-inner">
                                <div class="tourmaster-tour-booking-bar-anchor tourmaster-item-mglr"></div>
                                <div class="tourmaster-tour-booking-bar-wrap tourmaster-item-mglr" id="tourmaster-tour-booking-bar-wrap">
                                    <div class="tourmaster-tour-booking-bar-outer">
                                        <div class="tourmaster-header-price tourmaster-item-mglr">
                                            <div class="tourmaster-header-price-ribbon">성인 1인 가격</div>
                                            <div class="tourmaster-header-price-wrap">
                                                <div class="tourmaster-header-price-overlay"></div>
                                                <div class="tourmaster-tour-price-wrap "><span class="tourmaster-tour-price"><span class="tourmaster-tail"><?=number_format($product->price)?>원~</span></span></div>
                                            </div>
                                        </div>
                                        <div class="tourmaster-tour-booking-bar-inner">
                                            <div class="tourmaster-booking-tab-content tourmaster-active" data-tourmaster-tab="booking">
                                                <form class="tourmaster-single-tour-booking-fields tourmaster-form-field tourmaster-with-border" method="get" action="<?=site_url(shop_order_uri."/golfpass")?>" id="tourmaster-single-tour-booking-fields" data-ajax-url="https://demo.goodlayers.com/traveltour/wp-admin/admin-ajax.php"><input type="hidden" name="product_id" value="<?=$product->id?>" />
                                                    <div class="tourmaster-tour-booking-date clearfix" data-step="1"><i class="fa fa-calendar"></i>
                                                        <div class="tourmaster-tour-booking-date-input"><input type="hidden" name="end_date" id="end_date" value="" />
                                                            <input type="text" placeholder="출발 날짜" style="width:100%;" name="start_date" id="datepicker1" readonly>
                                                        </div>
                                                    </div>
                                                    <div class="tourmaster-tour-booking-people clearfix" data-step="4">
                                                        <div class="tourmaster-tour-booking-next-sign"><span></span></div><i class="fa fa-users"></i>
                                                        <div class="tourmaster-tour-booking-people-input">
                                                            <div class="tourmaster-combobox-wrap">
                                                            	<select name="num_people" id="num_people">
                                                            		<option value="0">인원</option>
                                                            		<? for($i=$product->min_people;$i<=$product->max_people;$i++): ?>
                                                            		<option value="<?=$i?>"><?=$i?></option>
                                                            		<? endfor ?>
                                                            	</select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="tourmaster-tour-booking-submit" data-step="5">
                                                        <div class="tourmaster-tour-booking-next-sign"><span></span></div><i class="fa fa-check-circle"></i>
                                                        <div class="tourmaster-tour-booking-submit-input"><input class="tourmaster-button" type="submit" onclick="form_submit();" value="예약진행하기" data-ask-login="proceed-without-login" />
                                                            <div class="tourmaster-tour-booking-submit-error">* Please select all required fields to proceed to the next step.</div>
                                                        </div>
                                                    </div>
                                                    <input type="hidden" name="price" id="price" value="<?=$product->price?>" />
                                                    <input type="hidden" name="total_price" id="total_price" value="" />
                                                    <input type="hidden" name="product_type" id="product_type" value="package" />
                                                </form>
                                                <div class="tourmaster-lightbox-content-wrap" data-tmlb-id="proceed-without-login">
                                                    <div class="tourmaster-lightbox-head">
                                                        <h3 class="tourmaster-lightbox-title">예약 진행하기</h3><i class="tourmaster-lightbox-close icon_close"></i></div>
                                                    <div class="tourmaster-lightbox-content">
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                    

                                    
                                    
                                </div>
                            </div>
                        </div>
                        <div class="tourmaster-tour-info-outer">
                            <div class="tourmaster-tour-info-outer-container tourmaster-container">
                                <div class="tourmaster-tour-info-wrap clearfix">
                                    <div class="tourmaster-tour-info tourmaster-tour-info-duration-text tourmaster-item-pdlr"><i class="icon_clock_alt"></i><?=$product->take_time?></div>
                                    <div class="tourmaster-tour-info tourmaster-tour-info-availability tourmaster-item-pdlr"><i class="fa fa-calendar"></i><?=$product->take_days?></div>
                                    <div class="tourmaster-tour-info tourmaster-tour-info-departure-location tourmaster-item-pdlr"><i class="fa-plane"></i><?=$product->region?></div>
                                    <div class="tourmaster-tour-info tourmaster-tour-info-minimum-age tourmaster-item-pdlr"><i class="fa fa-user"></i>인원 : <?=$product->min_people?>~<?=$product->max_people?>명</div>
                                    <div class="tourmaster-tour-info tourmaster-tour-info-duration-text tourmaster-item-pdlr" style="width: 100%;"><i class="icon_clock_alt"></i>골프장 : <?=$product->golf_course?></div>
                                    <div class="tourmaster-tour-info tourmaster-tour-info-duration-text tourmaster-item-pdlr" style="width: 100%;"><i class="icon_clock_alt"></i>호텔 : <?=$product->hotels?></div>
                                </div>
                            </div>
                        </div>
                        <div class="gdlr-core-page-builder-body">
                            <div class="gdlr-core-pbf-wrapper " style="padding: 0px 0px 0px 0px;">
                                <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                                    <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-pbf-wrapper-full">
                                        <div class="gdlr-core-pbf-element">
                                            <div class="tourmaster-content-navigation-item-wrap clearfix" style="padding-bottom: 0px;">
                                                <div class="tourmaster-content-navigation-item-outer" id="tourmaster-content-navigation-item-outer">
                                                    <div class="tourmaster-content-navigation-item-container tourmaster-container">
                                                        <div class="tourmaster-content-navigation-item tourmaster-item-pdlr"><a class="tourmaster-content-navigation-tab tourmaster-active" href="#detail">일정 안내</a><a class="tourmaster-content-navigation-tab " href="#map">여행 정보</a><a class="tourmaster-content-navigation-tab " href="#itinerary">참고사항</a>
                                                            <div class="tourmaster-content-navigation-slider"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="gdlr-core-pbf-wrapper " style="padding: 70px 0px 30px 0px;" data-skin="Blue Icon" id="detail">
                                <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                                    <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style="padding-bottom: 35px;">
                                                <div class="gdlr-core-title-item-title-wrap">
                                                    <h6 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 24px;font-weight: 600;letter-spacing: 0px;text-transform: none;"><span class="gdlr-core-title-item-left-icon" style="font-size: 18px;"><i class="fa fa-file-text-o"  ></i></span>상세 설명<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align">
                                                <div class="gdlr-core-text-box-item-content">
                                                    <?=$product->desc?>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-divider-item-normal" style="padding-bottom: 19px;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style="padding-bottom: 0px;">
                                                            <div class="gdlr-core-title-item-title-wrap">
                                                                <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 15px;font-weight: 500;letter-spacing: 0px;text-transform: none;">포함사항<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-40">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb " style="padding-bottom: 10px;">
                                                            <?=nl2br($product->includes_y)?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-divider-item-normal" style="padding-bottom: 19px;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style="padding-bottom: 0px;">
                                                            <div class="gdlr-core-title-item-title-wrap">
                                                                <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 15px;font-weight: 500;letter-spacing: 0px;text-transform: none;">불포함사항<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-40">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb " style="padding-bottom: 10px;">
                                                            <?=nl2br($product->includes_n)?>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-divider-item-normal" style="padding-bottom: 19px;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style="padding-bottom: 35px;">
                                                <div class="gdlr-core-title-item-title-wrap">
                                                    <h6 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 24px;font-weight: 600;letter-spacing: 0px;text-transform: none;"><span class="gdlr-core-title-item-left-icon" style="font-size: 18px;"><i class="fa fa-suitcase"  ></i></span>일정표<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-toggle-box-item gdlr-core-item-pdlr gdlr-core-item-pdb  gdlr-core-toggle-box-style-background-title gdlr-core-left-align" style="padding-bottom: 25px;">
                                            	<?php for($i=0;$i<count($schedule);$i++): ?>
                                                <div class="gdlr-core-toggle-box-item-tab clearfix <?if($i==0):?>gdlr-core-active<?endif?>">
                                                    <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                    <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                        <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content"><span class="gdlr-core-head"><?=$schedule[$i]->days?>일차</span><?=$schedule[$i]->place?></h4>
                                                        <div class="gdlr-core-toggle-box-item-content">
                                                            <p><?=$schedule[$i]->place?>
                                                                <hr> <?=$schedule[$i]->detail?> </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <?php endfor ?>
                                            </div>
                                        </div>
                                        <!-- 
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-divider-item-normal" style="padding-bottom: 19px;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style="padding-bottom: 0px;">
                                                            <div class="gdlr-core-title-item-title-wrap">
                                                                <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 15px;font-weight: 500;letter-spacing: 0px;text-transform: none;">경로<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-text-box-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-left-align" style="padding-bottom: 55px;">
                                                <div class="gdlr-core-text-box-item-content">
                                                    <div class=""> <iframe src="https://www.google.com/maps/d/embed?mid=1mGgtylMQHGAKR6HR8r8YLe5W4LU" width="100%" height="480"></iframe></div>
                                                    <div id="map" style="width:100%;height:500px;"></div>
    												<?//=$this->map_api->create_script()?>
												    <?// if($product->address !== ''){
												        //$this->map_api->add_marker($product->lat,$product->lng,$product->address,null,null,"false");
												        //$this->map_api->move_to_location($product->lat,$product->lng);
												    //} ?>
                                                </div>
                                            </div>
                                        </div>  -->
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-divider-item-normal" style="padding-bottom: 19px;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style="padding-bottom: 0px;">
                                                            <div class="gdlr-core-title-item-title-wrap">
                                                                <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 15px;font-weight: 500;letter-spacing: 0px;text-transform: none;">상담 안내<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-40">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb " style="padding-bottom: 10px;">
                                                            <p>담당자 직통전화 : 02-6959-5454  FAX) 02-1111-1111<br>이메일 문의 : golfpass_@naver.com<br>예약 확정 후 예약금(￦300,000/1인)은 아래의 계좌로 송금해주시기 바랍니다.<br>우리은행 111111-11-111111 ㈜플레이세븐</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-divider-item-normal" style="padding-bottom: 19px;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-20 gdlr-core-column-first">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-top gdlr-core-item-pdlr" style="padding-bottom: 0px;">
                                                            <div class="gdlr-core-title-item-title-wrap">
                                                                <h3 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 15px;font-weight: 500;letter-spacing: 0px;text-transform: none;">캔슬피 규정<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-column gdlr-core-column-40">
                                            <div class="gdlr-core-pbf-column-content-margin gdlr-core-js ">
                                                <div class="gdlr-core-pbf-column-content clearfix gdlr-core-js ">
                                                    <div class="gdlr-core-pbf-element">
                                                        <div class="gdlr-core-icon-list-item gdlr-core-item-pdlr gdlr-core-item-pdb " style="padding-bottom: 10px;">
                                                            <p>◈ 본 상품은 국외여행 표준약관 제5조 특약에 해당되어 여행약관 외 별도의 수수료가 발행하는 상품입니다. <br><br>1) 여행개시 21일전까지통보시:계약금환급<br>2) 여행개시     ~  20일전까지통보시:여행요금의10%배상<br>3) 여행개시 19 ~ 8일전까지통보시:여행요금의15%배상<br>4) 여행개시 7 ~ 4일전까지통보시:여행요금의20%배상<br>5) 여행개시 3 ~ 1일전까지통보시:여행요금의50%배상<br>6) 여행당일통보시:여행요금의100%배상</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-divider-item gdlr-core-item-pdlr gdlr-core-item-pdb gdlr-core-divider-item-normal" style="padding-bottom: 19px;">
                                                <div class="gdlr-core-divider-line gdlr-core-skin-divider"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="gdlr-core-pbf-wrapper " style="padding: 0px 0px 30px 0px;" data-skin="Blue Icon" id="map">
                                <div class="gdlr-core-pbf-wrapper-content gdlr-core-js ">
                                    <div class="gdlr-core-pbf-wrapper-container clearfix gdlr-core-container">
                                        <div class="gdlr-core-pbf-element">
                                            <div class="gdlr-core-title-item gdlr-core-item-pdb clearfix  gdlr-core-left-align gdlr-core-title-item-caption-bottom gdlr-core-item-pdlr" style="padding-bottom: 35px;">
                                                <div class="gdlr-core-title-item-title-wrap">
                                                    <h6 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 24px;font-weight: 600;letter-spacing: 0px;text-transform: none;"><span class="gdlr-core-title-item-left-icon" style="font-size: 18px;"><i class="fa fa-info"  ></i></span>여행정보<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab_container single-tour tourmaster-body gdlr-core-container">
                                            <div class="traveltour-item-pdlr gdlr-core-item-pdlr">
                                                <input id="tab1" type="radio" name="tabs" checked style="clear: both; padding-top: 10px; display: none;">
                                                <label for="tab1"><span>골프장 정보</span></label>

                                                <input id="tab2" type="radio" name="tabs" style="clear: both; padding-top: 10px; display: none;">
                                                <label for="tab2"><span>호텔 정보</span></label>

                                                <input id="tab3" type="radio" name="tabs" style="clear: both; padding-top: 10px; display: none;">
                                                <label for="tab3"><span>참고사항</span></label>

                                                <input id="tab4" type="radio" name="tabs" style="clear: both; padding-top: 10px; display: none;">
                                                <label for="tab4"><span>안전정보</span></label>

                                                <section id="content1" class="tab-content">
                                                    <h3>골프장 정보</h3>
                                                    <div class="gdlr-core-toggle-box-item gdlr-core-item-pdb  gdlr-core-toggle-box-style-background-title gdlr-core-left-align" style="padding-bottom: 25px;">
                                                        <?=$product->golf_info?>
                                                    </div>
                                                </section>

                                                <section id="content2" class="tab-content">
                                                    <h3>호텔 정보</h3>
                                                    <div class="gdlr-core-toggle-box-item gdlr-core-item-pdb  gdlr-core-toggle-box-style-background-title gdlr-core-left-align" style="padding-bottom: 25px;">
                                                        <?=$product->hotel_info?>
                                                    </div>
                                                </section>
                                                <script>
                                                    $(function() {
                                                        var sBtn = $(".sub_tab"); //  ul > li 이를 sBtn으로 칭한다. (클릭이벤트는 li에 적용 된다.)
                                                        var active = $("#reference_lset2")
                                                        sBtn.find("a").click(function() { // sBtn에 속해 있는  a 찾아 클릭 하면.
                                                            active.addClass("gdlr-core-active"); // sBtn 속에 (active) 클래스를 추가 한다. 아왜안돼?왜???외????외않되??????외안돼???????
                                                        })
                                                    })

                                                </script>

                                                <section id="content3" class="tab-content">
                                                    <h3>참고사항</h3>
                                                    <div class="sub_tab_menu">
                                                        <div class="sub_tab_wrap before">
                                                            <div class="title">출발 전 참고사항</div>
                                                            <div class="sub_tab">
                                                                <ul>
                                                                    <li><a class="sub_link" href="#reference_list1">예약취소료 규정</a></li>
                                                                    <li><a class="sub_link" href="#reference_list7">항공정보</a></li>
                                                                    <li><a class="sub_link" href="#reference_list3">예약시 유의사항</a></li>
                                                                    <li><a class="sub_link" href="#reference_list17">최소출발인원 규정</a></li>
                                                                    <li><a class="sub_link" href="#reference_list18">결제안내</a></li>
                                                                    <!--<li><a class="sub_link" href="#reference_list10">해외여행 안전정보</a></li>-->
                                                                    <li><a class="sub_link" href="#reference_list5">사용 객실정보</a></li>
                                                                    <li><a class="sub_link" href="#reference_list6">싱글룸 사용정보</a></li>
                                                                    <li><a class="sub_link" href="#reference_list4">유류할증료/환율</a></li>
                                                                    <li><a class="sub_link" href="#reference_list13">선택추가경비</a></li>
                                                                    <li><a class="sub_link" href="#reference_list12">여권/비자 관련정보</a></li>
                                                                    <li><a class="sub_link" href="#reference_list16">자주하는 질문과 답변</a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div class="sub_tab_wrap after">
                                                            <div class="title">출발 후 참고사항</div>
                                                            <div class="sub_tab">
                                                                <ul>
                                                                    <li><a class="sub_link" href="#reference_list2">여행자보험</a></li>
                                                                    <li><a class="sub_link" href="#reference_list8">공항이용 주의사항</a></li>
                                                                    <li><a class="sub_link" href="#reference_list15">여행시 주의사항</a></li>
                                                                    <li><a class="sub_link" href="#reference_list14">쇼핑정보</a></li>
                                                                    <li><a class="sub_link" href="#reference_list11">한국 수신자부담전화</a></li>
                                                                    <li><a class="sub_link" href="#reference_list9">국내 긴급연락처</a></li>
                                                                    <li><a class="sub_link" href="#reference_list9_2">해외 긴급연락처</a></li>
                                                                    <li><a class="sub_link" href="#reference_list19"><span>현지 행사정보</span></a></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="gdlr-core-toggle-box-item gdlr-core-item-pdb  gdlr-core-toggle-box-style-background-title gdlr-core-left-align" style="padding-bottom: 25px;">
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix  gdlr-core-active">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list1"><span class="gdlr-core-head">예약취소료 규정</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>본 여행상품의 계약해제 요청 시 귀책사유에 따라 취소수수료가 부과됩니다. 취소수수료 부과 기준은(여행표준약관/특별약관)에 따릅니다.</p>
                                                                    <p> ▶ 인터넷상에서 예약/결제 취소 및 변경은 불가능하오니, 예약/결제 취소나 여행자정보 변경을 원하시면 반드시 예약담당자에게 연락하여 주시기바랍니다.</p>
                                                                    <p> ▶여행자의 여행계약 해제 요청시 여행약관에 의거하여 취소료가 부과됩니다 ◀<br> 제15조(여행출발 전 계약해제)<br> ·여행개시 30일전까지( ～30) 통보 시 - 계약금 환급<br> ·여행개시 20일전까지(29 ～20) 통보 시 - 여행요금의 10% 배상<br> ·여행개시 10일전까지(19～10) 통보 시 - 여행요금의 15% 배상<br> ·여행개시 8일전까지( 9～ 8) 통보 시 - 여행요금의 20% 배상<br> ·여행개시 1일전까지( 7～ 1) 통보 시 - 여행요금의 30% 배상<br> ·여행 당일 통보 시 - 여행요금의 50% 배상<br> (※공정거래위원회 고시 제2014-4호 소비자분쟁해결기준에 의한것으로 제15조의 변경사항은 2014년 3월21일 여행상품예약자부터 적용)</p>
                                                                    <p>※ 오늘은 여행개시 [2]일 전입니다.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list2"><span class="gdlr-core-head">여행자보험</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>◎ 여행자보험 연령별 담보한도</p>
                                                                    <table cellspacing="0" cellpadding="3">
                                                                        <colgroup>
                                                                            <col width="10%" />
                                                                            <col width="20%" />
                                                                            <col width="20%" />
                                                                            <col width="20%" />
                                                                            <col width="20%" />
                                                                        </colgroup>
                                                                        <thead>
                                                                            <tr>
                                                                                <th colspan="2" scope="colgroup">나이</th>
                                                                                <th scope="col">만0세~ 만14세</th>
                                                                                <th scope="col">만15세~79세 5개월</th>
                                                                                <th scope="col">79세6개월~99세</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody align="center">
                                                                            <tr>
                                                                                <th rowspan="4" style="letter-spacing:10px;" scope="rowgroup">상해</th>
                                                                                <th style="letter-spacing:30px;" scope="row">사망</th>
                                                                                <td>부담보(無)</td>
                                                                                <td colspan="2">1억원</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="letter-spacing:8px;" scope="row">후유장애</th>
                                                                                <td colspan="3">최대 1억원(장애 등급에 따라 지급)</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="letter-spacing:18px;" scope="row">의료비</th>
                                                                                <td colspan="3">해외 발생 300만원 / 국내발생 입원의료실비 500만원</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">통원/조제비</th>
                                                                                <td colspan="3">국내발생 외래의료실비(통원) 25만원(회당/45회한정) / 조제5만원(건당/45회한정)</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th rowspan="3" style="letter-spacing:10px;" scope="rowgroup">질병</th>
                                                                                <th style="letter-spacing:30px;" scope="row">사망</th>
                                                                                <td>부담보(無)</td>
                                                                                <td>1,000만원</td>
                                                                                <td>부담보(無)</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th style="letter-spacing:18px;" scope="row">의료비</th>
                                                                                <td colspan="3">해외 발생 100만원 / 국내발생 입원의료실비 100만원</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">통원/조제비</th>
                                                                                <td colspan="3">국내발생 외래의료실비(통원) 25만원(회당/45회 한정) / 조제5만원(건당/45회한정)</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colspan="2" scope="row">배상책임(면책1만원)</th>
                                                                                <td colspan="3">100만원</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colspan="2" scope="row">휴대품손해(면책1만원)</th>
                                                                                <td colspan="3">50만원 (1품목, 1조, 1쌍 최대 20만원)</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th colspan="2" style="letter-spacing:25px;" scope="row">특별비용</th>
                                                                                <td colspan="3">200만원</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <ol style="list-style-type:decimal;margin:5px 0 5px 20px;">
                                                                        <li>보험 접수는 여행 종료일 다음날부터 2년 이내 접수하셔야 합니다.</li>
                                                                        <li>일정 종료후 보험기간은 개별연장 불가하며 보장기간은 종료일로부터 90일 이내입니다.</li>
                                                                        <li>15세 미만과 79세 6개월이상 및 임산부는 보상 불가부분이 있으므로 확인 후 개별 보험 가입을 권장합니다.</li>
                                                                        <li>15세 미만자, 심실상실자 또는 심신 박약자의 사망을 보험사고로 한 보험계약은 무효로 합니다. (상법 732조)</li>
                                                                        <li>여행자보험은 실손실 보상 보험으로 보상한도 안에서 심사지급 되며 타보험사와 중복 가입시 비례보상됩니다.</li>
                                                                        <li>보험금은 보험한도내에서 지급되며 본인부담금 공제후 지급됩니다.
                                                                            <table summary="항목별 본인부담금" cellspacing="0" cellpadding="5">
                                                                                <colgroup>
                                                                                    <col width="40%" />
                                                                                    <col width="40%" />
                                                                                    <col width="20%" />
                                                                                </colgroup>
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th scope="col">항목</th>
                                                                                        <th scope="col">본인부담금</th>
                                                                                        <th scope="col">비고</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>국내발생 입원의료실비 (상해, 질병)</td>
                                                                                        <td>10%</td>
                                                                                        <td>&nbsp;</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>국내발생 외래의료실비 (상해, 질병)</td>
                                                                                        <td>
                                                                                            <ol style="list-style-type:decimal;margin:5px 0 5px 20px; padding-left:20px;">
                                                                                                <li>의원 - 1만원</li>
                                                                                                <li>종합병원 병원, 한방병원등 - 1만5천원</li>
                                                                                                <li>종합전문요양기관, 상급종합병원 - 2만원</li>
                                                                                            </ol>
                                                                                        </td>
                                                                                        <td>1일,1회당</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>국내발생처방조제의료실비 (상해, 질병)</td>
                                                                                        <td>8천원</td>
                                                                                        <td>1일,1회당</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </li>
                                                                        <li>진료와 무관한 제비용 (제증명료, 의료보조기구 구입비)이나 입원 및국내 통원치료시 치과치료, 한방치료에서발생한 비급여 의료비는 보상되지 않습니다.</li>
                                                                        <li>진료기관 방문시 발생되는 통원비용 및 업무 손실비용등에 대해서는 보상되지 않습니다.</li>
                                                                        <li>교통사고등 국민건강 보험공단의 적용을 받지 못하는 경우 치료비의 40% 이내에서 보상됩니다</li>
                                                                        <li>상해사고로 인한 장애 판정은 사고일로부터 6개월 이후 대학병원급의 의료기관에서 후유장애를 진단 받으시길 바랍니다.</li>
                                                                        <li>본인 부주의에 의한 휴대품 분실 / 파손 사고 청구시에 대해서는 보상이 불가합니다.<br />- 현금 및 유가증권, 신체보조장구 (치아, 틀니, 콘택트렌즈)는 보상 불가합니다.<br />- 흠. 기스에 의한 파손은 보상 불가합니다.</li>
                                                                        <li>여행자 보험은 여행기간내 발생하는 사고에 대해 보장을 해드리며 기존 병력으로 인해 여행기간중 발생되는사고에 대해서는 보상하지 않습니다. (ex. 기왕증등)</li>
                                                                    </ol>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list3"><span class="gdlr-core-head">예약시 유의사항</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>① 예약시 여권상에 기재된 정확한 영문이름과 주민번호를 알려주셔야 하며, 여권만료일은 반드시 6개월 이상 남아있어야 합니다.<br> ② 일정상의 표기된 일정과 호텔은 부득이한 경우 현지 사정에 따라 변동 될 수 있습니다.<br> ③본 상품은 단체여행을 목적으로 하므로 정해진 일정의 임의변경 및 개인행동이 허용되지 않습니다.정해진 일정의 임의 변경 및 개인행동을 원하는 고객님께서는 에어텔 상품을 이용해드리길 권장드립니다.<br> ④ 본 상품은 골프패스의 동일항공 또는 타항공의 다른상품과 현지 조인(합류)되어 진행될 수 있습니다. 출발 전 예약담당자와 최종 행사인원을 확인바랍니다.<br> ⑤ 학생단체 및 단체견적 문의는 별도 문의 바랍니다.<br> ⑥ 외국인은 본 요금이 적용되지 않습니다. 외국인(한국여권을 소지하지 아니한 분)은 호텔에따라 추가요금이 발생하오니 예약 담당자와 추가요금을 확인바랍니다.<br> ⑦ 커넥팅룸이나 더블베드 요청 시 확정여부는 사전에 확인이 불가합니다.(호텔측에서 미리 확정을 주지 않고 있습니다) 현지에서 체크인 할 시 확인 가능하므로 양해바랍니다.</p>
                                                                    <p>

                                                                        ▶ 골프패스는 영업보증보험 22억1천만원(기간:2018년2월18일~2019년2월17일)에 가입되어 있습니다.</p>
                                                                    <p>

                                                                        <a href="#">기획보증보험 바로가기>></a><br>
                                                                        <a href="#">영업보증보험 바로가기>></a>
                                                                    </p>
                                                                    <p>본 상품은 단체여행을 목적으로하는 패키지 상품으로 여행자는 여행업자의 여행질서 유지에 적극 협조하여 주셔야 하며 정해진 일정에서 벗어나는 개별일정의 진행은 불가합니다. 단체여행 일정이 아닌 개별 일정을 진행하실 수 있는 개별여행을 원하시는 분은 [자유여행] 상품을 이용해 주시기 바랍니다.</p>
                                                                    <p>
                                                                        <근거 및 처리 절차><br> - 국외여행약관 제2조 2항 ˝여행자는 안전하고 즐거운 여행을 위하여 여행자간 화합도모 및 여행업자의 여행질서 유지에 적극 협조하여야 합니다.˝<br> - 국외여행약관 제13조 4항 ˝여행자는 여행출발 후 자기의 사정으로 숙박, 식사, 관광 등 여행요금에 포함된 서비스를 제공받지 못한 경우 당사에게 그에 상응하는 요금의 환급을 청구할 수 없습니다. 단, 여행이 중도에 종료된 경우에는 제16조에 준하여 처리합니다.˝<br> - 국외여행약관 제16조 1항 ˝당사 또는 여행자는 여행출발 후 부득이한 사유가 있는 경우 이 여행계약을 해지할 수 있습니다. 단, 이로 인하여 상대방이 입은 손해를 배상하여야 합니다.˝<br> - 위의 경우에 의하여 약속된 일정이 변경된 경우 당사는 관광진흥법 시행규칙에 의거 고객에게 일정변경동의서의 동의를 요구합니다.</p>
                                                                    <p>

                                                                        <법정대리인(부모) 동행 없는 미성년자의 여행계약 주의사항><br> 만 19세 미만의 미성년자끼리의 여행계약 또는 법정대리인(부모)이 아닌 성인과 동행하는 미성년자의 여행계약은 민법 제5조에 의거하여 법정대리인인 부모 또는 친권자와 체결함을 원칙으로 해야 하고, 당사는 법정대리인의 동의 없는 여행계약의 체결을 거부할 수 있습니다.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list4"><span class="gdlr-core-head">유류할증료/환율</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        ☞ 유류할증료(FUEL SURCHARGE) <br> 국제유가와 항공사 영업환경을 고려한 국토교통부의 '국제선 항공요금과 유류할증료 확대방안' 에 따라 유류할증료는 예고없이 인상, 인하되고 있습니다. , 상품가 출시 시점 유류할증료보다 인상 시, 인상분은 상품가와 별도로 추가입금 하셔야 합니다.</p>
                                                                    <p> ☞ 달러/엔/유로화등의 환율이 급격하게 변동될 경우는 추가금액이 발생하거나 상품가 인상이 있을 수 있습니다.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list7"><span class="gdlr-core-head">항공정보</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        <b>웹 체크인</b><br> 1. 이용 대상 <br> - 항공권 결제가 완료된 전자항공권(E-TKT)소지 고객 중G클래스 티켓 <br> * 단, 좌석의 100%가 가능하진 않으며, 현재 소량의 좌석만 웹체크인이 가능함. 실제 공항에서 보이는 좌석과 다를 수 있음 <br> 2. 이용 가능 시간<br> - 국제선 : 출발 48시간 ~ 1시간 전 (단, 미주 노선은 출발 24시간 전부터 가능) <br> 3. 체크인시 필요한 정보 (회원가입 없이도 가능합니다) <br> 1) 예약번호(8자리 숫자 or 6자리 영문/숫자) 혹은 항공권번호(180로 시작하는 13자리 숫자) <br> 2) 여권정보</p>
                                                                    <p>

                                                                        <b>무료위탁수하물</b><br> 무료허용 : 1개(23kg) 까지 무료 <br> 개수 초과요금 : 2개 13만원(USD $130) / 3개부터 20만원(USD $200) <br> 무게 초과요금 : 24~32kg 10만원(USD $100) / 33~45kg 20만원(USD $200)</p>
                                                                    <p>

                                                                        <b>허용기내수하물</b><br> 1개 (12kg) <br> 가방 하나의 규격은 세 변의 합이 115cm/45in 이내이어야 하며, 각 변은 각각 가로 40cm, 세로 20cm, 높이 55cm를 초과해서는 안됩니다. <br> 자세한 수화물 규정은 아래 홈페이지 참고 바랍니다. <br> https://kr.koreanair.com/content/koreanair/korea/ko/traveling/baggage-services.html#_
                                                                    </p>
                                                                    <p>

                                                                        <b>기내식(무료/유료)</b><br> 무료제공
                                                                    </p>
                                                                    <p>

                                                                        <b>차일드밀/인펀트밀</b><br> 한국 출발편 : 스파게티, 햄버거, 오므라이스, 돈가스 <br> 해외 출발편 : 햄버거, 피자, 스파게티, 핫도그 <br> ※ 치앙마이, 다낭, 나트랑, 씨엠립 노선의 해외출발편 메뉴 한국출발편과 동일※ <br> ※ 출발일로부터 2일전까지 신청, 기내식 공급업체 사정에 따라 다른 메뉴로 대체될 수 있음</p>
                                                                    <p>

                                                                        <b>예상적립마일리지</b><br> 약 3628마일리지 적립(그룹기준)</p>
                                                                    <p>

                                                                        <b>마일리지좌석승급</b><br> 프레스티지석 승급시 편도 17,500 왕복 35,000마일 공제(평수기) / 편도 25,000 왕복 50,000마일 공제(성수기)<br> 마일리지 공제는 일반석에서의 업그레이드를 기준이므로 그룹석에서는 추가 요금이 발생됩니다. <br> 자세한 추가요금 및 평/성수기 기준은 담당자를 통한 확인 바랍니다.</p>
                                                                    <p>

                                                                        <b>임산부규정</b><br> 32주미만의 임산부 탑승가능 <br> 32~36주차 임산부의 경우 출발시간 기준 72시간 내에 건강진단서 제출 <br> 37주차 임산부 탑승 불가</p>
                                                                    <p>

                                                                        <b>사전좌석지정</b><br> 그룹항공권은 사전좌석 지정이 불가합니다. 항공사 카운터 수속시 항공사 임의대로 배정되므로 여행사에 좌석 지정의 권한이 없습니다.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list8"><span class="gdlr-core-head">공항이용 주의사항</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        국토교통부 액체,젤류,에어로졸에 대한 항공보안 통제지침에 따라<br> 대한민국을 출발하는 모든 국제선 항공편과 환승·통과편을 이용하는 <br> 승객들이 용기 1개당 100 ㎖(cc) 를 초과하는 액체, 젤류 및 에어로졸류 물질을 <br> 휴대하여 항공기에 탑승하는 것을 금지합니다.</p>
                                                                    <p>

                                                                        면세점에서 액체, 젤류 및 에어로졸 면세품을 사는 경우, <br> 면세점의 포장 봉투를 뜯지만 않으시면 용량에 관계없이 <br> 기내에 가지고 탈 수 있으므로, 최종 목적지 도착시까지 절대 포장을 뜯지 마십시오.<br> 국토교통부 http://www.molit.go.kr (1599-0001) 참조</p>
                                                                    <p>

                                                                        단, EU국가에서 갈아타시는 경우, EU 이외의 국가(인천공항 포함)에 위치한 공항 또는<br> 시내 면세점에서 구입한 모든 액체류는 환승시 해당 국가 규정에 따라 압수될 수 있습니다. </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list9"><span class="gdlr-core-head">국내긴급 연락처</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        ※ 아래의 연락처는 공항에서 첫만남시 긴급상황이 발생했을 경우에 해당되며<br> 상품관련 문의는 예약하신곳(골프패스 상품판매점) 또는 예약센터 (1544-5252)로 하시기 바랍니다.</p>
                                                                    <p>


                                                                        주말 : 골프패스 본사 당직자 ☎ 02) 7288-000
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list9_2"><span class="gdlr-core-head">해외긴급 연락처</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        ★해외 긴급연락처 담당업체는 일정표 첫번째장의 랜드사 참고하여, <br> 하기리스트중 해당업체로 문의 부탁 드립니다★<br> ◆유한방콕 : 이은숙실장 081-752-6939 이지연대리 091-801-3656<br> ◆참투어 : 고영호 대리 081-791-5142 <br> ◆모두타이 : 서준희 과장 hp +66-87-011-8179<br> 길효진 대리 hp +66-90-091-1106<br> ◆월드트래블러 : 김지혜 차장 092-278-8809</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list11"><span class="gdlr-core-head">한국수신자부담전화</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        - 현지에서 ☎ 001-800-8211-3080 [수신자 부담]</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list12"><span class="gdlr-core-head">여권/비자 관련 정보</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        ▒ 여권<br> ※여권 만료일은 반드시 6개월 이상 남아 있어야 합니다.</p>
                                                                    <p>

                                                                        ▒ 비자 정보 <br> ※41개국과 1개 특별 행정 지역(Hong Kong SAR) 의 여권 소지자는 관광 목적으로 태국에 입국할 시 비자 취득 없이 무비자 입국이 가능하며, 한국 여권 소지자 30일 또는 90일 이내로 체류할 수 있습니다. 해당국의 외국인이 주변국 국경의 이민국 사무소를 통해 입국하는 경우 15일이내로 체류 할 수 있습니다. <br>
                                                                    </p>
                                                                    <p>
                                                                        단, Malaysia 국적자는 국경의 이민국 사무소를 통해 입국을 하더라도 30일 이내로 체류 가능합니다. 외국인이 비자 면제로 태국에 입국할 때, 태국 내 체류기간 동안의 충분한 재정(여행 경비)를 소지하고 있어야 합니다. (1인당 10.000바트, 1가족당 20.000바트) </p>
                                                                    <p>

                                                                        ☞ 자세한 비자 정보 및 무비자 국가 확인 클릭</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list14"><span class="gdlr-core-head">쇼핑정보</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        ① 환불에 관한 유의사항<br> - 물품의 교환 환불처리는 물품수령후 1달이내만 가능하며 수수료가 부과될수 있으며, 처리기간은 15일 ~ 최대 60일정도 소요됩니다.<br> - 여행도착후 1달이후 환불접수시에는 환불이 불가할수 있습니다.</p>
                                                                    <p>



                                                                        ② 현지 환불 정보<br> - 고객님께서 구입하신 물품의 교환 및 환불처리는 고객님과 쇼핑센터간의 계약사항으로 <br> 이루어집니다.

                                                                        <br> - 일부 쇼핑센터는 카드환불시 수수료 공제후 카드취소됩니다.<br> - 현금환불시 결재시 환율로 환불 처리됩니다.<br> - 고객에 의해 파손되었을 경우, 포장을 뜯거나, 상품성이 훼손되었을 경우 환불이 불가능합니다<br> - 환불 배송료는 고객분이 부담해 주셔야 되시고, 환불 및 반품시 영수증 첨부해주셔야 <br> 환불 가능합니다.</p>
                                                                    <p>



                                                                        ③귀국후 환불 절차<br> - 여행사를 통해 본인 및 확인사유를 확인한 후 물건 회수후 환불 조치를 해드리고 있습니다.</p>
                                                                    <p>



                                                                        ※해외여행시 구입한 물품은 US$600 초과금액에 대해 입국시 관세가 부과될 수 있사오니 참고하시기 바랍니다.<br> ※건강보조식품 등의 구입시에는 고객님의 체질과 특성을 고려하여 신중히 선택하여 주시기 바랍니다.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list15"><span class="gdlr-core-head">여행시 주의사항</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        ① 태국입국시 담배는 1인 1보루, 술은 1인 1병(1ℓ)만 허용됩니다. 위반 적발시 최소 담배는 약20배, 주류는 약 2배 이상의 벌금이 부과되며, 초과된 물품뿐 아니라, 규정 기준인 담배1보루, 술 1병까지 모두 압수됩니다. 또한,타인이 구입한 물품을 대신 잠시 보관한 경우라도 적발되면 동일하게 벌금 징수 및 압수 됩니다. 공항 곳곳에 경찰들이 근무중이니 공항을 벗어날때까지 꼭 1인 담배 1보루 술 1병 준수 하여 주시길 부탁드립니다. </p>
                                                                    <p>



                                                                        ② 전자담배관련<br> 태국에 전자담배 반입이 안됩니다. 적발시 전자담배 몰수는 물론 벌금이 부과됩니다. 이점 유념해주세요.</p>
                                                                    <p>



                                                                        ③ 태국 현지 흡연금지 계정법 시행<br> 2008년 2월11일 부터 모든 에어컨 설비가 되어 있는 바, 펍, 디스코장 클럽에서 흡연이 금지 됩니다. 위반시 흡연자는 2,000밧, 상점 주인은 20,000밧을 벌금으로 부과되어 진다고 하니 참고 하시기 바랍니다. 벌금의 범위는 참고사항일 뿐이며 현지상황에 따라서 부과되는 벌금은 차이가 발생 할 수 있습니다. </p>
                                                                    <p>



                                                                        ④ 태국 해변 주의사항<br> 2017년 11월 부터 파타야 해변, 산호섬, 후아힌 해변, 푸켓. 끄라비등 총24곳의 해변에서 흡연 적발시 징역 1년 또는 10만바트 (약 342만원) 벌금형을 받을 수 있으니 금연을 해주시기 바랍니다.</p>
                                                                    <p>



                                                                        ⑤ 면세점을 이용하는 모든 태국 입국 외국인들은 1리터 이상의 주류는 반입 불가능합니다 .<br> →적발시 주류압수와 더불어 구매 가격의 2배의 벌금을 지불해야합니다 .</p>
                                                                    <p>



                                                                        ★주의사항:태국을 함께 입국하는 일행과 담배나 주류 등을 한개의 쇼핑백에 담는 것 역시 용납되지 않습니다 가령 5명의 일행이 5보루의 담배를 사서 한개의 쇼핑백에 담는것 역시 법에 위반되며 한개의 카트에 여러사람의 짐을 모아 운반하는것 역시 용납되지 않습니다. 따라서 반드시 1인 1카트를 준수해주시기 바랍니다. (원칙적으로 본인짐은 본인이 운반하는것이 어느공항에나 규정으로 되어있기에 일행의 짐을 같이 카트에 같이 옮겼다는 변명은 안통합니다.각각 따로따로 영수증이 있어도 동일합니다.)</p>
                                                                    <p>



                                                                        ⑥ 태국호텔에는 세면도구(치약,칫솔,면도기 등)가 구비되어있지 않음을 참고해주세요</p>
                                                                    <p>



                                                                        ⑦ 성수기(여름/겨울) 때는 객실이 다소 떨어질 수도 있습니다. 커넥팅룸이나 일행일 경우, 최대한 가깝게 배정하기 위해 요청하지만, 체크인시 호텔 프론트에서 객실배정이 되기 때문에, 양해 말씀 구합니다.</p>
                                                                    <p>



                                                                        ⑧태국의 호텔에서는 체크인 시 데파짓을 받는 경우가 있습니다. 투숙기간 중 사용내역이 없으면 따로 청구되지 않으며 만일 청구되었을 시, 영수증을 예약 담당자에게 보내주시면 환불해 드립니다.</p>
                                                                    <p>

                                                                        〈동물·축산물·식물검역 안내〉<br> ☞ 대부분의 축산물(소세지, 육포 등) 및 생과실, 열매채소 등은 휴대 반입할 수 없고, 휴대반입이 가능한 축산물과 식물류를 반입하는 여행객도 농림축산검역본부에 신고하여 검역을 받아야 하며, 불법 반입하는 경우에는 500만원 이하의 과태료가 부과됩니다.<br> ☞ 해외 축산농장 또는 가축시장을 방문한 여행객과 가축전염병 발생 국가를 방문한 축산 관계자는 농림축산검역본부에 신고하여 소독을 받아야 합니다.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list16"><span class="gdlr-core-head">질문과 답변</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        ①태국의 전압사용과 콘센트는 어떻게 되나요?<br> http://img4info.modetour.com/old/tha.jpg

                                                                        <br> -220V, 50HZ / 위 사진과 같은 3핀 코드와 한국과 같은 2핀코드를 겸용으로 사용가능합니다</p>
                                                                    <p>



                                                                        ②.최소출발인원 미충족시 출발이 안되나요?<br> -일반적으로 성인기준 4명이상 되어야 행사가 가능하지만, 그 이하의 소수 인원이 모객이 되어질 경우에는 타상품과 현지조인 행사를 하게 될 수도 있습니다. 예약 전 및 출발 전 담당 여행 상담직원과 체크 부탁드립니다.</p>
                                                                    <p>


                                                                        ③이동차량은 어떻게 되나요?<br> -인원에 따라 차량의 종류가 달라집니다. 보통 9명 이하일 경우는 12인승이나 15인승 봉고차로 행사가 진행되고, 성인10명이상일 경우 45인승 버스로 진행되어집니다. </p>
                                                                    <p>


                                                                        ④쇼핑은 보통 언제 들어가나요?<br> -일반적인 패키지 상품인 경우 4~5군데 정도 쇼핑샾을 방문하게 되는데 일정 중 차량이동 중에 들어가는 경우도 있고 마지막 날 시내 관광 중에 들어갈 수도 있습니다. 쇼핑일정은 현지사정 및 현지가이드분의 일정 조율에 따라 달라질 수 있습니다.</p>
                                                                    <p>


                                                                        ⑤커넥팅룸 사용하려면 ...<br> - 커넥팅룸을 사용하시려면 예약시 담당 상담직원에게 미리 요청하셔야하며, 확정여부는 미리 확인 할 수 없으며, 호텔 체크인 하실 때 컨펌 여부를 확인 하실 수 있습니다. </p>
                                                                    <p>


                                                                        ⑥현지 날씨는 어떤가요?<br> -습도가 놓은 열대기후로써 평균 기온은 약 27도이며 3계절로 구성됩니다.<br> *하절기 : 3월~5월(30도를 넘는 높은 기온)<br> *우 기 : 6월~10월(소나기 같은 잠깐의 비가 잦은 편임)<br> *건 기 : 11월에서 다음해 2월(여행하기 가장 좋은 시기)</p>
                                                                    <p>


                                                                        ⑦여행 일정내 어느 나라 화폐가 유용한지요? 신용카드(해외사용가능)를 이용하는데는 어려움이 없습니까? <br> -US달러로 환전해오시면 가장 유용하게 쓰이고 카드 사용하는데는 아무 문제가 없습니다. 환전을 미리 못해가셨다면 필요시 현지가이드분께 말씀하시면 US달러 및 바트(현지화폐)로 환전하실수 있도록 안내해 드립니다. </p>
                                                                    <p>


                                                                        ⑧전체 일정 중 개별행동을 할 수 있나요?<br> -팩키지 여행은 단체여행을 목적으로 하는 여행객들이 모여서 일정이 진행되는 상품이기 때문에 일정내 개별 활동은 불가능합니다. </p>
                                                                    <p>


                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list17"><span class="gdlr-core-head">최소출발인원규정</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        ☞ 패키지 여행은 단체 여행이기 때문에 출발일까지 최소 출발 인원이 채워지지 않는 경우 다른 날로 상품을 변경하시거나 혹은 여행상품이 취소될 수 있습니다.<br> 여행약관 제9조(최저행사인원 미 충족시 계약해제) 에 의거</p>
                                                                    <p>

                                                                        당사는 최저행사인원이 충족되지 아니하여 여행계약을 해제하는 경우 여행출발 7일전까지 여행자에게 통지하여야 합니다.<br> 당사는 여행참가자 수 미달로 전항의 기일내 통지를 하지 아니하고 계약을 해제하는 경우 이미 지급 받은 계약금 환급 외에 다음 각 목의 1의 금액을 여행자에게 배상하여야 합니다.<br> 가. 여행개시 7일전까지 여행계약 해제 통지시 : 계약금 환급<br> n
                                                                        <br> 여행출발 1일전까지 통지시 : 여행요금의 30%<br> 여행출발 당일 통지시 : 여행요금의 50%</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="reference_list18"><span class="gdlr-core-head">결제안내</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>
                                                                        1. 결제방법<br> ※ '신용카드, 상품권, 상품권+신용카드, 무통장입금(가상계좌), 골프패스 결제계좌' 총 5가지 결제수단으로 결제하실수 있습니다. <br> ① 신용카드 : 신용카드로 여행상품을 결제하고 차후에 신용카드사를 통해 카드대금이 청구되며, 국민, 비씨, 우리 카드 결제는 선택한 카드사별 ISP결제로 진행이되며, 그외 카드사는 선택한 카드사별 안심클릭 결제로 진행이 됩니다. 30만원이상 결제시 공인인증서 사용을 의무화 합니다.<br> ② 상품권 : ㈜골프패스네트워크에서 발행한 골프패스 여행상품권으로 온라인, 오프라인에서 골프패스 및 전국 골프패스 대리점에서 사용 하실수 있습니다.<br> ③ 신용카드+상품권 : 신용카드와 골프패스 여행상품권으로 복합결제를 하실수 있습니다.<br> ④ 무통장입금(가상계좌) : 무통장 입금 신청시 예약상품 기준으로 예약자에게 발급되는 가상계좌이며, 총 여행경비가 완불될때까지 발급받은 계좌로 일정기간내에 여러차레 입금이 가능합니다.<br> ⑤ 골프패스 결제계좌 : 골프패스네트워크 전용계좌로, 별도의 결제창 없이 바로 골프패스 결제계좌로 입금이 가능합니다.(아래 표에서 골프패스 결제계좌 정보를 확인하세요)</p>
                                                                    <table>
                                                                        <tfoot>
                                                                            <tr>
                                                                                <td class="txt_right" colspan="4">예금주 : (주)골프패스네트워크</td>
                                                                            </tr>
                                                                        </tfoot>
                                                                        <thead>
                                                                            <tr>
                                                                                <th scope="col">은행명</th>
                                                                                <th scope="col">계좌번호</th>
                                                                                <th scope="col">은행명</th>
                                                                                <th scope="col">계좌번호</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th scope="col">신한은행</th>
                                                                                <td class="txt_left">312-01-195126</td>
                                                                                <th scope="col">신한은행</th>
                                                                                <td class="txt_left">262-05-015956</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">국민은행</th>
                                                                                <td class="txt_left">832-01-0268-385</td>
                                                                                <th scope="col">외환은행</th>
                                                                                <td class="txt_left">010-22-01322-6</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">기업은행</th>
                                                                                <td class="txt_left">087-023700-04-012</td>
                                                                                <th scope="col">우리은행</th>
                                                                                <td class="txt_left">102-04-110851</td>
                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="col">농협</th>
                                                                                <td class="txt_left">056-01-104843</td>
                                                                                <th scope="col"></th>
                                                                                <td></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <p>
                                                                        2. 결제시 유의사항<br> ① 반드시 예약담당자에게 상담후 결제를 진행하여 주시기 바랍니다. <br> ② 인터넷상에서 결제취소 및 변경이 불가능하오니, 결제취소나 변경을 원하시면 반드시 예약담당자에게 <br> 　 연락하여 주시기바랍니다. <br> ③ 여행대금의 모든 결제 수단은 골프패스 법인 계좌 및 골프패스 결제시스템을 이용하셔야 하며, 그 외의 결제방법을 이용하실 경우 법적 보호를 받으실 수 없습니다.<br> ④ 타사 상품권 결제 후 환불 요청시 환불 절차상 다소 시간이 걸릴 수 있사오니, 이점 양해해 주시기 바랍니다.</p>

                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </section>


                                                <section id="content4" class="tab-content">
                                                    <h3>안전정보</h3>
                                                    <div class="sub_tab">
                                                        <ul>
                                                            <li><a href="#safeInfo01" class="sub_link">여행금지제도의 법적근거 및 금지국가 현황</a></li>
                                                            <li class="current"><a href="#safeInfo02" class="sub_link">여행지(국가/지역) 여행경보 발령현황</a></li>
                                                            <li class="right"><a href="#safeInfo03" class="sub_link">여행지 사건사고</a></li>
                                                            <li><a href="#safeInfo04" class="sub_link">현지연락처</a></li>
                                                            <li><a href="#safeInfo05" class="sub_link">해외여행자 인터넷 등록제도</a></li>
                                                        </ul>
                                                    </div>
                                                    <div class="gdlr-core-toggle-box-item gdlr-core-item-pdb  gdlr-core-toggle-box-style-background-title gdlr-core-left-align" style="padding-bottom: 25px;">
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix  gdlr-core-active">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="safeInfo01"><span class="gdlr-core-head">여행금지제도의 법적근거 및 금지국가 현황</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <div class="gdlr-core-title-item-title-wrap">
                                                                        <h6 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 16px;font-weight: 600;letter-spacing: 0px;text-transform: none;">법적근거<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h6>
                                                                    </div>
                                                                    <p>
                                                                        - 여권법 17조(여권의 사용제한 등)<br> 외교부장관은 천재지변·전쟁·내란·폭동·테러 등 대통령령으로 정하는 국외 위난상황(危難狀況)으로 인하여 국민의 생명·신체나 재산을 보호하기 위하여 국민이 특정 국가나 지역을 방문하거나 체류하는 것을 중지시키는 것이 필요하다고 인정하는 때에는 기간을 정하여 해당 국가나 지역에서의 여권의 사용을 제한하거나 방문·체류를 금지 (이하 "여권의 사용제한 등"이라 한다)할수 있다. 다만, 영주(永住), 취재·보도, 긴급한 인도적 사유, 공무 등 대통령령으로 정하는 목적의 여행으로서 외교부장관이 필요하다고 인정하면 여권의 사용과 방문·체류를 허가할 수 있다.</p>
                                                                    <p>- 여권법 제26조<br> 제17조제1항 본문 및 제2항에 따라 방문 및 체류가 금지된 국가나 지역으로 고시된 사정을 알면서도 같은 조 제1항 단서에 따른 허가(제14조제3항에 따라 준용되는 경우를 포함한다)를 받지 아니하고 해당 국가나 지역에서 여권 등을 사용하거나 해당 국가나 지역을 방문하거나 체류한 사람은 1년 이하의 징역 또는 1000만원 이하의 벌금에 처한다.</p>
                                                                    <hr>
                                                                    <div class="gdlr-core-title-item-title-wrap">
                                                                        <h6 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 16px;font-weight: 600;letter-spacing: 0px;text-transform: none;">금지국가 지정현황<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h6>
                                                                    </div>
                                                                    <p>
                                                                        외교부는 우리 국민의 생명·안전을 보호하기 위하여 여권법 제 17조에 따라 아래의 국가들은 지정된 기간 동안 여행금지국으로 지정하여 우리 국민들의 방문 및 체류를 금지합니다.</p>
                                                                    <p>
                                                                        - 이라크(2007년 8월 7일 ~ 2017년 1월31일까지)<br> - 소말리아·아프가니스탄(2007년 8월 7일 ~ 2017년 1월 31일까지)<br> - 예멘(2011년 6월 28일 ~ 2017년 1월 31일까지)<br> - 시리아(2011년 8월 20일 ~ 2017년 1월 31일까지)<br> - 리비아(2014년 8월 4일 ~ 2017년 1월 31일까지)<br> - 필리핀 일부지역(잠보앙가, 술루 군도, 바실란, 타위타위 군도) (2015년 12월 1일 ~ 2017년 1월 31일까지)</p>
                                                                    <p> 방문 및 체류가 금지된 국가나 지역으로 고시된 사정을 알면서도 해당 국가나 지역에서 여권 등을 사용하거나 해당 국가나 지역을 방문하거나 체류한 사람은 여권법 제 26조 제3호에 따라 1년 이하의 징역 또는 1000만원 이하의 벌금에 처해집니다.

                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="safeInfo02"><span class="gdlr-core-head">여행지(국가/지역) 여행경보 발령현황</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <div class="gdlr-core-title-item-title-wrap">
                                                                        <h6 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 16px;font-weight: 600;letter-spacing: 0px;text-transform: none;">여행국가 : 태국<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h6>
                                                                    </div>
                                                                    <p>

                                                                        ◆ 남색경보/여행유의(일부) : 적색경보 지정 지역을 제외한 전지역</p>
                                                                    <p>

                                                                        ◆ 적색경보/철수권고(일부) : 나라티왓 주, 파타니 주, 얄라 주, 송크홀라 주 남부 말레이시아 국경지역<br> ※ 여행경보단계는 여행유의/자제/제한/금지 4단계로 구분되며, 외교부 '해외안전여행' 사이트(www.0404.go.kr)에서 상세정보를 확인 할 수 있습니다.<br> 또한 출국 전 동사이트의 해외여행 등록제 "동행"에 가입하시면 안전정보를 수시로 제공 받을 수 있습니다.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="safeInfo03"><span class="gdlr-core-head">여행지 사건사고</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <div class="gdlr-core-title-item-title-wrap">
                                                                        <h6 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 16px;font-weight: 600;letter-spacing: 0px;text-transform: none;">사건ㆍ사고 예방을 위한 일반 수칙<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h6>
                                                                    </div>

                                                                    <p>
                                                                        [1. 방문국 존중]<br> ㅇ 태국인들은 오랜 역사와 문화, 많은 유적과 아울러 한 번도 외세의 지배를 받지 않았다는 점 등에 대해 자랑스러워하고 또한 자존심이 높습니다. 방문국의 문화와 국민을 존중하는 것은 외국을 방문하는 관광객이 반드시 지녀야 하는 마음가짐입니다.<br> ㅇ 방문기간 중 태국인들이 소중히 여기는 왕실, 종교, 문화, 유적, 관습 등을 공공연히 비하하거나 조롱하는 언행은 자칫 사건사고 발생의 원인이 될 수 있습니다.</p>
                                                                    <p>

                                                                        [2. “자국민 우선” 명심]<br> ㅇ 외국인과 내국인을 차별대우해서는 안 되는 것이 원칙이나 사실상 어느 나라든 내외국인간 시비가 발생하면 경찰 등의 공무원이 가급적 자국인에게 다소 호의적으로 처리하려는 것은 인지상정입니다. 따라서 외국을 방문 중에 현지인과 시비가 발생할 경우 불리한 입장에 처할 가능성이 있으므로 항상 언행에 주의하여 애초에 시비 거리가 발생하지 않도록 하는 것이 가장 바람직합니다.<br> ㅇ 만약 시비가 발생하여 경찰 등의 공무원이 자신에게 불리하게 일처리를 하고 있다는 생각이 들 경우에도 큰소리로 고함을 지르며 항의하거나 물리적인 저항을 자제하시고 침착한 가운데 논리적인 반박을 하셔야 하며, 대사관의 도움이 필요한 경우 즉시 전화 등으로 조력을 요청하십시오.</p>
                                                                    <p>

                                                                        [3. 지나친 음주 자제]<br> ㅇ 태국내 아국인 관광객 관련 사건사고는 야간에 음주상태에서 발생하는 경우가 대부분입니다. 간혹 여행 분위기에 편승하여 지나친 음주와 고성 등으로 인해 술집 등에서 타인과 언쟁을 하거나 물리적인 충돌이 발생, 피해를 입는 경우가 있으므로 과도한 음주를 하지 맙시다.</p>
                                                                    <p>

                                                                        [4. 낯선 사람의 지나친 친절 경계]<br> ㅇ 여행지에서 낯선 타인에 대한 경계심을 늦추지 말고, 특별한 이유 없이 지나친 친절을 베푸는 타인에 대해서는 국적을 불문하고 한 번쯤 그 의도를 의심해 볼 필요가 있습니다.</p>
                                                                    <p>

                                                                        [5. 태국 왕실 등 모욕행위 엄금]<br> ㅇ 국왕 및 왕실, 불상, 스님 등은 절대적인 존경의 대상이므로 이들을 모욕하는 일체의 언행은 절대로 해서는 안 됩니다. 도처에 모셔진 국왕-왕비 등의 사진은 물론 화폐에 그려진 국왕의 사진에 대한 고의적 낙서나 훼손, 심지어 SMS나 SNS를 통한 일체의 모욕적 표현도 처벌대상이며, 모욕적 표현의 인터넷 게시글을 퍼 나르거나 방치하는 행위도 처벌되며 단순히 손가락으로 가리키는 행위도 시비를 야기할 수 있어 자제해야 합니다.</p>
                                                                    <p>

                                                                        [6. 다액 현금소지 등 자제]<br> ㅇ 다액의 현금 및 고가의 귀중품, 신용카드 등은 가급적 호텔 금고나 프런트 등에 보관합시다.</p>
                                                                    <p>

                                                                        [7. 여권 관리 철저]<br> ㅇ 여권은 해외에서 자신의 신분증명서 이므로 상시 휴대하시고 철저히 관리해야 합니다. 우리 여권은 세계 대부분 국가에 무사증으로 입국이 가능할 정도로 대외적으로 신인도가 높아 범죄 조직원들의 주요 절취 또는 위조의 표적이 되고 있습니다.<br> ㅇ 태국에서 여권을 분실할 경우, 이민국(태국어로 "떠머")에서 입국확인 등의 소정의 절차를 거쳐야 합니다. 특히, 주말 및 휴일에는 태국 이민국이 업무를 하지 않기 때문에 여행 일정에 막대한 차질을 가져오니, 여권 관리에 항시 주의를 기울이시기 바랍니다.<br> ㅇ 태국은 외국인의 여권 휴대가 의무이며, 가끔 경찰이 여권 제시를 요청하는 경우가 있습니다.</p>
                                                                    <p>

                                                                        [8. 현지인들과 시비 자제]<br> ㅇ 태국인들은 자신에게 큰소리로 고함을 칠 경우 이를 심각한 모욕으로 받아들이며 특히 외국인과 물리적인 충돌이 발생할 경우 주위 사람들이 합세하여 외국인을 공격하는 경우가 있습니다.</p>
                                                                    <p>

                                                                        [9. 심야시간 인적이 드문 뒷골목 출입 자제] <br> ㅇ 퍽치기, 날치기, 삐끼 등에 의한 피해가 발생할 수 있습니다.</p>
                                                                    <p>

                                                                        [10. 휴대전화 상시 소지]<br> ㅇ 휴대전화 및 충전기를 상시 휴대, 충전상태를 수시로 확인하시고, 외부에서 배터리가 부족한 경우 식당, 커피숍 등 적당한 장소에서 휴식하면서 충전하십시오.<br> ※ 일부 편의점에서는 급속충전 서비스를 제공</p>
                                                                    <p>

                                                                        [11. 해변휴양지 방문 주의]<br> ㅇ 태국 해안은 파도가 생각보다 높고 수시로 일기가 바뀌어 잔잔하던 파도가 갑자기 높아지는 등의 현상이 잦아 해상 인명사고가 빈번히 발생하나, 위험표지시설이 충분하지 않고 응급의료 체계가 허술하며 의료시설도 부족한 실정이므로 항상 주의합시다.</p>
                                                                    <p>

                                                                        [12. 타인물건 대리운반 등 절대 금지]<br> ㅇ 공항이나 여행지 등에서 낯선 사람이 접근하여 입국심사 시 통역이나 시내교통편 안내 등을 명목으로 동행을 부탁한다든가 자신의 휴대품을 특정 지점에 전달해 줄 것을 요청하는 경우 불법입국, 마약, 밀수 등의 범죄에 이용당하는 피해가 발생할 수 있으므로 절대 응해서는 안됩니다. 국제공항 내에서 타인의 물건을 대리운반 하는 행위는 세계 모든 국가에서 금지되고 있습니다.</p>
                                                                    <p>

                                                                        [13. 여행자 보험 가입]<br> ㅇ 여행자 보험은 비교적 저렴한 보험료로 해외에서 사건사고 발생 시 많은 도움을 받을 수 있습니다. 이하 내용 생략 [14. 머리 만지기 주의]<br> ㅇ 태국인들은 머리에 영혼이 들어있다고 믿고 있습니다. 따라서 어른이든 어린이든 머리를 만지는 것은 금물이며 만약 실수로 만졌을 경우 즉시 정중히 사과하시는 것이 좋습니다.</p>
                                                                    <hr>
                                                                    <div class="gdlr-core-title-item-title-wrap">
                                                                        <h6 class="gdlr-core-title-item-title gdlr-core-skin-title" style="font-size: 16px;font-weight: 600;letter-spacing: 0px;text-transform: none;">사건ㆍ사고의 유형<span class="gdlr-core-title-item-title-divider gdlr-core-skin-divider"></span></h6>
                                                                    </div>
                                                                    <p>


                                                                        [1. 택시 관련 사건사고]<br> ㅇ 사례 : 승차거부, 바가지(미터기 미작동, 먼길 돌아가기 등), 물건 분실. 교통사고 등 빈번</p>
                                                                    <p>

                                                                        [대처요령] <br> ㅇ 승차거부, 바가지 등 행위는 태국법상 처벌대상이며 특히 2012.9.1.부터 승차거부에 대한 처벌이 강화 되었습니다. 택시 승차시 차량번호와 색상, 운전자명, 승차 및 이동장소, 이용 시간 등을 수첩 등에 기록하는 것이 바람직합니다.<br> ㅇ 운전자가 보는 앞에서 기사나 택시의 사진을 촬영하거나 할 경우, 시비발생 가능성이 있으므로 가급적 요령껏 운전자가 의식하지 않는 가운데 암기 또는 기록하는 것이 좋습니다.(태국 택시 뒷좌석 주위에는 차량 번호 등 정보가 부착되어 있습니다).<br> ㅇ 호텔에서 택시를 이용할 경우 대부분 호텔관계자가 차량번호 및 행선지 등을 기록해 놓으므로, 택시에서 물건을 두고 내렸을 경우나 요금시비 등 발생시 해당 택시를 찾기가 용이합니다.<br> ㅇ 간혹 승객의 안전벨트 미착용도 단속하므로 반드시 착용하시고 승하차시 지나가는 오토바이 또는 다른 차량 등에 주의하십시오.<br> ㅇ 승차거부 등 택시이용 관련 경미한 피해는 전화 1197로 신고하십시오.</p>
                                                                    <p>

                                                                        [2. 유료 오토바이 사건사고]<br> ㅇ 사례 : 요금 시비, 추락 또는 충돌로 인한 사건사고 빈번</p>
                                                                    <p>

                                                                        [대처요령]<br> ㅇ 미리 목적지를 말하고 요금이 얼마인지 분명히 확인한 후에 타십시오.<br> ㅇ 운행 중 오토바이 뒤쪽 손잡이를 꼭 붙잡고 발걸이에 발을 올려서 불의의 추락 및 충돌사고를 미연에 예방합시다.<br> ㅇ 출퇴근 시간에는 탑승자의 안전모 미착용도 단속하고 적발되면 탑승자에게도 벌금이 부과되므로 반드시 안전모를 요구하여 착용합시다.<br> ㅇ 승하차시 지나가는 다른 오토바이 또는 차량 등에 주의합시다.</p>
                                                                    <p>

                                                                        [3. 해변 휴양지 제트스키 렌탈 관련 사건사고]<br> ㅇ 사례 : 제트스키를 렌탈했다가 반환하는 과정에서 업자들이 사고 또는 기타 사유로 제트스키가 손상되었다며 과도한 보상비, 수리비 요구 사례 자주 발생</p>
                                                                    <p>

                                                                        [대처요령]<br> ㅇ 가급적 제트스키 이용을 자제하시고 굳이 이용할 경우 사전에 보험가입 여부를 반드시 확인해야 하며, 사고가 발생하지 않도록 조심스럽게 운행해야 합니다.<br> ※ 일부 지역에서는 제트스키 렌탈업 자체가 불법이어서 보험가입이 안되어 있음.<br> ㅇ 사후 과도한 보상 요구시 반박 증거자료로 제시할 수 있도록 디지털 카메라 등으로 사전에 제트스키의 상태를 상세히 촬영하고, 특히 이미 손상된 부분은 정밀 근접 촬영 합시다.<br> ㅇ 시비가 발생한 경우 절대 큰소리로 다투거나 물리적으로 충돌하지 마시고 즉시 관광경찰신고전화 1155번(영어 가능)로 신고하거나 또는 대사관에 연락하여 조력을 요청하십시오.<br> ※ 전화상으로 통역서비스 제공 또는 통역인 소개 가능</p>
                                                                    <p>

                                                                        [4. 섬지역 여행 관련 사건사고]<br> ㅇ 사례 : 보트 구명조끼 등 안전장비 미비, 정원초과 운행 등으로 인한 인명피해, 갑작스러운 기상악화 등으로 인한 고립 등이 간혹 발생</p>
                                                                    <p>

                                                                        [대처요령] <br> ㅇ 사전에 구명조끼 등 안전장비가 갖추어져 있는지, 너무 노후된 보트가 아닌지 여부를 세심하게 확인합시다.<br> - 물놀이 등 해상 스포츠를 즐길 경우 반드시 구명조끼를 착용하시기 바랍니다.<br> ㅇ 해당 지역의 일기예보에 관심을 기울이고, 불순한 기상조건이 예상될 경우 가급적 섬지역 여행을 삼가 합시다.<br> ㅇ 섬지역에 고립되었을 경우, 가장 가까운 안전지대로 대피 또는 집결 후 관광경찰 1155에 신고 또는 대사관에 조력을 요청하십시오.</p>
                                                                    <p>

                                                                        [5. 유흥가 출입 관련 사건사고]<br> ㅇ 사례 : 클럽이나 기타 유흥업소에서 만난 여성 등에 의해 수면제 기타 마취약 등으로 의식을 잃은 상태에서 금품을 털리는 경우(마취강도), 또는 여성과 숙소 동행 후 금전 시비 사례, 기타 바가지 술값 시비 등 자주 발생</p>
                                                                    <p>

                                                                        [대처요령]<br> ㅇ 클럽 등에서 외국인에게 접근하는 태국여성 상당수가 직업 매춘여성이며 이중 일부는 마취강도 조직이라는 점을 유의해야 합니다.<br> ㅇ 태국법상 성매매는 엄연한 불법이며, 한국 국내법도 해외 성매매는 불법으로 처벌대상으로 하고 있음을 양지하십시오.<br> ㅇ 가급적 업소 내에서 어울리는 정도에 그치는 것이 바람직하며, 술이나 음료수 등에 약물을 넣지 않는지 항상 경계가 필요합니다.<br> ※ 상대방 몰래 음료수 등에 약을 타는 고전적 수법에서 진화, 최근에는 여성이 약물 등을 자신의 몸에 발라놓고 신체접촉의 방법을 통해 정신을 잃게 하는 수법도 등장하고 있음.<br> ㅇ 호텔 등에 동행한 경우 일정한 금전적 대가 지급을 예상해야 하며, 신체적 접촉이 없어도 상당한 시간 같이 있었다면 대가를 요구하는 경우가 대부분이고, 이로 인한 시비로 밀고 당기는 과정에서 폭행 등의 사건으로 번져 경찰에 연행되는 경우도 상당수 발생하므로 유흥업소에서 만난 낯선 여성과 호텔 동행을 삼가십시오.<br> ㅇ 만약 동행하였을 경우라면 사전에 호텔 로비 직원에게 동행하는 여성의 인적사항 등에 대한 기록을 요구하여 차후 피해 발생에 대비하십시오.<br> ㅇ 관광객이 찾지 않는 도심변두리의 은밀한 업소 등에는 출입하지 마시고 특히 길에서 호객행위자들이 안내하는 유흥업소는 절대 출입하지 마십시오.<br> ㅇ 유흥업소내 방재시설이 허술하여 간혹 화재가 발생하면 대형 인명피해로 이어지는 경우가 있으므로 유흥업소 출입시 비상탈출로를 반드시 확인하시고, 가능하면 비상 시 신속한 탈출이 용이한 장소에 위치하십시오.</p>
                                                                    <p>

                                                                        [6. 관광지 주변 바가지, 사기 사례]<br> ㅇ 왕궁, 박물관 근처 : 왕궁이나 박물관에 가려고 하면 "오늘 문 닫았다. 내가 시내구경을 시켜주겠다"는 등의 말로 유혹해서 잠시 시내관광을 안내하다가 조잡한 물건을 파는 기념품점, 보석가게 등으로 데려가 물건을 강매하는 사례가 발생하고 있으므로 길거리에서 만난 사람은 절대로 따라가지 마십시오.<br> ㅇ 기타 바가지, 물건 강매 등<br> ㅇ 관광지 주변에서 이유 없이 접근해서 친절을 베푸는 사람 가운데 상당수가 금품을 요구하는 경우가 있습니다.(예를 들어 왕궁 근처 비둘기를 구경하고 있으면 누군가 접근하여 모이 주라며 친절하게 비닐봉지를 건넨 후에 나중에 모이 값이라며 돈을 요구하는 사례)<br> ㅇ 따라서 이유 없는 친절에 대해 경계심을 가져야 하며, 누가 무엇인가를 줄때 순수한 친절인지 대가를 요구하는 것인지 확신이 서지 않으면 반드시 “타오라이 캅”(여성은 ”타오라이 카“, 얼마인가요의 의미)이라고 물어보십시오.<br> ㅇ 태국어 숫자 세는 법은 한국어와 비슷한 발음이 많으므로 금방 배워 사용하실 수 있습니다.<br> ㅇ 숫자 세기 : 능(1), 썽(2), 쌈(3), 씨(4), 하(5), 혹(6), 쩻(7), 뻿(8), 까오(9), 씹(10), 씹엣(11), 러이(100), 판(1,000), 먼(10,000), 12-19는 그대로 붙여서 말하면 됩니다, 예컨대 14는 ”씹씨“입니다.</p>
                                                                    <p>

                                                                        [7. 낯선 타인과 음주 등 관련 사건사고]<br> ㅇ 사례 : 여행으로 들뜬 기분에 경계심이 풀어져 처음 만난 태국인 또는 외국인과 과도하게 친해져 음주를 하다가 강도, 절도, 사기, 폭행 등을 당하는 사례 자주 발생</p>
                                                                    <p>

                                                                        [대처요령] <br> ㅇ 여행지에서 낯선 타인에 대해 경계심을 늦추지 말고, 특별한 이유 없이 지나친 친절을 베푸는 타인에 대해서는 국적을 불문하고 의도를 의심해 볼 필요가 있으며, 특히 과도한 음주를 자제 하십시오.</p>
                                                                    <p>

                                                                        [8. 퍽치기]<br> ㅇ 사례 : 특히 여성 관광객들을 대상으로 심야 뒷골목 등에서 오토바이를 탄 2명 이상의 강도가 손가방 등을 낚아채거나 둔기로 머리 등을 때려 실신시키고 금품을 털어가는 사례 가끔 발생</p>
                                                                    <p>

                                                                        [대처요령]<br> ㅇ 심야 인적이 드문 뒷골목 출입 자제. 손가방 핸드백 등은 어깨에 걸치지 말고 허리에 차는 것이 좋습니다.<br> ㅇ 여성 혼자 또는 여성끼리만 야간에 도보로 관광할 때에는 주위에 대한 경계를 게을리 하지 마십시오.<br> ㅇ 피해를 당한 경우 경황 중이더라도 오토바이 색상, 번호, 범인 인상착의와 함께 사건발생 장소, 시간, 경위 등을 최대한 기억을 떠올려 정리한 후 경찰 및 공관에 신고하여 조력을 받으십시오.</p>
                                                                    <p>

                                                                        [9. 귀금속 쇼핑 바가지]<br> ㅇ 사례 : 타인의 소개(‘일반사람은 출입할 수 없는 업소’ 라는 등의 말로 현혹케 함)를 받아 귀금속가게에 출입하였다가 "한국으로 가져가면 몇 배는 남길 수 있다"는 등의 감언이설에 속아 저급한 귀금속류 등을 고가에 구입하여 귀국 후 저급한 것이 밝혀져 피해구제를 받으려 해도 해당 소개인은 전화번호를 바꾸어 연락두절 상태이고 해당 보석가게는 환불을 거부하여 피해를 보는 사례가 자주 발생</p>
                                                                    <p>

                                                                        [대처요령]<br> ㅇ 과도한 가격의 귀금속류 구입을 자제 하십시오<br> ※ 해외에서 600달러를 초과하는 물품을 구매한 경우 한국 입국시 세관에 신고해야하며, 신고 없이 반입할 경우 적지 않은 액수의 세금 부과는 물론 밀수혐의 까지 받을 수 있음.<br> ㅇ 업소를 안내해 준 사람에게 인적사항을 밝혀줄 것을 요구(여권사본, 주민등록증, 운전면허증 기타 사진이 부착된 신분증 등으로 확인)하여 기록, 보관하십시오. 인적사항을 적어놓는 것만으로도 바가지 가능성을 줄일 수 있습니다.<br> ㅇ 구입시 반드시 업주로부터 영수증과 함께 나중에 사실과 달리 구입가보다 저렴한 저급품인 것으로 밝혀질 경우 즉시 환불해 준다는 확인서를 요구, 받아 놓으십시오.</p>
                                                                    <p>

                                                                        [10. ‘툭툭’ 바가지와 사고]<br> ㅇ 사례 : ‘툭툭’은 소형 삼륜차형 차량으로 태국의 관광명물로 알려져 관광객의 이용이 빈번한 바, 일부 툭툭 기사들이 심야에 과도한 요금을 요구하여 시비가 발생하거나, 툭툭 운전자의 난폭운전으로 인한 교통사고도 빈발</p>
                                                                    <p>

                                                                        [대처요령]<br> ㅇ 승차 전에 행선지를 밝히고 요금이 얼마인지 반드시 확인 후 승차하시고, 원거리를 이동할 때에는 툭툭 이용을 자제 하십시오.<br> ※ 툭툭은 충격완화 장치가 없어 승차감이 나빠 장거리 승차시 부상의 위험이 크고 매연도 심함.<br> ㅇ 난폭운전의 정도가 심할 경우 천천히 갈 것을 강력히 요구하고 그래도 시정이 안되면 중간에서 하차하는 것이 좋습니다.</p>
                                                                    <p>

                                                                        [11. 절도, 소매치기 피해]<br> ㅇ 사례 : 방콕 ‘짝뚜짝’ 시장 및 각종 야시장 등 관광객이 많이 붐비는 장소, 주말 디스코클럽 등 대형 유흥업소, 출퇴근 시간 혼잡한 전철안, 저렴한 호텔이나 게스트하우스 등에서 절도나 소매치기 피해 빈발</p>
                                                                    <p>

                                                                        [대처요령]<br> ㅇ 다액 현금이나 고가 귀중품, 신용카드 등은 가급적 소지하지 말고 호텔 프런트나 금고 등에 보관하십시오.<br> ㅇ 사람들이 붐비는 장소에서는 손가방이나 핸드백 등을 날치기 당하지 않도록 항상 주의를 기울여야 합니다.<br> ㅇ 야간에 오토바이를 탄 날치기 범죄도 발생하고 있으므로 손가방, 핸드백 등을 어깨에 걸치지 말고 몸 앞쪽으로 오도록 해서 어깨를 가로질러 매는 것이 바람직합니다.<br> - 가능한 길을 걸을때 차도와 떨어진 인도 안쪽으로 보행하시기 바라며, 가방은 차도 반대편 쪽으로 하여 휴대하시기 바랍니다.<br> ㅇ 피해를 당한 경우 즉시 관광경찰신고전화 1155번 또는 경찰긴급신고전화 191번으로 신고하십시오.</p>
                                                                    <p>

                                                                        [12. 경찰관 등의 금품요구, 함정수사, 마약 planting 사례 등]<br> ㅇ 사건 등을 조사 또는 검문하는 과정에서 사건 무마 등을 조건으로 금품을 요구하는 사례<br> ㅇ 사전에 공모한 태국인이 야간에 유흥업소나 뒷골목 등에서 접근한 뒤 마약 등을 사라며 흥정하는 동안 갑자기 경찰이 나타나 마약소지 등의 혐의로 체포하겠다며 겁을 주고 무마조로 금품을 요구하는 사례<br> ㅇ 야간에 음주운전 단속 등을 이유로 차량 또는 사람을 정지시킨 뒤 압수수색을 빙자, 미리 준비한 마약 등을 차량내 보관함 또는 호주머니에 슬쩍 숨겨놓고(planting) 마치 발견한 것처럼 해서 체포하겠다며 겁을 준 뒤 금품을 요구하는 사례 등이 간혹 발생</p>
                                                                    <p>

                                                                        [대처 요령]<br> ㅇ 지나친 음주, 음주운전, 으슥한 뒷골목 출입, 낯선 타인과 어울리는 행위, 야간 주취상태에서 길거리 고성 등 주위의 주목을 끄는 행동, 타인과 언쟁 및 몸싸움 등 시비행위 기타 경찰관이 개입할 수 있는 명분을 제공할 만한 일체의 행동을 자제하십시오.<br> ㅇ 자신의 결백을 주장할 때에는 가급적 침착한 태도와 차분한 말투를 견지하시고, 경찰관에게 고성을 지르거나 말싸움 또는 몸싸움 등은 오히려 사건을 복잡하게 만들 가능성이 크므로 자제하십시오.<br> ㅇ 정복, 사복을 불문하고 경찰신분증 및 소속 부서, 전화번호 등의 제시를 요구하여 확인하십시오.<br> ㅇ 현장에서 체포당하였을 경우 ‘영사관계에 관한 비엔나협약’의 규정에 의거, 즉시 대사관에 연락해 줄 것을 요구하십시오.<br> ㅇ 금품제공 등 부당한 사항을 요구 당하였을 경우 가능한 범위 내에서 해당 경찰관 몰래 휴대폰 녹취기능 등을 이용, 대화내용을 녹취해 놓으면 차후 자신의 결백증명은 물론 해당 경찰관을 문책할 수 있는 결정적 증거가 될 수 있습니다.<br> ㅇ 사전 체포영장을 소지한 채 체포하려 할 경우, 반드시 체포영장 제시를 요구하고 영장에 기재된 체포대상자의 이름과 영장 유효기간을 확인하십시오.<br> ㅇ 가능한 빠른 시간 내에 영사과(주간), 긴급전화(야간)로 대사관에 신고하여 조력을 요청하십시오.</p>
                                                                    <p>

                                                                        [13. 입국거부]<br> ㅇ 입국이 거부되는 사례<br> ㅇ 출입국규제자(이른바 블랙리스트) 등재<br> ㅇ 동명이인(블랙리스트에 등재된 사람과 영문성명 일치)<br> ㅇ 기내 과도한 음주로 만취상태에서 입국수속 중 횡설수설<br> ㅇ 출입국공무원의 불친절 등에 대한 과도한 항의나 고성<br> ㅇ 출입국카드 기재 부실로 담당공무원이 재차 기재를 요구하면서 대기줄 맨 끝으로 다시 가라는 지시에 과도한 항의<br> ㅇ 출입국공무원의 질문을 이해하지 못해 답변하지 않거나 출입국카드에 기재된 것과 상이한 답변, 또는 퉁명하고 불성실한 답변 등에서 비롯된 출입국공무원과의 시비<br> ㅇ 출입국공무원에게 고성을 지르거나 여권 등을 집어던지는 등의 행위<br> ㅇ 여권 훼손</p>
                                                                    <p>

                                                                        [대처요령]<br> ㅇ 출입국공무원의 질문이나 요구사항에 대해 침착하고 차분한 어조로 성실히 답변하시고, 이의를 제기할 경우에는 예의를 갖추어서 하십시오.<br> ㅇ 출입국신고서를 정확하고 성실히 기재하시고, 기재사항에 대해 질문할 경우에 대비하여 내용을 알고 있어야 합니다.<br> ㅇ 항공기내에서 과도한 음주를 자제 하십시오.<br> ㅇ 동명이인으로 입국 거부된 경우 즉시 대사관으로 신고하여 도움을 요청하십시오.<br> ㅇ 태국은 입국심사시 여권(비자면 포함) 훼손에 대해 위조/변조 등으로 생각하여, 입국을 불허합니다. 항상 여권을 깨끗하고 안전하게 관리해야 합니다.<br> ㅇ 입국여부 결정은 해당 국가의 주권사항으로 명백한 사유가 있는 경우(예컨대 출입국공무원의 폭행)를 제외하고는 입국거부 결정에 대해 공관이 이의를 제기할 수 없는 경우가 대부분입니다.</p>
                                                                    <p>

                                                                        [14. 담배 면세 통관]<br> ㅇ 사례 : 태국법상 1인당 1카튼(carton, 10갑)의 면세반입 가능한 담배를 초과해서 반입하거나, 일행이 함께 구매한 담배를 일행 중 1명이 한꺼번에 가지고 들어오다가적발되어 압수조치 당하고 1갑당 500바트에 가까운 벌금을 부과 당하는 사례 빈번 발생 [대처요령]

                                                                        <br> ㅇ 반드시 1인당 1카튼만 구입하고, 일행이 함께 구입한 담배는 각자 1카튼씩 소지한 채 통관해야 하며 굳이 초과 반입해야 할 경우 사전에 공항관세당국에 신고하여 소정의 관세를 납부한 후 통관해야 합니다.<br> ㅇ 이는 한국인 뿐 아니라 모든 국제선 승객(태국인 포함)에게 해당되는 사항으로, 초과반입이 적발되면 1인당 반입이 허용되는 담배까지 포함, 소지한 모든 담배를 압수당하고 그에 따른 벌금을 납부해야 하며, 경우에 따라서는 밀수나 탈세 등의 범죄혐의로 조사받게 될 수도 있습니다.<br> ㅇ 간혹 일행이 여러 명인데 한명이 다른 일행의 담배까지 한꺼번에 소지하고 반입하는 것이 무슨 문제가 있느냐며 세관공무원에게 항의하는 경우가 있는데, 이는 일종의 대리운반 행위로 모든 국제공항에서는 보안을 위해 타인의 물품을 대리 운반하는 행위를 엄격히 금지하고 있음을 주지하시기 바랍니다.</p>
                                                                    <p>

                                                                        [15. 교통 사고 관련]<br> ㅇ 사례 <br> ㅇ 버스, 택시, 오토바이 등 대중교통을 이용하다가 사고 발생<br> ㅇ 차량, 오토바이를 렌트하여 운행하다가 사고 발생<br> ㅇ 무면허, 음주운전 등 교통법규 위반 행위</p>
                                                                    <p>

                                                                        [대처요령]<br> ㅇ 태국은 한국과 달리 차량이 좌측통행이며, 방콕을 비롯한 태국 대도시 지역과 유명 관광지는 교통이 복잡하고 교통안전 시스템이 잘 정비되어 있지 않으며, 오토바이, 툭툭, 노점상, 자전거 및 보행자 등이 뒤섞여 중앙선침범, 역주행, 끼어들기 등 교통 안전의식이 높지 않고 법규위반이 일상적으로 이루어지고 있어 비교적 교통사고가 많이 발생하고 있기 때문에, 태국내 운전이나 지리에 익숙하지 않다면 가급적 차량 운전을 삼가하시기 바랍니다.<br> ㅇ 한국면허증으로 운전하다 사고가 발생할 경우 무면허로 간주되므로 굳이 렌트를 하실 경우, 미리 한국에서 국제운전면허증을 받아오셔야 하며 이는 오토바이의 경우에도 마찬가지입니다.<br> ㅇ 렌트할 차량 또는 오토바이의 보험가입 여부 및 보상범위를 꼼꼼히 확인 후 반드시 보험 가입된 차량을 렌트해야 합니다.<br> ㅇ 태국에는 보험 미가입 또는 책임보험에만 가입한 차량이 적지 않아 사고발생 시 보상을 충분히 받을 수 없는 경우가 많으므로 반드시 안전운행으로 사고가 발생하지 않도록 주의하여야 하며, 자신이 음주나 중앙선침범 등 교통법규 위반 상태에 사고가 발생하면 일단 가해차량으로 간주될 가능성이 높으므로 교통법규를 반드시 준수하십시오.</p>
                                                                    <p>

                                                                        [16. 마약사건]<br> ㅇ 사례 : 태국은 마약문제가 심각하여 정부가 이른바 ‘마약과의 전쟁’을 선포하고 단속에 나설 정도로 마약범죄 비율이 높은 국가 가운데 하나이며 따라서 비교적 손쉽게 마약을 구할 수 있어 간혹 마약 사용 또는 소지 등 마약관련 혐의로 체포되는 사건 발생 [대처요령]

                                                                        <br> ㅇ 태국정부는 마약범죄를 국가차원의 문제로 인식하고 대처방안으로 강력한 단속과 함께 관련 범죄자에 대해 무거운 처벌을 원칙으로 하고 있습니다.<br> ※ 현재 태국내 각 교도소에 수감중인 한국인들 가운데 절반 정도가 마약관련 혐의자이며, 최근 왕비 탄생 80주념을 맞아 단행된 대규모 사면에서도 마약관련자는 제외된 바 있음.<br> ㅇ 따라서 호기심 등으로 마약을 구입하거나 소지, 사용하는 행위는 절대 하지 말아야 합니다.<br> ㅇ 경찰이 마약관련 범죄자 검거실적을 올리는데 가장 손쉬운 방법이 외국인 마약구입자 또는 사용자를 검거하는 것이어서 마약을 구입한 경우 판매자가 경찰에 제보만 하면 언제라도 체포당할 처지에 놓이게 됩니다.<br> ㅇ 순간적인 호기심이나 충동, 욕구를 억제하지 못해 평생을 후회할 수 있는 실수를 범하지 맙시다. </p>
                                                                    <p>

                                                                        자연재해<br> ㅇ 2005.1월 동남아 지역에 발생한 쓰나미로 남부 푸켓지방에 인명 및 막대한 재산피해 발생(사망5,395명 실종 2,817명) <br> ㅇ 2010.10월 홍수로 사망자 98명, 이재민 약2백만명 발생</p>
                                                                    <p>

                                                                        유의해야할 지역<br> ㅇ 소매치기 유의지역<br> - 방콕, 푸켓, 파타야 등 외국인 다수 방문지역에 소매치기 , 오토바이날치기로 인한 피해가 빈발하고 있으니 가방, 여권, 지갑 등 소지품 관리에 유의하여 주시기 바랍니다.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="safeInfo04"><span class="gdlr-core-head">현지연락처</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>■ 여행국가 : 태국</p>
                                                                    <p>

                                                                        긴급연락처ㅇ 방콕 기동경찰(사건ㆍ사고 신고센터) : 191 </p>
                                                                    <p>
                                                                        ㅇ 관광경찰 : 1155(영어, 무료) <br> ㅇ 테러관련 신고 : 1195 <br> ㅇ 교통사고 신고 : 1669 <br> ㅇ 자연재해(지진, 해일, 폭풍 등) 신고 : 1860 <br> ㅇ 화재신고 : 199 <br> ㅇ 고속도로경찰 : 1193(고속도로, 국도상에서 사건ㆍ사고발생시) <br> ㅇ 긴급의료지원 요청 : 02-207-6000(경찰병원) <br> ㅇ 앰블러스 요청 : 1691, 02-354-8222(경찰병원) <br> ㅇ 택시 등 대중교통 피해신고 : 1197 </p>
                                                                    <p>


                                                                        의료기관 연락처ㅇ 영어 사용이 가능한 방콕 소재 병원</p>
                                                                    <p>
                                                                        - Bangkok General Hospital (02-310-3000, 한국어 통역원 보유) <br> - Samitivej Hospital (02-392-0011, 한국어 통역원 보유) <br> - Bumrungrad Hospital (02-667-1000, 한국어 통역원 보유) <br> - Praram 9 Hospital (02-202-9999, 한국어 통역원 보유) <br> - Bangkok Christian Hospital (02-625-9000, 한국어 통역원 보유) <br> - BNH Hospital (02-686-2700, 한국어 통역원 보유) </p>
                                                                    <p>


                                                                        대사관 연락처ㅇ 주소 : 23 Thiam-Ruammit Road, Ratchadapisek, Huay-Kwang, Bangkok 10310, Thailand </p>
                                                                    <p>
                                                                        ㅇ 이메일 : koembth@gmail.com <br> ㅇ 대표번호 : 66-2-247-7537/9 <br> ㅇ 긴급연락처(일과 후) : 66-81-914-5803 <br> ㅇ 영사과 : 66-2-247-7540/41
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="gdlr-core-toggle-box-item-tab clearfix">
                                                            <div class="gdlr-core-toggle-box-item-icon gdlr-core-js gdlr-core-skin-icon "></div>
                                                            <div class="gdlr-core-toggle-box-item-content-wrapper">
                                                                <h4 class="gdlr-core-toggle-box-item-title gdlr-core-js  gdlr-core-skin-e-background gdlr-core-skin-e-content" id="safeInfo05"><span class="gdlr-core-head">해외여행자 인터넷 등록제도</span></h4>
                                                                <div class="gdlr-core-toggle-box-item-content">
                                                                    <p>해외여행 등록제 '동행' 에 가입하시면 목적지의 안전정보, 여행객의 안전정보, 해외여행 중 사고에 대해 가족에게 사고사실 전달이 가능합니다.</p>
                                                                    <p>

                                                                        동행 이용방법</p>
                                                                    <p>
                                                                        - 해외여행자가 해외안전여행홈페이지에 신상정보·국내비상연락처·현지연락처·일정 등을 등록<br> - 등록된 여행자에게 방문지의 안전정보를 메일로 발송하는 맞춤형 해외여행안전정보제공<br> - 등록된 여행자가 사건·사고에 처했을 때 비상연락처·소재지 등 파악을 용이하게 하여 보다 효율적 영사 조력 제공 가능</p>
                                                                    <p>
                                                                        인터넷 등록시 제공되는 세 가지 혜택</p>
                                                                    <p>
                                                                        1. 인터넷등록과 동시에 목적지의 안전정보를 이메일을 통해 받아볼 수 있습니다. 이와 함께 수시로 업데이트되는 목적지의 치안상황이나 자연재해 가능성 등의 안전공지 역시 이메일을 통해 확인할 수 있습니다.<br> 2. 해외에서 대규모 재난· 재해가 발생하여 우리 여행객의 안전을 확인해야하는 경우, 미리 등록한 여행정보와 현지 연락처를 바탕으로 소재파악을 할 수 있습니다.<br> 3. 해외 여행 중 불의 의 사고를 당하여 가족에게 사고사실을 알려야 하는 경우, 재외공관(대사관)에서 미리 등록한 비상연락처를 바탕으로 신속하게 연락을 취할 수 있습니다.</p>
                                                                    <p>
                                                                        회원가입을 위한 동행 사이트 접속방법<br> www.0404.go.kr 접속 -> 동행 -> 동행소개 -> 회원가입
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </section>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <link rel="stylesheet" href="/public/etc/package/css/detail-main.css">

            <footer id='tp-footer' class='main-footer container-fluid'>
                <div id="tp-partner">
                    <div class="row" style="width:100%;">
                        <div class="w-100">
                            <h6>PARTNERS</h6>
                        </div>
                        <div class="d-flex flex-wrap">
                            <!--<figure>
                                <img src="/public/etc/package/image/b_partner_accordiagolf.png" alt="">
                            </figure>
                            <figure>
                                <img src="/public/etc/package/image/b_partner_orixgolf.png" alt="">
                            </figure>
                            <figure>
                                <img src="/public/etc/package/image/b_partner_PGM.png" alt="">
                            </figure>
                            <figure>
                                <img src="/public/etc/package/image/b_partner_princehotel.png" alt="">
                            </figure>
                            <figure>
                                <img src="/public/etc/package/image/b_partner_hiltonhotel.png" alt="">
                            </figure>
                            <figure>
                                <img src="/public/etc/package/image/b_partner_bookingdotcom.png" alt="">
                            </figure>-->
                            <figure>
                                <a href="http://www.widemobile.com/?golfpass" target="_balnk">
                                    <img src="/public/etc/package/image/b_partner_wifi.png" alt="">
                                </a>
                            </figure>
                            <figure>
                                <a href="http://www.timescar-rental.kr/af/7822000076/kr/" target="_balnk">
                                    <img src="/public/etc/package/image/b_partner_timescar.png" alt="">
                                </a>
                            </figure>
                            <figure>
                                <img src="/public/etc/package/image/b_partner_iagto.png" alt="">
                            </figure>
                            <figure><a href="https://openyourplan.com/2017/?JHS=5fb07c442335f52d0170e8b6791a8c9278817f21a05eeeb6f31dc1" target="_balnk">
                                <img src="/public/etc/package/image/b_partner_openplan.png" alt=""></a>
                            </figure>
                        </div>
                    </div>

                </div>

                <div class="row d-flex" style="width:100%; margin-bottom:16px;">
                    <ul class="ulul">
                        <li class="tp-title">ABOUT US</li>
                        <!--<li><a style="color:#ababab;" href="http://golfpass.net/index.php/base/page/get/1">회사 소개</a></li>-->
                        <li><a style="color:#ababab;" href="http://golfpass.net/index.php/base/page/get/2">이용 약관</a></li>
                        <li><a style="color:#ababab;" href="http://golfpass.net/index.php/base/page/get/3">개인 정보 취급 방침</a></li>
                        <li><a style="color:#ababab;" href="https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/pp/index_pp.xml">사업자 정보 확인</a></li>
                    </ul>
                    <ul class="ulul">
                        <li class="tp-title">OFFICE</li>
                        <li><span>TEL</span>
                            <p>02-6959-5454</p>
                        </li>
                        <li><span>E-mail</span>
                            <p>golfpass_@naver.com</p>
                        </li>
                    </ul>
                    <ul class="ulul">
                        <li class="tp-title">CONTACT US</li>
                        <li><span>상호</span>
                            <p>PLAYSEVEN</p>
                        </li>
                        <li><span>대표</span>
                            <p>황현철</p>
                        </li>
                        <li><span>사업자 등록 번호</span>
                            <p>280-81-00963</p>
                        </li>
                        <li><span>등록 판매업 신고 번호</span>
                            <p>2017-서울강서-1545호</p>
                        </li>
                        <li><span>주소</span>
                            <p>서울특별시 강서구 공항대로 227</p>
                        </li>
                    </ul>
                    <ul class="ulul">
                        <li class="tp-title">NEWS LETTER</li>
                        <li class="mb-20"><input type="text" id="newsLetter" placeholder="E-mail을 입력해주세요"></li>
                        <li><strong>골프패스</strong>
                            <p style="margin-bottom: 0;">에서 제공하는 유용한 소식</p>
                        </li>
                    </ul>
                    <ul class="ulul">
                        <li class="tp-title">CERTIFICATION MARK</li>
                        <!-- 기업은행안심이체 인증마크 적용 시작-->
                        <script _ajs_='45_495d281e7c21ddd2' _ah_='83925990'>
                            function onPopAuthMark(key) {
                                window.open('', 'AUTHMARK_POPUP', 'height=900, width=630, status=yes, toolbar=no, menubar=no, location=no');
                                document.AUTHMARK_FORM.authmarkinfo.value = key;
                                document.AUTHMARK_FORM.action = 'https://kiup.ibk.co.kr/uib/jsp/guest/esc/esc1030/esc103020/CESC302020_i.jsp';
                                document.AUTHMARK_FORM.target = 'AUTHMARK_POPUP';
                                document.AUTHMARK_FORM.submit();
                            }

                        </script>

                        <FORM name='AUTHMARK_FORM' METHOD='POST'>
                            <input type="hidden" name="authmarkinfo">
                        </FORM>
                        <!--기업은행안심이체 인증마크 적용 종료 -->
                        <li style="height:auto;">
                            <a href="javascript:onPopAuthMark('2ae0165604bed3399c7f3b867fdda050')"><img src='http://golfpass.net/image/bank.png' alt='인증마크' border='0'/></a>
                        </li>
                    </ul>
                </div>
                <div class="row d-flex" style="width:100%; margin:0;">
                    <p class='align-self-end mr-auto ml-auto'>© 2017 <strong>GOLFPASS.</strong> All Rights Reserved.</p>
                </div>

            </footer>
        </div>
    </div><a href="#traveltour-top-anchor" class="traveltour-footer-back-to-top-button" id="traveltour-footer-back-to-top-button"><i class="fa fa-angle-up" ></i></a>

    <script type='text/javascript' src='/public/etc/package/js/jquery1_11_4_3.js'></script>
    <script type='text/javascript' src='/public/etc/package/js/jquery4_9_5.js'></script>
    <script type='text/javascript' src='/public/etc/package/js/jquery2_1_4.js'></script>
    <script type='text/javascript' src='/public/etc/package/js/jquery1_0_0.js'></script>
    <script type='text/javascript' src='/public/etc/package/js/jquery4_9_5_3.js'></script>
    <script type='text/javascript'>
        var gdlr_core_pbf = {
            "admin": "",
            "video": {
                "width": "640",
                "height": "360"
            },
            "ajax_url": "https:\/\/demo.goodlayers.com\/traveltour\/wp-admin\/admin-ajax.php",
            "ilightbox_skin": "dark"
        };

    </script>
    <script type='text/javascript' src='/public/etc/package/js/jquery4_9_5_4.js'></script>
</body>

<script src="/public/sangmin/js/slick.js" type="text/javascript" charset="utf-8"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="/public/sangmin/dist/bootstrap/bootstrap.bundle.min.js"></script>
<script src="/public/sangmin/dist/Nwagon/Nwagon.js"></script>
<!-- <script src="/public/sangmin/js/chart.js"></script> -->
<script src="/public/sangmin/js/sticky.js"></script>
<script src="/public/sangmin/js/custom/navAction.js"></script>
<script src="/public/sangmin/js/custom/search.js"></script>
<script src="/public/sangmin/js/mobile_search.js"></script>
<script src="/public/sangmin/js/custom/detail_slide.js"></script>
<script src="/public/sangmin/js/custom/detail_sticky.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>
<script src="<?=domain_url('/public/js/common.js')?>"></script>

<!-- 검색기능 시작 -->
<script>
$("#input_search").keypress(function (e) {
var key = e.which;
// console.log(1);
    if(key == 13)  // the enter key code
    {
        var value =$(this).val();
        if(value === "") return false;
        window.location.href="<?=site_url(shop_product_uri."/gets_by_hash/")?>"+value; 
    }
});     

$("#mk-fullscreen-search-input").keypress(function (e) {

var key = e.which;
    if(key == 13)  // the enter key code
    {
        var value =$(this).val();
        window.location.href="<?=site_url(shop_product_uri."/gets_by_hash/")?>"+value; 
    }
});     
$("#mobile_search_btn").click(function()
{
var value =$("#mk-fullscreen-search-input").val();

window.location.href="<?=site_url(shop_product_uri."/gets_by_hash/")?>"+value; 
});
</script>
<!-- 검색기능 끝 -->
<!-- 뉴스레터 시작-->
<script>
$("#newsLetter").keypress(function (e) {
    var key = e.which;
    if(key == 13)  // the enter key code
    {
        var email =$(this).val();
        var url = "<?=site_url(main_uri."/add_newslatter")?>";

        $.ajax({
            type:"post",
            dataType:"json",
            url : url,
            data: { email : email},
            success : function(data){
                alert(data.email + "이(가) 뉴스레터에 등록되었습니다.");
            },
            error: function(xhr, textStatus, errorThrown){
                alert('에러...');
                $('.loading').fadeOut(500);
                console.log('code: '+request.status+"\n"+'message: '+request.responseText+"\n"+'error: '+error);
                console.log(errorThrown);
            }
        });
        return false;  
    }
});     
</script>
<!-- 뉴스레터 끝-->

<!-- 상품날자가격계산 -->
<script>
var $order_form = $("#tourmaster-single-tour-booking-fields");
function form_submit() {

	var start_date = new Date($("#datepicker1").val());
	
	var price = $("#price").val();
	var num_people = $("#num_people").val();
	if(price == -1) {
		alert("상담요망");
		return false;
	} 
	
	//총 가격
	var total_price = price * num_people;
	$("#total_price").val( total_price );

	//유효성 검사
	var now_date = new Date();
	if(now_date > start_date) {
		alert("이미 지난 날짜를 선택하셨습니다.");
		return false;
	}
	if(total_price == 0) {
		alert("인원을 선택해주세요.");
		return false;
	}
	
	//종료날짜
	start_date.setDate(start_date.getDate() + <?=substr($product->take_days, strpos($product->take_days, '일')-1, 1)?>);
	var yyyy = start_date.getFullYear();
	var M = start_date.getMonth() + 1;
	var d = start_date.getDate();
	if(M < 10) M = "0" + M;
	if(d < 10) d = "0" + d;
	var str_date = yyyy + "-" + M + "-" + d;
	$("#end_date").val(str_date);
	
	$order_form.submit();
}

$(document).ready(function() {
    //    ajax_get_price();
        $startDate.change(function() {
            // if(validationGetPrice() === 1)
            // validationGetPrice()
            ajax_get_price();
        });
        $endDate.change(function() {
            // if(validationGetPrice() === 1)
            // validationGetPrice()
            ajax_get_price();
        });
    });
</script>

<!-- 상품날자가격계산 -->

</html>