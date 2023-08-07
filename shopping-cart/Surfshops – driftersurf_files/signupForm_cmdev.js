var CM_BASE_SITE_URL = "https://live.dev.apps-market.cm/shopifyApp/";
//var CM_BASE_SITE_URL = "https://6daa259d.ngrok.io/"

function cmApp_signup_writeCookie(var1, val1)
{
    document.cookie = var1 + "=" + encodeURIComponent(val1) + "; path=/";
}
function cmApp_signup_removeCookie(var1)
{
    document.cookie = var1 + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/";
}

function cmApp_signup_readCookie(var1)
{
    var nameEQ = var1 + "=";
    var cookieAr = document.cookie.split(';');
    for (var i = 0; i < cookieAr.length; i++) {
        var curCookie = cookieAr[i].trim();
        if (curCookie.indexOf(nameEQ) == 0) {
            return decodeURIComponent(curCookie.substring(nameEQ.length, curCookie.length));
        }
    }
    return "";
}

function cmApp_passFormVars()
{

    if (typeof __st === 'undefined') {
        return "";
    }

    if (typeof __st.p === 'undefined') {
        return "";
    }


    if (__st.p == "home") {
        return "&" + "isHome=1";
    }
    else {
        if (__st.p == "collection") {
            return "&" + "isCollection=1";
        }
        else {
            if (__st.p == "product") {
                return "&" + "isProduct=1";
            }
            else {
                if (__st.p == "page") {
                    if (typeof __st.rid === 'undefined') {
                        return "";
                    }
                    if (__st.rid.length < 1) {
                        return "";
                    }

                    return "&" + "pageId=" + encodeURIComponent(__st.rid);
                }
            }
        }
    }
    return ""; // send no extra vars, will only show "all pages" forms
}

function cmApp_validateEmail(email)
{
    // simple test to determine that there are character(s), the @ symbol, character(s), period, character(s)
    // this will still allow some invalid emails (ex: "a@a@.a"), these can be checked by campaign monitor.
    var emailReg = /^[^\s]+@[^\s@]+\.[^\s@]+$/;
    return emailReg.test(email);
}

function cmApp_validateDOB()
{
    var dobNode = $("#cmApp_signupDateOfBirth");
    if (dobNode.length == 0){ // there is no date of birth field in the form. no error.
        return true;
    }

    var dob = dobNode.val();
    if (dob.length == 0){ // date of birth field is blank. it is not required, so there is no error.
        return true;
    }


    dob = dob.replace(/\/|-| |\.|,/g, '-');
    var dateAR=dob.split("-");
    if (dateAR.length!=3)
    { // there should be 3 values: day, month, and year. Otherwise there is a date error.
        return false;
    }

    // Parse the date parts to integers
    var day = parseInt(dateAR[1]);
    var month = parseInt(dateAR[0]);
    var year = parseInt(dateAR[2]);


    if(isNaN(day) || isNaN(month) || isNaN(year)) {
        // day, month, or year is not a numeric.
        return false;
    }

    var currentYear=new Date().getFullYear();

    // Check the ranges of month and year
    if (year < 1900 || year > currentYear || month == 0 || month > 12) {
        // the month or year is invalid
        return false;
    }

    var monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Adjust for leap years
    if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
        monthLength[1] = 29;
    }

    // Check the range of the day
    if (day <= 0 || day > monthLength[month - 1]) {
        // the number of days is not valid for the specified month.
        return false;
    }

    return true;
}

