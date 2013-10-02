$(function(){

	/*----------LP画面ログイン用吹き出し処理----------*/
	$("#login-btn").click(function(){
		if($(".box").css("display") == "none"){
			$(".box").css("display", "block");
		}
		else{
			$(".box").hide();
		}
	})

	$(".cancel-login-btn").click(function(){
		$(".box").hide();
		$("#login-layer").css({"display": "none"});
	})

	$("#login-btn").click(function(){
		if($("#login-layer").css("display") === "none"){
			setTimeout(function(){
				$("#login-layer").css({"display": "block"});
			}, 0);
		}
		else{
			$("#login-layer").css({"display": "none"});
		}
	})

	$("#login-layer").click(function(){
		$("#login-layer").css({"display": "none"});
		$(".box").hide();
	});


	/*----------top画面左上オプション用吹き出し処理----------*/
	$("#setting").click(function(){
		var marginWidth = $("#content").css("margin-right");


		if($("ul.pcOption").css("display") == "none"){
			$("ul.pcOption").show();
			$("ul.pcOption").css("right", marginWidth);
			$(this).removeClass("before-setting");
			$(this).addClass("after-setting");
		}
		else{
			$("ul.pcOption").hide();
			$(this).addClass("before-setting");
			$(this).removeClass("after-setting");
		}
	})

	$("#setting").click(function(){
		if($("#top-layer").css("display") === "none"){
			setTimeout(function(){
				$("#top-layer").css({"display": "block"});
			}, 0);
		}
		else{
			$("#top-layer").css({"display": "none"});
		}
	})

	$("#top-layer").click(function(){
		$("#top-layer").css({"display": "none"});
		$("ul.pcOption").hide();
		$("#setting").addClass("before-setting");
		$("#setting").removeClass("after-setting");
	})



	/*----------モバイル用mobilePost投稿処理----------*/
	$("#mobilePost").click(function(){
		$("#PostAddForm").submit();
	})



	/*----------top画面カメラボタン画像切り替え処理----------*/
	$(".photo-upload").hover(
		function(){
			$("#cameraBtn").removeClass("cameraBtnBefore");
			$("#cameraBtn").addClass("cameraBtnAfter");
		},
		function(){
			$("#cameraBtn").removeClass("cameraBtnAfter");
			$("#cameraBtn").addClass("cameraBtnBefore");
		}
	);


	/*----------プロフィール編集画面アップロード画像表示処理----------*/
	var userPhoto = document.getElementById("UserPhoto");
	var imgZone = document.getElementById("profile-img-zone");

	function isImage(file){
		return file.type.match("image.*") ? true : false;
	}

	function loadDataURL(file, callback){
		var reader = new FileReader();

		reader.onload = function(){
			callback(this.result);
		}

		reader.readAsDataURL(file);
	}

	function appendDataURLImage(elem, dataURL){
		var div = document.createElement("div");
		var img = document.createElement("img");
		img.setAttribute("src", dataURL);

		div.appendChild(img);
		elem.appendChild(div);
	}

	if(userPhoto !== null){
		userPhoto.onchange = function(){
			imgZone.innerHTML = "";

			var file = this.files[0]; //一枚だけに限定

			if(isImage(file)){
				loadDataURL(file, function(dataURL){
					appendDataURLImage(imgZone, dataURL);
				});
			}
		}
	}



	/*----------投稿画像サムネイル表示処理----------*/
	var sumbnail = document.getElementById("sumbnail");
	var postFiles = document.getElementById("PostFiles");

	if(postFiles !== null){
		postFiles.onchange = function(){
			sumbnail.style.display = "block";
			sumbnail.innerHTML = "";

			var file = this.files[0];

			if(isImage(file)){
				loadDataURL(file, function(dataURL){
					appendDataURLImage(sumbnail, dataURL);
				});
			}
		}
	}



	/*----------モバイル用メニュー表示処理----------*/
	var open = false;

	$("#mobile-menuBtn").click(toggleMenu);

	function toggleMenu(e){
		if(open){
			e.preventDefault();
			$("#wrapper").animate({"left": 0}, 200);
			$(document.body).css("overflow", "visible");
			$(document.body).css("overflow-x", "hidden");
			$(document.body).css("overflow-y", "auto;");

			$("#mobile-menu-layer").animate({"opacity": 0}, 0, function(){
				$("#mobile-menu-layer").css({"display": "none"})
			});

			open = false;
		}
		else{
			e.preventDefault();
			$("#wrapper").animat
			$("#wrapper").animate({"left": 275}, 200);
			$(document.body).css("overflow", "hidden");
			open = true;

			$("#mobile-menu-layer").animate({"opacity": 0.7}, 200, function(){
				$("#mobile-menu-layer").css({"display": "block"})
			});
		}
	};

	$("#mobile-menu-layer").click(function(e){
		if(open){
			e.preventDefault();
			//$("#wrapper").animat
			$("#wrapper").animate({"left": 0}, 0);
			$(document.body).css("overflow", "visible");
			$("#mobile-menu-layer").css({"display": "none"});

			open = false;
		}
	})



	/*----------モバイル用ドロップダウン処理----------*/

	var listOpen = false;

	$("#now-class").click(function(){
		if(listOpen){
			$("#show-list").removeClass();
			$("#show-list").addClass("show-list-down");

			$("ul.dropList").hide();
			$("#layer").css({"display": "none"});
			$("body").css("overflow", "auto");

			$("#mobile-menuBtn").click(toggleMenu);

			listOpen = false;
		}
		else{
			$("#show-list").removeClass();
			$("#show-list").addClass("show-list-up");

			var nowHeight = $("#wrapper").height();
			var ulHeight = $("ul.dropList").height();
			$("ul.dropList").slideDown(200);
			$("body").css("overflow", "hidden");
			$("#layer").css({"display": "block"});
			$("#layer").css({"height": nowHeight});

			$("#mobile-menuBtn").unbind();

			listOpen = true;
		}
	})

	$("#layer").click(function(){
		$("#show-list").removeClass();
		$("#show-list").addClass("show-list-down");

		$("ul.dropList").hide();
		$("#layer").css({"display": "none"});
		$("body").css("overflow", "auto");

		$("#mobile-menuBtn").click(toggleMenu);

		listOpen = false;
	});



	/*----------モバイル用クラス編集画面遷移----------*/

	$("#mobile-class-create").click(function(){
		$(this).removeClass();
		$(this).addClass("selected");

		$("#mobile-class-join").removeClass();
		$("#mobile-class-join").addClass("unselected");

		$("#create-window").css("display", "block");
		$("#join-window").css("display", "none");
	})

	$("#mobile-class-join").click(function(){
		$(this).removeClass();
		$(this).addClass("selected");

		$("#mobile-class-create").removeClass();
		$("#mobile-class-create").addClass("unselected");

		$("#join-window").css("display", "block");
		$("#create-window").css("display", "none");
	})



	/*----------コメントボタン生成処理----------*/
	$(".post-reply-inner textarea")
		.focus(showCommentBtn)
		.blur(hideCommentBtn)
		.keyup(switchCommentBtn)



	/*----------メイン投稿部分のボタン表示処理----------*/
	$(".input-area textarea").keyup(function(){
		if($(this).val() != ""){
			$(".post-button").css("opacity", 1);
			$(".post-button").attr("disabled", false);
		}
		else{
			$(".post-button").css("opacity", 0.5);
			$(".post-button").attr("disabled", true);
		}
	})



	/*----------members_info画面、クラス編集オプション表示処理----------*/
	$(".userOption span").click(function(){
		var currentWidth = $(window).width();
		var id = $(this).attr("data-id");

		if(currentWidth < 768){
			$(".mobile-user-option").css("display", "block");
			$(".option-field").animate({"left": "-300px"}, 300);
			$("#field" + id).animate({"left": 0}, 300, function(){
				$("#mobile_" + id).css("display", "none");
			});
		}
		else{
			$(".user-option").css("display", "inline-block");
			$("#" + id).css("display", "none");
			$(".option-field").animate({"top": "-241px"}, 300);
			$("#field" + id).animate({"top": 0}, 300);
		}
	})

	$(".both").click(function(){
		var currentWidth = $(window).width();
		var id = $(this).attr("data-id");

		if(currentWidth < 768){
			$("#field" + id).animate({"left": "-300px"}, 300);
			$(".mobile-user-option").css("display", "block");
		}
		else{
			$(".user-option").css("display", "inline-block");
			$("#field" + id).animate({"top": "-241px"}, 300);
		}
	})

	$(".change-span").click(function(){
		var id = $(this).attr("data-id");

		$("#change-window-" + id).css("display", "block");
		$("#optionLayer").css("display", "block");
		$("body").css("overflow", "hidden");
	})

	$(".remove-span").click(function(){
		var id = $(this).attr("data-id");

		$("#remove-window-" + id).css("display", "block");
		$("#optionLayer").css("display", "block");
		$("body").css("overflow", "hidden");
	})

	$("#optionLayer").click(function(){
		$("#optionLayer").css("display", "none");
		$(".info-modal").css("display", "none");
		$("body").css("overflow", "auto");
	})

	$(".cancelBtn-info").click(function(){
		$("#optionLayer").css("display", "none");
		$(".info-modal").css("display", "none");
		$("body").css("overflow", "auto");
	})



	/*----------インストラクション削除処理----------*/
	$(".close-inst").click(function(){
		var id = $(this).attr("id");

		$("#second-instraction").css("display", "none");
		$("#mobile-second-instraction").css("display", "none");

		if(id == "pc"){
			$(".input-area").css("display", "block");
		}
	})



	/*----------インストラクション生成時に投稿フォームを削除----------*/
	if($("#second-instraction").length == 1){
		$(".input-area").css("display", "none");
		/*
		$("#second-instraction　.close-inst").click(function(){
			$(".input-area").css("display", "block");
		})
		*/
	}



	/*----------クラス作成時の文字数カウント処理----------*/
	$("#GroupGroupname").keyup(function(){
		var count = $(this).val().length;

		if(count > 20){
			$("#error-zone").html("＊２０文字以内にして下さい。");
			$(".createClassBtn").attr("disabled", true);
			$(".createClassBtn").css("opacity", 0.5);
		}
		else{
			$("#error-zone").html("");
			$(".createClassBtn").attr("disabled", false);
			$(".createClassBtn").css("opacity", 1);
		}
	})



	/*----------可変フォント処理----------*/

	fontChange();

	$(window).resize(fontChange);

	function fontChange(){
		var wpx = $(window).width();

		//モバイルなら、処理はしない
		if(wpx < 768){
			$("#copy h1").css("font-size", 20 + "px");
			$("#copy p").css("font-size", 14 + "px");
			$("#interface p").css("font-size", 12 + "px");
			$(".desc-box h2").css("font-size", 16 + "px");
			return;
		}

		if(wpx > 960){
			$("#copy h1").css("font-size", 30 + "px");
			$("#copy p").css("font-size", 19 + "px");
			$("#interface p").css("font-size", 16 + "px");
			$(".desc-box h2").css("font-size", 22 + "px");
		}
		else if(wpx > 768){
			$("#copy h1").css("font-size", 26 + "px");
			$("#copy p").css("font-size", 16 + "px");
			$("#interface p").css("font-size", 16 + "px");
			$(".desc-box h2").css("font-size", 20 + "px");
		}
	}


	/*----------写真モーダル処理----------*/
	$(".post-image").click(function(){
		var clickID = $(this).attr("data-id");

		var w_width = $(window).width();

		if(w_width >= 960){
			$("body").css("overflow", "hidden");
			$("#image_" + clickID).css("width", 960 + "px");
			$(".modal-image-zone").css("width", 710 + "px"); //コメントが入ると710
			$(".modal-image-zone img").css("max-width", 709 + "px"); //コメントが入ると709
			var width = parseInt($("#image_" + clickID).css("width"));
			var margin_left = width / 2 * -1;

			$("#image_" + clickID).css("margin-left", margin_left);
			$("#image_" + clickID).css("display", "block");
			$("#image-layer").css("display", "block");
		}
		else if(w_width > 600){
			$("body").css("overflow", "hidden");
			$("#image_" + clickID).css("width", 768 + "px");
			$(".modal-image-zone").css("width", 518 + "px"); //コメントが入ると518
			$(".modal-image-zone img").css("max-width", 517 + "px"); //コメントが入ると517
			var width = parseInt($("#image_" + clickID).css("width"));
			var margin_left = width / 2 * -1;

			$("#image_" + clickID).css("margin-left", margin_left);
			$("#image_" + clickID).css("display", "block");
			$("#image-layer").css("display", "block");
		}
	})

	$("#image-layer").click(function(){
		$(".image-modal").css("display", "none");
		$(this).css("display", "none");
		$("body").css("overflow", "auto");
	})

	$(window).resize(function(){
		var w_width = $(window).width();

		if(w_width >= 960){
			$(".image-modal").css("width", 960 + "px");
			$(".modal-image-zone").css("width", 710 + "px");
			$(".modal-image-zone img").css("max-width", 709 + "px");
			var margin_left = 960 / 2 * -1;
			$(".image-modal").css("margin-left", margin_left);
		}
		else if(w_width > 600){
			$(".image-modal").css("width", 768 + "px");
			$(".modal-image-zone").css("width", 518 + "px");
			$(".modal-image-zone img").css("max-width", 517 + "px");
			var margin_left = 768 / 2 * -1;
			$(".image-modal").css("margin-left", margin_left);
		}
	})


	/*----------投稿・コメント削除確認用モーダル----------*/
	$(".delete-post").click(function(){
		var clickID = $(this).attr("data-id");

		$("body").css("overflow", "hidden");
		$("#confirm-modal" + clickID).css("display", "block");
		$("#confirm-layer").css("display", "block");
	})

	$(".delete-comment").bind("click", function(){
		var clickID = $(this).attr("data-id");

		$("body").css("overflow", "hidden");
		$("#confirm-comment-modal" + clickID).css("display", "block");
		$("#confirm-layer").css("display", "block");
	})

	$("#confirm-layer").click(function(){
		$(".modal-design").css("display", "none");
		$("#confirm-layer").css("display", "none");
		$("body").css("overflow", "auto");
	})

	$(".cancel-delete").click(function(){
		$(".modal-design").css("display", "none");
		$("#confirm-layer").css("display", "none");
		$("body").css("overflow", "auto");
	})


	/*----------クラス削除時モーダル処理----------*/
	$(".deleteClassBtn").click(function(){
		$("body").css("overflow", "hidden");
		$("#class-delete").css("display", "block");
		$("#confirm-layer").css("display", "block");
	})


	/*----------LPモバイル用メニュー開閉処理----------*/
	var lp_menu_open = false;
	$(".mb-menu-btn").click(function(){
		if(lp_menu_open){
			$("#mobile-menu-list").slideUp(300);
			lp_menu_open = false;
		}
		else{
			$("#mobile-menu-list").slideDown(300);
			lp_menu_open = true;
		}
	})


	/*----------signupページのタブ処理----------*/
	$(".tab").click(function(){
		var id = $(this).attr("id");
		$(".tab").removeClass("selected");
		$(this).addClass("selected");

		$(".signup-zone").removeClass("selected-form")

		switch(id){
			case "left-tab":
				$("#teacher").addClass("selected-form");
				break;
			case "center-tab":
				$("#student").addClass("selected-form");
				break;
			case "right-tab":
				$("#parent").addClass("selected-form");
				break;
		}
	})

	/*----------termsページのタブ処理----------*/
	$(".terms-tab").click(function(){
		var id = $(this).attr("id");

		if(id == "parent-tab"){
			return;
		}

		$(".terms-tab").removeClass("selected");
		$(this).addClass("selected");

		$(".terms").removeClass("selected-page");

		switch(id){
			case "teacher-tab":
				$("#teacher-privacy").addClass("selected-page");
				break;
			case "student-tab":
				$("#student-privacy").addClass("selected-page");
				break;
			case "parent-tab":
				$("#parent-privacy").addClass("selected-page");
				break;
		}
	})


	/*----------ポール投稿時のバリデーション----------*/
	$("#PollAddForm").submit(function(){
		var error = [];
		var polls = $(".pole-body");
		for(var i = 0; i < polls.length; i++){
			//console.log(polls[i].value);
			if(polls[i].value == ""){
				error.push("selection-empty");
			}
		}

		if($("#PollTitle").val() == ""){
			error.push("title-empty");
		}

		if(error.length > 0){
			for(var i = 0; i < error.length; i++){
				switch(error[i]){
					case "selection-empty":
						$("#poll-selection-error").css("display", "block");
						break;
					case "title-empty":
						$("#poll-title-error").css("display", "block");
						break;
				}
			}

			return false;
		}
	})



	/*----------signup時のユーザーネーム自動生成処理----------*/
	var usernameArray = [];

	$("#student .last-name input").keydown(function(e){
		getUsername(e);
	})

	$("#student .first-name input").keydown(function(e){
		getUsername(e);
	})

	function getUsername(e){
		console.log("全角キー: " + e.keyCode);

		if(e.which == 32 || (65 <= e.which && e.which <= 65 + 25) || (97 <= e.which && e.which <= 97 + 25)){
			console.log("半角キー: " + e.which);

    		usernameArray.push(String.fromCharCode(e.which));
  		}
  		else if(e.which == 8){
    		usernameArray.pop();
  		}

  		var username = usernameArray.join("");
  		username = username.toLowerCase();

  		console.log(username);
	}



	/*----------textareaの自動伸縮処理---------*/
	$(".input-area textarea").autosize();
	$("#CommentBody").autosize();
	$("#PostBody").autosize();



	/*----------ポールのcheck処理----------*/
	$(".dammy-checkbox").click(function(){
		var checkID = $(this).attr("data-id");
		$("#check" + checkID).click();
	})



	/*----------各チェックボックスのクリックイベント----------*/
	$(".check").click(updateProgress);



	/*----------ポール投稿時のオプションのcheck処理----------*/
	$("#dammy-poll-check").click(function(){
		$(".poll-option-check").click();

		if($(".poll-option-check").prop("checked")){
			$(this).addClass("poll-check-clicked");
		}
		else{
			$(this).removeClass("poll-check-clicked");
		}
	})

	$("#dammy-mobile-poll-check").click(function(){
		$(".mobile-poll-option-check").click();
	})



	/*----------投稿削除時AJAX処理----------*/
	$(".done-delete").click(postDelete);



	/*----------コメント削除時AJAX処理----------*/
	$(".done-comment-delete").bind("click", function(e){
		var id = $(this).attr("data-commentID");

		deleteComment(e, id);
	})



	/*----------コメント投稿時AJAX処理----------*/
	$(".comment-btn").mousedown(postComment)

	$(".post-reply-inner form").submit(function(){
		return false;
	})


	/*----------コメント残り表示処理----------*/
	$(".more-comment").click(getLastComments);
})



