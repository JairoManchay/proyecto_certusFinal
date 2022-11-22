const btn = document.getElementById("btnEjecutar");
btn.addEventListener('click', function(){
    let horasTrabajadas = parseInt(prompt("Cuantas horas tienes trabajadas"));
    let pagoxDia = 40;
    let resultado = 0;
    let beneficios = 0;
    let saldoTotal = 0;
    
    const basico = document.getElementById("basicoCalcular");
    const horasTr = document.getElementById("horasTrabajadas");

    if(horasTrabajadas > 15){
        resultado = pagoxDia * horasTrabajadas;		
        beneficios = resultado * 0.20;
        saldoTotal = resultado + beneficios
        horasTr.innerHTML="Horas trabajadas: " + horasTrabajadas;
        basico.innerHTML = "Saldo Basico es de: "+ saldoTotal  + " soles";
    }else{
        saldoTotal = pagoxDia * horasTrabajadas;
        horasTr.innerHTML="Horas trabajadas: " + horasTrabajadas;
        basico.innerHTML = "Saldo Basico es de: "+ saldoTotal  + " soles";
    }
    
});