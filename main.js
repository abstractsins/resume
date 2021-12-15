
/* 0 -- Up Button */
/* Function for Up-Button */
const upBtn = document.getElementById('upBtn');
const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For real browsers
	// $('.index-window').show();
}
const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upBtn.style.display = "flex";
    } else {
        upBtn.style.display = "none";
    }
}
window.onscroll = () => { scrollFunction() };
/* END 0 -- Up Button */

/* SECTION REVEAL FUNCTION */
const dropdown = id => {
    console.log(id);
    let $section = $(`#${id}`);
    console.log($section);
    let $dropdowns = $('.dropdown');
    console.log($dropdowns);
    if ($section.hasClass('active') === false) {
        $section.css("display", "block");
        $section.addClass("active");
    } else if ($section.hasClass('active') === true) {
        $section.css("display", "none");
        $section.removeClass("active");
    }
}
/* END SECTION REVEAL FUNCTION */


/* THIS SPACE INTENTIONALLY LEFT BLANK */
//
//
//
//
//
//
//
//
/* OK */

