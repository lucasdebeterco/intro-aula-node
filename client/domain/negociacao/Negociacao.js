class Negociacao {

    constructor(_data, _quantidade, _valor) {
        Object.assign(this, {_quantidade, _valor});
        this._data = new Data(_data.getTime());
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        //return this._data;
        return new Data(this._data.getTime());
    }
    
    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}