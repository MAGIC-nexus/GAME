<%@ include file="impaginazione/intestazione.jsp" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Frest admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, Frest admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="Eligesoft">
    <title>Dashboard | 93Street</title>
    <link rel="apple-touch-icon" href="app-assets/images/ico/apple-icon-120.png">
    <link rel="shortcut icon" type="image/x-icon" href="app-assets/images/ico/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,600%7CIBM+Plex+Sans:300,400,500,600,700" rel="stylesheet">

    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/vendors.min.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/charts/apexcharts.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/extensions/dragula.min.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/tables/datatable/datatables.min.css">
    <!-- END: Vendor CSS-->

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/components.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/themes/dark-layout.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/themes/semi-dark-layout.css">
    <!-- END: Theme CSS-->

    <!-- BEGIN: Page CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/css/core/menu/menu-types/horizontal-menu.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/pages/dashboard-analytics.css">
        <link rel="stylesheet" type="text/css" href="app-assets/css/pages/app-invoice.css">
    <!-- END: Page CSS-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <!-- END: Custom CSS-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body class="horizontal-layout horizontal-menu navbar-sticky 2-columns   footer-static  " data-open="hover" data-menu="horizontal-menu" data-col="2-columns">

    <!-- BEGIN: Header-->
    <nav class="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed bg-primary navbar-brand-center">
        <div class="navbar-header d-xl-block d-none">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item"><a class="navbar-brand" href="home.jsp">
                        <div class="brand-logo"></div>
                        <h2 class="brand-text mb-0">93Board</h2>
                    </a></li>
            </ul>
        </div>
        <div class="navbar-wrapper">
            <div class="navbar-container content">
                <div class="navbar-collapse" id="navbar-mobile">
                    <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                        <ul class="nav navbar-nav">
                            <li class="nav-item mobile-menu mr-auto"><a class="nav-link nav-menu-main menu-toggle" href="#"><i class="bx bx-menu"></i></a></li>
                        </ul>
                        
                        <ul class="nav navbar-nav">
                            <li class="nav-item d-none d-lg-block"><a class="nav-link bookmark-star"><i class="ficon bx bx-star warning"></i></a>
                                <div class="bookmark-input search-input">
                                    <div class="bookmark-input-icon"><i class="bx bx-search primary"></i></div>
                                    <input class="form-control input" type="text" placeholder="Cerca..." tabindex="0" data-search="template-list">
                                    <ul class="search-list"></ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <ul class="nav navbar-nav float-right d-flex align-items-center">
                         <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-expand"><i class="ficon bx bx-fullscreen"></i></a></li>
                        <li class="nav-item nav-search"><a class="nav-link nav-link-search pt-2"><i class="ficon bx bx-search"></i></a>
                            <div class="search-input">
                                <div class="search-input-icon"><i class="bx bx-search primary"></i></div>
                                <form method="post" action="Search.jsp">
                                <input class="input" name="Ordine" type="text" placeholder="Inserisci codice ordine..." tabindex="-1">
                               </form>
                                <div class="search-input-close"><i class="bx bx-x"></i></div>
                                <ul class="search-list"></ul>
                            </div>
                        </li>
                 
                        <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-expand" ><i class="ficon bx bx-fullscreen"></i></a></li>
                   <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                <div class="user-nav d-lg-flex d-none"><span class="user-name">Nexus</span><span class="user-status" id="nomeplayer"></span></div><span><img class="round" src="icon/avatar.jpg" alt="avatar" height="40" width="40"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right pb-0">
                            <a class="dropdown-item" href="auth-login.html"><i class="bx bx-power-off mr-50"></i> Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- END: Header-->

