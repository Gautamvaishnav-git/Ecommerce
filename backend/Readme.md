# **Freezone Ecommerce Backend API docs**

 <br />
 <br />

## >> **All the source code in src directory.**

 <br />

### <a href="https://gautamvaishnav.live" style="background: #39d92f; color:black; font-weight: bold; padding: 5px; border-radius: 4px" >About Me</a>

<br />

---

### **How to start server**

- Open the terminal
- Run yarn dev (it will compile ts code in to js)
- then run yarn dev-start (it will start the development server)
- to start build server use dist dir and run **_node index.js_**
- then go to http://localhost:5000

---

# **Routes**

- ### **/User**
  - **/signup** >> _Sign up_
  - **/login** >> _Login_
  - **/detail** >> _User Detail_
- ### **/Cart**
  - **/add** >> _Add to cart_
  - **/fetchcart** >> _Fetch Cart_
  - **/delete/:asin** >> _Delete from cart_
- ### **/Store**
  - **/** >> _route for fetching the products_
  - **/detail** >> _get detail of the product_
- ### **/Filter**
  - **/search** >> search any product
  - **/price** >> search in price range
  - **/review** >> get product by reviews
