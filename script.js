function showMessage() {
  alert("Welcome to Soldout05! 🛍️");
}

function buyProduct(productName) {
  alert(
    productName +
    " selected! 🛒\n\nThank you for shopping with Soldout05."
  );

  document.getElementById("payment").scrollIntoView({
    behavior: "smooth"
  });
}