<!-- BEGIN: Main Menu-->
    <div class="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-light navbar-without-dd-arrow" role="navigation" data-menu="menu-wrapper">
        <div class="navbar-header d-xl-none d-block">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mr-auto"><a class="navbar-brand" href="#">
                        <div class="brand-logo"></div>
                        <h2 class="brand-text mb-0">93Board</h2>
                    </a></li>
                <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="bx bx-x d-block d-xl-none font-medium-4 primary toggle-icon"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <!-- Horizontal menu content-->
        <div class="navbar-container main-menu-content" data-menu="menu-container">
            <!-- include includes/mixins-->
            <ul class="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation" data-icon-style="filled">
                <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="menu-livicon" data-icon="desktop"></i><span data-i18n="Dashboard">Dashboard</span></a>
                    <ul class="dropdown-menu">
                        <li data-menu=""><a class="dropdown-item align-items-center" href="home.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Home</a>
                        </li>
                      
                    </ul>
                </li>
                    <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="menu-livicon" data-icon="comments"></i><span>Sales</span></a>
                    <ul class="dropdown-menu">
                
                        <li data-menu=""><a class="dropdown-item align-items-center" href="OrdiniG_bk_liv1.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ordini da Assegnare</a></li>
                        <li  data-menu=""><a class="dropdown-item align-items-center" href="Dinamic_Order.jsp?Sta=Ass" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ordini assegnati</a></li>
                        <li  data-menu=""><a class="dropdown-item align-items-center" href="Ordini_Assegnati.jsp?Sta=Job" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ordini in lavorazione</a></li>
                        <li  data-menu=""><a class="dropdown-item align-items-center" href="Dinamic_Order.jsp?Sta=Blo" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ordini bloccati</a></li>
                       
                        <li  data-menu=""><a class="dropdown-item align-items-center" href="Customer_Care.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Customer Care</a></li>
                        <li  data-menu=""><a class="dropdown-item align-items-center" href="OrdiniF.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ordini Falliti</a></li>
                        <li  data-menu=""><a class="dropdown-item align-items-center" href="OrdiniChiusi.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ordini Chiusi</a></li>
                        <li  data-menu=""><a class="dropdown-item align-items-center" href="OrdiniCestinati.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ordini Cestinati</a></li>
                        <li  data-menu=""><a class="dropdown-item align-items-center" href="Chiudi_ordine.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Chiusura Forzata</a></li>
                        
                    </ul>
                </li>
                
                              <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="menu-livicon" data-icon="comments"></i><span>Logistica</span></a>
                    <ul class="dropdown-menu">
                       <li data-menu=""><a class="dropdown-item align-items-center" href="Team_Order2.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ordini In Lavorazione</a></li>
                         <li data-menu=""><a class="dropdown-item align-items-center" href="Gen_Ldv.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Lista LDV Da Generare</a></li>
                         <li data-menu=""><a class="dropdown-item align-items-center" href="Da_Ritirare.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ordini Da Ritirare</a></li>
    <li data-menu=""><a class="dropdown-item align-items-center" href="Metropol.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Area Metropolitana</a></li>
                         <li data-menu=""><a class="dropdown-item align-items-center" href="Sospesi.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ordini sospesi</a></li>

                    </ul>
                </li>
                
                          <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="menu-livicon" data-icon="comments"></i><span>Nuovi Ordini</span></a>
                    <ul class="dropdown-menu">
                         <li data-menu=""><a class="dropdown-item align-items-center" href="New_Ordine.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Nuovo Ordine</a></li>
                                         <li data-menu=""><a class="dropdown-item align-items-center" href="Ricerca_Articolo.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Ricerca per articolo</a></li>
                
                       
                    </ul>
                </li>
                
                
                <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="menu-livicon" data-icon="comments"></i><span>Team</span></a>
                    <ul class="dropdown-menu">
                        <li data-menu=""><a class="dropdown-item align-items-center" href="New_Team.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Inserisci nel team</a>
                        </li>
                        <li data-menu=""><a class="dropdown-item align-items-center" href="List_Team.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Lista Team</a>
                        </li>
       
                    </ul>
                </li>
                
                <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="menu-livicon" data-icon="comments"></i><span>Update</span></a>
                    <ul class="dropdown-menu">
                        <li data-menu=""><a class="dropdown-item align-items-center" href="Retro_Order.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Verifica Ordini vecchi</a>
                        </li>
                      
                    </ul>
                </li>
               
            </ul>
        </div>
        <!-- /horizontal menu content-->
    </div>
    <!-- END: Main Menu-->



    <!-- BEGIN: Content-->
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
            
                    <!-- Widgets Statistics start -->
                <section id="widgets-Statistics">
                    <div class="row">
                        <div class="col-12 mt-1 mb-2">
                            <h4>Facilitator's Area</h4>
                            <hr>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="badge-circle badge-circle-lg badge-circle-light-info mx-auto my-1">
                                            <i class="bx bx-shopping-bag font-medium-5"></i>
                                        </div>
                                        <p class="text-muted mb-0 line-ellipsis">Ordini Mese</p>
                                        <h2 class="mb-0"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="badge-circle badge-circle-lg badge-circle-light-warning mx-auto my-1">
                                            <i class="bx bx-file font-medium-5"></i>
                                        </div>
                                        <p class="text-muted mb-0 line-ellipsis">Ordini Oggi</p>
                                        <h2 class="mb-0"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="badge-circle badge-circle-lg badge-circle-light-danger mx-auto my-1">
                                            <i class="bx bx-message font-medium-5"></i>
                                        </div>
                                        <p class="text-muted mb-0 line-ellipsis">Commenti Oggi</p>
                                        <h2 class="mb-0"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="badge-circle badge-circle-lg badge-circle-light-primary mx-auto my-1">
                                            <i class="bx bx-money font-medium-5"></i>
                                        </div>
                                        <p class="text-muted mb-0 line-ellipsis">Incasso Oggi &euro; </p>
                                        <h2 class="mb-0"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="badge-circle badge-circle-lg badge-circle-light-success mx-auto my-1">
                                            <i class="bx bx-purchase-tag font-medium-5"></i>
                                        </div>
                                        <p class="text-muted mb-0 line-ellipsis">Ordini Cancellati </p>
                                        <h2 class="mb-0"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-2 col-md-4 col-sm-6">
                            <div class="card text-center">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="badge-circle badge-circle-lg badge-circle-light-danger mx-auto my-1">
                                            <i class="bx bx-edit-alt font-medium-5"></i>
                                        </div>
                                        <p class="text-muted mb-0 line-ellipsis">Ordini Falliti</p>
                                        <h2 class="mb-0"></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- Widgets Statistics End -->
                   
                <!-- Dashboard Analytics end -->

            </div>
        </div>
    </div>
    <!-- END: Content-->

    
    </div>
   <%@ include file="impaginazione/footer.jsp" %>