/*----------Post・Comment・Poll関連の関数群----------*/
//コメント削除ボタンを押した後のAJAX処理
function deleteComment(e, id){
	$(".modal-design").css("display", "none");
	$("#confirm-layer").css("display", "none");
	$("body").css("overflow", "auto");

	e.preventDefault();

	url = "/comments/delete/" + comment_id;

	$.ajax({
		type: "GET",
		url: url,
		success: function(){
			console.log("削除に成功しました");
			$("#comment_" + comment_id).fadeOut();
		},
		error: function(){
			console.log("削除に失敗しました");
		}
	});
}


//投稿削除ボタンを押した後のAJAX処理
function postDelete(e){
	$(".modal-design").css("display", "none");
	$("#confirm-layer").css("display", "none");
	$("body").css("overflow", "auto");

	e.preventDefault();
	var post_id = $(this).attr("data-postID");
	var url = "/posts/delete/" + post_id;

	$.ajax({
		type: "GET",
		url: url,
		success: function(){
			$("#post_" + post_id).fadeOut();
		}
	});

	return false;
}


//コメントボタン表示処理
function showCommentBtn() {

	// Search the element of .comment-btn
	var thisCommentBtn = $(this).parent().siblings(".comment-btn")

	// Disable .comment-btn if textarea is null
	if($(this).val() != ""){
		thisCommentBtn.css("opacity", 1);
		thisCommentBtn.attr("disabled", false);
	}

	$(this).animate({"width": "75%"}, 300, function(){
		thisCommentBtn.css("display", "block");
	});
}


