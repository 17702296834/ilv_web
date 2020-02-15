/*********************************************************************************************************************
* 
* <p>�������: AEW</p>
* 
* <p>�������: ���ڲ��</p>
* 
* <p>�������: Ailvbobing's easy window</p>
*
* <p>��Ҫ����: ��ʾ�����Ի���˫���Զ��·�</p>
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
AEW = {}
AEW.popAllHeight = 0; //�������ڵ��ܸ߶�
/*********************************************************************************************************************
* ���ƣ�getPath
* ��������
* ���ܣ��õ��������Ե�ַ
*********************************************************************************************************************/
AEW.getPath = function(){
	var path = '';
	var elements = document.getElementsByTagName('script');
	for (var i = 0, len = elements.length; i < len; i++) {
		if (elements[i].src && elements[i].src.match(/\/AEW[\w\-\.]*\.js/)) {
			path += elements[i].src.substring(0, elements[i].src.lastIndexOf('/') + 1);
		}
	}
  path = path.replace('/./','/');
	return path;
}
/*********************************************************************************************************************
* ���ƣ�createPopWin
* ���������ߣ�ǰ��ɫ������ɫ�����⣬����ͼƬ����λ�ã�����
* ���磺AEW.createPopWin("AEW_popWin",240,180,"ffffff","dd8432","��վ����","<img src=img/qxgb.jpg width=234 height=138 boder=0 />","_blank","AEM.htm");
* ���ܣ����ɵ�������
*********************************************************************************************************************/
AEW.createPopWin = function (idPopWin,width,height,color,bcolor,tt,img,target,href) { //������������
  AEW.popAllHeight = height;
  AEW.idPopWin = idPopWin; //��¼�������ڵ�id
  var htmPopWin = "";
  htmPopWin += ""
  + "<div id=" + idPopWin + " " //���㿪ʼ
  + "style=\"" //��ʽ��ʼ
  + "width:" + width + "px;height:0px;overflow:hidden;" //�ߴ�
  + "Z-INDEX: 99999;position:absolute;left:0;bottom:0;" //λ��
  + "border:1px solid #666;margin:0;padding:0px;display:none;" //�߿����ס���ʾ
  + "color:" + color + ";font-size:16px;" //����
  + "background: " + bcolor + ";" //������ɫ
  + "\"" //��ʽ����
  + ">" //�������ͷ
  
	//�Ϸ�����
	+ "<div style=\"width:" + (width - 2) + "px;height:4px;overflow:hidden;border-right:1px solid #fff;border-top:1px solid #fff;\">"
	+ "&nbsp;"
	+ "</div>" //�Ϸ����� 
	//����
	+ "<div style=\"height:25px;voerflow:hidden;float:left;padding:5px 5px;\">"
	+ tt //��������
	+ "</div>" //�������
	//�رհ�ť
	+ "<div style=\"height:25px;voerflow:hidden;border-right:1px solid #fff;float:right;padding:5px 5px;\">" //�رհ�ť
	  + "<SPAN title=�ر� style=font-weight:bold;cursor:hand;margin-right:4px; onclick=AEW.dwnPopWin(\"" + idPopWin + "\") >"
	    + "<img src=" + AEW.getPath() + "img/close.gif width=16 />"
	  + "</SPAN>"
	+ "</div>"
	
	//ͼƬ
	+ "<div "
	+ "style=\"width:" + (width - 2) + "px;height:" + (height - 38) + ";overflow:hidden;"
	+ "padding:2px;border-right:1px solid #fff;background:#E0E0E0;\">"
	  + "<a href = " + href + " target=" + target + ">"
	    + img
	  + "</a>"
	+ "</div>"
  
  + "</div>" //����β
  + "";
  document.open();
  document.write(htmPopWin);
  document.close();
} //�����������ڷ���AEM.createPopWin����
/*********************************************************************************************************************
* ���ƣ�upPopWin(div)
* ��������Ҫ����Ĵ���
* ���ܣ����������ӵײ���������
*********************************************************************************************************************/
AEW.upPopWin = function (idPopWin) { //����������������
  var popWin = document.getElementById(idPopWin);
  var popH = parseInt(popWin.style.height);
  popWin.style.height = (popH + 1).toString() + "px";
  popWin.style.height = (popH).toString() + "px";
  popWin.style.display = "block";
  popWin.style.height = (popH + 1).toString() + "px";
  popWin.style.height = (popH).toString() + "px";
  AEW.upInterval = setInterval("AEW.scrollPop(\"" + idPopWin + "\", \"up\")", 1);
  
} //�������𷽷�upPopWin����
/*********************************************************************************************************************
* ���ƣ�dwnPopWin(idPopWin)
* ��������Ҫ���µĴ���id
* ���ܣ�����������������
*********************************************************************************************************************/
AEW.dwnPopWin = function (idPopWin) { //����������������
  AEW.dwnInterval = setInterval("AEW.scrollPop(\"" + idPopWin + "\", \"dwn\")", 1);
} //���ڽ��·���dwnPopWin����
/*********************************************************************************************************************
* ���ƣ�dwnPopWin(idPopWin)
* ������idPopWin �������ڵ�id str == "up" ������str == "dwn" �½� 
* ���ܣ�ʵ���������½�
*********************************************************************************************************************/
AEW.scrollPop = function (idPopWin, str){ //����������
  var popWin = document.getElementById(idPopWin);
  var popH = parseInt(popWin.style.height);
  if (str == "up") { //���������
    if (popH < AEW.popAllHeight){ //�����û���������߶�
	  popWin.style.height = (popH + 2).toString() + "px";
    } else { //�Ѿ����������߶�
      clearInterval(AEW.upInterval);
      window.onscroll = AEW.popMove; //��ҳ�����ʱ����������Ҳ���������ʼ�ձ����ڵײ�
    }
  } else { //������½�
    if (popH > 4) { //�����δ������
      popWin.style.height = (popH - 2).toString() + "px";
    } else { //�Ѿ���������׶�
      clearInterval(AEW.dwnInterval);
      popWin.style.display = "none";
    }
  } //�½�����
}
/*********************************************************************************************************************
* ���ƣ�popMove
* �������ޣ�������ǰ����Ҫ�ѵ�������id����AEW.idPopWin
* ���ܣ�����ҳ�������������
*********************************************************************************************************************/
AEW.test = true;
AEW.popMove = function () { //���������������
  var popWin = document.getElementById(AEW.idPopWin);
  var popH = parseInt(popWin.style.height);
  popWin.style.height = (popH + 1).toString() + "px"; //ͨ���߶ȵĸı������𵯳����ڵ�����ѡλ
  popWin.style.height = (popH).toString() + "px";
} //��������������ڷ���popMove����
/*********************************************************************************************************************
* ���ƣ�startAutoScroll(str) //��ʼ�Զ�����
* ������str == up ���Ϸ��� str == dwn ���·���
* ���ܣ���ʼ�Զ����������ǵ�ʵ�ü�ֵ��ֻ���õ����·���
*********************************************************************************************************************/
AEW.startAutoScroll = function (str) { //��ʼ����
  if (str == "dwn") { //������¹�
	document.onmousedown = AEW.stpAutoDwnWin;
	document.ondblclick = AEW.autoDwnWin;
  } //�¹�����
}
/*********************************************************************************************************************
* ���ƣ�autoDwnWin() //�Զ���������
* ��������
* ���ܣ�ʵ��ҳ�����˫��ʱ�Զ��¹�
*********************************************************************************************************************/
AEW.autoDwnWin = function (){ //�Զ��¹�
  AEW.autoDwnTimer = setInterval ("AEW.scrollWindow ()",30);
} //�Զ��¹�����autoDwnWin����
/*********************************************************************************************************************
* ���ƣ�stpAutoDwnWin() //ֹͣ���¹���
* ��������
* ���ܣ�ֹͣҳ���Զ��¹�
*********************************************************************************************************************/
AEW.stpAutoDwnWin = function (){ //ֹͣ�¹�
  clearInterval(AEW.autoDwnTimer);
} //ֹͣ�¹�����stpAutoDwnWin����
/*********************************************************************************************************************
* ���ƣ�scrollWindow() //��������
* ��������
* ���ܣ���������
*********************************************************************************************************************/
AEW.scrollWindow = function () { //��������
  var currentTop = document.body.scrollTop;
  window.scroll(0, ++currentTop);
  if (currentTop != document.body.scrollTop) { //������ڲ����ܹ��Ͼ���ֹͣ
    clearInterval(AEW.autoDwnTimer);
  } //�жϴ����Ƿ��¹����׽���
} //�������ڷ���scrollWindow����


