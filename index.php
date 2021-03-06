<?php
session_start();

require_once('model/class/config.php');
    $link = $oauth->get_link_connect();

    if (!empty($_GET['code'])) {
      $code = htmlspecialchars($_GET['code']);
      $token = $oauth->get_token($code);

      $_SESSION['token'] = $token;

      header('Location: callback.php');
      die();
    }

echo "
<!DOCTYPE html>
<html lang='en'>

<head>
  <meta charset='utf-8' />

  <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />
  <meta name='viewport' content='width=device-width, initial-scale=1' />

  <title>Train your Kana's</title>
  <link rel='author' href='@audricrosier' />
  <meta name='description' content='Simple application that helps you learn Kana's for free.' />

  <link rel='stylesheet' href='ellements/css/index.css' />
  <link rel='stylesheet' href='ellements/css/checkbox.css' />
  <link rel='stylesheet' href='ellements/css/notification.css' />

  <link rel='stylesheet' href='ellements/css/hamburgermenu.css' />
  <link rel='stylesheet' href='ellements/css/max600.css' />

  <!-- ICON CSS -->
  <script src='https://kit.fontawesome.com/eb747bd21c.js' crossorigin='anonymous'></script>

  <link href='https://fonts.googleapis.com/css2?family=Material+Symbols+round' rel='stylesheet'>
  <link href='https://fonts.googleapis.com/css2?family=Material+Icons+Round' rel='stylesheet'>

  <link rel='stylesheet' href='https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded' />

  <!-- FAVICON -->
  <link rel='apple-touch-icon' sizes='180x180' href='ellements/img/favicon/apple-touch-icon.png'>
  <link rel='icon' type='image/png' sizes='32x32' href='ellements/img/favicon/favicon-32x32.png'>
  <link rel='icon' type='image/png' sizes='194x194' href='ellements/img/favicon/favicon-194x194.png'>
  <link rel='icon' type='image/png' sizes='192x192' href='ellements/img/favicon/android-chrome-192x192.png'>
  <link rel='icon' type='image/png' sizes='16x16' href='ellements/img/favicon/favicon-16x16.png'>
  <link rel='manifest' href='ellements/img/favicon/site.webmanifest'>
  <link rel='mask-icon' href='ellements/img/favicon/safari-pinned-tab.svg' color='#ffffff'>
  <link rel='shortcut icon' href='ellements/img/favicon/favicon.ico'>
  <meta name='msapplication-TileColor' content='#ffffff'>
  <meta name='msapplication-TileImage' content='ellements/img/favicon/mstile-144x144.png'>
  <meta name='msapplication-config' content='ellements/img/favicon/browserconfig.xml'>
  <meta name='theme-color' content='#ffffff'>

  <!-- SVG FAVICON -->
  <link rel='icon' type='image/svg+xml' href='ellements/img/favicon/svg/favicon.svg'>
  <link rel='icon' type='image/png' href='ellements/img/favicon/svg/favicon.png'>

</head>

