import './style.css'

const unitFac = function (owner, name, type, ID, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
    diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis) {
    return {
        owner,
        name,
        type,
        ID,
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

const armyAmodule = function () {

    let ID = 0;

    let armyA = {
        art: [],
        mis: [],
        cav: [],
        inf: []
    }

    const getArmy = function() {
        return armyA;
    }

    const addUnit = function (owner, name, type, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
        diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis) {

        let inID = type+`-`+ID;

        ID++;

        let newUnit = unitFac(owner, name, type, inID, me, di, de, mv, mo, en, co, chargeBonus, meVsCav, meVsInf, meVsMis,
            diVsCav, diVsInf, diVsMis, deVsCav, deVsInf, deVsMis);

        switch (newUnit.type) {
            case `art`:
                armyA.art.push(newUnit);
                break;

            case `mis`:
                armyA.mis.push(newUnit);
                break;

            case `cav`:
                armyA.cav.push(newUnit);
                break;

            case `inf`:
                armyA.inf.push(newUnit);
                break;

            default:
                console.log(`ERR addUnit : invalid type`)
                return -1;
        }
    }

    const getUnitIndexById = function(ID) {
        let type = ID.split("-")[0];

        switch (type) {
            case `art`:
                for(let i = 0; i < armyA.art.length; i++) {
                    if(armyA.art[i] === ID) {
                        return i;
                    } else if (i === (armyA.art.length -1)) {
                        console.log(`ERR getUnitIndexByID : ID ${ID} doesn't exist`);
                        return -1
                    }
                }
                break;

            case `mis`:
                for(let i = 0; i < armyA.mis.length; i++) {
                    if(armyA.mis[i] === ID) {
                        return i;
                    } else if (i === (armyA.mis.length -1)) {
                        console.log(`ERR getUnitIndexByID : ID ${ID} doesn't exist`);
                        return -1
                    }
                }
                break;

            case `cav`:
                for(let i = 0; i < armyA.cav.length; i++) {
                    if(armyA.cav[i] === ID) {
                        return i;
                    } else if (i === (armyA.cav.length -1)) {
                        console.log(`ERR getUnitIndexByID : ID ${ID} doesn't exist`);
                        return -1
                    }
                }
                break;

            case `inf`:
                for(let i = 0; i < armyA.inf.length; i++) {
                    if(armyA.inf[i] === ID) {
                        return i;
                    } else if (i === (armyA.inf.length -1)) {
                        console.log(`ERR getUnitIndexByID : ID ${ID} doesn't exist`);
                        return -1
                    }
                }
                break;

            default:
                console.log(`ERR getUnitIndexByID : ID type is invalid`)
                return -1;
        }

    }

    return {
        getArmy,
        addUnit,
        getUnitIndexById,
    }
}

