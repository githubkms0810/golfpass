/**
 * @use 간단 ?�토 ?�로?�용?�로 ?�작?�었?�니??
 * @author cielo
 * @See nhn.husky.SE2M_Configuration 
 * @ ?�업 마크?��? SimplePhotoUpload.html�?SimplePhotoUpload_html5.html???�습?�다. 
 */

nhn.husky.SE2M_AttachQuickPhoto = jindo.$Class({		
	name : "SE2M_AttachQuickPhoto",

	$init : function(){},
	
	$ON_MSG_APP_READY : function(){
		this.oApp.exec("REGISTER_UI_EVENT", ["photo_attach", "click", "ATTACHPHOTO_OPEN_WINDOW"]);
	},
	
	$LOCAL_BEFORE_FIRST : function(sMsg){
		if(!!this.oPopupMgr){ return; }
		// Popup Manager?�서 ?�용??param
		this.htPopupOption = {
			oApp : this.oApp,
			sName : this.name,
			bScroll : false,
			sProperties : "",
			sUrl : ""
		};
		this.oPopupMgr = nhn.husky.PopUpManager.getInstance(this.oApp);
	},
	
	/**
	 * ?�토 ?�탑 ?�픈
	 */
	$ON_ATTACHPHOTO_OPEN_WINDOW : function(){			
		this.htPopupOption.sUrl = this.makePopupURL();
		this.htPopupOption.sProperties = "left=0,top=0,width=403,height=359,scrollbars=yes,location=no,status=0,resizable=no";

		this.oPopupWindow = this.oPopupMgr.openWindow(this.htPopupOption);
		
		// 처음 로딩?�고 IE?�서 커서가 ?��? ?�는 경우
		// 복수 ?�로?�시???�서가 바�?
		// [SMARTEDITORSUS-1698]
		this.oApp.exec('FOCUS', [true]);
		// --[SMARTEDITORSUS-1698]
		return (!!this.oPopupWindow ? true : false);
	},
	
	/**
	 * ?�비?�별�??�업?? parameter�?추�??�여 URL???�성?�는 ?�수	 
	 * nhn.husky.SE2M_AttachQuickPhoto.prototype.makePopupURL�???��?�서 ?�용?�시�???
	 */
	makePopupURL : function(){
		var sPopupUrl = "./sample/photo_uploader/photo_uploader.html";
		
		return sPopupUrl;
	},
	
	/**
	 * ?�업?�서 ?�출?�는 메세지.
	 */
	$ON_SET_PHOTO : function(aPhotoData){
		var sContents, 
			aPhotoInfo,
			htData;
		
		if( !aPhotoData ){ 
			return; 
		}
		
		try{
			sContents = "";
			for(var i = 0; i <aPhotoData.length; i++){				
				htData = aPhotoData[i];
				
				if(!htData.sAlign){
					htData.sAlign = "";
				}
				
				aPhotoInfo = {
				    sName : htData.sFileName || "",
				    sOriginalImageURL : htData.sFileURL,
					bNewLine : htData.bNewLine || false 
				};
				
				sContents += this._getPhotoTag(aPhotoInfo);
			}

			this.oApp.exec("PASTE_HTML", [sContents]); // ?�즐 첨�? ?�일 부�??�인
		}catch(e){
			// upload??error발생???�?�서 skip??
			return false;
		}
	},

	/**
	 * @use ?�반 ?�토 tag ?�성
	 */
	_getPhotoTag : function(htPhotoInfo){
		// id?� class???�네?�과 ?��???많습?�다. ?�정???�네???�역??Test
		var sTag = '<img src="{=sOriginalImageURL}" alt="{=sName}" >';
		if(htPhotoInfo.bNewLine){
			sTag += '<br style="clear:both;">';
		}
		sTag = jindo.$Template(sTag).process(htPhotoInfo);
		
		return sTag;
	}
});