function cmApp_submitForm()
{
    var signupContainerElem=$("#cmApp_signupContainer");

    var errorElem = $("#cmApp_emailError");
    var errorElemDOB = $("#cmApp_dobError");
    var formElem = signupContainerElem.find("form");
    var processingMsgElem = signupContainerElem.find("div.cmApp_processingMsg");
    var successMsgElem = signupContainerElem.find("div.cmApp_successMsg");


    formElem.hide();
    errorElem.html("").hide();
    errorElemDOB.html("").hide();
    successMsgElem.hide();

    cmApp_showProcessing();


    var email = $("#cmApp_signupEmail").val();
    var errorMsg = "";
    if (email.length < 1) {
        errorMsg = "Email address is required";
    }
    else {
        if (!cmApp_validateEmail(email)) {
            errorMsg = "Email address is invalid";
        }
    }

    if (errorMsg.length > 0 ) {
        cmApp_hideProcessing();
        formElem.show();
        errorElem.html(errorMsg).slideDown(200);
        successMsgElem.hide();
        //return false;
    }

    var errorMsgDOB="";

    if (cmApp_validateDOB() == true){
        //errorMsgDOB = "";
    } else {
        //console.log("DOB NOT valid");
        errorMsgDOB = "Please enter a valid date (MM/DD/YYYY)";
        cmApp_hideProcessing();
        formElem.show();
        errorElemDOB.html(errorMsgDOB).slideDown(200);
        successMsgElem.hide();
        //return false;
    }

    if (errorMsg.length > 0 || errorMsgDOB.length>0)
    {
        return false;
    }


    var url = CM_BASE_SITE_URL + "ajax/signup_form_process.php";

    $.ajax({
        url: url,
        method: "post",
        data: formElem.serialize(),
        dataType: "text"
    }).done(function (returnHtml) {
        var signupContainerElem = $("#cmApp_signupContainer");

        var cmFormHeader = signupContainerElem.find(".cmApp_formHeader");
        var cmFormSubHeader = signupContainerElem.find(".cmApp_formSubHeader");
        var errorElem = $("#cmApp_emailError");
        var errorElemDOB = $("#cmApp_dobError");
        var formElem = signupContainerElem.find("form");
        var processingMsgElem = signupContainerElem.find(".cmApp_processingMsg");
        var successMsgElem = signupContainerElem.find(".cmApp_successMsg");
        var cmLogo = signupContainerElem.find(".cmApp_logo");

        cmApp_hideProcessing();
        if (returnHtml.substring(0, 8) == "success:") {
            cmFormHeader.hide();
            cmFormSubHeader.hide();
            formElem.hide();
            showSuccess();

            errorElem.hide();
            errorElemDOB.hide();
            cmLogo.hide();
            successMsgElem.show();
            return true;
        }
        if (returnHtml.substring(0, 6) == "error:") {
            var theError = returnHtml.substring(6);
        } else {
            var theError = "Email Address not added. Please try again.";
        }
        formElem.show();
        errorElem.html(theError).delay(100).slideDown(200);
        successMsgElem.hide();
        return false;

    }).fail(function (xhr, textStatus, errorThrown) {
        var signupContainerElem = $("#cmApp_signupContainer");

        var errorElem = $("#cmApp_emailError");
        var errorElemDOB = $("#cmApp_dobError");
        var formElem = signupContainerElem.find("form");
        var processingMsgElem = signupContainerElem.find(".cmApp_processingMsg");
        var successMsgElem = signupContainerElem.find("div.cmApp_successMsg");

        var theError = "Email address not added. Please try again.";
        cmApp_hideProcessing();
        formElem.show();
        errorElem.html(theError).slideDown(200);
        successMsgElem.hide();
        return false;
        //alert("fail!");
        //alert(JSON.stringify(xhr));
        //alert(textStatus);
        //alert(JSON.stringify(errorThrown));
    });
}


function cmApp_showProcessing() {
    var statusContainer = document.getElementById('cmApp_statusContainer');
    var processingElem  = statusContainer.querySelector('.cmApp_processingMsg');

    statusContainer.classList.add('cmApp_processing');
    statusContainer.classList.remove('cmApp_hidden');
}

function cmApp_hideProcessing() {
    var statusContainer = document.getElementById('cmApp_statusContainer');
    var processingElem  = statusContainer.querySelector('.cmApp_processingMsg');

    statusContainer.classList.remove('cmApp_processing');
    statusContainer.classList.add('cmApp_hidden');
}

function showSuccess() {
    var statusContainer = document.getElementById('cmApp_statusContainer');
    var processingElem  = statusContainer.querySelector('.cmApp_processingMsg');

    statusContainer.classList.remove('cmApp_hidden');
    statusContainer.classList.remove('cmApp_processing');
}

function cmApp_showError() {
    var statusContainer = document.getElementById('cmApp_statusContainer');
}


let cmApp_formIsDisplayed=0;
let cmApp_element='';
let cmApp_formType='';

