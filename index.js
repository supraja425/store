// const products = [
//     { id: 1, name: "P1", price: 34 },
//     { id: 2, name: "P2", price: 50 },
//     { id: 3, name: "P3", price: 40 },
//   ];
let products=[]
fetch("products.json")
    .then((response) => response.json())
    .then((data) => (showProducts(data)))

  const cart = {};
  const addToCart = (id) => {
    if (!cart[id]){
        cart[id] = 1;
    }
    items.innerHTML=0
    showCart();
  };
  const del=(id)=>{
    if(cart[id]){
        delete cart[id];
        showCart()
    }
  }
  const increment=(id)=>{
    items.innerHTML=100
   cart[id]+=1
    showCart();
  }
  const decrement=(id)=>{
    items.innerHTML=50
    cart[id]-=1
    showCart();
  }
  const hideCart=()=>{
    cartBox.style.display="none"
    productBox.style.display="block"
  }
  const displayCart=()=>{
    cartBox.style.display="block"
    productBox.style.display="none"
  }
  const showTotal = () =>{
    let total =products.reduce((sum,value)=>{
        return sum+value.price *(cart[value.id]?? 0);
    }, 0)
    order.innerHTML=total
  }
  const showCart = () => {
    let count=Object.keys(cart).length
    items.innerHTML=count
    showTotal()
    let str = "";
    products.map((value) => {
      if (cart[value.id]) {
        str += `<div>${value.id}-${value.name}-${value.price}-
        <button onclick='decrement(${value.id})'>-</button>
        ${cart[value.id]}
        <button onclick='increment(${value.id})'>+</button>-
        Rs.${value.price*cart[value.id]}-
        <button onclick='del(${value.id})'>Remove</button>
        </div>`;
      }
    });
    divCart.innerHTML = str;
  };
  const showProducts = (data) => {
    products=data
    let str = "<div class='row'>";
    products.map((value) => {
      str += `<div class="box">
      <img src='${value.url}'>
      Product Name: ${value.name}<br>
      <br> product Id: ${value.id}<br>
      Price: ${value.price}
      <button onclick='addToCart(${value.id})' class="button">Add</button>
      </div>`;
    });
    str+="</div>"
    divProducts.innerHTML = str
  };