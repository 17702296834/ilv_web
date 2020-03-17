<%@ page contentType="text/html; charset=GBK" %>
<%@ page import="java.io.BufferedOutputStream" %>
<%@ page import="java.io.File" %>
<%@ page import="java.io.FileOutputStream" %>
<%@ page import="java.io.IOException" %>
<%@ page import="java.util.ArrayList" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.util.Hashtable" %>
<%@ page import="javax.servlet.ServletInputStream" %>
<%@ page import="javax.servlet.http.HttpServletRequest" %>
<%@ page import="javax.servlet.http.HttpServletResponse" %>
<%@ page import="java.text.SimpleDateFormat" %>
<script type=text/javascript>
<!--
//alert("AEE/upload.jsp");
//-->
</script>
<%! //�������
/*********************************************************************************************************************
 * <br>���ƣ�getStrInput
 * <br>����: ��
 * <br>����ʱ�䣺2011��04��12��23ʱ39��
 * <br>����Ŀ�ģ����Գ���ʱ���۲��������ľ������ݣ�ǿ�ҽ�����Ե������ļ�ʹ���ı��ļ���������ˡ�
 * <br>�޸��ĵã�request.getInputStreamֻ��ʹ��һ�Σ���������IOException���������ܺ�processͬʱʹ��
 * <br>���֪ʶ��getInputStream()��getReader()����Ҳ����ͬʱʹ�ã������Ƕ�ֻ��ʹ��һ�Ρ�
 * <br>���ܣ�����ʱ���۲�JSP��request���������������ݡ�
*********************************************************************************************************************/
//����������Ϣ
public String getStrInput(HttpServletRequest req, HttpServletResponse res){
String strInput = ""; //������Ϣ
String msg = "<br><strong>The msg is :</strong><br>"; //��ʼ����Ϣ
int BUFSIZE = 1024*8;
try { //����������
  ServletInputStream sis = req.getInputStream();
  int rtnPos = 0;
  byte[] buffs = new byte[BUFSIZE * 8];
  while((rtnPos = sis.readLine(buffs, 0, buffs.length)) != -1){
    String strBuff = new String(buffs, 0, rtnPos);
    strInput += strBuff;
  }
} catch (IOException ex) {
  msg += ex.toString() + "<br>";
}
System.out.println(strInput + msg);
return strInput + msg;
}
//���ָ����ַ���������ļ�����������չ��
private String getFileName(String input){
   int fIndex = input.lastIndexOf("\\");
   if (fIndex == -1) {
       fIndex = input.lastIndexOf("/");
       if (fIndex == -1) {
           return input;
       }
   }

   input = input.substring(fIndex + 1);
   return input;
}
//���ļ�����ʱ�������ֹ�����ظ���ʱ���(this.timeID)�ڹ��캯�����Ѿ���ʼ��
private String getFileNameByTime(String input){
 //��ʼ��ʱ���
 Date dt = new Date();
 SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmssSSS");
 int index = input.indexOf(".");
 return input.substring(0,index) + sdf.format(dt) + input.substring(index);
}
//���ָ�����ƵĲ���ֵ�����ж��ֵ����ȡ��һ��ֵ
public String getParameter(Hashtable<String,ArrayList> prms,String name){
   String value = "";
   if ( name == null || name.trim().length() == 0 )
     return value; //�������������Ϊnull����������ɿ��ַ���ɣ��򷵻�һ������Ϊ0���ַ���
   value = (prms.get(name) == null)?"":(String)((ArrayList)prms.get(name)).get(0);
   return value;
}
//���ָ�����ƵĲ���ֵ���У�����һ���ַ�����
public String[] getParameters(Hashtable<String,ArrayList> prms,String name){
   if ( name == null || name.trim().length() == 0 )
       return null;
   if ( prms.get(name) == null )
       return null;
   ArrayList al = (ArrayList)prms.get(name);
   String[] strArr = new String[al.size()];
   for ( int i=0;i<al.size();i++ )
       strArr[i] = (String)al.get(i);
   return strArr;
}
/*********************************************************************************************************************
 * <br>�������ƣ�getPrms
 * <br>�������: ������Ӧ���ϴ�Ŀ¼
 * <br>����ʱ�䣺2010��04��13��10ʱ47��
 * <br>��Ҫ���ܣ���ȡform�еĲ�������ֵ��������Ҫ���ص��ļ������������
*********************************************************************************************************************/
Hashtable<String,ArrayList> getPrms(HttpServletRequest request,HttpServletResponse response,String uploadPath) { //��ʼ��������Ϣ
//ȫ����Ϣ
//��ʼ������ɢ��<prmnm,prmvls>
Hashtable<String,ArrayList> prms = new Hashtable<String,ArrayList>();
int BUFSIZE = 1024 * 8; //ÿ�ζ�ȡ���ֽڴ�С

//������Ϣ
String err = "";
String msg = "";
//���������ַ�����Ϣ
String strInput = "";

try{ //�ų��쳣
  //��ʼ����ʱ����
  String prmnm = null; //������
  String prmvl = null; //����ֵ
  String filnm = null; //�ļ���
  ArrayList prmvls = null; //����ֵ�б�
  ArrayList filnms = null; //�ļ����б�
  File tmpFile = null; //��ʱ�ļ�
  FileOutputStream baos = null; //�ļ������
  BufferedOutputStream bos = null; //���������

  //��������Ϣ
  int rtnPos = 0; //���������ж������ֽ���
  byte[] buffs = new byte[BUFSIZE * 8]; //�ֽڻ�����

  //�ָ��
  String contentType = request.getContentType(); // ȡ��ContentType
  if(contentType == null){ //���������Ͳ����ڣ���ֱ�ӷ���
    return prms;
  }
  int index = contentType.indexOf("boundary="); //��÷ָ��������
  String boundary = "--" + contentType.substring(index + 9); //�õ�������ʼ��־
  String endBoundary = boundary + "--"; //�õ�����������־
  ServletInputStream sis = request.getInputStream(); //��request������ȡ������

  //ѭ����ȡ
  while ((rtnPos = sis.readLine(buffs, 0, buffs.length)) != -1) { //ѭ����ȡ��ÿ�ζ�ȡ1��
    String strBuff = new String(buffs, 0, rtnPos); //��õ�һ�е��ַ���
    if (strBuff.startsWith(boundary)) { //����ǲ�����ʼ��־

      //�����һ����δ�رգ���ر�
      if (prmnm != null && prmnm.trim().length() > 0) { //��������Ϊ�գ��Ҳ����ɿ��ַ����

        //����������ļ���Ϣ
        if (filnm == null) { //�����һ��������ļ���Ϊ�գ�
          prmvls = prms.get(prmnm); //��ͼȡ�����ƶ�Ӧ�Ĳ���ֵ�б�
          if(prmvls == null) prmvls = new ArrayList(); //�������ڣ��򴴽��µ�
          prmvls.add(prmvl); //��Ӳ���ֵ
          prms.put(prmnm,prmvls); //�����º�Ĳ���ֵ�б���뵽ɢ����
        } else if ( filnm.trim().length() == 0 ){ //����ļ����ɿհ��ַ����
          filnm = ""; //���ļ����ÿգ���һ��ֵ�ڿ�ʼ��־��Ӧ���Ѿ����
          filnms = prms.get(prmnm); //��ͼȡ����������Ӧ���ļ���ַ�б�
          if(filnms == null) filnms = new ArrayList(); //�������ڣ��򴴽��µ�
          filnms.add(filnm); //����µ��ļ���
          prms.put(prmnm,filnms); //�����º���ļ����б���뵽ɢ����
        } else { //�����ļ�,��ֱ�ӽ��ļ��������б��ٴ���ɢ��
          filnms = prms.get(prmnm); //��ͼȡ����������Ӧ���ļ���ַ�б�
          if(filnms == null) filnms = new ArrayList(); //�������ڣ��򴴽��µ�
          filnms.add(filnm); //����µ��ļ���
          prms.put(prmnm,filnms); //�����º���ļ����б���뵽ɢ����
          //�ر���
          bos.flush();
          baos.close();
          bos.close();
        } //�ļ����Ƿ�����жϽ���

        //��ʼ����ʱ����
        prmnm = null; //������
        prmvl = null; //����ֵ
        filnm = null; //�ļ���
        prmvls = null; //����ֵ�б�
        filnms = null; //�ļ����б�
        tmpFile = null; //��ʱ�ļ�
        baos = null; //�ļ������
        bos = null; //���������
      } //�ر���һ��������

      rtnPos = sis.readLine(buffs, 0, buffs.length); //��ʼ��ȡ������ʼ�������Ϣ
      if (rtnPos == -1){ //���û�ж������������һѭ��
        continue; //������һѭ��
      }
      strBuff = new String(buffs, 0, rtnPos); //�õ��ַ�������������Ϣ
      if (!strBuff.toLowerCase().startsWith("content-disposition: form-data; ")) { //�������form���ݣ��������һѭ��
        continue;
      }

      //��ȡ����������ʼ������ֵ
       int nIndex = strBuff.toLowerCase().indexOf("name=\""); //��������ʼ����
       int nLastIndex = strBuff.toLowerCase().indexOf("\"", nIndex + 6); //��������������
       if (nIndex != -1 && nLastIndex != -1) { //���������Ч
         prmnm = strBuff.substring(nIndex + 6, nLastIndex); //��ò����� name = input_file
       } else { //���û�еõ���������������һѭ��
         continue;
       }
       prmvl = ""; //��ʼ������ֵ

       //��ȡ�ļ���
       int fIndex = strBuff.toLowerCase().indexOf("filename=\""); //��ȡ�ļ���������
       int fLastIndex = strBuff.toLowerCase().indexOf("\"", fIndex + 10); //�õ��ļ�����β����
       if (fIndex != -1 && fLastIndex != -1) {
         filnm = strBuff.substring(fIndex + 10, fLastIndex); //��ȡ�ļ��� D:\JSP-ACS\aaa.txt
         if (filnm.trim().length() != 0) { //����ļ��������ɿհ��ַ���ɣ������ʱ���
           filnm = this.getFileName(filnm); //��ȡ�ļ������� aaa.txt
           filnm = "/" + this.getFileNameByTime(filnm) + "aaaa"; //�ļ�������ʱ���
           //��ʼ���ļ���
           //filnm = uploadPath + "/" + filnm; //����ϴ���ַ
           tmpFile = new File(uploadPath); //�ɽű���ȷ���ļ���λ��
           baos = new FileOutputStream(tmpFile);
           bos = new BufferedOutputStream(baos);
         }
       }
       if (filnm != null) { //������ļ�
         rtnPos = sis.readLine(buffs, 0, buffs.length); //����һ���ļ����ͣ�Content-Type: text/plain
         strBuff = new String(buffs, 0, rtnPos);
       }
       rtnPos = sis.readLine(buffs, 0, buffs.length); //����һ�пհ�
       strBuff = new String(buffs, 0, rtnPos);

    } else if (strBuff.startsWith(endBoundary)) { //����ǲ���������־

      //����������ļ���Ϣ
      if (filnm == null) { //�����һ��������ļ���Ϊ�գ�
        prmvls = prms.get(prmnm); //��ͼȡ�����ƶ�Ӧ�Ĳ���ֵ�б�
        if(prmvls == null) prmvls = new ArrayList(); //�������ڣ��򴴽��µ�
        prmvls.add(prmvl); //��Ӳ���ֵ
        prms.put(prmnm,prmvls); //�����º�Ĳ���ֵ�б���뵽ɢ����
      } else if ( filnm.trim().length() == 0 ){ //����ļ����ɿհ��ַ����
        filnm = ""; //���ļ����ÿգ���һ��ֵ�ڿ�ʼ��־��Ӧ���Ѿ����
        filnms = prms.get(prmnm); //��ͼȡ����������Ӧ���ļ���ַ�б�
        if(filnms == null) filnms = new ArrayList(); //�������ڣ��򴴽��µ�
        filnms.add(filnm); //����µ��ļ���
        prms.put(prmnm,filnms); //�����º���ļ����б���뵽ɢ����
      } else { //�����ļ�,��ֱ�ӽ��ļ��������б��ٴ���ɢ��
        filnms = prms.get(prmnm); //��ͼȡ����������Ӧ���ļ���ַ�б�
        if(filnms == null) filnms = new ArrayList(); //�������ڣ��򴴽��µ�
        filnms.add(filnm); //����µ��ļ���
        prms.put(prmnm,filnms); //�����º���ļ����б���뵽ɢ����
        //�ر���
        bos.flush();
        baos.close();
        bos.close();
      } //�ļ����Ƿ�����жϽ���

      //��ʼ����ʱ����
      prmnm = null; //������
      prmvl = null; //����ֵ
      filnm = null; //�ļ���
      prmvls = null; //����ֵ�б�
      filnms = null; //�ļ����б�
      tmpFile = null; //��ʱ�ļ�
      baos = null; //�ļ������
      bos = null; //���������
    } else { //����ǲ��������ݲ���
      if ( prmnm == null ) { continue; } //���������Ϊ�գ���ת����һѭ��
      if ( filnm == null ) { //�����һ�����
        System.out.println("test :" + prmvl + "--" + strBuff);
        prmvl = prmvl + strBuff; //�ۼ��ַ���
      } else if ( filnm.trim().length() == 0 ) { //����ļ����ɿհ��ַ���ɣ��������һѭ��
        continue; //����Ӧ��Ϊ�հף���ֱ������
      } else { //������һ���ļ�
        bos.write(buffs, 0, rtnPos); //д���ļ�
        baos.flush();
      } //�ж��Ƿ�Ϊ�ļ�����

    } //�жϱ�־����

  } //ѭ����ȡ����

} catch (IOException e) { //��׽IO�쳣
  err = "Fil.process() IOException:" + e.toString() + "<br>";
  System.out.println(err); //�������������������Ϣ
} //�ų��쳣����
return prms;
} //����init����

%>
<%
String htmAll = "";//��Ҫ��ʾ������
//���������ϴ����ļ���չ��
String extarr = "gif,jpg,png,bmp,swf,mp3,wmv";
String ext_arr[] = extarr.split(",");
//����ļ���С
int max_size = 10000000;
String uploadPath = "";
uploadPath = request.getParameter("AEE_uploadFinally");
Hashtable<String,ArrayList> prms = getPrms(request,response,uploadPath); //���˾��Ѿ����ļ��ϴ�����
out.println("uploadPath:" + uploadPath + "<br>");
%>
<%
//out.println(getStrInput(request,response));
//out.println(prms.get("AEE_uploadPath"));
%>
