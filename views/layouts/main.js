const render = function (body) {
return `
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>title</title>

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">

  <!-- jQuery -->
  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

  <!-- CSS -->
  <link rel="stylesheet" type="text/css" href="css/style.css">
  </link>




</head>

<body>
  <div class="jumbotron">
    <h1 class="text-center">Eat Burgers</h1>
  </div>

  <div class="container">

    <div class="row">
      <div class="col-sm-8 col-sm-offset-2">

        <p class="cool-font">Burger</p>
        <textarea class="form-control" rows="3" id="burger-input" placeholder="Enter Burger Here!"></textarea>
        <button id="burger-submit" class="btn btn-lg pull-right">Submit!</button>
      </div>
    </div>

    <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <h2>Burgers</h2>
          <hr>
          <div id="burger-area"></div>
        </div>
      </div>





  </div>

  <script type="text/javascript" src="js/burger.js"></script>
</body>

</html>
`
}

exports.render = render