<body>
  <img class='logo' src='ellements/img/Blue - Green.png' alt='Grapefruit slice atop a pile of other slices'>

  <a href='#menu' id='toggle'><span></span></a>

  <div id='menu'>
    <ul>
      <div class='connect'>";
      if (!$_SESSION['connected']) {
        echo "
          <a href='$link'>
          <span class='material-symbols-rounded'> person </span>
          Connection </a>";
      }else{
        echo "
          <a href='profil.php'>
          <span class='material-symbols-rounded'> sensor_occupied </span>
          Profil </a>
          
          <a href='disconect.php'>
          <span class='material-symbols-rounded'> sensor_occupied </span>
          Disconected </a>";
      }

      echo"
      </div>

      <p class='divider'>---------------------------------------</p>

      <div class='theme'>
        <input type='checkbox' class='switch theme' id='theme' name='cc' onchange='selectTheme()' />
        <label for='theme'>theme-color</label>
      </div>

      <p class='divider'>---------------------------------------</p>

      <div class='check'>

        <input type='checkbox' class='switch' id='hiragana' name='cc' onchange='selectDificulty(this.id)' checked />
        <label for='hiragana'>Hiragana</label>

        <br>

        <input type='checkbox' class='switch' id='hiraganaCombo' name='cc' onchange='selectDificulty(this.id)' />
        <label for='hiraganaCombo'>Hiragana Combo</label>

        <br>

        <input type='checkbox' class='switch' id='hiraganaDakuon' name='cc' onchange='selectDificulty(this.id)' />
        <label for='hiraganaDakuon'>Hiragana Dakuon</label>

        <br>

        <input type='checkbox' class='switch' id='hiraganaDakuonCombo' name='cc' onchange='selectDificulty(this.id)' />
        <label for='hiraganaDakuonCombo'>Hiragana Dakuon Combo </label>

        <p class='divider'>---------------------------------------</p>

        <input type='checkbox' class='switch' id='katakana' name='cc' onchange='selectDificulty(this.id)' />
        <label for='katakana'>Katakana</label>

        <br>

        <input type='checkbox' class='switch' id='katakanaCombo' name='cc' onchange='selectDificulty(this.id)' />
        <label for='katakanaCombo'>Katakana Combo</label>

        <br>

        <input type='checkbox' class='switch' id='katakanaDakuon' name='cc' onchange='selectDificulty(this.id)' />
        <label for='katakanaDakuon'>Katakana Dakuon</label>

        <br>

        <input type='checkbox' class='switch' id='katakanaDakuonCombo' name='cc' onchange='selectDificulty(this.id)' />
        <label for='katakanaDakuonCombo'>Katakana Dakuon Combo </label>
      </div>
    </ul>
  </div>

  <a href='#' class='help'>HELP
    <span class='material-icons-round iconhelp'>info</span>
  </a>

  <div id='help-spawner'></div>
  <a class='hidden helpcloser'>
    <span class='material-icons-round'>close</span>
  </a>

  <div id='notification'>
    <!-- <div class='toast'>Nop bad answerd, the good one is <span>'A'</span> </div> -->
  </div>

  <div class='hiragana-symbol'>
    <p class='test-skills hidden'>Test your kana's.</p>
    <div class='character'></div>

    <span class='material-icons-round iconkeyboard'>keyboard_double_arrow_right</span>
    <span class='material-icons-round iconkeyboard'>keyboard</span>
    <span class='material-icons-round iconkeyboard'>keyboard_double_arrow_left</span>

    </span>
    <form class='forms' action='#' onsubmit='checkAnswerd(); return false' autocomplete='off'>
      <input name='input' type='text' class='input' autofocus maxlength='3'>
      <input type='submit' class='submit'>
    </form>
  </div>

  <div class='score'>
    <span class='sc'>YOUR SCORE</span>

    <span class='material-symbols-rounded iconscore '>sports_score</span>

    <span class='good'>0</span>/<span class='total'>0</span>

    <a href='' target='_blank' class='twitter-share'>
      <i class='fa fa-twitter'> </i>
      <span>SHARE ON TWITTER</span>
    </a>
  </div>

  <a href='https://twitter.com/AudricSan' target='_blank' class='author'>
    by Audric_San
    <span class='material-icons-round iconface'>face</span>
  </a>

  <a href='https://github.com/AudricSan/kakaTraining' target='_blank' class='git'>
    The github project
    <span class='fab fa-github icongit'></span>
  </a>
  <script src='model/const.js'></script>
  <script src='model/class/kana.js'></script>

  <script src='ellements/js/save.js'></script>

  <script src='model/function.js'></script>
  <script src='ellements/js/hamburger.js'></script>
  <script src='ellements/js/theme.js'></script>

  <script src='ellements/js/app.js'></script>
</body>

</html>";