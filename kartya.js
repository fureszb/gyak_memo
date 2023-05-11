let KIVALASZTL = [];
export class kartya {

    #kep;
    #id;
    constructor(kep, id, szuloElem) {
        this.#kep = kep;
        this.#id = id;
        this.szuloElem = szuloElem.append(`<div class="kepek"><img src="./kepek/hatter.jpg" alt="" id="${this.#id}"></div>`);
        this.kapcsolo = true;
        this.elem = $(".kepek:last-child");
        this.kattintasTrigger();



    }

    kattintasTrigger() {
        let self = this;
        let id = this.#id;
        this.elem.on("click", function () {
            //KIVALASZTL (lista) feltöltése az id-kel
            KIVALASZTL.push(id);
            console.log(id);

            if (KIVALASZTL.length == 2) {
                console.log(KIVALASZTL);

            }
            //megfordítás és visszafordítás kattintásra
            self.fordit(self.#kep);
            setTimeout(function () {
                self.visszafordit();
            }, 300);
            self.kivalasztas();
            if (this.kapcs) {
                self.kivalasztas();
            }
        });

    }

    fordit(kep) {
        this.elem.find("img").attr("src", kep);
    }
    visszafordit() {
        this.elem.find("img").attr("src", "./kepek/hatter.jpg");
    }
    kivalasztas() {
        if (KIVALASZTL.length == 2) {
            console.log("k1: ", KIVALASZTL[0])
            console.log("k2: ", KIVALASZTL[1])
            console.log("teljes: ", KIVALASZTL)

            if (KIVALASZTL[0] === (KIVALASZTL[1])) {
                this.elem.find(`img#${KIVALASZTL[0]}`).attr("src", "");
                this.elem.find(`img#${KIVALASZTL[1]}`).attr("src", "");
            }
            KIVALASZTL = [];

        }

    }
    // nyert(id) {
    //    this.elem.find(`#${id}`).attr("src", "./kepek/hatter");
    // }

}

export default kartya;