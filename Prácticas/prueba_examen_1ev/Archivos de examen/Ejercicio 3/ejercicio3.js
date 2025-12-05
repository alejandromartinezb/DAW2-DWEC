
document.addEventListener("DOMContentLoaded", () => {
    class Banco {
        // Instance field
        cuentas = [];


        constructor(nombre) {
            this.nombre = nombre;
        }

        crearCuenta(codigo, saldo_inicial = 0) {
            console.log(codigo);
            console.log(saldo_inicial);
            let regex = new RegExp(/^[0-9]{5}$/g);
            if (regex.test(codigo)) {
                let cuenta = { codigo, saldo: saldo_inicial };
                this.cuentas.push(cuenta);
            } else {
                console.warn("Código introducido inválido.")
            }
        }

        listarCuentas() {
            const h2 = document.createElement("h2");
            h2.innerHTML = this.nombre;
            document.body.appendChild(h2);

            for (const cuenta of this.cuentas) {
                const p = document.createElement("p");
                p.innerHTML = cuenta.codigo + " - " + cuenta.saldo + " €";
                document.body.appendChild(p);
            }

        }

        actualizarCuenta(codigo, movimiento) {
            let coincidencia = false;

            for (const cuenta of this.cuentas) {
                if (codigo == cuenta.codigo) {
                    coincidencia = true;
                    cuenta.saldo += movimiento;
                    console.log(`Cuenta ${codigo} actualizada. Nuevo saldo: ${cuenta.saldo}€`);
                    break;
                }
            }

            if (!coincidencia) {
                console.warn("No existe una cuenta con ese código.");
            }
        }

        // eliminarCuenta(codigo) {
        //     let coincidencia = false;

        //     for (const cuenta of this.cuentas) {
        //         if (codigo == cuenta.codigo) {
        //             coincidencia = true;
        //             if (cuenta.saldo > 0) {
        //                 console.warn("El saldo de esta cuenta no es 0.")
        //                 break;
        //             } else {

        //             }
        //         }
        //     }

        //     if (!coincidencia) {
        //         console.warn("No existe una cuenta con ese código.");
        //     }
        // }

        eliminarCuenta(codigo) {
            const index = this.cuentas.findIndex(cuenta => cuenta.codigo == codigo);

            if (index === -1) {
                console.warn("No existe una cuenta con ese código.");
                return;
            }

            if (this.cuentas[index].saldo > 0) {
                console.warn("El saldo de esta cuenta no es 0.");
                return;
            }

            // Si se puede, elimina la cuenta
            this.cuentas.splice(index, 1);
            console.log(`Cuenta ${codigo} eliminada correctamente.`);
        }
    }


    const banco = new Banco("Banco nuevo");
    banco.crearCuenta(12345, 100);
    banco.crearCuenta(12315);
    banco.crearCuenta(51245, 125);

    banco.actualizarCuenta(12345, -100);

    banco.listarCuentas();

    banco.eliminarCuenta(12345);

    banco.listarCuentas();



});