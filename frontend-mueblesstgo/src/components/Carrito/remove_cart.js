// Función que borra el carrito de compras
export default function remove_cart(){
  localStorage.removeItem("cart")
  localStorage.removeItem("price")
  return []
}
