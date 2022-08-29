const form = document.getElementById('form')
const input = document.getElementById('input')
const ulElement = document.getElementById('list')


let list  = JSON.parse(localStorage.getItem('list'))

list.forEach(task=>{
  updateTodoList(task)

  
})


form.addEventListener('submit',(e)=>{
  e.preventDefault()

  updateTodoList()
})


function updateTodoList(task){
 
  let newTask = input.value

  if(task){
newTask = task.Name
  }
  const liDiv = document.createElement('li')
  
if(task && task.checked){
  liDiv.classList.add('checked')
}


 liDiv.innerText = newTask
ulElement.appendChild(liDiv)
input.value = ''


const checkBtn = document.createElement('div')
checkBtn.innerHTML = `<i class="fas fa-check-square">`
liDiv.appendChild(checkBtn)

const deletebtn = document.createElement('div')
deletebtn.innerHTML = `<i class="fas fa-trash"></i>`
liDiv.appendChild(deletebtn)


checkBtn.addEventListener('click',()=>{
  console.log('kkldjf')
liDiv.classList.toggle('checked')
updateLocalStore()
})

deletebtn.addEventListener('click',()=>{
  liDiv.remove()
  updateLocalStore()
})

updateLocalStore()
}

function updateLocalStore(){
 list = []
  const listItem = document.querySelectorAll('li')
  listItem.forEach(item=>{
list.push({
Name: item.innerText,
checked: item.classList.contains('checked')

})

  })

  localStorage.setItem('list',JSON.stringify(list))

}