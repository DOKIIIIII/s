/**
 * Created by Apple on 15/8/27.
 */
$(document).ready(function(){
    $(window).on("load",function(){

        loadIndexData();

    });
});

function loadIndexData(){
    console.log("-------Hello.World!");


    $.ajax({
        type:"get",
        async: false,
        //url:"http://zsyixy.imwork.net/belan/home/piclist",
        //dataType:"jsonp",
        url: "json/index.json",
        dataType:"json",
        jsonp:"callback",
        jsonpCallback:"success_jsonpCallback",
        success:function(json){
            var dataList = json ;
            $.each(dataList.list,function(index,value){
  
            var cell = $("<div>").addClass("mui-table-view-cell mui-media mui-col-xs-6").appendTo($("#myTableView"));
           
           var imgbox = $("<div>").addClass("imgbox").appendTo(cell);
            	var mya = $("<a>").attr('href','http://baidu.com').appendTo(imgbox);
            	$("<img>").attr("src","./images/"+$(value).attr("url")).appendTo(mya);
            	
            	var imgtext = $("<div>").addClass("imgtext").appendTo(cell);
            	var userId = $("<div>").addClass("userId").appendTo(imgtext);
            	var idfl = $("<div>").addClass("id fl").appendTo(userId);
            	$("<span>"+value.nickname+"</span>").appendTo(idfl);
            	var agefl = $("<div>").addClass("age fl").appendTo(userId);
            	$("<span>"+value.age+"</span>").addClass("sex").appendTo(agefl);
            	var pointfr = $("<div>").addClass("point fr").appendTo(userId);
            	$("<i>"+Math.floor(value.score)+"</i>").appendTo(pointfr);
            	var s = value.score+"0";
            	var str = s.substring(1,s.indexOf(".") + 3);
            	$("<em>"+str+"</em>").appendTo(pointfr);
            	
            	var userInfo = $("<div>").addClass("userInfo").appendTo(cell);
            	var fire = $("<div>").addClass("fire").appendTo(userInfo);
            	$("<img>").attr("src","./images/content/fire.png").appendTo(fire);
            	$("<div>"+value.flowers+"</div>").appendTo(fire);
            		
            	var heart = $("<div>").addClass("heart").appendTo(userInfo);
            	$("<img>").attr("src","./images/content/heart.png").appendTo(heart);
            	$("<div>"+value.persons+"</div>").appendTo(heart);
            	
            	var low = $("<div>").addClass("low").appendTo(userInfo);
            	$("<img>").attr("src","./images/content/low.png").appendTo(low);
            	$("<div>"+value.bb+"</div>").appendTo(low);
                //console.log(index+"--"+value.url);
                //$(".imgtext").html("用户信息："+value.bb+","+value.flowers+","+value.nickname);
                //var myul = $("<ul>").addClass("myul").appendTo($("#ui-block-a"));
                //var myli = $("<li>").addClass("myli").appendTo(myul);
                //
                //var imgbox = $("<li>").addClass("imgbox").appendTo(myli);
                //var mya = $("<a>").addClass("mya").appendTo(imgbox);
                //$("<img>").attr("src","./images/"+$(value).attr("url")).appendTo(mya);



//              var myTableView = $("<a>").attr('href','http://baidu.com').appendTo($("#myTableView"));
//              $("<img>").attr("src","./images/image1.png").appendTo(box);


                //var box = $("<div>").appendTo($("#imgbox"));

                //var a = $("<a>").appendTo(box);
                //console.log("./images/"+$(value).attr("url"));
                //$("<img>").attr("src","./images/image1.png").appendTo(box);

            });

        },
        error:function(){
            alert("请求出错！");
        }
    });


    //$.ajax({
    //    type:"get",
    //    async: false,
    //    url:"http://zsyixy.imwork.net/belan/home/arealist",
    //    dataType:"jsonp",
    //    jsonp:"callback",
    //    jsonpCallback:"success_jsonpCallback",
    //    success:function(list){
    //
    //        console.log("---------success");
    //        console.log(list);
    //
    //    },
    //    error:function(){
    //        alert("请求出错！");
    //    }
    //});


    //$.ajax(
    //    {
    //        type:'get',
    //        url : 'http://zsyixy.imwork.net/belan/home/piclist',
    //        dataType : 'jsonp',
    //        jsonp:"jsoncallback",
    //        success  : function(data) {
    //            alert("用户名："+ data.user +" 密码："+ data.pass);
    //        },
    //        error : function() {
    //            alert('fail');
    //        }
    //    }
    //);


}


function imgLocation(){
    var  box = $(".ui-block-b");
    var boxWidth = box.eq(0).width();
    var num = Math.floor($(window).width()/boxWidth);
    var boxArr = [];
    box.each(function(index,value){
        //console.log(index+"----"+value);
        var boxHeight = box.eq(index).height();
        console.log(boxHeight);
        if(index<num){
            boxArr[index] = boxHeight;
        }else{
            var minboxHeight = Math.min.apply(null,boxArr);
            var minboxIndex = $.inArray(minboxHeight,boxArr);

            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();

        }

    })
}