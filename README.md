# profile_page
#### 個人資料頁面，主要引入Materialize-css框架，以及animated.js動畫設計
![首頁](https://media.giphy.com/media/WarWHH9ZnE9jN7uAgK/giphy.gif)
## 引入套件
[![npm version](https://img.shields.io/badge/npm-6.14.10-blue)](https://www.npmjs.org/)
[![materializeCSS version](https://img.shields.io/badge/MaterializeCSS-1.0.0-red)](https://github.com/Dogfalo/materialize)
[![Jquery version](https://img.shields.io/badge/Jquery-2.1.1-green)](https://jquery.com/)
[![animated.js version](https://img.shields.io/badge/animated.js-4.1.1-orange)](https://animate.style/)
[![stmp.js](https://img.shields.io/badge/stmp.js-pass-yellowgreen)](https://smtpjs.com/)

## 主要呈現內容分類
- [navbar](#navbar)
- [profileCard](#profileCard)
- [skill](#skill)
- [contectMe](#contectMe)

## navbar
利用`Jquery`去計算滾輪數值，去改變css opacity的數值.
```html
<!-- 建立導覽列  -->
<nav class="brown shadow navbar">
    <div class="container" id="home">
      <a href="#home" class="left home-button">
        <i class="material-icons">home</i>
      </a>
      <!-- 以下省略  -->
</nav>
  
  <!--  Scripts-->
  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
```

#### 撰寫js檔去偵測捲軸與css樣式
```js
$(window).scroll(function () {
  let currentscrollTop = $(window).scrollTop();
  if (currentscrollTop > 0) {
    $('.navbar').css('opacity', (currentscrollTop / 250))//250是調整結果，數值越大顯現得越慢
  } else {
    $('.navbar').css('opacity', 0)
  }
})
```

## profileCard
利用`animated.js`產生開場動畫.
```html
<!-- 引入animated.css  -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <!-- 以下省略 -->
<!-- profile-card html  -->
  <div id="index-banner" class="parallax-container" id="home">
    <div class="card animate__animated animate__slideInDown"><!-- 引入animate__animated animate__slideInDown 這個類型的動畫 -->
    </div>
  </div>
```

## skill
利用其他類型的`animated.js`產生開場動畫.
```html
<!-- 引入animated.css  -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  <!-- 以下省略 -->
<!-- skill html  -->
  <div class="container-about">
    <section class="section section-about black-text scrollspy" id="about">
      <div class="container center">
        <h3>關於我</h3>
        <h6 class="black-text text-darken-1">目前正在Bootcamp全力衝刺完善自己的作品集專案，目標能在未來轉戰國際，邁向全端工程師之路</h6>
        <div class="row mt-20 animate__animated animate__rotateIn"><!-- 引入animate__animated animate__rotateIn 這個類型的動畫 -->
            <!-- 以下省略  -->
```

## contectMe
利用`stmp.js`使用第三方套件，產生聯絡資訊郵件直接傳送給我的信箱.
```html
<!-- skill html  -->
  <!-- contact-me section template-->
  <section class="section experience section-contact black-text scrollspy" id="contact">
    <div class="container center">
      <h3>聯絡我</h3>
      <h6>麻煩填入您聯絡資訊，會盡快聯絡您，謝謝</h6>
      <div class="row">
        <form class="col s12 xl10 offset-xl1" name="form">
          <div class="row">
            <div class="input-field col s12 m6">
              <i class="material-icons prefix">account_circle</i>
              <input type="text" class="validate" id="name" required>
              <label for="name">名字</label>
              <span class="helper-text" data-error="Kindly provide your name"></span>
            </div>
            <div class="input-field col s12 m6">
              <i class="material-icons prefix">email</i>
              <input type="email" name="email" class="validate" id="email" required>
              <label for="email">Email</label>
              <span class="helper-text" data-error="Kindly provide your email"></span>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <i class="material-icons prefix">message</i>
              <textarea name="message" id="message" class="materialize-textarea validate" required></textarea>
              <label for="message">聯絡事項</label>
              <span class="helper-text" data-error="Kindly leave a message"></span>
            </div>
          </div>
          <div class="row center">
            <button class="btn waves-effect waves-red brown lighten-3" type="button" name="action" id="myBtn">Send
              <i class="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
            <!-- 以下省略  -->
            
  <!-- 引入stmp.js  -->
    <script src="https://smtpjs.com/v3/smtp.js"></script>
  <!-- 以下省略 -->
```

#### 撰寫js檔去產生聯絡信息物件，利用他的函式去傳送到你的信箱
```js
// set send email plugin
function processFormData() {
  const form = document.forms['form'];
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  if (!name && !email && !message) {
    alert("聯絡資訊再麻煩您填完歐！")
    return
  }
  Email.send({
    SecureToken: "5c4a7f1c-afd7-466d-98a2-65e4ed57b90a",
    To: 'wortwonnn@gmail.com',
    From: 'hooty868@gmail.com',
    Subject: name,
    Body: `${email}:${message}`
  }).then(
    message => alert(message)
  )
}
document.getElementById("myBtn").addEventListener("click", function () {
  processFormData()
})
```

## 心得
目前正在引入webpeck & sass 套件，去更好的整理自己的程式碼，也稍嫌我的個人資料卡片有點單薄，會讓組件有更多的動畫顯示，期待版本2的的發表
