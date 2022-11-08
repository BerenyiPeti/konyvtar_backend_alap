class KonyvModel {
    #konyvekTomb = [];

    constructor(token) {
       //console.log("KonyvModel");
       this.token = token
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                //console.log('Success:', data);
                this.#konyvekTomb = data;
                //console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatModosit(vegpont, adat) {
        console.log("módosítok!", adat);
        vegpont += "/" + adat.id
        fetch(vegpont, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "X-CSRF-TOKEN": this.token,
            },
            body: JSON.stringify(adat)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("MÓDOSíTOTTAM");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatTorol(vegpont, adat) {

        vegpont += "/" + adat.id
        fetch(vegpont, {
            method: 'DELETE',
            headers: {
                "X-CSRF-TOKEN": this.token,
            },
        })
            .then()
            .then(() => {
                console.log("TÖRÖLTEM");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default KonyvModel;