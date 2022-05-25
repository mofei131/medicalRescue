<!doctype html>
<html lang="zh-CN">
<head>
	   <title>非急救转运</title>
<meta charset="utf-8">
<meta content="text/html; charset=utf-8" http-equiv="Content-Type">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

<script src="static/js/jweixin-1.4.0.js"></script>
 <script src="static/js/jquery-1.10.1.min.js"></script>
 
 <script src="static/js/date.js"></script>
 <link href="static/css/date.css" rel="stylesheet" type="text/css">
 <link href="static/css/style.css" rel="stylesheet" type="text/css">
<script charset="utf-8" src="https://map.qq.com/api/js?v=2.exp&key=DALBZ-5IYK6-QGWS4-E4TNP-A75I7-NIFFT"></script>
<!--  如果有需要腾讯地图定位服务可以使用 -->
<script src="https://3gimg.qq.com/lightmap/components/geolocation/geolocation.min.js"></script>

	 <style type="text/css">
	::-webkit-input-placeholder { /* WebKit browsers */
	  color: #999;
	  font-size: 14px;
	}
	
	::-moz-placeholder { /* Mozilla Firefox 19+ */
	  color: #999;
	  font-size: 14px;
	}
	
	:-ms-input-placeholder { /* Internet Explorer 10+ */
	  color: #999;
	  font-size: 14px;
	}
	 
	 select{
	  color: #333;
	  font-size: 14px !important;
	 }
	 
	@font-face {
	  font-family: 'iconfont';  /* project id 1801362 */
	  src: url('static/font/font_1801362_enh49fiheq.eot');
	  src: url('static/font/font_1801362_enh49fiheq.eot') format('embedded-opentype'),
	  url('static/font/font_1801362_enh49fiheq.woff2') format('woff2'),
	  url('static/font/font_1801362_enh49fiheq.woff') format('woff'),
	  url('static/font/font_1801362_enh49fiheq.ttf') format('truetype'),
	  url('http://at.alicdn.com/t/font_1801362_enh49fiheq.svg') format('svg');
	}
	.iconfont{
		    font-family:"iconfont" !important;
		   font-style:normal;
		    -webkit-font-smoothing: antialiased;
		    -webkit-text-stroke-width: 0.2px;
		    -moz-osx-font-smoothing: grayscale;
		    color: #527CF5;
		    font-size: 20px;
		    margin: 0 5px;
		}
	
	body{background:#f9f9f9;padding-top:10px;padding-bottom:80px}
	.five-con05 {
	   
	    background-color: #fff;
	    border: 1px solid #EEE;
	    margin: 0 10px;
	    padding: 15px 8px;
	    border-radius: 5px;
	    margin-bottom: 10px;
	    box-shadow: 0 2px 2px #e4e8e8;
	}
	
	.five-item{
		
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		margin-bottom: 10px;
	    align-items: center;
 
	}
	.five-item-b{
		display: flex;
		justify-content: space-between;
		font-size: 16px;
		padding:0 10px;
	    align-items: center;
	    height: 45px;
		
	}
	.five-item-t{
		font-size: 16px;
	}
	.five-item-b-t{
		width: 300px;
		margin: 0 5px;
	}
	.five-con06 {
	   
	    background:#fff;
	    margin: 10px;
	    padding: 15px 10px ;
	    border-radius: 10px;
	    
	     
	} 
	.con_l{
		width: 49%;
		margin-right: 1%;
		
	}
	.con_r{
		width: 50%;
	}
	.con_l, .con_r{
		display: flex;
	    align-items: center;
	}
	select{
		height: 35px !important;
	}
	input[name=name]{
		width: 50px;
	}
	input[name=age]{
		width: 35px;
	}
	.user_info{
		display: flex;
		justify-content: space-around;
		
	}
	.n_input{
	    font-size: 16px;
		margin-right: 2px;
		background: #f3f6fd;
		width: 100%;
		height: 25px;
		border-radius:10px;
		padding:5px  10px;
		border:none;
		appearance:none; -webkit-appearance:none;
	}
	
	 
	 /**是否搬抬***/
	 
 
	.xianshi>span {
		display:inline-block;
		width:44px;
		height:22px;
		background:#ccc;
		border-radius:12px;
		padding:1px;
		box-sizing:border-box;
		position:relative;
		transition:0.2s;
	}
	.xianshi>span>.btn_u {
		display:inline-block;
		width:20px;
		height:20px;
		border-radius:50%;
		background:#fff;
		position:absolute;
		right:0px;
		transition:0.2s;
		transform:translateX(-22px);
	}

	 
	 
	/**预约时间和病情**/
	.yy_date , .bingqing{
		display: flex;
		align-items: center;
		width: 100%;
	}
	.yy_date{
		flex: 1;
	}
	
	.bingqing{
		flex: 0.8;
	}
	
	/**转运类型**/
	
	.project_box{
		display: flex;
		justify-content: space-between;
		padding: 10px 0;
		
	    flex-wrap: wrap;
	}
	.project_item{
	    width: 42%;
	    border: 1px solid #eee;
	    border-radius: 5px;
	    margin-bottom: 5px;
	    height: 45px;
	    align-items: center;
	    display: flex;
	    padding: 10px;
	    font-size: 16px;
	    color:#527cf5;
	}
	
	.p_active{
		background: #527cf5;
		color: #fff;
	}
	
	.p_name{
		 display: flex;
	    flex-direction: column;
	    text-align: center;
	}
	
	/**选择地址**/
	
	#city2_address,#city1_address{
		display: flex;
	    width: 100%;
	    flex-direction: column;
	    position: relative;
	}
	.chufa_box{
		margin-bottom: 10px;
	}
	.dingwei{display:flex;margin-bottom:5px}
	
	.adtitle{ height:30px;display:flex;justify-content: space-between;}
	
	.city1_address_cont ,.city2_address_cont{ 
		border: 1px solid #eee;
	    border-radius: 5px;
	    height: 115px;
	    position: absolute;
	    top: 35px;
	    background: #fff;
		z-index: 100;
		overflow: scroll;
		width: 98%;
		left: 1%;
		padding-bottom: 20px;
	}
	.address_item{
		margin: 0 8px;
	    height: 28px;
	    line-height: 28px;
	    border-bottom: 1px solid #eee;
	    color: #333;
	        display: flex;
		
	}
	.address_item_mh{
		color:#ccc;
		margin-left: 5px;
		
	}
	.beizhu{
		margin: 10px 0;
	}
	.fee{
		font-size: 18px;
	}
	</style>
 

</head>

<body>
	
