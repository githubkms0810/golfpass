<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Test extends Public_Controller
// class Sample extends Public_Controller
{

    function __construct()
    {
        parent::__construct();
        
        $daily = array('일','월','화','수','목','금','토');


        echo "현재:".date("Y-m-d H:i:s W");
        echo "<br>";
        echo "현재:".date("Y-m-d H:i:s",time());
        echo "<br>";
        echo "-1 월:".date("Y-m-d H:i:s",strtotime ("-6 months"));
        echo "<br>";
        echo "+1 일:".date("Y-m-d H:i:s",strtotime ("-31 days"));
        echo "<br>";
        echo "+1 년".date("Y-m-d H:i:s",strtotime ("+1 years"));
        echo "<br>";
        echo "+24 시간".date("Y-m-d H:i:s",strtotime ("+24 hours"));
        echo "<br>";
        echo "+ 분: ".date("Y-m-d H:i:s",strtotime ("+{360*1} minutes"));
        echo "<br>";

        echo "<br>";

        echo "<br>";


        // $startDate = date_create(date('Y-m-d')); // 오늘 날짜입니다.
        $startDate = date_create('2016-02-01'); // 오늘 날짜입니다.
        $targetDate = date_create('2017-02-01'); // 타겟 날짜를 지정합니다.
        $interval = date_diff($startDate, $targetDate,true);
         
        echo $interval->days;
        echo "<br>";
        
        var_dump($interval);
        // for($i=0; $i<$interval->days ; $i++ ){
        //     echo "+{$i} 일:".date("Y-m-d H:i:s",strtotime ("+{$i} days"));
        //     echo "<br>";
        // }

        echo "+{$interval->days} 일:".date("Y-m-d H:i:s",strtotime ("+{$interval->days} days"));

        $startDate = '2017-11-31'; // 오늘 날짜입니다.
        $targetDate = '2017-12-14'; // 타겟 날짜를 지정합니다.
        // $startDate = '2016-02-01'; // 오늘 날짜입니다.
        // $targetDate = '2017-02-01'; // 타겟 날짜를 지정합니다.
        $interval = date_diff(date_create($startDate), date_create($targetDate),true);
        echo "<br>";
        echo "<br>";
        echo "차이: ".$interval->days;
        echo "<br>";
        echo "<br>";
        echo "워킹데이: ".$num_working_days=$this->number_of_working_days($startDate, $targetDate);
        echo "<br>";
        echo "주말: ".$num_weekend_days=$this->number_of_weekend_days($startDate, $targetDate);
        echo "<br>";
        echo "합: ".($num_weekend_days + $num_working_days);

        echo "<br>";
        echo "<br>";
        $obj_num_days =$this->number_of_days($startDate, $targetDate);
        echo "워킹데이: ".$num_working_days=$obj_num_days->num_workingdays;
        echo "<br>";
        echo "주말: ".$num_weekend_days=$obj_num_days->num_weekenddays;
        echo "<br>";
        echo "공휴일: ".$num_holidays=$obj_num_days->num_holidays;
        echo "<br>";
        echo "합: ".$obj_num_days->num_days;
        // var_dump($num_working_days);
        // var_dump($num_weekend_days);
        

        
    }
    
    function number_of_days($from, $to) {
        $workingDays = [1, 2, 3, 4, 5]; # date format = N (1 = Monday, ...)
        $weekendDays = [6,7]; # date format = N (1 = Monday, ...)
        $holidayDays = ['*-12-03']; # variable and fixed holidays
        // $holidayDays = ['*-12-25', '*-01-01', '2013-12-23']; # variable and fixed holidays
    
        $from = new DateTime($from);
        $to = new DateTime($to);
        $to->modify('+1 day');
        $interval = new DateInterval('P1D');
        $periods = new DatePeriod($from, $interval, $to);
    
         $num_workingdays = 0;
        $num_holidays =0;
        $num_weekenddays=0;
        foreach ($periods as $period) {
            //날짜 카운팅(공휴일, 주말 제외)
            if (in_array($period->format('N'), $workingDays) && !in_array($period->format('*-m-d'), $holidayDays) && !in_array($period->format('Y-m-d'), $holidayDays))
            {
               $num_workingdays++;
            }
            //주말카운팅 (공휴일제외)
            if (in_array($period->format('N'), $weekendDays) && !in_array($period->format('*-m-d'), $holidayDays) && !in_array($period->format('Y-m-d'), $holidayDays))
            {
               $num_weekenddays++;
            }
            //공휴일 카운팅
            if (in_array($period->format('*-m-d'), $holidayDays)||in_array($period->format('*-m-d'), $holidayDays))
            {
                $num_holidays++;
            }
        }
        //전체일수
        $num_days = $num_workingdays + $num_holidays +$num_weekenddays;
        return (object)array('num_holidays'=>$num_holidays,'num_workingdays'=>$num_workingdays,'num_weekenddays'=>$num_weekenddays,'num_days'=>$num_days);
    }
    function number_of_working_days($from, $to) {
        $workingDays = [1, 2, 3, 4, 5]; # date format = N (1 = Monday, ...)
        // $holidayDays = ['*-12-25', '*-01-01', '2013-12-23']; # variable and fixed holidays
        $holidayDays = ['*-12-03']; # variable and fixed holidays
        // $holidayDays = []; # variable and fixed holidays
    
        $from = new DateTime($from);
        $to = new DateTime($to);
        $to->modify('+1 day');
        $interval = new DateInterval('P1D');
        $periods = new DatePeriod($from, $interval, $to);
    
        $days = 0;
        foreach ($periods as $period) {
            if (!in_array($period->format('N'), $workingDays)) continue;
            if (in_array($period->format('Y-m-d'), $holidayDays)) continue;
            if (in_array($period->format('*-m-d'), $holidayDays)) continue;
            $days++;
        }
        return $days;
    }
    function number_of_weekend_days($from, $to) {
        $workingDays = [6,7]; # date format = N (1 = Monday, ...)
        $holidayDays = ['*-12-03']; # variable and fixed holidays
    
        // $holidayDays = []; # variable and fixed holidays
    
        $from = new DateTime($from);
        $to = new DateTime($to);
        $to->modify('+1 day');
        $interval = new DateInterval('P1D');
        $periods = new DatePeriod($from, $interval, $to);
    
        $days = 0;
        foreach ($periods as $period) {
            if (!in_array($period->format('N'), $workingDays)) continue;
            if (in_array($period->format('Y-m-d'), $holidayDays)) continue;
            if (in_array($period->format('*-m-d'), $holidayDays)) continue;
            $days++;
        }
        return $days;
    }

    function index()
    {

    }

}