function cmApp_initForm(forceLoadForm)
{
    // cmApp_formType = $('#cmApp_formType').val();
    // cmApp_element

    if (cmApp_formIsDisplayed)
    {
        return false;
    }

    if (cmApp_formType=="lightbox" && !forceLoadForm)
    {
        var percentScroll=0;

        var elem=$('#lightboxSeconds');
        if (elem.length>0)
        {
            var delaySeconds=parseInt(elem.val());
            if (delaySeconds>0)
            {
                //alert("load form in "+delaySeconds+" sec");
                setTimeout(function(){ cmApp_initForm(1); }, (delaySeconds*1000));
                return false;
            }
        }

        var elem=$('#lightboxScrollPercent');
        if (elem.length>0)
        {
            var percentScroll=parseInt(elem.val());
            if (percentScroll>0)
            {
                //alert("load form in "+percentScroll+" % scroll");
                $(document).bind("scroll", { percentScroll:percentScroll  }, function(event){
                    var wintop = $(window).scrollTop();
                    var docheight = $(document).height();
                    var winheight = $(window).height();
                    var  scrolltrigger = event.data.percentScroll/100;
                    //alert((wintop/(docheight-winheight))+" > "+(scrolltrigger));
                    if  ((wintop/(docheight-winheight)) > scrolltrigger)
                    {
                        cmApp_initForm(1);
                    }
                });
                return false;
            }
        }
    }




    var campaignMonitorFormId = $("#cmApp_FormId").val();
    var campaignMonitorViewedIds = cmApp_signup_readCookie("campaignMonitorViewedIds");

    // get jQuery reference to form
    var el = $('#' + cmApp_element);

    cmApp_formIsDisplayed=1;

    // add form id to cookie
    if (campaignMonitorFormId) {
        if (campaignMonitorViewedIds.indexOf("(" + campaignMonitorFormId + ")") < 0) {
            cmApp_signup_writeCookie("campaignMonitorViewedIds",
                campaignMonitorViewedIds + "(" + campaignMonitorFormId + ")");
        }
    }


    if (cmApp_formType == 'lightbox') {
        cmApp_lightboxForm(el);
    } else {
        if (cmApp_formType == 'slideoutTab') {
            cmApp_slideoutForm(el);
        } else {
            if (cmApp_formType == 'embedded') {
                cmApp_embedForm(el);
            } else {
                el.removeClass('cmApp_hidden');
            }
        }
    }
    

    // bind close button click handler
    el.find('.cmApp_closeFormButton').on('click', function (event)
    {
        event.preventDefault();
        cmApp_closeForm(cmApp_element);
    });

    // bind submit handler
    el.on('submit', function (event)
    {
        event.preventDefault();
        cmApp_submitForm();
    });

    

}

function cmApp_closeForm(element)
{
    var modalBackground = $('#cmApp_modalBackground');
    element = $('#' + element);
    modalBackground.fadeOut();
    element.addClass('cmApp_hidden');
}

function cmApp_embedForm(el)
{
    var markup = el.html();

    var main = $('.cmApp_embedFormContainer').first();

    if (main.length >= 0)
    {
        $('.cmApp_embedFormContainer').css("display","block");
    }
    else {
        var main = $('main').first();

        if (main.length < 1) {
            main = $('[role="main"]').first();
        }
    }
    
    if (main.length >= 1) {
        el.appendTo(main);
    }
    el.removeClass('cmApp_hidden');
}

function cmApp_lightboxForm(el)
{
    cmApp_toggleModal();
    el.removeClass('cmApp_hidden');
}

function cmApp_slideoutForm(el)
{
    $('#cmApp_slideoutButton').on('click', function (event)
    {
        event.preventDefault();
        cmApp_toggleSlideout(el);
    });
}

function cmApp_toggleSlideout(el)
{
    if (el.is('.cmApp_hidden')) {
        el.removeClass('cmApp_hidden');
    } else {
        el.addClass('cmApp_hidden');
    }
}

function cmApp_toggleModal()
{
    var modal = $('#cmApp_modalBackground');
    if (modal.is('.cmApp_hidden')) {
        modal.removeClass('cmApp_hidden');
    } else {
        modal.addClass('cmApp_hidden');
    }

}

function initForm()
{
    var campaignMonitorPassVars = cmApp_passFormVars();

    if (campaignMonitorPassVars === false) {
        return false;
    }

    if (typeof Shopify.shop === 'undefined') {
        return false;
    }
    if (typeof Shopify.shop.length < 1) {
        return false;
    }
    var shopVal = Shopify.shop;

    var viewedFormVars = "";
    var campaignMonitorViewedIds = cmApp_signup_readCookie("campaignMonitorViewedIds");
    //alert("read cookie campaignMonitorViewedIds="+campaignMonitorViewedIds);
    if (campaignMonitorViewedIds.length > 0) {
        viewedFormVars += "&" + "viewedForms=" + encodeURIComponent(campaignMonitorViewedIds);
    }

    var url = CM_BASE_SITE_URL + "ajax/signup_form_html.php" + "?" + "shop=" + encodeURIComponent(
        shopVal) + viewedFormVars + campaignMonitorPassVars;

    $.ajax({
        url: url,
        //context: document.body,
        method: "get",
        dataType: "text"
    }).done(function (returnHtml) {
        if (returnHtml.length < 1) {
            return false;
        }

        cmApp_element = 'cmApp_signupContainer';

        if (document.getElementById(cmApp_element) == null) {
            $('body').append(returnHtml);
        }

        //$('html, body').animate({scrollTop: 0}, 200);
        cmApp_formType = $('#cmApp_formType').val();


        //cmApp_initForm(element, formType);
        cmApp_initForm(0);

    }).fail(function (xhr, textStatus, errorThrown) {
        //alert("fail!");
        //alert(JSON.stringify(xhr));
        //alert(textStatus);
        //alert(JSON.stringify(errorThrown));
    });
}

// Inject jQuery into the page in case the Shopify theme doesn't include it.
if (typeof $ === 'undefined') {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = false;
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
    document.head.appendChild(script);
    script.onload = initForm;
} else {
    initForm();
}