//コメントボタン非表示処理
function hideCommentBtn() {

	$(this).css("width", "97%");

	var thisCommentBtn = $(this).parent().siblings(".comment-btn")

	thisCommentBtn.css("display", "none");
	thisCommentBtn.css("opacity", "0.5");
	thisCommentBtn.css("disabled", "true");

}


//コメントボタンの機能のon/off処理
function switchCommentBtn() {

	var thisCommentBtn = $(this).parent().siblings(".comment-btn")

	if($(this).val() != ""){
		thisCommentBtn.css("opacity", 1);
		thisCommentBtn.attr("disabled", false);
	}
	else{
		thisCommentBtn.css("opacity", 0.5);
		thisCommentBtn.attr("disabled", true);
	}
}


//動的なPost・Comment生成時の日付計算処理
function calculateTime(source_time) {
	var currentTime = new Date().getTime();

	// Parsing source_time
	var parsedTime = source_time.split(/[^0-9]/);
	var new_source_time = new Date (parsedTime[0],parsedTime[1] - 1,parsedTime[2],parsedTime[3],parsedTime[4],parsedTime[5]);

	var commentDate = new Date(new_source_time);
	var commentTime = commentDate.getTime();

	var diffTime = Math.floor((currentTime - commentTime)/1000);

	var dayDiff = Math.floor(diffTime / (60 * 60 * 24));
	var hourDiff = Math.floor(diffTime / (60 * 60));
	var minutesDiff = Math.floor(diffTime / 60);
	var secondDiff = Math.floor(diffTime);

	var y = commentDate.getFullYear();
	var m = commentDate.getMonth() + 1;
	var d = commentDate.getDate();
	var h = commentDate.getHours();
	var i = commentDate.getMinutes();
	var s = commentDate.getSeconds();

	if(m < 10){
		m = "0" + m;
	}
	if(d < 10){
		d = "0" + d;
	}
	if(h < 10){
		h = "0" + h;
	}
	if(i < 10){
		i = "0" + i;
	}
	if(s < 10){
		s = "0" + s;
	}

	var date;

	//もし１日以上差があったら。。。
	if(dayDiff > 1){
		date = y + "年" + m + "月" + d + "日" + " " + h + "時" + i + "分";

	}
	//もし１日差があったら。。。
	else if(dayDiff > 0){
		date = "昨日 " + h + "時" + i + "分";
	}
	else{
		//もし一時間以上差があったら。。。
		if(hourDiff >= 1){
			date = hourDiff + "時間前";
		}
		//もし一分以上差があったら。。。
		else if(minutesDiff >= 1){
			date = minutesDiff + "分前";
		}
		//一分以内の時
		else{
			date = secondDiff + "秒前";
		}
	}
	return date;
}


