function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function range(N){
    const arr = []
    for (let i = 0; i < N; i++) arr.push('')
    return arr
}

function createDOMElem(parent, elem, HTML){
    let element = document.createElement(`${elem}`)
    parent.appendChild(element)
    element.innerHTML = HTML
    return element
}

function createSelectWithYear(){
    const selectWithYear = {}
    selectWithYear.outerDiv = createDOMElem(document.body, 'div', '')
    selectWithYear.select = createDOMElem(selectWithYear.outerDiv, 'select', '')
    for (let i = 1960; i <= 2021; i++){
        selectWithYear.select.appendChild(createDOMElem(selectWithYear.select, 'option', `Год: ${i}`))
    }
    return selectWithYear
}

const selectWithYear = createSelectWithYear()

function createInputWithDiv(){
    let inputWithDiv = {}
    inputWithDiv.outerDiv = createDOMElem(document.body, 'div', '')
    inputWithDiv.input = createDOMElem(inputWithDiv.outerDiv, 'input', '')
    inputWithDiv.divForInput = createDOMElem(inputWithDiv.outerDiv, 'div', '')
    inputWithDiv.divForInput.style.display = 'inline-block'
    inputWithDiv.input.addEventListener('keyup', () => {inputWithDiv.divForInput.innerText = `Клиент набирает: ${inputWithDiv.input.value}`})
    return inputWithDiv
}

const inputWithDiv = createInputWithDiv()

function createInputWithButton(){
    let inputWithButton = {}
    inputWithButton.outerDiv = createDOMElem(document.body, 'div', '')
    inputWithButton.input = createDOMElem(inputWithButton.outerDiv, 'input', '')
    inputWithButton.button = createDOMElem(inputWithButton.outerDiv, 'button', 'Добавить элемент списка')
    inputWithButton.list = createDOMElem(inputWithButton.outerDiv, 'ul', 'Список введённой информации:')
    inputWithButton.button.addEventListener('click', () => {
        createDOMElem(inputWithButton.list, 'li', inputWithButton.input.value )
        inputWithButton.input.value = ''
    } )
    return inputWithDiv
}

const inputWithButton = createInputWithButton()

function Calculator (){
    this.outerDiv = createDOMElem(document.body, 'div', '')
    this.input = input = createDOMElem(this.outerDiv, 'input', '')
    this.button = createDOMElem(this.outerDiv, 'button', 'Вычислить')
    this.list = createDOMElem(this.outerDiv, 'ul', 'Список вычислений:')
    this.button.addEventListener('click', () => {
        createDOMElem(this.list, 'li', eval(this.input.value))
        this.input.value = ''
    } )
}

const calculator = new Calculator()

function MagicButton(name){
    this.outerDiv = createDOMElem(document.body, 'div', '')
    this.button = createDOMElem(this.outerDiv, 'button', String(name))
    this.button.style.borderRadius = '15px'
    this.button.style.padding = '10px 15px'
    this.button.addEventListener('click', () => {
        this.randomColor = `rgb(${getRandomInRange(0, 255)}, ${getRandomInRange(0, 255)}, ${getRandomInRange(0, 255)})`
        console.log(this.randomColor)
        this.button.style.backgroundColor = `${this.randomColor}`
    })
    this.button.addEventListener('mouseout', () => {
        this.rotateAngle = getRandomInRange(-180, 180)
        this.button.style.transform = `rotate(${this.rotateAngle}deg)`
    })
}

const magicButton = new MagicButton("Нажми меня")