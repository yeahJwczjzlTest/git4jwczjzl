/**
 * Created by u._.u on 2016/12/21.
 */
$(document).ready(function () {
    $("#selected-plays>li").addClass("horizontal");
    $("#selected-plays li:not(.horizontal)").addClass("sub-level");
    $('a[href^="mailto:"]').addClass('mailto');
    $('a[href$=".pdf"]').addClass('pdflink');
    $('a[href^="http"][href*="henry"]').addClass('henrylink');
    $('tr:nth-child(odd)').addClass('alt');
    // $('tr:contains(Henry)').addClass('highlight');
    $('a').filter(function () {
        return this.hostname && this.hostname != location.hostname;
    }).addClass('external');
    $('td:contains(Henry)').next().addClass('highlight');
    $('#xxx tr').find('td:eq(2)').addClass('year');
});