/*********************************************************************************************************************
* ���ƣ�popDv() //����DVչ������
* ������div �����Ĳ� title ���� img ����ͼ swf ��Ƶ,title,imgSrc,swfSrc,href,top,left,width,height
* ���ܣ���������
*********************************************************************************************************************/
AEW.popDv = function (div) {
  if (!div){ alert("�����div��������һ��ʵ��");return;} //��������idΪ�գ������ʾ������Ϣ������
  if (!div.dvTitle) {div.dvTitle = "δ����"; } //Ĭ�ϵı���Ϊδ����
  if (!div.dvImg || div.dvImg.length < 4) { div.dvImg = "src=" + AEW.getPath() + "img/1.jpg"; } //Ĭ�ϵ�ͼƬ1.jpg
  if (!div.dvSwf || div.dvSwf.length < 4) { div.dvSwf = "src=" + AEW.getPath() + "img/1.swf"; } //Ĭ����ƵΪ1.swf
  if (!div.dvHref || div.dvHref.length < 5) { div.dvHref = "href=" + AEW.getPath() + "?"; } //Ĭ�ϵ�����Ϊ?
  if (!div.dvMore || div.dvMore.length < 5) { div.dvMore = "href=" + AEW.getPath() + "?"; } //Ĭ�ϵ�����Ϊ?
  if (!div.dvHeight){ div.dvHeight = 300; } //Ĭ�ϴ��ڸ߶�Ϊ300
  if (!div.dvSuf) { div.dvSuf = ""; } //Ĭ�Ϻ�׺
  if (!div.dvMenuColor || div.dvMenuColor.length < 1 ) { div.dvMenuColor = "#DD8432"; } //Ĭ�ϵ���ɫΪ�ƺ�ɫ
  if (!div.dvMenuTitle) { div.dvMenuTitle = "DV��Ʒ���"; } //Ĭ�ϵ���ɫΪ�ƺ�ɫ
  if (!div.dvCloseHidden) { div.dvCloseVisible = false; } //Ĭ�Ϲرհ�ť�ɼ�

  //��ȡdiv�ĳߴ�
  var offsetWidth = div.offsetWidth;
  var offsetHeight = div.offsetHeight;
  //����ҳ������
  var html = "";
  //0������
  //ͼƬ
  html += "<div id=divDvImg" + div.dvSuf + " style=margin-top:0px;display:block;>"
  + "<img "
  + " style=width:100%;height:" + offsetHeight + ";overflow:hidden;"
  + " src=\"" + div.dvImg.substr(4) + "\""
  + " />"
  + "</div>"
  + "";
  //��Ƶ
  html += "<div id=divDvSwf" + div.dvSuf + " style=margin-top:30px;display:none;>"
  //+ "<EMBED id=embedDv" + div.dvSuf + " style=\"BORDER-RIGHT: #aca899 1px solid; BORDER-TOP:#aca899 1px solid;BORDER-LEFT: #aca899 1px solid;WIDTH:" + div.offsetWidth + ";BORDER-BOTTOM: #aca899 1px solid;HEIGHT:" + (div.offsetHeight-70) + ";cursor:hand;\" src=\"" + div.dvSwf.substr(4) + "\"  type=text/html;charset=iso-8859-1  loop=true  autostart=true"
  //+ " />"
  + ""
  + "</div>"
  + "";
  //1���˵�
  html += ""
  + "<div "
  + " style=BACKGROUND:" + div.dvMenuColor + ";FILTER:alpha(opacity=80);TEXT-ALIGN:right;"
  + "WIDTH:" + offsetWidth + ";top:0px;left:0px;TEXT-INDENT:10px;LINE-HEIGHT:25px;POSITION:absolute;HEIGHT:30px;z-index:1;"
  + "padding-top:5px;padding-right:10px;"
  + " ><!--�˵�-->"
  + ( div.dvCloseHidden 
  ? ""
  : "<img onmouseup=" + div.id + "Body.dvWidthAct=\"hidden\";AEW.changeDvWidth(\"" + div.id + "Body\"); title=�ر� src=\"" + AEW.getPath() + "img/close.gif\" style=cursor:hand; />")
  + "</div>"
  + "";
  //����
  html += ""
  + "<div "
  + " style=FILTER:alpha(opacity=100);TEXT-ALIGN:left;"
  + "WIDTH:" + offsetWidth + ";top:0px;left:0px;TEXT-INDENT:10px;LINE-HEIGHT:25px;POSITION:absolute;HEIGHT:30px;z-index:2;"
  + "padding-top:5px;padding-left:5px;"
  + " ><!--�˵�-->"
  + "<strong><font color=#FFFFFF>" + div.dvMenuTitle + "&nbsp;&nbsp;</font></strong>"
  + "<a href=\"" + div.dvMore.substr(5) + "\" target=_blank>"
    + ""
  + "</a>"
  + "</div>"
  + "";
  //����
  html += ""
  + "<div "
  + " style=TEXT-ALIGN:right;"
  + "WIDTH:" + offsetWidth + ";top:0px;right:10px;TEXT-INDENT:10px;LINE-HEIGHT:25px;POSITION:absolute;HEIGHT:30px;z-index:2;"
  + "padding-top:5px;padding-right:25px;"
  + " ><!--����-->"
  + "<a href=\"" + div.dvMore.substr(5) + "\" target=_blank>"
   + "<font color=#FFFFFF>"
    + "<strong>����>></strong>"
   + "</font>"
  + "</a>"
  + "</div>"
  + "";
  //2����ɫ����
  html += ""
  + "<div "
  + " style=BACKGROUND:#000;FILTER:alpha(opacity=60);TEXT-ALIGN:right;"
  + "WIDTH:" + offsetWidth + ";bottom:0px;left:0px;TEXT-INDENT:10px;LINE-HEIGHT:25px;POSITION:absolute;HEIGHT:40px;z-index:1;"
  + " ><!--�ڵ�-->"
  + "&nbsp"
  + "</div>"
  + "";
  //3������
  html += ""
  + "<div "
  + " style=TEXT-ALIGN:left;"
  + "WIDTH:" + offsetWidth + ";bottom:0px;left:0px;TEXT-INDENT:10px;LINE-HEIGHT:25px;POSITION:absolute;HEIGHT:30px;z-index:2;"
  + " ><!--����-->"
  + "<a href=\"" + div.dvHref.substr(5) + "\" target=_blank>"
   + "<font color=#FFFFFF><strong>"
    + div.dvTitle
   + "</strong></font>"
  + "</a>"
  + "</div>"
  + "";
  //4����ʼ��ͷ
  html += ""
  + "<div "
  + " style=TEXT-ALIGN:right;"
  + "WIDTH:" + offsetWidth + ";bottom:0px;left:0px;TEXT-INDENT:10px;LINE-HEIGHT:25px;POSITION:absolute;HEIGHT:40px;z-index:3;"
  + "padding-right:8px;"
  + " ><!--ͼƬ-->"
  + "<img id=imgDvAct" + div.dvSuf + " onmouseup=AEW.changeDvAct(this); title=���� style=height:100%;overflow:hidden;cursor:hand; src=\"" + AEW.getPath() + "img/play.gif\" />"
  + "</div>"
  div.innerHTML = html;
  document.getElementById("imgDvAct" + div.dvSuf).div = div;
  setTimeout("AEW.changeDvWidth('" + div.id + "Body')",50);
}
/*********************************************************************************************************************
* ���ƣ�changeDvWidth �任չ�����ڵĸ߶ȣ�ֱ���߶����趨�ĸ߶����
* ������id div��idֵ
* ���ܣ��𽥵���չ������
*********************************************************************************************************************/
AEW.changeDvWidth = function (id) {
  if (!id) { alert("�ڸı�չ�����ڸ߶�ʱ������Ĳ�id��Ч"); return;}
  var div = document.getElementById(id);
  if (!div.dvWidthAct) { 
    div.dvWidthAct = "show"; //Ĭ����ʾ����
  }
  if (div.dvWidthAct == "show") { 
    div.style.width = div.offsetWidth + 10;
    if (div.offsetWidth < div.dvWidth) {
      setTimeout("AEW.changeDvWidth('" + div.id + "')",50);
    }
  } else {
    //���ش���
    div.style.width = div.offsetWidth - 10;
    if (div.offsetWidth > 0) {
      setTimeout("AEW.changeDvWidth('" + div.id + "')",50);
    } else {
      div.style.display = "none"; //������ʾ����
    }
  }
}
/*********************************************************************************************************************
* ���ƣ�changeDvAct ����DVչ����ΪͼƬ����<-->ֹͣ() //��������
* ������div �����Ĳ� title ���� img ����ͼ swf ��Ƶ,title,imgSrc,swfSrc,href,top,left,width,height
* ���ܣ���������
*********************************************************************************************************************/
AEW.changeDvAct = function(img) {
  if (!img) { alert("�����ͼƬ��㲻����Чʵ��"); return;} //ͼƬ��������Ч
  if (!img.swfHTML) { //�ݴ���Ƶ�Ĵ���
    //img.swfHTML =  document.getElementById("divDvSwf" + img.div.dvSuf).innerHTML;
	img.swfHTML = ""
    + " <EMBED id=embedDv" + img.div.dvSuf + ""
	+ " style=\"BORDER-RIGHT: #aca899 1px solid; BORDER-TOP:#aca899 1px solid;BORDER-LEFT: #aca899 1px solid;WIDTH:" + img.div.offsetWidth + ";BORDER-BOTTOM: #aca899 1px solid;HEIGHT:" + (img.div.offsetHeight-70) + ";cursor:hand;\""
	+ " src=\"" + img.div.dvSwf.substr(4) + "\"  type=text/html;charset=iso-8859-1  loop=true  autostart=true"
    + " />"
	+ ""
	+ "";
  }
  if (img.src.match(/[\w\-\.]*.play.gif/)) {
    //�����ǰ�ǲ��ţ�����Ϊֹͣ
    img.src = AEW.getPath() + "img/stop.gif";
    img.title = "ֹͣ";
    document.getElementById("divDvSwf" + img.div.dvSuf).innerHTML = img.swfHTML;
    document.getElementById("divDvImg" + img.div.dvSuf).style.display = "none";
    document.getElementById("divDvSwf" + img.div.dvSuf).style.display = "block";
  } else {
    img.src = AEW.getPath() + "img/play.gif";
    img.title = "����";
    document.getElementById("divDvImg" + img.div.dvSuf).style.display = "block";
    document.getElementById("divDvSwf" + img.div.dvSuf).style.display = "none";
    document.getElementById("embedDv" + img.div.dvSuf).clearAttributes();
    document.getElementById("divDvSwf" + img.div.dvSuf).innerHTML = "";
  }
}