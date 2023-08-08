function calculateTip() {
    //trazendo os valores 
    const billAmount = document.querySelector("#billAmount").value   
    const serviceQuality = document.querySelector("#serviceQuality").value
    const totalAmount = document.querySelector("#totalAmount")
    const tipAmount = document.querySelector("#tipAmount")
    
    //validando os campos
    if(billAmount === "" || serviceQuality == 0) {
        alert("Preencha os campos!")
        return
    }

    //valor da gorjeta
    const tipAmountValue = billAmount * serviceQuality 
    const totalAmountValue = parseFloat(billAmount) + parseFloat(tipAmountValue)

    //exibir o resultado
    totalAmount.value = totalAmountValue
    tipAmount.value = tipAmountValue
    //não se usa o totalAmount.textContent, pois não é um 
    //texto em <p>"texto"</p>, mas um valor em <input>
    //input -> ".value"
    //elemento de texto -> ".textContent/.innerHTML"
}