<script src="static/js/jweixin-1.3.2.js"></script>
<script type="text/javascript">
	window.sysinfo = window.sysinfo || {"uniacid":16,"acid":"16","siteroot":"http:\/\/wk.321v.cc\/","siteurl":"http:\/\/wk.321v.cc\/app\/index.php?i=16&c=entry&eid=410","attachurl":"http:\/\/wk321vcc.oss-cn-shenzhen.aliyuncs.com\/","cookie":{"pre":"2901_"},"MODULE_URL":"http:\/\/wk.321v.cc\/addons\/yiooo_zhuanyun\/"} || {};
	
	// jssdk config 对象
	jssdkconfig = null || {};
	
	// 是否启用调试
	jssdkconfig.debug = false;
	
	jssdkconfig.jsApiList = [
		'checkJsApi',
		'onMenuShareTimeline',
		'onMenuShareAppMessage',
		'onMenuShareQQ',
		'onMenuShareWeibo',
		'hideMenuItems',
		'showMenuItems',
		'hideAllNonBaseMenuItem',
		'showAllNonBaseMenuItem',
		'translateVoice',
		'startRecord',
		'stopRecord',
		'onRecordEnd',
		'playVoice',
		'pauseVoice',
		'stopVoice',
		'uploadVoice',
		'downloadVoice',
		'chooseImage',
		'previewImage',
		'uploadImage',
		'downloadImage',
		'getNetworkType',
		'openLocation',
		'getLocation',
		'hideOptionMenu',
		'showOptionMenu',
		'closeWindow',
		'scanQRCode',
		'chooseWXPay',
		'openProductSpecificView',
		'addCard',
		'chooseCard',
		'openCard'
	];
	
	wx.config(jssdkconfig);
	
</script>      <!--<div class="ttitle">非急救转运预约</div>-->
            <!--<form class="form-horizontal" enctype="multipart/form-data" id="formorder" method="post" action="./index.php?i=16&c=entry&op=post&do=orderv2&m=yiooo_zhuanyun" onsubmit="">-->
 
			<div class="user_info five-con05">
				<div class="con_l">
					<i class="iconfont">&#xe61c;</i><input class="n_input" type="text" placeholder="联系人" name="name" value="">  <input class="n_input" type="number" placeholder="年龄" name="age" value="">
					</div>
				 
				  <div class="con_r"><i class="iconfont">&#xe60a;</i> <input class="n_input" type="text" placeholder="手机号" name="mobile" value=""></div>
				
			</div>	
	
			<div class="five-con05" style="padding:15px 10px">
			
				<div class="chufa_box">
				<span class="adtitle"><div><i class="iconfont" style="font-size:16px;margin-right:2px">&#xe623;</i>出发地</div>
					 <!--<span style="margin-left:10px;color:#aaa;margin-right:10px" onclick="getLocation()" class="zidong">点我自动定位</span> -->
				</span>	
					 <div class="dingwei" id="city1">
				        <select id='sheng' class="n_input" name="cfprovince" onchange="change(this,1,'city1')">
				            
										<option value="370000">选择省</option>
				            				        </select>
				        <select id='shi' class="n_input" name="cfcity" onchange="change(this,2,'city1')">
				            
										<option value="371300">选择市</option>
				        </select>
				        <select id='qu' class="n_input" name="cfarea">
				            
										<option value="371321">选择县</option>
				        </select>
				    </div>
				<div id="city1_address"> 
					<div style="display:flex">
					<input class="n_input" id="city1_input" type="text" placeholder="请填写出发详细地址" name="city1_address" value="">
					</div>
					<div class="city1_address_cont" style="display:none">
					</div>	
				
				</div>
				
				
				
				</div>
				
				<div class="daoda_box">
				<span class="adtitle" style="margin-top:15px"><div><i class="iconfont" style="font-size:16px;margin-right:2px;">&#xe621;</i>目的地</div></span>	
				<div class="dingwei" id="city2">
				        <select id='sheng' class="n_input" name="ddprovince" onchange="change(this,1,'city2')">
				            <option value="370000">山东</option>
				            				        </select>
				        <select id='shi' class="n_input" name="ddcity" onchange="change(this,2,'city2')">
				            <option value="371300">临沂市</option>
				        </select>
				        <select id='qu' class="n_input" name="ddarea">
				            <option value="371321">沂南县</option>
				        </select>
				    </div>
				<div id="city2_address"> 
					<div style="display:flex">
					<input class="n_input" type="text" placeholder="请填写出发详细地址" name="city2_address" value="">
					</div>
					<div class="city2_address_cont" style="display:none">
					</div>	
					<div id="yuji"></div>
				</div>
				</div>
			</div>	
		 
        	 
 
        	<div class="five-con05">
        		
        		<div class="five-item">
	        		<div class="yy_date">
					<i class="iconfont">&#xe613;</i><input id="endTime" class="kbtn n_input"  placeholder="用车时间">
	        		</div>	
	        		<div id="datePlugin"></div>
	        		<div class="bingqing"><i class="iconfont">&#xe64b;</i>
	        		    <select id='bingqing' class="n_input" placeholder="病情" name="bingqing">
				           <option data-sname="" disabled="" selected=""> 病情</option>
				            				            <option data-sname="脑病后遗症" value="脑病后遗症">脑病后遗症</option>
				            				            <option data-sname="心脏系统疾病" value="心脏系统疾病">心脏系统疾病</option>
				            				            <option data-sname="普通呼吸疾病" value="普通呼吸疾病">普通呼吸疾病</option>
				            				            <option data-sname="心肺功能衰竭" value="心肺功能衰竭">心肺功能衰竭</option>
				            				            <option data-sname="肿瘤血液疾病" value="肿瘤血液疾病">肿瘤血液疾病</option>
				            				            <option data-sname="多发外伤" value="多发外伤">多发外伤</option>
				            				            <option data-sname="普通骨科" value="普通骨科">普通骨科</option>
				            				            <option data-sname="普外科" value="普外科">普外科</option>
				            				            <option data-sname="内分泌系统疾病" value="内分泌系统疾病">内分泌系统疾病</option>
				            				            <option data-sname="妇产科" value="妇产科">妇产科</option>
				            				            <option data-sname="新生儿科" value="新生儿科">新生儿科</option>
				            				            <option data-sname="神经外科" value="神经外科">神经外科</option>
				            				            <option data-sname="其它" value="其它">其它</option>
				            				        </select>
 
	        		</div>	
        		</div>
        		
        	     <div class="project_box">
        	             	    	<div class="project_item">
        	    		<div id="pro_7" class="p_name" data-pid="1" data-qbjl="5" data-qbjg="200.00" data-ccjg="15.00">
        	    		<!--<img width="50" src="http://wk321vcc.oss-cn-shenzhen.aliyuncs.com/images/16/2020/05/XL8P3pZxPpk3Ft3PB48P8Q8B4D8q3m.jpg">	-->
        	    		<span style="font-size:16px;font-weight:800">   　  　  普通护送</span>
        	    		<span style="font-size:14px">卧式助行服务</span>
        	    		</div>
        	    	</div>
        	             	    	<div class="project_item">
        	    		<div id="pro_9" class="p_name" data-pid="2" data-qbjl="5" data-qbjg="400.00" data-ccjg="18.00">
        	    		<!--<img width="50" src="">	-->
        	    		<span style="font-size:16px;font-weight:800">          护理护送</span>
        	    		<span style="font-size:14px">     助行+护理服务</span>
        	    		</div>
        	    	</div>
        	             	    	<!-- <div class="project_item">
        	    		<div id="pro_16" class="p_name" data-pid="16" data-qbjl="5" data-qbjg="600.00" data-ccjg="19.00">
        	    		<span style="font-size:16px;font-weight:800"> 高级护送</span>
        	    		<span style="font-size:14px">  助行+护理服务+医疗监护</span>
        	    		</div>
        	    	</div> -->
        	             	    	<div class="project_item">
        	    		<div id="pro_15" class="p_name" data-pid="3" data-qbjl="5" data-qbjg="1300.00" data-ccjg="20.00">
        	    		<!--<img width="50" src="">	-->
        	    		<span style="font-size:16px;font-weight:800">高级护送</span>
        	    		<span style="font-size:14px">助行+高级护理服务</span>
        	    		</div>
        	    	</div>
								<div class="project_item">
									<div id="pro_12" class="p_name" data-pid="4" data-qbjl="10" data-qbjg="0.00" data-ccjg="7.00">
									<span style="font-size:16px;font-weight:800">特困人员减免护送</span>
									<span style="font-size:14px">三无、贫困、低保市区内优惠，长途成本价</span>
									</div>
								</div>
        	                     </div>
             
                
                <div class="five-item-b">
                	
                <div class="five-item-t">是否需要搬抬</div>
                <div class="switch xianshi">  
               
			        <span class="btn_onoff" id="bangtai" data-bangtaifee="30"><u class="btn_u"></u></span>
			    
                </div>
								
                </div>
                <div id="bantaibox" class="five-item-b" style="justify-content: flex-end; display:none">
                	
                   <div class="con_l" style="width:100%">
					<span class="five-item-b-t">搬抬人数</span><input class="n_input" id="pnum" type="number" placeholder="人数" name="renshu" value="">  
					
					
					<span class="five-item-b-t">搬抬楼层</span><input class="n_input" id="lnum" type="number" placeholder="楼层" name="louceng" value="">
					</div>
                	
                </div>	
                <div class="jsfont">所有过桥过路费（包括但不限于高速费）用户承担，长途需预收费用根据实际核算多退少补。</div>
                 <div class="five-item-b">
            	    <div class="five-item-t">预计费用</div>	
                	<div data-fee=""> <i class="iconfont fee">￥0.00</i></div>
                </div>	 
                  
                  
                  
                <div id="bantaibox" class="five-item-b" style="height:100px">
                <textarea rows="3" class="n_input beizhu" style="height:80px" placeholder="留言备注" name="beizhu" value=""></textarea>
				
                </div>
 
                <div class="fleximg">
									<img class="imgshow" src="static/image/show.png" >
									<img class="imghide" src="static/image/hide.png" >
									<div>请阅读并勾选<a href="notice.html" style="color: #527cf5;">乘车须知</a></div>
								</div>
            </div>
            <div class="five-con02">
            	<input type="hidden" name="fee" value="">
            
                <input type="hidden" name="token" value="W0Y8">
                <input class="five-text04 submit" style="background:#ffba45;height:45px;border-radius:50px;  background-image: linear-gradient(#fcf9f0, #cab893);" name="submit" type="submit" value="提交">
            </div>
