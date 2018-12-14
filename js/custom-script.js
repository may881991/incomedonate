$(window).load(function() {
	 if(window.location.hash == "#donate") {
				$('.donate-btn').hide();
			}
});
$(document).ready(function() {
	$('.ques .panel').hide();
		$('.donate-btn').on('click',function(){
			$(this).hide();
		});
		
		var getHeight = $(window ).height();
	    $("#home,#about,#donate").height(getHeight - 56);
	    //scrollable for inside container
	    var checkDisable = $("body").hasClass("scrollDisable");
	    var mousehover_off = false;
	    var mousehover_desoff = false;
	    if (checkDisable == false) {	
	    	$('#home').on('mousewheel DOMMouseScroll', function(e){
	    		if (mousehover_off == false) {
			        if(e.originalEvent.wheelDelta /120 > 0) {
			        }
			        else{
			        	$('html, body').scrollTop($('#about').offset().top);
			    		window.location.hash = "#about";
			        }
			    }
		        $("#dyText").on('mouseover mousewheel DOMMouseScroll', function(e) {
		        	$("body").addClass("scrollDisable");
		        	mousehover_off = true;
		            var mouseevent = e.originalEvent;
		            var delta = mouseevent.wheelDelta || -mouseevent.detail;
		            this.scroll += (delta < 0 ? 1 : -1) * 20;
		        }).mouseleave(function(){
			        mousehover_off = false;
		        });
		    });
		    $('#about').on('mousewheel DOMMouseScroll', function(e){
		    	if (mousehover_desoff == false) {
			    	if(e.originalEvent.wheelDelta /120 > 0) {
			            $('html, body').scrollTop($('#home').offset().top);
			    		window.location.hash = "#landing";
			        }
			        else{
			        	$('html, body').scrollTop($('#donate').offset().top);
			    		window.location.hash = "#donate";
			    				$('.donate-btn').hide();
			        }
			    }
		        $(".about-des").on('mouseover mousewheel DOMMouseScroll', function(e) {
		        	$("body").addClass("scrollDisable");
			        mousehover_desoff = true;
		            var mouseevent = e.originalEvent;
		            var delta = mouseevent.wheelDelta || -mouseevent.detail;
		            this.scroll += (delta < 0 ? 1 : -1) * 20;
		        }).mouseleave(function(){
			        mousehover_desoff = false;
		        });
		    });
		     $('#donate').on('mousewheel DOMMouseScroll', function(e){
		        if(e.originalEvent.wheelDelta /120 > 0) {
		        	$('html, body').scrollTop($('#about').offset().top);
		    		window.location.hash = "#about";
			    				$('.donate-btn').show();

		        }
		        else{
		            $('html, body').scrollTop($('#home').offset().top);
		    		window.location.hash = "#landing";
			    				$('.donate-btn').show();

		        }
		    });
	    }else{
	    	$('#home,#abou,#donate').on('mousewheel', function(e){
	    		return false;
	    		e.preventDefault()
	    	})
	    }



	    screenDetect();

	    //Resize
	    $(window).bind("resize", function() {
	        screenDetect();
			var getHeight = $(window ).height();
	     	$("#home,#about,#donate,#thanks").height(getHeight - 56);
	    });

	    function screenDetect() {
	        var documentWidth = $(document).width();
	        if (window.matchMedia('screen and (min-width: 1280px)').matches || documentWidth > 1280) {
	            $(".donate-btn").show();
	            $("#page").attr("class","desktop");
	            $("#home").removeClass("text-center");
	            $(".amount").parent("div").removeClass(" col-xs-offset-1");
	        	$(".textwrapper").removeClass("col-xs-11 col-xs-offset-1");
	        	$(".amountName").html("Amount <br> (in SGD)");
	        }

	        if (window.matchMedia('screen and (min-device-width: 680px) and (max-device-width: 1024px)').matches || (documentWidth < 1280 && documentWidth > 680)) {
	            $(".donate-btn").show();
	            $("#page").attr("class","ipad");
	            if (documentWidth < 1024) {
	            	$("#home").addClass("text-center");
	            }else{
	            	$("#home").removeClass("text-center");
	            }
	            $(".amount").parent("div").removeClass(" col-xs-offset-1");
	        }

	        if (window.matchMedia('screen and (min-device-width: 320px) and (max-device-width: 680px)').matches | documentWidth < 680) {
	            $("#page").attr("class","mobile");
	            // $(".amount").parent("div").addClass(" col-xs-offset-1");
	            $(".amountName").html("Amount (in SGD)");
	        }
	    }


	    //See All Name Button Action and Dynamic Text
	    var firstSp, secondSp;
	    var nameRe = "";
	    var namesArr = ["JANSON CHOO", "KHAIRUL MONDZI", "CHLOE FAIR", "MANAVI SHARMA", "LUKE SOMASUNDRUM", "THOMAS WAGNER", "RONALD BUNAIDI", "ABBAS ZAFAR", "CHARLENE CHUA", "YASHANTI YAP", "ZACH ONG", "KENNETH FOO", "ADELINE SIOW", "JASMINE QUEK", "STEPH GWEE", "DAPHNE NG", "NICOLE LEE", "LESLEY CHELVAN", "WENDI CHONG", "KIM LIM", "GWEN LEE", "PRISCILLA TAN", "ALVIN CHUA", "DARREN TAN", "NICOLE LEE", "LESLEY CHELVAN", "DENIAN YAP", "MANGO CHAN", "MIRIAM SRRHA", "TRACEY AHRAHM", "ALIZA PANDO", "JESELLE CHOE", "MJ DOSELOU", "PAULA BASEMENT", "GIO LEINMEN", "DENEIANL OLIVEL", "SHAKE ALIE", "JANSON CHOO", "KHAIRUL MONDZI", "CHLOE FAIR", "MANAVI SHARMA", "LUKE SOMASUNDRUM", "THOMAS WAGNER", "RONALD BUNAIDI", "ABBAS ZAFAR", "CHARLENE CHUA", "YASHANTI YAP", "ZACH ONG", "KENNETH FOO", "ADELINE SIOW", "JASMINE QUEK", "STEPH GWEE", "DAPHNE NG", "NICOLE LEE", "LESLEY CHELVAN", "WENDI CHONG", "KIM LIM", "GWEN LEE", "PRISCILLA TAN", "ALVIN CHUA", "DARREN TAN", "NICOLE LEE", "LESLEY CHELVAN", "DENIAN YAP", "MANGO CHAN", "MIRIAM SRRHA", "TRACEY AHRAHM", "ALIZA PANDO", "JESELLE CHOE", "MJ DOSELOU", "PAULA BASEMENT", "GIO LEINMEN", "DENEIANL OLIVEL", "SHAKE ALIE"];
	    var newNames = [];
	    for (var i = 0; i < namesArr.length; i++) {
	        var wordlen = namesArr[i];
	        if (wordlen.length > 10) {
	            var wordSplit = wordlen.split(" ");
	            if (wordSplit[0].length > 6) {
	                firstSp = wordSplit[0].slice(0, 6).concat(".");
	                secondSp = wordSplit[1].slice(0, 1).concat(".");
	                newNames.push(firstSp + " " + secondSp)
	            } else if (wordSplit[0].length = 6 && wordSplit[1].length > 3) {
	                secondSp = wordSplit[1].slice(0, 1).concat(".");
	                newNames.push(wordSplit[0] + " " + secondSp);
	            }
	        } else {
	            newNames.push(namesArr[i])
	        }
	        nameRe += "<span>" + namesArr[i].concat(" · ") + "</span>";
	    }
	    $(".dnName").html(newNames.join("|"));
	    $('.dnName').wodry({
	        animation: 'rotateX',
	        delay:300,
	        animationDuration: 600
	    });


	    $(".seeAll").click(function() {
	        $(".main").addClass("adjHeight");
	        $(".seeAll").replaceWith('<span class="search animated fadeInLeft"><input type="text" name="Search" class="searchbox" placeholder="Search"> <i class="fa fa-search animated flash"></i></span><label class="notFound">^ Name not found</label>')
	        $(".dnName").replaceWith("<div class='textwrapper col-md-12 animated fadeInDown'><div class=' dynamicNames'  id='dyText'>" + nameRe + "</div></div>")

	        var sum = 0;
	        var arr = [];
	        var lastwords = "";
	        var divwidth= $(".dynamicNames").width();
	        var childSpan = $(".dynamicNames").children("span");
	        for (var i = 0; i < childSpan.length; i++) {
	        	sum += $(childSpan[i]).width() + 5;
	        	if (sum > divwidth) {
	        		sum = $(childSpan[i]).width();
	        		arr = [childSpan[i]]
	        		lastwords = $(childSpan[i-1]).text();
	        		$(childSpan[i-1]).html(lastwords.replace(" · ", ""))
	        	}else{
	        		arr.push(childSpan[i]);
	        		lastchild = childSpan[childSpan.length-1];
	        		if(lastchild) {
	        			lastwords = $(lastchild).text();
	        			$(lastchild).html(lastwords.replace(" · ", ""))
	        		}
	        	}
	        }

	        var desktopView = $(".desktop").is(":visible");
	        var IpadView = $(".ipad").is(":visible");
	        var mobileView = $(".mobile").is(":visible");
    		if (desktopView == true) {
	        	$(".nameGroup").css("margin", "0");
	        	var currentSize = $(".container h3").css("font-size");
	        	val = currentSize.replace("px","");
	        	$("#home h3").css("font-size" , (parseInt(val) / 16) - 1 + "em" );
    		}else if(IpadView == true){
	        	$(".dynamicNames").css("height", "33vh");
	        	$(".nameGroup").css("margin", "3vh 0 0");
    		}else{
	        	$(".nameGroup").css({"margin":"6vh 0 0","padding":"0"});
	        	$(".textwrapper").addClass("col-xs-11 col-xs-offset-1");
    		}

	        //Search Name function
	        $(".search .fa").on('click', function(e) {
	        	if($(this).hasClass('fa-search')){
	            searchNames(e);
	        	}
	        	else {
	        		$(this).removeClass('fa-times').addClass('fa-search');
	           $('.searchbox').val('');
	           var src_str = $("#dyText").html();
	            src_str = src_str.replace(/\<mark id=\"highlighword\"\>/g, '').replace(/\<\/mark\>/g,'');
	            $("#dyText").html(src_str);
              $(".notFound").css("display", "none")

	        	}
	        });


	        $('.searchbox').focusin(function () {
		        $(this).attr('placeholder', '');
			    });

	        var org_str = $("#dyText").html();
	        $(".searchbox").on('keyup', function(e) {
	            var src_str = $("#dyText").html();
	            if (e.keyCode == 13) {

	                searchNames(e);
	            } else if (e.keyCode == 8 || e.keyCode == 32) {
	                var plaintxt = $("#dyText").html();
	                $("#dyText").html(org_str);
	                $("#dyText").scrollTop(0);
	                $(".notFound").css("display", "none")
	            }
	        });

	        function searchNames(elem) {
	        	// console.log("search");
	        	if($('.search .fa').hasClass('fa-search')) {

	            var src_str = $("#dyText").html();
	            src_str = src_str.replace('<mark id="highlighword">', '').replace("</mark>",'');
	            var term = $(".searchbox").val();
	            $('.search .fa').removeClass('fa-search').addClass('fa-times');
	            if (term != "") {
	                term = term.replace(/(\s+)/, "(<[^>]+>)*$1(<[^>]+>)*");
	                var pattern = new RegExp("(" + term + ")", "gi");

	                if (pattern.test(src_str) == true) {
	                    src_str = src_str.replace(pattern, "<mark id='highlighword'>$1</mark>");
	                    $("#dyText").html(src_str);
	                    var divOffset = $("#highlighword").position();
	                    $("#dyText").scrollTop(divOffset.top);
	                } else {
		                if (mobileView == true || IpadView == true) {
		                    $(".notFound").css("display", "block")
		                }else{
		                    $(".notFound").css("display", "inline-block")
		                }
	                }
	            }
	        	}
	        	else {

	        	}
	        }
	    });

	    function isScrolledIntoView(elem) {
	        var docViewTop = $(window).scrollTop();
	        var docViewBottom = docViewTop + $(window).height();
	        var elemTop = $(elem).offset().top;
	        var elemBottom = elemTop + $(elem).height();
	        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	    }



	    $('.accordion').click(function(){
	    	if($(this).hasClass('active')) {
	        $(this).removeClass("active");
	        $(this).next().slideUp();
	        $(this).children("i").removeClass('fa-angle-up');
	        $(this).children("i").addClass('fa-angle-down');
	    	}
	    	else {
	    		$('.accordion').removeClass('active');
	    		$('.panel').slideUp();
	        $(this).children("i").removeClass('fa-angle-down');
          $(this).children("i").addClass('fa-angle-up');
          $(this).addClass("active");
          $(this).next().slideDown();
	    	}
	    

	    });

	    $("#faqHead").click(function() {
	    	var quesActive = $(".ques").is(":visible");
	    	if (!quesActive) {
		    	var currentHeight = $(window).height();
		    	var quesHeight = $(".ques").height();
		    	// $("#about").height(currentHeight + quesHeight);
	    		$(".ques").slideDown();
		    	$(this).children("i").removeClass('fa-angle-down');
		        $(this).children("i").addClass('fa-angle-up');
		    }else{
		    	$(".ques").slideUp();
		    	// $("#about").height(currentHeight - quesHeight);
		    	$(this).children("i").removeClass('fa-angle-up');
		        $(this).children("i").addClass('fa-angle-down');
		    }

	    })


	    //LinkedIn LoggedIn Demo Data
	    $(".linkedIn-btn").on("click",function() {
	        $(".LinkInBtn").hide();
	        $(".LoggedIn").show();
	        $("form").addClass("loggedin");
	        $(".name").val("Avril Chua");
	        $(".email").val("avrilchua@gmail.com");
	        $(".customAm").val("Custom amount");
	        $('.donateForm.beforeLogin').removeClass('beforeLogin');
	    })


	    $(".customAm").keyup(function() {
	        $(".customRadio").prop("checked", "checked")
	    });
	    //Validation Donate form
	    $(".payPalBtn").click(function() {
	        var nameVal = document.forms["donateForm"]["name"].value;
	        var emailVal = document.forms["donateForm"]["email"].value;
	        var amountVal = document.forms["donateForm"]["amount"].value;
	        var amountVal2 = document.forms["donateForm"]["radio"].value;
	        var atSign = emailVal.indexOf("@");
	        if (atSign > 1 && name != " " && parseFloat(amountVal) >= parseFloat(10)) {
	            window.location = "thank.html";
	        } else {
	            $("form").addClass("loggedin");
	            $(".LinkInBtn").hide();
	            $(".LoggedIn").hide();
	            $(".reqText").hide();
	            $(".feedback").show();
	            if (atSign < 1 && emailVal != "") {
	                $(".email").next(".invalid").show();
	                if (parseFloat(amountVal) < parseFloat(10)) {
	                    $(".amInval").show();
	                    $(".payPalBtn img").css("margin", "1em 0")
	                }
	            } else if (parseFloat(amountVal) < parseFloat(10)) {
	                $(".amInval").show();
	            }
	        }
	    });
	});

$(document).ready(function(){
		// $('#about section.container ').overlayScrollbars({ 
			
		// });
});