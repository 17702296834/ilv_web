/*********************************************************************************************************************
* 
* <p>�������: AIE</p>
* 
* <p>�������: ͼƬ���</p>
* 
* <p>�������: Ailvbobing's image enterprise</p>
*
* <p>��Ҫ����: ͼƬ�ϡ��¡�����ѭ���������������ԣ����������ı��С/p>
*
* <p>����ʱ��: 2011��04��14��20ʱ35��</p>
*
* <p>Copyright: Copyright (c) 2011</p>
*
* <p>Company: ����</p>
*
* @author ���ı���
* @version 1.0.0
*********************************************************************************************************************/
/*********************************************************************************************************************
* �����༰��Ҫ�Ĳ���,����Ҫ�Ĳ���
*********************************************************************************************************************/
AIE = {}
/*********************************************************************************************************************
 * ѭ���ƶ�
 ********************************************************************************************************************/
// ѭ������
AIE_tp = function (div,div1,div2) {
  var tp = {};
  tp.speed = 20;//ÿ20msƫ��һ��
  tp.div = div;
  tp.div1 = div1;
  tp.div2 = div2;
  //����趨div2,��ֵ
  if (!div2.isFull) {
    tp.div2.innerHTML = tp.div1.innerHTML;
  }  
  div2.innerHtml = div1.innerHTML;
  tp.scrollTop = function() {
	//div1�ĸ߶�<div����ƫ������div1�Ѿ���ȫ�Ƴ��˱߿�
	if(tp.div.scrollTop > tp.div1.offsetHeight) {
	  tp.div.scrollTop -= tp.div1.offsetHeight;
	}else{
	  tp.div.scrollTop++;//ÿ���ƶ�һ��Ԫ�ء�
	}
  }
  tp.interval = setInterval(tp.scrollTop,tp.speed);
  tp.div.onmouseover = function() { clearInterval(tp.interval); }
  tp.div.onmouseout = function() { tp.interval = setInterval(tp.scrollTop,tp.speed); }
}
// ѭ������
AIE_dwn = function (div,div1,div2) {
  var dwn = {};
  dwn.speed = 50;//ÿ50msƫ��һ��
  dwn.div = div;
  dwn.div1 = div1;
  dwn.div2 = div2;
  dwn.div2.innerHTML = dwn.div1.innerHTML;
  div2.innerHtml = div1.innerHTML;
  dwn.scrollTop = function() {
	//div1�ĸ߶�<div����ƫ������div1�Ѿ���ȫ�Ƴ��˱߿�
	if(dwn.div.scrollTop == 0) {
	  dwn.div.scrollTop += dwn.div1.offsetHeight;
	}else{
	  dwn.div.scrollTop--;//ÿ���ƶ�һ��Ԫ�ء�
	}
  }
  dwn.interval = setInterval(dwn.scrollTop,dwn.speed);
  dwn.div.onmouseover = function() { clearInterval(dwn.interval); }
  dwn.div.onmouseout = function() { dwn.interval = setInterval(dwn.scrollTop,dwn.speed); }
}
// ѭ������
AIE_lft = function (div,div1,div2) {
  var lft = {};
  lft.speed = 20;//ÿ20msƫ��һ��
  lft.div = div;
  lft.div1 = div1;
  lft.div2 = div2;
  //���Զ���ֵ
  if (!div2.isFull) {
    lft.div2.innerHTML = lft.div1.innerHTML;
  }
  
  div2.innerHtml = div1.innerHTML;
  lft.scrollLeft = function() {
	//div1�ĸ߶�<div����ƫ������div1�Ѿ���ȫ�Ƴ��˱߿�
	if(lft.div.scrollLeft > lft.div1.offsetWidth) {
	  lft.div.scrollLeft -= lft.div1.offsetWidth;
	}else{
	  lft.div.scrollLeft++;//ÿ���ƶ�һ��Ԫ�ء�
	}
  }
  lft.interval = setInterval(lft.scrollLeft,lft.speed);
  lft.div.onmouseover = function() { clearInterval(lft.interval); }
  lft.div.onmouseout = function() { lft.interval = setInterval(lft.scrollLeft,lft.speed); }
}
// ѭ������
AIE_rht = function (div,div1,div2) {
  var rht = {};
  rht.speed = 50;//ÿ50msƫ��һ��
  rht.div = div;
  rht.div1 = div1;
  rht.div2 = div2;
	//�������õڶ�ѭ����
	if (!div2.isFull) {
	  rht.div2.innerHTML = rht.div1.innerHTML;
	}
  
  div2.innerHtml = div1.innerHTML;
  rht.scrollLeft = function() {
	//div1�ĸ߶�<div����ƫ������div1�Ѿ���ȫ�Ƴ��˱߿�
	if(rht.div.scrollLeft == 0) {
	  rht.div.scrollLeft += rht.div1.offsetWidth;
	}else{
	  rht.div.scrollLeft--;//ÿ���ƶ�һ��Ԫ�ء�
	}
	var stt = document.getElementById('status');
	if(stt != null) {
	  stt.innerHTML = rht.div.scrollLeft + ' ' + rht.div1.offsetWidth + ' ' + rht.div2.offsetWidth;
	}
  }
  rht.interval = setInterval(rht.scrollLeft,rht.speed);
  rht.div.onmouseover = function() { clearInterval(rht.interval); }
  rht.div.onmouseout = function() { rht.interval = setInterval(rht.scrollLeft,rht.speed); }
}

