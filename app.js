var app = require('./config/server');
const PORTA = 80;

app.listen(PORTA, function(){
    console.log(`Servidor ON na porta ${PORTA}`);
});