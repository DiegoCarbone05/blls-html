//<reference path="../../../../node_modules/@types/jquery/index.d.ts" />




jQuery(()=>{
    jQuery("button [title=\"Play Video\"]").attr("disabled","true");
    
    
    window.onresize = reportWindowSize;
    
    
    jQuery("#btnStream").on("click", ()=>{

        jQuery("#txtLive").attr("class","live-on");

        jQuery("#player").removeClass("hide");

        jQuery("#imgBanner").addClass("hide");
        
    })

    setTimeout(()=>{
        $('#btnModal').trigger("click");
    },3000)

    $("#volver").on("click", ()=>{

        location.href = "/meet-konnect";

    })

    
})


function reportWindowSize() {
    window.innerHeight;
    window.innerWidth;
}


function Ir(url:string){

    location.href=url;


} 



