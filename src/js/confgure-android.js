if (isAndroid) {
    $$('.view.navbar-through').removeClass('navbar-through').addClass('navbar-fixed');
    $$('.view .page').addClass('toolbar-fixed');
    appProps["material"] = true;
    mainViewProps["dynamicNavbar"] = false;
}