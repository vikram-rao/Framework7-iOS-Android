if (isAndroid) {
    $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    $$('.view .page').addClass('toolbar-fixed');
    $$('.view .navbar').prependTo('.view .page');
    $$('.view .toolbar').appendTo('.view .page');

    appProps["material"] = true;
    mainViewProps["dynamicNavbar"] = false;
}