/*********************************************************************************************************************
 * ����ͼƬ����
 ********************************************************************************************************************/
AIE_shw2 = function(imgdividnm,imgurls,imgtts,imgwidth,imgheight) {
  var imgdiv = document.getElementById(imgdividnm);
  imgdiv.i_strngth=1;
  imgdiv.i_image=0;
  imgdiv.imgtts = imgtts;
  imgdiv.imageurl = imgurls;
  imgdiv.imgwidth = imgwidth;
  imgdiv.imgheight = imgheight;
  showimage(imgdividnm);
}
function showimage(imgdividnm) {
  var imgdiv = document.getElementById(imgdividnm);
  if(document.all) {
	if (imgdiv.i_strngth <=110) {
	  imgdiv.innerHTML="<img width="+imgdiv.imgwidth+" height="+imgdiv.imgheight
	  +" style='filter:alpha(opacity="+imgdiv.i_strngth+")' src="+imgdiv.imageurl[imgdiv.i_image]+" border=0>"
	  +imgdiv.imgtts[imgdiv.i_image];
	  imgdiv.i_strngth=imgdiv.i_strngth+10
	  var timer=setTimeout("showimage('"+imgdividnm+"')",100)
	}else {
	  clearTimeout(timer)
	  var timer=setTimeout("hideimage('"+imgdividnm+"')",1000)
	}
  }
  if(document.layers) {
	clearTimeout(timer)
	document.imgdiv.document.write("<img width="+imgdiv.imgwidth+" height="+imgdiv.imgheight
								   +" src="+imgdiv.imageurl[imgdiv.i_image]+" border=0>" +imgdiv.imgtts[imgdiv.i_image])
	document.close()
	imgdiv.i_image++
	if (imgdiv.i_image >= imgdiv.imageurl.length) {imgdiv.i_image=0} 
	var timer=setTimeout("showimage('"+imgdividnm+"')",2000)
  } 
}
function hideimage(imgdividnm) { 
  var imgdiv = document.getElementById(imgdividnm);
  if (imgdiv.i_strngth >=-10) {
	imgdiv.innerHTML="<img width="+imgdiv.imgwidth+" height="+imgdiv.imgheight
	+" style='filter:alpha(opacity="+imgdiv.i_strngth+")' src="+imgdiv.imageurl[imgdiv.i_image]+" border=0>" +imgdiv.imgtts[imgdiv.i_image];
	imgdiv.i_strngth=imgdiv.i_strngth-10
	var timer=setTimeout("hideimage('"+imgdividnm+"')",100)
  }else {
	clearTimeout(timer)
	imgdiv.i_image++
	if (imgdiv.i_image >= imgdiv.imageurl.length) {imgdiv.i_image=0}
	imgdiv.i_strngth=1
	var timer=setTimeout("showimage('"+imgdividnm+"')",500) 
  }
}
/*********************************************************************************************************************
 * ����ͼƬ���� �Ľ��� ������ÿ�ζ�Ҫ�ȴ�����
 ********************************************************************************************************************/
AIE_shw = function(imgdividnm,imgurls,imgtts) {
  var imgdiv = document.getElementById(imgdividnm);
  imgdiv.op=1;//��ʼ��͸����
  imgdiv.i_image=0;
  imgdiv.imgtts = imgtts;//��������
  imgdiv.imageurl = imgurls;//��ַ����
  imgdiv.innerHTML = "";
  for(var i=0; i < imgurls.length; i++) { //��������ͼƬ
  imgdiv.innerHTML += ""//���ò�������
  + "<div style=display:none;>"
	+ imgurls[i]
	+ imgdiv.imgtts[i]
  + "</div>";
  }
  shwimg(imgdividnm);
}
function shwimg(imgdividnm) {
  var imgdiv = document.getElementById(imgdividnm);//�ҳ�����
  var tempimg = document.getElementById(imgdividnm+"_"+imgdiv.i_image);//�ҳ���ǰҪ���Ե�ͼƬ 
  if(imgdiv.op <= 100) {
	tempimg.style.display = "block";
	tempimg.parentNode.style.display = "block";
	tempimg.style.filter = "alpha(opacity="+imgdiv.op+")";
	imgdiv.op += 10;
	imgdiv.timer = setTimeout("shwimg('"+imgdividnm+"')",100);
  }else{
	clearTimeout(imgdiv.timer);
	imgdiv.timer = setTimeout("hidimg('"+imgdividnm+"')",1000);
  }
}
function hidimg(imgdividnm) { 
  var imgdiv = document.getElementById(imgdividnm);
  var tempimg = document.getElementById(imgdividnm+"_"+imgdiv.i_image);
  if(imgdiv.op >= 0) {
	tempimg.style.filter = "alpha(opacity="+imgdiv.op+")";
	imgdiv.op -=10;
	imgdiv.timer = setTimeout("hidimg('"+imgdividnm+"')",100);
  }else{
	clearTimeout(imgdiv.timer);
	tempimg.style.display = "none";
	tempimg.parentNode.style.display = "none";
	imgdiv.i_image ++;
	if (imgdiv.i_image >= imgdiv.imageurl.length) {imgdiv.i_image=0}
	imgdiv.op = 1;//��ʼ��͸����
	imgdiv.timer = setTimeout("shwimg('"+imgdividnm+"')",100);
  }
}

