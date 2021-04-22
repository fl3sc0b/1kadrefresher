
jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}

function lp() {
    var ret = "";
    $('.adlist-paginator-pageselected').each(function() {
        if ( $(this).text().indexOf("Sigu") >= 0 ) {
            ret = $(this);
            return false;
        }
    })
    return ret;
}

function nextpage() {
    if (lp() != "") {
        var win = window.open(lp().children().attr("href"));
        theScript = win.document.createElement('script');
        theScript.setAttribute('src', 'http://localhost/renovador/bot-min.js');
        theScript.setAttribute('type', 'text/javascript');
       
        setTimeout(function() {
            win.document.body.appendChild(theScript);
        }, 10000);
        
    } else {
        setTimeout(function() {
            alert("TERMINADO!!");
        }, 10000);
    }
}

function startbot() {
    var tot = 0;

    $(':regex(id,^re[0-9]+)').each(function(index) {
        var anuncioID = '#' + $(this).attr("id") + ' a';

        setTimeout(function() {
            $(anuncioID)[0].click();
        }, index*3000);
    
        setTimeout(function() {
            $('#ifrw').contents().find("a#lren")[0].click();
        }, index*3000 + 2000);

        tot++;

    });

    return tot;

}

var pause = startbot();
setTimeout(function() {
    nextpage();
}, pause*3000 + 4000);
