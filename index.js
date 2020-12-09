


let hide = document.getElementById('hide')
let height = document.getElementById('height')
let weight = document.getElementById('weight')
let status = document.getElementById('status')
let value = document.getElementById('value')
let stan = document.getElementById('stan')
let list = document.getElementById('list')
let data = null
const check = document.querySelector('.check')
console.log(check.checked)
const select = document.getElementsByName('sex')
console.log(select)
console.log(select[0].checked)
let sex = document.getElementById('sex')
console.log(sex)




let todo = []

// let listHtml = ''


function todo_li() {
    if (todo.length === 0) {
        list.innerHTML = `<tr>
                              <td></td>
                              <td colspan="5">当前没有任何 BMI 记录</td>
                          </tr>`
    } else {
        list.innerHTML = ''
        /*for (let item of todo) {
            list.innerHTML += `<tr class="list">
                               <td>${i}</td>
                               <td>${item.date}</td>
                               <td>${item.h}</td>
                               <td>${item.w}</td>
                               <td>${item.bmi}</td>
                               <td onclick="del(this)">删除</td>
                           </tr>`
            i++
        }*/
        todo.forEach(function (item, index) {
            list.innerHTML += `<tr class="list">
                               <td>${index + 1}</td>
                               <td>${item.date}</td>
                               <td>${item.h}</td>
                               <td>${item.w}</td>
                               <td>${item.bmi}</td>
                               <td onclick="del(${index})">删除</td>
                           </tr>`
        })
    }
    // todo.push(list.innerHTML)
}
// console.log(todo.length)
todo_li()

/*function del(item) {
    if (confirm('你确定要删除该数据吗？')) {
        console.log(item.parentElement)
        todo.splice(item.parentElement, 1)
    } else {
        alert('已取消')
    }
}*/
function del(index) {
    if (confirm('你确定要删除该数据吗？')) {
        // console.log(index)
        todo.splice(index, 1)
        todo_li()
    } else {
        alert('已取消')
    }
}

function calc () {
    if (!weight.value || !height.value) {
        alert('请输入数据')
    } else {
        if (isNaN(weight.value) || isNaN(height.value)) {
            alert('请输入数字')
        } else {
            let bmi = (weight.value / ((height.value / 100)**2)).toFixed(1)

            if (bmi >= 10 && bmi <= 18.4) {
                status.innerText = '【偏瘦】'
                stan.style.top = '68px'
            }else if (bmi >= 18.5 && bmi <= 23.9) {
                status.innerText = '【正常】'
                stan.style.top = '104px'
            }else if (bmi >= 24.0 && bmi <= 27.9) {
                status.innerText = '【过重】'
                stan.style.top = '140px'
            }else {
                status.innerText = '【肥胖】'
                stan.style.top = '176px'
            }
            value.innerText = bmi
            if (!select[0].checked) {
                sex.innerText = '女士'
            }
            hide.style.display = 'block'
            stan.style.opacity = '1'
            let now = new Date()
            let date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
            data = {
                date : date,
                h : height.value,
                w : weight.value,
                bmi : bmi
            }
            todo.push(data)
            // console.log(data)

            if (check.checked) {
                todo_li()
            }
        }
    }

   /*
    let bmi = (weight.value / ((height.value / 100)**2)).toFixed(1)

    if (bmi >= 10 && bmi <= 18.4) {
        status.innerText = '【偏瘦】'
    }else if (bmi >= 18.5 && bmi <= 23.9) {
        status.innerText = '【正常】'
        stan.style.top = '104px'
    }else if (bmi >= 24.0 && bmi <= 27.9) {
        status.innerText = '【过重】'
        stan.style.top = '140px'
    }else {
        status.innerText = '【肥胖】'
        stan.style.top = '176px'
    }
    value.innerText = bmi
    hide.style.display = 'block'
    stan.style.opacity = '1'*/
}








