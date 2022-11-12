const modalUser = new bootstrap.Modal(document.getElementById('modalUser'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditUsers', e =>{
    const fila = e.target.parentNode.parentNode
    id_update.value = fila.children[0].innerHTML
    email_update.value = fila.children[1].innerHTML
    password_update.value = fila.children[2].innerHTML
    modalUser.show()
})
