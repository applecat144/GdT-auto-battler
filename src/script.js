import './style.css'

const unitFac = function (owner, name, type, inID, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
    diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis) {
    return {
        owner,
        name,
        type,
        inID,
        me,
        di,
        de,
        mv,
        mo,
        en,
        co,
        chargeBonus,
        bonusMe: {
            meVsCav,
            meVsInf,
            meVsMis
        },
        bonusDi: {
            diVsCav,
            diVsInf,
            diVsMis
        },
        bonusDe: {
            deVsCav,
            deVsInf,
            deVsMis
        },
        meTarget: null,
        diTarget: null,
        isEngaged: null,
        isFleeing: 0,
        wound: function () {
            if (this.en > 0) {
                this.en -= 1;
            }
        },
        flee: function () {
            if (this.isFleeing === 0) {
                this.isFleeing = 1;
            }
        },
        stopFlee: function () {
            if (this.isFleeing === 1) {
                this.isFleeing = 0;
            }
        },
        engage: function (targetID) {
            this.isEngaged = targetID;
        },
        disengage: function () {
            this.isEngaged = null;
        }
    }
}

const armyModule = function (letter) {

    let IDnum = 0;

    let army = {
        armyID: `army`+letter,
        art: [],
        mis: [],
        cav: [],
        inf: []
    }

    const getArmy = function () {
        return army;
    }

    const resetArmy = function () {
        ID = 0;

        army.art = [];
        army.mis = [];
        army.cav = [];
        army.inf = [];
    }

    const addUnit = function (owner, name, type, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
        diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis) {

        let inID = letter + `.` + type + `-` + IDnum;

        IDnum++;

        let newUnit = unitFac(owner, name, type, inID, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
            diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis);

        if (army[newUnit.type]) {

            army[newUnit.type].push(newUnit)

            return 1;

        } else {
            let error = `ERR addUnit : unit type doesn't exist`;
            console.log(error);
            alert(error);

            return -1;
        }
    };

    const getUnitIndexById = function (ID) {

        // this function takes an ID and returns an object containing the array and the index in that array of the
        // inputed ID.

        let type = ID.split("-") [0].split(".")[1];

        if (army[type].length > 0) {
            for (let i = 0; i < army[type].length; i++) {
                if (army[type][i].inID === ID) {
                    return { type: type, index: i };
                } else if (i === (army[type].length - 1)){
                    let error = `ERR getUnitIndexById : unit '${ID}' not found`;
                    console.log(error);
                    alert(error);

                    return -1;
                }
            }
        } else if (army[type]){
            let error = `ERR getUnitIndexById : unit ${ID} not found`;
            console.log(error);
            alert(error);

            return -1;
        } else {
            let error = `ERR getUnitIndexById : ${ID} unit type doesn't exist`;
            console.log(error);
            alert(error);

            return -1;
        }
    }

    const woundUnit = function (ID) {

        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR woundUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        army[access.type][access.index].wound();

        if (army[access.type][access.index].en <= 0) {
            console.log(`woundUnit : ${ID} got killed`);
            killUnit(ID);
        }

    }

    const killUnit = function (ID) {

        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR killUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        if (army[access.type][access.index].en > 0) {
            let error = `ERR killUnit : unit isn't dead`
            console.log(error);
            alert(error);
        } else {
            army[access.type].splice(access.index, 1);
        }
    }

    const route = function(ID) {

        let access = getUnitIndexByID(ID);

        if (access === -1) {
            let error = `ERR route : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        if (army[access.type][access.index].isFleeing === 0) {
            army[access.type][access.index].flee();
        } else {
            console.log(`route : ${ID} is already routed`);
        }
    }

    const unroute = function (ID) {

        let access = getUnitIndexByID(ID);

        if (access === -1) {
            let error = `ERR unroute : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        }

        if (army[access.type][access.index].isFleeing === 1) {
            army[access.type][access.index].stopFlee();
        } else {
            console.log(`unroute : ${ID} is not routed`);
        }
    }

    const engageUnit = function (ID, targetID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR engageUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        army[access.type][access.index].engage(targetID);
    }

    const disengageUnit = function (ID) {
        let access = getUnitIndexById(ID);

        if (access === -1) {
            let error = `ERR engageUnit : ${ID} not found`;
            console.log(error);
            alert(error);
            return -1;
        };

        army[access.type][access.index].disengage();
    }

    return {
        getArmy,
        resetArmy,
        addUnit,
        getUnitIndexById,
        woundUnit,
        killUnit,
        route,
        unroute,
        engageUnit,
        disengageUnit,
    }
};

let armyA = (armyModule)(`A`);
let armyB = (armyModule)(`B`);

armyA.addUnit('Gaetan', 'Conscrits', 'inf', 2, null, 10, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyA.addUnit('Gaetan', 'Lanciers', 'inf', 4, null, 14, 1, 4, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0);
armyA.addUnit('Gaetan', 'Cavalerie lourde', 'cav', 4, -2, 16, 3, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyA.addUnit('Gaetan', 'Archers d\'élite', 'mis', 1, 6, 14, 2, 6, 3, 5, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0);

armyB.addUnit('Gérard', 'Conscrits', 'inf', 2, null, 10, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyB.addUnit('Gérard', 'Lanciers', 'inf', 4, null, 14, 1, 4, 2, 3, 0, 2, 0, 0, 0, 0, 0, 0, -2, 0);
armyB.addUnit('Gérard', 'Cavalerie lourde', 'cav', 4, -2, 16, 3, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyB.addUnit('Gérard', 'Archers d\'élite', 'mis', 1, 6, 14, 2, 6, 3, 5, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0);

console.log(armyA.getArmy());
console.log(armyB.getArmy());