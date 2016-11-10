/**
 * Created by SvenWeng on 16/2/28.
 */
function montharr(m0, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11) {
    this[0] = m0;
    this[1] = m1;
    this[2] = m2;
    this[3] = m3;
    this[4] = m4;
    this[5] = m5;
    this[6] = m6;
    this[7] = m7;
    this[8] = m8;
    this[9] = m9;
    this[10] = m10;
    this[11] = m11;
}
function calendar() {
    var monthNames = "JanFebMarAprMayJunJulAugSepOctNovDec";
    var today = new Date();
    var thisDay;
    var monthDays = new montharr(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
    year = today.getYear();
    thisDay = today.getDate();
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) monthDays[1] = 29;
    nDays = monthDays[today.getMonth()];
    firstDay = today;
    firstDay.setDate(1); // works fine for most systems
    testMe = firstDay.getDate();
    if (testMe == 2) firstDay.setDate(0);
    startDay = firstDay.getDay();
    document.write('<table border="0" width="100%" cellspacing="0" cellpadding="2" align="CENTER" bgcolor="#0080FF">');
    document.write('<TR><TD align="center">');
    document.write('<table border="0" width="100%" cellspacing="1" cellpadding="2" bgcolor="Silver">');
    document.write('<tr><th colspan="7" bgcolor="#C8E3FF">');
    var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var monthNames = new Array("一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月");
    var now = new Date();
    document.write('<font class="today">' + today.getFullYear() + "&nbsp;" + monthNames[now.getMonth()] + now.getDate() + "日&nbsp;" + dayNames[now.getDay()] + "</FONT>");
    document.write('</TH></TR><TR><TH class="thead">日</FONT></TH>');
    document.write('<TH class="thead">一</TH>');
    document.write('<TH class="thead">二</TH>');
    document.write('<TH class="thead">三</TH>');
    document.write('<TH class="thead">四</TH>');
    document.write('<TH class="thead">五</TH>');
    document.write('<TH class="thead">六</TH>');
    document.write("</TR><TR>");
    column = 0;
    if (startDay > 0) {
        document.write('<td colspan="' + startDay + '" bgcolor="#ffffff"></td>')
    }
    column += startDay;
    for (i = 1; i <= nDays; i++) {
        if (i == thisDay) {
            document.write('</TD><td align="CENTER" bgcolor="#76d2c5"><FONT class="whiteword"><B>')
        }
        else {
            document.write('</TD><TD BGCOLOR="#FFFFFF" ALIGN="CENTER"><FONT class="nday">');
        }
        document.write(i);
        if (i == thisDay) document.write("</FONT></TD>")
        column++;
        if (column == 7) {
            document.write("<TR>");
            column = 0;
        }
    }
    if (column < 7) {
        document.write('<td colspan="' + (7 - column) + '" bgcolor="#ffffff"></td>');
    }
    //document.write('<TR><td colspan="3" align="right" valign="bottom">');
    //document.write('<font class="whiteword"><b>现在时间</b></font></td><td valign="bottom" colspan="4">');
    document.write('<div id="clock" class="clock"></div>');
    document.write('</TD></TR></TABLE></TD></TR></TABLE>');
}