getbigdate = function(){
  var day="";
  var month="";
  var ampm="";
  var ampmhour="";
  var myweekday="";
  var year="";
  mydate=new Date();
  myweekday=mydate.getDay();
  mymonth=mydate.getMonth()+1;
  myday= mydate.getDate();
  myyear= mydate.getYear();
  year=(myyear > 200) ? myyear : 1900 + myyear;
  if(myweekday == 0)
  weekday=" ������ ";
  else if(myweekday == 1)
  weekday=" ����һ ";
  else if(myweekday == 2)
  weekday=" ���ڶ� ";
  else if(myweekday == 3)
  weekday=" ������ ";
  else if(myweekday == 4)
  weekday=" ������ ";
  else if(myweekday == 5)
  weekday=" ������ ";
  else if(myweekday == 6)
  weekday=" ������ ";
  //document.write(year+"��"+mymonth+"��"+myday+"�� "+weekday);
  //ת������
  bigyears = ["��","һ","��","��","��","��","��","��","��","��"];
  bigyear = "����һ" + bigyears[year-2010] + "��";
  bigmonths = ["һ","��","��","��","��","��","��","��","��","ʮ","ʮһ","ʮ��"];
  bigmonth = bigmonths[mydate.getMonth()] + "��";
  bigdays = [
  "һ","��","��","��","��","��","��","��","��","ʮ",
  "ʮһ","ʮ��","ʮ��","ʮ��","ʮ��","ʮ��","ʮ��","ʮ��","ʮ��","��ʮ",
  "��ʮһ","��ʮ��","��ʮ��","��ʮ��","��ʮ��","��ʮ��","��ʮ��","��ʮ��","��ʮ��","��ʮ",
  "��ʮһ"
  ];
  bigday = bigdays[mydate.getDate() - 1 ] + "��";
  bighour = mydate.getHours()>9 ? mydate.getHours() : "0"+mydate.getHours();
  bigminute = mydate.getMinutes() > 9 ? mydate.getMinutes() : "0" + mydate.getMinutes();
  bigsecond = mydate.getSeconds() >9 ? mydate.getSeconds() : "0" + mydate.getSeconds();
  bigtime = bighour + ":" + bigminute + ":" + bigsecond;
  htmdate = ""+bigyear+bigmonth+bigday+weekday+bigtime+"";
  return htmdate;
}
updatetime = function(dividnm){
  document.getElementById(dividnm).innerHTML = getbigdate();
  window.setTimeout("updatetime('"+dividnm+"')",1000);
}