//残りコメントを全部取得する処理
function getLastComments(){
	var postID = $(this).attr("data-postID");
	//現在表示されているコメントの数
	var existCount = $("#comment-wrap" + postID).children(".post-comments").length;

	var url = "/userphotos/";
	var ajaxURL = "/comments/getComments/"

	$.ajax({
		type: "GET",
		url: ajaxURL + postID + "/" + existCount,
		success: function(data){
			console.log(data);
			var parent_div = $("#comment-wrap" + postID);

			//配列を逆順に
			var dataList = data.lastUpdate.reverse();

			//日付のところでiを使用しているので、indexでループ変数を定義
			for(var index = 0; index < dataList.length; index++){
				var comment = dataList[index].Comment;
				var user = dataList[index].User;
				//console.log(comment);

				//プロフィール写真の取得
				var imgSRC;
				if(user.photo_file_name != null){
					imgSRC = url + "thumb/" + user.photo_file_name;
				}
				else{
					imgSRC = url + "default_m.jpg";
				}

				var date = calculateTime(comment.created);

				//各パーツを生成、張り付け
				var post_comment = "<div class='post-comments' id='comment_" + comment.id + "'>";
				post_comment += "<div class='left-comments'>";
				post_comment += "<img src='" + imgSRC + "' />";
				post_comment += "</div>";
				post_comment += "<div class='right-comments'>";
				post_comment += "<div class='right-inner'>";
				post_comment += "<span class='comment-name'>";
				post_comment += "<a href='/ednity_develop/users/view/" + comment.user_id + "'>";
				post_comment += user.lastname + " " + user.firstname;
				post_comment += "</a></span>";
				post_comment += "<span class='comment-date'>";
				post_comment += date + "<br></span>";
				post_comment += "</div>";
				post_comment += "<div class='comment-text-body'>";
				post_comment += comment.body.replace(/[\n]/g, "<br />");
				post_comment += "</div>";
				post_comment += "</div>";
				post_comment += "<span class='delete-comment' data-id='" + comment.id + "'>"
				post_comment += "</span>"
				post_comment += "</div>";

				parent_div.prepend(post_comment);
			}


			//モーダル表示用のイベントハンドラ登録
			$(".delete-comment").bind("click", function(){
				var clickID = $(this).attr("data-id");

				$("body").css("overflow", "hidden");
				$("#confirm-comment-modal" + clickID).css("display", "block");
				$("#confirm-layer").css("display", "block");
			})

			$("#more-comment" + postID).css("display", "none");
		},
		error: function(){
			console.log("取得に失敗しました。");
		}
	})
}


