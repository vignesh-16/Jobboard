<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page isELIgnored="false" %> 
<%@ page import="java.util.List" %>
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title> Clean Toast Notifications - CSS</title>
  <link rel="stylesheet" href="../styles/global.css">

</head>
<body>
<!-- partial:index.partial.html -->
<input type="checkbox" name="t-help" id="t-help" checked>
<input type="checkbox" name="t-success" id="t-success" checked>
<input type="checkbox" name="t-warning" id="t-warning" checked>
<input type="checkbox" name="t-error" id="t-error" checked>
<div class="toast-panel">
    <div class="toast-item help">
        <div class="toast help">
            <label for="t-help" class="close"></label>
            <h3>Help!</h3>
            <p>Do you have a problem? Just use this <a href="#">contact form</a>.</p>
        </div>
    </div>
    <div class="toast-item success">
        <div class="toast success">
            <label for="t-success" class="close"></label>
            <h3>Success!</h3>
            <p>Your message has been sent successfully.</p>
        </div>
    </div>
    <div class="toast-item warning">
        <div class="toast warning">
            <label for="t-warning" class="close"></label>
            <h3>Warning!</h3>
            <p>Sorry, there was a problem with your request.</p>
        </div>
    </div>
    <div class="toast-item error">
        <div class="toast error">
            <label for="t-error" class="close"></label>
            <h3>Error!</h3>
            <p>Change a few thing up and try submitting again.</p>
        </div>
    </div>
    <div class="toast-icons">
        <label for="t-help" class="toast-icon icon-help"></label>
        <label for="t-success"  class="toast-icon icon-success"></label>
        <label for="t-warning"  class="toast-icon icon-warning"></label>
        <label for="t-error" class="toast-icon icon-error"></label>
    </div>
</div>
<!-- partial -->
  
</body>
</html>