<div class="bot">
	<a href="#">
	<div class="indexx">
		<img src="./static/image/index.png" alt="">
		<div>首页</div>
	</div>
	</a>
	<a href="about.html">
	<div class="aboutt">
		<img src="./static/image/about2.png" >
		<div>关于</div>
	</div>
	</a>
</div>
<style>
.fleximg{
	display: flex;
	align-items: center;
	margin-left: 15px;
	margin-top: 10px;
}
.imgshow,.imghide{
	width: 25px;
	height: 25px;
}
.imgshow{
	display: none;
}
.aboutt div{
	    text-align: center;
}
.indexx div{
	color: #1296db;
	    text-align: center;
}
.bot img{
	width: 30px;
	    height: 30px;
}
.bot{
	    position: fixed;
	    bottom: 0;
	    left: 0;
	    width: 100%;
	    background-color: #fff;
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: space-around;
}
</style>
 <script type="text/javascript">
 $(document).ready(function(){
 	//判断是否之前走过授权
 	var urlStr = window.location.href;
 	function GetRequest(urlStr) {
 		if (typeof urlStr == "undefined") {
 			var url = decodeURI(location.search); //获取url中"?"符后的字符串
 		} else {
 			var url = "?" + urlStr.split("?")[1];
 		}
 		var theRequest = new Object();
 		if (url.indexOf("?") != -1) {
 			var str = url.substr(1);
 			strs = str.split("&");
 			for (var i = 0; i < strs.length; i++) {
 				theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
 			}
 		}
 		return theRequest;
 	}
 	var parms_1 = GetRequest();
//  	var type = parms_1['type'];
//  	if (type){
//  		window.localStorage.setItem('type', type);
//  	}
 	var oror = parms_1['code'];
 	console.log(oror)
 	if (oror){
 		$.ajax('http://amb.boyaokj.cn/api/wechat/login', {
 			data: {
 				code: oror
 			},
 			dataType: 'json', //服务器返回json格式数据
 			type: 'post', //HTTP请求类型
 			success: function(data) {
				console.log(JSON.stringify(data))
 				window.localStorage.setItem('user_id', data.data.user_id);
 			},
 			error: function(xhr, type, errorThrown) {
 				//alert(123)
 			}
 		});
 	}else {
 		window.location.href='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxdd11dd9e2d33126d&redirect_uri=http://amb.boyaokj.cn/amb/index.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect ';
 	}
 })
 $(function(){
	 $.getJSON("regions.json", function(data) {
	     //data 代表读取到的json中的数据
	 		let indexx = data.findIndex(item => item.code == "370000")
			let indexx2 = data[indexx].childs.findIndex(item => item .code == 371300)
			console.log(indexx2)
	 		for(let i in data[indexx].childs){
	 		// 	$("#city1 #shi").append("<option value="+data[indexx].childs[i].code+">"+data[indexx].childs[i].name+"</option>");
	 			$("#city2 #shi").append("<option value="+data[indexx].childs[i].code+">"+data[indexx].childs[i].name+"</option>")
	 		}
			for(let y in data[indexx].childs[indexx2].childs){
				// $("#city1 #qu").append("<option value="+data[indexx].childs[indexx2].childs[y].code+">"+data[indexx].childs[indexx2].childs[y].name+"</option>");
				$("#city2 #qu").append("<option value="+data[indexx].childs[indexx2].childs[y].code+">"+data[indexx].childs[indexx2].childs[y].name+"</option>");
			}
	 });
	  $.ajax({
        type:'get',
        url:'https://apis.map.qq.com/ws/location/v1/ip',
        data:{
            key:key, //腾讯key（我的测试key）
            output:'jsonp',
        },
        dataType: 'jsonp',
        success:function (res){
            console.log('经纬度')
            console.log(res.result.location.lat)
            // alert(res.result.location.lat)
            cflat = res.result.location.lat;
            cflng = res.result.location.lng;
        	$.ajax({
            type : 'get',
            url : 'https://apis.map.qq.com/ws/geocoder/v1/',
            dataType:'jsonp',
            data : {
                key:key,//开发密钥
                location:res.result.location.lat+","+res.result.location.lng,//位置坐标
                get_poi:"1",//是否返回周边POI列表：1.返回；0不返回(默认)
                coord_type:"1",//输入的locations的坐标类型,1 GPS坐标
                parameter:{"scene_type":"tohome","poi_num":20},//附加控制功能
                output:"jsonp"
                },                 
            success : function(res, textStatus) {   
                // console.log('可以定位4')
                // alert('可以定位4')
                console.log(res);
                console.log(res.result.address)
                $('#city1_input').val(res.result.address)
                $("#city1 #sheng").find("option:selected").html(res.result.address_component.province);
                $("#city1 #shi").find("option:selected").html(res.result.address_component.city);
                $("#city1 #qu").find("option:selected").html(res.result.address_component.district);
                $.getJSON("regions.json", function(data) {
    	 		let indexx = data.findIndex(item => item.name == res.result.address_component.province)
    			let indexx2 = data[indexx].childs.findIndex(item => item .name == res.result.address_component.city)
    	 		for(let i in data[indexx].childs){
    	 			$("#city1 #shi").append("<option value="+data[indexx].childs[i].code+">"+data[indexx].childs[i].name+"</option>");
    	 		}
    			for(let y in data[indexx].childs[indexx2].childs){
    				$("#city1 #qu").append("<option value="+data[indexx].childs[indexx2].childs[y].code+">"+data[indexx].childs[indexx2].childs[y].name+"</option>");
    				$("#city2 #qu").append("<option value="+data[indexx].childs[indexx2].childs[y].code+">"+data[indexx].childs[indexx2].childs[y].name+"</option>");
    			}
    	 });
            },
        });
        }
    })
 })
 var zhong = 0
 var is_carry = 0
 $('.imgshow').click(function(){
	 $(this).hide();
	 $('.imghide').show()
	 zhong = 0
 })
 $('.imghide').click(function(){
 	 $(this).hide();
 	 $('.imgshow').show()
	 zhong = 1
 })
 $("#pnum").on("input", function () {
        // console.log();
        if($('#lnum').val()){
            var name = $("input[name='name']").val();
		 var age = $("input[name='age']").val();
		 var mobile = $("input[name='mobile']").val();
		 var cfprovince = $("#city1 #sheng").find("option:selected").val();
		 var cfcity = $("#city1 #shi").find("option:selected").val();
		 var cfarea = $("#city1 #qu").find("option:selected").val();
		 var city1_address = $("input[name='city1_address']").val();
		 
		 var ddprovince = $("#city2 #sheng").find("option:selected").val();
		 var ddcity = $("#city2 #shi").find("option:selected").val();
		 var ddarea = $("#city2 #qu").find("option:selected").val();
		 var city2_address = $("input[name='city2_address']").val();
		 
		 var  bingqing =  $("#bingqing").find("option:selected").val();
		 
		 var leixing = $(".p_active .p_name").data("pid");
		 var yydate = $("#endTime").val();
		 var renshu = $("input[name='renshu']").val();
		 var louceng = $("input[name='louceng']").val();
		 var julis = juli;
		 
		 var fee = $("input[name='fee']").val();
		 var beizhu = $(".beizhu").val();
		 var people_num = $('#pnum').val()
		 var floor_num = $('#lnum').val()
		 
		 var mobilereg1 = /^1[3|5|6|7|8|9][0-9]{9}$/;
		 if(name==""){
		 	alert("请填写联系人");
		 	return false;
		 	
		 }
		 if(!mobilereg1.test(mobile)){
		 	alert("请填写正确的手机号码");
		 	return false;
		 	
		 }
		 
		 //cfprovince==""|| cfcity =="" || cfarea =="" || 
		 if(city1_address ==""){
		 	alert("请填写出发详细地址");
		 	return false;
		 	
		 }
		 //ddprovince==""|| ddcity =="" || ddarea =="" || 
		 if(city2_address ==""){
		 	alert("请填写到达详细地址");
		 	return false;
		 	
		 }
		  if($("#endTime").val() ==""){
		 	alert("请选择预约时间");
		 	return false;
		 	
		 }
		 if(julis == 0){
		 	alert("请重新填写目的地详细地址");
		 	return false;
		 }
		 if(leixing ==""){
        	alert("请选择护送类型");
        	return false;
        	
        }
		 $.ajax({
					 type : 'GET',
		       url : 'http://amb.boyaokj.cn/api/index/returnPrice',
		       dataType: 'json',
					 cors: true,
		       data:{
		           km:julis,
				 use_car_time:yydate,
				 escort_type:$(".p_active .p_name").data("pid"),
				 is_carry:1,
					people_num:people_num,
					floor_num:floor_num
		           },  
		       success : function(res) {   
		        // console.log(res);
						$('.fee').html("￥"+res.data);
		       },
		       error : function() {
		           alert("系统错误，请联系管理员！")
		       }
		   });
        }

    });