//コメントのAJAX投稿処理
function postComment(){
	var post_id = $(this).attr("data-post-id");
	var parent_div = $(this).parent().parent().parent().parent().children(".comment-wrap");
	var ajaxURL = "/comments/add/";

	$.ajax({
		type: "POST",
		url: ajaxURL,
		data: $("#comment-form" + post_id + " form").serializeArray(),
		success: function(data){
			console.log(data);
			var body = data.posted_comment.body.replace(/[\n]/g, "<br />"); //\rを外す

			var post_comment = "<div class='post-comments' id='comment_" + data.posted_comment.id + "'>";
			post_comment += "<div class='left-comments'>";
			post_comment += $("img.circle").get(0).outerHTML;
			post_comment += "</div>";
			post_comment += "<div class='right-comments'>";
			post_comment += "<div class='right-inner'>";
			post_comment += "<span class='comment-name'>";
			post_comment += "<a href='/ednity_develop/users/view/"+data.posted_comment.user_id+"'>";
			post_comment += $($(".myName")[0]).text();
			post_comment += "</a></span>";
			post_comment += "<span class='comment-date'>";
			post_comment += "1秒前<br></span>";
			post_comment += "</div>";
			post_comment += "<div class='comment-text-body'>";
			post_comment += body;
			post_comment += "</div>";
			post_comment += "</div>";
			post_comment += "<span class='delete-comment' data-id='" + data.posted_comment.id + "'>"
			post_comment += "</span>"
			post_comment += "</div>";

			$(".comment-form").val("");
			parent_div.append(post_comment);


			//削除確認用モーダルの生成
			var modal_win = "<div id='confirm-comment-modal" + data.posted_comment.id + "' class='modal-design'>";
			modal_win += "<div class='confirm-header'>コメントの削除</div>";
			modal_win += "<p>本当に削除してよろしいですか？</p>";
			modal_win += "<div class='confirmBtns'>";
			modal_win += "<a href='#' class='done-comment-delete' data-commentID='" + data.posted_comment.id + "'>削除</a>";
			modal_win += "<span class='cancel-delete'>キャンセル</span>";
			modal_win += "</div>";
			modal_win += "</div>";

			$("body").append(modal_win);


			//モーダル表示用のイベントハンドラ登録
			$(".delete-comment").bind("click", function(){
				var clickID = $(this).attr("data-id");

				$("body").css("overflow", "hidden");
				$("#confirm-comment-modal" + clickID).css("display", "block");
				$("#confirm-layer").css("display", "block");
			})

			//コメント削除用のイベントハンドラ登録
			$(".done-comment-delete").bind("click", function(e){
				var id = $(this).attr("data-commentID");

				deleteComment(e, id);
			})
		}
	})
}


