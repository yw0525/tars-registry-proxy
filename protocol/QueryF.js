// **********************************************************************
// Parsed By TarsParser(2.4.5), Generated By tars2node(20200707)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "QueryF.tars" by Server Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var assert    = require("assert");
var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var _hasOwnProperty = Object.prototype.hasOwnProperty;

var registryProxy = registryProxy || {};
module.exports.registryProxy = registryProxy;

registryProxy.EndpointF = function() {
    this.host = "";
    this.port = 0;
    this.timeout = 0;
    this.istcp = 0;
    this.grid = 0;
    this.groupworkid = 0;
    this.grouprealid = 0;
    this.setId = "";
    this.qos = 0;
    this.bakFlag = 0;
    this.weight = 0;
    this.weightType = 0;
    this._classname = "registryProxy.EndpointF";
};
registryProxy.EndpointF._classname = "registryProxy.EndpointF";
registryProxy.EndpointF._write = function (os, tag, value) { os.writeStruct(tag, value); };
registryProxy.EndpointF._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
registryProxy.EndpointF._readFrom = function (is) {
    var tmp = new registryProxy.EndpointF;
    tmp.host = is.readString(0, true, "");
    tmp.port = is.readInt32(1, true, 0);
    tmp.timeout = is.readInt32(2, true, 0);
    tmp.istcp = is.readInt32(3, true, 0);
    tmp.grid = is.readInt32(4, true, 0);
    tmp.groupworkid = is.readInt32(5, false, 0);
    tmp.grouprealid = is.readInt32(6, false, 0);
    tmp.setId = is.readString(7, false, "");
    tmp.qos = is.readInt32(8, false, 0);
    tmp.bakFlag = is.readInt32(9, false, 0);
    tmp.weight = is.readInt32(11, false, 0);
    tmp.weightType = is.readInt32(12, false, 0);
    return tmp;
};
registryProxy.EndpointF.prototype._writeTo = function (os) {
    os.writeString(0, this.host);
    os.writeInt32(1, this.port);
    os.writeInt32(2, this.timeout);
    os.writeInt32(3, this.istcp);
    os.writeInt32(4, this.grid);
    os.writeInt32(5, this.groupworkid);
    os.writeInt32(6, this.grouprealid);
    os.writeString(7, this.setId);
    os.writeInt32(8, this.qos);
    os.writeInt32(9, this.bakFlag);
    os.writeInt32(11, this.weight);
    os.writeInt32(12, this.weightType);
};
registryProxy.EndpointF.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
registryProxy.EndpointF.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
registryProxy.EndpointF.prototype.toObject = function() { 
    return {
        "host" : this.host,
        "port" : this.port,
        "timeout" : this.timeout,
        "istcp" : this.istcp,
        "grid" : this.grid,
        "groupworkid" : this.groupworkid,
        "grouprealid" : this.grouprealid,
        "setId" : this.setId,
        "qos" : this.qos,
        "bakFlag" : this.bakFlag,
        "weight" : this.weight,
        "weightType" : this.weightType
    };
};
registryProxy.EndpointF.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "host") && (this.host = json.host);
    _hasOwnProperty.call(json, "port") && (this.port = json.port);
    _hasOwnProperty.call(json, "timeout") && (this.timeout = json.timeout);
    _hasOwnProperty.call(json, "istcp") && (this.istcp = json.istcp);
    _hasOwnProperty.call(json, "grid") && (this.grid = json.grid);
    _hasOwnProperty.call(json, "groupworkid") && (this.groupworkid = json.groupworkid);
    _hasOwnProperty.call(json, "grouprealid") && (this.grouprealid = json.grouprealid);
    _hasOwnProperty.call(json, "setId") && (this.setId = json.setId);
    _hasOwnProperty.call(json, "qos") && (this.qos = json.qos);
    _hasOwnProperty.call(json, "bakFlag") && (this.bakFlag = json.bakFlag);
    _hasOwnProperty.call(json, "weight") && (this.weight = json.weight);
    _hasOwnProperty.call(json, "weightType") && (this.weightType = json.weightType);
    return this;
};
registryProxy.EndpointF.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
registryProxy.EndpointF.new = function () {
    return new registryProxy.EndpointF();
};
registryProxy.EndpointF.create = function (is) {
    return registryProxy.EndpointF._readFrom(is);
};

registryProxy.QueryFImp = function () { 
    this._name   = undefined;
    this._worker = undefined;
};

