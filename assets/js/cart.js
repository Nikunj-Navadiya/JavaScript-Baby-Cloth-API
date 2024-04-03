const viewCart = () => {
  let allcart = JSON.parse(localStorage.getItem("cart"));
  let tbl = "";
  let sum = 0;
  let gst = 0;
  let charges = 40;

  allcart.map((val) => {
      sum = sum + val.qty * val.price;
      tbl += `
        <tr>
            <td>${val.id}</td>
            <td>${val.name}</td>   
            <td><img src="${val.img}" width="70"/></td>   
            <td>${val.price}</td>   
            <td><input type="number" id="qty_${val.id}" onchange="editCart(${val.id})" value="${val.qty}"></td>   
            <td>${val.price * val.qty}</td> 
            <td><img src="${val.pic}" width="30px" center onclick="deleteCart(${val.id})"/></td>
            
        </tr>`;
  });
  document.getElementById("cart").innerHTML = tbl;

  gst = sum * 0.18;
  document.getElementById("gstTotal").innerHTML = `${gst.toFixed(2)}`;

  document.getElementById("charges").innerHTML = `${charges.toFixed(2)}`;

  
  let totalIncludingGST = sum + gst + charges;
  document.getElementById("totalIncludingGST").innerHTML = `${totalIncludingGST.toFixed(2)}`;
  
  document.getElementById("finalTotal").innerHTML = `${sum.toFixed(2)}`;
};

const deleteCart = (id) => {
  let all = JSON.parse(localStorage.getItem("cart"));
  let filteredCart = all.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(filteredCart));
  alert("This Want to Remove......?");
  viewCart();
};

const editCart = (id) => {
  let qty = document.getElementById(`qty_${id}`).value;
  let all = JSON.parse(localStorage.getItem("cart"));
  all.map((val) => {
      if (val.id == id) {
          val.qty = qty;
      }
  });
  localStorage.setItem("cart", JSON.stringify(all));
  alert("Record Updated");
  viewCart();
};

viewCart();