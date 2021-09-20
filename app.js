let state, colomns, turn, buttons
let start = ()=>{
    turn = 'red'
    document.getElementById('board').innerHTML = ''
    for(let i=0; i<6;i++){
        let row = ''
        for (let j=0;j<7;j++){
            row +=  "<button class='cell'></button>"
        }
        document.getElementById('board').innerHTML += `<div class='colomn'>${row}</div>`
    }

    colomns = document.querySelectorAll('div.colomn')
    state = []
    for (let colomn of colomns){
        state.push([...colomn.children])
    }
    buttons = document.querySelectorAll('button.cell')
    for (let i in buttons){
        let el = buttons[i]
        el.onclick = (e)=>{
            let colomn =  el.parentElement
            let colomn_num = Array.prototype.indexOf.call(colomn.parentElement.children, colomn)
            if (state[colomn_num].length == 0){return}
    
            let cell = state[colomn_num].pop()
            let target = [].indexOf.call(cell.parentElement.children, cell)
            el.parentElement.style.setProperty('--top-position', `${target * 15}%`)
            el.parentElement.classList.add('play')
            setTimeout(()=>{
                cell.classList.add(turn)
                el.parentElement.classList.remove('play')
                turn = turn == 'red' ? 'yellow':'red'
                document.documentElement.style.setProperty('--turn-color', turn)
                el.parentElement.style.setProperty('--top-position', `-15%`)
            }, 300)
        }
    }
}

start()





document.getElementById("rest-btn").onclick = start