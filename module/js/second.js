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
  tp.speed = 50;//ÿ50msƫ��һ��
  tp.div = div;
  tp.div1 = div1;
  tp.div2 = div2;
  tp.div2.innerHTML = tp.div1.innerHTML;
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
  lft.speed = 50;//ÿ50msƫ��һ��
  lft.div = div;
  lft.div1 = div1;
  lft.div2 = div2;
  lft.div2.innerHTML = lft.div1.innerHTML;
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
  rht.div2.innerHTML = rht.div1.innerHTML;
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
