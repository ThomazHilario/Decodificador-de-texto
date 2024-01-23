const text = document.getElementById('mytext')

// button criptografar
const button_criptografar = document.getElementById('criptografar')
const button_descriptografar = document.getElementById('descriptografar')
const button_copiar = document.getElementById('copy')

// Evento para criptografar a palavra
button_criptografar.addEventListener('click',(e) => {
    // Cancelando o envio do formulario
    e.preventDefault()

    // chamando função
    criptografando()
})

// Evento para decodificador a criptografia
button_descriptografar.addEventListener('click',(e) => {
    // Cancelando o envio do formulario
    e.preventDefault()

    // Chamando função
    decodificando()
})

// Evento de copiar o texto para area de transferencia
button_copiar.addEventListener('click',() => {
   navigator.clipboard.writeText(document.querySelector('p').textContent)
})

// Função que criptografa a palavra
function criptografando(){

    // schema criptografia
    const schema = {
        'e':'enter',
        'i':'imes',
        'a':'ai',
        'o':'ober',
        'u':'ufat'
    }

    // Condicao para criptografar
    if(text.value !== ''){
        // Criando a criptografia usando split e percorrendo com o map
        let criptografado = text.value.split('').map(caractere => schema[caractere] || caractere).join('')

        // Inserindo o resultado na tag p
        document.querySelector('p').textContent = criptografado

        // Limpando textarea
        text.value = ''
    }
}

// Função que irá reverter a criptografia
function decodificando(){

    // schema invertido da criptografia
    const schema = {
        'enter':'e',
        'imes':'i',
        'ai':'a',
        'ober':'o',
        'ufat':'u'
    }

    if(text.value !== ''){

        // Decodificando a criptografia
        const decodificando = text.value.split(/(enter|imes|ai|ober|ufat)/).map(token => schema[token] || token).join('')

        // Mostrando o resultado na tag p
        document.querySelector('p').textContent = decodificando

        // Limpando input
        text.value = ''
    }
}