/*********************************************************************************************************************
* ���ƣ�startSah(idDiv,imgs,[hrefs,[tts]])
* ������start show and hide
* ������idImgDiv ��������id��ͼƬ��,���Ӽ���tts ���⼯
* ���ܣ�ʵ��ͼƬ�Ľ����ͽ���
*********************************************************************************************************************/
AIE.startSah = function (idDiv,imgs,hrefs,tts) { //ͼƬ������
  if (tts == null) { //���δ������⼯����ʼ�����⼯
    tts = new Array(imgs.length);
	for(var i = 0; i < tts.length; i++) { //ѭ���ÿ�����
	  tts[i] = "";
	} //ѭ���ÿս���
  } //��ʼ�����⼯����
  
  if (hrefs == null) { //���δ�������Ӽ�����ʼ�����Ӽ�
    hrefs = new Array(imgs.length);
	for(var i = 0; i < hrefs.length; i++) { //ѭ���ÿ�����
	  hrefs[i] = "";
	} //ѭ���ÿս���
  } //��ʼ�����Ӽ�����
  
  var div = document.getElementById(idDiv);
  div.op = 1;//��ʼ��͸����
  div.i = 0; //��ʼ��ͼƬ����
  div.num = imgs.length; //ͼƬ�ĸ���
  for(var i=0; i < imgs.length; i++) { //��������ͼƬ
  div.innerHTML += ""//���ò�������
  + "<a " + hrefs[i] + " target=_blank style=display:none;>" 
	+ imgs[i]
	+ tts[i]
  + "</a>"
  }
  var img = document.getElementById(idDiv + "_" + div.i); //��ʾ��һ��ͼƬ
  img.style.filter = "alpha(opacity=" + div.op + ")";
  img.parentNode.style.display = "block";
  div.sahFlag = "shw" //��ʼ��ʾ
  div.sahInterval = setInterval("AIE.sah(\"" + idDiv + "\")", 1); //�������Խ���
}
/*********************************************************************************************************************
* ���ƣ�sah(idDiv)
* ������idDiv ���Բ�id
* ���ܣ�����ͼƬ����ͼƬ��ȫ��ʾʱ�ٽ���,��ȫ����ʱ�����ص�ǰͼƬ��������һ��ͼƬ
*********************************************************************************************************************/
AIE.sah = function (idDiv) { //ͼƬ������
  var div = document.getElementById(idDiv);
  var img = document.getElementById(idDiv + "_" + div.i);
  //��ʾ����
  if (div.sahFlag == "shw") { //��ʼ��ʾ
    if (div.op <= 100) { //�����û����ȫ��ʾ
	  div.op += 1;
	  img.style.filter = "alpha(opacity=" + div.op + ")";
	} else { //��ȫ��ʾ��,��ʼ����
	  div.sahFlag = "hid";
	} //��ʾ����
  } else { //��ʱdiv.sahFlag = "hid" ��ʼ����
    if (div.op >= 5) { //�����û����ȫ����
	  div.op -= 1;
	  img.style.filter = "alpha(opacity=" + div.op + ")";
	} else { //�Ѿ���ȫ����
	  img.parentNode.style.display = "none"; //���ص�ǰͼƬ���ڵĲ�
	  div.i ++;
	  if (div.i >= div.num) div.i = 0; //������������ͼƬ�������ص���һ��ͼƬ
	  //��ʾ��һ��ͼƬ
	  img = document.getElementById(idDiv + "_" + div.i);
	  img.style.filter = "alpha(opacity=" + div.op + ")";
	  img.parentNode.style.display = "block";
	  div.sahFlag = "shw";
	} //�ж��Ƿ���ȫ���ؽ���
  } //��������
}
/*********************************************************************************************************************
* ���ƣ�wheelResize(img,[maxW = 800],[minW = 100])
* ������img ͼƬ��maxW �����,��һ��int����,minW��С��ȿ�ʡ
* ���ܣ����������ı�ͼƬ��С
* ��ע��zoom�������û������������ű����������Բ��ɼ̳У�������Ӱ���Ӷ���Ĵ�С������ȣ�background��filter��
* ��ע��parseInt(string,��radix��) ��string�õ�����,radix�����ƣ���δ�趨����ǰ׺0xΪ16���ƣ�0Ϊ8���ƣ�����Ϊʮ����
*********************************************************************************************************************/
AIE.wheelResize = function (img, maxW,minW) { //�Զ������ı�ͼƬ��С
  if (maxW == null) maxW = 300; //Ĭ��������ű���Ϊ800%,��ͼƬ�Ŵ�8��
  if (minW == null) minW = 10;  //Ĭ����С���ű���Ϊ10%����ͼƬ����1/10
  var zoom = parseInt(img.style.zoom, 10)|| 100; //�������ű������ɹ���ͼƬ������ҳ���ԭʼ��С������ʵ�ʴ�С����
  zoom += event.wheelDelta/12;
  if (zoom > minW && zoom < maxW) img.style.zoom = (zoom).toString() + "%"; //���ϰٷֺ�(toString()����ʡȥ)
  return false;
}

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
/*********************************************************************************************************************
* ���ƣ�׼����������
* ������idDiv ��װ���id���������ɷ�װ��ʵ��objDiv,������Ҫ�����¿����ò���
* idx    ͼƬ���� Ĭ��Ϊ-1��ѭ���ݼ� ��objDiv.idx = -1;
* srcs   ͼƬλ������ ��objDiv.srcs = ["src=img/1.gif","src=img/2.gif","src=img/3.gif"];
* hrefs  ͼƬ���������飬��objDiv.hrefs = ["href=#1","href=#2","href=#2"]
* sizes  ͼƬ�ߴ����飬���ĸ�Ԫ�أ���ͼƬ���ߣ�СͼƬ�Ŀ��ߡ�Ĭ��ΪobjDiv.sizes = ["200","150","40","30"]
* effect Ч����Ĭ��ΪobjDiv.effect = 23;
* timeOut ѭ�����ڣ�Ĭ��Ϊ5000����λΪ���룬��objDiv.timeOut = 5000
*********************************************************************************************************************/
var navigatorName = "Microsoft Internet Explorer";
var isIE = false; 
if(navigator.appName==navigatorName) isIE = true;
function objSP_Article() {this.ImgUrl=""; this.LinkUrl=""; this.Title="";}
function SlidePic_Article(_id) {this.ID=_id; this.Width=0;this.Height=0; this.TimeOut=5000; this.Effect=23; this.TitleLen=0; this.PicNum=-1; this.Img=null; this.Url=null; this.Title=null; this.AllPic=new Array(); this.Add=SlidePic_Article_Add; this.Show=SlidePic_Article_Show; this.LoopShow=SlidePic_Article_LoopShow;}
function SlidePic_Article_Add(_SP) {this.AllPic[this.AllPic.length] = _SP;}
function SlidePic_Article_Show() {
  if(this.AllPic[0] == null) return false;
  document.write("<div align='center'><a id='Url_" + this.ID + "' href='' target='_blank'><img id='Img_" + this.ID + "' style='width:" + this.Width + "px; height:" + this.Height + "px; filter: revealTrans(duration=2,transition=23);' src='javascript:null' border='0'></a>");
  if(this.TitleLen != 0) {document.write("<br><span id='Title_" + this.ID + "'></span></div>");}
  else{document.write("</div>");}
  this.Img = document.getElementById("Img_" + this.ID);
  this.Url = document.getElementById("Url_" + this.ID);
  this.Title = document.getElementById("Title_" + this.ID);
  this.LoopShow();
}
function SlidePic_Article_LoopShow() {
  if(this.PicNum<this.AllPic.length-1) this.PicNum++ ; 
  else this.PicNum=0; 
  if(isIE==true){
  this.Img.filters.revealTrans.Transition=this.Effect; 
  this.Img.filters.revealTrans.apply(); 
  }
  this.Img.src=this.AllPic[this.PicNum].ImgUrl.substr(4);
  if(isIE==true){
  this.Img.filters.revealTrans.play();
  }
  this.Url.href=this.AllPic[this.PicNum].LinkUrl.substr(5);
  if(this.Title) this.Title.innerHTML="<a href="+this.AllPic[this.PicNum].LinkUrl+" target='_blank'>"+this.AllPic[this.PicNum].Title+"</a>";
  this.Img.timer=setTimeout(this.ID+".LoopShow()",this.TimeOut);
}
