const modalProvider = new bootstrap.Modal(document.getElementById('modalProvider'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditProviders', e =>{
    const fila = e.target.parentNode.parentNode
    id_update.value = fila.children[0].innerHTML
    name_update.value = fila.children[1].innerHTML
    phoneNumber_update.value = fila.children[2].innerHTML
    location_update.value = fila.children[3].innerHTML
    modalProvider.show()
})
