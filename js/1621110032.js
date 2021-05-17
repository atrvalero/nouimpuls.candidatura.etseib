/*!
* Start Bootstrap - Resume v6.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
(function ($) {
    "use strict"; // Start of use strict

    $('.collapsed-menu').append('<div class="p-4 menu-color">\n' +
        '    <h4 style="color: #717171;">Coneix-nos  ·  #NouImpulsETSEIB <a class="js-scroll-trigger" style="margin-left: 3px;/*color:#1da1f2;*/" href="https://twitter.com/nouimpulsetseib" target="_blank">' +
        '    <i class="fab fa-twitter" style="color: #717171;"></i></a></span>  ·  <a href="./assets/programa.pdf" target="_blank"><i class="fas fa-download" style="color: #717171;"></i></a></h4>\n' +
        '    <a class="js-scroll-trigger" href="#candidatura">La Candidatura </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#equip">El nostre equip. Posa\'ns cara. </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#presentacio">Presentació </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#programa">Programa </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#propostaPID">Proposta del personal PDI </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#personalPAS">Personal PAS </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#propostesDocents">Propostes docents </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#recercaTransferencia">Recerca i Transferència de Tecnologia </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#relacioEmpreses">Relació amb les empreses </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#relacionsInternacionals">Relacions Internacionals </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#estudiantat">Estudiantat </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#infraestructures">Espais i infraestructures </a><span>|</span>\n' +
        '    <a class="js-scroll-trigger" href="#sentiment">Recuperar el sentiment de l\'escola </a>\n' +
        '</div>')

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var that = this;
            var target = $(that.hash);
            target = target.length ?
                target :
                $("[name=" + that.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - Math.max($("#navbarToggleExternalContent").height(), $("#menu-top").height() - 5),
                    duration: 1000,
                    easing: 'easeInOutExpo',
                    begin: function() {
                        $("#navbarToggleExternalContent").collapse("hide");
                        window.history.pushState("", "", that.href);
                    }
                });
                return false;
            }
        }
    });

    //fix for first load when menu is fixed and url has hash
    if ( "onhashchange" in window ) {
        var hashHandler = function(){
            var w = document.documentElement.clientWidth;
            var hash = window.location.hash.substring( 1 );
            if ( !hash || $("#menu-top").css('display') === 'none')
                return;

            var offset = parseInt($("#menu-top").height() - 5) * -1;
            var sel = '[id="' + hash + '"], a[name="' + hash + '"]';
            var currentOffset = $( sel ).offset().top;
            $( window ).scrollTop( currentOffset + offset );
        };
        window.addEventListener("hashchange", hashHandler, false);
        window.addEventListener("load", hashHandler, false);
    }
    window.onbeforeunload = hashHandler;

    new CanvasJS.Chart("persona-no-permanent", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        //exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Personal no permanent",
            fontSize: 15,
            fontFamily: 'calibri',
            fontWeight: 'lighter'
        },
        data: [{
            type: "pie",
            startAngle: 40,
            toolTipContent: "<b>{label}</b>: {y}%",
            //showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 12,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { label: "ETSEIB", y: 53 },
                { label: "FIB", y: 27 },
                { label: "ETSETB", y: 3 },
                { label: "EETAC", y: 30 },
                { label: "EPSEVG", y: 35 }
            ]
        }]
    }).render();

    new CanvasJS.Chart("ratio-estudiant-professorat", {
        animationEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Estudiant / Professorat",
            fontSize: 15,
            fontFamily: 'calibri',
            fontWeight: 'lighter'
        },
        axisY: {
            //suffix: "%"
        },
        data: [{
            type: "column",
            indexLabel: "{y}",
            indexLabelFontColor: "#EEEEEE",
            indexLabelPlacement: "inside",
            indexLabelFontSize: 12,
            dataPoints: [
                { label: "ETSEIB", y: 20.2 },
                { label: "FIB", y: 14.2 },
                { label: "ETSETB", y: 8.8 },
                { label: "EETAC", y: 13.7 },
                { label: "EPSEVG", y: 15.1 }

            ]
        }]
    }).render();
})(jQuery); // End of use strict
