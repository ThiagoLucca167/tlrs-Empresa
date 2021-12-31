var menuTop = `
<div class="container-fluid ct">
<div class="row jfc">
    <nav class="navbar navbar-expand-lg navbar-light" id="nav-top">
       <div class="imagem-logo">
        <a class="contain-img-logo" href="../index.html">
            <div alt="jsbp-logo" class="img-tc"></div>
        </a>
       </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link color-ancora" href="#" style="width: 180px;">Quem nós Somos</a>
              <hr class="line-menu">
            </li>
            <li class="nav-item">
              <a class="nav-link color-ancora" href="#" style="width: 110px;">Empréstimo</a>
              <hr class="line-menu">
            </li>
            <li class="nav-item">
              <a class="nav-link color-ancora" href="cartao.html" style="width: 165px;">Cartão de crédito</a>
              <hr class="line-menu">
            </li>
            <li class="nav-item">
              <a class="nav-link color-ancora" href="#" style="width: 135px;">Financiamento</a>
              <hr class="line-menu">
            </li>
            <li class="nav-item">
              <a class="nav-link color-ancora" href="faleconosco.html" style="width: 50px;">Suporte</a>
            </li>
          </ul>
        </div>
      </nav>
</div>
</div>

`
    document.getElementById('header').innerHTML = menuTop;
$(document).ready(function(){
    $("#header").html(menuTop)
})