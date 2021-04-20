/// <reference path="../../../../node_modules/@types/jquery/index.d.ts" />
jQuery(function () {
    jQuery("button [title=\"Play Video\"]").attr("disabled", "true");
    window.onresize = reportWindowSize;
    jQuery("#btnStream").on("click", function () {
        jQuery("#txtLive").attr("class", "live-on");
        jQuery("#player").removeClass("hide");
        jQuery("#imgBanner").addClass("hide");
    });
    setTimeout(function () {
        $('#btnModal').trigger("click");
    }, 3000);
});
function reportWindowSize() {
    window.innerHeight;
    window.innerWidth;
}
function Ir(url) {
    location.href = url;
}
