<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="front-end/src/images">
    <img src="front-end/src/images/plant-banner.jpg" alt="Logo" width="100%" height="100%">
  </a>

  <h3 align="center">🌱 Plant Shop 🌱</h3>

  <p align="center">
    Electronic Commerce Project - HCMUT!
    <br />
<!--     <a href="https://github.com/dannhh/plant-shop"><strong>Explore the docs »</strong></a> -->
<!--     <br /> -->
    <br />
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/dannhh/plant-shop/issues">Report Bug</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project 🎉

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->
E-commerce plants shop (HCMUT project).  
This web app is built to provide a satisfying shopping experience to our users.

### Build with

* [JavaScript] - Language for Frontend
* [Python] - Language for Backend
* [React] - UI library render
* [React-Bootstrap] - UI framework design
* [Django] - BE Framework

### Installation & Development Node.js

Requires [Node.js](https://nodejs.org/) to run.

Install the dependencies.

```sh
$ npm install
```

Start the server.
```sh
$ npm start
```

App runs on port 3000

### Installation & Development Django

1/ Install Django

```sh
$ pip install django
```

2/ Create Virtual Environment (file create need in the same location with root (plant-shop) folder)

```sh
$ py -m venv venv
```

3/ Activate Virtual Environment (cd to root folder)

```sh
$ venv\Scripts\activate
```

4/ Go to back-end folder to run django server

```sh
$ cd plant-shop/back-end/plant_shop_Backend
```

5/ Migrate step 

```sh
$ py manage.py migrate
```

6/ Run Django server (port 8000)

```sh
$ py manage.py runserver
```

**Note: Just allow from step 3 to 6 (skip step 5) when running server second time and beyond

### Back-end API
(*): required field

0/ Momo: (all POST)

- only one api

```yaml
{
  "amount": vd "10500" - giá tiền
  "info": thông tin về sản phẩm
  "redirect_url": vd "https://www.google.com.vn/" - link của trang 'Thanh toán thành công', ở trang momo sau khi thanh toán xong sẽ back về đây
}
```

Lấy trường "payUrl" trong response trả về, đây là một đường link, chuyển trang đến đường link này. Xem trang này: https://developers.momo.vn/v3/vi/docs/payment/onboarding/test-instructions/ để biết cách thanh toán.

```sh
http://localhost:8000/momo/test
```

1/ Fast delivery: (all POST)

- Get product detail

```yaml
{
  "order_code": <value> *
}
```

```sh
http://localhost:8000/delivery/get
```

- Create product

```yaml
{
  "client_name": <value>, *
  "product_name": <value>, *
  "product_quantity": <value>, *
  "product_price": <value>, *
  "product_weight": <value> *
}
```
```sh
http://localhost:8000/delivery/create
```

- Update product

```yaml
{
  "order_code": <value>, *
  "client_name": <value>,
  "product_name": <value>,
  "product_quantity": <value>,
  "product_price": <value>,
  "product_weight": <value>
}
```
```sh
http://localhost:8000/delivery/update
```

- Cancel product

```yaml
{
  "order_code": <value> *
}
```
```sh
http://localhost:8000/delivery/cancel
```

2/ Send mail: 

```yaml
{
  "subject": <value> *,
  "message": <value> *,
  "receive_email": <value> *,
}
```

```sh
http://localhost:8000/mail/send
```
## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

Frontend Team:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ngocquy25">
        <img src="https://avatars.githubusercontent.com/u/67475627?v=4" width="100px;" alt="Ngao"/>
        <br />
        <sub><b>Ngọc Quý</sub>
      </a>
      <br />
      <a href="https://github.com/dannhh/plant-shop/issues?q=author%3Angocquy25">🌿</a>
    </td>    
    <td align="center">
      <a href="https://github.com/KanNguyenKiet">
        <img src="https://avatars.githubusercontent.com/u/20751267?v=4" width="100px;" alt="kAN"/>
        <br />
        <sub><b>Hữu Kiệt</sub>
      </a>
      <br />
      <a href="https://github.com/dannhh/plant-shop/issues?q=author%3AKanNguyenKiet">🍀</a>
    </td>
    <td align="center">
      <a href="https://github.com/lykienminh">
        <img src="https://avatars.githubusercontent.com/u/46185338?v=4" width="100px;" alt="Kim Min"/>
        <br />
        <sub><b>Kim Min</sub>
      </a>
      <br />
      <a href="https://github.com/dannhh/plant-shop/issues?q=author%3Alykienminh">🌵</a>
    </td>
    <td align="center">
      <a href="https://github.com/dannhh">
        <img src="https://avatars.githubusercontent.com/u/70143744?v=4" width="100px;" alt="dannhh"/>
        <br />
        <sub><b>Hồng Dân</sub>
      </a>
      <br />
      <a href="https://github.com/dannhh/plant-shop/issues?q=author%3Adannhh">🌴</a>
    </td>
    <td align="center">
      <a href="https://github.com/NDuyUyen">
        <img src="https://avatars.githubusercontent.com/u/93560878?v=4" width="100px;" alt="NDuyUyen"/>
        <br />
        <sub><b>Duy Uyên</sub>
      </a>
      <br />
      <a href="https://github.com/dannhh/plant-shop/issues?q=author%3ANDuyUyen">🌳</a>
    </td>
  </tr>
</table>


Backend Team:
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/batiencd09">
        <img src="https://avatars.githubusercontent.com/u/66991137?v=4" width="100px;" alt="batiencd09"/>
        <br />
        <sub><b>Bá Tiến</sub>
      </a>
      <br />
      <a href="https://github.com/dannhh/plant-shop/issues?q=author%3Abatiencd09">🪴</a>
    </td>    
    <td align="center">
      <a href="https://github.com/cttan2000">
        <img src="https://avatars.githubusercontent.com/u/67214842?v=4" width="100px;" alt="cttan2000"/>
        <br />
        <sub><b>Tân Châu</sub>
      </a>
      <br />
      <a href="https://github.com/dannhh/plant-shop/issues?q=author%3Acttan2000">🎍</a>
    </td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

## Fighting, Yeah!
