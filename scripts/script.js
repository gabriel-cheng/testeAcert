const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sCodigo = document.querySelector('#m-codigo')
const sDescricao = document.querySelector('#m-descricao')
const sValor = document.querySelector('#m-valor')
const btnSalvar = document.querySelector('#btnSalvar')

let itens
let id

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sCodigo.value = itens[index].codigo
    sDescricao.value = itens[index].descricao
    sValor.value = itens[index].valor
    id = index
  } else {
    sCodigo.value = ''
    sDescricao.value = ''
    sValor.value = ''
  }
  
}

function editItem(index) {

  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.codigo}</td>
    <td>${item.descricao}</td>
    <td>R$ ${item.valor}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sCodigo.value == '' || sDescricao.value == '' || sValor.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].codigo = sCodigo.value
    itens[id].descricao = sDescricao.value
    itens[id].valor = sValor.value
  } else {
    itens.push({'codigo': sCodigo.value, 'descricao': sDescricao.value, 'valor': sValor.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()


/*
const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sCodigo = document.querySelector('#m-codigo')
const sDescricao = document.querySelector('#m-descricao')
const sValor = document.querySelector('#m-valor')
const btnSalvar = document.querySelector('#btnSalvar')

let itens 
let id

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc'))  ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

function loadItens() {
    itens = getItensBD()
    tbody.innerHTML = ''
    itens.array.forEach((item, index) => {
        insertItem(item, index)
    });
}

loadItens()

function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${item.codigo}</td>
        <td>${item.descricao}</td>
        <td>${item.valor}</td>
        <td class="acao">
            <button onclick="editItem(${index})"
                <i class="bx bx-edit"></i>
            </button>
        </td>
        <td class="acao">
            <button onclick="deleteItem(${index})"
                <i class="bx bx-trash"></i>
            </button>
        </td>
    `
    tbody.appendChild(tr)
}

function editItem(index) {
    openModal(true, index)
}

function deleteItem(index) {
    itens.splice(index, 1)
    setItensBD()
    loadItens()
}

function openModal(edit = false, index = 0) {
    modal.classList.add('active')

    modal.onclick = event => {
        if(event.target.className.indexOf('modal-container') !== -1) {
            modal.classList.remove('active')
        }
    }

    if(edit) {
        sCodigo.value = itens[index].codigo
        sDescricao.value = itens[index].descricao
        sValor.value = itens[index].valor
        id = index
    }
    else {
        sCodigo.value = ''
        sDescricao.value = ''
        sValor.value = ''
    }
}

btnSalvar.onclick = event => {
    if(sCodigo.value == '' || sDescricao == '' || sValor == '') {
        return
    }

    event.preventDefault()

    if(id !== undefined) {
        itens[id].codigo = sCodigo.value
        itens[id].descricao = sDescricao.value
        itens[id].valor = sValor.value
    }
    else {
        itens.push({
            'codigo': sCodigo.value,
            'descricao': sDescricao.value,
            'valor': sValor.value
        })
    }
    setItensBD()

    modal.classList.remove('active')
    loadItens()
    id = undefined
}

loadItens()
*/