//ポールcheck時のプログレス処理
function updateProgress(e){
	e.stopPropagation();

	//紐づいた各IDとcheck状態を取得
	var checked = $(this).prop("checked");
	var progID = $(this).attr("data-progID");
	var pollID = $(this).attr("data-pollID");
	var prog = $("#prog" + progID);
	var count = prog.attr("data-count");
	var ajaxURL = "/pollchoices/check/";

	if(checked == true){
		$("#dammy-checkbox" + progID).addClass("clicked");

		//checkされたらプログレスのvalueに+１
		var newValue = Number(count) + 1;
		prog.attr("data-count", newValue);

		//各プログレスの最大値を取得し、maxScoreに代入
		var progs = $(".prog" + pollID);
		var valuesList = [];
		for(var i = 0; i < progs.length; i++){
			var value = Number($("#prog" + pollID + "_" + i).attr("data-count"));

			valuesList.push(value);
		}
		//console.log("全ての値: " + valuesList);
		var maxCount = Math.max.apply(null, valuesList);
		//console.log("最大値: " + maxCount);

		if(maxCount != 0){
			//計算したmaxScoreを元に、各プログレスのwidth変更
			for(var i = 0; i < progs.length; i++){
				var currentProg = $("#prog" + pollID + "_" + i);
				var currentCount = currentProg.attr("data-count");
				var currentWidth = Math.round(currentCount / maxCount * 100) + "%";
				//currentProg.css("width", currentWidth);
				currentProg.animate({"width": currentWidth}, 500);
			}
		}
		else{
			progs.attr("data-count", 0);
			progs.css("width", 0);
		}

		$("#poll-post-zone" + pollID).attr("data-maxScore", maxCount);
		$("#wrap" + progID).css({"border": "solid 2px #57ab43"});
		$("#count" + progID).html(newValue);

		//ajax送信
		$.ajax({
			type: "GET",
			url: ajaxURL + prog.attr("data-id"),
			data: "",
			success: function(data){
				//console.log("保存できました");
			},
			error: function(){
				//console.log("保存できませんでした");
			}
		});
	}
	else{
		$("#dammy-checkbox" + progID).removeClass("clicked");

		//checkが外れたらプログレスのvalueに-１
		var newValue = Number(count) - 1;
		prog.attr("data-count", newValue);

		//各プログレスの最大値を取得し、maxScoreに代入
		var progs = $(".prog" + pollID);
		var valuesList = [];
		for(var i = 0; i < progs.length; i++){
			var value = Number($("#prog" + pollID + "_" + i).attr("data-count"));

			valuesList.push(value);
		}
		//console.log("全ての値: " + valuesList);
		var maxCount = Math.max.apply(null, valuesList);
		//console.log("最大値: " + maxCount);

		if(maxCount != 0){
			//計算したmaxScoreを元に、各プログレスのwidth変更
			for(var i = 0; i < progs.length; i++){
				var currentProg = $("#prog" + pollID + "_" + i);
				var currentCount = currentProg.attr("data-count");
				var currentWidth = Math.round(currentCount / maxCount * 100) + "%";
				//currentProg.css("width", currentWidth);
				currentProg.animate({"width": currentWidth}, 500);
			}
		}
		else{
			progs.attr("data-count", 0);
			progs.css("width", 0);
		}

		$("#poll-post-zone" + pollID).attr("data-maxScore", maxCount);
		$("#wrap" + progID).css({"border": "solid 2px #e6e6e6"});
		$("#count" + progID).html(newValue);

		//ajax送信
		$.ajax({
			type: "GET",
			url: ajaxURL + prog.attr("data-id"),
			data: "",
			success: function(data){
				//console.log("保存できました");
			},
			error: function(){
				//console.log("保存できませんでした。")
			}
		});
	}
}