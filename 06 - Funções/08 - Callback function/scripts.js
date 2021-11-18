console.log('Abra o arquivo scripts.js.')

function sayMyName(name) {
    console.log('antes de executar a função callback')
    name()
    console.log('depois de executar a função a callback')
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