$("#lnum").on("input", function () {
        if($('#pnum').val()){
            var name = $("input[name='name']").val();
		 var age = $("input[name='age']").val();
		 var mobile = $("input[name='mobile']").val();
		 var cfprovince = $("#city1 #sheng").find("option:selected").val();
		 var cfcity = $("#city1 #shi").find("option:selected").val();
		 var cfarea = $("#city1 #qu").find("option:selected").val();
		 var city1_address = $("input[name='city1_address']").val();
		 
		 var ddprovince = $("#city2 #sheng").find("option:selected").val();
		 var ddcity = $("#city2 #shi").find("option:selected").val();
		 var ddarea = $("#city2 #qu").find("option:selected").val();
		 var city2_address = $("input[name='city2_address']").val();
		 
		 var  bingqing =  $("#bingqing").find("option:selected").val();
		 
		 var leixing = $(".p_active .p_name").data("pid");
		 var yydate = $("#endTime").val();
		 var renshu = $("input[name='renshu']").val();
		 var louceng = $("input[name='louceng']").val();
		 var julis = juli;
		 
		 var fee = $("input[name='fee']").val();
		 var beizhu = $(".beizhu").val();
		 var people_num = $('#pnum').val()
		 var floor_num = $('#lnum').val()
		 
		 var mobilereg1 = /^1[3|5|6|7|8|9][0-9]{9}$/;
		 if(name==""){
		 	alert("请填写联系人");
		 	return false;
		 	
		 }
		 if(!mobilereg1.test(mobile)){
		 	alert("请填写正确的手机号码");
		 	return false;
		 	
		 }
		 
		 //cfprovince==""|| cfcity =="" || cfarea =="" || 
		 if(city1_address ==""){
		 	alert("请填写出发详细地址");
		 	return false;
		 	
		 }
		 //ddprovince==""|| ddcity =="" || ddarea =="" || 
		 if(city2_address ==""){
		 	alert("请填写到达详细地址");
		 	return false;
		 	
		 }
		  if($("#endTime").val() ==""){
		 	alert("请选择预约时间");
		 	return false;
		 	
		 }
		 if(julis == 0){
		 	alert("请重新填写目的地详细地址");
		 	return false;
		 }
		 if(leixing ==""){
        	alert("请选择护送类型");
        	return false;
        	
        }
		 $.ajax({
					 type : 'GET',
		       url : 'http://amb.boyaokj.cn/api/index/returnPrice',
		       dataType: 'json',
					 cors: true,
		       data:{
		           km:julis,
					 use_car_time:yydate,
					 escort_type:$(".p_active .p_name").data("pid"),
					is_carry:1,
					people_num:people_num,
					floor_num:floor_num
		           },  
		       success : function(res) {   
		        // console.log(res);
						$('.fee').html("￥"+res.data);
		       },
		       error : function() {
		           alert("系统错误，请联系管理员！")
		       }
		   });
        }

    });
	 var cflat = 35.554952;  //出发的经纬度
	 var cflng = 118.457518;  //出发的经纬度
	 
	 var ddlat = "";  //到达的经纬度
	 var ddlng = "";  //到达的经纬度
	 var key = "DALBZ-5IYK6-QGWS4-E4TNP-A75I7-NIFFT";
	 var juli = 0;  //两地距离
	 
	 var onoff = 2;   //2不需要 1需要搬抬
	 var index = -1
	 
		/**获取用户位置***/
		wx.ready(function(){
			
// 			alert("微信准备就绪");
		getLocation(); 
		});  
  wx.error(function(res){
    console.log('err', res)
  });
	window.onload = function (){
		$.getJSON("regions.json", function(data) {
		    //data 代表读取到的json中的数据
				for(let i in data){
					$("#city1 #sheng").append("<option value="+data[i].code+">"+data[i].name+"</option>");
					$("#city2 #sheng").append("<option value="+data[i].code+">"+data[i].name+"</option>");
					 // $(cid+" #sheng").html("<option value=0>选择区</option>");
					// console.log(data[i].name)
				}
		});
	 }
 
  /**地址1选择器 this,等级,#ID 出发地区/到达地区**/
    function change(obj,type,id){
			let value = $(obj).find("option:selected").attr("value")
			let index2 = ''
			if(id == 'city1'){
				if(type == 1){
					$("#city1 #shi").html("<option value=0>选择市</option>");
					$.getJSON("regions.json", function(data) {
					    //data 代表读取到的json中的数据
							index = data.findIndex(item => item.code == value)
							for(let i in data[index].childs){
								$("#city1 #shi").append("<option value="+data[index].childs[i].code+">"+data[index].childs[i].name+"</option>");
							}
					});
				}else if(type == 2){
					$("#city1 #qu").html("<option value=0>选择区</option>");
					$.getJSON("regions.json", function(data) {
					    //data 代表读取到的json中的数据
							if(index != -1){
								index2 = data[index].childs.findIndex(item => item.code == $(obj).find("option:selected").attr("value"))
							}else{
								index = 14
								index2 =  data[index].childs.findIndex(item => item.code == $(obj).find("option:selected").attr("value"))
							}
							// console.log(index)
							console.log(data[index].childs[index2].childs)
							for(let i in data[index].childs[index2].childs){
								$("#city1 #qu").append("<option value="+data[index].childs[index2].childs[i].code+">"+data[index].childs[index2].childs[i].name+"</option>");
							}
					});
				}
			}else if(id == 'city2'){
				if(type == 1){
					$("#city2 #shi").html("<option value=0>选择市</option>");
					$.getJSON("regions.json", function(data) {
					    //data 代表读取到的json中的数据
							index = data.findIndex(item => item.code == value)
							for(let i in data[index].childs){
								$("#city2 #shi").append("<option value="+data[index].childs[i].code+">"+data[index].childs[i].name+"</option>");
							}
					});
				}else if(type == 2){
					$("#city2 #qu").html("<option value=0>选择区</option>");
					$.getJSON("regions.json", function(data) {
					    //data 代表读取到的json中的数据
				// 			index2 = data[index].childs.findIndex(item => item.code == $(obj).find("option:selected").attr("value"))
							if(index != -1){
								index2 = data[index].childs.findIndex(item => item.code == $(obj).find("option:selected").attr("value"))
							}else{
							    index = 14
								index2 =  data[index].childs.findIndex(item => item.code == $(obj).find("option:selected").attr("value"))
							}
							// console.log(index)
							// console.log(data[index].childs[index2].childs)
							for(let i in data[index].childs[index2].childs){
								$("#city2 #qu").append("<option value="+data[index].childs[index2].childs[i].code+">"+data[index].childs[index2].childs[i].name+"</option>");
							}
					});
				}
			}
	 
	
	 /**定位地址**/
	 function getLocation(){
        //  alert("获取坐标位置");
// 	 	console.log('可以定位1')
// 	 	wx.getLocation({
// 		   type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
// 		   success: function (res) {
// 		   	  alert(res);
// 			   console.log(res);
// 		       var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
// 		       var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
// 		    console.log('可以定位')
		      	 	
// 	 	$('.zidong').html("定位中...");
// 		           cflat = latitude;
// 		           cflng = longitude;
		       
// 	    	    $.ajax({
// 			        type : 'get',
// 			        url : 'https://apis.map.qq.com/ws/geocoder/v1/',
// 			        dataType:'jsonp',
// 			        data : {
// 			            key:key,//开发密钥
// 			            location:latitude+","+longitude,//位置坐标
// 			            get_poi:"1",//是否返回周边POI列表：1.返回；0不返回(默认)
// 			            coord_type:"1",//输入的locations的坐标类型,1 GPS坐标
// 			            parameter:{"scene_type":"tohome","poi_num":20},//附加控制功能
// 			            output:"jsonp"
// 			            },                 
// 			        success : function(data, textStatus) {   
// 			            console.log('可以定位4')
// 			         console.log(data);
// 			            if(data.status == 0){
// 			            	// alert("地址转换成功");
// 			            	console.log("地址转换成功");
// 			            $('.zidong').html("定位成功");	
// 			                var address = data.result.address_component;
// 			                var province = address.province.replace('省','');
	
			               
// 			                $("#city1 #sheng").find("option[value='"+province+"']").attr("selected",true);
// 			                $("#city1 #shi").html("<option selected   value="+address.city+" >"+address.city+"</option>");
// 			                $("#city1 #qu").html("<option selected   value="+address.district+" >"+address.district+"</option>");
// 			                $("input[name='city1_address']").val(address.street_number);
			                
// 			                 //getProject(address.city);//根据出发城市获取 项目价格
// 			            }else {
// 			                alert("系统错误，请联系管理员！")
// 			            }
// 			        },
// 			        // error : function() {
			        	 
// 			        //     alert("系统错误，请联系管理员！")
// 			        // }
// 			    });
	
// 		   },
// 			        error : function() {
			        	 
// 			            alert("系统错误，请联系管理员！")
// 			        }
// 		});
        
	 }
	 
	 /**选中地址**/
	 
	 function zxaddress(obj,type){
	 	var lat = $(obj).data("lat");
	 	var lng = $(obj).data("lng");
	 	var address  = $(obj).data("title");
	 	
	 	if(type ==1){
	 		
	     cflat = lat;
		 cflng = lng;
		 $("input[name='city1_address']").val(address);
		 $('.city1_address_cont').hide();
		 
	//	 $("#city1_address").append("坐标lat="+cflat+"坐标lng="+cflng);
	 
	 	}else if(type ==2){
	 		
	 	 ddlat = lat;
		 ddlng = lng;
		 
		 $("input[name='city2_address']").val(address);
		 $('.city2_address_cont').hide();
		 
 	//  $("#city2_address").append("坐标lat="+cflat+"坐标lng="+cflng);
	 
	 		
	 	}
  
		if(cflat&&cflng&&ddlat&&ddlng){
			//计算下距离
	    distance(cflat,cflng,ddlat,ddlng);
		}
 
	 }
	 
	  /**计算距离**/
	function distance(cflat,cflng,ddlat,ddlng){
	 
			$.ajax({
			        type : 'get',
			        url : 'https://apis.map.qq.com/ws/distance/v1/',
			        dataType:'jsonp',
			        data : {
			        	mode:'driving',
			            key:key,//开发密钥
			            from:cflat+","+cflng,
			            to:ddlat+","+ddlng,
			            output:"jsonp"
			            },                 
			        success : function(res, textStatus) {
 
			         console.log(res);
			         if(res.status ==0){
			          juli = Math.ceil(res.result.elements[0].distance/1000);
			      $("#yuji").html("预计距离"+ juli+"公里");
			          fee();//计算价格
			          
			         }
			         
			        },
			        error : function() {
			            alert("定位失败")
			        }
			    });
		
	}
	
	  /**计算价格**/
	function fee(){
		$(".project_item").removeClass('p_active').end().addClass('p_active');
		$('.fee').html("￥0.00");
	 
	}

  
  

$(function(){ //$----
	/**是否搬抬***/
	

	$(".btn_onoff").on("click", function() {
	    console.log(onoff)
	    if (onoff === 1) {
	        var name = $("input[name='name']").val();
		 var age = $("input[name='age']").val();
		 var mobile = $("input[name='mobile']").val();
		 var cfprovince = $("#city1 #sheng").find("option:selected").val();
		 var cfcity = $("#city1 #shi").find("option:selected").val();
		 var cfarea = $("#city1 #qu").find("option:selected").val();
		 var city1_address = $("input[name='city1_address']").val();
		 
		 var ddprovince = $("#city2 #sheng").find("option:selected").val();
		 var ddcity = $("#city2 #shi").find("option:selected").val();
		 var ddarea = $("#city2 #qu").find("option:selected").val();
		 var city2_address = $("input[name='city2_address']").val();
		 
		 var  bingqing =  $("#bingqing").find("option:selected").val();
		 
		 var leixing = $(".p_active .p_name").data("pid");
		 var yydate = $("#endTime").val();
		 var renshu = $("input[name='renshu']").val();
		 var louceng = $("input[name='louceng']").val();
		 var julis = juli;
		 
		 var fee = $("input[name='fee']").val();
		 var beizhu = $(".beizhu").val();
		 var people_num = $('#pnum').val()
		 var floor_num = $('#lnum').val()
		 
		 var mobilereg1 = /^1[3|5|6|7|8|9][0-9]{9}$/;
		 if(name==""){
		 	alert("请填写联系人");
		 	return false;
		 	
		 }
		 if(!mobilereg1.test(mobile)){
		 	alert("请填写正确的手机号码");
		 	return false;
		 	
		 }
		 
		 //cfprovince==""|| cfcity =="" || cfarea =="" || 
		 if(city1_address ==""){
		 	alert("请填写出发详细地址");
		 	return false;
		 	
		 }
		 //ddprovince==""|| ddcity =="" || ddarea =="" || 
		 if(city2_address ==""){
		 	alert("请填写到达详细地址");
		 	return false;
		 	
		 }
		  if($("#endTime").val() ==""){
		 	alert("请选择预约时间");
		 	return false;
		 	
		 }
		 if(julis == 0){
		 	alert("请重新填写目的地详细地址");
		 	return false;
		 }
		 if(leixing ==""){
        	alert("请选择护送类型");
        	return false;
        	
        }
	        $(".btn_onoff .btn_u").css("transform", "translateX(-22px)");
	        $(".btn_onoff").css("background", "#ccc");
	        onoff = 2;
	        $("#bantaibox").fadeOut(100);
// 		 $(this).siblings().removeClass('p_active').end().addClass('p_active');
		 $.ajax({
					 type : 'GET',
		       url : 'http://amb.boyaokj.cn/api/index/returnPrice',
		       dataType: 'json',
					 cors: true,
		       data:{
		           km:julis,
							 use_car_time:yydate,
							 escort_type:$(".p_active .p_name").data("pid"),
							 is_carry:onoff
		           },  
		       success : function(res) {   
		        // console.log(res);
						$('.fee').html("￥"+res.data);
		       },
		       error : function() {
		           alert("系统错误，请联系管理员！")
		       }
		   });
	    } else if (onoff === 2) {
	    	//开启
	    	var name = $("input[name='name']").val();
		 var age = $("input[name='age']").val();
		 var mobile = $("input[name='mobile']").val();
		 var cfprovince = $("#city1 #sheng").find("option:selected").val();
		 var cfcity = $("#city1 #shi").find("option:selected").val();
		 var cfarea = $("#city1 #qu").find("option:selected").val();
		 var city1_address = $("input[name='city1_address']").val();
		 
		 var ddprovince = $("#city2 #sheng").find("option:selected").val();
		 var ddcity = $("#city2 #shi").find("option:selected").val();
		 var ddarea = $("#city2 #qu").find("option:selected").val();
		 var city2_address = $("input[name='city2_address']").val();
		 
		 var  bingqing =  $("#bingqing").find("option:selected").val();
		 
		 var leixing = $(".p_active .p_name").data("pid");
		 var yydate = $("#endTime").val();
		 var renshu = $("input[name='renshu']").val();
		 var louceng = $("input[name='louceng']").val();
		 var julis = juli;
		 
		 var fee = $("input[name='fee']").val();
		 var beizhu = $(".beizhu").val();
		 var people_num = $('#pnum').val()
		 var floor_num = $('#lnum').val()
		 
		 var mobilereg1 = /^1[3|5|6|7|8|9][0-9]{9}$/;
		 if(name==""){
		 	alert("请填写联系人");
		 	return false;
		 	
		 }
		 if(!mobilereg1.test(mobile)){
		 	alert("请填写正确的手机号码");
		 	return false;
		 	
		 }
		 
		 //cfprovince==""|| cfcity =="" || cfarea =="" || 
		 if(city1_address ==""){
		 	alert("请填写出发详细地址");
		 	return false;
		 	
		 }
		 //ddprovince==""|| ddcity =="" || ddarea =="" || 
		 if(city2_address ==""){
		 	alert("请填写到达详细地址");
		 	return false;
		 	
		 }
		  if($("#endTime").val() ==""){
		 	alert("请选择预约时间");
		 	return false;
		 	
		 }
		 if(julis == 0){
		 	alert("请重新填写目的地详细地址");
		 	return false;
		 }
		 if(leixing ==""){
        	alert("请选择护送类型");
        	return false;
        	
        }
	        $(".btn_onoff .btn_u").css("transform", "translateX(-2px)");
	        $(".btn_onoff").css("background", "#527cf5");
	        onoff = 1;
	        $("#bantaibox").fadeIn(100);
	        
		 $.ajax({
					 type : 'GET',
		       url : 'http://amb.boyaokj.cn/api/index/returnPrice',
		       dataType: 'json',
					 cors: true,
		       data:{
		           km:julis,
					 use_car_time:yydate,
					 escort_type:$(".p_active .p_name").data("pid"),
					is_carry:1,
					people_num:people_num,
					floor_num:floor_num
		           },  
		       success : function(res) {   
		        // console.log(res);
						$('.fee').html("￥"+res.data);
		       },
		       error : function() {
		           alert("系统错误，请联系管理员！")
		       }
		   });
	    }
	    
	   // fee();
	
	})

			 
	/**时间选择器***/
		$('#beginTime').date();
		$('#endTime').date({theme:"datetime"});
		$('#endTime').click(function(){
			$(".project_item").removeClass('p_active').end().addClass('p_active');
			$('.fee').html("￥0.00");
		})
	 


	/**模糊搜索地址1**/
 
	$("input[name='city1_address']").on('input propertychange',function(){
		 	 var city1_address = $(this).val();
		 	 var cfcity = $("#city1 #shi").find("option:selected").val();
		 	 
		 		cfcity = cfcity.replace('市','');
		 		
		 		console.log("模糊搜索开始+++"+cfcity);
		 	 
		 	 if(city1_address ==""){
		 	 	$('.city1_address_cont').hide();
		 	 	
		 	 }else{
		 	 
		 	$.ajax({
		        type : 'get',
		        url : 'https://apis.map.qq.com/ws/place/v1/suggestion/',
		        dataType:'jsonp',
		        data : {
		            key:key,//开发密钥
		            keyword:city1_address,
		            region:cfcity,
		            region_fix:1,
		            policy:1,
		            output:"jsonp"
		            },                 
		        success : function(res, textStatus) {   
		         console.log(res);
		            if(res.status == 0 && res.data.length >0){
		            	var html ="";
		            	$.each(res.data, function(name, value) {
		            		html += "<div class='address_item' onclick='zxaddress(this,1)' data-title='"+value.title+"' data-lng='"+value.location.lng+"' data-lat='"+value.location.lat+"'  >" +value.title+"<div class='address_item_mh'>"+value.city+"-"+value.district+"</div></div>";
							 });
			  		 	$('.city1_address_cont').html(html);
		            	$('.city1_address_cont').fadeIn(100);
		                 
		            }else {
		                
		            }
		        },
		        error : function() {
		            alert("系统错误，请联系管理员！")
		        }
		    });
			}
 	    
		 });
	
	
	/**模糊搜索地址2**/	 
	$("input[name='city2_address']").on('input propertychange',function(){
		 	 var city2_address = $(this).val();
		 	 var cfcity = $("#city2 #shi").find("option:selected").val();
		 	 
		 	 if(city2_address ==""){
		 	 	$('.city2_address_cont').hide();
		 	 	
		 	 }else{
		 	 
		 	$.ajax({
		        type : 'get',
		        url : 'https://apis.map.qq.com/ws/place/v1/suggestion/',
		        dataType:'jsonp',
		        data : {
		            key:key,//开发密钥
		            keyword:city2_address,
		            region:cfcity,
		            region_fix:1,
		            policy:1,
		            output:"jsonp"
		            },                 
		        success : function(res, textStatus) {   
		         console.log(res);
		            if(res.status == 0 && res.data.length >0){
		            	var html ="";
		            	$.each(res.data, function(name, value) {
		            		html += "<div class='address_item' onclick='zxaddress(this,2)' data-title='"+value.title+"' data-lng='"+value.location.lng+"' data-lat='"+value.location.lat+"'  >" +value.title+"<div class='address_item_mh'>"+value.city+"-"+value.district+"</div></div>";
							 });
			  		 	$('.city2_address_cont').html(html);
		            	$('.city2_address_cont').fadeIn(100);
		                 
		            }else {
		                
		            }
		        },
		        error : function() {
		            alert("系统错误，请联系管理员！")
		        }
		    });
			}
 	    
		 });
 
	/**楼层修改**/

// 	$("input[name='renshu'],input[name='louceng']").on('input propertychange',function(){

// 			fee();
			
// 		});

   
	/**选择项目类型**/

	$(".project_item").click(function(){
		 
 
		 // fee();
		 var name = $("input[name='name']").val();
		 var age = $("input[name='age']").val();
		 var mobile = $("input[name='mobile']").val();
		 var cfprovince = $("#city1 #sheng").find("option:selected").val();
		 var cfcity = $("#city1 #shi").find("option:selected").val();
		 var cfarea = $("#city1 #qu").find("option:selected").val();
		 var city1_address = $("input[name='city1_address']").val();
		 
		 var ddprovince = $("#city2 #sheng").find("option:selected").val();
		 var ddcity = $("#city2 #shi").find("option:selected").val();
		 var ddarea = $("#city2 #qu").find("option:selected").val();
		 var city2_address = $("input[name='city2_address']").val();
		 
		 var  bingqing =  $("#bingqing").find("option:selected").val();
		 
		 var leixing = $(".p_active .p_name").data("pid");
		 var yydate = $("#endTime").val();
		 var renshu = $("input[name='renshu']").val();
		 var louceng = $("input[name='louceng']").val();
		 var julis = juli;
		 
		 var fee = $("input[name='fee']").val();
		 var beizhu = $(".beizhu").val();
		 
		 var mobilereg1 = /^1[3|5|6|7|8|9][0-9]{9}$/;
		 if(name==""){
		 	alert("请填写联系人");
		 	return false;
		 	
		 }
		 if(!mobilereg1.test(mobile)){
		 	alert("请填写正确的手机号码");
		 	return false;
		 	
		 }
		 
		 //cfprovince==""|| cfcity =="" || cfarea =="" || 
		 if(city1_address ==""){
		 	alert("请填写出发详细地址");
		 	return false;
		 	
		 }
		 //ddprovince==""|| ddcity =="" || ddarea =="" || 
		 if(city2_address ==""){
		 	alert("请填写到达详细地址");
		 	return false;
		 	
		 }
		  if($("#endTime").val() ==""){
		 	alert("请选择预约时间");
		 	return false;
		 	
		 }
		 if(julis == 0){
		 	alert("请重新填写目的地详细地址");
		 	return false;
		 }
		 $(this).siblings().removeClass('p_active').end().addClass('p_active');
		 $.ajax({
					 type : 'GET',
		       url : 'http://amb.boyaokj.cn/api/index/returnPrice',
		       dataType: 'json',
					 cors: true,
		       data:{
		           km:julis,
							 use_car_time:yydate,
							 escort_type:$(".p_active .p_name").data("pid"),
							 is_carry:onoff
		           },  
		       success : function(res) {   
		        // console.log(res);
						$('.fee').html("￥"+res.data);
		       },
		       error : function() {
		           alert("系统错误，请联系管理员！")
		       }
		   });
	});
		
	/**开始提交订单**/
	
    $(".submit").click(function(){
			console.log(zhong)
         console.log($("#city1 #sheng").find("option:selected").html())
         
        var name = $("input[name='name']").val();
        var age = Number($("input[name='age']").val());
        var mobile = $("input[name='mobile']").val();
        var cfprovince = $("#city1 #sheng").find("option:selected").html();
        var cfcity = $("#city1 #shi").find("option:selected").html();
        var cfarea = $("#city1 #qu").find("option:selected").html();
        var city1_address = $("input[name='city1_address']").val();
        
        var ddprovince = $("#city2 #sheng").find("option:selected").html();
        var ddcity = $("#city2 #shi").find("option:selected").html();
        var ddarea = $("#city2 #qu").find("option:selected").html();
        var city2_address = $("input[name='city2_address']").val();
        
        var  bingqing =  $("#bingqing").find("option:selected").val();
        
        var leixing = $(".p_active .p_name").data("pid");
        var yydate = $("#endTime").val();
        var renshu = $("input[name='renshu']").val();
        var louceng = $("input[name='louceng']").val();
        var julis = juli;
        
        var fee = $("input[name='fee']").val();
        var beizhu = $(".beizhu").val();
        
        var mobilereg1 = /^1[3|5|6|7|8|9][0-9]{9}$/;
        
        var user_id = window.localStorage.getItem('user_id')
             
             
        //||age==""
        if(name==""){
        	alert("请填写联系人");
        	return false;
        	
        }
				if(age==""){
					alert("请填写年龄");
					return false;
					
				}
        if(!mobilereg1.test(mobile)){
        	alert("请填写正确的手机号码");
        	return false;
        	
        }
        
        //cfprovince==""|| cfcity =="" || cfarea =="" || 
        if(city1_address ==""){
        	alert("请填写出发详细地址");
        	return false;
        	
        }
        //ddprovince==""|| ddcity =="" || ddarea =="" || 
        if(city2_address ==""){
        	alert("请填写到达详细地址");
        	return false;
        	
        }
        //  if(yydate ==""){
        // 	alert("请填写预约时间");
        // 	return false;
        	
        // }
        if(leixing ==""){
        	alert("请选择护送类型");
        	return false;
        	
        }
				if($('.fee').html() == '￥0.00'){
					alert("请选择护送类型")
					return false;
				}
				if(zhong == 0){
					alert("请勾选乘车须知")
					return false;
				}
        // if(onoff ==1 && (renshu =="" || louceng =="")){
        // 	alert("请填写搬抬信息");
        // 	return false;
        	
        // }
        
        
        var data = {contacts:name,age:age,illness:bingqing,mobile:mobile,send_province:cfprovince,send_city:cfcity,send_area:cfarea,send_address:city1_address,arrive_province:ddprovince,arrive_city:ddcity,arrive_area:ddarea,arrive_address:city2_address,km:julis,use_car_time:yydate,remarks:beizhu,escort_type:leixing,user_id:user_id};
 
    	// var URL = "	./index.php?i=16&c=entry&op=post&do=orderv2&m=yiooo_zhuanyun";
    	
    	
    	$.ajax({
                url:'http://amb.boyaokj.cn/api/index/CreateOrder',
                data:data,
                type:"get",
                dataType:"json",
                success:function(data){
                    if (data.code == 200) {
                        function onBridgeReady() {
                            WeixinJSBridge.invoke(
                                'getBrandWCPayRequest', {
                                    "appId": data.data.appId, //公众号名称，由商户传入
                                    "timeStamp": data.data.timeStamp, //时间戳，自1970年以来的秒数
                                    "nonceStr": data.data.nonceStr, //随机串
                                    "package": data.data.package,
                                    "signType": "MD5", //微信签名方式：
                                    "paySign": data.data.paySign //微信签名
                                },
                                function(res) {
                                    if (res.err_msg == "get_brand_wcpay_request:ok") {
										$.toast('支付成功！');
										location.reload()
                                    } else {
                                       $.toast('支付失败！');
                                    }
                                });
                        }
                        if (typeof WeixinJSBridge == "undefined") {
                            if (document.addEventListener) {
                                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                            } else if (document.attachEvent) {
                                document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                            }
                        } else {
                            onBridgeReady();
                        }
                    }
                },
                error:function(a){
                	console.log(a);
                    
                }
            });
    	
    	
    });


 
	
	
}); //$end---
//支付
function onBridgeReady(appId,timestamp,noncestr,package,signType,paySign){	
	WeixinJSBridge.invoke(
		      'getBrandWCPayRequest', {
		         "appId":appId,     //公众号ID，由商户传入     
		         "timeStamp":timestamp,         //时间戳，自1970年以来的秒数     
		         "nonceStr":noncestr, //随机串     
		         "package":package,     
		         "signType":signType,         //微信签名方式：     
		         "paySign":paySign //微信签名 
		      },
		      function(res){
		      if(res.err_msg == "get_brand_wcpay_request:ok" ){
		      // 使用以上方式判断前端返回,微信团队郑重提示：
		            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
		            //跳转支付成功展示页面
		    	  window.location.href = path +"/page/goPaymentSuccess";
		      }else if(res.err_msg == "get_brand_wcpay_request:fail" ){
		    	  console.log("支付失败")
		      }else{
		    	  console.log("取消支付")
		    	  //修改上面生成的预支付订单状态
		    	  cancelPayMoney();
		      }
		   }); 
}

$('#formorder').submit(function(){

    if($('input[name="order[order_username]"]').val() == ''){
        alert('未填写预约人姓名')
        return false;
    }
    if($('input[name="order[order_userphone]"]').val() == ''){
        alert('未填写预约人电话')
        return false;
    }

    return true;
});
})
}
</script>
</body>
</html>
