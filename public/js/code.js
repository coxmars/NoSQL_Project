const modalProduct = new bootstrap.Modal(document.getElementById('modalProduct'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditProducts', e =>{
    const fila = e.target.parentNode.parentNode
    id_update.value = fila.children[0].innerHTML
    name_update.value = fila.children[1].innerHTML
    description_update.value = fila.children[2].innerHTML
    price_update.value = fila.children[3].innerHTML
    quantity_update.value = fila.children[4].innerHTML
    modalProduct.show()
})