const modalEmployee = new bootstrap.Modal(document.getElementById('modalEmployee'))
const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditEmployees', e =>{
    const fila = e.target.parentNode.parentNode
    id_update.value = fila.children[0].innerHTML
    name_update.value = fila.children[1].innerHTML
    email_update.value = fila.children[2].innerHTML
    phoneNumber_update.value = fila.children[3].innerHTML
    job_update.value = fila.children[4].innerHTML
    modalEmployee.show()
})
