document.getElementById('boton-calcular').addEventListener('click', calcular);
var Container = document.getElementById("container-base");





function calcular() {

    var Entrada_Usuario = document.getElementById("Numero").value;
    var Palindromo = Entrada_Usuario;
    var Resultado_Mod = 0;
    var verif_num = "";
    var Entrada_Usuario_ini = Entrada_Usuario;
    var Estado_Palindromo = false;
    let j = 2;

  
    while (Estado_Palindromo == false) {
        Entrada_Usuario = Entrada_Usuario_ini;
        Palindromo = Entrada_Usuario_ini;
        Resultado_Mod = 0;
        verif_num = "";
        let i = 0;

        while (Palindromo >= j) {
            Palindromo = Math.trunc(Entrada_Usuario / j);
            Resultado_Mod = Entrada_Usuario % j;

            if (Palindromo < j) {
                verif_num = Palindromo.toString() + Resultado_Mod.toString() + verif_num.toString();
            }
            else {
                verif_num = Resultado_Mod.toString() + verif_num.toString();
                Entrada_Usuario = Palindromo;
            }
            i++;
        }

        const strReversed = verif_num.split("").reverse().join("")

        if (strReversed == verif_num) {
            Estado_Palindromo = true;
            return Container.innerHTML = `  el numero es palindromo en base :  ${j}`

        }
        j++;
    }

}



