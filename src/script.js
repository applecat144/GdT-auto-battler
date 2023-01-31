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
        isMoving: 0,
        isMelee: 0,
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
        }
    }
}

const armyAmodule = (function () {

    let IDnum = 0;

    let armyA = {
        art: [],
        mis: [],
        cav: [],
        inf: []
    }

    const getArmy = function () {
        return armyA;
    }

    const resetArmyA = function () {
        ID = 0;

        armyA.art = [];
        armyA.mis = [];
        armyA.cav = [];
        armyA.inf = [];
    }

    const addUnit = function (owner, name, type, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
        diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis) {

        let inID = type + `-` + IDnum;

        IDnum++;

        let newUnit = unitFac(owner, name, type, inID, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
            diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis);

        if (armyA[newUnit.type]) {

            armyA[newUnit.type].push(newUnit)

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

        let type = ID.split("-")[0];

        if (armyA[type]) {
            for (let i = 0; i < armyA[type].length; i++) {
                if (armyA[type][i].inID === ID) {
                    return { type: type, index: i };
                } else {
                    let error = `ERR getUnitIndexById : unit '${ID}' doesn't exist`;
                    console.log(error);
                    alert(error);
                }
            }
        } else {
            let error = `ERR getUnitIndexById : ${ID} unit type doesn't exist`;
            console.log(error);
            alert(error);
        }
    }

    const woundUnit = function (ID) {

        let access = getUnitIndexById(ID);

        armyA[access.type][access.index].wound();

        if (armyA[access.type][access.index].en <= 0) {
            console.log(`${ID} got killed`);
            killUnit(ID);
        }

    }

    const killUnit = function (ID) {

        let access = getUnitIndexById(ID);

        if (armyA[access.type][access.index].en > 0) {
            let error = `ERR killUnit : unit isn't dead`
            console.log(error);
            alert(error);
        } else {
            armyA[access.type].splice(access.index, 1);
        }
    }

    return {
        getArmy,
        resetArmyA,
        addUnit,
        getUnitIndexById,
        woundUnit,
        killUnit,
    }
})();

armyAmodule.addUnit("Gaetan", "Conscrits", "inf", 2, 0, 10, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyAmodule.addUnit("Gaetan", "Cavalerie lourde", "cav", 4, -2, 16, 3, 2, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0);
armyAmodule.addUnit("Gaetan", "Archers d'élite", "mis", 1, 6, 14, 2, 6, 3, 5, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0);

console.log(armyAmodule.getArmy());

document.getElementById('wound').addEventListener('click', () => {
    armyAmodule.woundUnit("cav-1");
    armyAmodule.woundUnit("inf-0");
    armyAmodule.woundUnit("mis-2");

    console.log(armyAmodule.getArmy());
})