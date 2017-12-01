<!DOCTYPE html>
<html class="no-js" lang='en'>
<head>
    <title>Sample bootstrap-switch</title>

    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<style>
		body {
			padding-top: 2em;
		}
	</style>
</head>
<body>

<input id="j-group-value" class="form-control" type="number" value="1" min="1" max="10" />

</style>
<script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.12.4.min.js" ></script>
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" ></script>
<script src="<?=domain_url("/public/lib/bootstrap-number-input.js")?>"></script>
<script>
// Remember set you events before call bootstrapSwitch or they will fire after bootstrapSwitch's events
$("[name='checkbox2']").change(function() {
	if(!confirm('Do you wanna cancel me!')) {
		this.checked = true;
	}
});

$('#j-group-value').bootstrapNumber();
$('#colorful').bootstrapNumber({
	upClass: 'success',
	downClass: 'danger'
});
</script>

<script>
    $("#j-group-add-btn").click(function(){
        $val =$("#j-group-value");
        console.log($val.val());
    });

</script>
<style>
    .input-group
    {
        width:50%;
        /* display:inline-block; */
    }
    .btn-default
    {
        border-radius: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    }
  
</style>


</body>
</html>
