export class kartya {

    #kep;
    #id;
    KIVALASZTL = [];
    constructor(kep, id, szuloElem) {
        this.#kep = kep;
        this.#id = id;
        this.szuloElem = szuloElem.append(`<div class="kepek"><img src="./kepek/hatter.jpg" alt=""></div>`);
        this.kapcsolo = true;
        this.elem = $(".kepek:last-child");
        this.kattintasTrigger();
    }

    kattintasTrigger() {
        const self = this;
        this.elem.on("click", function () {
           //KIVALASZTL (lista) feltöltése az id-kel
            self.KIVALASZTL.push(self.#id);

            self.kivalasztas(self.KIVALASZTL);

            //megfordítás és visszafordítás kattintásra
            self.fordit(self.#kep);
            setTimeout(function () {
                self.visszafordit();
            }, 300);

        });

    }

    fordit(kep) {
        this.elem.find("img").attr("src", kep);
    }
    visszafordit() {
        this.elem.find("img").attr("src", "./kepek/hatter.jpg");
    }
    kivalasztas(Klista) {
        // console.log("hossza: ", Klista.length);

        if (Klista.length == 2) {
            // console.log("k1: ",Klista[0])
            // console.log("k1: ",Klista[1])
            if (Klista[0] == Klista[1]) {
                this.elem.find(`#${Klista[0]}`).attr("src", "./kepek/hatter");
                this.elem.find(`#${Klista[1]}`).attr("src", "./kepek/hatter");
            }
            Klista = [];
        }

    }
    // nyert(id) {
    //    this.elem.find(`#${id}`).attr("src", "./kepek/hatter");
    // }

}

export default kartya;