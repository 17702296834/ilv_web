/*********************************************************************************************************************
* ���ƣ�AIE.shine �������ͼƬ���� ֻ��ʹ��һ��@@
* ������idDiv ��װ���id���������ɷ�װ��ʵ��objDiv,������Ҫ�����¿����ò���
* idx    ͼƬ���� Ĭ��Ϊ-1��ѭ���ݼ� ��objDiv.idx = -1;
* srcs   ͼƬλ������ ��objDiv.srcs = ["src=img/1.gif","src=img/2.gif","src=img/3.gif"];
* hrefs  ͼƬ���������飬��objDiv.hrefs = ["href=#1","href=#2","href=#2"]
* sizes  ͼƬ�ߴ����飬���ĸ�Ԫ�أ���ͼƬ���ߣ�СͼƬ�Ŀ��ߡ�Ĭ��ΪobjDiv.sizes = ["200","150","40","30"]
* effect Ч����Ĭ��ΪobjDiv.effect = 23;
* timeOut ѭ�����ڣ�Ĭ��Ϊ5000����λΪ���룬��objDiv.timeOut = 5000
*********************************************************************************************************************/
AIE = {}
AIE.shine = function(idDiv) {
  if (idDiv == null) {
    alert("����Ĳ�������Ϊ�ա�");
	return false;
  }
  var objDiv = document.getElementById(idDiv);
  if (objDiv == null) {
    alert("û�ж�����Ӧid�ķ�װ�㡣" + idDiv);
	return false;
  }
  /*********************************************************************************************************************
  * ��ʼ��
  *********************************************************************************************************************/
  if (!objDiv.isLoop) {  //�����û�п�ʼѭ��	
	//����Ĭ�ϵ�ѭ������
	if (objDiv.idx == null) {
	  //Ĭ�Ͽ�ʼ����Ϊ-1���ԼӺ�����Ϊ0��
	  objDiv.idx = 0;
	}
    if (!objDiv.srcs){
	  alert("û�ж�����Ҫ���Ե�ͼƬ����");
	  return false;
	}
  if (objDiv.srcs.length == 0) {
    //��ֹ����û��ͼƬ�����!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return false;
  }
	if (objDiv.hrefs == null) {
	  objDiv.hrefs = new Array();
	  for (var i = 0; i < objDiv.srcs.length; i++) {
	    objDiv.hrefs[i] = "href=#" + i;
	  }
	}
	if (objDiv.sizes == null) {
	  //Ĭ�ϴ�ͼƬ���ߣ�СͼƬ����
	  objDiv.sizes = ["600", "400", "60", "40"];
	}
	if (objDiv.effect == null) {
	  //Ĭ��Ч��ֵΪ23
	  objDiv.effect = 23;
	}
	//����Ĭ��ѭ������5000����
	if (objDiv.timeOut == null) {
	  objDiv.timeOut = 3000;
	}
	//����iFrame
	var html = "";
	html += ""
	+ "<iframe id=AIE_shineFrame"
	+ " style=\"width:" + objDiv.sizes[0] + ";height:" + objDiv.sizes[1] + ";border:1px solid #000;"
	+ "position:relative;left:0px;top:0px;\""
	+ " frameborder=5 scrolling=no marginwidth=0 marginheight=0"
	+ " ></iframe>"
	+ "";
	//objDiv.innerHTML = html;
	//objDiv.packFrame.style.width = objDiv.sizes[0];
	//objDiv.packFrame.style.height = objDiv.sizes[1];
	objDiv.packDoc = objDiv.packFrame.document;
	//��ʾ����ͼƬ
	htm = ""
	+ "<div id=frmDiv align=center><!--��װ��ʼ-->"
	  + "<a id=Url_" + objDiv.id + " target=_blank href=# >"
		+ "<img id=Img_" + objDiv.id
		+ " style=width:" + objDiv.sizes[0] + ";height:" + objDiv.sizes[1] + ";filter:revealTrans(duration=2,transition=23);"
		+ " src=javascript:null;"
		+ " border=0"
		+ " />"
	  + "</a>"
	//+ "</div>" //�����ٷ�װ
	+ "";
	htm += "</div>";
	//���úڵ�
	if (objDiv.sizes.length >= 4 || objDiv.tts != null) {
	  //�������Сͼ����б��⣬��Ҫ���ú�ɫ��������
	  htm += ""
	  + "<div "
	  + " style=BACKGROUND:#000;FILTER:alpha(opacity=60);TEXT-ALIGN:right;opacity:0.3;"
	  + "WIDTH:" + objDiv.sizes[0] + ";bottom:0px;TEXT-INDENT:10px;LINE-HEIGHT:25px;POSITION:absolute;HEIGHT:" + objDiv.sizes[3]*2 + ";z-index:1;"
	  + " ><!--�ڵ�-->"
	  + "&nbsp"
	  + "</div>"
	  + "";	
	}
	
	//����Сͼ�꣬���þ�������
	var htmImgSmall = null;
	if (objDiv.sizes.length >= 4) {
	  //�����Ҫ����Сͼ��
	  htmImgSmall = "";	  
	  for (var i = 0; i < objDiv.srcs.length; i++) {
		//ѭ������ͼ��
		htmImgSmall += ""
		+ "<div style=display:inline;foat:left;margin-left:8px;CURSOR:pointer;>"
		  + "<a href=" + objDiv.hrefs[i].substr(5) + " target=_blank>"
		    + "<img style=\"border:1px solid #666;width:" + objDiv.sizes[2] + ";height:" + objDiv.sizes[3] + ";\" alt=" + objDiv.tts[i] 
			+ " src=" + objDiv.srcs[i].substr(4) + ""
			+ " onmouseover="
			+ "frmDiv.idx=" + i + ";"
			+ "frmDiv.objDiv.chosedIdx=frmDiv.idx;"
			+ "frmDiv.objDiv.Img.filters.revealTrans.apply();"
			+ "frmDiv.objDiv.Img.src=frmDiv.objDiv.srcs[frmDiv.idx].substr(4);"
			+ "frmDiv.objDiv.Url.href=frmDiv.objDiv.hrefs[frmDiv.idx].substr(5);"
			+ "frmDiv.objDiv.Img.filters.revealTrans.play();"
			+ "this.style.borderColor='red';"
			
			+ " onmouseout=this.style.borderColor='#666';"
			+ " />"
		  + "</a>"
		+ "</div>"
		+ "";
	  } //ѭ������ͼ�����
	}
	//���Сͼ��ķ�װ
	if (htmImgSmall != null) {
	  htmImgSmall = ""
	  + "<div style=position:absolute;left:0px;bottom:20px;z-index:2;>"
		+ htmImgSmall
	  + "</div>"
	  + "";
	  htm += htmImgSmall;
	}
	//��д����
	if (objDiv.tts != null) {
	  //������ڱ���
	  htm += ""
	  + "<div id=Title_" + objDiv.id + ""
	  + " style=font-weight:normal;font-size:16px;line-height:18px;FONT-FAMILY:΢���ź�,����;text-align:left;"
	  + "width:" + objDiv.sizes[0] + ";height:30px;overflow:hidden;"
	  + "position:absolute;left:0px;bottom:-10px;z-index:3;"
	  + "padding-left:10px;"
	  + " >"
	  + "</div>"
	  + "";
	}
	
	//д����ҳ����
	objDiv.packDoc.open();
	objDiv.packDoc.write(htm);
	objDiv.packDoc.close();
	
	objDiv.Img = objDiv.packDoc.getElementById("Img_" + objDiv.id);
	objDiv.Url = objDiv.packDoc.getElementById("Url_" + objDiv.id);
	objDiv.Title = objDiv.packDoc.getElementById("Title_" + objDiv.id);
	objDiv.frmDiv = objDiv.packDoc.getElementById("frmDiv");
	objDiv.frmDiv.idx = objDiv.idx;
	objDiv.frmDiv.objDiv = objDiv;
	objDiv.isLoop = true; //��ʼѭ���忪ʼ
  } //�ж�ѭ���Ƿ�ʼ����
  /*********************************************************************************************************************
  * ��ʼѭ�� Ĭ��ѭ������ΪobjDiv.timeOut = 5000 ��λĬ��Ϊ����
  *********************************************************************************************************************/
  if (objDiv.isLoop) { //����ѭ����
	//����û�ѡ����ĳ��ͼ��
	if (objDiv.chosedIdx != null) {
	  objDiv.idx = objDiv.chosedIdx; //��ֹͼƬ�Զ��仯
	  objDiv.chosedIdx = null; //��λѡ����־
	}
	//�ж������
	if (objDiv.isIE == null) {
	  var navigatorName = "Microsoft Internet Explorer";
	  objDiv.isIE = false; 
	  if(navigator.appName==navigatorName){
		objDiv.isIE = true;
	  }  
	}
	
	if(objDiv.isIE==true){
	  //�����IE�����������ʾЧ��
	  objDiv.Img.filters.revealTrans.Transition=objDiv.effect; 
	  objDiv.Img.filters.revealTrans.apply(); 
	}
	//������һ�����ɣ����趨���⡢���ӣ����趨ͼƬ�������ž�Ҫ����Ч��������Ч��������ϡ�
	objDiv.Img.src = objDiv.srcs[objDiv.idx].substr(4);
	if(objDiv.isIE == true){
	  objDiv.Img.filters.revealTrans.play();
	}
	objDiv.Url.href = objDiv.hrefs[objDiv.idx].substr(5);
	if (objDiv.Title) {
	  //����������
	  objDiv.Title.innerHTML = "<a href=" + objDiv.hrefs[objDiv.idx].substr(5) + " target=_blank><font color=#FFFFFF>" + objDiv.tts[objDiv.idx] + "</font></a>";
	}
	if (objDiv.idx < objDiv.srcs.length -1) {
	  //���������һֱС��ͼƬ���������Զ���1
	  objDiv.idx++;
	} else {
	  //���idx = ͼƬ��������
	  objDiv.idx = 0;
	}
	//����û�ѡ����ĳ��ͼ��
	if (objDiv.chosedIdx != null) {
	  objDiv.idx = objDiv.chosedIdx; //��ֹͼƬ�Զ��仯
	  objDiv.chosedIdx = null; //��λѡ����־
	}
	objDiv.timer = setTimeout("AIE.shine('" + objDiv.id + "')", objDiv.timeOut);  
  } //ѭ�������
  return true;
}