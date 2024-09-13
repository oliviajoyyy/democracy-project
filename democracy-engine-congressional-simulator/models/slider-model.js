

class SliderTracking {

    currentVal;
    prevVal;
    millisLastActive;
    active; // boolean

    changeRange = 10;

    constructor(cVal, activeStatus) {
        this.currentVal = cVal;
        this.prevVal = cVal;
        if (activeStatus) {
            this.setActive(cVal);
        } else {
            this.active = false;
        }
    }

    setPrevVal(v) {
        this.prevVal = v;
    }

    setCurrentVal(v) {
        this.millisLastActive = millis();
        this.prevVal = this.currentVal;
        this.currentVal = v;
    }

    // when setting active, also record millis() and 
    // current value gets set to prev and update current
    setActive(currentVal) {
        this.active = true;
        this.millisLastActive = millis();
        this.prevVal = this.currentVal;
        this.currentVal = currentVal;
    }

    setInactive() {
        this.active = false;
    }

    // returns bool
    isActive() {
        return this.active;
    }

    // returns bool
    outsideThresh(currentVal) {
        if (currentVal > this.prevVal+this.changeRange || currentVal < this.prevVal-this.changeRange) {
            return true;
        } else {
            return false;
        }
    }

    checkActiveChange() {
        //if 
    }

    getMillisLastActive() {
        return this.millisLastActive;
    }

}