
let idade, data, palestrate, participante

    console.log("Digite a sua idade.")

    if(idade<18){
        console.log("Cadastro permitido apenas para maiores de 18 anos.")
    }else{
        console.log("informe a data do evento.")
        if(data<20){
            console.log("sentimos muito a data já inspirou")
        }else{
            console.log("Se você é um(a) palestrante digite 1")
            if(palestrante = 1){
                console.log("Digite suas informações de cadastro!")
            }else{
                console.log("Então você é um participante!")
                if(palestrante<100){
                    console.log("Digite suas informações de cadastro.")
                }else{
                    console.log("infelizmente não possui mais vagas.")
                }
            }   
        }   
    }
    console.log("Operação Finalizada")
