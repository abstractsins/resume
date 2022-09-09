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

/* 1 -- SECTION REVEAL FUNCTION */
const dropdown = id => {
    let $section = $(`#${id}`);
    let $dropdowns = $('.dropdown');
    if ($section.hasClass('active') === false) {
        $section.css("display", "block");
        $section.addClass("active");
    } else if ($section.hasClass('active') === true) {
        $section.css("display", "none");
        $section.removeClass("active");
    }
}
/* END 1 -- SECTION REVEAL FUNCTION */

/* 2 -- CODEWARS API */
const url = 'https://www.codewars.com/api/v1/users/abstractsins';
const codewarsData = fetch(url).then(res=>res.json()).then(obj=>{
    $('#honor').append(obj.honor);
    $('#rank').append(obj.ranks.overall.name);
    $('#score').append(obj.ranks.overall.score);
    $('#completed').append(obj.codeChallenges.totalCompleted);
    $('.five').append(Object.keys(obj.ranks.languages).map(lang=>{
        if (lang==='javascript') return 'JavaScript';
        if (lang==='typescript') return 'TypeScript';
        if (lang==='sql') return 'SQL';
        if (lang==='powershell') return 'PowerShell';
        if (lang==='shell') return 'Bash Shell';
        if (lang==='kotlin') return 'Kotlin';
    }).join(', '));
    return obj;
}).catch(err=>{
    console.error('Something went wrong getting the information!');
    console.error(err)
})



/* END 2 -- CODEWARS API */



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