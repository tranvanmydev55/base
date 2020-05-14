<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Admin | Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
        <link rel="stylesheet" href="plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css">
        <link rel="stylesheet" href="plugins/icheck-bootstrap/icheck-bootstrap.min.css">
        <link rel="stylesheet" href="dist/css/adminlte.min.css">
        <link rel="stylesheet" href="plugins/overlayScrollbars/css/OverlayScrollbars.min.css">
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">
    </head>
    <body class="hold-transition sidebar-mini layout-fixed">
        <div id="admin"></div>
        <script src="{{ mix('admin/js/app.js') }}"></script>
        <script src="plugins/jquery/jquery.min.js"></script>
        <script src="plugins/jquery-ui/jquery-ui.min.js"></script>
        <script>
            $.widget.bridge('uibutton', $.ui.button)
        </script>
        <script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
        <script src="dist/js/adminlte.js"></script>
        <script src="dist/js/demo.js"></script>
    </body>
</html>
