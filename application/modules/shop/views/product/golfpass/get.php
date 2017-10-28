
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>골프패스</title>
	<!-- Bootstrap core CSS -->
	<link rel="stylesheet" href="/public/sangmin/dist/bootstrap/bootstrap.min.css">
	<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css">
	<link rel="stylesheet" href="/public/sangmin/css/main.css">
	<link rel="stylesheet" href="/public/sangmin/css/eric-meyer-reset.min.css">
	<link rel="stylesheet" href="/public/sangmin/css/xeicon.min.css">
	<link rel="stylesheet" href="/public/sangmin/dist/Nwagon/Nwagon.css" type="text/css">
</head>

<body>
	<header class='container-fluid' id='detail-header'>
		<nav id="header-nav">
			<ul class='row justify-content-between align-items-center'>
				<li class='col-6'>
					<ul class='d-flex align-items-center'>
						<li id="logo">
							<a href="<?=site_url('')?>">
                                <img class='d-none d-sm-block' src="/public/sangmin/img/icon/logo.png" alt="">
                                <img class='d-none d-block d-sm-none' src="/public/sangmin/img/icon/logo_mobile.png" alt="">
                            </a>
						</li>
						<li class='splice d-none d-sm-block'></li>
						<li id='nav-search' class='d-none d-sm-block '>
							<form action="" class="d-flex align-items-center">
								<i class="xi-search"></i>
								<input type="text" id="search" placeholder="관심있는 나라나 골프장을 검색해보세요!">
							</form>
						</li>
					</ul>
				</li>
				<li class='col-6'>
					<ul class='d-flex align-items-center justify-content-end'>
						<li>
							<a href="#">
                                <img src="/public/sangmin/img/icon/noimage.png" alt="">
                            </a>
						</li>
						<li class='splice'></li>
						<li id='nav-meun' class='d-flex align-items-center'>
							<a href="#" class='d-flex align-items-center'>
                                <i class="xi-bars"></i>
                                <span>메뉴</span>
                            </a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
		<article class="row no-gutters">
			<div id='slide-box' class="col-12 col-md-6 col-xl-5">
				<figure id='slide-img'>
					<?php if(isset($product_photos[0]->name)){?>
					<img src="<?=$product_photos[0]->name?>" alt="">
					<?php }?>
				</figure>
				<div id="slide-list" class='d-flex align-items-center justify-content-center'>
					<span><i class="xi-angle-left-min"></i></span>
					<ul class='d-flex align-items-center justify-content-center'>
						<?php for($i = 0 ;$i < count($product_photos);$i++){?>
						<li>
							<img src="<?=$product_photos[$i]->name?>" alt="">
						</li>
						<?php }?>
						
					</ul>
					<span><i class="xi-angle-right-min"></i></span>
				</div>
			</div>
			<div id="detail" class='col-12 col-md-6 col-xl-4'>
				<div id="score" class="d-flex flex-column align-items-center d-none d-lg-block d-xl-none">
					<i class="xi xi-star xi-2x"></i>
					<span>5.2</span>
				</div>
				<p id="regine">
				<?=$product->region?>
				</p>
				<h1 id="title"><?=$product->name?>
				</h1>
				<p id="title-en">
				<?=$product->eng_name?>
				</p>
				<div id="content">
					<p id='sub-title'>소개</p>
					<p><?=$product->desc?></p>
				</div>
			</div>
			<section id="chart" class='col-xl-3 d-none d-xl-block'>
			</section>
		</article>

		<!--NOTE 예약하기-->
		<section class="row  no-gutters">
			<div id='book-box' class="col-12 col-md-5 col-lg-4 col-xl-3">
				<div id="personnel">
					<h1 class="mb-2">예약하기</h1>
					<div id='count-box' class='d-flex align-items-stretch justify-content-end'>
						<span id='count'>1명 </span>
						<div id="icon-box" class="mr-3">
							<span><i class="xi-angle-up-min"></i></span><span><i class="xi-angle-down-min"></i></span>
						</div>
						<span class="d-flex align-items-end">
                        <i id='clock-icon' class="xi-time-o">
                        </i>
                    </span>
					</div>
				</div>
				<div id='dateBox'>
					<form action="#" class="d-flex align-items-center justify-content-between">
						<div class="form-group d-flex align-items-center mb-0">
							<input type="text" id="s-day" placeholder="출발일정">
							<i class="xi-calendar-check"></i>
						</div>
						<span>~</span>
						<div class="form-group d-flex align-items-center mb-0">
							<input type="text" id="e-day" placeholder="도착일정">
							<i class="xi-calendar-check"></i>
						</div>
					</form>
				</div>
				<div id="info" class="pt-20">
					<ul>

					<?php for($i=0;$i<count($product_sub_desc);$i++){?>
						<li class='d-flex align-items-center'><span class="mr-2 align-self-baseline"><i class='xi-radiobox-checked'></i></span>
							<p><?=$product_sub_desc[$i]->name?></p>
						</li>
					<?php }?>
					</ul>
					<div id='price' class="mt-20 mb-20">
						<h3 class='mb-3'>가격</h3>
						<p>15,000,000원(db적용미완료)</p>
					</div>
				</div>
			</div>
		</section>
	</header>
	<article class='row no-gutters flex-column' id='detail-article'>
		<section class="col-md-7 col-lg-8 col-xl-9" id="article-section-1">
			<div class='d-flex flex-column title-box'>
				<span>0<?=$number++?></span>
				<h1 class="mt-13">골프장</h1>
			</div>
			<div class="list-content">
				<ul class="d-flex flex-wrap">
					<li class='d-flex flex-column'><span>홀수</span>
						<p class='mt-2'><?=$product->hole_count?></p>
					</li>
					<li class='d-flex flex-column'><span>코스타입</span>
						<p class='mt-2'><?=$product->course_type?></p>
					</li>
					<li class='d-flex flex-column'><span>파</span>
						<p class='mt-2'><?=$product->pa?></p>
					</li>
					<li class='d-flex flex-column'><span>길이</span>
						<p class='mt-2'><?=$product->distance?></p>
					</li>

					<li class='d-flex flex-column'><span>잔디타입</span>
						<p class='mt-2'><?=$product->grass_type?></p>
					</li>
					<li class='d-flex flex-column'><span>개장일</span>
						<p class='mt-2'><?=$product->open_day?></p>
					</li>
				</ul>
			</div>
		</section>
		<?php if(isset($hotel)){?>
		<section class="col-md-7 col-lg-8 col-xl-9" id="article-section-2">
			<div class='d-flex flex-column title-box'>
				<span>0<?=$number++?></span>
				<h1 class="mt-13">숙박</h1>
			</div>
			<div class="list-content">
				<ul class="d-flex flex-wrap">
					<li class='d-flex flex-column'><span>업체명</span>
						<p class='mt-2'><?=$hotel->name?></p>
					</li>
					<li class='d-flex flex-column'><span>객실수</span>
						<p class='mt-2'><?=$hotel->room_count?></p>
					</li>
					<li class='d-flex flex-column'><span>객실타입</span>
						<p class='mt-2'><?=$hotel->room_type?></p>
					</li>
					<li class='d-flex flex-column'><span>침실</span>
						<p class='mt-2'><?=$hotel->bedroom?></p>
					</li>

					<li class='d-flex flex-column'><span>화장실</span>
						<p class='mt-2'><?=$hotel->bathroom?></p>
					</li>
					<li class='d-flex flex-column'><span>최대 인원</span>
						<p class='mt-2'><?=$hotel->maxium_number_of_people?></p>
					</li>
					<li class='d-flex flex-column'><span>침대</span>
						<p class='mt-2'><?=$hotel->bed?></p>
					</li>
					<li class='d-flex flex-column'><span>체크 인/체크 아웃</span>
						<p class='mt-2'><?=$hotel->check_in_out?></p>
					</li>
				</ul>
			</div>
		</section>
		<?php }?>
		<?php if(count($product_options) !== 0) {?>
		<section class="col-12" id="article-section-3">
			<div class='d-flex flex-column title-box'>
				<span>0<?=$number++?></span>
				<h1 class="mt-13">골프장 시설</h1>
			</div>
			<div class="list-content">
				<ul class="d-flex flex-wrap">
					<?php for($i=0 ; $i < count($product_options); $i++ ){?>
					<li class='d-flex flex-column'>
						<p><?=$product_options[$i]->name?></p>
					</li>
					<?php }?>
				</ul>
			</div>
		</section>
			<?php }?>
		
		<?php if(isset($hotel_options)) {?>
		<section class="col-12" id="article-section-4">
			<div class='d-flex flex-column title-box'>
				<span>04</span>
				<h1 class="mt-13">숙박 시설</h1>
			</div>
			<div class="list-content">
				<ul class="d-flex flex-wrap">
				<?php for($i=0 ; $i < count($hotel_options); $i++ ){?>
					<li class='d-flex flex-column'>
						<p><?=$hotel_options[$i]->name?></p>
					</li>
					<?php }?>
					
				</ul>
			</div>
		</section>
		<?php }?>
		<section class="col-12" id="article-section-5">
			<div class='d-flex flex-column title-box'>
				<span>0<?=$number++?></span>
				<h1 class="mt-13">취소/환불</h1>
			</div>
			<div id="section-5-list-content">
				<ul class="d-flex flex-column">
					<li>
						<p>
							출발일 7일 전까지 예약 취소시 전액 환불됩니다.
						</p>
					</li>
					<li>
						<p>
							출발일 6일전~1일전 취소시 위약금은 결제금액의 50% 입니다.
						</p>
					</li>
					<li>
						<p>
							게스트가 체크인하지 않은 경우 고객의 변심으로 간주되어 환불이 불가합니다.
						</p>
					</li>
					<li>
						<p>
							게스트 또는 호스트에게 불만이 생길 경우, 체크인 이후 24시간 내에 스테이골프 측에 알려야 합니다.
						</p>
					</li>
					<li>
						<p>
							분쟁 발생 시 스테이골프는 중재를 위해 개입할 수 있으며 이 경우 스테이골프가 최종 결정을 내리게 됩니다.
						</p>
					</li>
					<li>
						<p>
							예약 취소 확인 화면에서 예약 취소 버튼을 클릭해야 예약이 정식으로 취소됩니다.
						</p>
					</li>
					<li>
						<p>
							게스트 환불 정책, 안전문제로 인한 예약취소, 또는 정상참작 가능한 상황에 해당되는 경우 숙소의 환불 정책 대신 관련 정책이 적용될 수 있습니다.
						</p>
					</li>
					<li>
						<p>
							관련 세금액은 차감 및 징수됩니다.
						</p>
					</li>
				</ul>
			</div>
		</section>

	</article>
	<section id="section-map"></section>
	<section id="section-review" class='row no-gutters'>
		<div class="col-12 review-warning-text d-flex justify-content-center">
			<div class="d-flex flex-column align-items-center">
				<span class="mt-20 mb-10">리뷰</span>
				<p class='mb-20'>타인에게 불쾌감을 주는 리뷰는 동의없이 삭제될 수 있습니다.</p>
			</div>
		</div>
		<article id="review-box" class="row no-gutters">

		<?php for($i=0;$i<count($reviews);$i++){?>
			<div class="col-lg-12 col-xl-6 ">
				<article class="review d-flex flex-column">
					<div class="profile d-flex align-items-center">
						<div>
							<img src="/public/sangmin/img/icon/noimage.png" alt="" width="60px;" height="60px;">
						</div>
						<p class="ml-3">
							<span><?=$reviews[$i]->user_name?></span>님의
							<span>리뷰</span>
						</p>
					</div>
					<div class="content mt-8">
						<p><?=$reviews[$i]->desc?></p>
					</div>
					<div class="score d-flex align-items-center  mt-30">
						<p><?=$reviews[$i]->avg_score?></p>
						<ul>
							<li class="d-flex align-items-center justify-content-between">
								<p>코스전체 전략성</p>
								<span class="line"></span>
								<span><?=$reviews[$i]->score_1?></span></li>
							<li class="d-flex align-items-center justify-content-between">
								<p>페어웨이 넓이</p>
								<span class="line"></span>
								<span><?=$reviews[$i]->score_2?></span></li>
							<li class="d-flex align-items-center justify-content-between ">
								<p>코스 천장 길이</p>
								<span class="line"></span>
								<span><?=$reviews[$i]->score_3?></span></li>
							<li class="d-flex align-items-center justify-content-between">
								<p>그린의 난이도</p>
								<span class="line"></span>
								<span><?=$reviews[$i]->score_4?></span></li>
							<li class="d-flex align-items-center justify-content-between ">
								<p>코스트 퍼포먼스</p>
								<span class="line"></span>
								<span><?=$reviews[$i]->score_5?></span></li>
							<li class="d-flex align-items-center justify-content-between ">
								<p>시설 설비가 좋다</p>
								<span class="line"></span>
								<span><?=$reviews[$i]->score_6?></span></li>
							<li class="d-flex align-items-center justify-content-between">
								<p>식사가 맛있다.</p>
								<span class="line"></span>
								<span><?=$reviews[$i]->score_7?></span></li>
							<li class="d-flex align-items-center justify-content-between">
								<p>스텝 서비스</p>
								<span class="line"></span>
								<span><?=$reviews[$i]->score_8?></span></li>
						</ul>
					</div>
					<div class="date mt-45">
						<p><?=$reviews[$i]->created?></p>
					</div>
				</article>
			</div>
			
	<?php }?>
		</article>

		<section id='all' class='pl-0 d-flex justify-content-center'>
			<div id='circle' class='d-flex justify-content-center align-items-center'>
				<span>모두보기</span>
			</div>
		</section>
	</section>
	<footer id='main-footer' class='d-flex flex-wrap'>
		<ul>
			<li class="title">ABOUT US</li>
			<li><a href="#">회사 소개</a></li>
			<li><a href="#">이용약관</a></li>
			<li><a href="#">개인 정보 취급 방침</a></li>
		</ul>
		<ul>
			<li class="title">OFFICE</li>
			<li><span>TEL</span>
				<p>1500-1500</p>
			</li>
		</ul>
		<ul>
			<li class="title">CONTACT US</li>
			<li><span>상호</span>
				<p>PLAY SEVEN</p>
			</li>
			<li><span>대표</span>
				<p>홍길동</p>
			</li>
			<li><span>사업자등록번호</span>
				<p>000-00-00000</p>
			</li>
			<li><span>등록판매업신고번호</span>
				<p>2017-서울강서-0000호</p>
			</li>
			<li><span>개인정보관리책임자</span>
				<p>홍길동</p>
			</li>
		</ul>
		<ul>
			<li class="title">NEWS LETTER</li>
			<li class="mb-20"><input type="text" placeholder="E-mail을 입력해주세요"></li>
			<li><strong>골프패스</strong>
				<p>에서 제공하는 유용한 소식</p>
			</li>
		</ul>
		<p class='align-self-end mr-auto ml-auto'>© 2017 <strong>GOLFPASS.</strong> All Rights Reserved.</p>
	</footer>

	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
	<script src="/public/sangmin/dist/bootstrap/bootstrap.bundle.min.js"></script>
	<script src="/public/sangmin/dist/Nwagon/Nwagon.js"></script>
	<script src="/public/sangmin/js/custom.js"></script>
	<script src="/public/sangmin/js/chart.js"></script>
</body>

</html>