registryProxy.QueryFImp.prototype.initialize = function () {};

registryProxy.QueryFImp.prototype.onDispatch = function (current, funcName, binBuffer) { 
    if ("__" + funcName in this) {
        return this["__" + funcName](current, binBuffer);
    } else {
        return TarsError.SERVER.FUNC_NOT_FOUND;
    }
};

var __registryProxy_QueryF$tars_ping$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

registryProxy.QueryFImp.prototype.__tars_ping = function (current) {
    __registryProxy_QueryF$tars_ping$RE.call(current, 0);

    return TarsError.SUCCESS;
};

registryProxy.QueryFImp.prototype.findObjectById = function () {
    assert.fail("findObjectById function not implemented");
};

var __registryProxy_QueryF$findObjectById$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeList("", _ret);

        this.doResponse(tup.encode());
    } else if (this.getRequestVersion() === TarsStream.Tup.JSON_VERSION) {
        var _data_ = {};
        _data_["tars_ret"] = _ret;

         this.doResponse(new TarsStream.BinBuffer(Buffer.from(JSON.stringify(_data_))));
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeList(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

registryProxy.QueryFImp.prototype.__findObjectById = function (current, binBuffer) {
    var id = null;

    if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = current.getRequestVersion();
        tup.decode(binBuffer);
        id = tup.readString("id");
    } else if (current.getRequestVersion() === TarsStream.Tup.JSON_VERSION) {
        var _data_ = JSON.parse(binBuffer.toNodeBuffer());
        id = _data_.id;
    } else {
        var is = new TarsStream.TarsInputStream(binBuffer);
        id = is.readString(1, true, "");
    }

    current.sendResponse = __registryProxy_QueryF$findObjectById$RE;

    this.findObjectById(current, id);

    return TarsError.SUCCESS;
};

registryProxy.QueryFImp.prototype.findObjectByIdInSameGroup = function () {
    assert.fail("findObjectByIdInSameGroup function not implemented");
};

var __registryProxy_QueryF$findObjectByIdInSameGroup$RE = function (_ret, activeEp, inactiveEp) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);
        tup.writeList("activeEp", activeEp);
        tup.writeList("inactiveEp", inactiveEp);

        this.doResponse(tup.encode());
    } else if (this.getRequestVersion() === TarsStream.Tup.JSON_VERSION) {
        var _data_ = {};
        _data_["tars_ret"] = _ret;
        _data_["activeEp"] = activeEp.toObject ? activeEp.toObject() : activeEp;
        _data_["inactiveEp"] = inactiveEp.toObject ? inactiveEp.toObject() : inactiveEp;

         this.doResponse(new TarsStream.BinBuffer(Buffer.from(JSON.stringify(_data_))));
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);
        os.writeList(2, activeEp);
        os.writeList(3, inactiveEp);

        this.doResponse(os.getBinBuffer());
    }
};

registryProxy.QueryFImp.prototype.__findObjectByIdInSameGroup = function (current, binBuffer) {
    var id = null;
    var activeEp = null;
    var inactiveEp = null;

    if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = current.getRequestVersion();
        tup.decode(binBuffer);
        id = tup.readString("id");
        activeEp = tup.readList("activeEp", TarsStream.List(registryProxy.EndpointF), new TarsStream.List(registryProxy.EndpointF));
        inactiveEp = tup.readList("inactiveEp", TarsStream.List(registryProxy.EndpointF), new TarsStream.List(registryProxy.EndpointF));
    } else if (current.getRequestVersion() === TarsStream.Tup.JSON_VERSION) {
        var _data_ = JSON.parse(binBuffer.toNodeBuffer());
        id = _data_.id;
        activeEp = _data_.activeEp || new TarsStream.List(registryProxy.EndpointF);
        inactiveEp = _data_.inactiveEp || new TarsStream.List(registryProxy.EndpointF);
    } else {
        var is = new TarsStream.TarsInputStream(binBuffer);
        id = is.readString(1, true, "");
        activeEp = is.readList(2, false, TarsStream.List(registryProxy.EndpointF));
        inactiveEp = is.readList(3, false, TarsStream.List(registryProxy.EndpointF));
    }

    current.sendResponse = __registryProxy_QueryF$findObjectByIdInSameGroup$RE;

    this.findObjectByIdInSameGroup(current, id, activeEp, inactiveEp);

    return TarsError.SUCCESS;
};





