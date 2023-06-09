"use strict";

function Grade(form) {

var RT  = new Array(0);
var RD  = new Array(0);
var CA  = new Array(4);

var NumOfQues = 4;
var UA  = new Array(4);
var GRe = new Array(4);

for (var j = 0; j < NumOfQues; j++) {
  UA[j] = 0;
  GRe[j] = "";
}

var NumOfAns  = 11;
var Re  = new Array(11);
for (var j = 0; j < NumOfAns; j++) {
  Re[j] = "";
}

var QueTxt  = new Array(4);
	QueTxt[0] = "*:3:<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1057;&#1086;&#1088;&#1077;&#1074;&#1085;&#1086;&#1074;&#1072;&#1085;&#1080;&#1103; &#1087;&#1088;&#1086;&#1074;&#1086;&#1076;&#1103;&#1090;&#1089;&#1103; &#1074; &#1089;&#1083;&#1077;&#1076;&#1091;&#1102;&#1097;&#1080;&#1093; &#1089;&#1087;&#1086;&#1088;&#1090;&#1080;&#1074;&#1085;&#1099;&#1093; &#1076;&#1080;&#1089;&#1094;&#1080;&#1087;&#1083;&#1080;&#1085;&#1072;&#1093;</span><br /></div>";
	QueTxt[1] = "*:3:<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1056;&#1077;&#1075;&#1083;&#1072;&#1084;&#1077;&#1085;&#1090;&#1099; &#1089;&#1086;&#1088;&#1077;&#1074;&#1085;&#1086;&#1074;&#1072;&#1085;&#1080;&#1081; </span><span style=\"font-family: Calibri; font-size: 11pt;\">I</span><span style=\"font-family: Calibri; font-size: 11pt;\"> &#1080; </span><span style=\"font-family: Calibri; font-size: 11pt;\">II</span><span style=\"font-family: Calibri; font-size: 11pt;\"> &#1082;&#1083;&#1072;&#1089;&#1089;&#1072; &#1088;&#1072;&#1079;&#1084;&#1077;&#1097;&#1072;&#1102;&#1090;&#1089;&#1103; &#1085;&#1072; &#1086;&#1092;&#1080;&#1094;&#1080;&#1072;&#1083;&#1100;&#1085;&#1086;&#1084; &#1089;&#1072;&#1081;&#1090;&#1077; &#1060;&#1077;&#1076;&#1077;&#1088;&#1072;&#1094;&#1080;&#1080; &#1085;&#1077; &#1087;&#1086;&#1079;&#1076;&#1085;&#1077;&#1077;, &#1095;&#1077;&#1084;</span><br /></div>";
	QueTxt[2] = "*:2:<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1058;&#1088;&#1077;&#1085;&#1077;&#1088;&#1099; &#1080; &#1087;&#1088;&#1077;&#1076;&#1089;&#1090;&#1072;&#1074;&#1080;&#1090;&#1077;&#1083;&#1080; &#1082;&#1086;&#1084;&#1072;&#1085;&#1076; &#1086;&#1073;&#1103;&#1079;&#1072;&#1085;&#1099; &#1087;&#1086;&#1076;&#1095;&#1080;&#1085;&#1103;&#1090;&#1100;&#1089;&#1103; &#1090;&#1088;&#1077;&#1073;&#1086;&#1074;&#1072;&#1085;&#1080;&#1103;&#1084; &#1089;&#1091;&#1076;&#1077;&#1081;, &#1085;&#1077; &#1074;&#1084;&#1077;&#1096;&#1080;&#1074;&#1072;&#1103;&#1089;&#1100; &#1074; &#1076;&#1077;&#1081;&#1089;&#1090;&#1074;&#1080;&#1103; &#1089;&#1091;&#1076;&#1077;&#1081;&#1089;&#1082;&#1086;&#1081; &#1082;&#1086;&#1083;&#1083;&#1077;&#1075;&#1080;&#1080;</span><br /></div>";
	QueTxt[3] = "*:3:<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1057;&#1091;&#1076;&#1100;&#1080; &#1089;&#1086;&#1088;&#1077;&#1074;&#1085;&#1086;&#1074;&#1072;&#1085;&#1080;&#1081; &#1084;&#1086;&#1075;&#1091;&#1090; &#1073;&#1099;&#1090;&#1100; &#1080;&#1093; &#1091;&#1095;&#1072;&#1089;&#1090;&#1085;&#1080;&#1082;&#1072;&#1084;&#1080; &#1080;&#1083;&#1080; &#1087;&#1088;&#1077;&#1076;&#1089;&#1090;&#1072;&#1074;&#1080;&#1090;&#1077;&#1083;&#1103;&#1084;&#1080;</span><br /></div>";

var AnswerTxt  = new Array(11);
	AnswerTxt[0] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1058;&#1088;&#1091;&#1076;&#1085;&#1086;&#1089;&#1090;&#1100;, &#1089;&#1082;&#1086;&#1088;&#1086;&#1089;&#1090;&#1100;, &#1073;&#1086;&#1083;&#1076;&#1077;&#1088;&#1080;&#1085;&#1075;</span><br /></div>";
	AnswerTxt[1] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1057;&#1082;&#1086;&#1088;&#1086;&#1089;&#1090;&#1100;, &#1076;&#1074;&#1086;&#1077;&#1073;&#1086;&#1088;&#1100;&#1077;</span><br /></div>";
	AnswerTxt[2] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1058;&#1088;&#1091;&#1076;&#1085;&#1086;&#1089;&#1090;&#1100;, &#1089;&#1082;&#1086;&#1088;&#1086;&#1089;&#1090;&#1100;, &#1073;&#1086;&#1083;&#1076;&#1077;&#1088;&#1080;&#1085;&#1075;, &#1076;&#1074;&#1086;&#1077;&#1073;&#1086;&#1088;&#1100;&#1077;</span><br /></div>";
	AnswerTxt[3] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">1 &#1084;&#1077;&#1089;&#1103;&#1094;</span><br /></div>";
	AnswerTxt[4] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">40 &#1076;&#1085;&#1077;&#1081;</span><br /></div>";
	AnswerTxt[5] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">2 &#1085;&#1077;&#1076;&#1077;&#1083;&#1080;</span><br /></div>";
	AnswerTxt[6] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1044;&#1072;</span><br /></div>";
	AnswerTxt[7] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1053;&#1077;&#1090;</span><br /></div>";
	AnswerTxt[8] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1044;&#1072;</span><br /></div>";
	AnswerTxt[9] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1053;&#1077;&#1090;</span><br /></div>";
	AnswerTxt[10] = "<div><span style=\"font-family: Calibri; font-size: 11pt;\">&#1044;&#1072;, &#1089; &#1088;&#1072;&#1079;&#1088;&#1077;&#1096;&#1077;&#1085;&#1080;&#1103; &#1075;&#1083;&#1072;&#1074;&#1085;&#1086;&#1075;&#1086; &#1089;&#1091;&#1076;&#1100;&#1080;</span><br /></div>";

var radioBtnCount  = 0;
var radioBtnCorrectCount = 0;

var QuesNum = 0;
var AnsNum = 0;

/* 
cycle ForEach(form.elements)
	count:   
		- radioBtnCount
		- radioBtnCorrectCount; 
	collect: 
		- CA[] - correct answers
		- UA[] - non correct answer;
*/
for (var i = 0; i < form.elements.length; i++) {
  //check name starts from 'As' -> it's start chars for answer element
  if (form.elements[i].name.substring(0, 2) == "As") {
     //count radio buttons & AnsNum++
	 if (QuesNum != form.elements[i].name.substring(2, form.elements[i].name.length)) {
       radioBtnCount++;
       QuesNum = form.elements[i].name.substring(2, form.elements[i].name.length);
       AnsNum = 1;
     } else {
       AnsNum++;
     }
	 //fill UA[] and count radioBtnCorrectCount
     if (form.elements[i].checked) {
        UA[QuesNum - 1] = AnsNum;
        if (form.elements[i].value == 1) {
          radioBtnCorrectCount++;
        }
     }
	 //fill CA[]
     if (form.elements[i].value == 1) {
       CA[QuesNum - 1] = AnsNum;
     }
  } else if (form.elements[i].name.substring(0, 2) == "TA") {
     QuesNum++;
     UA[QuesNum - 1] = form.elements[i].value;
  }

}

document.open();

document.writeln("<?xml version=\"1.0\" encoding=\"iso-8859-1\"?>");
document.writeln("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.1 plus MathML 2.0//EN\" \"http://www.w3.org/TR/MathML2/dtd/xhtml-math11-f.dtd\">");
document.writeln("<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">");
document.writeln("<head>");
document.writeln("<title>test Results</title></head>");
document.writeln("<body bgcolor=\"#FFFFFF\">");

var Results_As_Percentage = Math.round(100 * (radioBtnCorrectCount / radioBtnCount));

if (radioBtnCount != 0) {
  document.writeln("<table width=\"100%\" border=\"0\"><tr><td align=\"left\">");
  document.writeln("<font size=\"+2\"><b>" + Results_As_Percentage + "%</b></font> (" + radioBtnCorrectCount + " out of " + radioBtnCount + " correct)<br />");
  document.writeln("</td><td align=\"right\">");
  document.writeln("</td></tr></table><br /><br />");
}

var QuesPtr = 0;
var AnsPtr = 0;
var RefPtr = 0;
var RspPtr = 0;
var ColPos = 0;
var NxtColPos = 0;
var NumOfQuesAns = 0;
var AnswerLetter = "";

//cycle to create new document with questions and note right/not answers
for (QuesPtr = 0; QuesPtr < NumOfQues; QuesPtr++) {

  RspPtr = AnsPtr;
  NumOfQuesAns = 0;
  ColPos = QueTxt[QuesPtr].indexOf(":");
  RefPtr = QueTxt[QuesPtr].substring(0, ColPos);
  NxtColPos = QueTxt[QuesPtr].indexOf(":", ColPos + 1);
  NumOfQuesAns = QueTxt[QuesPtr].substring(ColPos + 1, NxtColPos);
  
  if (NumOfQuesAns > 1) {
    if (UA[QuesPtr] == CA[QuesPtr]) {
      document.writeln("<table border=\"0\" cellpadding=\"5\"><tr><td valign=\"top\"><img src=\"test2_files/correct.gif\" width=\"32\" height=\"32\" alt=\"CORRECT\" /></td><td valign=\"top\"><b>" + (QuesPtr + 1) + ".</b></td><td valign=\"top\"> ");
      if (RefPtr != "*") {
        document.writeln("<table border=\"1\" cellpadding=\"2\" cellspacing=\"1\">");
        document.writeln("<tr><td bgcolor=\"#D9D9D9\">" + RT[RefPtr - 1] + "</td></tr>");
        document.writeln("<tr><td bgcolor=\"#FFFFD7\"><small>R-" + RefPtr + " " + RD[RefPtr - 1] + "</small></td></tr>");
        document.writeln("</table><br /><br />");
      }
      document.writeln(QueTxt[QuesPtr].substring(NxtColPos + 1) + "<br />");
    } else {
      document.writeln("<table border=\"0\" cellpadding=\"5\"><tr><td valign=\"top\"><img src=\"test2_files/x.gif\" width=\"32\" height=\"32\" alt=\"WRONG\" /></td><td valign=\"top\"><b>" + (QuesPtr + 1) + ".</b></td><td valign=\"top\"> ");
      if (RefPtr != "*") {
        document.writeln("<table border=\"1\" cellpadding=\"2\" cellspacing=\"1\">");
        document.writeln("<tr><td bgcolor=\"#D9D9D9\">" + RT[RefPtr - 1] + "</td></tr>");
        document.writeln("<tr><td bgcolor=\"#FFFFD7\"><small>R-" + RefPtr + " " + RD[RefPtr - 1] + "</small></td></tr>");
        document.writeln("</table><br /><br />");
      }
      document.writeln(QueTxt[QuesPtr].substring(NxtColPos + 1));
    }
    for (var i = 1; i <= NumOfQuesAns; i++) {
      AnswerLetter = "%" + (40 + i);
      if (i == UA[QuesPtr]) {
        document.writeln("<table border=\"0\"><tr><td valign=\"top\" nowrap=\"nowrap\"><img src=\"test2_files/radioon.gif\" width=\"12\" height=\"12\" alt=\"X\" /> <b>" + unescape(AnswerLetter) + ".</b> </td><td valign=\"top\"> " + AnswerTxt[AnsPtr] + "</td></tr></table>");
      } else {
        if (i == CA[QuesPtr]) {
          document.writeln("<table border=\"0\"><tr><td valign=\"top\" nowrap=\"nowrap\"><img src=\"test2_files/radiocrt.gif\" width=\"12\" height=\"12\" alt=\"C\" /> <b>" + unescape(AnswerLetter) + ".</b> </td><td valign=\"top\"> " + AnswerTxt[AnsPtr] + "</td></tr></table>");
        } else {
          document.writeln("<table border=\"0\"><tr><td valign=\"top\" nowrap=\"nowrap\"><img src=\"test2_files/radiooff.gif\" width=\"12\" height=\"12\" alt=\"O\" /> <b>" + unescape(AnswerLetter) + ".</b> </td><td valign=\"top\"> " + AnswerTxt[AnsPtr] + "</td></tr></table>");
        }
      }
      AnsPtr++;
    }
    if (UA[QuesPtr] == 0) {
      if (GRe[QuesPtr] != "") {
        document.writeln("<br /><img src=\"test2_files/response.gif\" width=\"12\" height=\"15\" alt=\"FEEDBACK\" /> " + GRe[QuesPtr]);
      }
    } else {
      if (Re[RspPtr +  UA[QuesPtr] - 1] != "") {
        document.writeln("<br /><img src=\"test2_files/response.gif\" width=\"12\" height=\"15\" alt=\"FEEDBACK\" /> " + Re[RspPtr +  UA[QuesPtr] - 1]);
      } else if (GRe[QuesPtr] != "") {
        document.writeln("<br /><img src=\"test2_files/response.gif\" width=\"12\" height=\"15\" alt=\"FEEDBACK\" /> " + GRe[QuesPtr]);
      }
    }
  } else {
    document.writeln("<table border=\"0\"><tr><td valign=\"top\"><img src=\"test2_files/text.gif\" width=\"32\" height=\"32\" alt=\"TEXT\" /></td><td valign=\"top\"><font=\"+1\"><b>" + (QuesPtr + 1) + ".<b></font></td><td valign=\"top\"> " + QueTxt[QuesPtr].substring(NxtColPos + 1) + "<br /><br />");
    document.writeln("<font size=\"-2\">YOUR ANSWER:</font><b> " + UA[QuesPtr] + "</b><br />");
    if (GRe[QuesPtr] != "") {
      document.writeln("<br /><img src=\"test2_files/response.gif\" width=\"12\" height=\"15\" alt=\"FEEDBACK\" /> The suggested answer is <b>" + AnswerTxt[AnsPtr] + "</b> " + GRe[QuesPtr]);
    } else {
      document.writeln("<br /><img src=\"test2_files/response.gif\" width=\"12\" height=\"15\" alt=\"FEEDBACK\" /> The suggested answer is <b>" + AnswerTxt[AnsPtr] + "</b>");
    }
    AnsPtr++;
  }

  document.writeln("</td></tr></table><br /><br />");
}

if (navigator.appName == "Microsoft Internet Explorer") {
  if (navigator.appVersion.substring(0, 1) >= 4) {
    document.writeln("<p><a href=\"" + location.href + "\">Retake Test</a></p>");
  } else if (navigator.appVersion.substring(0, 1) >= 2) {
    document.writeln("<form><input type=\"button\" value=\"Retake Test\" onClick=\"history.go(0)\" /></form>");
  }
} else if (navigator.appName == "Netscape"){
  if (navigator.appVersion.substring(0, 1) >= 4) {
    document.writeln("<p><a href=\"" + location.href + "\">Retake Test</a></p>");
  } else if (navigator.appVersion.substring(0, 1) >= 3) {
    document.writeln("<p><a href=\"" + location.href + "\">Retake Test</a></p>");
  }
}
document.writeln("</body></html>");
if (radioBtnCount != 0) {
  confirm("The test has been graded.  You correctly answered " + Results_As_Percentage + "% of the questions.");
} else {
  confirm("The test has been graded. You may now review your answers.");
}
if (IncludeFinalClose())
  document.close();

}

function IncludeFinalClose() {

  var userAgent = navigator.userAgent.toLowerCase();
  var isAppleWebkit = (userAgent.indexOf("applewebkit/") != -1);

  return(!isAppleWebkit);
}