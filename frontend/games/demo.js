(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]'))
        n(r);
    new MutationObserver(r => {
        for (const a of r)
            if (a.type === "childList")
                for (const o of a.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && n(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(r) {
        const a = {};
        return r.integrity && (a.integrity = r.integrity),
        r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
        r.crossOrigin === "use-credentials" ? a.credentials = "include" : r.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin",
        a
    }
    function n(r) {
        if (r.ep)
            return;
        r.ep = !0;
        const a = t(r);
        fetch(r.href, a)
    }
}
)();
const Xa = "182"
  , Dc = 0
  , Mo = 1
  , Lc = 2
  , jr = 1
  , Uc = 2
  , lr = 3
  , ri = 0
  , Qt = 1
  , Bn = 2
  , Vn = 0
  , Vi = 1
  , Ks = 2
  , So = 3
  , yo = 4
  , Ic = 5
  , _i = 100
  , Nc = 101
  , Fc = 102
  , Oc = 103
  , Bc = 104
  , zc = 200
  , Vc = 201
  , Gc = 202
  , Hc = 203
  , Zs = 204
  , $s = 205
  , kc = 206
  , Wc = 207
  , Xc = 208
  , qc = 209
  , Yc = 210
  , jc = 211
  , Kc = 212
  , Zc = 213
  , $c = 214
  , Js = 0
  , Qs = 1
  , ea = 2
  , Hi = 3
  , ta = 4
  , na = 5
  , ia = 6
  , ra = 7
  , vl = 0
  , Jc = 1
  , Qc = 2
  , wn = 0
  , xl = 1
  , Ml = 2
  , Sl = 3
  , yl = 4
  , El = 5
  , Tl = 6
  , Al = 7
  , bl = 300
  , Si = 301
  , ki = 302
  , sa = 303
  , aa = 304
  , rs = 306
  , oa = 1e3
  , zn = 1001
  , la = 1002
  , Ht = 1003
  , eu = 1004
  , Ar = 1005
  , qt = 1006
  , gs = 1007
  , xi = 1008
  , hn = 1009
  , wl = 1010
  , Rl = 1011
  , ur = 1012
  , qa = 1013
  , Cn = 1014
  , An = 1015
  , kn = 1016
  , Ya = 1017
  , ja = 1018
  , fr = 1020
  , Cl = 35902
  , Pl = 35899
  , Dl = 1021
  , Ll = 1022
  , xn = 1023
  , Wn = 1026
  , Mi = 1027
  , Ul = 1028
  , Ka = 1029
  , Wi = 1030
  , Za = 1031
  , $a = 1033
  , Kr = 33776
  , Zr = 33777
  , $r = 33778
  , Jr = 33779
  , ca = 35840
  , ua = 35841
  , fa = 35842
  , ha = 35843
  , da = 36196
  , pa = 37492
  , ma = 37496
  , ga = 37488
  , _a = 37489
  , va = 37490
  , xa = 37491
  , Ma = 37808
  , Sa = 37809
  , ya = 37810
  , Ea = 37811
  , Ta = 37812
  , Aa = 37813
  , ba = 37814
  , wa = 37815
  , Ra = 37816
  , Ca = 37817
  , Pa = 37818
  , Da = 37819
  , La = 37820
  , Ua = 37821
  , Ia = 36492
  , Na = 36494
  , Fa = 36495
  , Oa = 36283
  , Ba = 36284
  , za = 36285
  , Va = 36286
  , tu = 3200
  , nu = 0
  , iu = 1
  , ni = ""
  , un = "srgb"
  , Xi = "srgb-linear"
  , es = "linear"
  , _t = "srgb"
  , bi = 7680
  , Eo = 519
  , ru = 512
  , su = 513
  , au = 514
  , Ja = 515
  , ou = 516
  , lu = 517
  , Qa = 518
  , cu = 519
  , To = 35044
  , Ao = "300 es"
  , bn = 2e3
  , ts = 2001;
function Il(i) {
    for (let e = i.length - 1; e >= 0; --e)
        if (i[e] >= 65535)
            return !0;
    return !1
}
function ns(i) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", i)
}
function uu() {
    const i = ns("canvas");
    return i.style.display = "block",
    i
}
const bo = {};
function wo(...i) {
    const e = "THREE." + i.shift();
    console.log(e, ...i)
}
function je(...i) {
    const e = "THREE." + i.shift();
    console.warn(e, ...i)
}
function ut(...i) {
    const e = "THREE." + i.shift();
    console.error(e, ...i)
}
function hr(...i) {
    const e = i.join(" ");
    e in bo || (bo[e] = !0,
    je(...i))
}
function fu(i, e, t) {
    return new Promise(function(n, r) {
        function a() {
            switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
            case i.WAIT_FAILED:
                r();
                break;
            case i.TIMEOUT_EXPIRED:
                setTimeout(a, t);
                break;
            default:
                n()
            }
        }
        setTimeout(a, t)
    }
    )
}
class Yi {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        const n = this._listeners;
        n[e] === void 0 && (n[e] = []),
        n[e].indexOf(t) === -1 && n[e].push(t)
    }
    hasEventListener(e, t) {
        const n = this._listeners;
        return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1
    }
    removeEventListener(e, t) {
        const n = this._listeners;
        if (n === void 0)
            return;
        const r = n[e];
        if (r !== void 0) {
            const a = r.indexOf(t);
            a !== -1 && r.splice(a, 1)
        }
    }
    dispatchEvent(e) {
        const t = this._listeners;
        if (t === void 0)
            return;
        const n = t[e.type];
        if (n !== void 0) {
            e.target = this;
            const r = n.slice(0);
            for (let a = 0, o = r.length; a < o; a++)
                r[a].call(this, e);
            e.target = null
        }
    }
}
const Wt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"]
  , _s = Math.PI / 180
  , Ga = 180 / Math.PI;
function pr() {
    const i = Math.random() * 4294967295 | 0
      , e = Math.random() * 4294967295 | 0
      , t = Math.random() * 4294967295 | 0
      , n = Math.random() * 4294967295 | 0;
    return (Wt[i & 255] + Wt[i >> 8 & 255] + Wt[i >> 16 & 255] + Wt[i >> 24 & 255] + "-" + Wt[e & 255] + Wt[e >> 8 & 255] + "-" + Wt[e >> 16 & 15 | 64] + Wt[e >> 24 & 255] + "-" + Wt[t & 63 | 128] + Wt[t >> 8 & 255] + "-" + Wt[t >> 16 & 255] + Wt[t >> 24 & 255] + Wt[n & 255] + Wt[n >> 8 & 255] + Wt[n >> 16 & 255] + Wt[n >> 24 & 255]).toLowerCase()
}
function it(i, e, t) {
    return Math.max(e, Math.min(t, i))
}
function hu(i, e) {
    return (i % e + e) % e
}
function vs(i, e, t) {
    return (1 - t) * i + t * e
}
function tr(i, e) {
    switch (e.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return i / 4294967295;
    case Uint16Array:
        return i / 65535;
    case Uint8Array:
        return i / 255;
    case Int32Array:
        return Math.max(i / 2147483647, -1);
    case Int16Array:
        return Math.max(i / 32767, -1);
    case Int8Array:
        return Math.max(i / 127, -1);
    default:
        throw new Error("Invalid component type.")
    }
}
function Jt(i, e) {
    switch (e.constructor) {
    case Float32Array:
        return i;
    case Uint32Array:
        return Math.round(i * 4294967295);
    case Uint16Array:
        return Math.round(i * 65535);
    case Uint8Array:
        return Math.round(i * 255);
    case Int32Array:
        return Math.round(i * 2147483647);
    case Int16Array:
        return Math.round(i * 32767);
    case Int8Array:
        return Math.round(i * 127);
    default:
        throw new Error("Invalid component type.")
    }
}
class Mt {
    constructor(e=0, t=0) {
        Mt.prototype.isVector2 = !0,
        this.x = e,
        this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e,
        this.y = t,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , r = e.elements;
        return this.x = r[0] * t + r[3] * n + r[6],
        this.y = r[1] * t + r[4] * n + r[7],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    }
    clamp(e, t) {
        return this.x = it(this.x, e.x, t.x),
        this.y = it(this.y, e.y, t.y),
        this
    }
    clampScalar(e, t) {
        return this.x = it(this.x, e, t),
        this.y = it(this.y, e, t),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(it(n, e, t))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(it(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this
    }
    rotateAround(e, t) {
        const n = Math.cos(t)
          , r = Math.sin(t)
          , a = this.x - e.x
          , o = this.y - e.y;
        return this.x = a * n - o * r + e.x,
        this.y = a * r + o * n + e.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
class mr {
    constructor(e=0, t=0, n=0, r=1) {
        this.isQuaternion = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._w = r
    }
    static slerpFlat(e, t, n, r, a, o, l) {
        let u = n[r + 0]
          , f = n[r + 1]
          , p = n[r + 2]
          , m = n[r + 3]
          , g = a[o + 0]
          , S = a[o + 1]
          , E = a[o + 2]
          , A = a[o + 3];
        if (l <= 0) {
            e[t + 0] = u,
            e[t + 1] = f,
            e[t + 2] = p,
            e[t + 3] = m;
            return
        }
        if (l >= 1) {
            e[t + 0] = g,
            e[t + 1] = S,
            e[t + 2] = E,
            e[t + 3] = A;
            return
        }
        if (m !== A || u !== g || f !== S || p !== E) {
            let _ = u * g + f * S + p * E + m * A;
            _ < 0 && (g = -g,
            S = -S,
            E = -E,
            A = -A,
            _ = -_);
            let d = 1 - l;
            if (_ < .9995) {
                const L = Math.acos(_)
                  , U = Math.sin(L);
                d = Math.sin(d * L) / U,
                l = Math.sin(l * L) / U,
                u = u * d + g * l,
                f = f * d + S * l,
                p = p * d + E * l,
                m = m * d + A * l
            } else {
                u = u * d + g * l,
                f = f * d + S * l,
                p = p * d + E * l,
                m = m * d + A * l;
                const L = 1 / Math.sqrt(u * u + f * f + p * p + m * m);
                u *= L,
                f *= L,
                p *= L,
                m *= L
            }
        }
        e[t] = u,
        e[t + 1] = f,
        e[t + 2] = p,
        e[t + 3] = m
    }
    static multiplyQuaternionsFlat(e, t, n, r, a, o) {
        const l = n[r]
          , u = n[r + 1]
          , f = n[r + 2]
          , p = n[r + 3]
          , m = a[o]
          , g = a[o + 1]
          , S = a[o + 2]
          , E = a[o + 3];
        return e[t] = l * E + p * m + u * S - f * g,
        e[t + 1] = u * E + p * g + f * m - l * S,
        e[t + 2] = f * E + p * S + l * g - u * m,
        e[t + 3] = p * E - l * m - u * g - f * S,
        e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e,
        this._onChangeCallback()
    }
    set(e, t, n, r) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._w = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(e, t=!0) {
        const n = e._x
          , r = e._y
          , a = e._z
          , o = e._order
          , l = Math.cos
          , u = Math.sin
          , f = l(n / 2)
          , p = l(r / 2)
          , m = l(a / 2)
          , g = u(n / 2)
          , S = u(r / 2)
          , E = u(a / 2);
        switch (o) {
        case "XYZ":
            this._x = g * p * m + f * S * E,
            this._y = f * S * m - g * p * E,
            this._z = f * p * E + g * S * m,
            this._w = f * p * m - g * S * E;
            break;
        case "YXZ":
            this._x = g * p * m + f * S * E,
            this._y = f * S * m - g * p * E,
            this._z = f * p * E - g * S * m,
            this._w = f * p * m + g * S * E;
            break;
        case "ZXY":
            this._x = g * p * m - f * S * E,
            this._y = f * S * m + g * p * E,
            this._z = f * p * E + g * S * m,
            this._w = f * p * m - g * S * E;
            break;
        case "ZYX":
            this._x = g * p * m - f * S * E,
            this._y = f * S * m + g * p * E,
            this._z = f * p * E - g * S * m,
            this._w = f * p * m + g * S * E;
            break;
        case "YZX":
            this._x = g * p * m + f * S * E,
            this._y = f * S * m + g * p * E,
            this._z = f * p * E - g * S * m,
            this._w = f * p * m - g * S * E;
            break;
        case "XZY":
            this._x = g * p * m - f * S * E,
            this._y = f * S * m - g * p * E,
            this._z = f * p * E + g * S * m,
            this._w = f * p * m + g * S * E;
            break;
        default:
            je("Quaternion: .setFromEuler() encountered an unknown order: " + o)
        }
        return t === !0 && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(e, t) {
        const n = t / 2
          , r = Math.sin(n);
        return this._x = e.x * r,
        this._y = e.y * r,
        this._z = e.z * r,
        this._w = Math.cos(n),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e) {
        const t = e.elements
          , n = t[0]
          , r = t[4]
          , a = t[8]
          , o = t[1]
          , l = t[5]
          , u = t[9]
          , f = t[2]
          , p = t[6]
          , m = t[10]
          , g = n + l + m;
        if (g > 0) {
            const S = .5 / Math.sqrt(g + 1);
            this._w = .25 / S,
            this._x = (p - u) * S,
            this._y = (a - f) * S,
            this._z = (o - r) * S
        } else if (n > l && n > m) {
            const S = 2 * Math.sqrt(1 + n - l - m);
            this._w = (p - u) / S,
            this._x = .25 * S,
            this._y = (r + o) / S,
            this._z = (a + f) / S
        } else if (l > m) {
            const S = 2 * Math.sqrt(1 + l - n - m);
            this._w = (a - f) / S,
            this._x = (r + o) / S,
            this._y = .25 * S,
            this._z = (u + p) / S
        } else {
            const S = 2 * Math.sqrt(1 + m - n - l);
            this._w = (o - r) / S,
            this._x = (a + f) / S,
            this._y = (u + p) / S,
            this._z = .25 * S
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < 1e-8 ? (n = 0,
        Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
        this._y = e.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -e.z,
        this._z = e.y,
        this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
        this._y = e.z * t.x - e.x * t.z,
        this._z = e.x * t.y - e.y * t.x,
        this._w = n),
        this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(it(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        const n = this.angleTo(e);
        if (n === 0)
            return this;
        const r = Math.min(1, t / n);
        return this.slerp(e, r),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return e === 0 ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x = this._x * e,
        this._y = this._y * e,
        this._z = this._z * e,
        this._w = this._w * e),
        this._onChangeCallback(),
        this
    }
    multiply(e) {
        return this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        const n = e._x
          , r = e._y
          , a = e._z
          , o = e._w
          , l = t._x
          , u = t._y
          , f = t._z
          , p = t._w;
        return this._x = n * p + o * l + r * f - a * u,
        this._y = r * p + o * u + a * l - n * f,
        this._z = a * p + o * f + n * u - r * l,
        this._w = o * p - n * l - r * u - a * f,
        this._onChangeCallback(),
        this
    }
    slerp(e, t) {
        if (t <= 0)
            return this;
        if (t >= 1)
            return this.copy(e);
        let n = e._x
          , r = e._y
          , a = e._z
          , o = e._w
          , l = this.dot(e);
        l < 0 && (n = -n,
        r = -r,
        a = -a,
        o = -o,
        l = -l);
        let u = 1 - t;
        if (l < .9995) {
            const f = Math.acos(l)
              , p = Math.sin(f);
            u = Math.sin(u * f) / p,
            t = Math.sin(t * f) / p,
            this._x = this._x * u + n * t,
            this._y = this._y * u + r * t,
            this._z = this._z * u + a * t,
            this._w = this._w * u + o * t,
            this._onChangeCallback()
        } else
            this._x = this._x * u + n * t,
            this._y = this._y * u + r * t,
            this._z = this._z * u + a * t,
            this._w = this._w * u + o * t,
            this.normalize();
        return this
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n)
    }
    random() {
        const e = 2 * Math.PI * Math.random()
          , t = 2 * Math.PI * Math.random()
          , n = Math.random()
          , r = Math.sqrt(1 - n)
          , a = Math.sqrt(n);
        return this.set(r * Math.sin(e), r * Math.cos(e), a * Math.sin(t), a * Math.cos(t))
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t=0) {
        return this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t),
        this._y = e.getY(t),
        this._z = e.getZ(t),
        this._w = e.getW(t),
        this._onChangeCallback(),
        this
    }
    toJSON() {
        return this.toArray()
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
class $ {
    constructor(e=0, t=0, n=0) {
        $.prototype.isVector3 = !0,
        this.x = e,
        this.y = t,
        this.z = n
    }
    set(e, t, n) {
        return n === void 0 && (n = this.z),
        this.x = e,
        this.y = t,
        this.z = n,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    }
    applyEuler(e) {
        return this.applyQuaternion(Ro.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(Ro.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , a = e.elements;
        return this.x = a[0] * t + a[3] * n + a[6] * r,
        this.y = a[1] * t + a[4] * n + a[7] * r,
        this.z = a[2] * t + a[5] * n + a[8] * r,
        this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , a = e.elements
          , o = 1 / (a[3] * t + a[7] * n + a[11] * r + a[15]);
        return this.x = (a[0] * t + a[4] * n + a[8] * r + a[12]) * o,
        this.y = (a[1] * t + a[5] * n + a[9] * r + a[13]) * o,
        this.z = (a[2] * t + a[6] * n + a[10] * r + a[14]) * o,
        this
    }
    applyQuaternion(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , a = e.x
          , o = e.y
          , l = e.z
          , u = e.w
          , f = 2 * (o * r - l * n)
          , p = 2 * (l * t - a * r)
          , m = 2 * (a * n - o * t);
        return this.x = t + u * f + o * m - l * p,
        this.y = n + u * p + l * f - a * m,
        this.z = r + u * m + a * p - o * f,
        this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * r,
        this.y = a[1] * t + a[5] * n + a[9] * r,
        this.z = a[2] * t + a[6] * n + a[10] * r,
        this.normalize()
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    }
    clamp(e, t) {
        return this.x = it(this.x, e.x, t.x),
        this.y = it(this.y, e.y, t.y),
        this.z = it(this.z, e.z, t.z),
        this
    }
    clampScalar(e, t) {
        return this.x = it(this.x, e, t),
        this.y = it(this.y, e, t),
        this.z = it(this.z, e, t),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(it(n, e, t))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this
    }
    cross(e) {
        return this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        const n = e.x
          , r = e.y
          , a = e.z
          , o = t.x
          , l = t.y
          , u = t.z;
        return this.x = r * u - a * l,
        this.y = a * o - n * u,
        this.z = n * l - r * o,
        this
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (t === 0)
            return this.set(0, 0, 0);
        const n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return xs.copy(this).projectOnVector(e),
        this.sub(xs)
    }
    reflect(e) {
        return this.sub(xs.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(it(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y
          , r = this.z - e.z;
        return t * t + n * n + r * r
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        const r = Math.sin(t) * e;
        return this.x = r * Math.sin(n),
        this.y = Math.cos(t) * e,
        this.z = r * Math.cos(n),
        this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t),
        this.y = n,
        this.z = e * Math.cos(t),
        this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length()
          , n = this.setFromMatrixColumn(e, 1).length()
          , r = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = n,
        this.z = r,
        this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3)
    }
    setFromEuler(e) {
        return this.x = e._x,
        this.y = e._y,
        this.z = e._z,
        this
    }
    setFromColor(e) {
        return this.x = e.r,
        this.y = e.g,
        this.z = e.b,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        const e = Math.random() * Math.PI * 2
          , t = Math.random() * 2 - 1
          , n = Math.sqrt(1 - t * t);
        return this.x = n * Math.cos(e),
        this.y = t,
        this.z = n * Math.sin(e),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
const xs = new $
  , Ro = new mr;
class $e {
    constructor(e, t, n, r, a, o, l, u, f) {
        $e.prototype.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        e !== void 0 && this.set(e, t, n, r, a, o, l, u, f)
    }
    set(e, t, n, r, a, o, l, u, f) {
        const p = this.elements;
        return p[0] = e,
        p[1] = r,
        p[2] = l,
        p[3] = t,
        p[4] = a,
        p[5] = u,
        p[6] = n,
        p[7] = o,
        p[8] = f,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , r = t.elements
          , a = this.elements
          , o = n[0]
          , l = n[3]
          , u = n[6]
          , f = n[1]
          , p = n[4]
          , m = n[7]
          , g = n[2]
          , S = n[5]
          , E = n[8]
          , A = r[0]
          , _ = r[3]
          , d = r[6]
          , L = r[1]
          , U = r[4]
          , C = r[7]
          , I = r[2]
          , O = r[5]
          , N = r[8];
        return a[0] = o * A + l * L + u * I,
        a[3] = o * _ + l * U + u * O,
        a[6] = o * d + l * C + u * N,
        a[1] = f * A + p * L + m * I,
        a[4] = f * _ + p * U + m * O,
        a[7] = f * d + p * C + m * N,
        a[2] = g * A + S * L + E * I,
        a[5] = g * _ + S * U + E * O,
        a[8] = g * d + S * C + E * N,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , a = e[3]
          , o = e[4]
          , l = e[5]
          , u = e[6]
          , f = e[7]
          , p = e[8];
        return t * o * p - t * l * f - n * a * p + n * l * u + r * a * f - r * o * u
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , a = e[3]
          , o = e[4]
          , l = e[5]
          , u = e[6]
          , f = e[7]
          , p = e[8]
          , m = p * o - l * f
          , g = l * u - p * a
          , S = f * a - o * u
          , E = t * m + n * g + r * S;
        if (E === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const A = 1 / E;
        return e[0] = m * A,
        e[1] = (r * f - p * n) * A,
        e[2] = (l * n - r * o) * A,
        e[3] = g * A,
        e[4] = (p * t - r * u) * A,
        e[5] = (r * a - l * t) * A,
        e[6] = S * A,
        e[7] = (n * u - f * t) * A,
        e[8] = (o * t - n * a) * A,
        this
    }
    transpose() {
        let e;
        const t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    }
    setUvTransform(e, t, n, r, a, o, l) {
        const u = Math.cos(a)
          , f = Math.sin(a);
        return this.set(n * u, n * f, -n * (u * o + f * l) + o + e, -r * f, r * u, -r * (-f * o + u * l) + l + t, 0, 0, 1),
        this
    }
    scale(e, t) {
        return this.premultiply(Ms.makeScale(e, t)),
        this
    }
    rotate(e) {
        return this.premultiply(Ms.makeRotation(-e)),
        this
    }
    translate(e, t) {
        return this.premultiply(Ms.makeTranslation(e, t)),
        this
    }
    makeTranslation(e, t) {
        return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
    }
    makeRotation(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, n, t, 0, 0, 0, 1),
        this
    }
    makeScale(e, t) {
        return this.set(e, 0, 0, 0, t, 0, 0, 0, 1),
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let r = 0; r < 9; r++)
            if (t[r] !== n[r])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 9; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
const Ms = new $e
  , Co = new $e().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322)
  , Po = new $e().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function du() {
    const i = {
        enabled: !0,
        workingColorSpace: Xi,
        spaces: {},
        convert: function(r, a, o) {
            return this.enabled === !1 || a === o || !a || !o || (this.spaces[a].transfer === _t && (r.r = Gn(r.r),
            r.g = Gn(r.g),
            r.b = Gn(r.b)),
            this.spaces[a].primaries !== this.spaces[o].primaries && (r.applyMatrix3(this.spaces[a].toXYZ),
            r.applyMatrix3(this.spaces[o].fromXYZ)),
            this.spaces[o].transfer === _t && (r.r = Gi(r.r),
            r.g = Gi(r.g),
            r.b = Gi(r.b))),
            r
        },
        workingToColorSpace: function(r, a) {
            return this.convert(r, this.workingColorSpace, a)
        },
        colorSpaceToWorking: function(r, a) {
            return this.convert(r, a, this.workingColorSpace)
        },
        getPrimaries: function(r) {
            return this.spaces[r].primaries
        },
        getTransfer: function(r) {
            return r === ni ? es : this.spaces[r].transfer
        },
        getToneMappingMode: function(r) {
            return this.spaces[r].outputColorSpaceConfig.toneMappingMode || "standard"
        },
        getLuminanceCoefficients: function(r, a=this.workingColorSpace) {
            return r.fromArray(this.spaces[a].luminanceCoefficients)
        },
        define: function(r) {
            Object.assign(this.spaces, r)
        },
        _getMatrix: function(r, a, o) {
            return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)
        },
        _getDrawingBufferColorSpace: function(r) {
            return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace
        },
        _getUnpackColorSpace: function(r=this.workingColorSpace) {
            return this.spaces[r].workingColorSpaceConfig.unpackColorSpace
        },
        fromWorkingColorSpace: function(r, a) {
            return hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),
            i.workingToColorSpace(r, a)
        },
        toWorkingColorSpace: function(r, a) {
            return hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),
            i.colorSpaceToWorking(r, a)
        }
    }
      , e = [.64, .33, .3, .6, .15, .06]
      , t = [.2126, .7152, .0722]
      , n = [.3127, .329];
    return i.define({
        [Xi]: {
            primaries: e,
            whitePoint: n,
            transfer: es,
            toXYZ: Co,
            fromXYZ: Po,
            luminanceCoefficients: t,
            workingColorSpaceConfig: {
                unpackColorSpace: un
            },
            outputColorSpaceConfig: {
                drawingBufferColorSpace: un
            }
        },
        [un]: {
            primaries: e,
            whitePoint: n,
            transfer: _t,
            toXYZ: Co,
            fromXYZ: Po,
            luminanceCoefficients: t,
            outputColorSpaceConfig: {
                drawingBufferColorSpace: un
            }
        }
    }),
    i
}
const at = du();
function Gn(i) {
    return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014, 2.4)
}
function Gi(i) {
    return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055
}
let wi;
class pu {
    static getDataURL(e, t="image/png") {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
            return e.src;
        let n;
        if (e instanceof HTMLCanvasElement)
            n = e;
        else {
            wi === void 0 && (wi = ns("canvas")),
            wi.width = e.width,
            wi.height = e.height;
            const r = wi.getContext("2d");
            e instanceof ImageData ? r.putImageData(e, 0, 0) : r.drawImage(e, 0, 0, e.width, e.height),
            n = wi
        }
        return n.toDataURL(t)
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
            const t = ns("canvas");
            t.width = e.width,
            t.height = e.height;
            const n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height);
            const r = n.getImageData(0, 0, e.width, e.height)
              , a = r.data;
            for (let o = 0; o < a.length; o++)
                a[o] = Gn(a[o] / 255) * 255;
            return n.putImageData(r, 0, 0),
            t
        } else if (e.data) {
            const t = e.data.slice(0);
            for (let n = 0; n < t.length; n++)
                t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Gn(t[n] / 255) * 255) : t[n] = Gn(t[n]);
            return {
                data: t,
                width: e.width,
                height: e.height
            }
        } else
            return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
            e
    }
}
let mu = 0;
class eo {
    constructor(e=null) {
        this.isSource = !0,
        Object.defineProperty(this, "id", {
            value: mu++
        }),
        this.uuid = pr(),
        this.data = e,
        this.dataReady = !0,
        this.version = 0
    }
    getSize(e) {
        const t = this.data;
        return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayHeight, t.displayWidth, 0) : t !== null ? e.set(t.width, t.height, t.depth || 0) : e.set(0, 0, 0),
        e
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.images[this.uuid] !== void 0)
            return e.images[this.uuid];
        const n = {
            uuid: this.uuid,
            url: ""
        }
          , r = this.data;
        if (r !== null) {
            let a;
            if (Array.isArray(r)) {
                a = [];
                for (let o = 0, l = r.length; o < l; o++)
                    r[o].isDataTexture ? a.push(Ss(r[o].image)) : a.push(Ss(r[o]))
            } else
                a = Ss(r);
            n.url = a
        }
        return t || (e.images[this.uuid] = n),
        n
    }
}
function Ss(i) {
    return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? pu.getDataURL(i) : i.data ? {
        data: Array.from(i.data),
        width: i.width,
        height: i.height,
        type: i.data.constructor.name
    } : (je("Texture: Unable to serialize Texture."),
    {})
}
let gu = 0;
const ys = new $;
class Zt extends Yi {
    constructor(e=Zt.DEFAULT_IMAGE, t=Zt.DEFAULT_MAPPING, n=zn, r=zn, a=qt, o=xi, l=xn, u=hn, f=Zt.DEFAULT_ANISOTROPY, p=ni) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: gu++
        }),
        this.uuid = pr(),
        this.name = "",
        this.source = new eo(e),
        this.mipmaps = [],
        this.mapping = t,
        this.channel = 0,
        this.wrapS = n,
        this.wrapT = r,
        this.magFilter = a,
        this.minFilter = o,
        this.anisotropy = f,
        this.format = l,
        this.internalFormat = null,
        this.type = u,
        this.offset = new Mt(0,0),
        this.repeat = new Mt(1,1),
        this.center = new Mt(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new $e,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.colorSpace = p,
        this.userData = {},
        this.updateRanges = [],
        this.version = 0,
        this.onUpdate = null,
        this.renderTarget = null,
        this.isRenderTargetTexture = !1,
        this.isArrayTexture = !!(e && e.depth && e.depth > 1),
        this.pmremVersion = 0
    }
    get width() {
        return this.source.getSize(ys).x
    }
    get height() {
        return this.source.getSize(ys).y
    }
    get depth() {
        return this.source.getSize(ys).z
    }
    get image() {
        return this.source.data
    }
    set image(e=null) {
        this.source.data = e
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.name = e.name,
        this.source = e.source,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.channel = e.channel,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.internalFormat = e.internalFormat,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        this.rotation = e.rotation,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrix.copy(e.matrix),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.colorSpace = e.colorSpace,
        this.renderTarget = e.renderTarget,
        this.isRenderTargetTexture = e.isRenderTargetTexture,
        this.isArrayTexture = e.isArrayTexture,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this.needsUpdate = !0,
        this
    }
    setValues(e) {
        for (const t in e) {
            const n = e[t];
            if (n === void 0) {
                je(`Texture.setValues(): parameter '${t}' has value of undefined.`);
                continue
            }
            const r = this[t];
            if (r === void 0) {
                je(`Texture.setValues(): property '${t}' does not exist.`);
                continue
            }
            r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n
        }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.textures[this.uuid] !== void 0)
            return e.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.7,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(e) {
        if (this.mapping !== bl)
            return e;
        if (e.applyMatrix3(this.matrix),
        e.x < 0 || e.x > 1)
            switch (this.wrapS) {
            case oa:
                e.x = e.x - Math.floor(e.x);
                break;
            case zn:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case la:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break
            }
        if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
            case oa:
                e.y = e.y - Math.floor(e.y);
                break;
            case zn:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case la:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break
            }
        return this.flipY && (e.y = 1 - e.y),
        e
    }
    set needsUpdate(e) {
        e === !0 && (this.version++,
        this.source.needsUpdate = !0)
    }
    set needsPMREMUpdate(e) {
        e === !0 && this.pmremVersion++
    }
}
Zt.DEFAULT_IMAGE = null;
Zt.DEFAULT_MAPPING = bl;
Zt.DEFAULT_ANISOTROPY = 1;
class Rt {
    constructor(e=0, t=0, n=0, r=1) {
        Rt.prototype.isVector4 = !0,
        this.x = e,
        this.y = t,
        this.z = n,
        this.w = r
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, r) {
        return this.x = e,
        this.y = t,
        this.z = n,
        this.w = r,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setW(e) {
        return this.w = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = e.w !== void 0 ? e.w : 1,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this.w *= e.w,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e,
        this
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , r = this.z
          , a = this.w
          , o = e.elements;
        return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * a,
        this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * a,
        this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * a,
        this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * a,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this.w /= e.w,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, r, a;
        const u = e.elements
          , f = u[0]
          , p = u[4]
          , m = u[8]
          , g = u[1]
          , S = u[5]
          , E = u[9]
          , A = u[2]
          , _ = u[6]
          , d = u[10];
        if (Math.abs(p - g) < .01 && Math.abs(m - A) < .01 && Math.abs(E - _) < .01) {
            if (Math.abs(p + g) < .1 && Math.abs(m + A) < .1 && Math.abs(E + _) < .1 && Math.abs(f + S + d - 3) < .1)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            const U = (f + 1) / 2
              , C = (S + 1) / 2
              , I = (d + 1) / 2
              , O = (p + g) / 4
              , N = (m + A) / 4
              , Y = (E + _) / 4;
            return U > C && U > I ? U < .01 ? (n = 0,
            r = .707106781,
            a = .707106781) : (n = Math.sqrt(U),
            r = O / n,
            a = N / n) : C > I ? C < .01 ? (n = .707106781,
            r = 0,
            a = .707106781) : (r = Math.sqrt(C),
            n = O / r,
            a = Y / r) : I < .01 ? (n = .707106781,
            r = .707106781,
            a = 0) : (a = Math.sqrt(I),
            n = N / a,
            r = Y / a),
            this.set(n, r, a, t),
            this
        }
        let L = Math.sqrt((_ - E) * (_ - E) + (m - A) * (m - A) + (g - p) * (g - p));
        return Math.abs(L) < .001 && (L = 1),
        this.x = (_ - E) / L,
        this.y = (m - A) / L,
        this.z = (g - p) / L,
        this.w = Math.acos((f + S + d - 1) / 2),
        this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this.w = t[15],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    }
    clamp(e, t) {
        return this.x = it(this.x, e.x, t.x),
        this.y = it(this.y, e.y, t.y),
        this.z = it(this.z, e.z, t.z),
        this.w = it(this.w, e.w, t.w),
        this
    }
    clampScalar(e, t) {
        return this.x = it(this.x, e, t),
        this.y = it(this.y, e, t),
        this.z = it(this.z, e, t),
        this.w = it(this.w, e, t),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(it(n, e, t))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this.w = Math.trunc(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this.w = e.w + (t.w - e.w) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this.w = e.getW(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
class _u extends Yi {
    constructor(e=1, t=1, n={}) {
        super(),
        n = Object.assign({
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: qt,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1,
            depth: 1,
            multiview: !1
        }, n),
        this.isRenderTarget = !0,
        this.width = e,
        this.height = t,
        this.depth = n.depth,
        this.scissor = new Rt(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new Rt(0,0,e,t);
        const r = {
            width: e,
            height: t,
            depth: n.depth
        }
          , a = new Zt(r);
        this.textures = [];
        const o = n.count;
        for (let l = 0; l < o; l++)
            this.textures[l] = a.clone(),
            this.textures[l].isRenderTargetTexture = !0,
            this.textures[l].renderTarget = this;
        this._setTextureOptions(n),
        this.depthBuffer = n.depthBuffer,
        this.stencilBuffer = n.stencilBuffer,
        this.resolveDepthBuffer = n.resolveDepthBuffer,
        this.resolveStencilBuffer = n.resolveStencilBuffer,
        this._depthTexture = null,
        this.depthTexture = n.depthTexture,
        this.samples = n.samples,
        this.multiview = n.multiview
    }
    _setTextureOptions(e={}) {
        const t = {
            minFilter: qt,
            generateMipmaps: !1,
            flipY: !1,
            internalFormat: null
        };
        e.mapping !== void 0 && (t.mapping = e.mapping),
        e.wrapS !== void 0 && (t.wrapS = e.wrapS),
        e.wrapT !== void 0 && (t.wrapT = e.wrapT),
        e.wrapR !== void 0 && (t.wrapR = e.wrapR),
        e.magFilter !== void 0 && (t.magFilter = e.magFilter),
        e.minFilter !== void 0 && (t.minFilter = e.minFilter),
        e.format !== void 0 && (t.format = e.format),
        e.type !== void 0 && (t.type = e.type),
        e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
        e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
        e.flipY !== void 0 && (t.flipY = e.flipY),
        e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
        e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
        for (let n = 0; n < this.textures.length; n++)
            this.textures[n].setValues(t)
    }
    get texture() {
        return this.textures[0]
    }
    set texture(e) {
        this.textures[0] = e
    }
    set depthTexture(e) {
        this._depthTexture !== null && (this._depthTexture.renderTarget = null),
        e !== null && (e.renderTarget = this),
        this._depthTexture = e
    }
    get depthTexture() {
        return this._depthTexture
    }
    setSize(e, t, n=1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e,
            this.height = t,
            this.depth = n;
            for (let r = 0, a = this.textures.length; r < a; r++)
                this.textures[r].image.width = e,
                this.textures[r].image.height = t,
                this.textures[r].image.depth = n,
                this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
            this.dispose()
        }
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.width = e.width,
        this.height = e.height,
        this.depth = e.depth,
        this.scissor.copy(e.scissor),
        this.scissorTest = e.scissorTest,
        this.viewport.copy(e.viewport),
        this.textures.length = 0;
        for (let t = 0, n = e.textures.length; t < n; t++) {
            this.textures[t] = e.textures[t].clone(),
            this.textures[t].isRenderTargetTexture = !0,
            this.textures[t].renderTarget = this;
            const r = Object.assign({}, e.textures[t].image);
            this.textures[t].source = new eo(r)
        }
        return this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        this.resolveDepthBuffer = e.resolveDepthBuffer,
        this.resolveStencilBuffer = e.resolveStencilBuffer,
        e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
        this.samples = e.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class Rn extends _u {
    constructor(e=1, t=1, n={}) {
        super(e, t, n),
        this.isWebGLRenderTarget = !0
    }
}
class Nl extends Zt {
    constructor(e=null, t=1, n=1, r=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: r
        },
        this.magFilter = Ht,
        this.minFilter = Ht,
        this.wrapR = zn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1,
        this.layerUpdates = new Set
    }
    addLayerUpdate(e) {
        this.layerUpdates.add(e)
    }
    clearLayerUpdates() {
        this.layerUpdates.clear()
    }
}
class vu extends Zt {
    constructor(e=null, t=1, n=1, r=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: r
        },
        this.magFilter = Ht,
        this.minFilter = Ht,
        this.wrapR = zn,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class gr {
    constructor(e=new $(1 / 0,1 / 0,1 / 0), t=new $(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = e,
        this.max = t
    }
    set(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    }
    setFromArray(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t += 3)
            this.expandByPoint(mn.fromArray(e, t));
        return this
    }
    setFromBufferAttribute(e) {
        this.makeEmpty();
        for (let t = 0, n = e.count; t < n; t++)
            this.expandByPoint(mn.fromBufferAttribute(e, t));
        return this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++)
            this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        const n = mn.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n),
        this.max.copy(e).add(n),
        this
    }
    setFromObject(e, t=!1) {
        return this.makeEmpty(),
        this.expandByObject(e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    }
    expandByVector(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    }
    expandByObject(e, t=!1) {
        e.updateWorldMatrix(!1, !1);
        const n = e.geometry;
        if (n !== void 0) {
            const a = n.getAttribute("position");
            if (t === !0 && a !== void 0 && e.isInstancedMesh !== !0)
                for (let o = 0, l = a.count; o < l; o++)
                    e.isMesh === !0 ? e.getVertexPosition(o, mn) : mn.fromBufferAttribute(a, o),
                    mn.applyMatrix4(e.matrixWorld),
                    this.expandByPoint(mn);
            else
                e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(),
                br.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(),
                br.copy(n.boundingBox)),
                br.applyMatrix4(e.matrixWorld),
                this.union(br)
        }
        const r = e.children;
        for (let a = 0, o = r.length; a < o; a++)
            this.expandByObject(r[a], t);
        return this
    }
    containsPoint(e) {
        return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, mn),
        mn.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        n = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        n += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        n += e.normal.z * this.min.z),
        t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty())
            return !1;
        this.getCenter(nr),
        wr.subVectors(this.max, nr),
        Ri.subVectors(e.a, nr),
        Ci.subVectors(e.b, nr),
        Pi.subVectors(e.c, nr),
        Zn.subVectors(Ci, Ri),
        $n.subVectors(Pi, Ci),
        ui.subVectors(Ri, Pi);
        let t = [0, -Zn.z, Zn.y, 0, -$n.z, $n.y, 0, -ui.z, ui.y, Zn.z, 0, -Zn.x, $n.z, 0, -$n.x, ui.z, 0, -ui.x, -Zn.y, Zn.x, 0, -$n.y, $n.x, 0, -ui.y, ui.x, 0];
        return !Es(t, Ri, Ci, Pi, wr) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !Es(t, Ri, Ci, Pi, wr)) ? !1 : (Rr.crossVectors(Zn, $n),
        t = [Rr.x, Rr.y, Rr.z],
        Es(t, Ri, Ci, Pi, wr))
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return this.clampPoint(e, mn).distanceTo(e)
    }
    getBoundingSphere(e) {
        return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center),
        e.radius = this.getSize(mn).length() * .5),
        e
    }
    intersect(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (Un[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Un[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Un[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Un[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Un[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Un[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Un[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Un[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Un),
        this)
    }
    translate(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
    toJSON() {
        return {
            min: this.min.toArray(),
            max: this.max.toArray()
        }
    }
    fromJSON(e) {
        return this.min.fromArray(e.min),
        this.max.fromArray(e.max),
        this
    }
}
const Un = [new $, new $, new $, new $, new $, new $, new $, new $]
  , mn = new $
  , br = new gr
  , Ri = new $
  , Ci = new $
  , Pi = new $
  , Zn = new $
  , $n = new $
  , ui = new $
  , nr = new $
  , wr = new $
  , Rr = new $
  , fi = new $;
function Es(i, e, t, n, r) {
    for (let a = 0, o = i.length - 3; a <= o; a += 3) {
        fi.fromArray(i, a);
        const l = r.x * Math.abs(fi.x) + r.y * Math.abs(fi.y) + r.z * Math.abs(fi.z)
          , u = e.dot(fi)
          , f = t.dot(fi)
          , p = n.dot(fi);
        if (Math.max(-Math.max(u, f, p), Math.min(u, f, p)) > l)
            return !1
    }
    return !0
}
const xu = new gr
  , ir = new $
  , Ts = new $;
class ss {
    constructor(e=new $, t=-1) {
        this.isSphere = !0,
        this.center = e,
        this.radius = t
    }
    set(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    }
    setFromPoints(e, t) {
        const n = this.center;
        t !== void 0 ? n.copy(t) : xu.setFromPoints(e).getCenter(n);
        let r = 0;
        for (let a = 0, o = e.length; a < o; a++)
            r = Math.max(r, n.distanceToSquared(e[a]));
        return this.radius = Math.sqrt(r),
        this
    }
    copy(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        const n = this.center.distanceToSquared(e);
        return t.copy(e),
        n > this.radius * this.radius && (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
        t
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(),
        e) : (e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this
    }
    translate(e) {
        return this.center.add(e),
        this
    }
    expandByPoint(e) {
        if (this.isEmpty())
            return this.center.copy(e),
            this.radius = 0,
            this;
        ir.subVectors(e, this.center);
        const t = ir.lengthSq();
        if (t > this.radius * this.radius) {
            const n = Math.sqrt(t)
              , r = (n - this.radius) * .5;
            this.center.addScaledVector(ir, r / n),
            this.radius += r
        }
        return this
    }
    union(e) {
        return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e),
        this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ts.subVectors(e.center, this.center).setLength(e.radius),
        this.expandByPoint(ir.copy(e.center).add(Ts)),
        this.expandByPoint(ir.copy(e.center).sub(Ts))),
        this)
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        return {
            radius: this.radius,
            center: this.center.toArray()
        }
    }
    fromJSON(e) {
        return this.radius = e.radius,
        this.center.fromArray(e.center),
        this
    }
}
const In = new $
  , As = new $
  , Cr = new $
  , Jn = new $
  , bs = new $
  , Pr = new $
  , ws = new $;
class Fl {
    constructor(e=new $, t=new $(0,0,-1)) {
        this.origin = e,
        this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    }
    copy(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    }
    at(e, t) {
        return t.copy(this.origin).addScaledVector(this.direction, e)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    }
    recast(e) {
        return this.origin.copy(this.at(e, In)),
        this
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        const n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        const t = In.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (In.copy(this.origin).addScaledVector(this.direction, t),
        In.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, r) {
        As.copy(e).add(t).multiplyScalar(.5),
        Cr.copy(t).sub(e).normalize(),
        Jn.copy(this.origin).sub(As);
        const a = e.distanceTo(t) * .5
          , o = -this.direction.dot(Cr)
          , l = Jn.dot(this.direction)
          , u = -Jn.dot(Cr)
          , f = Jn.lengthSq()
          , p = Math.abs(1 - o * o);
        let m, g, S, E;
        if (p > 0)
            if (m = o * u - l,
            g = o * l - u,
            E = a * p,
            m >= 0)
                if (g >= -E)
                    if (g <= E) {
                        const A = 1 / p;
                        m *= A,
                        g *= A,
                        S = m * (m + o * g + 2 * l) + g * (o * m + g + 2 * u) + f
                    } else
                        g = a,
                        m = Math.max(0, -(o * g + l)),
                        S = -m * m + g * (g + 2 * u) + f;
                else
                    g = -a,
                    m = Math.max(0, -(o * g + l)),
                    S = -m * m + g * (g + 2 * u) + f;
            else
                g <= -E ? (m = Math.max(0, -(-o * a + l)),
                g = m > 0 ? -a : Math.min(Math.max(-a, -u), a),
                S = -m * m + g * (g + 2 * u) + f) : g <= E ? (m = 0,
                g = Math.min(Math.max(-a, -u), a),
                S = g * (g + 2 * u) + f) : (m = Math.max(0, -(o * a + l)),
                g = m > 0 ? a : Math.min(Math.max(-a, -u), a),
                S = -m * m + g * (g + 2 * u) + f);
        else
            g = o > 0 ? -a : a,
            m = Math.max(0, -(o * g + l)),
            S = -m * m + g * (g + 2 * u) + f;
        return n && n.copy(this.origin).addScaledVector(this.direction, m),
        r && r.copy(As).addScaledVector(Cr, g),
        S
    }
    intersectSphere(e, t) {
        In.subVectors(e.center, this.origin);
        const n = In.dot(this.direction)
          , r = In.dot(In) - n * n
          , a = e.radius * e.radius;
        if (r > a)
            return null;
        const o = Math.sqrt(a - r)
          , l = n - o
          , u = n + o;
        return u < 0 ? null : l < 0 ? this.at(u, t) : this.at(l, t)
    }
    intersectsSphere(e) {
        return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (t === 0)
            return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        const n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        const n = this.distanceToPlane(e);
        return n === null ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n, r, a, o, l, u;
        const f = 1 / this.direction.x
          , p = 1 / this.direction.y
          , m = 1 / this.direction.z
          , g = this.origin;
        return f >= 0 ? (n = (e.min.x - g.x) * f,
        r = (e.max.x - g.x) * f) : (n = (e.max.x - g.x) * f,
        r = (e.min.x - g.x) * f),
        p >= 0 ? (a = (e.min.y - g.y) * p,
        o = (e.max.y - g.y) * p) : (a = (e.max.y - g.y) * p,
        o = (e.min.y - g.y) * p),
        n > o || a > r || ((a > n || isNaN(n)) && (n = a),
        (o < r || isNaN(r)) && (r = o),
        m >= 0 ? (l = (e.min.z - g.z) * m,
        u = (e.max.z - g.z) * m) : (l = (e.max.z - g.z) * m,
        u = (e.min.z - g.z) * m),
        n > u || l > r) || ((l > n || n !== n) && (n = l),
        (u < r || r !== r) && (r = u),
        r < 0) ? null : this.at(n >= 0 ? n : r, t)
    }
    intersectsBox(e) {
        return this.intersectBox(e, In) !== null
    }
    intersectTriangle(e, t, n, r, a) {
        bs.subVectors(t, e),
        Pr.subVectors(n, e),
        ws.crossVectors(bs, Pr);
        let o = this.direction.dot(ws), l;
        if (o > 0) {
            if (r)
                return null;
            l = 1
        } else if (o < 0)
            l = -1,
            o = -o;
        else
            return null;
        Jn.subVectors(this.origin, e);
        const u = l * this.direction.dot(Pr.crossVectors(Jn, Pr));
        if (u < 0)
            return null;
        const f = l * this.direction.dot(bs.cross(Jn));
        if (f < 0 || u + f > o)
            return null;
        const p = -l * Jn.dot(ws);
        return p < 0 ? null : this.at(p / o, a)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class Ct {
    constructor(e, t, n, r, a, o, l, u, f, p, m, g, S, E, A, _) {
        Ct.prototype.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        e !== void 0 && this.set(e, t, n, r, a, o, l, u, f, p, m, g, S, E, A, _)
    }
    set(e, t, n, r, a, o, l, u, f, p, m, g, S, E, A, _) {
        const d = this.elements;
        return d[0] = e,
        d[4] = t,
        d[8] = n,
        d[12] = r,
        d[1] = a,
        d[5] = o,
        d[9] = l,
        d[13] = u,
        d[2] = f,
        d[6] = p,
        d[10] = m,
        d[14] = g,
        d[3] = S,
        d[7] = E,
        d[11] = A,
        d[15] = _,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return new Ct().fromArray(this.elements)
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        t[9] = n[9],
        t[10] = n[10],
        t[11] = n[11],
        t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        t[15] = n[15],
        this
    }
    copyPosition(e) {
        const t = this.elements
          , n = e.elements;
        return t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        this
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(e, t, n) {
        return this.determinant() === 0 ? (e.set(1, 0, 0),
        t.set(0, 1, 0),
        n.set(0, 0, 1),
        this) : (e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this)
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(e) {
        if (e.determinant() === 0)
            return this.identity();
        const t = this.elements
          , n = e.elements
          , r = 1 / Di.setFromMatrixColumn(e, 0).length()
          , a = 1 / Di.setFromMatrixColumn(e, 1).length()
          , o = 1 / Di.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * r,
        t[1] = n[1] * r,
        t[2] = n[2] * r,
        t[3] = 0,
        t[4] = n[4] * a,
        t[5] = n[5] * a,
        t[6] = n[6] * a,
        t[7] = 0,
        t[8] = n[8] * o,
        t[9] = n[9] * o,
        t[10] = n[10] * o,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromEuler(e) {
        const t = this.elements
          , n = e.x
          , r = e.y
          , a = e.z
          , o = Math.cos(n)
          , l = Math.sin(n)
          , u = Math.cos(r)
          , f = Math.sin(r)
          , p = Math.cos(a)
          , m = Math.sin(a);
        if (e.order === "XYZ") {
            const g = o * p
              , S = o * m
              , E = l * p
              , A = l * m;
            t[0] = u * p,
            t[4] = -u * m,
            t[8] = f,
            t[1] = S + E * f,
            t[5] = g - A * f,
            t[9] = -l * u,
            t[2] = A - g * f,
            t[6] = E + S * f,
            t[10] = o * u
        } else if (e.order === "YXZ") {
            const g = u * p
              , S = u * m
              , E = f * p
              , A = f * m;
            t[0] = g + A * l,
            t[4] = E * l - S,
            t[8] = o * f,
            t[1] = o * m,
            t[5] = o * p,
            t[9] = -l,
            t[2] = S * l - E,
            t[6] = A + g * l,
            t[10] = o * u
        } else if (e.order === "ZXY") {
            const g = u * p
              , S = u * m
              , E = f * p
              , A = f * m;
            t[0] = g - A * l,
            t[4] = -o * m,
            t[8] = E + S * l,
            t[1] = S + E * l,
            t[5] = o * p,
            t[9] = A - g * l,
            t[2] = -o * f,
            t[6] = l,
            t[10] = o * u
        } else if (e.order === "ZYX") {
            const g = o * p
              , S = o * m
              , E = l * p
              , A = l * m;
            t[0] = u * p,
            t[4] = E * f - S,
            t[8] = g * f + A,
            t[1] = u * m,
            t[5] = A * f + g,
            t[9] = S * f - E,
            t[2] = -f,
            t[6] = l * u,
            t[10] = o * u
        } else if (e.order === "YZX") {
            const g = o * u
              , S = o * f
              , E = l * u
              , A = l * f;
            t[0] = u * p,
            t[4] = A - g * m,
            t[8] = E * m + S,
            t[1] = m,
            t[5] = o * p,
            t[9] = -l * p,
            t[2] = -f * p,
            t[6] = S * m + E,
            t[10] = g - A * m
        } else if (e.order === "XZY") {
            const g = o * u
              , S = o * f
              , E = l * u
              , A = l * f;
            t[0] = u * p,
            t[4] = -m,
            t[8] = f * p,
            t[1] = g * m + A,
            t[5] = o * p,
            t[9] = S * m - E,
            t[2] = E * m - S,
            t[6] = l * p,
            t[10] = A * m + g
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(Mu, e, Su)
    }
    lookAt(e, t, n) {
        const r = this.elements;
        return sn.subVectors(e, t),
        sn.lengthSq() === 0 && (sn.z = 1),
        sn.normalize(),
        Qn.crossVectors(n, sn),
        Qn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? sn.x += 1e-4 : sn.z += 1e-4,
        sn.normalize(),
        Qn.crossVectors(n, sn)),
        Qn.normalize(),
        Dr.crossVectors(sn, Qn),
        r[0] = Qn.x,
        r[4] = Dr.x,
        r[8] = sn.x,
        r[1] = Qn.y,
        r[5] = Dr.y,
        r[9] = sn.y,
        r[2] = Qn.z,
        r[6] = Dr.z,
        r[10] = sn.z,
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , r = t.elements
          , a = this.elements
          , o = n[0]
          , l = n[4]
          , u = n[8]
          , f = n[12]
          , p = n[1]
          , m = n[5]
          , g = n[9]
          , S = n[13]
          , E = n[2]
          , A = n[6]
          , _ = n[10]
          , d = n[14]
          , L = n[3]
          , U = n[7]
          , C = n[11]
          , I = n[15]
          , O = r[0]
          , N = r[4]
          , Y = r[8]
          , T = r[12]
          , v = r[1]
          , b = r[5]
          , X = r[9]
          , G = r[13]
          , J = r[2]
          , Q = r[6]
          , B = r[10]
          , H = r[14]
          , ee = r[3]
          , ue = r[7]
          , fe = r[11]
          , Ee = r[15];
        return a[0] = o * O + l * v + u * J + f * ee,
        a[4] = o * N + l * b + u * Q + f * ue,
        a[8] = o * Y + l * X + u * B + f * fe,
        a[12] = o * T + l * G + u * H + f * Ee,
        a[1] = p * O + m * v + g * J + S * ee,
        a[5] = p * N + m * b + g * Q + S * ue,
        a[9] = p * Y + m * X + g * B + S * fe,
        a[13] = p * T + m * G + g * H + S * Ee,
        a[2] = E * O + A * v + _ * J + d * ee,
        a[6] = E * N + A * b + _ * Q + d * ue,
        a[10] = E * Y + A * X + _ * B + d * fe,
        a[14] = E * T + A * G + _ * H + d * Ee,
        a[3] = L * O + U * v + C * J + I * ee,
        a[7] = L * N + U * b + C * Q + I * ue,
        a[11] = L * Y + U * X + C * B + I * fe,
        a[15] = L * T + U * G + C * H + I * Ee,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[4]
          , r = e[8]
          , a = e[12]
          , o = e[1]
          , l = e[5]
          , u = e[9]
          , f = e[13]
          , p = e[2]
          , m = e[6]
          , g = e[10]
          , S = e[14]
          , E = e[3]
          , A = e[7]
          , _ = e[11]
          , d = e[15]
          , L = u * S - f * g
          , U = l * S - f * m
          , C = l * g - u * m
          , I = o * S - f * p
          , O = o * g - u * p
          , N = o * m - l * p;
        return t * (A * L - _ * U + d * C) - n * (E * L - _ * I + d * O) + r * (E * U - A * I + d * N) - a * (E * C - A * O + _ * N)
    }
    transpose() {
        const e = this.elements;
        let t;
        return t = e[1],
        e[1] = e[4],
        e[4] = t,
        t = e[2],
        e[2] = e[8],
        e[8] = t,
        t = e[6],
        e[6] = e[9],
        e[9] = t,
        t = e[3],
        e[3] = e[12],
        e[12] = t,
        t = e[7],
        e[7] = e[13],
        e[13] = t,
        t = e[11],
        e[11] = e[14],
        e[14] = t,
        this
    }
    setPosition(e, t, n) {
        const r = this.elements;
        return e.isVector3 ? (r[12] = e.x,
        r[13] = e.y,
        r[14] = e.z) : (r[12] = e,
        r[13] = t,
        r[14] = n),
        this
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , r = e[2]
          , a = e[3]
          , o = e[4]
          , l = e[5]
          , u = e[6]
          , f = e[7]
          , p = e[8]
          , m = e[9]
          , g = e[10]
          , S = e[11]
          , E = e[12]
          , A = e[13]
          , _ = e[14]
          , d = e[15]
          , L = m * _ * f - A * g * f + A * u * S - l * _ * S - m * u * d + l * g * d
          , U = E * g * f - p * _ * f - E * u * S + o * _ * S + p * u * d - o * g * d
          , C = p * A * f - E * m * f + E * l * S - o * A * S - p * l * d + o * m * d
          , I = E * m * u - p * A * u - E * l * g + o * A * g + p * l * _ - o * m * _
          , O = t * L + n * U + r * C + a * I;
        if (O === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const N = 1 / O;
        return e[0] = L * N,
        e[1] = (A * g * a - m * _ * a - A * r * S + n * _ * S + m * r * d - n * g * d) * N,
        e[2] = (l * _ * a - A * u * a + A * r * f - n * _ * f - l * r * d + n * u * d) * N,
        e[3] = (m * u * a - l * g * a - m * r * f + n * g * f + l * r * S - n * u * S) * N,
        e[4] = U * N,
        e[5] = (p * _ * a - E * g * a + E * r * S - t * _ * S - p * r * d + t * g * d) * N,
        e[6] = (E * u * a - o * _ * a - E * r * f + t * _ * f + o * r * d - t * u * d) * N,
        e[7] = (o * g * a - p * u * a + p * r * f - t * g * f - o * r * S + t * u * S) * N,
        e[8] = C * N,
        e[9] = (E * m * a - p * A * a - E * n * S + t * A * S + p * n * d - t * m * d) * N,
        e[10] = (o * A * a - E * l * a + E * n * f - t * A * f - o * n * d + t * l * d) * N,
        e[11] = (p * l * a - o * m * a - p * n * f + t * m * f + o * n * S - t * l * S) * N,
        e[12] = I * N,
        e[13] = (p * A * r - E * m * r + E * n * g - t * A * g - p * n * _ + t * m * _) * N,
        e[14] = (E * l * r - o * A * r - E * n * u + t * A * u + o * n * _ - t * l * _) * N,
        e[15] = (o * m * r - p * l * r + p * n * u - t * m * u - o * n * g + t * l * g) * N,
        this
    }
    scale(e) {
        const t = this.elements
          , n = e.x
          , r = e.y
          , a = e.z;
        return t[0] *= n,
        t[4] *= r,
        t[8] *= a,
        t[1] *= n,
        t[5] *= r,
        t[9] *= a,
        t[2] *= n,
        t[6] *= r,
        t[10] *= a,
        t[3] *= n,
        t[7] *= r,
        t[11] *= a,
        this
    }
    getMaxScaleOnAxis() {
        const e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, r))
    }
    makeTranslation(e, t, n) {
        return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
    }
    makeRotationX(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(e, t) {
        const n = Math.cos(t)
          , r = Math.sin(t)
          , a = 1 - n
          , o = e.x
          , l = e.y
          , u = e.z
          , f = a * o
          , p = a * l;
        return this.set(f * o + n, f * l - r * u, f * u + r * l, 0, f * l + r * u, p * l + n, p * u - r * o, 0, f * u - r * l, p * u + r * o, a * u * u + n, 0, 0, 0, 0, 1),
        this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    }
    makeShear(e, t, n, r, a, o) {
        return this.set(1, n, a, 0, e, 1, o, 0, t, r, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(e, t, n) {
        const r = this.elements
          , a = t._x
          , o = t._y
          , l = t._z
          , u = t._w
          , f = a + a
          , p = o + o
          , m = l + l
          , g = a * f
          , S = a * p
          , E = a * m
          , A = o * p
          , _ = o * m
          , d = l * m
          , L = u * f
          , U = u * p
          , C = u * m
          , I = n.x
          , O = n.y
          , N = n.z;
        return r[0] = (1 - (A + d)) * I,
        r[1] = (S + C) * I,
        r[2] = (E - U) * I,
        r[3] = 0,
        r[4] = (S - C) * O,
        r[5] = (1 - (g + d)) * O,
        r[6] = (_ + L) * O,
        r[7] = 0,
        r[8] = (E + U) * N,
        r[9] = (_ - L) * N,
        r[10] = (1 - (g + A)) * N,
        r[11] = 0,
        r[12] = e.x,
        r[13] = e.y,
        r[14] = e.z,
        r[15] = 1,
        this
    }
    decompose(e, t, n) {
        const r = this.elements;
        if (e.x = r[12],
        e.y = r[13],
        e.z = r[14],
        this.determinant() === 0)
            return n.set(1, 1, 1),
            t.identity(),
            this;
        let a = Di.set(r[0], r[1], r[2]).length();
        const o = Di.set(r[4], r[5], r[6]).length()
          , l = Di.set(r[8], r[9], r[10]).length();
        this.determinant() < 0 && (a = -a),
        gn.copy(this);
        const f = 1 / a
          , p = 1 / o
          , m = 1 / l;
        return gn.elements[0] *= f,
        gn.elements[1] *= f,
        gn.elements[2] *= f,
        gn.elements[4] *= p,
        gn.elements[5] *= p,
        gn.elements[6] *= p,
        gn.elements[8] *= m,
        gn.elements[9] *= m,
        gn.elements[10] *= m,
        t.setFromRotationMatrix(gn),
        n.x = a,
        n.y = o,
        n.z = l,
        this
    }
    makePerspective(e, t, n, r, a, o, l=bn, u=!1) {
        const f = this.elements
          , p = 2 * a / (t - e)
          , m = 2 * a / (n - r)
          , g = (t + e) / (t - e)
          , S = (n + r) / (n - r);
        let E, A;
        if (u)
            E = a / (o - a),
            A = o * a / (o - a);
        else if (l === bn)
            E = -(o + a) / (o - a),
            A = -2 * o * a / (o - a);
        else if (l === ts)
            E = -o / (o - a),
            A = -o * a / (o - a);
        else
            throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + l);
        return f[0] = p,
        f[4] = 0,
        f[8] = g,
        f[12] = 0,
        f[1] = 0,
        f[5] = m,
        f[9] = S,
        f[13] = 0,
        f[2] = 0,
        f[6] = 0,
        f[10] = E,
        f[14] = A,
        f[3] = 0,
        f[7] = 0,
        f[11] = -1,
        f[15] = 0,
        this
    }
    makeOrthographic(e, t, n, r, a, o, l=bn, u=!1) {
        const f = this.elements
          , p = 2 / (t - e)
          , m = 2 / (n - r)
          , g = -(t + e) / (t - e)
          , S = -(n + r) / (n - r);
        let E, A;
        if (u)
            E = 1 / (o - a),
            A = o / (o - a);
        else if (l === bn)
            E = -2 / (o - a),
            A = -(o + a) / (o - a);
        else if (l === ts)
            E = -1 / (o - a),
            A = -a / (o - a);
        else
            throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + l);
        return f[0] = p,
        f[4] = 0,
        f[8] = 0,
        f[12] = g,
        f[1] = 0,
        f[5] = m,
        f[9] = 0,
        f[13] = S,
        f[2] = 0,
        f[6] = 0,
        f[10] = E,
        f[14] = A,
        f[3] = 0,
        f[7] = 0,
        f[11] = 0,
        f[15] = 1,
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let r = 0; r < 16; r++)
            if (t[r] !== n[r])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 16; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e[t + 9] = n[9],
        e[t + 10] = n[10],
        e[t + 11] = n[11],
        e[t + 12] = n[12],
        e[t + 13] = n[13],
        e[t + 14] = n[14],
        e[t + 15] = n[15],
        e
    }
}
const Di = new $
  , gn = new Ct
  , Mu = new $(0,0,0)
  , Su = new $(1,1,1)
  , Qn = new $
  , Dr = new $
  , sn = new $
  , Do = new Ct
  , Lo = new mr;
class Xn {
    constructor(e=0, t=0, n=0, r=Xn.DEFAULT_ORDER) {
        this.isEuler = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._order = r
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e,
        this._onChangeCallback()
    }
    set(e, t, n, r=this._order) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._order = r,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e, t=this._order, n=!0) {
        const r = e.elements
          , a = r[0]
          , o = r[4]
          , l = r[8]
          , u = r[1]
          , f = r[5]
          , p = r[9]
          , m = r[2]
          , g = r[6]
          , S = r[10];
        switch (t) {
        case "XYZ":
            this._y = Math.asin(it(l, -1, 1)),
            Math.abs(l) < .9999999 ? (this._x = Math.atan2(-p, S),
            this._z = Math.atan2(-o, a)) : (this._x = Math.atan2(g, f),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-it(p, -1, 1)),
            Math.abs(p) < .9999999 ? (this._y = Math.atan2(l, S),
            this._z = Math.atan2(u, f)) : (this._y = Math.atan2(-m, a),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(it(g, -1, 1)),
            Math.abs(g) < .9999999 ? (this._y = Math.atan2(-m, S),
            this._z = Math.atan2(-o, f)) : (this._y = 0,
            this._z = Math.atan2(u, a));
            break;
        case "ZYX":
            this._y = Math.asin(-it(m, -1, 1)),
            Math.abs(m) < .9999999 ? (this._x = Math.atan2(g, S),
            this._z = Math.atan2(u, a)) : (this._x = 0,
            this._z = Math.atan2(-o, f));
            break;
        case "YZX":
            this._z = Math.asin(it(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._x = Math.atan2(-p, f),
            this._y = Math.atan2(-m, a)) : (this._x = 0,
            this._y = Math.atan2(l, S));
            break;
        case "XZY":
            this._z = Math.asin(-it(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(g, f),
            this._y = Math.atan2(l, a)) : (this._x = Math.atan2(-p, S),
            this._y = 0);
            break;
        default:
            je("Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
        }
        return this._order = t,
        n === !0 && this._onChangeCallback(),
        this
    }
    setFromQuaternion(e, t, n) {
        return Do.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(Do, t, n)
    }
    setFromVector3(e, t=this._order) {
        return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
        return Lo.setFromEuler(this),
        this.setFromQuaternion(Lo, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
}
Xn.DEFAULT_ORDER = "XYZ";
class Ol {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = (1 << e | 0) >>> 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return (this.mask & e.mask) !== 0
    }
    isEnabled(e) {
        return (this.mask & (1 << e | 0)) !== 0
    }
}
let yu = 0;
const Uo = new $
  , Li = new mr
  , Nn = new Ct
  , Lr = new $
  , rr = new $
  , Eu = new $
  , Tu = new mr
  , Io = new $(1,0,0)
  , No = new $(0,1,0)
  , Fo = new $(0,0,1)
  , Oo = {
    type: "added"
}
  , Au = {
    type: "removed"
}
  , Ui = {
    type: "childadded",
    child: null
}
  , Rs = {
    type: "childremoved",
    child: null
};
class en extends Yi {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: yu++
        }),
        this.uuid = pr(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = en.DEFAULT_UP.clone();
        const e = new $
          , t = new Xn
          , n = new mr
          , r = new $(1,1,1);
        function a() {
            n.setFromEuler(t, !1)
        }
        function o() {
            t.setFromQuaternion(n, void 0, !1)
        }
        t._onChange(a),
        n._onChange(o),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: r
            },
            modelViewMatrix: {
                value: new Ct
            },
            normalMatrix: {
                value: new $e
            }
        }),
        this.matrix = new Ct,
        this.matrixWorld = new Ct,
        this.matrixAutoUpdate = en.DEFAULT_MATRIX_AUTO_UPDATE,
        this.matrixWorldAutoUpdate = en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new Ol,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.customDepthMaterial = void 0,
        this.customDistanceMaterial = void 0,
        this.userData = {}
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e),
        this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return Li.setFromAxisAngle(e, t),
        this.quaternion.multiply(Li),
        this
    }
    rotateOnWorldAxis(e, t) {
        return Li.setFromAxisAngle(e, t),
        this.quaternion.premultiply(Li),
        this
    }
    rotateX(e) {
        return this.rotateOnAxis(Io, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(No, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(Fo, e)
    }
    translateOnAxis(e, t) {
        return Uo.copy(e).applyQuaternion(this.quaternion),
        this.position.add(Uo.multiplyScalar(t)),
        this
    }
    translateX(e) {
        return this.translateOnAxis(Io, e)
    }
    translateY(e) {
        return this.translateOnAxis(No, e)
    }
    translateZ(e) {
        return this.translateOnAxis(Fo, e)
    }
    localToWorld(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(Nn.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? Lr.copy(e) : Lr.set(e, t, n);
        const r = this.parent;
        this.updateWorldMatrix(!0, !1),
        rr.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? Nn.lookAt(rr, Lr, this.up) : Nn.lookAt(Lr, rr, this.up),
        this.quaternion.setFromRotationMatrix(Nn),
        r && (Nn.extractRotation(r.matrixWorld),
        Li.setFromRotationMatrix(Nn),
        this.quaternion.premultiply(Li.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
                this.add(arguments[t]);
            return this
        }
        return e === this ? (ut("Object3D.add: object can't be added as a child of itself.", e),
        this) : (e && e.isObject3D ? (e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.dispatchEvent(Oo),
        Ui.child = e,
        this.dispatchEvent(Ui),
        Ui.child = null) : ut("Object3D.add: object not an instance of THREE.Object3D.", e),
        this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++)
                this.remove(arguments[n]);
            return this
        }
        const t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null,
        this.children.splice(t, 1),
        e.dispatchEvent(Au),
        Rs.child = e,
        this.dispatchEvent(Rs),
        Rs.child = null),
        this
    }
    removeFromParent() {
        const e = this.parent;
        return e !== null && e.remove(this),
        this
    }
    clear() {
        return this.remove(...this.children)
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1),
        Nn.copy(this.matrixWorld).invert(),
        e.parent !== null && (e.parent.updateWorldMatrix(!0, !1),
        Nn.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(Nn),
        e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.updateWorldMatrix(!1, !0),
        e.dispatchEvent(Oo),
        Ui.child = e,
        this.dispatchEvent(Ui),
        Ui.child = null,
        this
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t)
            return this;
        for (let n = 0, r = this.children.length; n < r; n++) {
            const o = this.children[n].getObjectByProperty(e, t);
            if (o !== void 0)
                return o
        }
    }
    getObjectsByProperty(e, t, n=[]) {
        this[e] === t && n.push(this);
        const r = this.children;
        for (let a = 0, o = r.length; a < o; a++)
            r[a].getObjectsByProperty(e, t, n);
        return n
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(rr, e, Eu),
        e
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(rr, Tu, e),
        e
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].traverse(e)
    }
    traverseVisible(e) {
        if (this.visible === !1)
            return;
        e(this);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        const t = this.parent;
        t !== null && (e(t),
        t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        const t = this.children;
        for (let n = 0, r = t.length; n < r; n++)
            t[n].updateMatrixWorld(e)
    }
    updateWorldMatrix(e, t) {
        const n = this.parent;
        if (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)),
        t === !0) {
            const r = this.children;
            for (let a = 0, o = r.length; a < o; a++)
                r[a].updateWorldMatrix(!1, !0)
        }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string"
          , n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        n.metadata = {
            version: 4.7,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const r = {};
        r.uuid = this.uuid,
        r.type = this.type,
        this.name !== "" && (r.name = this.name),
        this.castShadow === !0 && (r.castShadow = !0),
        this.receiveShadow === !0 && (r.receiveShadow = !0),
        this.visible === !1 && (r.visible = !1),
        this.frustumCulled === !1 && (r.frustumCulled = !1),
        this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (r.userData = this.userData),
        r.layers = this.layers.mask,
        r.matrix = this.matrix.toArray(),
        r.up = this.up.toArray(),
        this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
        this.isInstancedMesh && (r.type = "InstancedMesh",
        r.count = this.count,
        r.instanceMatrix = this.instanceMatrix.toJSON(),
        this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh && (r.type = "BatchedMesh",
        r.perObjectFrustumCulled = this.perObjectFrustumCulled,
        r.sortObjects = this.sortObjects,
        r.drawRanges = this._drawRanges,
        r.reservedRanges = this._reservedRanges,
        r.geometryInfo = this._geometryInfo.map(l => ({
            ...l,
            boundingBox: l.boundingBox ? l.boundingBox.toJSON() : void 0,
            boundingSphere: l.boundingSphere ? l.boundingSphere.toJSON() : void 0
        })),
        r.instanceInfo = this._instanceInfo.map(l => ({
            ...l
        })),
        r.availableInstanceIds = this._availableInstanceIds.slice(),
        r.availableGeometryIds = this._availableGeometryIds.slice(),
        r.nextIndexStart = this._nextIndexStart,
        r.nextVertexStart = this._nextVertexStart,
        r.geometryCount = this._geometryCount,
        r.maxInstanceCount = this._maxInstanceCount,
        r.maxVertexCount = this._maxVertexCount,
        r.maxIndexCount = this._maxIndexCount,
        r.geometryInitialized = this._geometryInitialized,
        r.matricesTexture = this._matricesTexture.toJSON(e),
        r.indirectTexture = this._indirectTexture.toJSON(e),
        this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
        function a(l, u) {
            return l[u.uuid] === void 0 && (l[u.uuid] = u.toJSON(e)),
            u.uuid
        }
        if (this.isScene)
            this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)),
            this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            r.geometry = a(e.geometries, this.geometry);
            const l = this.geometry.parameters;
            if (l !== void 0 && l.shapes !== void 0) {
                const u = l.shapes;
                if (Array.isArray(u))
                    for (let f = 0, p = u.length; f < p; f++) {
                        const m = u[f];
                        a(e.shapes, m)
                    }
                else
                    a(e.shapes, u)
            }
        }
        if (this.isSkinnedMesh && (r.bindMode = this.bindMode,
        r.bindMatrix = this.bindMatrix.toArray(),
        this.skeleton !== void 0 && (a(e.skeletons, this.skeleton),
        r.skeleton = this.skeleton.uuid)),
        this.material !== void 0)
            if (Array.isArray(this.material)) {
                const l = [];
                for (let u = 0, f = this.material.length; u < f; u++)
                    l.push(a(e.materials, this.material[u]));
                r.material = l
            } else
                r.material = a(e.materials, this.material);
        if (this.children.length > 0) {
            r.children = [];
            for (let l = 0; l < this.children.length; l++)
                r.children.push(this.children[l].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            r.animations = [];
            for (let l = 0; l < this.animations.length; l++) {
                const u = this.animations[l];
                r.animations.push(a(e.animations, u))
            }
        }
        if (t) {
            const l = o(e.geometries)
              , u = o(e.materials)
              , f = o(e.textures)
              , p = o(e.images)
              , m = o(e.shapes)
              , g = o(e.skeletons)
              , S = o(e.animations)
              , E = o(e.nodes);
            l.length > 0 && (n.geometries = l),
            u.length > 0 && (n.materials = u),
            f.length > 0 && (n.textures = f),
            p.length > 0 && (n.images = p),
            m.length > 0 && (n.shapes = m),
            g.length > 0 && (n.skeletons = g),
            S.length > 0 && (n.animations = S),
            E.length > 0 && (n.nodes = E)
        }
        return n.object = r,
        n;
        function o(l) {
            const u = [];
            for (const f in l) {
                const p = l[f];
                delete p.metadata,
                u.push(p)
            }
            return u
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e)
    }
    copy(e, t=!0) {
        if (this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.rotation.order = e.rotation.order,
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.layers.mask = e.layers.mask,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.animations = e.animations.slice(),
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        t === !0)
            for (let n = 0; n < e.children.length; n++) {
                const r = e.children[n];
                this.add(r.clone())
            }
        return this
    }
}
en.DEFAULT_UP = new $(0,1,0);
en.DEFAULT_MATRIX_AUTO_UPDATE = !0;
en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const _n = new $
  , Fn = new $
  , Cs = new $
  , On = new $
  , Ii = new $
  , Ni = new $
  , Bo = new $
  , Ps = new $
  , Ds = new $
  , Ls = new $
  , Us = new Rt
  , Is = new Rt
  , Ns = new Rt;
class vn {
    constructor(e=new $, t=new $, n=new $) {
        this.a = e,
        this.b = t,
        this.c = n
    }
    static getNormal(e, t, n, r) {
        r.subVectors(n, t),
        _n.subVectors(e, t),
        r.cross(_n);
        const a = r.lengthSq();
        return a > 0 ? r.multiplyScalar(1 / Math.sqrt(a)) : r.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, r, a) {
        _n.subVectors(r, t),
        Fn.subVectors(n, t),
        Cs.subVectors(e, t);
        const o = _n.dot(_n)
          , l = _n.dot(Fn)
          , u = _n.dot(Cs)
          , f = Fn.dot(Fn)
          , p = Fn.dot(Cs)
          , m = o * f - l * l;
        if (m === 0)
            return a.set(0, 0, 0),
            null;
        const g = 1 / m
          , S = (f * u - l * p) * g
          , E = (o * p - l * u) * g;
        return a.set(1 - S - E, E, S)
    }
    static containsPoint(e, t, n, r) {
        return this.getBarycoord(e, t, n, r, On) === null ? !1 : On.x >= 0 && On.y >= 0 && On.x + On.y <= 1
    }
    static getInterpolation(e, t, n, r, a, o, l, u) {
        return this.getBarycoord(e, t, n, r, On) === null ? (u.x = 0,
        u.y = 0,
        "z"in u && (u.z = 0),
        "w"in u && (u.w = 0),
        null) : (u.setScalar(0),
        u.addScaledVector(a, On.x),
        u.addScaledVector(o, On.y),
        u.addScaledVector(l, On.z),
        u)
    }
    static getInterpolatedAttribute(e, t, n, r, a, o) {
        return Us.setScalar(0),
        Is.setScalar(0),
        Ns.setScalar(0),
        Us.fromBufferAttribute(e, t),
        Is.fromBufferAttribute(e, n),
        Ns.fromBufferAttribute(e, r),
        o.setScalar(0),
        o.addScaledVector(Us, a.x),
        o.addScaledVector(Is, a.y),
        o.addScaledVector(Ns, a.z),
        o
    }
    static isFrontFacing(e, t, n, r) {
        return _n.subVectors(n, t),
        Fn.subVectors(e, t),
        _n.cross(Fn).dot(r) < 0
    }
    set(e, t, n) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(e, t, n, r) {
        return this.a.copy(e[t]),
        this.b.copy(e[n]),
        this.c.copy(e[r]),
        this
    }
    setFromAttributeAndIndices(e, t, n, r) {
        return this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, r),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    }
    getArea() {
        return _n.subVectors(this.c, this.b),
        Fn.subVectors(this.a, this.b),
        _n.cross(Fn).length() * .5
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return vn.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return vn.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getInterpolation(e, t, n, r, a) {
        return vn.getInterpolation(e, this.a, this.b, this.c, t, n, r, a)
    }
    containsPoint(e) {
        return vn.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return vn.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        const n = this.a
          , r = this.b
          , a = this.c;
        let o, l;
        Ii.subVectors(r, n),
        Ni.subVectors(a, n),
        Ps.subVectors(e, n);
        const u = Ii.dot(Ps)
          , f = Ni.dot(Ps);
        if (u <= 0 && f <= 0)
            return t.copy(n);
        Ds.subVectors(e, r);
        const p = Ii.dot(Ds)
          , m = Ni.dot(Ds);
        if (p >= 0 && m <= p)
            return t.copy(r);
        const g = u * m - p * f;
        if (g <= 0 && u >= 0 && p <= 0)
            return o = u / (u - p),
            t.copy(n).addScaledVector(Ii, o);
        Ls.subVectors(e, a);
        const S = Ii.dot(Ls)
          , E = Ni.dot(Ls);
        if (E >= 0 && S <= E)
            return t.copy(a);
        const A = S * f - u * E;
        if (A <= 0 && f >= 0 && E <= 0)
            return l = f / (f - E),
            t.copy(n).addScaledVector(Ni, l);
        const _ = p * E - S * m;
        if (_ <= 0 && m - p >= 0 && S - E >= 0)
            return Bo.subVectors(a, r),
            l = (m - p) / (m - p + (S - E)),
            t.copy(r).addScaledVector(Bo, l);
        const d = 1 / (_ + A + g);
        return o = A * d,
        l = g * d,
        t.copy(n).addScaledVector(Ii, o).addScaledVector(Ni, l)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
const Bl = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , ei = {
    h: 0,
    s: 0,
    l: 0
}
  , Ur = {
    h: 0,
    s: 0,
    l: 0
};
function Fs(i, e, t) {
    return t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i
}
class vt {
    constructor(e, t, n) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        this.set(e, t, n)
    }
    set(e, t, n) {
        if (t === void 0 && n === void 0) {
            const r = e;
            r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r)
        } else
            this.setRGB(e, t, n);
        return this
    }
    setScalar(e) {
        return this.r = e,
        this.g = e,
        this.b = e,
        this
    }
    setHex(e, t=un) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (e & 255) / 255,
        at.colorSpaceToWorking(this, t),
        this
    }
    setRGB(e, t, n, r=at.workingColorSpace) {
        return this.r = e,
        this.g = t,
        this.b = n,
        at.colorSpaceToWorking(this, r),
        this
    }
    setHSL(e, t, n, r=at.workingColorSpace) {
        if (e = hu(e, 1),
        t = it(t, 0, 1),
        n = it(n, 0, 1),
        t === 0)
            this.r = this.g = this.b = n;
        else {
            const a = n <= .5 ? n * (1 + t) : n + t - n * t
              , o = 2 * n - a;
            this.r = Fs(o, a, e + 1 / 3),
            this.g = Fs(o, a, e),
            this.b = Fs(o, a, e - 1 / 3)
        }
        return at.colorSpaceToWorking(this, r),
        this
    }
    setStyle(e, t=un) {
        function n(a) {
            a !== void 0 && parseFloat(a) < 1 && je("Color: Alpha component of " + e + " will be ignored.")
        }
        let r;
        if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
            let a;
            const o = r[1]
              , l = r[2];
            switch (o) {
            case "rgb":
            case "rgba":
                if (a = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))
                    return n(a[4]),
                    this.setRGB(Math.min(255, parseInt(a[1], 10)) / 255, Math.min(255, parseInt(a[2], 10)) / 255, Math.min(255, parseInt(a[3], 10)) / 255, t);
                if (a = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))
                    return n(a[4]),
                    this.setRGB(Math.min(100, parseInt(a[1], 10)) / 100, Math.min(100, parseInt(a[2], 10)) / 100, Math.min(100, parseInt(a[3], 10)) / 100, t);
                break;
            case "hsl":
            case "hsla":
                if (a = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))
                    return n(a[4]),
                    this.setHSL(parseFloat(a[1]) / 360, parseFloat(a[2]) / 100, parseFloat(a[3]) / 100, t);
                break;
            default:
                je("Color: Unknown color model " + e)
            }
        } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            const a = r[1]
              , o = a.length;
            if (o === 3)
                return this.setRGB(parseInt(a.charAt(0), 16) / 15, parseInt(a.charAt(1), 16) / 15, parseInt(a.charAt(2), 16) / 15, t);
            if (o === 6)
                return this.setHex(parseInt(a, 16), t);
            je("Color: Invalid hex color " + e)
        } else if (e && e.length > 0)
            return this.setColorName(e, t);
        return this
    }
    setColorName(e, t=un) {
        const n = Bl[e.toLowerCase()];
        return n !== void 0 ? this.setHex(n, t) : je("Color: Unknown color " + e),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    }
    copySRGBToLinear(e) {
        return this.r = Gn(e.r),
        this.g = Gn(e.g),
        this.b = Gn(e.b),
        this
    }
    copyLinearToSRGB(e) {
        return this.r = Gi(e.r),
        this.g = Gi(e.g),
        this.b = Gi(e.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(e=un) {
        return at.workingToColorSpace(Xt.copy(this), e),
        Math.round(it(Xt.r * 255, 0, 255)) * 65536 + Math.round(it(Xt.g * 255, 0, 255)) * 256 + Math.round(it(Xt.b * 255, 0, 255))
    }
    getHexString(e=un) {
        return ("000000" + this.getHex(e).toString(16)).slice(-6)
    }
    getHSL(e, t=at.workingColorSpace) {
        at.workingToColorSpace(Xt.copy(this), t);
        const n = Xt.r
          , r = Xt.g
          , a = Xt.b
          , o = Math.max(n, r, a)
          , l = Math.min(n, r, a);
        let u, f;
        const p = (l + o) / 2;
        if (l === o)
            u = 0,
            f = 0;
        else {
            const m = o - l;
            switch (f = p <= .5 ? m / (o + l) : m / (2 - o - l),
            o) {
            case n:
                u = (r - a) / m + (r < a ? 6 : 0);
                break;
            case r:
                u = (a - n) / m + 2;
                break;
            case a:
                u = (n - r) / m + 4;
                break
            }
            u /= 6
        }
        return e.h = u,
        e.s = f,
        e.l = p,
        e
    }
    getRGB(e, t=at.workingColorSpace) {
        return at.workingToColorSpace(Xt.copy(this), t),
        e.r = Xt.r,
        e.g = Xt.g,
        e.b = Xt.b,
        e
    }
    getStyle(e=un) {
        at.workingToColorSpace(Xt.copy(this), e);
        const t = Xt.r
          , n = Xt.g
          , r = Xt.b;
        return e !== un ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`
    }
    offsetHSL(e, t, n) {
        return this.getHSL(ei),
        this.setHSL(ei.h + e, ei.s + t, ei.l + n)
    }
    add(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    }
    addColors(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    }
    addScalar(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r),
        this.g = Math.max(0, this.g - e.g),
        this.b = Math.max(0, this.b - e.b),
        this
    }
    multiply(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    }
    multiplyScalar(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n,
        this.g = e.g + (t.g - e.g) * n,
        this.b = e.b + (t.b - e.b) * n,
        this
    }
    lerpHSL(e, t) {
        this.getHSL(ei),
        e.getHSL(Ur);
        const n = vs(ei.h, Ur.h, t)
          , r = vs(ei.s, Ur.s, t)
          , a = vs(ei.l, Ur.l, t);
        return this.setHSL(n, r, a),
        this
    }
    setFromVector3(e) {
        return this.r = e.x,
        this.g = e.y,
        this.b = e.z,
        this
    }
    applyMatrix3(e) {
        const t = this.r
          , n = this.g
          , r = this.b
          , a = e.elements;
        return this.r = a[0] * t + a[3] * n + a[6] * r,
        this.g = a[1] * t + a[4] * n + a[7] * r,
        this.b = a[2] * t + a[5] * n + a[8] * r,
        this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t=0) {
        return this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t),
        this.g = e.getY(t),
        this.b = e.getZ(t),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
const Xt = new vt;
vt.NAMES = Bl;
let bu = 0;
class _r extends Yi {
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: bu++
        }),
        this.uuid = pr(),
        this.name = "",
        this.type = "Material",
        this.blending = Vi,
        this.side = ri,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.alphaHash = !1,
        this.blendSrc = Zs,
        this.blendDst = $s,
        this.blendEquation = _i,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.blendColor = new vt(0,0,0),
        this.blendAlpha = 0,
        this.depthFunc = Hi,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = Eo,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = bi,
        this.stencilZFail = bi,
        this.stencilZPass = bi,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.forceSinglePass = !1,
        this.allowOverride = !0,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++,
        this._alphaTest = e
    }
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(e) {
        if (e !== void 0)
            for (const t in e) {
                const n = e[t];
                if (n === void 0) {
                    je(`Material: parameter '${t}' has value of undefined.`);
                    continue
                }
                const r = this[t];
                if (r === void 0) {
                    je(`Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue
                }
                r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n
            }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        t && (e = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.7,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        n.uuid = this.uuid,
        n.type = this.type,
        this.name !== "" && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid),
        this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid),
        this.dispersion !== void 0 && (n.dispersion = this.dispersion),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
        this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== Vi && (n.blending = this.blending),
        this.side !== ri && (n.side = this.side),
        this.vertexColors === !0 && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.transparent === !0 && (n.transparent = !0),
        this.blendSrc !== Zs && (n.blendSrc = this.blendSrc),
        this.blendDst !== $s && (n.blendDst = this.blendDst),
        this.blendEquation !== _i && (n.blendEquation = this.blendEquation),
        this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
        this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
        this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()),
        this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
        this.depthFunc !== Hi && (n.depthFunc = this.depthFunc),
        this.depthTest === !1 && (n.depthTest = this.depthTest),
        this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
        this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
        this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== Eo && (n.stencilFunc = this.stencilFunc),
        this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
        this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== bi && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== bi && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== bi && (n.stencilZPass = this.stencilZPass),
        this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
        this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaHash === !0 && (n.alphaHash = !0),
        this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
        this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (n.forceSinglePass = !0),
        this.allowOverride === !1 && (n.allowOverride = !1),
        this.wireframe === !0 && (n.wireframe = !0),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = !0),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        this.fog === !1 && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData);
        function r(a) {
            const o = [];
            for (const l in a) {
                const u = a[l];
                delete u.metadata,
                o.push(u)
            }
            return o
        }
        if (t) {
            const a = r(e.textures)
              , o = r(e.images);
            a.length > 0 && (n.textures = a),
            o.length > 0 && (n.images = o)
        }
        return n
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.name = e.name,
        this.blending = e.blending,
        this.side = e.side,
        this.vertexColors = e.vertexColors,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.blendColor.copy(e.blendColor),
        this.blendAlpha = e.blendAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.stencilWriteMask = e.stencilWriteMask,
        this.stencilFunc = e.stencilFunc,
        this.stencilRef = e.stencilRef,
        this.stencilFuncMask = e.stencilFuncMask,
        this.stencilFail = e.stencilFail,
        this.stencilZFail = e.stencilZFail,
        this.stencilZPass = e.stencilZPass,
        this.stencilWrite = e.stencilWrite;
        const t = e.clippingPlanes;
        let n = null;
        if (t !== null) {
            const r = t.length;
            n = new Array(r);
            for (let a = 0; a !== r; ++a)
                n[a] = t[a].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = e.clipIntersection,
        this.clipShadows = e.clipShadows,
        this.shadowSide = e.shadowSide,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.dithering = e.dithering,
        this.alphaTest = e.alphaTest,
        this.alphaHash = e.alphaHash,
        this.alphaToCoverage = e.alphaToCoverage,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.forceSinglePass = e.forceSinglePass,
        this.allowOverride = e.allowOverride,
        this.visible = e.visible,
        this.toneMapped = e.toneMapped,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
}
class zl extends _r {
    constructor(e) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.type = "MeshBasicMaterial",
        this.color = new vt(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new Xn,
        this.combine = vl,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.fog = e.fog,
        this
    }
}
const Lt = new $
  , Ir = new Mt;
let wu = 0;
class Mn {
    constructor(e, t, n=!1) {
        if (Array.isArray(e))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0,
        Object.defineProperty(this, "id", {
            value: wu++
        }),
        this.name = "",
        this.array = e,
        this.itemSize = t,
        this.count = e !== void 0 ? e.length / t : 0,
        this.normalized = n,
        this.usage = To,
        this.updateRanges = [],
        this.gpuType = An,
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(e) {
        return this.name = e.name,
        this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.count = e.count,
        this.normalized = e.normalized,
        this.usage = e.usage,
        this.gpuType = e.gpuType,
        this
    }
    copyAt(e, t, n) {
        e *= this.itemSize,
        n *= t.itemSize;
        for (let r = 0, a = this.itemSize; r < a; r++)
            this.array[e + r] = t.array[n + r];
        return this
    }
    copyArray(e) {
        return this.array.set(e),
        this
    }
    applyMatrix3(e) {
        if (this.itemSize === 2)
            for (let t = 0, n = this.count; t < n; t++)
                Ir.fromBufferAttribute(this, t),
                Ir.applyMatrix3(e),
                this.setXY(t, Ir.x, Ir.y);
        else if (this.itemSize === 3)
            for (let t = 0, n = this.count; t < n; t++)
                Lt.fromBufferAttribute(this, t),
                Lt.applyMatrix3(e),
                this.setXYZ(t, Lt.x, Lt.y, Lt.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Lt.fromBufferAttribute(this, t),
            Lt.applyMatrix4(e),
            this.setXYZ(t, Lt.x, Lt.y, Lt.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Lt.fromBufferAttribute(this, t),
            Lt.applyNormalMatrix(e),
            this.setXYZ(t, Lt.x, Lt.y, Lt.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            Lt.fromBufferAttribute(this, t),
            Lt.transformDirection(e),
            this.setXYZ(t, Lt.x, Lt.y, Lt.z);
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    getComponent(e, t) {
        let n = this.array[e * this.itemSize + t];
        return this.normalized && (n = tr(n, this.array)),
        n
    }
    setComponent(e, t, n) {
        return this.normalized && (n = Jt(n, this.array)),
        this.array[e * this.itemSize + t] = n,
        this
    }
    getX(e) {
        let t = this.array[e * this.itemSize];
        return this.normalized && (t = tr(t, this.array)),
        t
    }
    setX(e, t) {
        return this.normalized && (t = Jt(t, this.array)),
        this.array[e * this.itemSize] = t,
        this
    }
    getY(e) {
        let t = this.array[e * this.itemSize + 1];
        return this.normalized && (t = tr(t, this.array)),
        t
    }
    setY(e, t) {
        return this.normalized && (t = Jt(t, this.array)),
        this.array[e * this.itemSize + 1] = t,
        this
    }
    getZ(e) {
        let t = this.array[e * this.itemSize + 2];
        return this.normalized && (t = tr(t, this.array)),
        t
    }
    setZ(e, t) {
        return this.normalized && (t = Jt(t, this.array)),
        this.array[e * this.itemSize + 2] = t,
        this
    }
    getW(e) {
        let t = this.array[e * this.itemSize + 3];
        return this.normalized && (t = tr(t, this.array)),
        t
    }
    setW(e, t) {
        return this.normalized && (t = Jt(t, this.array)),
        this.array[e * this.itemSize + 3] = t,
        this
    }
    setXY(e, t, n) {
        return e *= this.itemSize,
        this.normalized && (t = Jt(t, this.array),
        n = Jt(n, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, r) {
        return e *= this.itemSize,
        this.normalized && (t = Jt(t, this.array),
        n = Jt(n, this.array),
        r = Jt(r, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = r,
        this
    }
    setXYZW(e, t, n, r, a) {
        return e *= this.itemSize,
        this.normalized && (t = Jt(t, this.array),
        n = Jt(n, this.array),
        r = Jt(r, this.array),
        a = Jt(a, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = r,
        this.array[e + 3] = a,
        this
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (e.name = this.name),
        this.usage !== To && (e.usage = this.usage),
        e
    }
}
class Vl extends Mn {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
class Gl extends Mn {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n)
    }
}
class Hn extends Mn {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n)
    }
}
let Ru = 0;
const cn = new Ct
  , Os = new en
  , Fi = new $
  , an = new gr
  , sr = new gr
  , Ot = new $;
class Sn extends Yi {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: Ru++
        }),
        this.uuid = pr(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.indirect = null,
        this.indirectOffset = 0,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (Il(e) ? Gl : Vl)(e,1) : this.index = e,
        this
    }
    setIndirect(e, t=0) {
        return this.indirect = e,
        this.indirectOffset = t,
        this
    }
    getIndirect() {
        return this.indirect
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t,
        this
    }
    deleteAttribute(e) {
        return delete this.attributes[e],
        this
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0
    }
    addGroup(e, t, n=0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e),
        t.needsUpdate = !0);
        const n = this.attributes.normal;
        if (n !== void 0) {
            const a = new $e().getNormalMatrix(e);
            n.applyNormalMatrix(a),
            n.needsUpdate = !0
        }
        const r = this.attributes.tangent;
        return r !== void 0 && (r.transformDirection(e),
        r.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(e) {
        return cn.makeRotationFromQuaternion(e),
        this.applyMatrix4(cn),
        this
    }
    rotateX(e) {
        return cn.makeRotationX(e),
        this.applyMatrix4(cn),
        this
    }
    rotateY(e) {
        return cn.makeRotationY(e),
        this.applyMatrix4(cn),
        this
    }
    rotateZ(e) {
        return cn.makeRotationZ(e),
        this.applyMatrix4(cn),
        this
    }
    translate(e, t, n) {
        return cn.makeTranslation(e, t, n),
        this.applyMatrix4(cn),
        this
    }
    scale(e, t, n) {
        return cn.makeScale(e, t, n),
        this.applyMatrix4(cn),
        this
    }
    lookAt(e) {
        return Os.lookAt(e),
        Os.updateMatrix(),
        this.applyMatrix4(Os.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(Fi).negate(),
        this.translate(Fi.x, Fi.y, Fi.z),
        this
    }
    setFromPoints(e) {
        const t = this.getAttribute("position");
        if (t === void 0) {
            const n = [];
            for (let r = 0, a = e.length; r < a; r++) {
                const o = e[r];
                n.push(o.x, o.y, o.z || 0)
            }
            this.setAttribute("position", new Hn(n,3))
        } else {
            const n = Math.min(e.length, t.count);
            for (let r = 0; r < n; r++) {
                const a = e[r];
                t.setXYZ(r, a.x, a.y, a.z || 0)
            }
            e.length > t.count && je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),
            t.needsUpdate = !0
        }
        return this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new gr);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this),
            this.boundingBox.set(new $(-1 / 0,-1 / 0,-1 / 0), new $(1 / 0,1 / 0,1 / 0));
            return
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e),
            t)
                for (let n = 0, r = t.length; n < r; n++) {
                    const a = t[n];
                    an.setFromBufferAttribute(a),
                    this.morphTargetsRelative ? (Ot.addVectors(this.boundingBox.min, an.min),
                    this.boundingBox.expandByPoint(Ot),
                    Ot.addVectors(this.boundingBox.max, an.max),
                    this.boundingBox.expandByPoint(Ot)) : (this.boundingBox.expandByPoint(an.min),
                    this.boundingBox.expandByPoint(an.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new ss);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this),
            this.boundingSphere.set(new $, 1 / 0);
            return
        }
        if (e) {
            const n = this.boundingSphere.center;
            if (an.setFromBufferAttribute(e),
            t)
                for (let a = 0, o = t.length; a < o; a++) {
                    const l = t[a];
                    sr.setFromBufferAttribute(l),
                    this.morphTargetsRelative ? (Ot.addVectors(an.min, sr.min),
                    an.expandByPoint(Ot),
                    Ot.addVectors(an.max, sr.max),
                    an.expandByPoint(Ot)) : (an.expandByPoint(sr.min),
                    an.expandByPoint(sr.max))
                }
            an.getCenter(n);
            let r = 0;
            for (let a = 0, o = e.count; a < o; a++)
                Ot.fromBufferAttribute(e, a),
                r = Math.max(r, n.distanceToSquared(Ot));
            if (t)
                for (let a = 0, o = t.length; a < o; a++) {
                    const l = t[a]
                      , u = this.morphTargetsRelative;
                    for (let f = 0, p = l.count; f < p; f++)
                        Ot.fromBufferAttribute(l, f),
                        u && (Fi.fromBufferAttribute(e, f),
                        Ot.add(Fi)),
                        r = Math.max(r, n.distanceToSquared(Ot))
                }
            this.boundingSphere.radius = Math.sqrt(r),
            isNaN(this.boundingSphere.radius) && ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const e = this.index
          , t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const n = t.position
          , r = t.normal
          , a = t.uv;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Mn(new Float32Array(4 * n.count),4));
        const o = this.getAttribute("tangent")
          , l = []
          , u = [];
        for (let Y = 0; Y < n.count; Y++)
            l[Y] = new $,
            u[Y] = new $;
        const f = new $
          , p = new $
          , m = new $
          , g = new Mt
          , S = new Mt
          , E = new Mt
          , A = new $
          , _ = new $;
        function d(Y, T, v) {
            f.fromBufferAttribute(n, Y),
            p.fromBufferAttribute(n, T),
            m.fromBufferAttribute(n, v),
            g.fromBufferAttribute(a, Y),
            S.fromBufferAttribute(a, T),
            E.fromBufferAttribute(a, v),
            p.sub(f),
            m.sub(f),
            S.sub(g),
            E.sub(g);
            const b = 1 / (S.x * E.y - E.x * S.y);
            isFinite(b) && (A.copy(p).multiplyScalar(E.y).addScaledVector(m, -S.y).multiplyScalar(b),
            _.copy(m).multiplyScalar(S.x).addScaledVector(p, -E.x).multiplyScalar(b),
            l[Y].add(A),
            l[T].add(A),
            l[v].add(A),
            u[Y].add(_),
            u[T].add(_),
            u[v].add(_))
        }
        let L = this.groups;
        L.length === 0 && (L = [{
            start: 0,
            count: e.count
        }]);
        for (let Y = 0, T = L.length; Y < T; ++Y) {
            const v = L[Y]
              , b = v.start
              , X = v.count;
            for (let G = b, J = b + X; G < J; G += 3)
                d(e.getX(G + 0), e.getX(G + 1), e.getX(G + 2))
        }
        const U = new $
          , C = new $
          , I = new $
          , O = new $;
        function N(Y) {
            I.fromBufferAttribute(r, Y),
            O.copy(I);
            const T = l[Y];
            U.copy(T),
            U.sub(I.multiplyScalar(I.dot(T))).normalize(),
            C.crossVectors(O, T);
            const b = C.dot(u[Y]) < 0 ? -1 : 1;
            o.setXYZW(Y, U.x, U.y, U.z, b)
        }
        for (let Y = 0, T = L.length; Y < T; ++Y) {
            const v = L[Y]
              , b = v.start
              , X = v.count;
            for (let G = b, J = b + X; G < J; G += 3)
                N(e.getX(G + 0)),
                N(e.getX(G + 1)),
                N(e.getX(G + 2))
        }
    }
    computeVertexNormals() {
        const e = this.index
          , t = this.getAttribute("position");
        if (t !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0)
                n = new Mn(new Float32Array(t.count * 3),3),
                this.setAttribute("normal", n);
            else
                for (let g = 0, S = n.count; g < S; g++)
                    n.setXYZ(g, 0, 0, 0);
            const r = new $
              , a = new $
              , o = new $
              , l = new $
              , u = new $
              , f = new $
              , p = new $
              , m = new $;
            if (e)
                for (let g = 0, S = e.count; g < S; g += 3) {
                    const E = e.getX(g + 0)
                      , A = e.getX(g + 1)
                      , _ = e.getX(g + 2);
                    r.fromBufferAttribute(t, E),
                    a.fromBufferAttribute(t, A),
                    o.fromBufferAttribute(t, _),
                    p.subVectors(o, a),
                    m.subVectors(r, a),
                    p.cross(m),
                    l.fromBufferAttribute(n, E),
                    u.fromBufferAttribute(n, A),
                    f.fromBufferAttribute(n, _),
                    l.add(p),
                    u.add(p),
                    f.add(p),
                    n.setXYZ(E, l.x, l.y, l.z),
                    n.setXYZ(A, u.x, u.y, u.z),
                    n.setXYZ(_, f.x, f.y, f.z)
                }
            else
                for (let g = 0, S = t.count; g < S; g += 3)
                    r.fromBufferAttribute(t, g + 0),
                    a.fromBufferAttribute(t, g + 1),
                    o.fromBufferAttribute(t, g + 2),
                    p.subVectors(o, a),
                    m.subVectors(r, a),
                    p.cross(m),
                    n.setXYZ(g + 0, p.x, p.y, p.z),
                    n.setXYZ(g + 1, p.x, p.y, p.z),
                    n.setXYZ(g + 2, p.x, p.y, p.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++)
            Ot.fromBufferAttribute(e, t),
            Ot.normalize(),
            e.setXYZ(t, Ot.x, Ot.y, Ot.z)
    }
    toNonIndexed() {
        function e(l, u) {
            const f = l.array
              , p = l.itemSize
              , m = l.normalized
              , g = new f.constructor(u.length * p);
            let S = 0
              , E = 0;
            for (let A = 0, _ = u.length; A < _; A++) {
                l.isInterleavedBufferAttribute ? S = u[A] * l.data.stride + l.offset : S = u[A] * p;
                for (let d = 0; d < p; d++)
                    g[E++] = f[S++]
            }
            return new Mn(g,p,m)
        }
        if (this.index === null)
            return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const t = new Sn
          , n = this.index.array
          , r = this.attributes;
        for (const l in r) {
            const u = r[l]
              , f = e(u, n);
            t.setAttribute(l, f)
        }
        const a = this.morphAttributes;
        for (const l in a) {
            const u = []
              , f = a[l];
            for (let p = 0, m = f.length; p < m; p++) {
                const g = f[p]
                  , S = e(g, n);
                u.push(S)
            }
            t.morphAttributes[l] = u
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const o = this.groups;
        for (let l = 0, u = o.length; l < u; l++) {
            const f = o[l];
            t.addGroup(f.start, f.count, f.materialIndex)
        }
        return t
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.7,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        this.name !== "" && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0) {
            const u = this.parameters;
            for (const f in u)
                u[f] !== void 0 && (e[f] = u[f]);
            return e
        }
        e.data = {
            attributes: {}
        };
        const t = this.index;
        t !== null && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        const n = this.attributes;
        for (const u in n) {
            const f = n[u];
            e.data.attributes[u] = f.toJSON(e.data)
        }
        const r = {};
        let a = !1;
        for (const u in this.morphAttributes) {
            const f = this.morphAttributes[u]
              , p = [];
            for (let m = 0, g = f.length; m < g; m++) {
                const S = f[m];
                p.push(S.toJSON(e.data))
            }
            p.length > 0 && (r[u] = p,
            a = !0)
        }
        a && (e.data.morphAttributes = r,
        e.data.morphTargetsRelative = this.morphTargetsRelative);
        const o = this.groups;
        o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
        const l = this.boundingSphere;
        return l !== null && (e.data.boundingSphere = l.toJSON()),
        e
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const t = {};
        this.name = e.name;
        const n = e.index;
        n !== null && this.setIndex(n.clone());
        const r = e.attributes;
        for (const f in r) {
            const p = r[f];
            this.setAttribute(f, p.clone(t))
        }
        const a = e.morphAttributes;
        for (const f in a) {
            const p = []
              , m = a[f];
            for (let g = 0, S = m.length; g < S; g++)
                p.push(m[g].clone(t));
            this.morphAttributes[f] = p
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const o = e.groups;
        for (let f = 0, p = o.length; f < p; f++) {
            const m = o[f];
            this.addGroup(m.start, m.count, m.materialIndex)
        }
        const l = e.boundingBox;
        l !== null && (this.boundingBox = l.clone());
        const u = e.boundingSphere;
        return u !== null && (this.boundingSphere = u.clone()),
        this.drawRange.start = e.drawRange.start,
        this.drawRange.count = e.drawRange.count,
        this.userData = e.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
const zo = new Ct
  , hi = new Fl
  , Nr = new ss
  , Vo = new $
  , Fr = new $
  , Or = new $
  , Br = new $
  , Bs = new $
  , zr = new $
  , Go = new $
  , Vr = new $;
class qn extends en {
    constructor(e=new Sn, t=new zl) {
        super(),
        this.isMesh = !0,
        this.type = "Mesh",
        this.geometry = e,
        this.material = t,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.count = 1,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            const r = t[n[0]];
            if (r !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let a = 0, o = r.length; a < o; a++) {
                    const l = r[a].name || String(a);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[l] = a
                }
            }
        }
    }
    getVertexPosition(e, t) {
        const n = this.geometry
          , r = n.attributes.position
          , a = n.morphAttributes.position
          , o = n.morphTargetsRelative;
        t.fromBufferAttribute(r, e);
        const l = this.morphTargetInfluences;
        if (a && l) {
            zr.set(0, 0, 0);
            for (let u = 0, f = a.length; u < f; u++) {
                const p = l[u]
                  , m = a[u];
                p !== 0 && (Bs.fromBufferAttribute(m, e),
                o ? zr.addScaledVector(Bs, p) : zr.addScaledVector(Bs.sub(t), p))
            }
            t.add(zr)
        }
        return t
    }
    raycast(e, t) {
        const n = this.geometry
          , r = this.material
          , a = this.matrixWorld;
        r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(),
        Nr.copy(n.boundingSphere),
        Nr.applyMatrix4(a),
        hi.copy(e.ray).recast(e.near),
        !(Nr.containsPoint(hi.origin) === !1 && (hi.intersectSphere(Nr, Vo) === null || hi.origin.distanceToSquared(Vo) > (e.far - e.near) ** 2)) && (zo.copy(a).invert(),
        hi.copy(e.ray).applyMatrix4(zo),
        !(n.boundingBox !== null && hi.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, hi)))
    }
    _computeIntersections(e, t, n) {
        let r;
        const a = this.geometry
          , o = this.material
          , l = a.index
          , u = a.attributes.position
          , f = a.attributes.uv
          , p = a.attributes.uv1
          , m = a.attributes.normal
          , g = a.groups
          , S = a.drawRange;
        if (l !== null)
            if (Array.isArray(o))
                for (let E = 0, A = g.length; E < A; E++) {
                    const _ = g[E]
                      , d = o[_.materialIndex]
                      , L = Math.max(_.start, S.start)
                      , U = Math.min(l.count, Math.min(_.start + _.count, S.start + S.count));
                    for (let C = L, I = U; C < I; C += 3) {
                        const O = l.getX(C)
                          , N = l.getX(C + 1)
                          , Y = l.getX(C + 2);
                        r = Gr(this, d, e, n, f, p, m, O, N, Y),
                        r && (r.faceIndex = Math.floor(C / 3),
                        r.face.materialIndex = _.materialIndex,
                        t.push(r))
                    }
                }
            else {
                const E = Math.max(0, S.start)
                  , A = Math.min(l.count, S.start + S.count);
                for (let _ = E, d = A; _ < d; _ += 3) {
                    const L = l.getX(_)
                      , U = l.getX(_ + 1)
                      , C = l.getX(_ + 2);
                    r = Gr(this, o, e, n, f, p, m, L, U, C),
                    r && (r.faceIndex = Math.floor(_ / 3),
                    t.push(r))
                }
            }
        else if (u !== void 0)
            if (Array.isArray(o))
                for (let E = 0, A = g.length; E < A; E++) {
                    const _ = g[E]
                      , d = o[_.materialIndex]
                      , L = Math.max(_.start, S.start)
                      , U = Math.min(u.count, Math.min(_.start + _.count, S.start + S.count));
                    for (let C = L, I = U; C < I; C += 3) {
                        const O = C
                          , N = C + 1
                          , Y = C + 2;
                        r = Gr(this, d, e, n, f, p, m, O, N, Y),
                        r && (r.faceIndex = Math.floor(C / 3),
                        r.face.materialIndex = _.materialIndex,
                        t.push(r))
                    }
                }
            else {
                const E = Math.max(0, S.start)
                  , A = Math.min(u.count, S.start + S.count);
                for (let _ = E, d = A; _ < d; _ += 3) {
                    const L = _
                      , U = _ + 1
                      , C = _ + 2;
                    r = Gr(this, o, e, n, f, p, m, L, U, C),
                    r && (r.faceIndex = Math.floor(_ / 3),
                    t.push(r))
                }
            }
    }
}
function Cu(i, e, t, n, r, a, o, l) {
    let u;
    if (e.side === Qt ? u = n.intersectTriangle(o, a, r, !0, l) : u = n.intersectTriangle(r, a, o, e.side === ri, l),
    u === null)
        return null;
    Vr.copy(l),
    Vr.applyMatrix4(i.matrixWorld);
    const f = t.ray.origin.distanceTo(Vr);
    return f < t.near || f > t.far ? null : {
        distance: f,
        point: Vr.clone(),
        object: i
    }
}
function Gr(i, e, t, n, r, a, o, l, u, f) {
    i.getVertexPosition(l, Fr),
    i.getVertexPosition(u, Or),
    i.getVertexPosition(f, Br);
    const p = Cu(i, e, t, n, Fr, Or, Br, Go);
    if (p) {
        const m = new $;
        vn.getBarycoord(Go, Fr, Or, Br, m),
        r && (p.uv = vn.getInterpolatedAttribute(r, l, u, f, m, new Mt)),
        a && (p.uv1 = vn.getInterpolatedAttribute(a, l, u, f, m, new Mt)),
        o && (p.normal = vn.getInterpolatedAttribute(o, l, u, f, m, new $),
        p.normal.dot(n.direction) > 0 && p.normal.multiplyScalar(-1));
        const g = {
            a: l,
            b: u,
            c: f,
            normal: new $,
            materialIndex: 0
        };
        vn.getNormal(Fr, Or, Br, g.normal),
        p.face = g,
        p.barycoord = m
    }
    return p
}
class vr extends Sn {
    constructor(e=1, t=1, n=1, r=1, a=1, o=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: r,
            heightSegments: a,
            depthSegments: o
        };
        const l = this;
        r = Math.floor(r),
        a = Math.floor(a),
        o = Math.floor(o);
        const u = []
          , f = []
          , p = []
          , m = [];
        let g = 0
          , S = 0;
        E("z", "y", "x", -1, -1, n, t, e, o, a, 0),
        E("z", "y", "x", 1, -1, n, t, -e, o, a, 1),
        E("x", "z", "y", 1, 1, e, n, t, r, o, 2),
        E("x", "z", "y", 1, -1, e, n, -t, r, o, 3),
        E("x", "y", "z", 1, -1, e, t, n, r, a, 4),
        E("x", "y", "z", -1, -1, e, t, -n, r, a, 5),
        this.setIndex(u),
        this.setAttribute("position", new Hn(f,3)),
        this.setAttribute("normal", new Hn(p,3)),
        this.setAttribute("uv", new Hn(m,2));
        function E(A, _, d, L, U, C, I, O, N, Y, T) {
            const v = C / N
              , b = I / Y
              , X = C / 2
              , G = I / 2
              , J = O / 2
              , Q = N + 1
              , B = Y + 1;
            let H = 0
              , ee = 0;
            const ue = new $;
            for (let fe = 0; fe < B; fe++) {
                const Ee = fe * b - G;
                for (let Ve = 0; Ve < Q; Ve++) {
                    const Ge = Ve * v - X;
                    ue[A] = Ge * L,
                    ue[_] = Ee * U,
                    ue[d] = J,
                    f.push(ue.x, ue.y, ue.z),
                    ue[A] = 0,
                    ue[_] = 0,
                    ue[d] = O > 0 ? 1 : -1,
                    p.push(ue.x, ue.y, ue.z),
                    m.push(Ve / N),
                    m.push(1 - fe / Y),
                    H += 1
                }
            }
            for (let fe = 0; fe < Y; fe++)
                for (let Ee = 0; Ee < N; Ee++) {
                    const Ve = g + Ee + Q * fe
                      , Ge = g + Ee + Q * (fe + 1)
                      , ht = g + (Ee + 1) + Q * (fe + 1)
                      , ot = g + (Ee + 1) + Q * fe;
                    u.push(Ve, Ge, ot),
                    u.push(Ge, ht, ot),
                    ee += 6
                }
            l.addGroup(S, ee, T),
            S += ee,
            g += H
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
    }
}
function qi(i) {
    const e = {};
    for (const t in i) {
        e[t] = {};
        for (const n in i[t]) {
            const r = i[t][n];
            r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),
            e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r
        }
    }
    return e
}
function Kt(i) {
    const e = {};
    for (let t = 0; t < i.length; t++) {
        const n = qi(i[t]);
        for (const r in n)
            e[r] = n[r]
    }
    return e
}
function Pu(i) {
    const e = [];
    for (let t = 0; t < i.length; t++)
        e.push(i[t].clone());
    return e
}
function Hl(i) {
    const e = i.getRenderTarget();
    return e === null ? i.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : at.workingColorSpace
}
const Du = {
    clone: qi,
    merge: Kt
};
var Lu = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
  , Uu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Pn extends _r {
    constructor(e) {
        super(),
        this.isShaderMaterial = !0,
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.uniformsGroups = [],
        this.vertexShader = Lu,
        this.fragmentShader = Uu,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.forceSinglePass = !0,
        this.extensions = {
            clipCullDistance: !1,
            multiDraw: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv1: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        e !== void 0 && this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = qi(e.uniforms),
        this.uniformsGroups = Pu(e.uniformsGroups),
        this.defines = Object.assign({}, e.defines),
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.fog = e.fog,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.extensions = Object.assign({}, e.extensions),
        this.glslVersion = e.glslVersion,
        this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues),
        this.index0AttributeName = e.index0AttributeName,
        this.uniformsNeedUpdate = e.uniformsNeedUpdate,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        t.glslVersion = this.glslVersion,
        t.uniforms = {};
        for (const r in this.uniforms) {
            const o = this.uniforms[r].value;
            o && o.isTexture ? t.uniforms[r] = {
                type: "t",
                value: o.toJSON(e).uuid
            } : o && o.isColor ? t.uniforms[r] = {
                type: "c",
                value: o.getHex()
            } : o && o.isVector2 ? t.uniforms[r] = {
                type: "v2",
                value: o.toArray()
            } : o && o.isVector3 ? t.uniforms[r] = {
                type: "v3",
                value: o.toArray()
            } : o && o.isVector4 ? t.uniforms[r] = {
                type: "v4",
                value: o.toArray()
            } : o && o.isMatrix3 ? t.uniforms[r] = {
                type: "m3",
                value: o.toArray()
            } : o && o.isMatrix4 ? t.uniforms[r] = {
                type: "m4",
                value: o.toArray()
            } : t.uniforms[r] = {
                value: o
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader,
        t.lights = this.lights,
        t.clipping = this.clipping;
        const n = {};
        for (const r in this.extensions)
            this.extensions[r] === !0 && (n[r] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n),
        t
    }
}
class kl extends en {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = "Camera",
        this.matrixWorldInverse = new Ct,
        this.projectionMatrix = new Ct,
        this.projectionMatrixInverse = new Ct,
        this.coordinateSystem = bn,
        this._reversedDepth = !1
    }
    get reversedDepth() {
        return this._reversedDepth
    }
    copy(e, t) {
        return super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this.coordinateSystem = e.coordinateSystem,
        this
    }
    getWorldDirection(e) {
        return super.getWorldDirection(e).negate()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const ti = new $
  , Ho = new Mt
  , ko = new Mt;
class fn extends kl {
    constructor(e=50, t=1, n=.1, r=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = "PerspectiveCamera",
        this.fov = e,
        this.zoom = 1,
        this.near = n,
        this.far = r,
        this.focus = 10,
        this.aspect = t,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.fov = e.fov,
        this.zoom = e.zoom,
        this.near = e.near,
        this.far = e.far,
        this.focus = e.focus,
        this.aspect = e.aspect,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this.filmGauge = e.filmGauge,
        this.filmOffset = e.filmOffset,
        this
    }
    setFocalLength(e) {
        const t = .5 * this.getFilmHeight() / e;
        this.fov = Ga * 2 * Math.atan(t),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        const e = Math.tan(_s * .5 * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return Ga * 2 * Math.atan(Math.tan(_s * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    getViewBounds(e, t, n) {
        ti.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse),
        t.set(ti.x, ti.y).multiplyScalar(-e / ti.z),
        ti.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse),
        n.set(ti.x, ti.y).multiplyScalar(-e / ti.z)
    }
    getViewSize(e, t) {
        return this.getViewBounds(e, Ho, ko),
        t.subVectors(ko, Ho)
    }
    setViewOffset(e, t, n, r, a, o) {
        this.aspect = e / t,
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = r,
        this.view.width = a,
        this.view.height = o,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = e * Math.tan(_s * .5 * this.fov) / this.zoom
          , n = 2 * t
          , r = this.aspect * n
          , a = -.5 * r;
        const o = this.view;
        if (this.view !== null && this.view.enabled) {
            const u = o.fullWidth
              , f = o.fullHeight;
            a += o.offsetX * r / u,
            t -= o.offsetY * n / f,
            r *= o.width / u,
            n *= o.height / f
        }
        const l = this.filmOffset;
        l !== 0 && (a += e * l / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(a, a + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.fov = this.fov,
        t.object.zoom = this.zoom,
        t.object.near = this.near,
        t.object.far = this.far,
        t.object.focus = this.focus,
        t.object.aspect = this.aspect,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t.object.filmGauge = this.filmGauge,
        t.object.filmOffset = this.filmOffset,
        t
    }
}
const Oi = -90
  , Bi = 1;
class Iu extends en {
    constructor(e, t, n) {
        super(),
        this.type = "CubeCamera",
        this.renderTarget = n,
        this.coordinateSystem = null,
        this.activeMipmapLevel = 0;
        const r = new fn(Oi,Bi,e,t);
        r.layers = this.layers,
        this.add(r);
        const a = new fn(Oi,Bi,e,t);
        a.layers = this.layers,
        this.add(a);
        const o = new fn(Oi,Bi,e,t);
        o.layers = this.layers,
        this.add(o);
        const l = new fn(Oi,Bi,e,t);
        l.layers = this.layers,
        this.add(l);
        const u = new fn(Oi,Bi,e,t);
        u.layers = this.layers,
        this.add(u);
        const f = new fn(Oi,Bi,e,t);
        f.layers = this.layers,
        this.add(f)
    }
    updateCoordinateSystem() {
        const e = this.coordinateSystem
          , t = this.children.concat()
          , [n,r,a,o,l,u] = t;
        for (const f of t)
            this.remove(f);
        if (e === bn)
            n.up.set(0, 1, 0),
            n.lookAt(1, 0, 0),
            r.up.set(0, 1, 0),
            r.lookAt(-1, 0, 0),
            a.up.set(0, 0, -1),
            a.lookAt(0, 1, 0),
            o.up.set(0, 0, 1),
            o.lookAt(0, -1, 0),
            l.up.set(0, 1, 0),
            l.lookAt(0, 0, 1),
            u.up.set(0, 1, 0),
            u.lookAt(0, 0, -1);
        else if (e === ts)
            n.up.set(0, -1, 0),
            n.lookAt(-1, 0, 0),
            r.up.set(0, -1, 0),
            r.lookAt(1, 0, 0),
            a.up.set(0, 0, 1),
            a.lookAt(0, 1, 0),
            o.up.set(0, 0, -1),
            o.lookAt(0, -1, 0),
            l.up.set(0, -1, 0),
            l.lookAt(0, 0, 1),
            u.up.set(0, -1, 0),
            u.lookAt(0, 0, -1);
        else
            throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
        for (const f of t)
            this.add(f),
            f.updateMatrixWorld()
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        const {renderTarget: n, activeMipmapLevel: r} = this;
        this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem,
        this.updateCoordinateSystem());
        const [a,o,l,u,f,p] = this.children
          , m = e.getRenderTarget()
          , g = e.getActiveCubeFace()
          , S = e.getActiveMipmapLevel()
          , E = e.xr.enabled;
        e.xr.enabled = !1;
        const A = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
        e.setRenderTarget(n, 0, r),
        e.render(t, a),
        e.setRenderTarget(n, 1, r),
        e.render(t, o),
        e.setRenderTarget(n, 2, r),
        e.render(t, l),
        e.setRenderTarget(n, 3, r),
        e.render(t, u),
        e.setRenderTarget(n, 4, r),
        e.render(t, f),
        n.texture.generateMipmaps = A,
        e.setRenderTarget(n, 5, r),
        e.render(t, p),
        e.setRenderTarget(m, g, S),
        e.xr.enabled = E,
        n.texture.needsPMREMUpdate = !0
    }
}
class Wl extends Zt {
    constructor(e=[], t=Si, n, r, a, o, l, u, f, p) {
        super(e, t, n, r, a, o, l, u, f, p),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
class Xl extends Rn {
    constructor(e=1, t={}) {
        super(e, e, t),
        this.isWebGLCubeRenderTarget = !0;
        const n = {
            width: e,
            height: e,
            depth: 1
        }
          , r = [n, n, n, n, n, n];
        this.texture = new Wl(r),
        this._setTextureOptions(t),
        this.texture.isRenderTargetTexture = !0
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type,
        this.texture.colorSpace = t.colorSpace,
        this.texture.generateMipmaps = t.generateMipmaps,
        this.texture.minFilter = t.minFilter,
        this.texture.magFilter = t.magFilter;
        const n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }
          , r = new vr(5,5,5)
          , a = new Pn({
            name: "CubemapFromEquirect",
            uniforms: qi(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: Qt,
            blending: Vn
        });
        a.uniforms.tEquirect.value = t;
        const o = new qn(r,a)
          , l = t.minFilter;
        return t.minFilter === xi && (t.minFilter = qt),
        new Iu(1,10,this).update(e, o),
        t.minFilter = l,
        o.geometry.dispose(),
        o.material.dispose(),
        this
    }
    clear(e, t=!0, n=!0, r=!0) {
        const a = e.getRenderTarget();
        for (let o = 0; o < 6; o++)
            e.setRenderTarget(this, o),
            e.clear(t, n, r);
        e.setRenderTarget(a)
    }
}
class Hr extends en {
    constructor() {
        super(),
        this.isGroup = !0,
        this.type = "Group"
    }
}
const Nu = {
    type: "move"
};
class zs {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new Hr,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new Hr,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new $,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new $),
        this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new Hr,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new $,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new $),
        this._grip
    }
    dispatchEvent(e) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(e),
        this._grip !== null && this._grip.dispatchEvent(e),
        this._hand !== null && this._hand.dispatchEvent(e),
        this
    }
    connect(e) {
        if (e && e.hand) {
            const t = this._hand;
            if (t)
                for (const n of e.hand.values())
                    this._getHandJoint(t, n)
        }
        return this.dispatchEvent({
            type: "connected",
            data: e
        }),
        this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e
        }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
    }
    update(e, t, n) {
        let r = null
          , a = null
          , o = null;
        const l = this._targetRay
          , u = this._grip
          , f = this._hand;
        if (e && t.session.visibilityState !== "visible-blurred") {
            if (f && e.hand) {
                o = !0;
                for (const A of e.hand.values()) {
                    const _ = t.getJointPose(A, n)
                      , d = this._getHandJoint(f, A);
                    _ !== null && (d.matrix.fromArray(_.transform.matrix),
                    d.matrix.decompose(d.position, d.rotation, d.scale),
                    d.matrixWorldNeedsUpdate = !0,
                    d.jointRadius = _.radius),
                    d.visible = _ !== null
                }
                const p = f.joints["index-finger-tip"]
                  , m = f.joints["thumb-tip"]
                  , g = p.position.distanceTo(m.position)
                  , S = .02
                  , E = .005;
                f.inputState.pinching && g > S + E ? (f.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: e.handedness,
                    target: this
                })) : !f.inputState.pinching && g <= S - E && (f.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e.handedness,
                    target: this
                }))
            } else
                u !== null && e.gripSpace && (a = t.getPose(e.gripSpace, n),
                a !== null && (u.matrix.fromArray(a.transform.matrix),
                u.matrix.decompose(u.position, u.rotation, u.scale),
                u.matrixWorldNeedsUpdate = !0,
                a.linearVelocity ? (u.hasLinearVelocity = !0,
                u.linearVelocity.copy(a.linearVelocity)) : u.hasLinearVelocity = !1,
                a.angularVelocity ? (u.hasAngularVelocity = !0,
                u.angularVelocity.copy(a.angularVelocity)) : u.hasAngularVelocity = !1));
            l !== null && (r = t.getPose(e.targetRaySpace, n),
            r === null && a !== null && (r = a),
            r !== null && (l.matrix.fromArray(r.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            l.matrixWorldNeedsUpdate = !0,
            r.linearVelocity ? (l.hasLinearVelocity = !0,
            l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = !1,
            r.angularVelocity ? (l.hasAngularVelocity = !0,
            l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = !1,
            this.dispatchEvent(Nu)))
        }
        return l !== null && (l.visible = r !== null),
        u !== null && (u.visible = a !== null),
        f !== null && (f.visible = o !== null),
        this
    }
    _getHandJoint(e, t) {
        if (e.joints[t.jointName] === void 0) {
            const n = new Hr;
            n.matrixAutoUpdate = !1,
            n.visible = !1,
            e.joints[t.jointName] = n,
            e.add(n)
        }
        return e.joints[t.jointName]
    }
}
class Fu extends en {
    constructor() {
        super(),
        this.isScene = !0,
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.backgroundBlurriness = 0,
        this.backgroundIntensity = 1,
        this.backgroundRotation = new Xn,
        this.environmentIntensity = 1,
        this.environmentRotation = new Xn,
        this.overrideMaterial = null,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t),
        e.background !== null && (this.background = e.background.clone()),
        e.environment !== null && (this.environment = e.environment.clone()),
        e.fog !== null && (this.fog = e.fog.clone()),
        this.backgroundBlurriness = e.backgroundBlurriness,
        this.backgroundIntensity = e.backgroundIntensity,
        this.backgroundRotation.copy(e.backgroundRotation),
        this.environmentIntensity = e.environmentIntensity,
        this.environmentRotation.copy(e.environmentRotation),
        e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return this.fog !== null && (t.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity),
        t.object.backgroundRotation = this.backgroundRotation.toArray(),
        this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity),
        t.object.environmentRotation = this.environmentRotation.toArray(),
        t
    }
}
class Ou extends Zt {
    constructor(e=null, t=1, n=1, r, a, o, l, u, f=Ht, p=Ht, m, g) {
        super(null, o, l, u, f, p, r, a, m, g),
        this.isDataTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n
        },
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
const Vs = new $
  , Bu = new $
  , zu = new $e;
class gi {
    constructor(e=new $(1,0,0), t=0) {
        this.isPlane = !0,
        this.normal = e,
        this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    }
    setComponents(e, t, n, r) {
        return this.normal.set(e, t, n),
        this.constant = r,
        this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    }
    setFromCoplanarPoints(e, t, n) {
        const r = Vs.subVectors(n, t).cross(Bu.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(r, e),
        this
    }
    copy(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e))
    }
    intersectLine(e, t) {
        const n = e.delta(Vs)
          , r = this.normal.dot(n);
        if (r === 0)
            return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        const a = -(e.start.dot(this.normal) + this.constant) / r;
        return a < 0 || a > 1 ? null : t.copy(e.start).addScaledVector(n, a)
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start)
          , n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        const n = t || zu.getNormalMatrix(e)
          , r = this.coplanarPoint(Vs).applyMatrix4(e)
          , a = this.normal.applyMatrix3(n).normalize();
        return this.constant = -r.dot(a),
        this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal),
        this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const di = new ss
  , Vu = new Mt(.5,.5)
  , kr = new $;
class ql {
    constructor(e=new gi, t=new gi, n=new gi, r=new gi, a=new gi, o=new gi) {
        this.planes = [e, t, n, r, a, o]
    }
    set(e, t, n, r, a, o) {
        const l = this.planes;
        return l[0].copy(e),
        l[1].copy(t),
        l[2].copy(n),
        l[3].copy(r),
        l[4].copy(a),
        l[5].copy(o),
        this
    }
    copy(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e, t=bn, n=!1) {
        const r = this.planes
          , a = e.elements
          , o = a[0]
          , l = a[1]
          , u = a[2]
          , f = a[3]
          , p = a[4]
          , m = a[5]
          , g = a[6]
          , S = a[7]
          , E = a[8]
          , A = a[9]
          , _ = a[10]
          , d = a[11]
          , L = a[12]
          , U = a[13]
          , C = a[14]
          , I = a[15];
        if (r[0].setComponents(f - o, S - p, d - E, I - L).normalize(),
        r[1].setComponents(f + o, S + p, d + E, I + L).normalize(),
        r[2].setComponents(f + l, S + m, d + A, I + U).normalize(),
        r[3].setComponents(f - l, S - m, d - A, I - U).normalize(),
        n)
            r[4].setComponents(u, g, _, C).normalize(),
            r[5].setComponents(f - u, S - g, d - _, I - C).normalize();
        else if (r[4].setComponents(f - u, S - g, d - _, I - C).normalize(),
        t === bn)
            r[5].setComponents(f + u, S + g, d + _, I + C).normalize();
        else if (t === ts)
            r[5].setComponents(u, g, _, C).normalize();
        else
            throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
        return this
    }
    intersectsObject(e) {
        if (e.boundingSphere !== void 0)
            e.boundingSphere === null && e.computeBoundingSphere(),
            di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
        else {
            const t = e.geometry;
            t.boundingSphere === null && t.computeBoundingSphere(),
            di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)
        }
        return this.intersectsSphere(di)
    }
    intersectsSprite(e) {
        di.center.set(0, 0, 0);
        const t = Vu.distanceTo(e.center);
        return di.radius = .7071067811865476 + t,
        di.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(di)
    }
    intersectsSphere(e) {
        const t = this.planes
          , n = e.center
          , r = -e.radius;
        for (let a = 0; a < 6; a++)
            if (t[a].distanceToPoint(n) < r)
                return !1;
        return !0
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) {
            const r = t[n];
            if (kr.x = r.normal.x > 0 ? e.max.x : e.min.x,
            kr.y = r.normal.y > 0 ? e.max.y : e.min.y,
            kr.z = r.normal.z > 0 ? e.max.z : e.min.z,
            r.distanceToPoint(kr) < 0)
                return !1
        }
        return !0
    }
    containsPoint(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class Yl extends _r {
    constructor(e) {
        super(),
        this.isPointsMaterial = !0,
        this.type = "PointsMaterial",
        this.color = new vt(16777215),
        this.map = null,
        this.alphaMap = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.size = e.size,
        this.sizeAttenuation = e.sizeAttenuation,
        this.fog = e.fog,
        this
    }
}
const Wo = new Ct
  , Ha = new Fl
  , Wr = new ss
  , Xr = new $;
class Gu extends en {
    constructor(e=new Sn, t=new Yl) {
        super(),
        this.isPoints = !0,
        this.type = "Points",
        this.geometry = e,
        this.material = t,
        this.morphTargetDictionary = void 0,
        this.morphTargetInfluences = void 0,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    raycast(e, t) {
        const n = this.geometry
          , r = this.matrixWorld
          , a = e.params.Points.threshold
          , o = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        Wr.copy(n.boundingSphere),
        Wr.applyMatrix4(r),
        Wr.radius += a,
        e.ray.intersectsSphere(Wr) === !1)
            return;
        Wo.copy(r).invert(),
        Ha.copy(e.ray).applyMatrix4(Wo);
        const l = a / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , u = l * l
          , f = n.index
          , m = n.attributes.position;
        if (f !== null) {
            const g = Math.max(0, o.start)
              , S = Math.min(f.count, o.start + o.count);
            for (let E = g, A = S; E < A; E++) {
                const _ = f.getX(E);
                Xr.fromBufferAttribute(m, _),
                Xo(Xr, _, u, r, e, t, this)
            }
        } else {
            const g = Math.max(0, o.start)
              , S = Math.min(m.count, o.start + o.count);
            for (let E = g, A = S; E < A; E++)
                Xr.fromBufferAttribute(m, E),
                Xo(Xr, E, u, r, e, t, this)
        }
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            const r = t[n[0]];
            if (r !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let a = 0, o = r.length; a < o; a++) {
                    const l = r[a].name || String(a);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[l] = a
                }
            }
        }
    }
}
function Xo(i, e, t, n, r, a, o) {
    const l = Ha.distanceSqToPoint(i);
    if (l < t) {
        const u = new $;
        Ha.closestPointToPoint(i, u),
        u.applyMatrix4(n);
        const f = r.ray.origin.distanceTo(u);
        if (f < r.near || f > r.far)
            return;
        a.push({
            distance: f,
            distanceToRay: Math.sqrt(l),
            point: u,
            index: e,
            face: null,
            faceIndex: null,
            barycoord: null,
            object: o
        })
    }
}
class dr extends Zt {
    constructor(e, t, n=Cn, r, a, o, l=Ht, u=Ht, f, p=Wn, m=1) {
        if (p !== Wn && p !== Mi)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        const g = {
            width: e,
            height: t,
            depth: m
        };
        super(g, r, a, o, l, u, p, n, f),
        this.isDepthTexture = !0,
        this.flipY = !1,
        this.generateMipmaps = !1,
        this.compareFunction = null
    }
    copy(e) {
        return super.copy(e),
        this.source = new eo(Object.assign({}, e.image)),
        this.compareFunction = e.compareFunction,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return this.compareFunction !== null && (t.compareFunction = this.compareFunction),
        t
    }
}
class Hu extends dr {
    constructor(e, t=Cn, n=Si, r, a, o=Ht, l=Ht, u, f=Wn) {
        const p = {
            width: e,
            height: e,
            depth: 1
        }
          , m = [p, p, p, p, p, p];
        super(e, e, t, n, r, a, o, l, u, f),
        this.image = m,
        this.isCubeDepthTexture = !0,
        this.isCubeTexture = !0
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
class jl extends Zt {
    constructor(e=null) {
        super(),
        this.sourceTexture = e,
        this.isExternalTexture = !0
    }
    copy(e) {
        return super.copy(e),
        this.sourceTexture = e.sourceTexture,
        this
    }
}
class as extends Sn {
    constructor(e=1, t=1, n=1, r=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: r
        };
        const a = e / 2
          , o = t / 2
          , l = Math.floor(n)
          , u = Math.floor(r)
          , f = l + 1
          , p = u + 1
          , m = e / l
          , g = t / u
          , S = []
          , E = []
          , A = []
          , _ = [];
        for (let d = 0; d < p; d++) {
            const L = d * g - o;
            for (let U = 0; U < f; U++) {
                const C = U * m - a;
                E.push(C, -L, 0),
                A.push(0, 0, 1),
                _.push(U / l),
                _.push(1 - d / u)
            }
        }
        for (let d = 0; d < u; d++)
            for (let L = 0; L < l; L++) {
                const U = L + f * d
                  , C = L + f * (d + 1)
                  , I = L + 1 + f * (d + 1)
                  , O = L + 1 + f * d;
                S.push(U, C, O),
                S.push(C, I, O)
            }
        this.setIndex(S),
        this.setAttribute("position", new Hn(E,3)),
        this.setAttribute("normal", new Hn(A,3)),
        this.setAttribute("uv", new Hn(_,2))
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new as(e.width,e.height,e.widthSegments,e.heightSegments)
    }
}
class ku extends Pn {
    constructor(e) {
        super(e),
        this.isRawShaderMaterial = !0,
        this.type = "RawShaderMaterial"
    }
}
class Wu extends _r {
    constructor(e) {
        super(),
        this.isMeshDepthMaterial = !0,
        this.type = "MeshDepthMaterial",
        this.depthPacking = tu,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.depthPacking = e.depthPacking,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
}
class Xu extends _r {
    constructor(e) {
        super(),
        this.isMeshDistanceMaterial = !0,
        this.type = "MeshDistanceMaterial",
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this
    }
}
class Kl extends kl {
    constructor(e=-1, t=1, n=1, r=-1, a=.1, o=2e3) {
        super(),
        this.isOrthographicCamera = !0,
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = e,
        this.right = t,
        this.top = n,
        this.bottom = r,
        this.near = a,
        this.far = o,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.left = e.left,
        this.right = e.right,
        this.top = e.top,
        this.bottom = e.bottom,
        this.near = e.near,
        this.far = e.far,
        this.zoom = e.zoom,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this
    }
    setViewOffset(e, t, n, r, a, o) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = r,
        this.view.width = a,
        this.view.height = o,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = (this.right - this.left) / (2 * this.zoom)
          , t = (this.top - this.bottom) / (2 * this.zoom)
          , n = (this.right + this.left) / 2
          , r = (this.top + this.bottom) / 2;
        let a = n - e
          , o = n + e
          , l = r + t
          , u = r - t;
        if (this.view !== null && this.view.enabled) {
            const f = (this.right - this.left) / this.view.fullWidth / this.zoom
              , p = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            a += f * this.view.offsetX,
            o = a + f * this.view.width,
            l -= p * this.view.offsetY,
            u = l - p * this.view.height
        }
        this.projectionMatrix.makeOrthographic(a, o, l, u, this.near, this.far, this.coordinateSystem, this.reversedDepth),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.zoom = this.zoom,
        t.object.left = this.left,
        t.object.right = this.right,
        t.object.top = this.top,
        t.object.bottom = this.bottom,
        t.object.near = this.near,
        t.object.far = this.far,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t
    }
}
class qu extends fn {
    constructor(e=[]) {
        super(),
        this.isArrayCamera = !0,
        this.isMultiViewCamera = !1,
        this.cameras = e
    }
}
function qo(i, e, t, n) {
    const r = Yu(n);
    switch (t) {
    case Dl:
        return i * e;
    case Ul:
        return i * e / r.components * r.byteLength;
    case Ka:
        return i * e / r.components * r.byteLength;
    case Wi:
        return i * e * 2 / r.components * r.byteLength;
    case Za:
        return i * e * 2 / r.components * r.byteLength;
    case Ll:
        return i * e * 3 / r.components * r.byteLength;
    case xn:
        return i * e * 4 / r.components * r.byteLength;
    case $a:
        return i * e * 4 / r.components * r.byteLength;
    case Kr:
    case Zr:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case $r:
    case Jr:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ua:
    case ha:
        return Math.max(i, 16) * Math.max(e, 8) / 4;
    case ca:
    case fa:
        return Math.max(i, 8) * Math.max(e, 8) / 2;
    case da:
    case pa:
    case ga:
    case _a:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ma:
    case va:
    case xa:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Ma:
        return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case Sa:
        return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case ya:
        return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case Ea:
        return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case Ta:
        return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case Aa:
        return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case ba:
        return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case wa:
        return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Ra:
        return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case Ca:
        return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Pa:
        return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Da:
        return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case La:
        return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case Ua:
        return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Ia:
    case Na:
    case Fa:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case Oa:
    case Ba:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case za:
    case Va:
        return Math.ceil(i / 4) * Math.ceil(e / 4) * 16
    }
    throw new Error(`Unable to determine texture byte length for ${t} format.`)
}
function Yu(i) {
    switch (i) {
    case hn:
    case wl:
        return {
            byteLength: 1,
            components: 1
        };
    case ur:
    case Rl:
    case kn:
        return {
            byteLength: 2,
            components: 1
        };
    case Ya:
    case ja:
        return {
            byteLength: 2,
            components: 4
        };
    case Cn:
    case qa:
    case An:
        return {
            byteLength: 4,
            components: 1
        };
    case Cl:
    case Pl:
        return {
            byteLength: 4,
            components: 3
        }
    }
    throw new Error(`Unknown texture type ${i}.`)
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: Xa
    }
}));
typeof window < "u" && (window.__THREE__ ? je("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Xa);
function Zl() {
    let i = null
      , e = !1
      , t = null
      , n = null;
    function r(a, o) {
        t(a, o),
        n = i.requestAnimationFrame(r)
    }
    return {
        start: function() {
            e !== !0 && t !== null && (n = i.requestAnimationFrame(r),
            e = !0)
        },
        stop: function() {
            i.cancelAnimationFrame(n),
            e = !1
        },
        setAnimationLoop: function(a) {
            t = a
        },
        setContext: function(a) {
            i = a
        }
    }
}
function ju(i) {
    const e = new WeakMap;
    function t(l, u) {
        const f = l.array
          , p = l.usage
          , m = f.byteLength
          , g = i.createBuffer();
        i.bindBuffer(u, g),
        i.bufferData(u, f, p),
        l.onUploadCallback();
        let S;
        if (f instanceof Float32Array)
            S = i.FLOAT;
        else if (typeof Float16Array < "u" && f instanceof Float16Array)
            S = i.HALF_FLOAT;
        else if (f instanceof Uint16Array)
            l.isFloat16BufferAttribute ? S = i.HALF_FLOAT : S = i.UNSIGNED_SHORT;
        else if (f instanceof Int16Array)
            S = i.SHORT;
        else if (f instanceof Uint32Array)
            S = i.UNSIGNED_INT;
        else if (f instanceof Int32Array)
            S = i.INT;
        else if (f instanceof Int8Array)
            S = i.BYTE;
        else if (f instanceof Uint8Array)
            S = i.UNSIGNED_BYTE;
        else if (f instanceof Uint8ClampedArray)
            S = i.UNSIGNED_BYTE;
        else
            throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + f);
        return {
            buffer: g,
            type: S,
            bytesPerElement: f.BYTES_PER_ELEMENT,
            version: l.version,
            size: m
        }
    }
    function n(l, u, f) {
        const p = u.array
          , m = u.updateRanges;
        if (i.bindBuffer(f, l),
        m.length === 0)
            i.bufferSubData(f, 0, p);
        else {
            m.sort( (S, E) => S.start - E.start);
            let g = 0;
            for (let S = 1; S < m.length; S++) {
                const E = m[g]
                  , A = m[S];
                A.start <= E.start + E.count + 1 ? E.count = Math.max(E.count, A.start + A.count - E.start) : (++g,
                m[g] = A)
            }
            m.length = g + 1;
            for (let S = 0, E = m.length; S < E; S++) {
                const A = m[S];
                i.bufferSubData(f, A.start * p.BYTES_PER_ELEMENT, p, A.start, A.count)
            }
            u.clearUpdateRanges()
        }
        u.onUploadCallback()
    }
    function r(l) {
        return l.isInterleavedBufferAttribute && (l = l.data),
        e.get(l)
    }
    function a(l) {
        l.isInterleavedBufferAttribute && (l = l.data);
        const u = e.get(l);
        u && (i.deleteBuffer(u.buffer),
        e.delete(l))
    }
    function o(l, u) {
        if (l.isInterleavedBufferAttribute && (l = l.data),
        l.isGLBufferAttribute) {
            const p = e.get(l);
            (!p || p.version < l.version) && e.set(l, {
                buffer: l.buffer,
                type: l.type,
                bytesPerElement: l.elementSize,
                version: l.version
            });
            return
        }
        const f = e.get(l);
        if (f === void 0)
            e.set(l, t(l, u));
        else if (f.version < l.version) {
            if (f.size !== l.array.byteLength)
                throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
            n(f.buffer, l, u),
            f.version = l.version
        }
    }
    return {
        get: r,
        remove: a,
        update: o
    }
}
var Ku = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`
  , Zu = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`
  , $u = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`
  , Ju = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , Qu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`
  , ef = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
  , tf = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
  , nf = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
  , rf = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`
  , sf = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`
  , af = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`
  , of = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
  , lf = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`
  , cf = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
  , uf = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
  , ff = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`
  , hf = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
  , df = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
  , pf = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
  , mf = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
  , gf = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
  , _f = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`
  , vf = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`
  , xf = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`
  , Mf = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
  , Sf = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
  , yf = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
  , Ef = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`
  , Tf = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
  , Af = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
  , bf = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
  , wf = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`
  , Rf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
  , Cf = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`
  , Pf = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
  , Df = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
  , Lf = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
  , Uf = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
  , If = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
  , Nf = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
  , Ff = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
  , Of = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
  , Bf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
  , zf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
  , Vf = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
  , Gf = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
  , Hf = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`
  , kf = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
  , Wf = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
  , Xf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
  , qf = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
  , Yf = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`
  , jf = `uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
  , Kf = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
  , Zf = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
  , $f = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`
  , Jf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
  , Qf = `#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , eh = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , th = `#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`
  , nh = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
  , ih = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
  , rh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
  , sh = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , ah = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`
  , oh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
  , lh = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`
  , ch = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
  , uh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
  , fh = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`
  , hh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`
  , dh = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`
  , ph = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
  , mh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , gh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , _h = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
  , vh = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`
  , xh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`
  , Mh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`
  , Sh = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`
  , yh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
  , Eh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
  , Th = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`
  , Ah = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
  , bh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
  , wh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
  , Rh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
  , Ch = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`
  , Ph = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
  , Dh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`
  , Lh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
  , Uh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
  , Ih = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
  , Nh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
  , Fh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , Oh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
  , Bh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
  , zh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
  , Vh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
  , Gh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
  , Hh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
  , kh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`
  , Wh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`
  , Xh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , qh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , Yh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`
  , jh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Kh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
  , Zh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , $h = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , Jh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Qh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , ed = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , td = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
  , nd = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`
  , id = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
  , rd = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`
  , sd = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
  , ad = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , od = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , ld = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , cd = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
  , ud = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , fd = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , hd = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , dd = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`
  , pd = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , md = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`
  , gd = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`
  , _d = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , vd = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , xd = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , Md = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Sd = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , yd = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Ed = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`
  , Td = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , Ad = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , bd = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , wd = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , Rd = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , Qe = {
    alphahash_fragment: Ku,
    alphahash_pars_fragment: Zu,
    alphamap_fragment: $u,
    alphamap_pars_fragment: Ju,
    alphatest_fragment: Qu,
    alphatest_pars_fragment: ef,
    aomap_fragment: tf,
    aomap_pars_fragment: nf,
    batching_pars_vertex: rf,
    batching_vertex: sf,
    begin_vertex: af,
    beginnormal_vertex: of,
    bsdfs: lf,
    iridescence_fragment: cf,
    bumpmap_pars_fragment: uf,
    clipping_planes_fragment: ff,
    clipping_planes_pars_fragment: hf,
    clipping_planes_pars_vertex: df,
    clipping_planes_vertex: pf,
    color_fragment: mf,
    color_pars_fragment: gf,
    color_pars_vertex: _f,
    color_vertex: vf,
    common: xf,
    cube_uv_reflection_fragment: Mf,
    defaultnormal_vertex: Sf,
    displacementmap_pars_vertex: yf,
    displacementmap_vertex: Ef,
    emissivemap_fragment: Tf,
    emissivemap_pars_fragment: Af,
    colorspace_fragment: bf,
    colorspace_pars_fragment: wf,
    envmap_fragment: Rf,
    envmap_common_pars_fragment: Cf,
    envmap_pars_fragment: Pf,
    envmap_pars_vertex: Df,
    envmap_physical_pars_fragment: Hf,
    envmap_vertex: Lf,
    fog_vertex: Uf,
    fog_pars_vertex: If,
    fog_fragment: Nf,
    fog_pars_fragment: Ff,
    gradientmap_pars_fragment: Of,
    lightmap_pars_fragment: Bf,
    lights_lambert_fragment: zf,
    lights_lambert_pars_fragment: Vf,
    lights_pars_begin: Gf,
    lights_toon_fragment: kf,
    lights_toon_pars_fragment: Wf,
    lights_phong_fragment: Xf,
    lights_phong_pars_fragment: qf,
    lights_physical_fragment: Yf,
    lights_physical_pars_fragment: jf,
    lights_fragment_begin: Kf,
    lights_fragment_maps: Zf,
    lights_fragment_end: $f,
    logdepthbuf_fragment: Jf,
    logdepthbuf_pars_fragment: Qf,
    logdepthbuf_pars_vertex: eh,
    logdepthbuf_vertex: th,
    map_fragment: nh,
    map_pars_fragment: ih,
    map_particle_fragment: rh,
    map_particle_pars_fragment: sh,
    metalnessmap_fragment: ah,
    metalnessmap_pars_fragment: oh,
    morphinstance_vertex: lh,
    morphcolor_vertex: ch,
    morphnormal_vertex: uh,
    morphtarget_pars_vertex: fh,
    morphtarget_vertex: hh,
    normal_fragment_begin: dh,
    normal_fragment_maps: ph,
    normal_pars_fragment: mh,
    normal_pars_vertex: gh,
    normal_vertex: _h,
    normalmap_pars_fragment: vh,
    clearcoat_normal_fragment_begin: xh,
    clearcoat_normal_fragment_maps: Mh,
    clearcoat_pars_fragment: Sh,
    iridescence_pars_fragment: yh,
    opaque_fragment: Eh,
    packing: Th,
    premultiplied_alpha_fragment: Ah,
    project_vertex: bh,
    dithering_fragment: wh,
    dithering_pars_fragment: Rh,
    roughnessmap_fragment: Ch,
    roughnessmap_pars_fragment: Ph,
    shadowmap_pars_fragment: Dh,
    shadowmap_pars_vertex: Lh,
    shadowmap_vertex: Uh,
    shadowmask_pars_fragment: Ih,
    skinbase_vertex: Nh,
    skinning_pars_vertex: Fh,
    skinning_vertex: Oh,
    skinnormal_vertex: Bh,
    specularmap_fragment: zh,
    specularmap_pars_fragment: Vh,
    tonemapping_fragment: Gh,
    tonemapping_pars_fragment: Hh,
    transmission_fragment: kh,
    transmission_pars_fragment: Wh,
    uv_pars_fragment: Xh,
    uv_pars_vertex: qh,
    uv_vertex: Yh,
    worldpos_vertex: jh,
    background_vert: Kh,
    background_frag: Zh,
    backgroundCube_vert: $h,
    backgroundCube_frag: Jh,
    cube_vert: Qh,
    cube_frag: ed,
    depth_vert: td,
    depth_frag: nd,
    distance_vert: id,
    distance_frag: rd,
    equirect_vert: sd,
    equirect_frag: ad,
    linedashed_vert: od,
    linedashed_frag: ld,
    meshbasic_vert: cd,
    meshbasic_frag: ud,
    meshlambert_vert: fd,
    meshlambert_frag: hd,
    meshmatcap_vert: dd,
    meshmatcap_frag: pd,
    meshnormal_vert: md,
    meshnormal_frag: gd,
    meshphong_vert: _d,
    meshphong_frag: vd,
    meshphysical_vert: xd,
    meshphysical_frag: Md,
    meshtoon_vert: Sd,
    meshtoon_frag: yd,
    points_vert: Ed,
    points_frag: Td,
    shadow_vert: Ad,
    shadow_frag: bd,
    sprite_vert: wd,
    sprite_frag: Rd
}
  , ye = {
    common: {
        diffuse: {
            value: new vt(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new $e
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new $e
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        },
        specularMapTransform: {
            value: new $e
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        envMapRotation: {
            value: new $e
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        },
        dfgLUT: {
            value: null
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        },
        aoMapTransform: {
            value: new $e
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        },
        lightMapTransform: {
            value: new $e
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpMapTransform: {
            value: new $e
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalMapTransform: {
            value: new $e
        },
        normalScale: {
            value: new Mt(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementMapTransform: {
            value: new $e
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        },
        emissiveMapTransform: {
            value: new $e
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        },
        metalnessMapTransform: {
            value: new $e
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        },
        roughnessMapTransform: {
            value: new $e
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new vt(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotShadowMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowIntensity: 1,
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new vt(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new $e
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new $e
        }
    },
    sprite: {
        diffuse: {
            value: new vt(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new Mt(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new $e
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new $e
        },
        alphaTest: {
            value: 0
        }
    }
}
  , Tn = {
    basic: {
        uniforms: Kt([ye.common, ye.specularmap, ye.envmap, ye.aomap, ye.lightmap, ye.fog]),
        vertexShader: Qe.meshbasic_vert,
        fragmentShader: Qe.meshbasic_frag
    },
    lambert: {
        uniforms: Kt([ye.common, ye.specularmap, ye.envmap, ye.aomap, ye.lightmap, ye.emissivemap, ye.bumpmap, ye.normalmap, ye.displacementmap, ye.fog, ye.lights, {
            emissive: {
                value: new vt(0)
            }
        }]),
        vertexShader: Qe.meshlambert_vert,
        fragmentShader: Qe.meshlambert_frag
    },
    phong: {
        uniforms: Kt([ye.common, ye.specularmap, ye.envmap, ye.aomap, ye.lightmap, ye.emissivemap, ye.bumpmap, ye.normalmap, ye.displacementmap, ye.fog, ye.lights, {
            emissive: {
                value: new vt(0)
            },
            specular: {
                value: new vt(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: Qe.meshphong_vert,
        fragmentShader: Qe.meshphong_frag
    },
    standard: {
        uniforms: Kt([ye.common, ye.envmap, ye.aomap, ye.lightmap, ye.emissivemap, ye.bumpmap, ye.normalmap, ye.displacementmap, ye.roughnessmap, ye.metalnessmap, ye.fog, ye.lights, {
            emissive: {
                value: new vt(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: Qe.meshphysical_vert,
        fragmentShader: Qe.meshphysical_frag
    },
    toon: {
        uniforms: Kt([ye.common, ye.aomap, ye.lightmap, ye.emissivemap, ye.bumpmap, ye.normalmap, ye.displacementmap, ye.gradientmap, ye.fog, ye.lights, {
            emissive: {
                value: new vt(0)
            }
        }]),
        vertexShader: Qe.meshtoon_vert,
        fragmentShader: Qe.meshtoon_frag
    },
    matcap: {
        uniforms: Kt([ye.common, ye.bumpmap, ye.normalmap, ye.displacementmap, ye.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: Qe.meshmatcap_vert,
        fragmentShader: Qe.meshmatcap_frag
    },
    points: {
        uniforms: Kt([ye.points, ye.fog]),
        vertexShader: Qe.points_vert,
        fragmentShader: Qe.points_frag
    },
    dashed: {
        uniforms: Kt([ye.common, ye.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: Qe.linedashed_vert,
        fragmentShader: Qe.linedashed_frag
    },
    depth: {
        uniforms: Kt([ye.common, ye.displacementmap]),
        vertexShader: Qe.depth_vert,
        fragmentShader: Qe.depth_frag
    },
    normal: {
        uniforms: Kt([ye.common, ye.bumpmap, ye.normalmap, ye.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Qe.meshnormal_vert,
        fragmentShader: Qe.meshnormal_frag
    },
    sprite: {
        uniforms: Kt([ye.sprite, ye.fog]),
        vertexShader: Qe.sprite_vert,
        fragmentShader: Qe.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new $e
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: Qe.background_vert,
        fragmentShader: Qe.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            },
            backgroundRotation: {
                value: new $e
            }
        },
        vertexShader: Qe.backgroundCube_vert,
        fragmentShader: Qe.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: Qe.cube_vert,
        fragmentShader: Qe.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: Qe.equirect_vert,
        fragmentShader: Qe.equirect_frag
    },
    distance: {
        uniforms: Kt([ye.common, ye.displacementmap, {
            referencePosition: {
                value: new $
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: Qe.distance_vert,
        fragmentShader: Qe.distance_frag
    },
    shadow: {
        uniforms: Kt([ye.lights, ye.fog, {
            color: {
                value: new vt(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Qe.shadow_vert,
        fragmentShader: Qe.shadow_frag
    }
};
Tn.physical = {
    uniforms: Kt([Tn.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatMapTransform: {
            value: new $e
        },
        clearcoatNormalMap: {
            value: null
        },
        clearcoatNormalMapTransform: {
            value: new $e
        },
        clearcoatNormalScale: {
            value: new Mt(1,1)
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatRoughnessMapTransform: {
            value: new $e
        },
        dispersion: {
            value: 0
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceMapTransform: {
            value: new $e
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        iridescenceThicknessMapTransform: {
            value: new $e
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new vt(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenColorMapTransform: {
            value: new $e
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        sheenRoughnessMapTransform: {
            value: new $e
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionMapTransform: {
            value: new $e
        },
        transmissionSamplerSize: {
            value: new Mt
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        thicknessMapTransform: {
            value: new $e
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new vt(0)
        },
        specularColor: {
            value: new vt(1,1,1)
        },
        specularColorMap: {
            value: null
        },
        specularColorMapTransform: {
            value: new $e
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularIntensityMapTransform: {
            value: new $e
        },
        anisotropyVector: {
            value: new Mt
        },
        anisotropyMap: {
            value: null
        },
        anisotropyMapTransform: {
            value: new $e
        }
    }]),
    vertexShader: Qe.meshphysical_vert,
    fragmentShader: Qe.meshphysical_frag
};
const qr = {
    r: 0,
    b: 0,
    g: 0
}
  , pi = new Xn
  , Cd = new Ct;
function Pd(i, e, t, n, r, a, o) {
    const l = new vt(0);
    let u = a === !0 ? 0 : 1, f, p, m = null, g = 0, S = null;
    function E(U) {
        let C = U.isScene === !0 ? U.background : null;
        return C && C.isTexture && (C = (U.backgroundBlurriness > 0 ? t : e).get(C)),
        C
    }
    function A(U) {
        let C = !1;
        const I = E(U);
        I === null ? d(l, u) : I && I.isColor && (d(I, 1),
        C = !0);
        const O = i.xr.getEnvironmentBlendMode();
        O === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : O === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, o),
        (i.autoClear || C) && (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil))
    }
    function _(U, C) {
        const I = E(C);
        I && (I.isCubeTexture || I.mapping === rs) ? (p === void 0 && (p = new qn(new vr(1,1,1),new Pn({
            name: "BackgroundCubeMaterial",
            uniforms: qi(Tn.backgroundCube.uniforms),
            vertexShader: Tn.backgroundCube.vertexShader,
            fragmentShader: Tn.backgroundCube.fragmentShader,
            side: Qt,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            allowOverride: !1
        })),
        p.geometry.deleteAttribute("normal"),
        p.geometry.deleteAttribute("uv"),
        p.onBeforeRender = function(O, N, Y) {
            this.matrixWorld.copyPosition(Y.matrixWorld)
        }
        ,
        Object.defineProperty(p.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }),
        r.update(p)),
        pi.copy(C.backgroundRotation),
        pi.x *= -1,
        pi.y *= -1,
        pi.z *= -1,
        I.isCubeTexture && I.isRenderTargetTexture === !1 && (pi.y *= -1,
        pi.z *= -1),
        p.material.uniforms.envMap.value = I,
        p.material.uniforms.flipEnvMap.value = I.isCubeTexture && I.isRenderTargetTexture === !1 ? -1 : 1,
        p.material.uniforms.backgroundBlurriness.value = C.backgroundBlurriness,
        p.material.uniforms.backgroundIntensity.value = C.backgroundIntensity,
        p.material.uniforms.backgroundRotation.value.setFromMatrix4(Cd.makeRotationFromEuler(pi)),
        p.material.toneMapped = at.getTransfer(I.colorSpace) !== _t,
        (m !== I || g !== I.version || S !== i.toneMapping) && (p.material.needsUpdate = !0,
        m = I,
        g = I.version,
        S = i.toneMapping),
        p.layers.enableAll(),
        U.unshift(p, p.geometry, p.material, 0, 0, null)) : I && I.isTexture && (f === void 0 && (f = new qn(new as(2,2),new Pn({
            name: "BackgroundMaterial",
            uniforms: qi(Tn.background.uniforms),
            vertexShader: Tn.background.vertexShader,
            fragmentShader: Tn.background.fragmentShader,
            side: ri,
            depthTest: !1,
            depthWrite: !1,
            fog: !1,
            allowOverride: !1
        })),
        f.geometry.deleteAttribute("normal"),
        Object.defineProperty(f.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }),
        r.update(f)),
        f.material.uniforms.t2D.value = I,
        f.material.uniforms.backgroundIntensity.value = C.backgroundIntensity,
        f.material.toneMapped = at.getTransfer(I.colorSpace) !== _t,
        I.matrixAutoUpdate === !0 && I.updateMatrix(),
        f.material.uniforms.uvTransform.value.copy(I.matrix),
        (m !== I || g !== I.version || S !== i.toneMapping) && (f.material.needsUpdate = !0,
        m = I,
        g = I.version,
        S = i.toneMapping),
        f.layers.enableAll(),
        U.unshift(f, f.geometry, f.material, 0, 0, null))
    }
    function d(U, C) {
        U.getRGB(qr, Hl(i)),
        n.buffers.color.setClear(qr.r, qr.g, qr.b, C, o)
    }
    function L() {
        p !== void 0 && (p.geometry.dispose(),
        p.material.dispose(),
        p = void 0),
        f !== void 0 && (f.geometry.dispose(),
        f.material.dispose(),
        f = void 0)
    }
    return {
        getClearColor: function() {
            return l
        },
        setClearColor: function(U, C=1) {
            l.set(U),
            u = C,
            d(l, u)
        },
        getClearAlpha: function() {
            return u
        },
        setClearAlpha: function(U) {
            u = U,
            d(l, u)
        },
        render: A,
        addToRenderList: _,
        dispose: L
    }
}
function Dd(i, e) {
    const t = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , n = {}
      , r = g(null);
    let a = r
      , o = !1;
    function l(v, b, X, G, J) {
        let Q = !1;
        const B = m(G, X, b);
        a !== B && (a = B,
        f(a.object)),
        Q = S(v, G, X, J),
        Q && E(v, G, X, J),
        J !== null && e.update(J, i.ELEMENT_ARRAY_BUFFER),
        (Q || o) && (o = !1,
        C(v, b, X, G),
        J !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(J).buffer))
    }
    function u() {
        return i.createVertexArray()
    }
    function f(v) {
        return i.bindVertexArray(v)
    }
    function p(v) {
        return i.deleteVertexArray(v)
    }
    function m(v, b, X) {
        const G = X.wireframe === !0;
        let J = n[v.id];
        J === void 0 && (J = {},
        n[v.id] = J);
        let Q = J[b.id];
        Q === void 0 && (Q = {},
        J[b.id] = Q);
        let B = Q[G];
        return B === void 0 && (B = g(u()),
        Q[G] = B),
        B
    }
    function g(v) {
        const b = []
          , X = []
          , G = [];
        for (let J = 0; J < t; J++)
            b[J] = 0,
            X[J] = 0,
            G[J] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: b,
            enabledAttributes: X,
            attributeDivisors: G,
            object: v,
            attributes: {},
            index: null
        }
    }
    function S(v, b, X, G) {
        const J = a.attributes
          , Q = b.attributes;
        let B = 0;
        const H = X.getAttributes();
        for (const ee in H)
            if (H[ee].location >= 0) {
                const fe = J[ee];
                let Ee = Q[ee];
                if (Ee === void 0 && (ee === "instanceMatrix" && v.instanceMatrix && (Ee = v.instanceMatrix),
                ee === "instanceColor" && v.instanceColor && (Ee = v.instanceColor)),
                fe === void 0 || fe.attribute !== Ee || Ee && fe.data !== Ee.data)
                    return !0;
                B++
            }
        return a.attributesNum !== B || a.index !== G
    }
    function E(v, b, X, G) {
        const J = {}
          , Q = b.attributes;
        let B = 0;
        const H = X.getAttributes();
        for (const ee in H)
            if (H[ee].location >= 0) {
                let fe = Q[ee];
                fe === void 0 && (ee === "instanceMatrix" && v.instanceMatrix && (fe = v.instanceMatrix),
                ee === "instanceColor" && v.instanceColor && (fe = v.instanceColor));
                const Ee = {};
                Ee.attribute = fe,
                fe && fe.data && (Ee.data = fe.data),
                J[ee] = Ee,
                B++
            }
        a.attributes = J,
        a.attributesNum = B,
        a.index = G
    }
    function A() {
        const v = a.newAttributes;
        for (let b = 0, X = v.length; b < X; b++)
            v[b] = 0
    }
    function _(v) {
        d(v, 0)
    }
    function d(v, b) {
        const X = a.newAttributes
          , G = a.enabledAttributes
          , J = a.attributeDivisors;
        X[v] = 1,
        G[v] === 0 && (i.enableVertexAttribArray(v),
        G[v] = 1),
        J[v] !== b && (i.vertexAttribDivisor(v, b),
        J[v] = b)
    }
    function L() {
        const v = a.newAttributes
          , b = a.enabledAttributes;
        for (let X = 0, G = b.length; X < G; X++)
            b[X] !== v[X] && (i.disableVertexAttribArray(X),
            b[X] = 0)
    }
    function U(v, b, X, G, J, Q, B) {
        B === !0 ? i.vertexAttribIPointer(v, b, X, J, Q) : i.vertexAttribPointer(v, b, X, G, J, Q)
    }
    function C(v, b, X, G) {
        A();
        const J = G.attributes
          , Q = X.getAttributes()
          , B = b.defaultAttributeValues;
        for (const H in Q) {
            const ee = Q[H];
            if (ee.location >= 0) {
                let ue = J[H];
                if (ue === void 0 && (H === "instanceMatrix" && v.instanceMatrix && (ue = v.instanceMatrix),
                H === "instanceColor" && v.instanceColor && (ue = v.instanceColor)),
                ue !== void 0) {
                    const fe = ue.normalized
                      , Ee = ue.itemSize
                      , Ve = e.get(ue);
                    if (Ve === void 0)
                        continue;
                    const Ge = Ve.buffer
                      , ht = Ve.type
                      , ot = Ve.bytesPerElement
                      , ie = ht === i.INT || ht === i.UNSIGNED_INT || ue.gpuType === qa;
                    if (ue.isInterleavedBufferAttribute) {
                        const ae = ue.data
                          , we = ae.stride
                          , Ye = ue.offset;
                        if (ae.isInstancedInterleavedBuffer) {
                            for (let Pe = 0; Pe < ee.locationSize; Pe++)
                                d(ee.location + Pe, ae.meshPerAttribute);
                            v.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = ae.meshPerAttribute * ae.count)
                        } else
                            for (let Pe = 0; Pe < ee.locationSize; Pe++)
                                _(ee.location + Pe);
                        i.bindBuffer(i.ARRAY_BUFFER, Ge);
                        for (let Pe = 0; Pe < ee.locationSize; Pe++)
                            U(ee.location + Pe, Ee / ee.locationSize, ht, fe, we * ot, (Ye + Ee / ee.locationSize * Pe) * ot, ie)
                    } else {
                        if (ue.isInstancedBufferAttribute) {
                            for (let ae = 0; ae < ee.locationSize; ae++)
                                d(ee.location + ae, ue.meshPerAttribute);
                            v.isInstancedMesh !== !0 && G._maxInstanceCount === void 0 && (G._maxInstanceCount = ue.meshPerAttribute * ue.count)
                        } else
                            for (let ae = 0; ae < ee.locationSize; ae++)
                                _(ee.location + ae);
                        i.bindBuffer(i.ARRAY_BUFFER, Ge);
                        for (let ae = 0; ae < ee.locationSize; ae++)
                            U(ee.location + ae, Ee / ee.locationSize, ht, fe, Ee * ot, Ee / ee.locationSize * ae * ot, ie)
                    }
                } else if (B !== void 0) {
                    const fe = B[H];
                    if (fe !== void 0)
                        switch (fe.length) {
                        case 2:
                            i.vertexAttrib2fv(ee.location, fe);
                            break;
                        case 3:
                            i.vertexAttrib3fv(ee.location, fe);
                            break;
                        case 4:
                            i.vertexAttrib4fv(ee.location, fe);
                            break;
                        default:
                            i.vertexAttrib1fv(ee.location, fe)
                        }
                }
            }
        }
        L()
    }
    function I() {
        Y();
        for (const v in n) {
            const b = n[v];
            for (const X in b) {
                const G = b[X];
                for (const J in G)
                    p(G[J].object),
                    delete G[J];
                delete b[X]
            }
            delete n[v]
        }
    }
    function O(v) {
        if (n[v.id] === void 0)
            return;
        const b = n[v.id];
        for (const X in b) {
            const G = b[X];
            for (const J in G)
                p(G[J].object),
                delete G[J];
            delete b[X]
        }
        delete n[v.id]
    }
    function N(v) {
        for (const b in n) {
            const X = n[b];
            if (X[v.id] === void 0)
                continue;
            const G = X[v.id];
            for (const J in G)
                p(G[J].object),
                delete G[J];
            delete X[v.id]
        }
    }
    function Y() {
        T(),
        o = !0,
        a !== r && (a = r,
        f(a.object))
    }
    function T() {
        r.geometry = null,
        r.program = null,
        r.wireframe = !1
    }
    return {
        setup: l,
        reset: Y,
        resetDefaultState: T,
        dispose: I,
        releaseStatesOfGeometry: O,
        releaseStatesOfProgram: N,
        initAttributes: A,
        enableAttribute: _,
        disableUnusedAttributes: L
    }
}
function Ld(i, e, t) {
    let n;
    function r(f) {
        n = f
    }
    function a(f, p) {
        i.drawArrays(n, f, p),
        t.update(p, n, 1)
    }
    function o(f, p, m) {
        m !== 0 && (i.drawArraysInstanced(n, f, p, m),
        t.update(p, n, m))
    }
    function l(f, p, m) {
        if (m === 0)
            return;
        e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, f, 0, p, 0, m);
        let S = 0;
        for (let E = 0; E < m; E++)
            S += p[E];
        t.update(S, n, 1)
    }
    function u(f, p, m, g) {
        if (m === 0)
            return;
        const S = e.get("WEBGL_multi_draw");
        if (S === null)
            for (let E = 0; E < f.length; E++)
                o(f[E], p[E], g[E]);
        else {
            S.multiDrawArraysInstancedWEBGL(n, f, 0, p, 0, g, 0, m);
            let E = 0;
            for (let A = 0; A < m; A++)
                E += p[A] * g[A];
            t.update(E, n, 1)
        }
    }
    this.setMode = r,
    this.render = a,
    this.renderInstances = o,
    this.renderMultiDraw = l,
    this.renderMultiDrawInstances = u
}
function Ud(i, e, t, n) {
    let r;
    function a() {
        if (r !== void 0)
            return r;
        if (e.has("EXT_texture_filter_anisotropic") === !0) {
            const N = e.get("EXT_texture_filter_anisotropic");
            r = i.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else
            r = 0;
        return r
    }
    function o(N) {
        return !(N !== xn && n.convert(N) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))
    }
    function l(N) {
        const Y = N === kn && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
        return !(N !== hn && n.convert(N) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && N !== An && !Y)
    }
    function u(N) {
        if (N === "highp") {
            if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
                return "highp";
            N = "mediump"
        }
        return N === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }
    let f = t.precision !== void 0 ? t.precision : "highp";
    const p = u(f);
    p !== f && (je("WebGLRenderer:", f, "not supported, using", p, "instead."),
    f = p);
    const m = t.logarithmicDepthBuffer === !0
      , g = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control")
      , S = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS)
      , E = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
      , A = i.getParameter(i.MAX_TEXTURE_SIZE)
      , _ = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE)
      , d = i.getParameter(i.MAX_VERTEX_ATTRIBS)
      , L = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS)
      , U = i.getParameter(i.MAX_VARYING_VECTORS)
      , C = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS)
      , I = i.getParameter(i.MAX_SAMPLES)
      , O = i.getParameter(i.SAMPLES);
    return {
        isWebGL2: !0,
        getMaxAnisotropy: a,
        getMaxPrecision: u,
        textureFormatReadable: o,
        textureTypeReadable: l,
        precision: f,
        logarithmicDepthBuffer: m,
        reversedDepthBuffer: g,
        maxTextures: S,
        maxVertexTextures: E,
        maxTextureSize: A,
        maxCubemapSize: _,
        maxAttributes: d,
        maxVertexUniforms: L,
        maxVaryings: U,
        maxFragmentUniforms: C,
        maxSamples: I,
        samples: O
    }
}
function Id(i) {
    const e = this;
    let t = null
      , n = 0
      , r = !1
      , a = !1;
    const o = new gi
      , l = new $e
      , u = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = u,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(m, g) {
        const S = m.length !== 0 || g || n !== 0 || r;
        return r = g,
        n = m.length,
        S
    }
    ,
    this.beginShadows = function() {
        a = !0,
        p(null)
    }
    ,
    this.endShadows = function() {
        a = !1
    }
    ,
    this.setGlobalState = function(m, g) {
        t = p(m, g, 0)
    }
    ,
    this.setState = function(m, g, S) {
        const E = m.clippingPlanes
          , A = m.clipIntersection
          , _ = m.clipShadows
          , d = i.get(m);
        if (!r || E === null || E.length === 0 || a && !_)
            a ? p(null) : f();
        else {
            const L = a ? 0 : n
              , U = L * 4;
            let C = d.clippingState || null;
            u.value = C,
            C = p(E, g, U, S);
            for (let I = 0; I !== U; ++I)
                C[I] = t[I];
            d.clippingState = C,
            this.numIntersection = A ? this.numPlanes : 0,
            this.numPlanes += L
        }
    }
    ;
    function f() {
        u.value !== t && (u.value = t,
        u.needsUpdate = n > 0),
        e.numPlanes = n,
        e.numIntersection = 0
    }
    function p(m, g, S, E) {
        const A = m !== null ? m.length : 0;
        let _ = null;
        if (A !== 0) {
            if (_ = u.value,
            E !== !0 || _ === null) {
                const d = S + A * 4
                  , L = g.matrixWorldInverse;
                l.getNormalMatrix(L),
                (_ === null || _.length < d) && (_ = new Float32Array(d));
                for (let U = 0, C = S; U !== A; ++U,
                C += 4)
                    o.copy(m[U]).applyMatrix4(L, l),
                    o.normal.toArray(_, C),
                    _[C + 3] = o.constant
            }
            u.value = _,
            u.needsUpdate = !0
        }
        return e.numPlanes = A,
        e.numIntersection = 0,
        _
    }
}
function Nd(i) {
    let e = new WeakMap;
    function t(o, l) {
        return l === sa ? o.mapping = Si : l === aa && (o.mapping = ki),
        o
    }
    function n(o) {
        if (o && o.isTexture) {
            const l = o.mapping;
            if (l === sa || l === aa)
                if (e.has(o)) {
                    const u = e.get(o).texture;
                    return t(u, o.mapping)
                } else {
                    const u = o.image;
                    if (u && u.height > 0) {
                        const f = new Xl(u.height);
                        return f.fromEquirectangularTexture(i, o),
                        e.set(o, f),
                        o.addEventListener("dispose", r),
                        t(f.texture, o.mapping)
                    } else
                        return null
                }
        }
        return o
    }
    function r(o) {
        const l = o.target;
        l.removeEventListener("dispose", r);
        const u = e.get(l);
        u !== void 0 && (e.delete(l),
        u.dispose())
    }
    function a() {
        e = new WeakMap
    }
    return {
        get: n,
        dispose: a
    }
}
const ii = 4
  , Yo = [.125, .215, .35, .446, .526, .582]
  , vi = 20
  , Fd = 256
  , ar = new Kl
  , jo = new vt;
let Gs = null
  , Hs = 0
  , ks = 0
  , Ws = !1;
const Od = new $;
class Ko {
    constructor(e) {
        this._renderer = e,
        this._pingPongRenderTarget = null,
        this._lodMax = 0,
        this._cubeSize = 0,
        this._sizeLods = [],
        this._sigmas = [],
        this._lodMeshes = [],
        this._backgroundBox = null,
        this._cubemapMaterial = null,
        this._equirectMaterial = null,
        this._blurMaterial = null,
        this._ggxMaterial = null
    }
    fromScene(e, t=0, n=.1, r=100, a={}) {
        const {size: o=256, position: l=Od} = a;
        Gs = this._renderer.getRenderTarget(),
        Hs = this._renderer.getActiveCubeFace(),
        ks = this._renderer.getActiveMipmapLevel(),
        Ws = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1,
        this._setSize(o);
        const u = this._allocateTargets();
        return u.depthBuffer = !0,
        this._sceneToCubeUV(e, n, r, u, l),
        t > 0 && this._blur(u, 0, 0, t),
        this._applyPMREM(u),
        this._cleanup(u),
        u
    }
    fromEquirectangular(e, t=null) {
        return this._fromTexture(e, t)
    }
    fromCubemap(e, t=null) {
        return this._fromTexture(e, t)
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = Jo(),
        this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = $o(),
        this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose(),
        this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(),
        this._backgroundBox.material.dispose())
    }
    _setSize(e) {
        this._lodMax = Math.floor(Math.log2(e)),
        this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._ggxMaterial !== null && this._ggxMaterial.dispose(),
        this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let e = 0; e < this._lodMeshes.length; e++)
            this._lodMeshes[e].geometry.dispose()
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(Gs, Hs, ks),
        this._renderer.xr.enabled = Ws,
        e.scissorTest = !1,
        zi(e, 0, 0, e.width, e.height)
    }
    _fromTexture(e, t) {
        e.mapping === Si || e.mapping === ki ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
        Gs = this._renderer.getRenderTarget(),
        Hs = this._renderer.getActiveCubeFace(),
        ks = this._renderer.getActiveMipmapLevel(),
        Ws = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1;
        const n = t || this._allocateTargets();
        return this._textureToCubeUV(e, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
    }
    _allocateTargets() {
        const e = 3 * Math.max(this._cubeSize, 112)
          , t = 4 * this._cubeSize
          , n = {
            magFilter: qt,
            minFilter: qt,
            generateMipmaps: !1,
            type: kn,
            format: xn,
            colorSpace: Xi,
            depthBuffer: !1
        }
          , r = Zo(e, t, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
            this._pingPongRenderTarget !== null && this._dispose(),
            this._pingPongRenderTarget = Zo(e, t, n);
            const {_lodMax: a} = this;
            ({lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas} = Bd(a)),
            this._blurMaterial = Vd(a, e, t),
            this._ggxMaterial = zd(a, e, t)
        }
        return r
    }
    _compileMaterial(e) {
        const t = new qn(new Sn,e);
        this._renderer.compile(t, ar)
    }
    _sceneToCubeUV(e, t, n, r, a) {
        const u = new fn(90,1,t,n)
          , f = [1, -1, 1, 1, 1, 1]
          , p = [1, 1, 1, -1, -1, -1]
          , m = this._renderer
          , g = m.autoClear
          , S = m.toneMapping;
        m.getClearColor(jo),
        m.toneMapping = wn,
        m.autoClear = !1,
        m.state.buffers.depth.getReversed() && (m.setRenderTarget(r),
        m.clearDepth(),
        m.setRenderTarget(null)),
        this._backgroundBox === null && (this._backgroundBox = new qn(new vr,new zl({
            name: "PMREM.Background",
            side: Qt,
            depthWrite: !1,
            depthTest: !1
        })));
        const A = this._backgroundBox
          , _ = A.material;
        let d = !1;
        const L = e.background;
        L ? L.isColor && (_.color.copy(L),
        e.background = null,
        d = !0) : (_.color.copy(jo),
        d = !0);
        for (let U = 0; U < 6; U++) {
            const C = U % 3;
            C === 0 ? (u.up.set(0, f[U], 0),
            u.position.set(a.x, a.y, a.z),
            u.lookAt(a.x + p[U], a.y, a.z)) : C === 1 ? (u.up.set(0, 0, f[U]),
            u.position.set(a.x, a.y, a.z),
            u.lookAt(a.x, a.y + p[U], a.z)) : (u.up.set(0, f[U], 0),
            u.position.set(a.x, a.y, a.z),
            u.lookAt(a.x, a.y, a.z + p[U]));
            const I = this._cubeSize;
            zi(r, C * I, U > 2 ? I : 0, I, I),
            m.setRenderTarget(r),
            d && m.render(A, u),
            m.render(e, u)
        }
        m.toneMapping = S,
        m.autoClear = g,
        e.background = L
    }
    _textureToCubeUV(e, t) {
        const n = this._renderer
          , r = e.mapping === Si || e.mapping === ki;
        r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Jo()),
        this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = $o());
        const a = r ? this._cubemapMaterial : this._equirectMaterial
          , o = this._lodMeshes[0];
        o.material = a;
        const l = a.uniforms;
        l.envMap.value = e;
        const u = this._cubeSize;
        zi(t, 0, 0, 3 * u, 2 * u),
        n.setRenderTarget(t),
        n.render(o, ar)
    }
    _applyPMREM(e) {
        const t = this._renderer
          , n = t.autoClear;
        t.autoClear = !1;
        const r = this._lodMeshes.length;
        for (let a = 1; a < r; a++)
            this._applyGGXFilter(e, a - 1, a);
        t.autoClear = n
    }
    _applyGGXFilter(e, t, n) {
        const r = this._renderer
          , a = this._pingPongRenderTarget
          , o = this._ggxMaterial
          , l = this._lodMeshes[n];
        l.material = o;
        const u = o.uniforms
          , f = n / (this._lodMeshes.length - 1)
          , p = t / (this._lodMeshes.length - 1)
          , m = Math.sqrt(f * f - p * p)
          , g = 0 + f * 1.25
          , S = m * g
          , {_lodMax: E} = this
          , A = this._sizeLods[n]
          , _ = 3 * A * (n > E - ii ? n - E + ii : 0)
          , d = 4 * (this._cubeSize - A);
        u.envMap.value = e.texture,
        u.roughness.value = S,
        u.mipInt.value = E - t,
        zi(a, _, d, 3 * A, 2 * A),
        r.setRenderTarget(a),
        r.render(l, ar),
        u.envMap.value = a.texture,
        u.roughness.value = 0,
        u.mipInt.value = E - n,
        zi(e, _, d, 3 * A, 2 * A),
        r.setRenderTarget(e),
        r.render(l, ar)
    }
    _blur(e, t, n, r, a) {
        const o = this._pingPongRenderTarget;
        this._halfBlur(e, o, t, n, r, "latitudinal", a),
        this._halfBlur(o, e, n, n, r, "longitudinal", a)
    }
    _halfBlur(e, t, n, r, a, o, l) {
        const u = this._renderer
          , f = this._blurMaterial;
        o !== "latitudinal" && o !== "longitudinal" && ut("blur direction must be either latitudinal or longitudinal!");
        const p = 3
          , m = this._lodMeshes[r];
        m.material = f;
        const g = f.uniforms
          , S = this._sizeLods[n] - 1
          , E = isFinite(a) ? Math.PI / (2 * S) : 2 * Math.PI / (2 * vi - 1)
          , A = a / E
          , _ = isFinite(a) ? 1 + Math.floor(p * A) : vi;
        _ > vi && je(`sigmaRadians, ${a}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${vi}`);
        const d = [];
        let L = 0;
        for (let N = 0; N < vi; ++N) {
            const Y = N / A
              , T = Math.exp(-Y * Y / 2);
            d.push(T),
            N === 0 ? L += T : N < _ && (L += 2 * T)
        }
        for (let N = 0; N < d.length; N++)
            d[N] = d[N] / L;
        g.envMap.value = e.texture,
        g.samples.value = _,
        g.weights.value = d,
        g.latitudinal.value = o === "latitudinal",
        l && (g.poleAxis.value = l);
        const {_lodMax: U} = this;
        g.dTheta.value = E,
        g.mipInt.value = U - n;
        const C = this._sizeLods[r]
          , I = 3 * C * (r > U - ii ? r - U + ii : 0)
          , O = 4 * (this._cubeSize - C);
        zi(t, I, O, 3 * C, 2 * C),
        u.setRenderTarget(t),
        u.render(m, ar)
    }
}
function Bd(i) {
    const e = []
      , t = []
      , n = [];
    let r = i;
    const a = i - ii + 1 + Yo.length;
    for (let o = 0; o < a; o++) {
        const l = Math.pow(2, r);
        e.push(l);
        let u = 1 / l;
        o > i - ii ? u = Yo[o - i + ii - 1] : o === 0 && (u = 0),
        t.push(u);
        const f = 1 / (l - 2)
          , p = -f
          , m = 1 + f
          , g = [p, p, m, p, m, m, p, p, m, m, p, m]
          , S = 6
          , E = 6
          , A = 3
          , _ = 2
          , d = 1
          , L = new Float32Array(A * E * S)
          , U = new Float32Array(_ * E * S)
          , C = new Float32Array(d * E * S);
        for (let O = 0; O < S; O++) {
            const N = O % 3 * 2 / 3 - 1
              , Y = O > 2 ? 0 : -1
              , T = [N, Y, 0, N + 2 / 3, Y, 0, N + 2 / 3, Y + 1, 0, N, Y, 0, N + 2 / 3, Y + 1, 0, N, Y + 1, 0];
            L.set(T, A * E * O),
            U.set(g, _ * E * O);
            const v = [O, O, O, O, O, O];
            C.set(v, d * E * O)
        }
        const I = new Sn;
        I.setAttribute("position", new Mn(L,A)),
        I.setAttribute("uv", new Mn(U,_)),
        I.setAttribute("faceIndex", new Mn(C,d)),
        n.push(new qn(I,null)),
        r > ii && r--
    }
    return {
        lodMeshes: n,
        sizeLods: e,
        sigmas: t
    }
}
function Zo(i, e, t) {
    const n = new Rn(i,e,t);
    return n.texture.mapping = rs,
    n.texture.name = "PMREM.cubeUv",
    n.scissorTest = !0,
    n
}
function zi(i, e, t, n, r) {
    i.viewport.set(e, t, n, r),
    i.scissor.set(e, t, n, r)
}
function zd(i, e, t) {
    return new Pn({
        name: "PMREMGGXConvolution",
        defines: {
            GGX_SAMPLES: Fd,
            CUBEUV_TEXEL_WIDTH: 1 / e,
            CUBEUV_TEXEL_HEIGHT: 1 / t,
            CUBEUV_MAX_MIP: `${i}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            roughness: {
                value: 0
            },
            mipInt: {
                value: 0
            }
        },
        vertexShader: os(),
        fragmentShader: `

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,
        blending: Vn,
        depthTest: !1,
        depthWrite: !1
    })
}
function Vd(i, e, t) {
    const n = new Float32Array(vi)
      , r = new $(0,1,0);
    return new Pn({
        name: "SphericalGaussianBlur",
        defines: {
            n: vi,
            CUBEUV_TEXEL_WIDTH: 1 / e,
            CUBEUV_TEXEL_HEIGHT: 1 / t,
            CUBEUV_MAX_MIP: `${i}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: n
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: r
            }
        },
        vertexShader: os(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: Vn,
        depthTest: !1,
        depthWrite: !1
    })
}
function $o() {
    return new Pn({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: os(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: Vn,
        depthTest: !1,
        depthWrite: !1
    })
}
function Jo() {
    return new Pn({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: os(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: Vn,
        depthTest: !1,
        depthWrite: !1
    })
}
function os() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
function Gd(i) {
    let e = new WeakMap
      , t = null;
    function n(l) {
        if (l && l.isTexture) {
            const u = l.mapping
              , f = u === sa || u === aa
              , p = u === Si || u === ki;
            if (f || p) {
                let m = e.get(l);
                const g = m !== void 0 ? m.texture.pmremVersion : 0;
                if (l.isRenderTargetTexture && l.pmremVersion !== g)
                    return t === null && (t = new Ko(i)),
                    m = f ? t.fromEquirectangular(l, m) : t.fromCubemap(l, m),
                    m.texture.pmremVersion = l.pmremVersion,
                    e.set(l, m),
                    m.texture;
                if (m !== void 0)
                    return m.texture;
                {
                    const S = l.image;
                    return f && S && S.height > 0 || p && S && r(S) ? (t === null && (t = new Ko(i)),
                    m = f ? t.fromEquirectangular(l) : t.fromCubemap(l),
                    m.texture.pmremVersion = l.pmremVersion,
                    e.set(l, m),
                    l.addEventListener("dispose", a),
                    m.texture) : null
                }
            }
        }
        return l
    }
    function r(l) {
        let u = 0;
        const f = 6;
        for (let p = 0; p < f; p++)
            l[p] !== void 0 && u++;
        return u === f
    }
    function a(l) {
        const u = l.target;
        u.removeEventListener("dispose", a);
        const f = e.get(u);
        f !== void 0 && (e.delete(u),
        f.dispose())
    }
    function o() {
        e = new WeakMap,
        t !== null && (t.dispose(),
        t = null)
    }
    return {
        get: n,
        dispose: o
    }
}
function Hd(i) {
    const e = {};
    function t(n) {
        if (e[n] !== void 0)
            return e[n];
        const r = i.getExtension(n);
        return e[n] = r,
        r
    }
    return {
        has: function(n) {
            return t(n) !== null
        },
        init: function() {
            t("EXT_color_buffer_float"),
            t("WEBGL_clip_cull_distance"),
            t("OES_texture_float_linear"),
            t("EXT_color_buffer_half_float"),
            t("WEBGL_multisampled_render_to_texture"),
            t("WEBGL_render_shared_exponent")
        },
        get: function(n) {
            const r = t(n);
            return r === null && hr("WebGLRenderer: " + n + " extension not supported."),
            r
        }
    }
}
function kd(i, e, t, n) {
    const r = {}
      , a = new WeakMap;
    function o(m) {
        const g = m.target;
        g.index !== null && e.remove(g.index);
        for (const E in g.attributes)
            e.remove(g.attributes[E]);
        g.removeEventListener("dispose", o),
        delete r[g.id];
        const S = a.get(g);
        S && (e.remove(S),
        a.delete(g)),
        n.releaseStatesOfGeometry(g),
        g.isInstancedBufferGeometry === !0 && delete g._maxInstanceCount,
        t.memory.geometries--
    }
    function l(m, g) {
        return r[g.id] === !0 || (g.addEventListener("dispose", o),
        r[g.id] = !0,
        t.memory.geometries++),
        g
    }
    function u(m) {
        const g = m.attributes;
        for (const S in g)
            e.update(g[S], i.ARRAY_BUFFER)
    }
    function f(m) {
        const g = []
          , S = m.index
          , E = m.attributes.position;
        let A = 0;
        if (S !== null) {
            const L = S.array;
            A = S.version;
            for (let U = 0, C = L.length; U < C; U += 3) {
                const I = L[U + 0]
                  , O = L[U + 1]
                  , N = L[U + 2];
                g.push(I, O, O, N, N, I)
            }
        } else if (E !== void 0) {
            const L = E.array;
            A = E.version;
            for (let U = 0, C = L.length / 3 - 1; U < C; U += 3) {
                const I = U + 0
                  , O = U + 1
                  , N = U + 2;
                g.push(I, O, O, N, N, I)
            }
        } else
            return;
        const _ = new (Il(g) ? Gl : Vl)(g,1);
        _.version = A;
        const d = a.get(m);
        d && e.remove(d),
        a.set(m, _)
    }
    function p(m) {
        const g = a.get(m);
        if (g) {
            const S = m.index;
            S !== null && g.version < S.version && f(m)
        } else
            f(m);
        return a.get(m)
    }
    return {
        get: l,
        update: u,
        getWireframeAttribute: p
    }
}
function Wd(i, e, t) {
    let n;
    function r(g) {
        n = g
    }
    let a, o;
    function l(g) {
        a = g.type,
        o = g.bytesPerElement
    }
    function u(g, S) {
        i.drawElements(n, S, a, g * o),
        t.update(S, n, 1)
    }
    function f(g, S, E) {
        E !== 0 && (i.drawElementsInstanced(n, S, a, g * o, E),
        t.update(S, n, E))
    }
    function p(g, S, E) {
        if (E === 0)
            return;
        e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, S, 0, a, g, 0, E);
        let _ = 0;
        for (let d = 0; d < E; d++)
            _ += S[d];
        t.update(_, n, 1)
    }
    function m(g, S, E, A) {
        if (E === 0)
            return;
        const _ = e.get("WEBGL_multi_draw");
        if (_ === null)
            for (let d = 0; d < g.length; d++)
                f(g[d] / o, S[d], A[d]);
        else {
            _.multiDrawElementsInstancedWEBGL(n, S, 0, a, g, 0, A, 0, E);
            let d = 0;
            for (let L = 0; L < E; L++)
                d += S[L] * A[L];
            t.update(d, n, 1)
        }
    }
    this.setMode = r,
    this.setIndex = l,
    this.render = u,
    this.renderInstances = f,
    this.renderMultiDraw = p,
    this.renderMultiDrawInstances = m
}
function Xd(i) {
    const e = {
        geometries: 0,
        textures: 0
    }
      , t = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function n(a, o, l) {
        switch (t.calls++,
        o) {
        case i.TRIANGLES:
            t.triangles += l * (a / 3);
            break;
        case i.LINES:
            t.lines += l * (a / 2);
            break;
        case i.LINE_STRIP:
            t.lines += l * (a - 1);
            break;
        case i.LINE_LOOP:
            t.lines += l * a;
            break;
        case i.POINTS:
            t.points += l * a;
            break;
        default:
            ut("WebGLInfo: Unknown draw mode:", o);
            break
        }
    }
    function r() {
        t.calls = 0,
        t.triangles = 0,
        t.points = 0,
        t.lines = 0
    }
    return {
        memory: e,
        render: t,
        programs: null,
        autoReset: !0,
        reset: r,
        update: n
    }
}
function qd(i, e, t) {
    const n = new WeakMap
      , r = new Rt;
    function a(o, l, u) {
        const f = o.morphTargetInfluences
          , p = l.morphAttributes.position || l.morphAttributes.normal || l.morphAttributes.color
          , m = p !== void 0 ? p.length : 0;
        let g = n.get(l);
        if (g === void 0 || g.count !== m) {
            let v = function() {
                Y.dispose(),
                n.delete(l),
                l.removeEventListener("dispose", v)
            };
            var S = v;
            g !== void 0 && g.texture.dispose();
            const E = l.morphAttributes.position !== void 0
              , A = l.morphAttributes.normal !== void 0
              , _ = l.morphAttributes.color !== void 0
              , d = l.morphAttributes.position || []
              , L = l.morphAttributes.normal || []
              , U = l.morphAttributes.color || [];
            let C = 0;
            E === !0 && (C = 1),
            A === !0 && (C = 2),
            _ === !0 && (C = 3);
            let I = l.attributes.position.count * C
              , O = 1;
            I > e.maxTextureSize && (O = Math.ceil(I / e.maxTextureSize),
            I = e.maxTextureSize);
            const N = new Float32Array(I * O * 4 * m)
              , Y = new Nl(N,I,O,m);
            Y.type = An,
            Y.needsUpdate = !0;
            const T = C * 4;
            for (let b = 0; b < m; b++) {
                const X = d[b]
                  , G = L[b]
                  , J = U[b]
                  , Q = I * O * 4 * b;
                for (let B = 0; B < X.count; B++) {
                    const H = B * T;
                    E === !0 && (r.fromBufferAttribute(X, B),
                    N[Q + H + 0] = r.x,
                    N[Q + H + 1] = r.y,
                    N[Q + H + 2] = r.z,
                    N[Q + H + 3] = 0),
                    A === !0 && (r.fromBufferAttribute(G, B),
                    N[Q + H + 4] = r.x,
                    N[Q + H + 5] = r.y,
                    N[Q + H + 6] = r.z,
                    N[Q + H + 7] = 0),
                    _ === !0 && (r.fromBufferAttribute(J, B),
                    N[Q + H + 8] = r.x,
                    N[Q + H + 9] = r.y,
                    N[Q + H + 10] = r.z,
                    N[Q + H + 11] = J.itemSize === 4 ? r.w : 1)
                }
            }
            g = {
                count: m,
                texture: Y,
                size: new Mt(I,O)
            },
            n.set(l, g),
            l.addEventListener("dispose", v)
        }
        if (o.isInstancedMesh === !0 && o.morphTexture !== null)
            u.getUniforms().setValue(i, "morphTexture", o.morphTexture, t);
        else {
            let E = 0;
            for (let _ = 0; _ < f.length; _++)
                E += f[_];
            const A = l.morphTargetsRelative ? 1 : 1 - E;
            u.getUniforms().setValue(i, "morphTargetBaseInfluence", A),
            u.getUniforms().setValue(i, "morphTargetInfluences", f)
        }
        u.getUniforms().setValue(i, "morphTargetsTexture", g.texture, t),
        u.getUniforms().setValue(i, "morphTargetsTextureSize", g.size)
    }
    return {
        update: a
    }
}
function Yd(i, e, t, n) {
    let r = new WeakMap;
    function a(u) {
        const f = n.render.frame
          , p = u.geometry
          , m = e.get(u, p);
        if (r.get(m) !== f && (e.update(m),
        r.set(m, f)),
        u.isInstancedMesh && (u.hasEventListener("dispose", l) === !1 && u.addEventListener("dispose", l),
        r.get(u) !== f && (t.update(u.instanceMatrix, i.ARRAY_BUFFER),
        u.instanceColor !== null && t.update(u.instanceColor, i.ARRAY_BUFFER),
        r.set(u, f))),
        u.isSkinnedMesh) {
            const g = u.skeleton;
            r.get(g) !== f && (g.update(),
            r.set(g, f))
        }
        return m
    }
    function o() {
        r = new WeakMap
    }
    function l(u) {
        const f = u.target;
        f.removeEventListener("dispose", l),
        t.remove(f.instanceMatrix),
        f.instanceColor !== null && t.remove(f.instanceColor)
    }
    return {
        update: a,
        dispose: o
    }
}
const jd = {
    [xl]: "LINEAR_TONE_MAPPING",
    [Ml]: "REINHARD_TONE_MAPPING",
    [Sl]: "CINEON_TONE_MAPPING",
    [yl]: "ACES_FILMIC_TONE_MAPPING",
    [Tl]: "AGX_TONE_MAPPING",
    [Al]: "NEUTRAL_TONE_MAPPING",
    [El]: "CUSTOM_TONE_MAPPING"
};
function Kd(i, e, t, n, r) {
    const a = new Rn(e,t,{
        type: i,
        depthBuffer: n,
        stencilBuffer: r
    })
      , o = new Rn(e,t,{
        type: kn,
        depthBuffer: !1,
        stencilBuffer: !1
    })
      , l = new Sn;
    l.setAttribute("position", new Hn([-1, 3, 0, -1, -1, 0, 3, -1, 0],3)),
    l.setAttribute("uv", new Hn([0, 2, 0, 0, 2, 0],2));
    const u = new ku({
        uniforms: {
            tDiffuse: {
                value: null
            }
        },
        vertexShader: `
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,
        fragmentShader: `
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,
        depthTest: !1,
        depthWrite: !1
    })
      , f = new qn(l,u)
      , p = new Kl(-1,1,1,-1,0,1);
    let m = null, g = null, S = !1, E, A = null, _ = [], d = !1;
    this.setSize = function(L, U) {
        a.setSize(L, U),
        o.setSize(L, U);
        for (let C = 0; C < _.length; C++) {
            const I = _[C];
            I.setSize && I.setSize(L, U)
        }
    }
    ,
    this.setEffects = function(L) {
        _ = L,
        d = _.length > 0 && _[0].isRenderPass === !0;
        const U = a.width
          , C = a.height;
        for (let I = 0; I < _.length; I++) {
            const O = _[I];
            O.setSize && O.setSize(U, C)
        }
    }
    ,
    this.begin = function(L, U) {
        if (S || L.toneMapping === wn && _.length === 0)
            return !1;
        if (A = U,
        U !== null) {
            const C = U.width
              , I = U.height;
            (a.width !== C || a.height !== I) && this.setSize(C, I)
        }
        return d === !1 && L.setRenderTarget(a),
        E = L.toneMapping,
        L.toneMapping = wn,
        !0
    }
    ,
    this.hasRenderPass = function() {
        return d
    }
    ,
    this.end = function(L, U) {
        L.toneMapping = E,
        S = !0;
        let C = a
          , I = o;
        for (let O = 0; O < _.length; O++) {
            const N = _[O];
            if (N.enabled !== !1 && (N.render(L, I, C, U),
            N.needsSwap !== !1)) {
                const Y = C;
                C = I,
                I = Y
            }
        }
        if (m !== L.outputColorSpace || g !== L.toneMapping) {
            m = L.outputColorSpace,
            g = L.toneMapping,
            u.defines = {},
            at.getTransfer(m) === _t && (u.defines.SRGB_TRANSFER = "");
            const O = jd[g];
            O && (u.defines[O] = ""),
            u.needsUpdate = !0
        }
        u.uniforms.tDiffuse.value = C.texture,
        L.setRenderTarget(A),
        L.render(f, p),
        A = null,
        S = !1
    }
    ,
    this.isCompositing = function() {
        return S
    }
    ,
    this.dispose = function() {
        a.dispose(),
        o.dispose(),
        l.dispose(),
        u.dispose()
    }
}
const $l = new Zt
  , ka = new dr(1,1)
  , Jl = new Nl
  , Ql = new vu
  , ec = new Wl
  , Qo = []
  , el = []
  , tl = new Float32Array(16)
  , nl = new Float32Array(9)
  , il = new Float32Array(4);
function ji(i, e, t) {
    const n = i[0];
    if (n <= 0 || n > 0)
        return i;
    const r = e * t;
    let a = Qo[r];
    if (a === void 0 && (a = new Float32Array(r),
    Qo[r] = a),
    e !== 0) {
        n.toArray(a, 0);
        for (let o = 1, l = 0; o !== e; ++o)
            l += t,
            i[o].toArray(a, l)
    }
    return a
}
function Ut(i, e) {
    if (i.length !== e.length)
        return !1;
    for (let t = 0, n = i.length; t < n; t++)
        if (i[t] !== e[t])
            return !1;
    return !0
}
function It(i, e) {
    for (let t = 0, n = e.length; t < n; t++)
        i[t] = e[t]
}
function ls(i, e) {
    let t = el[e];
    t === void 0 && (t = new Int32Array(e),
    el[e] = t);
    for (let n = 0; n !== e; ++n)
        t[n] = i.allocateTextureUnit();
    return t
}
function Zd(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1f(this.addr, e),
    t[0] = e)
}
function $d(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (Ut(t, e))
            return;
        i.uniform2fv(this.addr, e),
        It(t, e)
    }
}
function Jd(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else if (e.r !== void 0)
        (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b),
        t[0] = e.r,
        t[1] = e.g,
        t[2] = e.b);
    else {
        if (Ut(t, e))
            return;
        i.uniform3fv(this.addr, e),
        It(t, e)
    }
}
function Qd(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (Ut(t, e))
            return;
        i.uniform4fv(this.addr, e),
        It(t, e)
    }
}
function ep(i, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (Ut(t, e))
            return;
        i.uniformMatrix2fv(this.addr, !1, e),
        It(t, e)
    } else {
        if (Ut(t, n))
            return;
        il.set(n),
        i.uniformMatrix2fv(this.addr, !1, il),
        It(t, n)
    }
}
function tp(i, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (Ut(t, e))
            return;
        i.uniformMatrix3fv(this.addr, !1, e),
        It(t, e)
    } else {
        if (Ut(t, n))
            return;
        nl.set(n),
        i.uniformMatrix3fv(this.addr, !1, nl),
        It(t, n)
    }
}
function np(i, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (Ut(t, e))
            return;
        i.uniformMatrix4fv(this.addr, !1, e),
        It(t, e)
    } else {
        if (Ut(t, n))
            return;
        tl.set(n),
        i.uniformMatrix4fv(this.addr, !1, tl),
        It(t, n)
    }
}
function ip(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1i(this.addr, e),
    t[0] = e)
}
function rp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (Ut(t, e))
            return;
        i.uniform2iv(this.addr, e),
        It(t, e)
    }
}
function sp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else {
        if (Ut(t, e))
            return;
        i.uniform3iv(this.addr, e),
        It(t, e)
    }
}
function ap(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (Ut(t, e))
            return;
        i.uniform4iv(this.addr, e),
        It(t, e)
    }
}
function op(i, e) {
    const t = this.cache;
    t[0] !== e && (i.uniform1ui(this.addr, e),
    t[0] = e)
}
function lp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (Ut(t, e))
            return;
        i.uniform2uiv(this.addr, e),
        It(t, e)
    }
}
function cp(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else {
        if (Ut(t, e))
            return;
        i.uniform3uiv(this.addr, e),
        It(t, e)
    }
}
function up(i, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (Ut(t, e))
            return;
        i.uniform4uiv(this.addr, e),
        It(t, e)
    }
}
function fp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r);
    let a;
    this.type === i.SAMPLER_2D_SHADOW ? (ka.compareFunction = t.isReversedDepthBuffer() ? Qa : Ja,
    a = ka) : a = $l,
    t.setTexture2D(e || a, r)
}
function hp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r),
    t.setTexture3D(e || Ql, r)
}
function dp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r),
    t.setTextureCube(e || ec, r)
}
function pp(i, e, t) {
    const n = this.cache
      , r = t.allocateTextureUnit();
    n[0] !== r && (i.uniform1i(this.addr, r),
    n[0] = r),
    t.setTexture2DArray(e || Jl, r)
}
function mp(i) {
    switch (i) {
    case 5126:
        return Zd;
    case 35664:
        return $d;
    case 35665:
        return Jd;
    case 35666:
        return Qd;
    case 35674:
        return ep;
    case 35675:
        return tp;
    case 35676:
        return np;
    case 5124:
    case 35670:
        return ip;
    case 35667:
    case 35671:
        return rp;
    case 35668:
    case 35672:
        return sp;
    case 35669:
    case 35673:
        return ap;
    case 5125:
        return op;
    case 36294:
        return lp;
    case 36295:
        return cp;
    case 36296:
        return up;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return fp;
    case 35679:
    case 36299:
    case 36307:
        return hp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return dp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return pp
    }
}
function gp(i, e) {
    i.uniform1fv(this.addr, e)
}
function _p(i, e) {
    const t = ji(e, this.size, 2);
    i.uniform2fv(this.addr, t)
}
function vp(i, e) {
    const t = ji(e, this.size, 3);
    i.uniform3fv(this.addr, t)
}
function xp(i, e) {
    const t = ji(e, this.size, 4);
    i.uniform4fv(this.addr, t)
}
function Mp(i, e) {
    const t = ji(e, this.size, 4);
    i.uniformMatrix2fv(this.addr, !1, t)
}
function Sp(i, e) {
    const t = ji(e, this.size, 9);
    i.uniformMatrix3fv(this.addr, !1, t)
}
function yp(i, e) {
    const t = ji(e, this.size, 16);
    i.uniformMatrix4fv(this.addr, !1, t)
}
function Ep(i, e) {
    i.uniform1iv(this.addr, e)
}
function Tp(i, e) {
    i.uniform2iv(this.addr, e)
}
function Ap(i, e) {
    i.uniform3iv(this.addr, e)
}
function bp(i, e) {
    i.uniform4iv(this.addr, e)
}
function wp(i, e) {
    i.uniform1uiv(this.addr, e)
}
function Rp(i, e) {
    i.uniform2uiv(this.addr, e)
}
function Cp(i, e) {
    i.uniform3uiv(this.addr, e)
}
function Pp(i, e) {
    i.uniform4uiv(this.addr, e)
}
function Dp(i, e, t) {
    const n = this.cache
      , r = e.length
      , a = ls(t, r);
    Ut(n, a) || (i.uniform1iv(this.addr, a),
    It(n, a));
    let o;
    this.type === i.SAMPLER_2D_SHADOW ? o = ka : o = $l;
    for (let l = 0; l !== r; ++l)
        t.setTexture2D(e[l] || o, a[l])
}
function Lp(i, e, t) {
    const n = this.cache
      , r = e.length
      , a = ls(t, r);
    Ut(n, a) || (i.uniform1iv(this.addr, a),
    It(n, a));
    for (let o = 0; o !== r; ++o)
        t.setTexture3D(e[o] || Ql, a[o])
}
function Up(i, e, t) {
    const n = this.cache
      , r = e.length
      , a = ls(t, r);
    Ut(n, a) || (i.uniform1iv(this.addr, a),
    It(n, a));
    for (let o = 0; o !== r; ++o)
        t.setTextureCube(e[o] || ec, a[o])
}
function Ip(i, e, t) {
    const n = this.cache
      , r = e.length
      , a = ls(t, r);
    Ut(n, a) || (i.uniform1iv(this.addr, a),
    It(n, a));
    for (let o = 0; o !== r; ++o)
        t.setTexture2DArray(e[o] || Jl, a[o])
}
function Np(i) {
    switch (i) {
    case 5126:
        return gp;
    case 35664:
        return _p;
    case 35665:
        return vp;
    case 35666:
        return xp;
    case 35674:
        return Mp;
    case 35675:
        return Sp;
    case 35676:
        return yp;
    case 5124:
    case 35670:
        return Ep;
    case 35667:
    case 35671:
        return Tp;
    case 35668:
    case 35672:
        return Ap;
    case 35669:
    case 35673:
        return bp;
    case 5125:
        return wp;
    case 36294:
        return Rp;
    case 36295:
        return Cp;
    case 36296:
        return Pp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return Dp;
    case 35679:
    case 36299:
    case 36307:
        return Lp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return Up;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return Ip
    }
}
class Fp {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.setValue = mp(t.type)
    }
}
class Op {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.size = t.size,
        this.setValue = Np(t.type)
    }
}
class Bp {
    constructor(e) {
        this.id = e,
        this.seq = [],
        this.map = {}
    }
    setValue(e, t, n) {
        const r = this.seq;
        for (let a = 0, o = r.length; a !== o; ++a) {
            const l = r[a];
            l.setValue(e, t[l.id], n)
        }
    }
}
const Xs = /(\w+)(\])?(\[|\.)?/g;
function rl(i, e) {
    i.seq.push(e),
    i.map[e.id] = e
}
function zp(i, e, t) {
    const n = i.name
      , r = n.length;
    for (Xs.lastIndex = 0; ; ) {
        const a = Xs.exec(n)
          , o = Xs.lastIndex;
        let l = a[1];
        const u = a[2] === "]"
          , f = a[3];
        if (u && (l = l | 0),
        f === void 0 || f === "[" && o + 2 === r) {
            rl(t, f === void 0 ? new Fp(l,i,e) : new Op(l,i,e));
            break
        } else {
            let m = t.map[l];
            m === void 0 && (m = new Bp(l),
            rl(t, m)),
            t = m
        }
    }
}
class Qr {
    constructor(e, t) {
        this.seq = [],
        this.map = {};
        const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
        for (let o = 0; o < n; ++o) {
            const l = e.getActiveUniform(t, o)
              , u = e.getUniformLocation(t, l.name);
            zp(l, u, this)
        }
        const r = []
          , a = [];
        for (const o of this.seq)
            o.type === e.SAMPLER_2D_SHADOW || o.type === e.SAMPLER_CUBE_SHADOW || o.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(o) : a.push(o);
        r.length > 0 && (this.seq = r.concat(a))
    }
    setValue(e, t, n, r) {
        const a = this.map[t];
        a !== void 0 && a.setValue(e, n, r)
    }
    setOptional(e, t, n) {
        const r = t[n];
        r !== void 0 && this.setValue(e, n, r)
    }
    static upload(e, t, n, r) {
        for (let a = 0, o = t.length; a !== o; ++a) {
            const l = t[a]
              , u = n[l.id];
            u.needsUpdate !== !1 && l.setValue(e, u.value, r)
        }
    }
    static seqWithValue(e, t) {
        const n = [];
        for (let r = 0, a = e.length; r !== a; ++r) {
            const o = e[r];
            o.id in t && n.push(o)
        }
        return n
    }
}
function sl(i, e, t) {
    const n = i.createShader(e);
    return i.shaderSource(n, t),
    i.compileShader(n),
    n
}
const Vp = 37297;
let Gp = 0;
function Hp(i, e) {
    const t = i.split(`
`)
      , n = []
      , r = Math.max(e - 6, 0)
      , a = Math.min(e + 6, t.length);
    for (let o = r; o < a; o++) {
        const l = o + 1;
        n.push(`${l === e ? ">" : " "} ${l}: ${t[o]}`)
    }
    return n.join(`
`)
}
const al = new $e;
function kp(i) {
    at._getMatrix(al, at.workingColorSpace, i);
    const e = `mat3( ${al.elements.map(t => t.toFixed(4))} )`;
    switch (at.getTransfer(i)) {
    case es:
        return [e, "LinearTransferOETF"];
    case _t:
        return [e, "sRGBTransferOETF"];
    default:
        return je("WebGLProgram: Unsupported color space: ", i),
        [e, "LinearTransferOETF"]
    }
}
function ol(i, e, t) {
    const n = i.getShaderParameter(e, i.COMPILE_STATUS)
      , a = (i.getShaderInfoLog(e) || "").trim();
    if (n && a === "")
        return "";
    const o = /ERROR: 0:(\d+)/.exec(a);
    if (o) {
        const l = parseInt(o[1]);
        return t.toUpperCase() + `

` + a + `

` + Hp(i.getShaderSource(e), l)
    } else
        return a
}
function Wp(i, e) {
    const t = kp(e);
    return [`vec4 ${i}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`)
}
const Xp = {
    [xl]: "Linear",
    [Ml]: "Reinhard",
    [Sl]: "Cineon",
    [yl]: "ACESFilmic",
    [Tl]: "AgX",
    [Al]: "Neutral",
    [El]: "Custom"
};
function qp(i, e) {
    const t = Xp[e];
    return t === void 0 ? (je("WebGLProgram: Unsupported toneMapping:", e),
    "vec3 " + i + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
}
const Yr = new $;
function Yp() {
    at.getLuminanceCoefficients(Yr);
    const i = Yr.x.toFixed(4)
      , e = Yr.y.toFixed(4)
      , t = Yr.z.toFixed(4);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`)
}
function jp(i) {
    return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(cr).join(`
`)
}
function Kp(i) {
    const e = [];
    for (const t in i) {
        const n = i[t];
        n !== !1 && e.push("#define " + t + " " + n)
    }
    return e.join(`
`)
}
function Zp(i, e) {
    const t = {}
      , n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
    for (let r = 0; r < n; r++) {
        const a = i.getActiveAttrib(e, r)
          , o = a.name;
        let l = 1;
        a.type === i.FLOAT_MAT2 && (l = 2),
        a.type === i.FLOAT_MAT3 && (l = 3),
        a.type === i.FLOAT_MAT4 && (l = 4),
        t[o] = {
            type: a.type,
            location: i.getAttribLocation(e, o),
            locationSize: l
        }
    }
    return t
}
function cr(i) {
    return i !== ""
}
function ll(i, e) {
    const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}
function cl(i, e) {
    return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const $p = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Wa(i) {
    return i.replace($p, Qp)
}
const Jp = new Map;
function Qp(i, e) {
    let t = Qe[e];
    if (t === void 0) {
        const n = Jp.get(e);
        if (n !== void 0)
            t = Qe[n],
            je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
        else
            throw new Error("Can not resolve #include <" + e + ">")
    }
    return Wa(t)
}
const em = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function ul(i) {
    return i.replace(em, tm)
}
function tm(i, e, t, n) {
    let r = "";
    for (let a = parseInt(e); a < parseInt(t); a++)
        r += n.replace(/\[\s*i\s*\]/g, "[ " + a + " ]").replace(/UNROLLED_LOOP_INDEX/g, a);
    return r
}
function fl(i) {
    let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
    return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`),
    e
}
const nm = {
    [jr]: "SHADOWMAP_TYPE_PCF",
    [lr]: "SHADOWMAP_TYPE_VSM"
};
function im(i) {
    return nm[i.shadowMapType] || "SHADOWMAP_TYPE_BASIC"
}
const rm = {
    [Si]: "ENVMAP_TYPE_CUBE",
    [ki]: "ENVMAP_TYPE_CUBE",
    [rs]: "ENVMAP_TYPE_CUBE_UV"
};
function sm(i) {
    return i.envMap === !1 ? "ENVMAP_TYPE_CUBE" : rm[i.envMapMode] || "ENVMAP_TYPE_CUBE"
}
const am = {
    [ki]: "ENVMAP_MODE_REFRACTION"
};
function om(i) {
    return i.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : am[i.envMapMode] || "ENVMAP_MODE_REFLECTION"
}
const lm = {
    [vl]: "ENVMAP_BLENDING_MULTIPLY",
    [Jc]: "ENVMAP_BLENDING_MIX",
    [Qc]: "ENVMAP_BLENDING_ADD"
};
function cm(i) {
    return i.envMap === !1 ? "ENVMAP_BLENDING_NONE" : lm[i.combine] || "ENVMAP_BLENDING_NONE"
}
function um(i) {
    const e = i.envMapCubeUVHeight;
    if (e === null)
        return null;
    const t = Math.log2(e) - 2
      , n = 1 / e;
    return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
        texelHeight: n,
        maxMip: t
    }
}
function fm(i, e, t, n) {
    const r = i.getContext()
      , a = t.defines;
    let o = t.vertexShader
      , l = t.fragmentShader;
    const u = im(t)
      , f = sm(t)
      , p = om(t)
      , m = cm(t)
      , g = um(t)
      , S = jp(t)
      , E = Kp(a)
      , A = r.createProgram();
    let _, d, L = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (_ = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, E].filter(cr).join(`
`),
    _.length > 0 && (_ += `
`),
    d = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, E].filter(cr).join(`
`),
    d.length > 0 && (d += `
`)) : (_ = [fl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, E, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + p : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + u : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(cr).join(`
`),
    d = [fl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, E, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + f : "", t.envMap ? "#define " + p : "", t.envMap ? "#define " + m : "", g ? "#define CUBEUV_TEXEL_WIDTH " + g.texelWidth : "", g ? "#define CUBEUV_TEXEL_HEIGHT " + g.texelHeight : "", g ? "#define CUBEUV_MAX_MIP " + g.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + u : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "", t.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== wn ? "#define TONE_MAPPING" : "", t.toneMapping !== wn ? Qe.tonemapping_pars_fragment : "", t.toneMapping !== wn ? qp("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Qe.colorspace_pars_fragment, Wp("linearToOutputTexel", t.outputColorSpace), Yp(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(cr).join(`
`)),
    o = Wa(o),
    o = ll(o, t),
    o = cl(o, t),
    l = Wa(l),
    l = ll(l, t),
    l = cl(l, t),
    o = ul(o),
    l = ul(l),
    t.isRawShaderMaterial !== !0 && (L = `#version 300 es
`,
    _ = [S, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + _,
    d = ["#define varying in", t.glslVersion === Ao ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Ao ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + d);
    const U = L + _ + o
      , C = L + d + l
      , I = sl(r, r.VERTEX_SHADER, U)
      , O = sl(r, r.FRAGMENT_SHADER, C);
    r.attachShader(A, I),
    r.attachShader(A, O),
    t.index0AttributeName !== void 0 ? r.bindAttribLocation(A, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(A, 0, "position"),
    r.linkProgram(A);
    function N(b) {
        if (i.debug.checkShaderErrors) {
            const X = r.getProgramInfoLog(A) || ""
              , G = r.getShaderInfoLog(I) || ""
              , J = r.getShaderInfoLog(O) || ""
              , Q = X.trim()
              , B = G.trim()
              , H = J.trim();
            let ee = !0
              , ue = !0;
            if (r.getProgramParameter(A, r.LINK_STATUS) === !1)
                if (ee = !1,
                typeof i.debug.onShaderError == "function")
                    i.debug.onShaderError(r, A, I, O);
                else {
                    const fe = ol(r, I, "vertex")
                      , Ee = ol(r, O, "fragment");
                    ut("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(A, r.VALIDATE_STATUS) + `

Material Name: ` + b.name + `
Material Type: ` + b.type + `

Program Info Log: ` + Q + `
` + fe + `
` + Ee)
                }
            else
                Q !== "" ? je("WebGLProgram: Program Info Log:", Q) : (B === "" || H === "") && (ue = !1);
            ue && (b.diagnostics = {
                runnable: ee,
                programLog: Q,
                vertexShader: {
                    log: B,
                    prefix: _
                },
                fragmentShader: {
                    log: H,
                    prefix: d
                }
            })
        }
        r.deleteShader(I),
        r.deleteShader(O),
        Y = new Qr(r,A),
        T = Zp(r, A)
    }
    let Y;
    this.getUniforms = function() {
        return Y === void 0 && N(this),
        Y
    }
    ;
    let T;
    this.getAttributes = function() {
        return T === void 0 && N(this),
        T
    }
    ;
    let v = t.rendererExtensionParallelShaderCompile === !1;
    return this.isReady = function() {
        return v === !1 && (v = r.getProgramParameter(A, Vp)),
        v
    }
    ,
    this.destroy = function() {
        n.releaseStatesOfProgram(this),
        r.deleteProgram(A),
        this.program = void 0
    }
    ,
    this.type = t.shaderType,
    this.name = t.shaderName,
    this.id = Gp++,
    this.cacheKey = e,
    this.usedTimes = 1,
    this.program = A,
    this.vertexShader = I,
    this.fragmentShader = O,
    this
}
let hm = 0;
class dm {
    constructor() {
        this.shaderCache = new Map,
        this.materialCache = new Map
    }
    update(e) {
        const t = e.vertexShader
          , n = e.fragmentShader
          , r = this._getShaderStage(t)
          , a = this._getShaderStage(n)
          , o = this._getShaderCacheForMaterial(e);
        return o.has(r) === !1 && (o.add(r),
        r.usedTimes++),
        o.has(a) === !1 && (o.add(a),
        a.usedTimes++),
        this
    }
    remove(e) {
        const t = this.materialCache.get(e);
        for (const n of t)
            n.usedTimes--,
            n.usedTimes === 0 && this.shaderCache.delete(n.code);
        return this.materialCache.delete(e),
        this
    }
    getVertexShaderID(e) {
        return this._getShaderStage(e.vertexShader).id
    }
    getFragmentShaderID(e) {
        return this._getShaderStage(e.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(),
        this.materialCache.clear()
    }
    _getShaderCacheForMaterial(e) {
        const t = this.materialCache;
        let n = t.get(e);
        return n === void 0 && (n = new Set,
        t.set(e, n)),
        n
    }
    _getShaderStage(e) {
        const t = this.shaderCache;
        let n = t.get(e);
        return n === void 0 && (n = new pm(e),
        t.set(e, n)),
        n
    }
}
class pm {
    constructor(e) {
        this.id = hm++,
        this.code = e,
        this.usedTimes = 0
    }
}
function mm(i, e, t, n, r, a, o) {
    const l = new Ol
      , u = new dm
      , f = new Set
      , p = []
      , m = new Map
      , g = r.logarithmicDepthBuffer;
    let S = r.precision;
    const E = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distance",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    function A(T) {
        return f.add(T),
        T === 0 ? "uv" : `uv${T}`
    }
    function _(T, v, b, X, G) {
        const J = X.fog
          , Q = G.geometry
          , B = T.isMeshStandardMaterial ? X.environment : null
          , H = (T.isMeshStandardMaterial ? t : e).get(T.envMap || B)
          , ee = H && H.mapping === rs ? H.image.height : null
          , ue = E[T.type];
        T.precision !== null && (S = r.getMaxPrecision(T.precision),
        S !== T.precision && je("WebGLProgram.getParameters:", T.precision, "not supported, using", S, "instead."));
        const fe = Q.morphAttributes.position || Q.morphAttributes.normal || Q.morphAttributes.color
          , Ee = fe !== void 0 ? fe.length : 0;
        let Ve = 0;
        Q.morphAttributes.position !== void 0 && (Ve = 1),
        Q.morphAttributes.normal !== void 0 && (Ve = 2),
        Q.morphAttributes.color !== void 0 && (Ve = 3);
        let Ge, ht, ot, ie;
        if (ue) {
            const rt = Tn[ue];
            Ge = rt.vertexShader,
            ht = rt.fragmentShader
        } else
            Ge = T.vertexShader,
            ht = T.fragmentShader,
            u.update(T),
            ot = u.getVertexShaderID(T),
            ie = u.getFragmentShaderID(T);
        const ae = i.getRenderTarget()
          , we = i.state.buffers.depth.getReversed()
          , Ye = G.isInstancedMesh === !0
          , Pe = G.isBatchedMesh === !0
          , tt = !!T.map
          , Pt = !!T.matcap
          , Be = !!H
          , qe = !!T.aoMap
          , dt = !!T.lightMap
          , Ze = !!T.bumpMap
          , bt = !!T.normalMap
          , F = !!T.displacementMap
          , wt = !!T.emissiveMap
          , st = !!T.metalnessMap
          , mt = !!T.roughnessMap
          , De = T.anisotropy > 0
          , R = T.clearcoat > 0
          , x = T.dispersion > 0
          , k = T.iridescence > 0
          , ne = T.sheen > 0
          , se = T.transmission > 0
          , te = De && !!T.anisotropyMap
          , Ue = R && !!T.clearcoatMap
          , _e = R && !!T.clearcoatNormalMap
          , Le = R && !!T.clearcoatRoughnessMap
          , He = k && !!T.iridescenceMap
          , oe = k && !!T.iridescenceThicknessMap
          , pe = ne && !!T.sheenColorMap
          , Re = ne && !!T.sheenRoughnessMap
          , Ie = !!T.specularMap
          , me = !!T.specularColorMap
          , Ke = !!T.specularIntensityMap
          , z = se && !!T.transmissionMap
          , xe = se && !!T.thicknessMap
          , he = !!T.gradientMap
          , Ae = !!T.alphaMap
          , le = T.alphaTest > 0
          , re = !!T.alphaHash
          , de = !!T.extensions;
        let ke = wn;
        T.toneMapped && (ae === null || ae.isXRRenderTarget === !0) && (ke = i.toneMapping);
        const gt = {
            shaderID: ue,
            shaderType: T.type,
            shaderName: T.name,
            vertexShader: Ge,
            fragmentShader: ht,
            defines: T.defines,
            customVertexShaderID: ot,
            customFragmentShaderID: ie,
            isRawShaderMaterial: T.isRawShaderMaterial === !0,
            glslVersion: T.glslVersion,
            precision: S,
            batching: Pe,
            batchingColor: Pe && G._colorsTexture !== null,
            instancing: Ye,
            instancingColor: Ye && G.instanceColor !== null,
            instancingMorph: Ye && G.morphTexture !== null,
            outputColorSpace: ae === null ? i.outputColorSpace : ae.isXRRenderTarget === !0 ? ae.texture.colorSpace : Xi,
            alphaToCoverage: !!T.alphaToCoverage,
            map: tt,
            matcap: Pt,
            envMap: Be,
            envMapMode: Be && H.mapping,
            envMapCubeUVHeight: ee,
            aoMap: qe,
            lightMap: dt,
            bumpMap: Ze,
            normalMap: bt,
            displacementMap: F,
            emissiveMap: wt,
            normalMapObjectSpace: bt && T.normalMapType === iu,
            normalMapTangentSpace: bt && T.normalMapType === nu,
            metalnessMap: st,
            roughnessMap: mt,
            anisotropy: De,
            anisotropyMap: te,
            clearcoat: R,
            clearcoatMap: Ue,
            clearcoatNormalMap: _e,
            clearcoatRoughnessMap: Le,
            dispersion: x,
            iridescence: k,
            iridescenceMap: He,
            iridescenceThicknessMap: oe,
            sheen: ne,
            sheenColorMap: pe,
            sheenRoughnessMap: Re,
            specularMap: Ie,
            specularColorMap: me,
            specularIntensityMap: Ke,
            transmission: se,
            transmissionMap: z,
            thicknessMap: xe,
            gradientMap: he,
            opaque: T.transparent === !1 && T.blending === Vi && T.alphaToCoverage === !1,
            alphaMap: Ae,
            alphaTest: le,
            alphaHash: re,
            combine: T.combine,
            mapUv: tt && A(T.map.channel),
            aoMapUv: qe && A(T.aoMap.channel),
            lightMapUv: dt && A(T.lightMap.channel),
            bumpMapUv: Ze && A(T.bumpMap.channel),
            normalMapUv: bt && A(T.normalMap.channel),
            displacementMapUv: F && A(T.displacementMap.channel),
            emissiveMapUv: wt && A(T.emissiveMap.channel),
            metalnessMapUv: st && A(T.metalnessMap.channel),
            roughnessMapUv: mt && A(T.roughnessMap.channel),
            anisotropyMapUv: te && A(T.anisotropyMap.channel),
            clearcoatMapUv: Ue && A(T.clearcoatMap.channel),
            clearcoatNormalMapUv: _e && A(T.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: Le && A(T.clearcoatRoughnessMap.channel),
            iridescenceMapUv: He && A(T.iridescenceMap.channel),
            iridescenceThicknessMapUv: oe && A(T.iridescenceThicknessMap.channel),
            sheenColorMapUv: pe && A(T.sheenColorMap.channel),
            sheenRoughnessMapUv: Re && A(T.sheenRoughnessMap.channel),
            specularMapUv: Ie && A(T.specularMap.channel),
            specularColorMapUv: me && A(T.specularColorMap.channel),
            specularIntensityMapUv: Ke && A(T.specularIntensityMap.channel),
            transmissionMapUv: z && A(T.transmissionMap.channel),
            thicknessMapUv: xe && A(T.thicknessMap.channel),
            alphaMapUv: Ae && A(T.alphaMap.channel),
            vertexTangents: !!Q.attributes.tangent && (bt || De),
            vertexColors: T.vertexColors,
            vertexAlphas: T.vertexColors === !0 && !!Q.attributes.color && Q.attributes.color.itemSize === 4,
            pointsUvs: G.isPoints === !0 && !!Q.attributes.uv && (tt || Ae),
            fog: !!J,
            useFog: T.fog === !0,
            fogExp2: !!J && J.isFogExp2,
            flatShading: T.flatShading === !0 && T.wireframe === !1,
            sizeAttenuation: T.sizeAttenuation === !0,
            logarithmicDepthBuffer: g,
            reversedDepthBuffer: we,
            skinning: G.isSkinnedMesh === !0,
            morphTargets: Q.morphAttributes.position !== void 0,
            morphNormals: Q.morphAttributes.normal !== void 0,
            morphColors: Q.morphAttributes.color !== void 0,
            morphTargetsCount: Ee,
            morphTextureStride: Ve,
            numDirLights: v.directional.length,
            numPointLights: v.point.length,
            numSpotLights: v.spot.length,
            numSpotLightMaps: v.spotLightMap.length,
            numRectAreaLights: v.rectArea.length,
            numHemiLights: v.hemi.length,
            numDirLightShadows: v.directionalShadowMap.length,
            numPointLightShadows: v.pointShadowMap.length,
            numSpotLightShadows: v.spotShadowMap.length,
            numSpotLightShadowsWithMaps: v.numSpotLightShadowsWithMaps,
            numLightProbes: v.numLightProbes,
            numClippingPlanes: o.numPlanes,
            numClipIntersection: o.numIntersection,
            dithering: T.dithering,
            shadowMapEnabled: i.shadowMap.enabled && b.length > 0,
            shadowMapType: i.shadowMap.type,
            toneMapping: ke,
            decodeVideoTexture: tt && T.map.isVideoTexture === !0 && at.getTransfer(T.map.colorSpace) === _t,
            decodeVideoTextureEmissive: wt && T.emissiveMap.isVideoTexture === !0 && at.getTransfer(T.emissiveMap.colorSpace) === _t,
            premultipliedAlpha: T.premultipliedAlpha,
            doubleSided: T.side === Bn,
            flipSided: T.side === Qt,
            useDepthPacking: T.depthPacking >= 0,
            depthPacking: T.depthPacking || 0,
            index0AttributeName: T.index0AttributeName,
            extensionClipCullDistance: de && T.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
            extensionMultiDraw: (de && T.extensions.multiDraw === !0 || Pe) && n.has("WEBGL_multi_draw"),
            rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
            customProgramCacheKey: T.customProgramCacheKey()
        };
        return gt.vertexUv1s = f.has(1),
        gt.vertexUv2s = f.has(2),
        gt.vertexUv3s = f.has(3),
        f.clear(),
        gt
    }
    function d(T) {
        const v = [];
        if (T.shaderID ? v.push(T.shaderID) : (v.push(T.customVertexShaderID),
        v.push(T.customFragmentShaderID)),
        T.defines !== void 0)
            for (const b in T.defines)
                v.push(b),
                v.push(T.defines[b]);
        return T.isRawShaderMaterial === !1 && (L(v, T),
        U(v, T),
        v.push(i.outputColorSpace)),
        v.push(T.customProgramCacheKey),
        v.join()
    }
    function L(T, v) {
        T.push(v.precision),
        T.push(v.outputColorSpace),
        T.push(v.envMapMode),
        T.push(v.envMapCubeUVHeight),
        T.push(v.mapUv),
        T.push(v.alphaMapUv),
        T.push(v.lightMapUv),
        T.push(v.aoMapUv),
        T.push(v.bumpMapUv),
        T.push(v.normalMapUv),
        T.push(v.displacementMapUv),
        T.push(v.emissiveMapUv),
        T.push(v.metalnessMapUv),
        T.push(v.roughnessMapUv),
        T.push(v.anisotropyMapUv),
        T.push(v.clearcoatMapUv),
        T.push(v.clearcoatNormalMapUv),
        T.push(v.clearcoatRoughnessMapUv),
        T.push(v.iridescenceMapUv),
        T.push(v.iridescenceThicknessMapUv),
        T.push(v.sheenColorMapUv),
        T.push(v.sheenRoughnessMapUv),
        T.push(v.specularMapUv),
        T.push(v.specularColorMapUv),
        T.push(v.specularIntensityMapUv),
        T.push(v.transmissionMapUv),
        T.push(v.thicknessMapUv),
        T.push(v.combine),
        T.push(v.fogExp2),
        T.push(v.sizeAttenuation),
        T.push(v.morphTargetsCount),
        T.push(v.morphAttributeCount),
        T.push(v.numDirLights),
        T.push(v.numPointLights),
        T.push(v.numSpotLights),
        T.push(v.numSpotLightMaps),
        T.push(v.numHemiLights),
        T.push(v.numRectAreaLights),
        T.push(v.numDirLightShadows),
        T.push(v.numPointLightShadows),
        T.push(v.numSpotLightShadows),
        T.push(v.numSpotLightShadowsWithMaps),
        T.push(v.numLightProbes),
        T.push(v.shadowMapType),
        T.push(v.toneMapping),
        T.push(v.numClippingPlanes),
        T.push(v.numClipIntersection),
        T.push(v.depthPacking)
    }
    function U(T, v) {
        l.disableAll(),
        v.instancing && l.enable(0),
        v.instancingColor && l.enable(1),
        v.instancingMorph && l.enable(2),
        v.matcap && l.enable(3),
        v.envMap && l.enable(4),
        v.normalMapObjectSpace && l.enable(5),
        v.normalMapTangentSpace && l.enable(6),
        v.clearcoat && l.enable(7),
        v.iridescence && l.enable(8),
        v.alphaTest && l.enable(9),
        v.vertexColors && l.enable(10),
        v.vertexAlphas && l.enable(11),
        v.vertexUv1s && l.enable(12),
        v.vertexUv2s && l.enable(13),
        v.vertexUv3s && l.enable(14),
        v.vertexTangents && l.enable(15),
        v.anisotropy && l.enable(16),
        v.alphaHash && l.enable(17),
        v.batching && l.enable(18),
        v.dispersion && l.enable(19),
        v.batchingColor && l.enable(20),
        v.gradientMap && l.enable(21),
        T.push(l.mask),
        l.disableAll(),
        v.fog && l.enable(0),
        v.useFog && l.enable(1),
        v.flatShading && l.enable(2),
        v.logarithmicDepthBuffer && l.enable(3),
        v.reversedDepthBuffer && l.enable(4),
        v.skinning && l.enable(5),
        v.morphTargets && l.enable(6),
        v.morphNormals && l.enable(7),
        v.morphColors && l.enable(8),
        v.premultipliedAlpha && l.enable(9),
        v.shadowMapEnabled && l.enable(10),
        v.doubleSided && l.enable(11),
        v.flipSided && l.enable(12),
        v.useDepthPacking && l.enable(13),
        v.dithering && l.enable(14),
        v.transmission && l.enable(15),
        v.sheen && l.enable(16),
        v.opaque && l.enable(17),
        v.pointsUvs && l.enable(18),
        v.decodeVideoTexture && l.enable(19),
        v.decodeVideoTextureEmissive && l.enable(20),
        v.alphaToCoverage && l.enable(21),
        T.push(l.mask)
    }
    function C(T) {
        const v = E[T.type];
        let b;
        if (v) {
            const X = Tn[v];
            b = Du.clone(X.uniforms)
        } else
            b = T.uniforms;
        return b
    }
    function I(T, v) {
        let b = m.get(v);
        return b !== void 0 ? ++b.usedTimes : (b = new fm(i,v,T,a),
        p.push(b),
        m.set(v, b)),
        b
    }
    function O(T) {
        if (--T.usedTimes === 0) {
            const v = p.indexOf(T);
            p[v] = p[p.length - 1],
            p.pop(),
            m.delete(T.cacheKey),
            T.destroy()
        }
    }
    function N(T) {
        u.remove(T)
    }
    function Y() {
        u.dispose()
    }
    return {
        getParameters: _,
        getProgramCacheKey: d,
        getUniforms: C,
        acquireProgram: I,
        releaseProgram: O,
        releaseShaderCache: N,
        programs: p,
        dispose: Y
    }
}
function gm() {
    let i = new WeakMap;
    function e(o) {
        return i.has(o)
    }
    function t(o) {
        let l = i.get(o);
        return l === void 0 && (l = {},
        i.set(o, l)),
        l
    }
    function n(o) {
        i.delete(o)
    }
    function r(o, l, u) {
        i.get(o)[l] = u
    }
    function a() {
        i = new WeakMap
    }
    return {
        has: e,
        get: t,
        remove: n,
        update: r,
        dispose: a
    }
}
function _m(i, e) {
    return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id
}
function hl(i, e) {
    return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id
}
function dl() {
    const i = [];
    let e = 0;
    const t = []
      , n = []
      , r = [];
    function a() {
        e = 0,
        t.length = 0,
        n.length = 0,
        r.length = 0
    }
    function o(m, g, S, E, A, _) {
        let d = i[e];
        return d === void 0 ? (d = {
            id: m.id,
            object: m,
            geometry: g,
            material: S,
            groupOrder: E,
            renderOrder: m.renderOrder,
            z: A,
            group: _
        },
        i[e] = d) : (d.id = m.id,
        d.object = m,
        d.geometry = g,
        d.material = S,
        d.groupOrder = E,
        d.renderOrder = m.renderOrder,
        d.z = A,
        d.group = _),
        e++,
        d
    }
    function l(m, g, S, E, A, _) {
        const d = o(m, g, S, E, A, _);
        S.transmission > 0 ? n.push(d) : S.transparent === !0 ? r.push(d) : t.push(d)
    }
    function u(m, g, S, E, A, _) {
        const d = o(m, g, S, E, A, _);
        S.transmission > 0 ? n.unshift(d) : S.transparent === !0 ? r.unshift(d) : t.unshift(d)
    }
    function f(m, g) {
        t.length > 1 && t.sort(m || _m),
        n.length > 1 && n.sort(g || hl),
        r.length > 1 && r.sort(g || hl)
    }
    function p() {
        for (let m = e, g = i.length; m < g; m++) {
            const S = i[m];
            if (S.id === null)
                break;
            S.id = null,
            S.object = null,
            S.geometry = null,
            S.material = null,
            S.group = null
        }
    }
    return {
        opaque: t,
        transmissive: n,
        transparent: r,
        init: a,
        push: l,
        unshift: u,
        finish: p,
        sort: f
    }
}
function vm() {
    let i = new WeakMap;
    function e(n, r) {
        const a = i.get(n);
        let o;
        return a === void 0 ? (o = new dl,
        i.set(n, [o])) : r >= a.length ? (o = new dl,
        a.push(o)) : o = a[r],
        o
    }
    function t() {
        i = new WeakMap
    }
    return {
        get: e,
        dispose: t
    }
}
function xm() {
    const i = {};
    return {
        get: function(e) {
            if (i[e.id] !== void 0)
                return i[e.id];
            let t;
            switch (e.type) {
            case "DirectionalLight":
                t = {
                    direction: new $,
                    color: new vt
                };
                break;
            case "SpotLight":
                t = {
                    position: new $,
                    direction: new $,
                    color: new vt,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                t = {
                    position: new $,
                    color: new vt,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                t = {
                    direction: new $,
                    skyColor: new vt,
                    groundColor: new vt
                };
                break;
            case "RectAreaLight":
                t = {
                    color: new vt,
                    position: new $,
                    halfWidth: new $,
                    halfHeight: new $
                };
                break
            }
            return i[e.id] = t,
            t
        }
    }
}
function Mm() {
    const i = {};
    return {
        get: function(e) {
            if (i[e.id] !== void 0)
                return i[e.id];
            let t;
            switch (e.type) {
            case "DirectionalLight":
                t = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Mt
                };
                break;
            case "SpotLight":
                t = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Mt
                };
                break;
            case "PointLight":
                t = {
                    shadowIntensity: 1,
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Mt,
                    shadowCameraNear: 1,
                    shadowCameraFar: 1e3
                };
                break
            }
            return i[e.id] = t,
            t
        }
    }
}
let Sm = 0;
function ym(i, e) {
    return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0)
}
function Em(i) {
    const e = new xm
      , t = Mm()
      , n = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
    };
    for (let f = 0; f < 9; f++)
        n.probe.push(new $);
    const r = new $
      , a = new Ct
      , o = new Ct;
    function l(f) {
        let p = 0
          , m = 0
          , g = 0;
        for (let T = 0; T < 9; T++)
            n.probe[T].set(0, 0, 0);
        let S = 0
          , E = 0
          , A = 0
          , _ = 0
          , d = 0
          , L = 0
          , U = 0
          , C = 0
          , I = 0
          , O = 0
          , N = 0;
        f.sort(ym);
        for (let T = 0, v = f.length; T < v; T++) {
            const b = f[T]
              , X = b.color
              , G = b.intensity
              , J = b.distance;
            let Q = null;
            if (b.shadow && b.shadow.map && (b.shadow.map.texture.format === Wi ? Q = b.shadow.map.texture : Q = b.shadow.map.depthTexture || b.shadow.map.texture),
            b.isAmbientLight)
                p += X.r * G,
                m += X.g * G,
                g += X.b * G;
            else if (b.isLightProbe) {
                for (let B = 0; B < 9; B++)
                    n.probe[B].addScaledVector(b.sh.coefficients[B], G);
                N++
            } else if (b.isDirectionalLight) {
                const B = e.get(b);
                if (B.color.copy(b.color).multiplyScalar(b.intensity),
                b.castShadow) {
                    const H = b.shadow
                      , ee = t.get(b);
                    ee.shadowIntensity = H.intensity,
                    ee.shadowBias = H.bias,
                    ee.shadowNormalBias = H.normalBias,
                    ee.shadowRadius = H.radius,
                    ee.shadowMapSize = H.mapSize,
                    n.directionalShadow[S] = ee,
                    n.directionalShadowMap[S] = Q,
                    n.directionalShadowMatrix[S] = b.shadow.matrix,
                    L++
                }
                n.directional[S] = B,
                S++
            } else if (b.isSpotLight) {
                const B = e.get(b);
                B.position.setFromMatrixPosition(b.matrixWorld),
                B.color.copy(X).multiplyScalar(G),
                B.distance = J,
                B.coneCos = Math.cos(b.angle),
                B.penumbraCos = Math.cos(b.angle * (1 - b.penumbra)),
                B.decay = b.decay,
                n.spot[A] = B;
                const H = b.shadow;
                if (b.map && (n.spotLightMap[I] = b.map,
                I++,
                H.updateMatrices(b),
                b.castShadow && O++),
                n.spotLightMatrix[A] = H.matrix,
                b.castShadow) {
                    const ee = t.get(b);
                    ee.shadowIntensity = H.intensity,
                    ee.shadowBias = H.bias,
                    ee.shadowNormalBias = H.normalBias,
                    ee.shadowRadius = H.radius,
                    ee.shadowMapSize = H.mapSize,
                    n.spotShadow[A] = ee,
                    n.spotShadowMap[A] = Q,
                    C++
                }
                A++
            } else if (b.isRectAreaLight) {
                const B = e.get(b);
                B.color.copy(X).multiplyScalar(G),
                B.halfWidth.set(b.width * .5, 0, 0),
                B.halfHeight.set(0, b.height * .5, 0),
                n.rectArea[_] = B,
                _++
            } else if (b.isPointLight) {
                const B = e.get(b);
                if (B.color.copy(b.color).multiplyScalar(b.intensity),
                B.distance = b.distance,
                B.decay = b.decay,
                b.castShadow) {
                    const H = b.shadow
                      , ee = t.get(b);
                    ee.shadowIntensity = H.intensity,
                    ee.shadowBias = H.bias,
                    ee.shadowNormalBias = H.normalBias,
                    ee.shadowRadius = H.radius,
                    ee.shadowMapSize = H.mapSize,
                    ee.shadowCameraNear = H.camera.near,
                    ee.shadowCameraFar = H.camera.far,
                    n.pointShadow[E] = ee,
                    n.pointShadowMap[E] = Q,
                    n.pointShadowMatrix[E] = b.shadow.matrix,
                    U++
                }
                n.point[E] = B,
                E++
            } else if (b.isHemisphereLight) {
                const B = e.get(b);
                B.skyColor.copy(b.color).multiplyScalar(G),
                B.groundColor.copy(b.groundColor).multiplyScalar(G),
                n.hemi[d] = B,
                d++
            }
        }
        _ > 0 && (i.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ye.LTC_FLOAT_1,
        n.rectAreaLTC2 = ye.LTC_FLOAT_2) : (n.rectAreaLTC1 = ye.LTC_HALF_1,
        n.rectAreaLTC2 = ye.LTC_HALF_2)),
        n.ambient[0] = p,
        n.ambient[1] = m,
        n.ambient[2] = g;
        const Y = n.hash;
        (Y.directionalLength !== S || Y.pointLength !== E || Y.spotLength !== A || Y.rectAreaLength !== _ || Y.hemiLength !== d || Y.numDirectionalShadows !== L || Y.numPointShadows !== U || Y.numSpotShadows !== C || Y.numSpotMaps !== I || Y.numLightProbes !== N) && (n.directional.length = S,
        n.spot.length = A,
        n.rectArea.length = _,
        n.point.length = E,
        n.hemi.length = d,
        n.directionalShadow.length = L,
        n.directionalShadowMap.length = L,
        n.pointShadow.length = U,
        n.pointShadowMap.length = U,
        n.spotShadow.length = C,
        n.spotShadowMap.length = C,
        n.directionalShadowMatrix.length = L,
        n.pointShadowMatrix.length = U,
        n.spotLightMatrix.length = C + I - O,
        n.spotLightMap.length = I,
        n.numSpotLightShadowsWithMaps = O,
        n.numLightProbes = N,
        Y.directionalLength = S,
        Y.pointLength = E,
        Y.spotLength = A,
        Y.rectAreaLength = _,
        Y.hemiLength = d,
        Y.numDirectionalShadows = L,
        Y.numPointShadows = U,
        Y.numSpotShadows = C,
        Y.numSpotMaps = I,
        Y.numLightProbes = N,
        n.version = Sm++)
    }
    function u(f, p) {
        let m = 0
          , g = 0
          , S = 0
          , E = 0
          , A = 0;
        const _ = p.matrixWorldInverse;
        for (let d = 0, L = f.length; d < L; d++) {
            const U = f[d];
            if (U.isDirectionalLight) {
                const C = n.directional[m];
                C.direction.setFromMatrixPosition(U.matrixWorld),
                r.setFromMatrixPosition(U.target.matrixWorld),
                C.direction.sub(r),
                C.direction.transformDirection(_),
                m++
            } else if (U.isSpotLight) {
                const C = n.spot[S];
                C.position.setFromMatrixPosition(U.matrixWorld),
                C.position.applyMatrix4(_),
                C.direction.setFromMatrixPosition(U.matrixWorld),
                r.setFromMatrixPosition(U.target.matrixWorld),
                C.direction.sub(r),
                C.direction.transformDirection(_),
                S++
            } else if (U.isRectAreaLight) {
                const C = n.rectArea[E];
                C.position.setFromMatrixPosition(U.matrixWorld),
                C.position.applyMatrix4(_),
                o.identity(),
                a.copy(U.matrixWorld),
                a.premultiply(_),
                o.extractRotation(a),
                C.halfWidth.set(U.width * .5, 0, 0),
                C.halfHeight.set(0, U.height * .5, 0),
                C.halfWidth.applyMatrix4(o),
                C.halfHeight.applyMatrix4(o),
                E++
            } else if (U.isPointLight) {
                const C = n.point[g];
                C.position.setFromMatrixPosition(U.matrixWorld),
                C.position.applyMatrix4(_),
                g++
            } else if (U.isHemisphereLight) {
                const C = n.hemi[A];
                C.direction.setFromMatrixPosition(U.matrixWorld),
                C.direction.transformDirection(_),
                A++
            }
        }
    }
    return {
        setup: l,
        setupView: u,
        state: n
    }
}
function pl(i) {
    const e = new Em(i)
      , t = []
      , n = [];
    function r(p) {
        f.camera = p,
        t.length = 0,
        n.length = 0
    }
    function a(p) {
        t.push(p)
    }
    function o(p) {
        n.push(p)
    }
    function l() {
        e.setup(t)
    }
    function u(p) {
        e.setupView(t, p)
    }
    const f = {
        lightsArray: t,
        shadowsArray: n,
        camera: null,
        lights: e,
        transmissionRenderTarget: {}
    };
    return {
        init: r,
        state: f,
        setupLights: l,
        setupLightsView: u,
        pushLight: a,
        pushShadow: o
    }
}
function Tm(i) {
    let e = new WeakMap;
    function t(r, a=0) {
        const o = e.get(r);
        let l;
        return o === void 0 ? (l = new pl(i),
        e.set(r, [l])) : a >= o.length ? (l = new pl(i),
        o.push(l)) : l = o[a],
        l
    }
    function n() {
        e = new WeakMap
    }
    return {
        get: t,
        dispose: n
    }
}
const Am = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
  , bm = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`
  , wm = [new $(1,0,0), new $(-1,0,0), new $(0,1,0), new $(0,-1,0), new $(0,0,1), new $(0,0,-1)]
  , Rm = [new $(0,-1,0), new $(0,-1,0), new $(0,0,1), new $(0,0,-1), new $(0,-1,0), new $(0,-1,0)]
  , ml = new Ct
  , or = new $
  , qs = new $;
function Cm(i, e, t) {
    let n = new ql;
    const r = new Mt
      , a = new Mt
      , o = new Rt
      , l = new Wu
      , u = new Xu
      , f = {}
      , p = t.maxTextureSize
      , m = {
        [ri]: Qt,
        [Qt]: ri,
        [Bn]: Bn
    }
      , g = new Pn({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new Mt
            },
            radius: {
                value: 4
            }
        },
        vertexShader: Am,
        fragmentShader: bm
    })
      , S = g.clone();
    S.defines.HORIZONTAL_PASS = 1;
    const E = new Sn;
    E.setAttribute("position", new Mn(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    const A = new qn(E,g)
      , _ = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = jr;
    let d = this.type;
    this.render = function(O, N, Y) {
        if (_.enabled === !1 || _.autoUpdate === !1 && _.needsUpdate === !1 || O.length === 0)
            return;
        O.type === Uc && (je("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),
        O.type = jr);
        const T = i.getRenderTarget()
          , v = i.getActiveCubeFace()
          , b = i.getActiveMipmapLevel()
          , X = i.state;
        X.setBlending(Vn),
        X.buffers.depth.getReversed() === !0 ? X.buffers.color.setClear(0, 0, 0, 0) : X.buffers.color.setClear(1, 1, 1, 1),
        X.buffers.depth.setTest(!0),
        X.setScissorTest(!1);
        const G = d !== this.type;
        G && N.traverse(function(J) {
            J.material && (Array.isArray(J.material) ? J.material.forEach(Q => Q.needsUpdate = !0) : J.material.needsUpdate = !0)
        });
        for (let J = 0, Q = O.length; J < Q; J++) {
            const B = O[J]
              , H = B.shadow;
            if (H === void 0) {
                je("WebGLShadowMap:", B, "has no shadow.");
                continue
            }
            if (H.autoUpdate === !1 && H.needsUpdate === !1)
                continue;
            r.copy(H.mapSize);
            const ee = H.getFrameExtents();
            if (r.multiply(ee),
            a.copy(H.mapSize),
            (r.x > p || r.y > p) && (r.x > p && (a.x = Math.floor(p / ee.x),
            r.x = a.x * ee.x,
            H.mapSize.x = a.x),
            r.y > p && (a.y = Math.floor(p / ee.y),
            r.y = a.y * ee.y,
            H.mapSize.y = a.y)),
            H.map === null || G === !0) {
                if (H.map !== null && (H.map.depthTexture !== null && (H.map.depthTexture.dispose(),
                H.map.depthTexture = null),
                H.map.dispose()),
                this.type === lr) {
                    if (B.isPointLight) {
                        je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
                        continue
                    }
                    H.map = new Rn(r.x,r.y,{
                        format: Wi,
                        type: kn,
                        minFilter: qt,
                        magFilter: qt,
                        generateMipmaps: !1
                    }),
                    H.map.texture.name = B.name + ".shadowMap",
                    H.map.depthTexture = new dr(r.x,r.y,An),
                    H.map.depthTexture.name = B.name + ".shadowMapDepth",
                    H.map.depthTexture.format = Wn,
                    H.map.depthTexture.compareFunction = null,
                    H.map.depthTexture.minFilter = Ht,
                    H.map.depthTexture.magFilter = Ht
                } else {
                    B.isPointLight ? (H.map = new Xl(r.x),
                    H.map.depthTexture = new Hu(r.x,Cn)) : (H.map = new Rn(r.x,r.y),
                    H.map.depthTexture = new dr(r.x,r.y,Cn)),
                    H.map.depthTexture.name = B.name + ".shadowMap",
                    H.map.depthTexture.format = Wn;
                    const fe = i.state.buffers.depth.getReversed();
                    this.type === jr ? (H.map.depthTexture.compareFunction = fe ? Qa : Ja,
                    H.map.depthTexture.minFilter = qt,
                    H.map.depthTexture.magFilter = qt) : (H.map.depthTexture.compareFunction = null,
                    H.map.depthTexture.minFilter = Ht,
                    H.map.depthTexture.magFilter = Ht)
                }
                H.camera.updateProjectionMatrix()
            }
            const ue = H.map.isWebGLCubeRenderTarget ? 6 : 1;
            for (let fe = 0; fe < ue; fe++) {
                if (H.map.isWebGLCubeRenderTarget)
                    i.setRenderTarget(H.map, fe),
                    i.clear();
                else {
                    fe === 0 && (i.setRenderTarget(H.map),
                    i.clear());
                    const Ee = H.getViewport(fe);
                    o.set(a.x * Ee.x, a.y * Ee.y, a.x * Ee.z, a.y * Ee.w),
                    X.viewport(o)
                }
                if (B.isPointLight) {
                    const Ee = H.camera
                      , Ve = H.matrix
                      , Ge = B.distance || Ee.far;
                    Ge !== Ee.far && (Ee.far = Ge,
                    Ee.updateProjectionMatrix()),
                    or.setFromMatrixPosition(B.matrixWorld),
                    Ee.position.copy(or),
                    qs.copy(Ee.position),
                    qs.add(wm[fe]),
                    Ee.up.copy(Rm[fe]),
                    Ee.lookAt(qs),
                    Ee.updateMatrixWorld(),
                    Ve.makeTranslation(-or.x, -or.y, -or.z),
                    ml.multiplyMatrices(Ee.projectionMatrix, Ee.matrixWorldInverse),
                    H._frustum.setFromProjectionMatrix(ml, Ee.coordinateSystem, Ee.reversedDepth)
                } else
                    H.updateMatrices(B);
                n = H.getFrustum(),
                C(N, Y, H.camera, B, this.type)
            }
            H.isPointLightShadow !== !0 && this.type === lr && L(H, Y),
            H.needsUpdate = !1
        }
        d = this.type,
        _.needsUpdate = !1,
        i.setRenderTarget(T, v, b)
    }
    ;
    function L(O, N) {
        const Y = e.update(A);
        g.defines.VSM_SAMPLES !== O.blurSamples && (g.defines.VSM_SAMPLES = O.blurSamples,
        S.defines.VSM_SAMPLES = O.blurSamples,
        g.needsUpdate = !0,
        S.needsUpdate = !0),
        O.mapPass === null && (O.mapPass = new Rn(r.x,r.y,{
            format: Wi,
            type: kn
        })),
        g.uniforms.shadow_pass.value = O.map.depthTexture,
        g.uniforms.resolution.value = O.mapSize,
        g.uniforms.radius.value = O.radius,
        i.setRenderTarget(O.mapPass),
        i.clear(),
        i.renderBufferDirect(N, null, Y, g, A, null),
        S.uniforms.shadow_pass.value = O.mapPass.texture,
        S.uniforms.resolution.value = O.mapSize,
        S.uniforms.radius.value = O.radius,
        i.setRenderTarget(O.map),
        i.clear(),
        i.renderBufferDirect(N, null, Y, S, A, null)
    }
    function U(O, N, Y, T) {
        let v = null;
        const b = Y.isPointLight === !0 ? O.customDistanceMaterial : O.customDepthMaterial;
        if (b !== void 0)
            v = b;
        else if (v = Y.isPointLight === !0 ? u : l,
        i.localClippingEnabled && N.clipShadows === !0 && Array.isArray(N.clippingPlanes) && N.clippingPlanes.length !== 0 || N.displacementMap && N.displacementScale !== 0 || N.alphaMap && N.alphaTest > 0 || N.map && N.alphaTest > 0 || N.alphaToCoverage === !0) {
            const X = v.uuid
              , G = N.uuid;
            let J = f[X];
            J === void 0 && (J = {},
            f[X] = J);
            let Q = J[G];
            Q === void 0 && (Q = v.clone(),
            J[G] = Q,
            N.addEventListener("dispose", I)),
            v = Q
        }
        if (v.visible = N.visible,
        v.wireframe = N.wireframe,
        T === lr ? v.side = N.shadowSide !== null ? N.shadowSide : N.side : v.side = N.shadowSide !== null ? N.shadowSide : m[N.side],
        v.alphaMap = N.alphaMap,
        v.alphaTest = N.alphaToCoverage === !0 ? .5 : N.alphaTest,
        v.map = N.map,
        v.clipShadows = N.clipShadows,
        v.clippingPlanes = N.clippingPlanes,
        v.clipIntersection = N.clipIntersection,
        v.displacementMap = N.displacementMap,
        v.displacementScale = N.displacementScale,
        v.displacementBias = N.displacementBias,
        v.wireframeLinewidth = N.wireframeLinewidth,
        v.linewidth = N.linewidth,
        Y.isPointLight === !0 && v.isMeshDistanceMaterial === !0) {
            const X = i.properties.get(v);
            X.light = Y
        }
        return v
    }
    function C(O, N, Y, T, v) {
        if (O.visible === !1)
            return;
        if (O.layers.test(N.layers) && (O.isMesh || O.isLine || O.isPoints) && (O.castShadow || O.receiveShadow && v === lr) && (!O.frustumCulled || n.intersectsObject(O))) {
            O.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse, O.matrixWorld);
            const G = e.update(O)
              , J = O.material;
            if (Array.isArray(J)) {
                const Q = G.groups;
                for (let B = 0, H = Q.length; B < H; B++) {
                    const ee = Q[B]
                      , ue = J[ee.materialIndex];
                    if (ue && ue.visible) {
                        const fe = U(O, ue, T, v);
                        O.onBeforeShadow(i, O, N, Y, G, fe, ee),
                        i.renderBufferDirect(Y, null, G, fe, O, ee),
                        O.onAfterShadow(i, O, N, Y, G, fe, ee)
                    }
                }
            } else if (J.visible) {
                const Q = U(O, J, T, v);
                O.onBeforeShadow(i, O, N, Y, G, Q, null),
                i.renderBufferDirect(Y, null, G, Q, O, null),
                O.onAfterShadow(i, O, N, Y, G, Q, null)
            }
        }
        const X = O.children;
        for (let G = 0, J = X.length; G < J; G++)
            C(X[G], N, Y, T, v)
    }
    function I(O) {
        O.target.removeEventListener("dispose", I);
        for (const Y in f) {
            const T = f[Y]
              , v = O.target.uuid;
            v in T && (T[v].dispose(),
            delete T[v])
        }
    }
}
const Pm = {
    [Js]: Qs,
    [ea]: ia,
    [ta]: ra,
    [Hi]: na,
    [Qs]: Js,
    [ia]: ea,
    [ra]: ta,
    [na]: Hi
};
function Dm(i, e) {
    function t() {
        let z = !1;
        const xe = new Rt;
        let he = null;
        const Ae = new Rt(0,0,0,0);
        return {
            setMask: function(le) {
                he !== le && !z && (i.colorMask(le, le, le, le),
                he = le)
            },
            setLocked: function(le) {
                z = le
            },
            setClear: function(le, re, de, ke, gt) {
                gt === !0 && (le *= ke,
                re *= ke,
                de *= ke),
                xe.set(le, re, de, ke),
                Ae.equals(xe) === !1 && (i.clearColor(le, re, de, ke),
                Ae.copy(xe))
            },
            reset: function() {
                z = !1,
                he = null,
                Ae.set(-1, 0, 0, 0)
            }
        }
    }
    function n() {
        let z = !1
          , xe = !1
          , he = null
          , Ae = null
          , le = null;
        return {
            setReversed: function(re) {
                if (xe !== re) {
                    const de = e.get("EXT_clip_control");
                    re ? de.clipControlEXT(de.LOWER_LEFT_EXT, de.ZERO_TO_ONE_EXT) : de.clipControlEXT(de.LOWER_LEFT_EXT, de.NEGATIVE_ONE_TO_ONE_EXT),
                    xe = re;
                    const ke = le;
                    le = null,
                    this.setClear(ke)
                }
            },
            getReversed: function() {
                return xe
            },
            setTest: function(re) {
                re ? ae(i.DEPTH_TEST) : we(i.DEPTH_TEST)
            },
            setMask: function(re) {
                he !== re && !z && (i.depthMask(re),
                he = re)
            },
            setFunc: function(re) {
                if (xe && (re = Pm[re]),
                Ae !== re) {
                    switch (re) {
                    case Js:
                        i.depthFunc(i.NEVER);
                        break;
                    case Qs:
                        i.depthFunc(i.ALWAYS);
                        break;
                    case ea:
                        i.depthFunc(i.LESS);
                        break;
                    case Hi:
                        i.depthFunc(i.LEQUAL);
                        break;
                    case ta:
                        i.depthFunc(i.EQUAL);
                        break;
                    case na:
                        i.depthFunc(i.GEQUAL);
                        break;
                    case ia:
                        i.depthFunc(i.GREATER);
                        break;
                    case ra:
                        i.depthFunc(i.NOTEQUAL);
                        break;
                    default:
                        i.depthFunc(i.LEQUAL)
                    }
                    Ae = re
                }
            },
            setLocked: function(re) {
                z = re
            },
            setClear: function(re) {
                le !== re && (xe && (re = 1 - re),
                i.clearDepth(re),
                le = re)
            },
            reset: function() {
                z = !1,
                he = null,
                Ae = null,
                le = null,
                xe = !1
            }
        }
    }
    function r() {
        let z = !1
          , xe = null
          , he = null
          , Ae = null
          , le = null
          , re = null
          , de = null
          , ke = null
          , gt = null;
        return {
            setTest: function(rt) {
                z || (rt ? ae(i.STENCIL_TEST) : we(i.STENCIL_TEST))
            },
            setMask: function(rt) {
                xe !== rt && !z && (i.stencilMask(rt),
                xe = rt)
            },
            setFunc: function(rt, Yt, dn) {
                (he !== rt || Ae !== Yt || le !== dn) && (i.stencilFunc(rt, Yt, dn),
                he = rt,
                Ae = Yt,
                le = dn)
            },
            setOp: function(rt, Yt, dn) {
                (re !== rt || de !== Yt || ke !== dn) && (i.stencilOp(rt, Yt, dn),
                re = rt,
                de = Yt,
                ke = dn)
            },
            setLocked: function(rt) {
                z = rt
            },
            setClear: function(rt) {
                gt !== rt && (i.clearStencil(rt),
                gt = rt)
            },
            reset: function() {
                z = !1,
                xe = null,
                he = null,
                Ae = null,
                le = null,
                re = null,
                de = null,
                ke = null,
                gt = null
            }
        }
    }
    const a = new t
      , o = new n
      , l = new r
      , u = new WeakMap
      , f = new WeakMap;
    let p = {}
      , m = {}
      , g = new WeakMap
      , S = []
      , E = null
      , A = !1
      , _ = null
      , d = null
      , L = null
      , U = null
      , C = null
      , I = null
      , O = null
      , N = new vt(0,0,0)
      , Y = 0
      , T = !1
      , v = null
      , b = null
      , X = null
      , G = null
      , J = null;
    const Q = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let B = !1
      , H = 0;
    const ee = i.getParameter(i.VERSION);
    ee.indexOf("WebGL") !== -1 ? (H = parseFloat(/^WebGL (\d)/.exec(ee)[1]),
    B = H >= 1) : ee.indexOf("OpenGL ES") !== -1 && (H = parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),
    B = H >= 2);
    let ue = null
      , fe = {};
    const Ee = i.getParameter(i.SCISSOR_BOX)
      , Ve = i.getParameter(i.VIEWPORT)
      , Ge = new Rt().fromArray(Ee)
      , ht = new Rt().fromArray(Ve);
    function ot(z, xe, he, Ae) {
        const le = new Uint8Array(4)
          , re = i.createTexture();
        i.bindTexture(z, re),
        i.texParameteri(z, i.TEXTURE_MIN_FILTER, i.NEAREST),
        i.texParameteri(z, i.TEXTURE_MAG_FILTER, i.NEAREST);
        for (let de = 0; de < he; de++)
            z === i.TEXTURE_3D || z === i.TEXTURE_2D_ARRAY ? i.texImage3D(xe, 0, i.RGBA, 1, 1, Ae, 0, i.RGBA, i.UNSIGNED_BYTE, le) : i.texImage2D(xe + de, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, le);
        return re
    }
    const ie = {};
    ie[i.TEXTURE_2D] = ot(i.TEXTURE_2D, i.TEXTURE_2D, 1),
    ie[i.TEXTURE_CUBE_MAP] = ot(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
    ie[i.TEXTURE_2D_ARRAY] = ot(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1),
    ie[i.TEXTURE_3D] = ot(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1),
    a.setClear(0, 0, 0, 1),
    o.setClear(1),
    l.setClear(0),
    ae(i.DEPTH_TEST),
    o.setFunc(Hi),
    Ze(!1),
    bt(Mo),
    ae(i.CULL_FACE),
    qe(Vn);
    function ae(z) {
        p[z] !== !0 && (i.enable(z),
        p[z] = !0)
    }
    function we(z) {
        p[z] !== !1 && (i.disable(z),
        p[z] = !1)
    }
    function Ye(z, xe) {
        return m[z] !== xe ? (i.bindFramebuffer(z, xe),
        m[z] = xe,
        z === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = xe),
        z === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = xe),
        !0) : !1
    }
    function Pe(z, xe) {
        let he = S
          , Ae = !1;
        if (z) {
            he = g.get(xe),
            he === void 0 && (he = [],
            g.set(xe, he));
            const le = z.textures;
            if (he.length !== le.length || he[0] !== i.COLOR_ATTACHMENT0) {
                for (let re = 0, de = le.length; re < de; re++)
                    he[re] = i.COLOR_ATTACHMENT0 + re;
                he.length = le.length,
                Ae = !0
            }
        } else
            he[0] !== i.BACK && (he[0] = i.BACK,
            Ae = !0);
        Ae && i.drawBuffers(he)
    }
    function tt(z) {
        return E !== z ? (i.useProgram(z),
        E = z,
        !0) : !1
    }
    const Pt = {
        [_i]: i.FUNC_ADD,
        [Nc]: i.FUNC_SUBTRACT,
        [Fc]: i.FUNC_REVERSE_SUBTRACT
    };
    Pt[Oc] = i.MIN,
    Pt[Bc] = i.MAX;
    const Be = {
        [zc]: i.ZERO,
        [Vc]: i.ONE,
        [Gc]: i.SRC_COLOR,
        [Zs]: i.SRC_ALPHA,
        [Yc]: i.SRC_ALPHA_SATURATE,
        [Xc]: i.DST_COLOR,
        [kc]: i.DST_ALPHA,
        [Hc]: i.ONE_MINUS_SRC_COLOR,
        [$s]: i.ONE_MINUS_SRC_ALPHA,
        [qc]: i.ONE_MINUS_DST_COLOR,
        [Wc]: i.ONE_MINUS_DST_ALPHA,
        [jc]: i.CONSTANT_COLOR,
        [Kc]: i.ONE_MINUS_CONSTANT_COLOR,
        [Zc]: i.CONSTANT_ALPHA,
        [$c]: i.ONE_MINUS_CONSTANT_ALPHA
    };
    function qe(z, xe, he, Ae, le, re, de, ke, gt, rt) {
        if (z === Vn) {
            A === !0 && (we(i.BLEND),
            A = !1);
            return
        }
        if (A === !1 && (ae(i.BLEND),
        A = !0),
        z !== Ic) {
            if (z !== _ || rt !== T) {
                if ((d !== _i || C !== _i) && (i.blendEquation(i.FUNC_ADD),
                d = _i,
                C = _i),
                rt)
                    switch (z) {
                    case Vi:
                        i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Ks:
                        i.blendFunc(i.ONE, i.ONE);
                        break;
                    case So:
                        i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
                        break;
                    case yo:
                        i.blendFuncSeparate(i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ZERO, i.ONE);
                        break;
                    default:
                        ut("WebGLState: Invalid blending: ", z);
                        break
                    }
                else
                    switch (z) {
                    case Vi:
                        i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Ks:
                        i.blendFuncSeparate(i.SRC_ALPHA, i.ONE, i.ONE, i.ONE);
                        break;
                    case So:
                        ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
                        break;
                    case yo:
                        ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
                        break;
                    default:
                        ut("WebGLState: Invalid blending: ", z);
                        break
                    }
                L = null,
                U = null,
                I = null,
                O = null,
                N.set(0, 0, 0),
                Y = 0,
                _ = z,
                T = rt
            }
            return
        }
        le = le || xe,
        re = re || he,
        de = de || Ae,
        (xe !== d || le !== C) && (i.blendEquationSeparate(Pt[xe], Pt[le]),
        d = xe,
        C = le),
        (he !== L || Ae !== U || re !== I || de !== O) && (i.blendFuncSeparate(Be[he], Be[Ae], Be[re], Be[de]),
        L = he,
        U = Ae,
        I = re,
        O = de),
        (ke.equals(N) === !1 || gt !== Y) && (i.blendColor(ke.r, ke.g, ke.b, gt),
        N.copy(ke),
        Y = gt),
        _ = z,
        T = !1
    }
    function dt(z, xe) {
        z.side === Bn ? we(i.CULL_FACE) : ae(i.CULL_FACE);
        let he = z.side === Qt;
        xe && (he = !he),
        Ze(he),
        z.blending === Vi && z.transparent === !1 ? qe(Vn) : qe(z.blending, z.blendEquation, z.blendSrc, z.blendDst, z.blendEquationAlpha, z.blendSrcAlpha, z.blendDstAlpha, z.blendColor, z.blendAlpha, z.premultipliedAlpha),
        o.setFunc(z.depthFunc),
        o.setTest(z.depthTest),
        o.setMask(z.depthWrite),
        a.setMask(z.colorWrite);
        const Ae = z.stencilWrite;
        l.setTest(Ae),
        Ae && (l.setMask(z.stencilWriteMask),
        l.setFunc(z.stencilFunc, z.stencilRef, z.stencilFuncMask),
        l.setOp(z.stencilFail, z.stencilZFail, z.stencilZPass)),
        wt(z.polygonOffset, z.polygonOffsetFactor, z.polygonOffsetUnits),
        z.alphaToCoverage === !0 ? ae(i.SAMPLE_ALPHA_TO_COVERAGE) : we(i.SAMPLE_ALPHA_TO_COVERAGE)
    }
    function Ze(z) {
        v !== z && (z ? i.frontFace(i.CW) : i.frontFace(i.CCW),
        v = z)
    }
    function bt(z) {
        z !== Dc ? (ae(i.CULL_FACE),
        z !== b && (z === Mo ? i.cullFace(i.BACK) : z === Lc ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : we(i.CULL_FACE),
        b = z
    }
    function F(z) {
        z !== X && (B && i.lineWidth(z),
        X = z)
    }
    function wt(z, xe, he) {
        z ? (ae(i.POLYGON_OFFSET_FILL),
        (G !== xe || J !== he) && (i.polygonOffset(xe, he),
        G = xe,
        J = he)) : we(i.POLYGON_OFFSET_FILL)
    }
    function st(z) {
        z ? ae(i.SCISSOR_TEST) : we(i.SCISSOR_TEST)
    }
    function mt(z) {
        z === void 0 && (z = i.TEXTURE0 + Q - 1),
        ue !== z && (i.activeTexture(z),
        ue = z)
    }
    function De(z, xe, he) {
        he === void 0 && (ue === null ? he = i.TEXTURE0 + Q - 1 : he = ue);
        let Ae = fe[he];
        Ae === void 0 && (Ae = {
            type: void 0,
            texture: void 0
        },
        fe[he] = Ae),
        (Ae.type !== z || Ae.texture !== xe) && (ue !== he && (i.activeTexture(he),
        ue = he),
        i.bindTexture(z, xe || ie[z]),
        Ae.type = z,
        Ae.texture = xe)
    }
    function R() {
        const z = fe[ue];
        z !== void 0 && z.type !== void 0 && (i.bindTexture(z.type, null),
        z.type = void 0,
        z.texture = void 0)
    }
    function x() {
        try {
            i.compressedTexImage2D(...arguments)
        } catch (z) {
            ut("WebGLState:", z)
        }
    }
    function k() {
        try {
            i.compressedTexImage3D(...arguments)
        } catch (z) {
            ut("WebGLState:", z)
        }
    }
    function ne() {
        try {
            i.texSubImage2D(...arguments)
        } catch (z) {
            ut("WebGLState:", z)
        }
    }
    function se() {
        try {
            i.texSubImage3D(...arguments)
        } catch (z) {
            ut("WebGLState:", z)
        }
    }
    function te() {
        try {
            i.compressedTexSubImage2D(...arguments)
        } catch (z) {
            ut("WebGLState:", z)
        }
    }
    function Ue() {
        try {
            i.compressedTexSubImage3D(...arguments)
        } catch (z) {
            ut("WebGLState:", z)
        }
    }
    function _e() {
        try {
            i.texStorage2D(...arguments)
        } catch (z) {
            ut("WebGLState:", z)
        }
    }
    function Le() {
        try {
            i.texStorage3D(...arguments)
        } catch (z) {
            ut("WebGLState:", z)
        }
    }
    function He() {
        try {
            i.texImage2D(...arguments)
        } catch (z) {
            ut("WebGLState:", z)
        }
    }
    function oe() {
        try {
            i.texImage3D(...arguments)
        } catch (z) {
            ut("WebGLState:", z)
        }
    }
    function pe(z) {
        Ge.equals(z) === !1 && (i.scissor(z.x, z.y, z.z, z.w),
        Ge.copy(z))
    }
    function Re(z) {
        ht.equals(z) === !1 && (i.viewport(z.x, z.y, z.z, z.w),
        ht.copy(z))
    }
    function Ie(z, xe) {
        let he = f.get(xe);
        he === void 0 && (he = new WeakMap,
        f.set(xe, he));
        let Ae = he.get(z);
        Ae === void 0 && (Ae = i.getUniformBlockIndex(xe, z.name),
        he.set(z, Ae))
    }
    function me(z, xe) {
        const Ae = f.get(xe).get(z);
        u.get(xe) !== Ae && (i.uniformBlockBinding(xe, Ae, z.__bindingPointIndex),
        u.set(xe, Ae))
    }
    function Ke() {
        i.disable(i.BLEND),
        i.disable(i.CULL_FACE),
        i.disable(i.DEPTH_TEST),
        i.disable(i.POLYGON_OFFSET_FILL),
        i.disable(i.SCISSOR_TEST),
        i.disable(i.STENCIL_TEST),
        i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),
        i.blendEquation(i.FUNC_ADD),
        i.blendFunc(i.ONE, i.ZERO),
        i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO),
        i.blendColor(0, 0, 0, 0),
        i.colorMask(!0, !0, !0, !0),
        i.clearColor(0, 0, 0, 0),
        i.depthMask(!0),
        i.depthFunc(i.LESS),
        o.setReversed(!1),
        i.clearDepth(1),
        i.stencilMask(4294967295),
        i.stencilFunc(i.ALWAYS, 0, 4294967295),
        i.stencilOp(i.KEEP, i.KEEP, i.KEEP),
        i.clearStencil(0),
        i.cullFace(i.BACK),
        i.frontFace(i.CCW),
        i.polygonOffset(0, 0),
        i.activeTexture(i.TEXTURE0),
        i.bindFramebuffer(i.FRAMEBUFFER, null),
        i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
        i.bindFramebuffer(i.READ_FRAMEBUFFER, null),
        i.useProgram(null),
        i.lineWidth(1),
        i.scissor(0, 0, i.canvas.width, i.canvas.height),
        i.viewport(0, 0, i.canvas.width, i.canvas.height),
        p = {},
        ue = null,
        fe = {},
        m = {},
        g = new WeakMap,
        S = [],
        E = null,
        A = !1,
        _ = null,
        d = null,
        L = null,
        U = null,
        C = null,
        I = null,
        O = null,
        N = new vt(0,0,0),
        Y = 0,
        T = !1,
        v = null,
        b = null,
        X = null,
        G = null,
        J = null,
        Ge.set(0, 0, i.canvas.width, i.canvas.height),
        ht.set(0, 0, i.canvas.width, i.canvas.height),
        a.reset(),
        o.reset(),
        l.reset()
    }
    return {
        buffers: {
            color: a,
            depth: o,
            stencil: l
        },
        enable: ae,
        disable: we,
        bindFramebuffer: Ye,
        drawBuffers: Pe,
        useProgram: tt,
        setBlending: qe,
        setMaterial: dt,
        setFlipSided: Ze,
        setCullFace: bt,
        setLineWidth: F,
        setPolygonOffset: wt,
        setScissorTest: st,
        activeTexture: mt,
        bindTexture: De,
        unbindTexture: R,
        compressedTexImage2D: x,
        compressedTexImage3D: k,
        texImage2D: He,
        texImage3D: oe,
        updateUBOMapping: Ie,
        uniformBlockBinding: me,
        texStorage2D: _e,
        texStorage3D: Le,
        texSubImage2D: ne,
        texSubImage3D: se,
        compressedTexSubImage2D: te,
        compressedTexSubImage3D: Ue,
        scissor: pe,
        viewport: Re,
        reset: Ke
    }
}
function Lm(i, e, t, n, r, a, o) {
    const l = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null
      , u = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent)
      , f = new Mt
      , p = new WeakMap;
    let m;
    const g = new WeakMap;
    let S = !1;
    try {
        S = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1,1).getContext("2d") !== null
    } catch {}
    function E(R, x) {
        return S ? new OffscreenCanvas(R,x) : ns("canvas")
    }
    function A(R, x, k) {
        let ne = 1;
        const se = De(R);
        if ((se.width > k || se.height > k) && (ne = k / Math.max(se.width, se.height)),
        ne < 1)
            if (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && R instanceof ImageBitmap || typeof VideoFrame < "u" && R instanceof VideoFrame) {
                const te = Math.floor(ne * se.width)
                  , Ue = Math.floor(ne * se.height);
                m === void 0 && (m = E(te, Ue));
                const _e = x ? E(te, Ue) : m;
                return _e.width = te,
                _e.height = Ue,
                _e.getContext("2d").drawImage(R, 0, 0, te, Ue),
                je("WebGLRenderer: Texture has been resized from (" + se.width + "x" + se.height + ") to (" + te + "x" + Ue + ")."),
                _e
            } else
                return "data"in R && je("WebGLRenderer: Image in DataTexture is too big (" + se.width + "x" + se.height + ")."),
                R;
        return R
    }
    function _(R) {
        return R.generateMipmaps
    }
    function d(R) {
        i.generateMipmap(R)
    }
    function L(R) {
        return R.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : R.isWebGL3DRenderTarget ? i.TEXTURE_3D : R.isWebGLArrayRenderTarget || R.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D
    }
    function U(R, x, k, ne, se=!1) {
        if (R !== null) {
            if (i[R] !== void 0)
                return i[R];
            je("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + R + "'")
        }
        let te = x;
        if (x === i.RED && (k === i.FLOAT && (te = i.R32F),
        k === i.HALF_FLOAT && (te = i.R16F),
        k === i.UNSIGNED_BYTE && (te = i.R8)),
        x === i.RED_INTEGER && (k === i.UNSIGNED_BYTE && (te = i.R8UI),
        k === i.UNSIGNED_SHORT && (te = i.R16UI),
        k === i.UNSIGNED_INT && (te = i.R32UI),
        k === i.BYTE && (te = i.R8I),
        k === i.SHORT && (te = i.R16I),
        k === i.INT && (te = i.R32I)),
        x === i.RG && (k === i.FLOAT && (te = i.RG32F),
        k === i.HALF_FLOAT && (te = i.RG16F),
        k === i.UNSIGNED_BYTE && (te = i.RG8)),
        x === i.RG_INTEGER && (k === i.UNSIGNED_BYTE && (te = i.RG8UI),
        k === i.UNSIGNED_SHORT && (te = i.RG16UI),
        k === i.UNSIGNED_INT && (te = i.RG32UI),
        k === i.BYTE && (te = i.RG8I),
        k === i.SHORT && (te = i.RG16I),
        k === i.INT && (te = i.RG32I)),
        x === i.RGB_INTEGER && (k === i.UNSIGNED_BYTE && (te = i.RGB8UI),
        k === i.UNSIGNED_SHORT && (te = i.RGB16UI),
        k === i.UNSIGNED_INT && (te = i.RGB32UI),
        k === i.BYTE && (te = i.RGB8I),
        k === i.SHORT && (te = i.RGB16I),
        k === i.INT && (te = i.RGB32I)),
        x === i.RGBA_INTEGER && (k === i.UNSIGNED_BYTE && (te = i.RGBA8UI),
        k === i.UNSIGNED_SHORT && (te = i.RGBA16UI),
        k === i.UNSIGNED_INT && (te = i.RGBA32UI),
        k === i.BYTE && (te = i.RGBA8I),
        k === i.SHORT && (te = i.RGBA16I),
        k === i.INT && (te = i.RGBA32I)),
        x === i.RGB && (k === i.UNSIGNED_INT_5_9_9_9_REV && (te = i.RGB9_E5),
        k === i.UNSIGNED_INT_10F_11F_11F_REV && (te = i.R11F_G11F_B10F)),
        x === i.RGBA) {
            const Ue = se ? es : at.getTransfer(ne);
            k === i.FLOAT && (te = i.RGBA32F),
            k === i.HALF_FLOAT && (te = i.RGBA16F),
            k === i.UNSIGNED_BYTE && (te = Ue === _t ? i.SRGB8_ALPHA8 : i.RGBA8),
            k === i.UNSIGNED_SHORT_4_4_4_4 && (te = i.RGBA4),
            k === i.UNSIGNED_SHORT_5_5_5_1 && (te = i.RGB5_A1)
        }
        return (te === i.R16F || te === i.R32F || te === i.RG16F || te === i.RG32F || te === i.RGBA16F || te === i.RGBA32F) && e.get("EXT_color_buffer_float"),
        te
    }
    function C(R, x) {
        let k;
        return R ? x === null || x === Cn || x === fr ? k = i.DEPTH24_STENCIL8 : x === An ? k = i.DEPTH32F_STENCIL8 : x === ur && (k = i.DEPTH24_STENCIL8,
        je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === Cn || x === fr ? k = i.DEPTH_COMPONENT24 : x === An ? k = i.DEPTH_COMPONENT32F : x === ur && (k = i.DEPTH_COMPONENT16),
        k
    }
    function I(R, x) {
        return _(R) === !0 || R.isFramebufferTexture && R.minFilter !== Ht && R.minFilter !== qt ? Math.log2(Math.max(x.width, x.height)) + 1 : R.mipmaps !== void 0 && R.mipmaps.length > 0 ? R.mipmaps.length : R.isCompressedTexture && Array.isArray(R.image) ? x.mipmaps.length : 1
    }
    function O(R) {
        const x = R.target;
        x.removeEventListener("dispose", O),
        Y(x),
        x.isVideoTexture && p.delete(x)
    }
    function N(R) {
        const x = R.target;
        x.removeEventListener("dispose", N),
        v(x)
    }
    function Y(R) {
        const x = n.get(R);
        if (x.__webglInit === void 0)
            return;
        const k = R.source
          , ne = g.get(k);
        if (ne) {
            const se = ne[x.__cacheKey];
            se.usedTimes--,
            se.usedTimes === 0 && T(R),
            Object.keys(ne).length === 0 && g.delete(k)
        }
        n.remove(R)
    }
    function T(R) {
        const x = n.get(R);
        i.deleteTexture(x.__webglTexture);
        const k = R.source
          , ne = g.get(k);
        delete ne[x.__cacheKey],
        o.memory.textures--
    }
    function v(R) {
        const x = n.get(R);
        if (R.depthTexture && (R.depthTexture.dispose(),
        n.remove(R.depthTexture)),
        R.isWebGLCubeRenderTarget)
            for (let ne = 0; ne < 6; ne++) {
                if (Array.isArray(x.__webglFramebuffer[ne]))
                    for (let se = 0; se < x.__webglFramebuffer[ne].length; se++)
                        i.deleteFramebuffer(x.__webglFramebuffer[ne][se]);
                else
                    i.deleteFramebuffer(x.__webglFramebuffer[ne]);
                x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer[ne])
            }
        else {
            if (Array.isArray(x.__webglFramebuffer))
                for (let ne = 0; ne < x.__webglFramebuffer.length; ne++)
                    i.deleteFramebuffer(x.__webglFramebuffer[ne]);
            else
                i.deleteFramebuffer(x.__webglFramebuffer);
            if (x.__webglDepthbuffer && i.deleteRenderbuffer(x.__webglDepthbuffer),
            x.__webglMultisampledFramebuffer && i.deleteFramebuffer(x.__webglMultisampledFramebuffer),
            x.__webglColorRenderbuffer)
                for (let ne = 0; ne < x.__webglColorRenderbuffer.length; ne++)
                    x.__webglColorRenderbuffer[ne] && i.deleteRenderbuffer(x.__webglColorRenderbuffer[ne]);
            x.__webglDepthRenderbuffer && i.deleteRenderbuffer(x.__webglDepthRenderbuffer)
        }
        const k = R.textures;
        for (let ne = 0, se = k.length; ne < se; ne++) {
            const te = n.get(k[ne]);
            te.__webglTexture && (i.deleteTexture(te.__webglTexture),
            o.memory.textures--),
            n.remove(k[ne])
        }
        n.remove(R)
    }
    let b = 0;
    function X() {
        b = 0
    }
    function G() {
        const R = b;
        return R >= r.maxTextures && je("WebGLTextures: Trying to use " + R + " texture units while this GPU supports only " + r.maxTextures),
        b += 1,
        R
    }
    function J(R) {
        const x = [];
        return x.push(R.wrapS),
        x.push(R.wrapT),
        x.push(R.wrapR || 0),
        x.push(R.magFilter),
        x.push(R.minFilter),
        x.push(R.anisotropy),
        x.push(R.internalFormat),
        x.push(R.format),
        x.push(R.type),
        x.push(R.generateMipmaps),
        x.push(R.premultiplyAlpha),
        x.push(R.flipY),
        x.push(R.unpackAlignment),
        x.push(R.colorSpace),
        x.join()
    }
    function Q(R, x) {
        const k = n.get(R);
        if (R.isVideoTexture && st(R),
        R.isRenderTargetTexture === !1 && R.isExternalTexture !== !0 && R.version > 0 && k.__version !== R.version) {
            const ne = R.image;
            if (ne === null)
                je("WebGLRenderer: Texture marked for update but no image data found.");
            else if (ne.complete === !1)
                je("WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                ie(k, R, x);
                return
            }
        } else
            R.isExternalTexture && (k.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
        t.bindTexture(i.TEXTURE_2D, k.__webglTexture, i.TEXTURE0 + x)
    }
    function B(R, x) {
        const k = n.get(R);
        if (R.isRenderTargetTexture === !1 && R.version > 0 && k.__version !== R.version) {
            ie(k, R, x);
            return
        } else
            R.isExternalTexture && (k.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
        t.bindTexture(i.TEXTURE_2D_ARRAY, k.__webglTexture, i.TEXTURE0 + x)
    }
    function H(R, x) {
        const k = n.get(R);
        if (R.isRenderTargetTexture === !1 && R.version > 0 && k.__version !== R.version) {
            ie(k, R, x);
            return
        }
        t.bindTexture(i.TEXTURE_3D, k.__webglTexture, i.TEXTURE0 + x)
    }
    function ee(R, x) {
        const k = n.get(R);
        if (R.isCubeDepthTexture !== !0 && R.version > 0 && k.__version !== R.version) {
            ae(k, R, x);
            return
        }
        t.bindTexture(i.TEXTURE_CUBE_MAP, k.__webglTexture, i.TEXTURE0 + x)
    }
    const ue = {
        [oa]: i.REPEAT,
        [zn]: i.CLAMP_TO_EDGE,
        [la]: i.MIRRORED_REPEAT
    }
      , fe = {
        [Ht]: i.NEAREST,
        [eu]: i.NEAREST_MIPMAP_NEAREST,
        [Ar]: i.NEAREST_MIPMAP_LINEAR,
        [qt]: i.LINEAR,
        [gs]: i.LINEAR_MIPMAP_NEAREST,
        [xi]: i.LINEAR_MIPMAP_LINEAR
    }
      , Ee = {
        [ru]: i.NEVER,
        [cu]: i.ALWAYS,
        [su]: i.LESS,
        [Ja]: i.LEQUAL,
        [au]: i.EQUAL,
        [Qa]: i.GEQUAL,
        [ou]: i.GREATER,
        [lu]: i.NOTEQUAL
    };
    function Ve(R, x) {
        if (x.type === An && e.has("OES_texture_float_linear") === !1 && (x.magFilter === qt || x.magFilter === gs || x.magFilter === Ar || x.magFilter === xi || x.minFilter === qt || x.minFilter === gs || x.minFilter === Ar || x.minFilter === xi) && je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),
        i.texParameteri(R, i.TEXTURE_WRAP_S, ue[x.wrapS]),
        i.texParameteri(R, i.TEXTURE_WRAP_T, ue[x.wrapT]),
        (R === i.TEXTURE_3D || R === i.TEXTURE_2D_ARRAY) && i.texParameteri(R, i.TEXTURE_WRAP_R, ue[x.wrapR]),
        i.texParameteri(R, i.TEXTURE_MAG_FILTER, fe[x.magFilter]),
        i.texParameteri(R, i.TEXTURE_MIN_FILTER, fe[x.minFilter]),
        x.compareFunction && (i.texParameteri(R, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE),
        i.texParameteri(R, i.TEXTURE_COMPARE_FUNC, Ee[x.compareFunction])),
        e.has("EXT_texture_filter_anisotropic") === !0) {
            if (x.magFilter === Ht || x.minFilter !== Ar && x.minFilter !== xi || x.type === An && e.has("OES_texture_float_linear") === !1)
                return;
            if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
                const k = e.get("EXT_texture_filter_anisotropic");
                i.texParameterf(R, k.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, r.getMaxAnisotropy())),
                n.get(x).__currentAnisotropy = x.anisotropy
            }
        }
    }
    function Ge(R, x) {
        let k = !1;
        R.__webglInit === void 0 && (R.__webglInit = !0,
        x.addEventListener("dispose", O));
        const ne = x.source;
        let se = g.get(ne);
        se === void 0 && (se = {},
        g.set(ne, se));
        const te = J(x);
        if (te !== R.__cacheKey) {
            se[te] === void 0 && (se[te] = {
                texture: i.createTexture(),
                usedTimes: 0
            },
            o.memory.textures++,
            k = !0),
            se[te].usedTimes++;
            const Ue = se[R.__cacheKey];
            Ue !== void 0 && (se[R.__cacheKey].usedTimes--,
            Ue.usedTimes === 0 && T(x)),
            R.__cacheKey = te,
            R.__webglTexture = se[te].texture
        }
        return k
    }
    function ht(R, x, k) {
        return Math.floor(Math.floor(R / k) / x)
    }
    function ot(R, x, k, ne) {
        const te = R.updateRanges;
        if (te.length === 0)
            t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, x.width, x.height, k, ne, x.data);
        else {
            te.sort( (oe, pe) => oe.start - pe.start);
            let Ue = 0;
            for (let oe = 1; oe < te.length; oe++) {
                const pe = te[Ue]
                  , Re = te[oe]
                  , Ie = pe.start + pe.count
                  , me = ht(Re.start, x.width, 4)
                  , Ke = ht(pe.start, x.width, 4);
                Re.start <= Ie + 1 && me === Ke && ht(Re.start + Re.count - 1, x.width, 4) === me ? pe.count = Math.max(pe.count, Re.start + Re.count - pe.start) : (++Ue,
                te[Ue] = Re)
            }
            te.length = Ue + 1;
            const _e = i.getParameter(i.UNPACK_ROW_LENGTH)
              , Le = i.getParameter(i.UNPACK_SKIP_PIXELS)
              , He = i.getParameter(i.UNPACK_SKIP_ROWS);
            i.pixelStorei(i.UNPACK_ROW_LENGTH, x.width);
            for (let oe = 0, pe = te.length; oe < pe; oe++) {
                const Re = te[oe]
                  , Ie = Math.floor(Re.start / 4)
                  , me = Math.ceil(Re.count / 4)
                  , Ke = Ie % x.width
                  , z = Math.floor(Ie / x.width)
                  , xe = me
                  , he = 1;
                i.pixelStorei(i.UNPACK_SKIP_PIXELS, Ke),
                i.pixelStorei(i.UNPACK_SKIP_ROWS, z),
                t.texSubImage2D(i.TEXTURE_2D, 0, Ke, z, xe, he, k, ne, x.data)
            }
            R.clearUpdateRanges(),
            i.pixelStorei(i.UNPACK_ROW_LENGTH, _e),
            i.pixelStorei(i.UNPACK_SKIP_PIXELS, Le),
            i.pixelStorei(i.UNPACK_SKIP_ROWS, He)
        }
    }
    function ie(R, x, k) {
        let ne = i.TEXTURE_2D;
        (x.isDataArrayTexture || x.isCompressedArrayTexture) && (ne = i.TEXTURE_2D_ARRAY),
        x.isData3DTexture && (ne = i.TEXTURE_3D);
        const se = Ge(R, x)
          , te = x.source;
        t.bindTexture(ne, R.__webglTexture, i.TEXTURE0 + k);
        const Ue = n.get(te);
        if (te.version !== Ue.__version || se === !0) {
            t.activeTexture(i.TEXTURE0 + k);
            const _e = at.getPrimaries(at.workingColorSpace)
              , Le = x.colorSpace === ni ? null : at.getPrimaries(x.colorSpace)
              , He = x.colorSpace === ni || _e === Le ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, He);
            let oe = A(x.image, !1, r.maxTextureSize);
            oe = mt(x, oe);
            const pe = a.convert(x.format, x.colorSpace)
              , Re = a.convert(x.type);
            let Ie = U(x.internalFormat, pe, Re, x.colorSpace, x.isVideoTexture);
            Ve(ne, x);
            let me;
            const Ke = x.mipmaps
              , z = x.isVideoTexture !== !0
              , xe = Ue.__version === void 0 || se === !0
              , he = te.dataReady
              , Ae = I(x, oe);
            if (x.isDepthTexture)
                Ie = C(x.format === Mi, x.type),
                xe && (z ? t.texStorage2D(i.TEXTURE_2D, 1, Ie, oe.width, oe.height) : t.texImage2D(i.TEXTURE_2D, 0, Ie, oe.width, oe.height, 0, pe, Re, null));
            else if (x.isDataTexture)
                if (Ke.length > 0) {
                    z && xe && t.texStorage2D(i.TEXTURE_2D, Ae, Ie, Ke[0].width, Ke[0].height);
                    for (let le = 0, re = Ke.length; le < re; le++)
                        me = Ke[le],
                        z ? he && t.texSubImage2D(i.TEXTURE_2D, le, 0, 0, me.width, me.height, pe, Re, me.data) : t.texImage2D(i.TEXTURE_2D, le, Ie, me.width, me.height, 0, pe, Re, me.data);
                    x.generateMipmaps = !1
                } else
                    z ? (xe && t.texStorage2D(i.TEXTURE_2D, Ae, Ie, oe.width, oe.height),
                    he && ot(x, oe, pe, Re)) : t.texImage2D(i.TEXTURE_2D, 0, Ie, oe.width, oe.height, 0, pe, Re, oe.data);
            else if (x.isCompressedTexture)
                if (x.isCompressedArrayTexture) {
                    z && xe && t.texStorage3D(i.TEXTURE_2D_ARRAY, Ae, Ie, Ke[0].width, Ke[0].height, oe.depth);
                    for (let le = 0, re = Ke.length; le < re; le++)
                        if (me = Ke[le],
                        x.format !== xn)
                            if (pe !== null)
                                if (z) {
                                    if (he)
                                        if (x.layerUpdates.size > 0) {
                                            const de = qo(me.width, me.height, x.format, x.type);
                                            for (const ke of x.layerUpdates) {
                                                const gt = me.data.subarray(ke * de / me.data.BYTES_PER_ELEMENT, (ke + 1) * de / me.data.BYTES_PER_ELEMENT);
                                                t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, le, 0, 0, ke, me.width, me.height, 1, pe, gt)
                                            }
                                            x.clearLayerUpdates()
                                        } else
                                            t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, le, 0, 0, 0, me.width, me.height, oe.depth, pe, me.data)
                                } else
                                    t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, le, Ie, me.width, me.height, oe.depth, 0, me.data, 0, 0);
                            else
                                je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
                        else
                            z ? he && t.texSubImage3D(i.TEXTURE_2D_ARRAY, le, 0, 0, 0, me.width, me.height, oe.depth, pe, Re, me.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, le, Ie, me.width, me.height, oe.depth, 0, pe, Re, me.data)
                } else {
                    z && xe && t.texStorage2D(i.TEXTURE_2D, Ae, Ie, Ke[0].width, Ke[0].height);
                    for (let le = 0, re = Ke.length; le < re; le++)
                        me = Ke[le],
                        x.format !== xn ? pe !== null ? z ? he && t.compressedTexSubImage2D(i.TEXTURE_2D, le, 0, 0, me.width, me.height, pe, me.data) : t.compressedTexImage2D(i.TEXTURE_2D, le, Ie, me.width, me.height, 0, me.data) : je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : z ? he && t.texSubImage2D(i.TEXTURE_2D, le, 0, 0, me.width, me.height, pe, Re, me.data) : t.texImage2D(i.TEXTURE_2D, le, Ie, me.width, me.height, 0, pe, Re, me.data)
                }
            else if (x.isDataArrayTexture)
                if (z) {
                    if (xe && t.texStorage3D(i.TEXTURE_2D_ARRAY, Ae, Ie, oe.width, oe.height, oe.depth),
                    he)
                        if (x.layerUpdates.size > 0) {
                            const le = qo(oe.width, oe.height, x.format, x.type);
                            for (const re of x.layerUpdates) {
                                const de = oe.data.subarray(re * le / oe.data.BYTES_PER_ELEMENT, (re + 1) * le / oe.data.BYTES_PER_ELEMENT);
                                t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, re, oe.width, oe.height, 1, pe, Re, de)
                            }
                            x.clearLayerUpdates()
                        } else
                            t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, oe.width, oe.height, oe.depth, pe, Re, oe.data)
                } else
                    t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Ie, oe.width, oe.height, oe.depth, 0, pe, Re, oe.data);
            else if (x.isData3DTexture)
                z ? (xe && t.texStorage3D(i.TEXTURE_3D, Ae, Ie, oe.width, oe.height, oe.depth),
                he && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, oe.width, oe.height, oe.depth, pe, Re, oe.data)) : t.texImage3D(i.TEXTURE_3D, 0, Ie, oe.width, oe.height, oe.depth, 0, pe, Re, oe.data);
            else if (x.isFramebufferTexture) {
                if (xe)
                    if (z)
                        t.texStorage2D(i.TEXTURE_2D, Ae, Ie, oe.width, oe.height);
                    else {
                        let le = oe.width
                          , re = oe.height;
                        for (let de = 0; de < Ae; de++)
                            t.texImage2D(i.TEXTURE_2D, de, Ie, le, re, 0, pe, Re, null),
                            le >>= 1,
                            re >>= 1
                    }
            } else if (Ke.length > 0) {
                if (z && xe) {
                    const le = De(Ke[0]);
                    t.texStorage2D(i.TEXTURE_2D, Ae, Ie, le.width, le.height)
                }
                for (let le = 0, re = Ke.length; le < re; le++)
                    me = Ke[le],
                    z ? he && t.texSubImage2D(i.TEXTURE_2D, le, 0, 0, pe, Re, me) : t.texImage2D(i.TEXTURE_2D, le, Ie, pe, Re, me);
                x.generateMipmaps = !1
            } else if (z) {
                if (xe) {
                    const le = De(oe);
                    t.texStorage2D(i.TEXTURE_2D, Ae, Ie, le.width, le.height)
                }
                he && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, pe, Re, oe)
            } else
                t.texImage2D(i.TEXTURE_2D, 0, Ie, pe, Re, oe);
            _(x) && d(ne),
            Ue.__version = te.version,
            x.onUpdate && x.onUpdate(x)
        }
        R.__version = x.version
    }
    function ae(R, x, k) {
        if (x.image.length !== 6)
            return;
        const ne = Ge(R, x)
          , se = x.source;
        t.bindTexture(i.TEXTURE_CUBE_MAP, R.__webglTexture, i.TEXTURE0 + k);
        const te = n.get(se);
        if (se.version !== te.__version || ne === !0) {
            t.activeTexture(i.TEXTURE0 + k);
            const Ue = at.getPrimaries(at.workingColorSpace)
              , _e = x.colorSpace === ni ? null : at.getPrimaries(x.colorSpace)
              , Le = x.colorSpace === ni || Ue === _e ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
            i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, x.flipY),
            i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha),
            i.pixelStorei(i.UNPACK_ALIGNMENT, x.unpackAlignment),
            i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Le);
            const He = x.isCompressedTexture || x.image[0].isCompressedTexture
              , oe = x.image[0] && x.image[0].isDataTexture
              , pe = [];
            for (let re = 0; re < 6; re++)
                !He && !oe ? pe[re] = A(x.image[re], !0, r.maxCubemapSize) : pe[re] = oe ? x.image[re].image : x.image[re],
                pe[re] = mt(x, pe[re]);
            const Re = pe[0]
              , Ie = a.convert(x.format, x.colorSpace)
              , me = a.convert(x.type)
              , Ke = U(x.internalFormat, Ie, me, x.colorSpace)
              , z = x.isVideoTexture !== !0
              , xe = te.__version === void 0 || ne === !0
              , he = se.dataReady;
            let Ae = I(x, Re);
            Ve(i.TEXTURE_CUBE_MAP, x);
            let le;
            if (He) {
                z && xe && t.texStorage2D(i.TEXTURE_CUBE_MAP, Ae, Ke, Re.width, Re.height);
                for (let re = 0; re < 6; re++) {
                    le = pe[re].mipmaps;
                    for (let de = 0; de < le.length; de++) {
                        const ke = le[de];
                        x.format !== xn ? Ie !== null ? z ? he && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, de, 0, 0, ke.width, ke.height, Ie, ke.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, de, Ke, ke.width, ke.height, 0, ke.data) : je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : z ? he && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, de, 0, 0, ke.width, ke.height, Ie, me, ke.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, de, Ke, ke.width, ke.height, 0, Ie, me, ke.data)
                    }
                }
            } else {
                if (le = x.mipmaps,
                z && xe) {
                    le.length > 0 && Ae++;
                    const re = De(pe[0]);
                    t.texStorage2D(i.TEXTURE_CUBE_MAP, Ae, Ke, re.width, re.height)
                }
                for (let re = 0; re < 6; re++)
                    if (oe) {
                        z ? he && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0, 0, 0, pe[re].width, pe[re].height, Ie, me, pe[re].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0, Ke, pe[re].width, pe[re].height, 0, Ie, me, pe[re].data);
                        for (let de = 0; de < le.length; de++) {
                            const gt = le[de].image[re].image;
                            z ? he && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, de + 1, 0, 0, gt.width, gt.height, Ie, me, gt.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, de + 1, Ke, gt.width, gt.height, 0, Ie, me, gt.data)
                        }
                    } else {
                        z ? he && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0, 0, 0, Ie, me, pe[re]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, 0, Ke, Ie, me, pe[re]);
                        for (let de = 0; de < le.length; de++) {
                            const ke = le[de];
                            z ? he && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, de + 1, 0, 0, Ie, me, ke.image[re]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + re, de + 1, Ke, Ie, me, ke.image[re])
                        }
                    }
            }
            _(x) && d(i.TEXTURE_CUBE_MAP),
            te.__version = se.version,
            x.onUpdate && x.onUpdate(x)
        }
        R.__version = x.version
    }
    function we(R, x, k, ne, se, te) {
        const Ue = a.convert(k.format, k.colorSpace)
          , _e = a.convert(k.type)
          , Le = U(k.internalFormat, Ue, _e, k.colorSpace)
          , He = n.get(x)
          , oe = n.get(k);
        if (oe.__renderTarget = x,
        !He.__hasExternalTextures) {
            const pe = Math.max(1, x.width >> te)
              , Re = Math.max(1, x.height >> te);
            se === i.TEXTURE_3D || se === i.TEXTURE_2D_ARRAY ? t.texImage3D(se, te, Le, pe, Re, x.depth, 0, Ue, _e, null) : t.texImage2D(se, te, Le, pe, Re, 0, Ue, _e, null)
        }
        t.bindFramebuffer(i.FRAMEBUFFER, R),
        wt(x) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, ne, se, oe.__webglTexture, 0, F(x)) : (se === i.TEXTURE_2D || se >= i.TEXTURE_CUBE_MAP_POSITIVE_X && se <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, ne, se, oe.__webglTexture, te),
        t.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function Ye(R, x, k) {
        if (i.bindRenderbuffer(i.RENDERBUFFER, R),
        x.depthBuffer) {
            const ne = x.depthTexture
              , se = ne && ne.isDepthTexture ? ne.type : null
              , te = C(x.stencilBuffer, se)
              , Ue = x.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
            wt(x) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, F(x), te, x.width, x.height) : k ? i.renderbufferStorageMultisample(i.RENDERBUFFER, F(x), te, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, te, x.width, x.height),
            i.framebufferRenderbuffer(i.FRAMEBUFFER, Ue, i.RENDERBUFFER, R)
        } else {
            const ne = x.textures;
            for (let se = 0; se < ne.length; se++) {
                const te = ne[se]
                  , Ue = a.convert(te.format, te.colorSpace)
                  , _e = a.convert(te.type)
                  , Le = U(te.internalFormat, Ue, _e, te.colorSpace);
                wt(x) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, F(x), Le, x.width, x.height) : k ? i.renderbufferStorageMultisample(i.RENDERBUFFER, F(x), Le, x.width, x.height) : i.renderbufferStorage(i.RENDERBUFFER, Le, x.width, x.height)
            }
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null)
    }
    function Pe(R, x, k) {
        const ne = x.isWebGLCubeRenderTarget === !0;
        if (t.bindFramebuffer(i.FRAMEBUFFER, R),
        !(x.depthTexture && x.depthTexture.isDepthTexture))
            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        const se = n.get(x.depthTexture);
        if (se.__renderTarget = x,
        (!se.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width,
        x.depthTexture.image.height = x.height,
        x.depthTexture.needsUpdate = !0),
        ne) {
            if (se.__webglInit === void 0 && (se.__webglInit = !0,
            x.depthTexture.addEventListener("dispose", O)),
            se.__webglTexture === void 0) {
                se.__webglTexture = i.createTexture(),
                t.bindTexture(i.TEXTURE_CUBE_MAP, se.__webglTexture),
                Ve(i.TEXTURE_CUBE_MAP, x.depthTexture);
                const He = a.convert(x.depthTexture.format)
                  , oe = a.convert(x.depthTexture.type);
                let pe;
                x.depthTexture.format === Wn ? pe = i.DEPTH_COMPONENT24 : x.depthTexture.format === Mi && (pe = i.DEPTH24_STENCIL8);
                for (let Re = 0; Re < 6; Re++)
                    i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + Re, 0, pe, x.width, x.height, 0, He, oe, null)
            }
        } else
            Q(x.depthTexture, 0);
        const te = se.__webglTexture
          , Ue = F(x)
          , _e = ne ? i.TEXTURE_CUBE_MAP_POSITIVE_X + k : i.TEXTURE_2D
          , Le = x.depthTexture.format === Mi ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        if (x.depthTexture.format === Wn)
            wt(x) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Le, _e, te, 0, Ue) : i.framebufferTexture2D(i.FRAMEBUFFER, Le, _e, te, 0);
        else if (x.depthTexture.format === Mi)
            wt(x) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, Le, _e, te, 0, Ue) : i.framebufferTexture2D(i.FRAMEBUFFER, Le, _e, te, 0);
        else
            throw new Error("Unknown depthTexture format")
    }
    function tt(R) {
        const x = n.get(R)
          , k = R.isWebGLCubeRenderTarget === !0;
        if (x.__boundDepthTexture !== R.depthTexture) {
            const ne = R.depthTexture;
            if (x.__depthDisposeCallback && x.__depthDisposeCallback(),
            ne) {
                const se = () => {
                    delete x.__boundDepthTexture,
                    delete x.__depthDisposeCallback,
                    ne.removeEventListener("dispose", se)
                }
                ;
                ne.addEventListener("dispose", se),
                x.__depthDisposeCallback = se
            }
            x.__boundDepthTexture = ne
        }
        if (R.depthTexture && !x.__autoAllocateDepthBuffer)
            if (k)
                for (let ne = 0; ne < 6; ne++)
                    Pe(x.__webglFramebuffer[ne], R, ne);
            else {
                const ne = R.texture.mipmaps;
                ne && ne.length > 0 ? Pe(x.__webglFramebuffer[0], R, 0) : Pe(x.__webglFramebuffer, R, 0)
            }
        else if (k) {
            x.__webglDepthbuffer = [];
            for (let ne = 0; ne < 6; ne++)
                if (t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[ne]),
                x.__webglDepthbuffer[ne] === void 0)
                    x.__webglDepthbuffer[ne] = i.createRenderbuffer(),
                    Ye(x.__webglDepthbuffer[ne], R, !1);
                else {
                    const se = R.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                      , te = x.__webglDepthbuffer[ne];
                    i.bindRenderbuffer(i.RENDERBUFFER, te),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, se, i.RENDERBUFFER, te)
                }
        } else {
            const ne = R.texture.mipmaps;
            if (ne && ne.length > 0 ? t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer[0]) : t.bindFramebuffer(i.FRAMEBUFFER, x.__webglFramebuffer),
            x.__webglDepthbuffer === void 0)
                x.__webglDepthbuffer = i.createRenderbuffer(),
                Ye(x.__webglDepthbuffer, R, !1);
            else {
                const se = R.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                  , te = x.__webglDepthbuffer;
                i.bindRenderbuffer(i.RENDERBUFFER, te),
                i.framebufferRenderbuffer(i.FRAMEBUFFER, se, i.RENDERBUFFER, te)
            }
        }
        t.bindFramebuffer(i.FRAMEBUFFER, null)
    }
    function Pt(R, x, k) {
        const ne = n.get(R);
        x !== void 0 && we(ne.__webglFramebuffer, R, R.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0),
        k !== void 0 && tt(R)
    }
    function Be(R) {
        const x = R.texture
          , k = n.get(R)
          , ne = n.get(x);
        R.addEventListener("dispose", N);
        const se = R.textures
          , te = R.isWebGLCubeRenderTarget === !0
          , Ue = se.length > 1;
        if (Ue || (ne.__webglTexture === void 0 && (ne.__webglTexture = i.createTexture()),
        ne.__version = x.version,
        o.memory.textures++),
        te) {
            k.__webglFramebuffer = [];
            for (let _e = 0; _e < 6; _e++)
                if (x.mipmaps && x.mipmaps.length > 0) {
                    k.__webglFramebuffer[_e] = [];
                    for (let Le = 0; Le < x.mipmaps.length; Le++)
                        k.__webglFramebuffer[_e][Le] = i.createFramebuffer()
                } else
                    k.__webglFramebuffer[_e] = i.createFramebuffer()
        } else {
            if (x.mipmaps && x.mipmaps.length > 0) {
                k.__webglFramebuffer = [];
                for (let _e = 0; _e < x.mipmaps.length; _e++)
                    k.__webglFramebuffer[_e] = i.createFramebuffer()
            } else
                k.__webglFramebuffer = i.createFramebuffer();
            if (Ue)
                for (let _e = 0, Le = se.length; _e < Le; _e++) {
                    const He = n.get(se[_e]);
                    He.__webglTexture === void 0 && (He.__webglTexture = i.createTexture(),
                    o.memory.textures++)
                }
            if (R.samples > 0 && wt(R) === !1) {
                k.__webglMultisampledFramebuffer = i.createFramebuffer(),
                k.__webglColorRenderbuffer = [],
                t.bindFramebuffer(i.FRAMEBUFFER, k.__webglMultisampledFramebuffer);
                for (let _e = 0; _e < se.length; _e++) {
                    const Le = se[_e];
                    k.__webglColorRenderbuffer[_e] = i.createRenderbuffer(),
                    i.bindRenderbuffer(i.RENDERBUFFER, k.__webglColorRenderbuffer[_e]);
                    const He = a.convert(Le.format, Le.colorSpace)
                      , oe = a.convert(Le.type)
                      , pe = U(Le.internalFormat, He, oe, Le.colorSpace, R.isXRRenderTarget === !0)
                      , Re = F(R);
                    i.renderbufferStorageMultisample(i.RENDERBUFFER, Re, pe, R.width, R.height),
                    i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + _e, i.RENDERBUFFER, k.__webglColorRenderbuffer[_e])
                }
                i.bindRenderbuffer(i.RENDERBUFFER, null),
                R.depthBuffer && (k.__webglDepthRenderbuffer = i.createRenderbuffer(),
                Ye(k.__webglDepthRenderbuffer, R, !0)),
                t.bindFramebuffer(i.FRAMEBUFFER, null)
            }
        }
        if (te) {
            t.bindTexture(i.TEXTURE_CUBE_MAP, ne.__webglTexture),
            Ve(i.TEXTURE_CUBE_MAP, x);
            for (let _e = 0; _e < 6; _e++)
                if (x.mipmaps && x.mipmaps.length > 0)
                    for (let Le = 0; Le < x.mipmaps.length; Le++)
                        we(k.__webglFramebuffer[_e][Le], R, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + _e, Le);
                else
                    we(k.__webglFramebuffer[_e], R, x, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + _e, 0);
            _(x) && d(i.TEXTURE_CUBE_MAP),
            t.unbindTexture()
        } else if (Ue) {
            for (let _e = 0, Le = se.length; _e < Le; _e++) {
                const He = se[_e]
                  , oe = n.get(He);
                let pe = i.TEXTURE_2D;
                (R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (pe = R.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
                t.bindTexture(pe, oe.__webglTexture),
                Ve(pe, He),
                we(k.__webglFramebuffer, R, He, i.COLOR_ATTACHMENT0 + _e, pe, 0),
                _(He) && d(pe)
            }
            t.unbindTexture()
        } else {
            let _e = i.TEXTURE_2D;
            if ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) && (_e = R.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY),
            t.bindTexture(_e, ne.__webglTexture),
            Ve(_e, x),
            x.mipmaps && x.mipmaps.length > 0)
                for (let Le = 0; Le < x.mipmaps.length; Le++)
                    we(k.__webglFramebuffer[Le], R, x, i.COLOR_ATTACHMENT0, _e, Le);
            else
                we(k.__webglFramebuffer, R, x, i.COLOR_ATTACHMENT0, _e, 0);
            _(x) && d(_e),
            t.unbindTexture()
        }
        R.depthBuffer && tt(R)
    }
    function qe(R) {
        const x = R.textures;
        for (let k = 0, ne = x.length; k < ne; k++) {
            const se = x[k];
            if (_(se)) {
                const te = L(R)
                  , Ue = n.get(se).__webglTexture;
                t.bindTexture(te, Ue),
                d(te),
                t.unbindTexture()
            }
        }
    }
    const dt = []
      , Ze = [];
    function bt(R) {
        if (R.samples > 0) {
            if (wt(R) === !1) {
                const x = R.textures
                  , k = R.width
                  , ne = R.height;
                let se = i.COLOR_BUFFER_BIT;
                const te = R.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT
                  , Ue = n.get(R)
                  , _e = x.length > 1;
                if (_e)
                    for (let He = 0; He < x.length; He++)
                        t.bindFramebuffer(i.FRAMEBUFFER, Ue.__webglMultisampledFramebuffer),
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + He, i.RENDERBUFFER, null),
                        t.bindFramebuffer(i.FRAMEBUFFER, Ue.__webglFramebuffer),
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + He, i.TEXTURE_2D, null, 0);
                t.bindFramebuffer(i.READ_FRAMEBUFFER, Ue.__webglMultisampledFramebuffer);
                const Le = R.texture.mipmaps;
                Le && Le.length > 0 ? t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ue.__webglFramebuffer[0]) : t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ue.__webglFramebuffer);
                for (let He = 0; He < x.length; He++) {
                    if (R.resolveDepthBuffer && (R.depthBuffer && (se |= i.DEPTH_BUFFER_BIT),
                    R.stencilBuffer && R.resolveStencilBuffer && (se |= i.STENCIL_BUFFER_BIT)),
                    _e) {
                        i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, Ue.__webglColorRenderbuffer[He]);
                        const oe = n.get(x[He]).__webglTexture;
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, oe, 0)
                    }
                    i.blitFramebuffer(0, 0, k, ne, 0, 0, k, ne, se, i.NEAREST),
                    u === !0 && (dt.length = 0,
                    Ze.length = 0,
                    dt.push(i.COLOR_ATTACHMENT0 + He),
                    R.depthBuffer && R.resolveDepthBuffer === !1 && (dt.push(te),
                    Ze.push(te),
                    i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, Ze)),
                    i.invalidateFramebuffer(i.READ_FRAMEBUFFER, dt))
                }
                if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null),
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null),
                _e)
                    for (let He = 0; He < x.length; He++) {
                        t.bindFramebuffer(i.FRAMEBUFFER, Ue.__webglMultisampledFramebuffer),
                        i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + He, i.RENDERBUFFER, Ue.__webglColorRenderbuffer[He]);
                        const oe = n.get(x[He]).__webglTexture;
                        t.bindFramebuffer(i.FRAMEBUFFER, Ue.__webglFramebuffer),
                        i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + He, i.TEXTURE_2D, oe, 0)
                    }
                t.bindFramebuffer(i.DRAW_FRAMEBUFFER, Ue.__webglMultisampledFramebuffer)
            } else if (R.depthBuffer && R.resolveDepthBuffer === !1 && u) {
                const x = R.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
                i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [x])
            }
        }
    }
    function F(R) {
        return Math.min(r.maxSamples, R.samples)
    }
    function wt(R) {
        const x = n.get(R);
        return R.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && x.__useRenderToTexture !== !1
    }
    function st(R) {
        const x = o.render.frame;
        p.get(R) !== x && (p.set(R, x),
        R.update())
    }
    function mt(R, x) {
        const k = R.colorSpace
          , ne = R.format
          , se = R.type;
        return R.isCompressedTexture === !0 || R.isVideoTexture === !0 || k !== Xi && k !== ni && (at.getTransfer(k) === _t ? (ne !== xn || se !== hn) && je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : ut("WebGLTextures: Unsupported texture color space:", k)),
        x
    }
    function De(R) {
        return typeof HTMLImageElement < "u" && R instanceof HTMLImageElement ? (f.width = R.naturalWidth || R.width,
        f.height = R.naturalHeight || R.height) : typeof VideoFrame < "u" && R instanceof VideoFrame ? (f.width = R.displayWidth,
        f.height = R.displayHeight) : (f.width = R.width,
        f.height = R.height),
        f
    }
    this.allocateTextureUnit = G,
    this.resetTextureUnits = X,
    this.setTexture2D = Q,
    this.setTexture2DArray = B,
    this.setTexture3D = H,
    this.setTextureCube = ee,
    this.rebindTextures = Pt,
    this.setupRenderTarget = Be,
    this.updateRenderTargetMipmap = qe,
    this.updateMultisampleRenderTarget = bt,
    this.setupDepthRenderbuffer = tt,
    this.setupFrameBufferTexture = we,
    this.useMultisampledRTT = wt,
    this.isReversedDepthBuffer = function() {
        return t.buffers.depth.getReversed()
    }
}
function Um(i, e) {
    function t(n, r=ni) {
        let a;
        const o = at.getTransfer(r);
        if (n === hn)
            return i.UNSIGNED_BYTE;
        if (n === Ya)
            return i.UNSIGNED_SHORT_4_4_4_4;
        if (n === ja)
            return i.UNSIGNED_SHORT_5_5_5_1;
        if (n === Cl)
            return i.UNSIGNED_INT_5_9_9_9_REV;
        if (n === Pl)
            return i.UNSIGNED_INT_10F_11F_11F_REV;
        if (n === wl)
            return i.BYTE;
        if (n === Rl)
            return i.SHORT;
        if (n === ur)
            return i.UNSIGNED_SHORT;
        if (n === qa)
            return i.INT;
        if (n === Cn)
            return i.UNSIGNED_INT;
        if (n === An)
            return i.FLOAT;
        if (n === kn)
            return i.HALF_FLOAT;
        if (n === Dl)
            return i.ALPHA;
        if (n === Ll)
            return i.RGB;
        if (n === xn)
            return i.RGBA;
        if (n === Wn)
            return i.DEPTH_COMPONENT;
        if (n === Mi)
            return i.DEPTH_STENCIL;
        if (n === Ul)
            return i.RED;
        if (n === Ka)
            return i.RED_INTEGER;
        if (n === Wi)
            return i.RG;
        if (n === Za)
            return i.RG_INTEGER;
        if (n === $a)
            return i.RGBA_INTEGER;
        if (n === Kr || n === Zr || n === $r || n === Jr)
            if (o === _t)
                if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"),
                a !== null) {
                    if (n === Kr)
                        return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (n === Zr)
                        return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (n === $r)
                        return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (n === Jr)
                        return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else
                    return null;
            else if (a = e.get("WEBGL_compressed_texture_s3tc"),
            a !== null) {
                if (n === Kr)
                    return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === Zr)
                    return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === $r)
                    return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === Jr)
                    return a.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else
                return null;
        if (n === ca || n === ua || n === fa || n === ha)
            if (a = e.get("WEBGL_compressed_texture_pvrtc"),
            a !== null) {
                if (n === ca)
                    return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (n === ua)
                    return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (n === fa)
                    return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (n === ha)
                    return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else
                return null;
        if (n === da || n === pa || n === ma || n === ga || n === _a || n === va || n === xa)
            if (a = e.get("WEBGL_compressed_texture_etc"),
            a !== null) {
                if (n === da || n === pa)
                    return o === _t ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
                if (n === ma)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
                if (n === ga)
                    return a.COMPRESSED_R11_EAC;
                if (n === _a)
                    return a.COMPRESSED_SIGNED_R11_EAC;
                if (n === va)
                    return a.COMPRESSED_RG11_EAC;
                if (n === xa)
                    return a.COMPRESSED_SIGNED_RG11_EAC
            } else
                return null;
        if (n === Ma || n === Sa || n === ya || n === Ea || n === Ta || n === Aa || n === ba || n === wa || n === Ra || n === Ca || n === Pa || n === Da || n === La || n === Ua)
            if (a = e.get("WEBGL_compressed_texture_astc"),
            a !== null) {
                if (n === Ma)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (n === Sa)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (n === ya)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (n === Ea)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (n === Ta)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (n === Aa)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (n === ba)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (n === wa)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (n === Ra)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (n === Ca)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (n === Pa)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (n === Da)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (n === La)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (n === Ua)
                    return o === _t ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR
            } else
                return null;
        if (n === Ia || n === Na || n === Fa)
            if (a = e.get("EXT_texture_compression_bptc"),
            a !== null) {
                if (n === Ia)
                    return o === _t ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (n === Na)
                    return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (n === Fa)
                    return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
            } else
                return null;
        if (n === Oa || n === Ba || n === za || n === Va)
            if (a = e.get("EXT_texture_compression_rgtc"),
            a !== null) {
                if (n === Oa)
                    return a.COMPRESSED_RED_RGTC1_EXT;
                if (n === Ba)
                    return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (n === za)
                    return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (n === Va)
                    return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
            } else
                return null;
        return n === fr ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null
    }
    return {
        convert: t
    }
}
const Im = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`
  , Nm = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Fm {
    constructor() {
        this.texture = null,
        this.mesh = null,
        this.depthNear = 0,
        this.depthFar = 0
    }
    init(e, t) {
        if (this.texture === null) {
            const n = new jl(e.texture);
            (e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear,
            this.depthFar = e.depthFar),
            this.texture = n
        }
    }
    getMesh(e) {
        if (this.texture !== null && this.mesh === null) {
            const t = e.cameras[0].viewport
              , n = new Pn({
                vertexShader: Im,
                fragmentShader: Nm,
                uniforms: {
                    depthColor: {
                        value: this.texture
                    },
                    depthWidth: {
                        value: t.z
                    },
                    depthHeight: {
                        value: t.w
                    }
                }
            });
            this.mesh = new qn(new as(20,20),n)
        }
        return this.mesh
    }
    reset() {
        this.texture = null,
        this.mesh = null
    }
    getDepthTexture() {
        return this.texture
    }
}
class Om extends Yi {
    constructor(e, t) {
        super();
        const n = this;
        let r = null
          , a = 1
          , o = null
          , l = "local-floor"
          , u = 1
          , f = null
          , p = null
          , m = null
          , g = null
          , S = null
          , E = null;
        const A = typeof XRWebGLBinding < "u"
          , _ = new Fm
          , d = {}
          , L = t.getContextAttributes();
        let U = null
          , C = null;
        const I = []
          , O = []
          , N = new Mt;
        let Y = null;
        const T = new fn;
        T.viewport = new Rt;
        const v = new fn;
        v.viewport = new Rt;
        const b = [T, v]
          , X = new qu;
        let G = null
          , J = null;
        this.cameraAutoUpdate = !0,
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(ie) {
            let ae = I[ie];
            return ae === void 0 && (ae = new zs,
            I[ie] = ae),
            ae.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(ie) {
            let ae = I[ie];
            return ae === void 0 && (ae = new zs,
            I[ie] = ae),
            ae.getGripSpace()
        }
        ,
        this.getHand = function(ie) {
            let ae = I[ie];
            return ae === void 0 && (ae = new zs,
            I[ie] = ae),
            ae.getHandSpace()
        }
        ;
        function Q(ie) {
            const ae = O.indexOf(ie.inputSource);
            if (ae === -1)
                return;
            const we = I[ae];
            we !== void 0 && (we.update(ie.inputSource, ie.frame, f || o),
            we.dispatchEvent({
                type: ie.type,
                data: ie.inputSource
            }))
        }
        function B() {
            r.removeEventListener("select", Q),
            r.removeEventListener("selectstart", Q),
            r.removeEventListener("selectend", Q),
            r.removeEventListener("squeeze", Q),
            r.removeEventListener("squeezestart", Q),
            r.removeEventListener("squeezeend", Q),
            r.removeEventListener("end", B),
            r.removeEventListener("inputsourceschange", H);
            for (let ie = 0; ie < I.length; ie++) {
                const ae = O[ie];
                ae !== null && (O[ie] = null,
                I[ie].disconnect(ae))
            }
            G = null,
            J = null,
            _.reset();
            for (const ie in d)
                delete d[ie];
            e.setRenderTarget(U),
            S = null,
            g = null,
            m = null,
            r = null,
            C = null,
            ot.stop(),
            n.isPresenting = !1,
            e.setPixelRatio(Y),
            e.setSize(N.width, N.height, !1),
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        this.setFramebufferScaleFactor = function(ie) {
            a = ie,
            n.isPresenting === !0 && je("WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(ie) {
            l = ie,
            n.isPresenting === !0 && je("WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return f || o
        }
        ,
        this.setReferenceSpace = function(ie) {
            f = ie
        }
        ,
        this.getBaseLayer = function() {
            return g !== null ? g : S
        }
        ,
        this.getBinding = function() {
            return m === null && A && (m = new XRWebGLBinding(r,t)),
            m
        }
        ,
        this.getFrame = function() {
            return E
        }
        ,
        this.getSession = function() {
            return r
        }
        ,
        this.setSession = async function(ie) {
            if (r = ie,
            r !== null) {
                if (U = e.getRenderTarget(),
                r.addEventListener("select", Q),
                r.addEventListener("selectstart", Q),
                r.addEventListener("selectend", Q),
                r.addEventListener("squeeze", Q),
                r.addEventListener("squeezestart", Q),
                r.addEventListener("squeezeend", Q),
                r.addEventListener("end", B),
                r.addEventListener("inputsourceschange", H),
                L.xrCompatible !== !0 && await t.makeXRCompatible(),
                Y = e.getPixelRatio(),
                e.getSize(N),
                A && "createProjectionLayer"in XRWebGLBinding.prototype) {
                    let we = null
                      , Ye = null
                      , Pe = null;
                    L.depth && (Pe = L.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24,
                    we = L.stencil ? Mi : Wn,
                    Ye = L.stencil ? fr : Cn);
                    const tt = {
                        colorFormat: t.RGBA8,
                        depthFormat: Pe,
                        scaleFactor: a
                    };
                    m = this.getBinding(),
                    g = m.createProjectionLayer(tt),
                    r.updateRenderState({
                        layers: [g]
                    }),
                    e.setPixelRatio(1),
                    e.setSize(g.textureWidth, g.textureHeight, !1),
                    C = new Rn(g.textureWidth,g.textureHeight,{
                        format: xn,
                        type: hn,
                        depthTexture: new dr(g.textureWidth,g.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,we),
                        stencilBuffer: L.stencil,
                        colorSpace: e.outputColorSpace,
                        samples: L.antialias ? 4 : 0,
                        resolveDepthBuffer: g.ignoreDepthValues === !1,
                        resolveStencilBuffer: g.ignoreDepthValues === !1
                    })
                } else {
                    const we = {
                        antialias: L.antialias,
                        alpha: !0,
                        depth: L.depth,
                        stencil: L.stencil,
                        framebufferScaleFactor: a
                    };
                    S = new XRWebGLLayer(r,t,we),
                    r.updateRenderState({
                        baseLayer: S
                    }),
                    e.setPixelRatio(1),
                    e.setSize(S.framebufferWidth, S.framebufferHeight, !1),
                    C = new Rn(S.framebufferWidth,S.framebufferHeight,{
                        format: xn,
                        type: hn,
                        colorSpace: e.outputColorSpace,
                        stencilBuffer: L.stencil,
                        resolveDepthBuffer: S.ignoreDepthValues === !1,
                        resolveStencilBuffer: S.ignoreDepthValues === !1
                    })
                }
                C.isXRRenderTarget = !0,
                this.setFoveation(u),
                f = null,
                o = await r.requestReferenceSpace(l),
                ot.setContext(r),
                ot.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ,
        this.getEnvironmentBlendMode = function() {
            if (r !== null)
                return r.environmentBlendMode
        }
        ,
        this.getDepthTexture = function() {
            return _.getDepthTexture()
        }
        ;
        function H(ie) {
            for (let ae = 0; ae < ie.removed.length; ae++) {
                const we = ie.removed[ae]
                  , Ye = O.indexOf(we);
                Ye >= 0 && (O[Ye] = null,
                I[Ye].disconnect(we))
            }
            for (let ae = 0; ae < ie.added.length; ae++) {
                const we = ie.added[ae];
                let Ye = O.indexOf(we);
                if (Ye === -1) {
                    for (let tt = 0; tt < I.length; tt++)
                        if (tt >= O.length) {
                            O.push(we),
                            Ye = tt;
                            break
                        } else if (O[tt] === null) {
                            O[tt] = we,
                            Ye = tt;
                            break
                        }
                    if (Ye === -1)
                        break
                }
                const Pe = I[Ye];
                Pe && Pe.connect(we)
            }
        }
        const ee = new $
          , ue = new $;
        function fe(ie, ae, we) {
            ee.setFromMatrixPosition(ae.matrixWorld),
            ue.setFromMatrixPosition(we.matrixWorld);
            const Ye = ee.distanceTo(ue)
              , Pe = ae.projectionMatrix.elements
              , tt = we.projectionMatrix.elements
              , Pt = Pe[14] / (Pe[10] - 1)
              , Be = Pe[14] / (Pe[10] + 1)
              , qe = (Pe[9] + 1) / Pe[5]
              , dt = (Pe[9] - 1) / Pe[5]
              , Ze = (Pe[8] - 1) / Pe[0]
              , bt = (tt[8] + 1) / tt[0]
              , F = Pt * Ze
              , wt = Pt * bt
              , st = Ye / (-Ze + bt)
              , mt = st * -Ze;
            if (ae.matrixWorld.decompose(ie.position, ie.quaternion, ie.scale),
            ie.translateX(mt),
            ie.translateZ(st),
            ie.matrixWorld.compose(ie.position, ie.quaternion, ie.scale),
            ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),
            Pe[10] === -1)
                ie.projectionMatrix.copy(ae.projectionMatrix),
                ie.projectionMatrixInverse.copy(ae.projectionMatrixInverse);
            else {
                const De = Pt + st
                  , R = Be + st
                  , x = F - mt
                  , k = wt + (Ye - mt)
                  , ne = qe * Be / R * De
                  , se = dt * Be / R * De;
                ie.projectionMatrix.makePerspective(x, k, ne, se, De, R),
                ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()
            }
        }
        function Ee(ie, ae) {
            ae === null ? ie.matrixWorld.copy(ie.matrix) : ie.matrixWorld.multiplyMatrices(ae.matrixWorld, ie.matrix),
            ie.matrixWorldInverse.copy(ie.matrixWorld).invert()
        }
        this.updateCamera = function(ie) {
            if (r === null)
                return;
            let ae = ie.near
              , we = ie.far;
            _.texture !== null && (_.depthNear > 0 && (ae = _.depthNear),
            _.depthFar > 0 && (we = _.depthFar)),
            X.near = v.near = T.near = ae,
            X.far = v.far = T.far = we,
            (G !== X.near || J !== X.far) && (r.updateRenderState({
                depthNear: X.near,
                depthFar: X.far
            }),
            G = X.near,
            J = X.far),
            X.layers.mask = ie.layers.mask | 6,
            T.layers.mask = X.layers.mask & 3,
            v.layers.mask = X.layers.mask & 5;
            const Ye = ie.parent
              , Pe = X.cameras;
            Ee(X, Ye);
            for (let tt = 0; tt < Pe.length; tt++)
                Ee(Pe[tt], Ye);
            Pe.length === 2 ? fe(X, T, v) : X.projectionMatrix.copy(T.projectionMatrix),
            Ve(ie, X, Ye)
        }
        ;
        function Ve(ie, ae, we) {
            we === null ? ie.matrix.copy(ae.matrixWorld) : (ie.matrix.copy(we.matrixWorld),
            ie.matrix.invert(),
            ie.matrix.multiply(ae.matrixWorld)),
            ie.matrix.decompose(ie.position, ie.quaternion, ie.scale),
            ie.updateMatrixWorld(!0),
            ie.projectionMatrix.copy(ae.projectionMatrix),
            ie.projectionMatrixInverse.copy(ae.projectionMatrixInverse),
            ie.isPerspectiveCamera && (ie.fov = Ga * 2 * Math.atan(1 / ie.projectionMatrix.elements[5]),
            ie.zoom = 1)
        }
        this.getCamera = function() {
            return X
        }
        ,
        this.getFoveation = function() {
            if (!(g === null && S === null))
                return u
        }
        ,
        this.setFoveation = function(ie) {
            u = ie,
            g !== null && (g.fixedFoveation = ie),
            S !== null && S.fixedFoveation !== void 0 && (S.fixedFoveation = ie)
        }
        ,
        this.hasDepthSensing = function() {
            return _.texture !== null
        }
        ,
        this.getDepthSensingMesh = function() {
            return _.getMesh(X)
        }
        ,
        this.getCameraTexture = function(ie) {
            return d[ie]
        }
        ;
        let Ge = null;
        function ht(ie, ae) {
            if (p = ae.getViewerPose(f || o),
            E = ae,
            p !== null) {
                const we = p.views;
                S !== null && (e.setRenderTargetFramebuffer(C, S.framebuffer),
                e.setRenderTarget(C));
                let Ye = !1;
                we.length !== X.cameras.length && (X.cameras.length = 0,
                Ye = !0);
                for (let Be = 0; Be < we.length; Be++) {
                    const qe = we[Be];
                    let dt = null;
                    if (S !== null)
                        dt = S.getViewport(qe);
                    else {
                        const bt = m.getViewSubImage(g, qe);
                        dt = bt.viewport,
                        Be === 0 && (e.setRenderTargetTextures(C, bt.colorTexture, bt.depthStencilTexture),
                        e.setRenderTarget(C))
                    }
                    let Ze = b[Be];
                    Ze === void 0 && (Ze = new fn,
                    Ze.layers.enable(Be),
                    Ze.viewport = new Rt,
                    b[Be] = Ze),
                    Ze.matrix.fromArray(qe.transform.matrix),
                    Ze.matrix.decompose(Ze.position, Ze.quaternion, Ze.scale),
                    Ze.projectionMatrix.fromArray(qe.projectionMatrix),
                    Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),
                    Ze.viewport.set(dt.x, dt.y, dt.width, dt.height),
                    Be === 0 && (X.matrix.copy(Ze.matrix),
                    X.matrix.decompose(X.position, X.quaternion, X.scale)),
                    Ye === !0 && X.cameras.push(Ze)
                }
                const Pe = r.enabledFeatures;
                if (Pe && Pe.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && A) {
                    m = n.getBinding();
                    const Be = m.getDepthInformation(we[0]);
                    Be && Be.isValid && Be.texture && _.init(Be, r.renderState)
                }
                if (Pe && Pe.includes("camera-access") && A) {
                    e.state.unbindTexture(),
                    m = n.getBinding();
                    for (let Be = 0; Be < we.length; Be++) {
                        const qe = we[Be].camera;
                        if (qe) {
                            let dt = d[qe];
                            dt || (dt = new jl,
                            d[qe] = dt);
                            const Ze = m.getCameraImage(qe);
                            dt.sourceTexture = Ze
                        }
                    }
                }
            }
            for (let we = 0; we < I.length; we++) {
                const Ye = O[we]
                  , Pe = I[we];
                Ye !== null && Pe !== void 0 && Pe.update(Ye, ae, f || o)
            }
            Ge && Ge(ie, ae),
            ae.detectedPlanes && n.dispatchEvent({
                type: "planesdetected",
                data: ae
            }),
            E = null
        }
        const ot = new Zl;
        ot.setAnimationLoop(ht),
        this.setAnimationLoop = function(ie) {
            Ge = ie
        }
        ,
        this.dispose = function() {}
    }
}
const mi = new Xn
  , Bm = new Ct;
function zm(i, e) {
    function t(_, d) {
        _.matrixAutoUpdate === !0 && _.updateMatrix(),
        d.value.copy(_.matrix)
    }
    function n(_, d) {
        d.color.getRGB(_.fogColor.value, Hl(i)),
        d.isFog ? (_.fogNear.value = d.near,
        _.fogFar.value = d.far) : d.isFogExp2 && (_.fogDensity.value = d.density)
    }
    function r(_, d, L, U, C) {
        d.isMeshBasicMaterial || d.isMeshLambertMaterial ? a(_, d) : d.isMeshToonMaterial ? (a(_, d),
        m(_, d)) : d.isMeshPhongMaterial ? (a(_, d),
        p(_, d)) : d.isMeshStandardMaterial ? (a(_, d),
        g(_, d),
        d.isMeshPhysicalMaterial && S(_, d, C)) : d.isMeshMatcapMaterial ? (a(_, d),
        E(_, d)) : d.isMeshDepthMaterial ? a(_, d) : d.isMeshDistanceMaterial ? (a(_, d),
        A(_, d)) : d.isMeshNormalMaterial ? a(_, d) : d.isLineBasicMaterial ? (o(_, d),
        d.isLineDashedMaterial && l(_, d)) : d.isPointsMaterial ? u(_, d, L, U) : d.isSpriteMaterial ? f(_, d) : d.isShadowMaterial ? (_.color.value.copy(d.color),
        _.opacity.value = d.opacity) : d.isShaderMaterial && (d.uniformsNeedUpdate = !1)
    }
    function a(_, d) {
        _.opacity.value = d.opacity,
        d.color && _.diffuse.value.copy(d.color),
        d.emissive && _.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),
        d.map && (_.map.value = d.map,
        t(d.map, _.mapTransform)),
        d.alphaMap && (_.alphaMap.value = d.alphaMap,
        t(d.alphaMap, _.alphaMapTransform)),
        d.bumpMap && (_.bumpMap.value = d.bumpMap,
        t(d.bumpMap, _.bumpMapTransform),
        _.bumpScale.value = d.bumpScale,
        d.side === Qt && (_.bumpScale.value *= -1)),
        d.normalMap && (_.normalMap.value = d.normalMap,
        t(d.normalMap, _.normalMapTransform),
        _.normalScale.value.copy(d.normalScale),
        d.side === Qt && _.normalScale.value.negate()),
        d.displacementMap && (_.displacementMap.value = d.displacementMap,
        t(d.displacementMap, _.displacementMapTransform),
        _.displacementScale.value = d.displacementScale,
        _.displacementBias.value = d.displacementBias),
        d.emissiveMap && (_.emissiveMap.value = d.emissiveMap,
        t(d.emissiveMap, _.emissiveMapTransform)),
        d.specularMap && (_.specularMap.value = d.specularMap,
        t(d.specularMap, _.specularMapTransform)),
        d.alphaTest > 0 && (_.alphaTest.value = d.alphaTest);
        const L = e.get(d)
          , U = L.envMap
          , C = L.envMapRotation;
        U && (_.envMap.value = U,
        mi.copy(C),
        mi.x *= -1,
        mi.y *= -1,
        mi.z *= -1,
        U.isCubeTexture && U.isRenderTargetTexture === !1 && (mi.y *= -1,
        mi.z *= -1),
        _.envMapRotation.value.setFromMatrix4(Bm.makeRotationFromEuler(mi)),
        _.flipEnvMap.value = U.isCubeTexture && U.isRenderTargetTexture === !1 ? -1 : 1,
        _.reflectivity.value = d.reflectivity,
        _.ior.value = d.ior,
        _.refractionRatio.value = d.refractionRatio),
        d.lightMap && (_.lightMap.value = d.lightMap,
        _.lightMapIntensity.value = d.lightMapIntensity,
        t(d.lightMap, _.lightMapTransform)),
        d.aoMap && (_.aoMap.value = d.aoMap,
        _.aoMapIntensity.value = d.aoMapIntensity,
        t(d.aoMap, _.aoMapTransform))
    }
    function o(_, d) {
        _.diffuse.value.copy(d.color),
        _.opacity.value = d.opacity,
        d.map && (_.map.value = d.map,
        t(d.map, _.mapTransform))
    }
    function l(_, d) {
        _.dashSize.value = d.dashSize,
        _.totalSize.value = d.dashSize + d.gapSize,
        _.scale.value = d.scale
    }
    function u(_, d, L, U) {
        _.diffuse.value.copy(d.color),
        _.opacity.value = d.opacity,
        _.size.value = d.size * L,
        _.scale.value = U * .5,
        d.map && (_.map.value = d.map,
        t(d.map, _.uvTransform)),
        d.alphaMap && (_.alphaMap.value = d.alphaMap,
        t(d.alphaMap, _.alphaMapTransform)),
        d.alphaTest > 0 && (_.alphaTest.value = d.alphaTest)
    }
    function f(_, d) {
        _.diffuse.value.copy(d.color),
        _.opacity.value = d.opacity,
        _.rotation.value = d.rotation,
        d.map && (_.map.value = d.map,
        t(d.map, _.mapTransform)),
        d.alphaMap && (_.alphaMap.value = d.alphaMap,
        t(d.alphaMap, _.alphaMapTransform)),
        d.alphaTest > 0 && (_.alphaTest.value = d.alphaTest)
    }
    function p(_, d) {
        _.specular.value.copy(d.specular),
        _.shininess.value = Math.max(d.shininess, 1e-4)
    }
    function m(_, d) {
        d.gradientMap && (_.gradientMap.value = d.gradientMap)
    }
    function g(_, d) {
        _.metalness.value = d.metalness,
        d.metalnessMap && (_.metalnessMap.value = d.metalnessMap,
        t(d.metalnessMap, _.metalnessMapTransform)),
        _.roughness.value = d.roughness,
        d.roughnessMap && (_.roughnessMap.value = d.roughnessMap,
        t(d.roughnessMap, _.roughnessMapTransform)),
        d.envMap && (_.envMapIntensity.value = d.envMapIntensity)
    }
    function S(_, d, L) {
        _.ior.value = d.ior,
        d.sheen > 0 && (_.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),
        _.sheenRoughness.value = d.sheenRoughness,
        d.sheenColorMap && (_.sheenColorMap.value = d.sheenColorMap,
        t(d.sheenColorMap, _.sheenColorMapTransform)),
        d.sheenRoughnessMap && (_.sheenRoughnessMap.value = d.sheenRoughnessMap,
        t(d.sheenRoughnessMap, _.sheenRoughnessMapTransform))),
        d.clearcoat > 0 && (_.clearcoat.value = d.clearcoat,
        _.clearcoatRoughness.value = d.clearcoatRoughness,
        d.clearcoatMap && (_.clearcoatMap.value = d.clearcoatMap,
        t(d.clearcoatMap, _.clearcoatMapTransform)),
        d.clearcoatRoughnessMap && (_.clearcoatRoughnessMap.value = d.clearcoatRoughnessMap,
        t(d.clearcoatRoughnessMap, _.clearcoatRoughnessMapTransform)),
        d.clearcoatNormalMap && (_.clearcoatNormalMap.value = d.clearcoatNormalMap,
        t(d.clearcoatNormalMap, _.clearcoatNormalMapTransform),
        _.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),
        d.side === Qt && _.clearcoatNormalScale.value.negate())),
        d.dispersion > 0 && (_.dispersion.value = d.dispersion),
        d.iridescence > 0 && (_.iridescence.value = d.iridescence,
        _.iridescenceIOR.value = d.iridescenceIOR,
        _.iridescenceThicknessMinimum.value = d.iridescenceThicknessRange[0],
        _.iridescenceThicknessMaximum.value = d.iridescenceThicknessRange[1],
        d.iridescenceMap && (_.iridescenceMap.value = d.iridescenceMap,
        t(d.iridescenceMap, _.iridescenceMapTransform)),
        d.iridescenceThicknessMap && (_.iridescenceThicknessMap.value = d.iridescenceThicknessMap,
        t(d.iridescenceThicknessMap, _.iridescenceThicknessMapTransform))),
        d.transmission > 0 && (_.transmission.value = d.transmission,
        _.transmissionSamplerMap.value = L.texture,
        _.transmissionSamplerSize.value.set(L.width, L.height),
        d.transmissionMap && (_.transmissionMap.value = d.transmissionMap,
        t(d.transmissionMap, _.transmissionMapTransform)),
        _.thickness.value = d.thickness,
        d.thicknessMap && (_.thicknessMap.value = d.thicknessMap,
        t(d.thicknessMap, _.thicknessMapTransform)),
        _.attenuationDistance.value = d.attenuationDistance,
        _.attenuationColor.value.copy(d.attenuationColor)),
        d.anisotropy > 0 && (_.anisotropyVector.value.set(d.anisotropy * Math.cos(d.anisotropyRotation), d.anisotropy * Math.sin(d.anisotropyRotation)),
        d.anisotropyMap && (_.anisotropyMap.value = d.anisotropyMap,
        t(d.anisotropyMap, _.anisotropyMapTransform))),
        _.specularIntensity.value = d.specularIntensity,
        _.specularColor.value.copy(d.specularColor),
        d.specularColorMap && (_.specularColorMap.value = d.specularColorMap,
        t(d.specularColorMap, _.specularColorMapTransform)),
        d.specularIntensityMap && (_.specularIntensityMap.value = d.specularIntensityMap,
        t(d.specularIntensityMap, _.specularIntensityMapTransform))
    }
    function E(_, d) {
        d.matcap && (_.matcap.value = d.matcap)
    }
    function A(_, d) {
        const L = e.get(d).light;
        _.referencePosition.value.setFromMatrixPosition(L.matrixWorld),
        _.nearDistance.value = L.shadow.camera.near,
        _.farDistance.value = L.shadow.camera.far
    }
    return {
        refreshFogUniforms: n,
        refreshMaterialUniforms: r
    }
}
function Vm(i, e, t, n) {
    let r = {}
      , a = {}
      , o = [];
    const l = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
    function u(L, U) {
        const C = U.program;
        n.uniformBlockBinding(L, C)
    }
    function f(L, U) {
        let C = r[L.id];
        C === void 0 && (E(L),
        C = p(L),
        r[L.id] = C,
        L.addEventListener("dispose", _));
        const I = U.program;
        n.updateUBOMapping(L, I);
        const O = e.render.frame;
        a[L.id] !== O && (g(L),
        a[L.id] = O)
    }
    function p(L) {
        const U = m();
        L.__bindingPointIndex = U;
        const C = i.createBuffer()
          , I = L.__size
          , O = L.usage;
        return i.bindBuffer(i.UNIFORM_BUFFER, C),
        i.bufferData(i.UNIFORM_BUFFER, I, O),
        i.bindBuffer(i.UNIFORM_BUFFER, null),
        i.bindBufferBase(i.UNIFORM_BUFFER, U, C),
        C
    }
    function m() {
        for (let L = 0; L < l; L++)
            if (o.indexOf(L) === -1)
                return o.push(L),
                L;
        return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
        0
    }
    function g(L) {
        const U = r[L.id]
          , C = L.uniforms
          , I = L.__cache;
        i.bindBuffer(i.UNIFORM_BUFFER, U);
        for (let O = 0, N = C.length; O < N; O++) {
            const Y = Array.isArray(C[O]) ? C[O] : [C[O]];
            for (let T = 0, v = Y.length; T < v; T++) {
                const b = Y[T];
                if (S(b, O, T, I) === !0) {
                    const X = b.__offset
                      , G = Array.isArray(b.value) ? b.value : [b.value];
                    let J = 0;
                    for (let Q = 0; Q < G.length; Q++) {
                        const B = G[Q]
                          , H = A(B);
                        typeof B == "number" || typeof B == "boolean" ? (b.__data[0] = B,
                        i.bufferSubData(i.UNIFORM_BUFFER, X + J, b.__data)) : B.isMatrix3 ? (b.__data[0] = B.elements[0],
                        b.__data[1] = B.elements[1],
                        b.__data[2] = B.elements[2],
                        b.__data[3] = 0,
                        b.__data[4] = B.elements[3],
                        b.__data[5] = B.elements[4],
                        b.__data[6] = B.elements[5],
                        b.__data[7] = 0,
                        b.__data[8] = B.elements[6],
                        b.__data[9] = B.elements[7],
                        b.__data[10] = B.elements[8],
                        b.__data[11] = 0) : (B.toArray(b.__data, J),
                        J += H.storage / Float32Array.BYTES_PER_ELEMENT)
                    }
                    i.bufferSubData(i.UNIFORM_BUFFER, X, b.__data)
                }
            }
        }
        i.bindBuffer(i.UNIFORM_BUFFER, null)
    }
    function S(L, U, C, I) {
        const O = L.value
          , N = U + "_" + C;
        if (I[N] === void 0)
            return typeof O == "number" || typeof O == "boolean" ? I[N] = O : I[N] = O.clone(),
            !0;
        {
            const Y = I[N];
            if (typeof O == "number" || typeof O == "boolean") {
                if (Y !== O)
                    return I[N] = O,
                    !0
            } else if (Y.equals(O) === !1)
                return Y.copy(O),
                !0
        }
        return !1
    }
    function E(L) {
        const U = L.uniforms;
        let C = 0;
        const I = 16;
        for (let N = 0, Y = U.length; N < Y; N++) {
            const T = Array.isArray(U[N]) ? U[N] : [U[N]];
            for (let v = 0, b = T.length; v < b; v++) {
                const X = T[v]
                  , G = Array.isArray(X.value) ? X.value : [X.value];
                for (let J = 0, Q = G.length; J < Q; J++) {
                    const B = G[J]
                      , H = A(B)
                      , ee = C % I
                      , ue = ee % H.boundary
                      , fe = ee + ue;
                    C += ue,
                    fe !== 0 && I - fe < H.storage && (C += I - fe),
                    X.__data = new Float32Array(H.storage / Float32Array.BYTES_PER_ELEMENT),
                    X.__offset = C,
                    C += H.storage
                }
            }
        }
        const O = C % I;
        return O > 0 && (C += I - O),
        L.__size = C,
        L.__cache = {},
        this
    }
    function A(L) {
        const U = {
            boundary: 0,
            storage: 0
        };
        return typeof L == "number" || typeof L == "boolean" ? (U.boundary = 4,
        U.storage = 4) : L.isVector2 ? (U.boundary = 8,
        U.storage = 8) : L.isVector3 || L.isColor ? (U.boundary = 16,
        U.storage = 12) : L.isVector4 ? (U.boundary = 16,
        U.storage = 16) : L.isMatrix3 ? (U.boundary = 48,
        U.storage = 48) : L.isMatrix4 ? (U.boundary = 64,
        U.storage = 64) : L.isTexture ? je("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : je("WebGLRenderer: Unsupported uniform value type.", L),
        U
    }
    function _(L) {
        const U = L.target;
        U.removeEventListener("dispose", _);
        const C = o.indexOf(U.__bindingPointIndex);
        o.splice(C, 1),
        i.deleteBuffer(r[U.id]),
        delete r[U.id],
        delete a[U.id]
    }
    function d() {
        for (const L in r)
            i.deleteBuffer(r[L]);
        o = [],
        r = {},
        a = {}
    }
    return {
        bind: u,
        update: f,
        dispose: d
    }
}
const Gm = new Uint16Array([12469, 15057, 12620, 14925, 13266, 14620, 13807, 14376, 14323, 13990, 14545, 13625, 14713, 13328, 14840, 12882, 14931, 12528, 14996, 12233, 15039, 11829, 15066, 11525, 15080, 11295, 15085, 10976, 15082, 10705, 15073, 10495, 13880, 14564, 13898, 14542, 13977, 14430, 14158, 14124, 14393, 13732, 14556, 13410, 14702, 12996, 14814, 12596, 14891, 12291, 14937, 11834, 14957, 11489, 14958, 11194, 14943, 10803, 14921, 10506, 14893, 10278, 14858, 9960, 14484, 14039, 14487, 14025, 14499, 13941, 14524, 13740, 14574, 13468, 14654, 13106, 14743, 12678, 14818, 12344, 14867, 11893, 14889, 11509, 14893, 11180, 14881, 10751, 14852, 10428, 14812, 10128, 14765, 9754, 14712, 9466, 14764, 13480, 14764, 13475, 14766, 13440, 14766, 13347, 14769, 13070, 14786, 12713, 14816, 12387, 14844, 11957, 14860, 11549, 14868, 11215, 14855, 10751, 14825, 10403, 14782, 10044, 14729, 9651, 14666, 9352, 14599, 9029, 14967, 12835, 14966, 12831, 14963, 12804, 14954, 12723, 14936, 12564, 14917, 12347, 14900, 11958, 14886, 11569, 14878, 11247, 14859, 10765, 14828, 10401, 14784, 10011, 14727, 9600, 14660, 9289, 14586, 8893, 14508, 8533, 15111, 12234, 15110, 12234, 15104, 12216, 15092, 12156, 15067, 12010, 15028, 11776, 14981, 11500, 14942, 11205, 14902, 10752, 14861, 10393, 14812, 9991, 14752, 9570, 14682, 9252, 14603, 8808, 14519, 8445, 14431, 8145, 15209, 11449, 15208, 11451, 15202, 11451, 15190, 11438, 15163, 11384, 15117, 11274, 15055, 10979, 14994, 10648, 14932, 10343, 14871, 9936, 14803, 9532, 14729, 9218, 14645, 8742, 14556, 8381, 14461, 8020, 14365, 7603, 15273, 10603, 15272, 10607, 15267, 10619, 15256, 10631, 15231, 10614, 15182, 10535, 15118, 10389, 15042, 10167, 14963, 9787, 14883, 9447, 14800, 9115, 14710, 8665, 14615, 8318, 14514, 7911, 14411, 7507, 14279, 7198, 15314, 9675, 15313, 9683, 15309, 9712, 15298, 9759, 15277, 9797, 15229, 9773, 15166, 9668, 15084, 9487, 14995, 9274, 14898, 8910, 14800, 8539, 14697, 8234, 14590, 7790, 14479, 7409, 14367, 7067, 14178, 6621, 15337, 8619, 15337, 8631, 15333, 8677, 15325, 8769, 15305, 8871, 15264, 8940, 15202, 8909, 15119, 8775, 15022, 8565, 14916, 8328, 14804, 8009, 14688, 7614, 14569, 7287, 14448, 6888, 14321, 6483, 14088, 6171, 15350, 7402, 15350, 7419, 15347, 7480, 15340, 7613, 15322, 7804, 15287, 7973, 15229, 8057, 15148, 8012, 15046, 7846, 14933, 7611, 14810, 7357, 14682, 7069, 14552, 6656, 14421, 6316, 14251, 5948, 14007, 5528, 15356, 5942, 15356, 5977, 15353, 6119, 15348, 6294, 15332, 6551, 15302, 6824, 15249, 7044, 15171, 7122, 15070, 7050, 14949, 6861, 14818, 6611, 14679, 6349, 14538, 6067, 14398, 5651, 14189, 5311, 13935, 4958, 15359, 4123, 15359, 4153, 15356, 4296, 15353, 4646, 15338, 5160, 15311, 5508, 15263, 5829, 15188, 6042, 15088, 6094, 14966, 6001, 14826, 5796, 14678, 5543, 14527, 5287, 14377, 4985, 14133, 4586, 13869, 4257, 15360, 1563, 15360, 1642, 15358, 2076, 15354, 2636, 15341, 3350, 15317, 4019, 15273, 4429, 15203, 4732, 15105, 4911, 14981, 4932, 14836, 4818, 14679, 4621, 14517, 4386, 14359, 4156, 14083, 3795, 13808, 3437, 15360, 122, 15360, 137, 15358, 285, 15355, 636, 15344, 1274, 15322, 2177, 15281, 2765, 15215, 3223, 15120, 3451, 14995, 3569, 14846, 3567, 14681, 3466, 14511, 3305, 14344, 3121, 14037, 2800, 13753, 2467, 15360, 0, 15360, 1, 15359, 21, 15355, 89, 15346, 253, 15325, 479, 15287, 796, 15225, 1148, 15133, 1492, 15008, 1749, 14856, 1882, 14685, 1886, 14506, 1783, 14324, 1608, 13996, 1398, 13702, 1183]);
let En = null;
function Hm() {
    return En === null && (En = new Ou(Gm,16,16,Wi,kn),
    En.name = "DFG_LUT",
    En.minFilter = qt,
    En.magFilter = qt,
    En.wrapS = zn,
    En.wrapT = zn,
    En.generateMipmaps = !1,
    En.needsUpdate = !0),
    En
}
class km {
    constructor(e={}) {
        const {canvas: t=uu(), context: n=null, depth: r=!0, stencil: a=!1, alpha: o=!1, antialias: l=!1, premultipliedAlpha: u=!0, preserveDrawingBuffer: f=!1, powerPreference: p="default", failIfMajorPerformanceCaveat: m=!1, reversedDepthBuffer: g=!1, outputBufferType: S=hn} = e;
        this.isWebGLRenderer = !0;
        let E;
        if (n !== null) {
            if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
                throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
            E = n.getContextAttributes().alpha
        } else
            E = o;
        const A = S
          , _ = new Set([$a, Za, Ka])
          , d = new Set([hn, Cn, ur, fr, Ya, ja])
          , L = new Uint32Array(4)
          , U = new Int32Array(4);
        let C = null
          , I = null;
        const O = []
          , N = [];
        let Y = null;
        this.domElement = t,
        this.debug = {
            checkShaderErrors: !0,
            onShaderError: null
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this.toneMapping = wn,
        this.toneMappingExposure = 1,
        this.transmissionResolutionScale = 1;
        const T = this;
        let v = !1;
        this._outputColorSpace = un;
        let b = 0
          , X = 0
          , G = null
          , J = -1
          , Q = null;
        const B = new Rt
          , H = new Rt;
        let ee = null;
        const ue = new vt(0);
        let fe = 0
          , Ee = t.width
          , Ve = t.height
          , Ge = 1
          , ht = null
          , ot = null;
        const ie = new Rt(0,0,Ee,Ve)
          , ae = new Rt(0,0,Ee,Ve);
        let we = !1;
        const Ye = new ql;
        let Pe = !1
          , tt = !1;
        const Pt = new Ct
          , Be = new $
          , qe = new Rt
          , dt = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        let Ze = !1;
        function bt() {
            return G === null ? Ge : 1
        }
        let F = n;
        function wt(y, W) {
            return t.getContext(y, W)
        }
        try {
            const y = {
                alpha: !0,
                depth: r,
                stencil: a,
                antialias: l,
                premultipliedAlpha: u,
                preserveDrawingBuffer: f,
                powerPreference: p,
                failIfMajorPerformanceCaveat: m
            };
            if ("setAttribute"in t && t.setAttribute("data-engine", `three.js r${Xa}`),
            t.addEventListener("webglcontextlost", ke, !1),
            t.addEventListener("webglcontextrestored", gt, !1),
            t.addEventListener("webglcontextcreationerror", rt, !1),
            F === null) {
                const W = "webgl2";
                if (F = wt(W, y),
                F === null)
                    throw wt(W) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
        } catch (y) {
            throw ut("WebGLRenderer: " + y.message),
            y
        }
        let st, mt, De, R, x, k, ne, se, te, Ue, _e, Le, He, oe, pe, Re, Ie, me, Ke, z, xe, he, Ae, le;
        function re() {
            st = new Hd(F),
            st.init(),
            he = new Um(F,st),
            mt = new Ud(F,st,e,he),
            De = new Dm(F,st),
            mt.reversedDepthBuffer && g && De.buffers.depth.setReversed(!0),
            R = new Xd(F),
            x = new gm,
            k = new Lm(F,st,De,x,mt,he,R),
            ne = new Nd(T),
            se = new Gd(T),
            te = new ju(F),
            Ae = new Dd(F,te),
            Ue = new kd(F,te,R,Ae),
            _e = new Yd(F,Ue,te,R),
            Ke = new qd(F,mt,k),
            Re = new Id(x),
            Le = new mm(T,ne,se,st,mt,Ae,Re),
            He = new zm(T,x),
            oe = new vm,
            pe = new Tm(st),
            me = new Pd(T,ne,se,De,_e,E,u),
            Ie = new Cm(T,_e,mt),
            le = new Vm(F,R,mt,De),
            z = new Ld(F,st,R),
            xe = new Wd(F,st,R),
            R.programs = Le.programs,
            T.capabilities = mt,
            T.extensions = st,
            T.properties = x,
            T.renderLists = oe,
            T.shadowMap = Ie,
            T.state = De,
            T.info = R
        }
        re(),
        A !== hn && (Y = new Kd(A,t.width,t.height,r,a));
        const de = new Om(T,F);
        this.xr = de,
        this.getContext = function() {
            return F
        }
        ,
        this.getContextAttributes = function() {
            return F.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            const y = st.get("WEBGL_lose_context");
            y && y.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            const y = st.get("WEBGL_lose_context");
            y && y.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return Ge
        }
        ,
        this.setPixelRatio = function(y) {
            y !== void 0 && (Ge = y,
            this.setSize(Ee, Ve, !1))
        }
        ,
        this.getSize = function(y) {
            return y.set(Ee, Ve)
        }
        ,
        this.setSize = function(y, W, K=!0) {
            if (de.isPresenting) {
                je("WebGLRenderer: Can't change size while VR device is presenting.");
                return
            }
            Ee = y,
            Ve = W,
            t.width = Math.floor(y * Ge),
            t.height = Math.floor(W * Ge),
            K === !0 && (t.style.width = y + "px",
            t.style.height = W + "px"),
            Y !== null && Y.setSize(t.width, t.height),
            this.setViewport(0, 0, y, W)
        }
        ,
        this.getDrawingBufferSize = function(y) {
            return y.set(Ee * Ge, Ve * Ge).floor()
        }
        ,
        this.setDrawingBufferSize = function(y, W, K) {
            Ee = y,
            Ve = W,
            Ge = K,
            t.width = Math.floor(y * K),
            t.height = Math.floor(W * K),
            this.setViewport(0, 0, y, W)
        }
        ,
        this.setEffects = function(y) {
            if (A === hn) {
                console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
                return
            }
            if (y) {
                for (let W = 0; W < y.length; W++)
                    if (y[W].isOutputPass === !0) {
                        console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
                        break
                    }
            }
            Y.setEffects(y || [])
        }
        ,
        this.getCurrentViewport = function(y) {
            return y.copy(B)
        }
        ,
        this.getViewport = function(y) {
            return y.copy(ie)
        }
        ,
        this.setViewport = function(y, W, K, j) {
            y.isVector4 ? ie.set(y.x, y.y, y.z, y.w) : ie.set(y, W, K, j),
            De.viewport(B.copy(ie).multiplyScalar(Ge).round())
        }
        ,
        this.getScissor = function(y) {
            return y.copy(ae)
        }
        ,
        this.setScissor = function(y, W, K, j) {
            y.isVector4 ? ae.set(y.x, y.y, y.z, y.w) : ae.set(y, W, K, j),
            De.scissor(H.copy(ae).multiplyScalar(Ge).round())
        }
        ,
        this.getScissorTest = function() {
            return we
        }
        ,
        this.setScissorTest = function(y) {
            De.setScissorTest(we = y)
        }
        ,
        this.setOpaqueSort = function(y) {
            ht = y
        }
        ,
        this.setTransparentSort = function(y) {
            ot = y
        }
        ,
        this.getClearColor = function(y) {
            return y.copy(me.getClearColor())
        }
        ,
        this.setClearColor = function() {
            me.setClearColor(...arguments)
        }
        ,
        this.getClearAlpha = function() {
            return me.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            me.setClearAlpha(...arguments)
        }
        ,
        this.clear = function(y=!0, W=!0, K=!0) {
            let j = 0;
            if (y) {
                let q = !1;
                if (G !== null) {
                    const ge = G.texture.format;
                    q = _.has(ge)
                }
                if (q) {
                    const ge = G.texture.type
                      , Se = d.has(ge)
                      , Me = me.getClearColor()
                      , Ce = me.getClearAlpha()
                      , Ne = Me.r
                      , ze = Me.g
                      , Oe = Me.b;
                    Se ? (L[0] = Ne,
                    L[1] = ze,
                    L[2] = Oe,
                    L[3] = Ce,
                    F.clearBufferuiv(F.COLOR, 0, L)) : (U[0] = Ne,
                    U[1] = ze,
                    U[2] = Oe,
                    U[3] = Ce,
                    F.clearBufferiv(F.COLOR, 0, U))
                } else
                    j |= F.COLOR_BUFFER_BIT
            }
            W && (j |= F.DEPTH_BUFFER_BIT),
            K && (j |= F.STENCIL_BUFFER_BIT,
            this.state.buffers.stencil.setMask(4294967295)),
            F.clear(j)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            t.removeEventListener("webglcontextlost", ke, !1),
            t.removeEventListener("webglcontextrestored", gt, !1),
            t.removeEventListener("webglcontextcreationerror", rt, !1),
            me.dispose(),
            oe.dispose(),
            pe.dispose(),
            x.dispose(),
            ne.dispose(),
            se.dispose(),
            _e.dispose(),
            Ae.dispose(),
            le.dispose(),
            Le.dispose(),
            de.dispose(),
            de.removeEventListener("sessionstart", Ki),
            de.removeEventListener("sessionend", At),
            Nt.stop()
        }
        ;
        function ke(y) {
            y.preventDefault(),
            wo("WebGLRenderer: Context Lost."),
            v = !0
        }
        function gt() {
            wo("WebGLRenderer: Context Restored."),
            v = !1;
            const y = R.autoReset
              , W = Ie.enabled
              , K = Ie.autoUpdate
              , j = Ie.needsUpdate
              , q = Ie.type;
            re(),
            R.autoReset = y,
            Ie.enabled = W,
            Ie.autoUpdate = K,
            Ie.needsUpdate = j,
            Ie.type = q
        }
        function rt(y) {
            ut("WebGLRenderer: A WebGL context could not be created. Reason: ", y.statusMessage)
        }
        function Yt(y) {
            const W = y.target;
            W.removeEventListener("dispose", Yt),
            dn(W)
        }
        function dn(y) {
            Yn(y),
            x.remove(y)
        }
        function Yn(y) {
            const W = x.get(y).programs;
            W !== void 0 && (W.forEach(function(K) {
                Le.releaseProgram(K)
            }),
            y.isShaderMaterial && Le.releaseShaderCache(y))
        }
        this.renderBufferDirect = function(y, W, K, j, q, ge) {
            W === null && (W = dt);
            const Se = q.isMesh && q.matrixWorld.determinant() < 0
              , Me = $i(y, W, K, j, q);
            De.setMaterial(j, Se);
            let Ce = K.index
              , Ne = 1;
            if (j.wireframe === !0) {
                if (Ce = Ue.getWireframeAttribute(K),
                Ce === void 0)
                    return;
                Ne = 2
            }
            const ze = K.drawRange
              , Oe = K.attributes.position;
            let Je = ze.start * Ne
              , ft = (ze.start + ze.count) * Ne;
            ge !== null && (Je = Math.max(Je, ge.start * Ne),
            ft = Math.min(ft, (ge.start + ge.count) * Ne)),
            Ce !== null ? (Je = Math.max(Je, 0),
            ft = Math.min(ft, Ce.count)) : Oe != null && (Je = Math.max(Je, 0),
            ft = Math.min(ft, Oe.count));
            const yt = ft - Je;
            if (yt < 0 || yt === 1 / 0)
                return;
            Ae.setup(q, j, Me, K, Ce);
            let Et, pt = z;
            if (Ce !== null && (Et = te.get(Ce),
            pt = xe,
            pt.setIndex(Et)),
            q.isMesh)
                j.wireframe === !0 ? (De.setLineWidth(j.wireframeLinewidth * bt()),
                pt.setMode(F.LINES)) : pt.setMode(F.TRIANGLES);
            else if (q.isLine) {
                let be = j.linewidth;
                be === void 0 && (be = 1),
                De.setLineWidth(be * bt()),
                q.isLineSegments ? pt.setMode(F.LINES) : q.isLineLoop ? pt.setMode(F.LINE_LOOP) : pt.setMode(F.LINE_STRIP)
            } else
                q.isPoints ? pt.setMode(F.POINTS) : q.isSprite && pt.setMode(F.TRIANGLES);
            if (q.isBatchedMesh)
                if (q._multiDrawInstances !== null)
                    hr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),
                    pt.renderMultiDrawInstances(q._multiDrawStarts, q._multiDrawCounts, q._multiDrawCount, q._multiDrawInstances);
                else if (st.get("WEBGL_multi_draw"))
                    pt.renderMultiDraw(q._multiDrawStarts, q._multiDrawCounts, q._multiDrawCount);
                else {
                    const be = q._multiDrawStarts
                      , lt = q._multiDrawCounts
                      , nt = q._multiDrawCount
                      , Ft = Ce ? te.get(Ce).bytesPerElement : 1
                      , Ln = x.get(j).currentProgram.getUniforms();
                    for (let kt = 0; kt < nt; kt++)
                        Ln.setValue(F, "_gl_DrawID", kt),
                        pt.render(be[kt] / Ft, lt[kt])
                }
            else if (q.isInstancedMesh)
                pt.renderInstances(Je, yt, q.count);
            else if (K.isInstancedBufferGeometry) {
                const be = K._maxInstanceCount !== void 0 ? K._maxInstanceCount : 1 / 0
                  , lt = Math.min(K.instanceCount, be);
                pt.renderInstances(Je, yt, lt)
            } else
                pt.render(Je, yt)
        }
        ;
        function xr(y, W, K) {
            y.transparent === !0 && y.side === Bn && y.forceSinglePass === !1 ? (y.side = Qt,
            y.needsUpdate = !0,
            yn(y, W, K),
            y.side = ri,
            y.needsUpdate = !0,
            yn(y, W, K),
            y.side = Bn) : yn(y, W, K)
        }
        this.compile = function(y, W, K=null) {
            K === null && (K = y),
            I = pe.get(K),
            I.init(W),
            N.push(I),
            K.traverseVisible(function(q) {
                q.isLight && q.layers.test(W.layers) && (I.pushLight(q),
                q.castShadow && I.pushShadow(q))
            }),
            y !== K && y.traverseVisible(function(q) {
                q.isLight && q.layers.test(W.layers) && (I.pushLight(q),
                q.castShadow && I.pushShadow(q))
            }),
            I.setupLights();
            const j = new Set;
            return y.traverse(function(q) {
                if (!(q.isMesh || q.isPoints || q.isLine || q.isSprite))
                    return;
                const ge = q.material;
                if (ge)
                    if (Array.isArray(ge))
                        for (let Se = 0; Se < ge.length; Se++) {
                            const Me = ge[Se];
                            xr(Me, K, q),
                            j.add(Me)
                        }
                    else
                        xr(ge, K, q),
                        j.add(ge)
            }),
            I = N.pop(),
            j
        }
        ,
        this.compileAsync = function(y, W, K=null) {
            const j = this.compile(y, W, K);
            return new Promise(q => {
                function ge() {
                    if (j.forEach(function(Se) {
                        x.get(Se).currentProgram.isReady() && j.delete(Se)
                    }),
                    j.size === 0) {
                        q(y);
                        return
                    }
                    setTimeout(ge, 10)
                }
                st.get("KHR_parallel_shader_compile") !== null ? ge() : setTimeout(ge, 10)
            }
            )
        }
        ;
        let tn = null;
        function Dn(y) {
            tn && tn(y)
        }
        function Ki() {
            Nt.stop()
        }
        function At() {
            Nt.start()
        }
        const Nt = new Zl;
        Nt.setAnimationLoop(Dn),
        typeof self < "u" && Nt.setContext(self),
        this.setAnimationLoop = function(y) {
            tn = y,
            de.setAnimationLoop(y),
            y === null ? Nt.stop() : Nt.start()
        }
        ,
        de.addEventListener("sessionstart", Ki),
        de.addEventListener("sessionend", At),
        this.render = function(y, W) {
            if (W !== void 0 && W.isCamera !== !0) {
                ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                return
            }
            if (v === !0)
                return;
            const K = de.enabled === !0 && de.isPresenting === !0
              , j = Y !== null && (G === null || K) && Y.begin(T, G);
            if (y.matrixWorldAutoUpdate === !0 && y.updateMatrixWorld(),
            W.parent === null && W.matrixWorldAutoUpdate === !0 && W.updateMatrixWorld(),
            de.enabled === !0 && de.isPresenting === !0 && (Y === null || Y.isCompositing() === !1) && (de.cameraAutoUpdate === !0 && de.updateCamera(W),
            W = de.getCamera()),
            y.isScene === !0 && y.onBeforeRender(T, y, W, G),
            I = pe.get(y, N.length),
            I.init(W),
            N.push(I),
            Pt.multiplyMatrices(W.projectionMatrix, W.matrixWorldInverse),
            Ye.setFromProjectionMatrix(Pt, bn, W.reversedDepth),
            tt = this.localClippingEnabled,
            Pe = Re.init(this.clippingPlanes, tt),
            C = oe.get(y, O.length),
            C.init(),
            O.push(C),
            de.enabled === !0 && de.isPresenting === !0) {
                const Se = T.xr.getDepthSensingMesh();
                Se !== null && si(Se, W, -1 / 0, T.sortObjects)
            }
            si(y, W, 0, T.sortObjects),
            C.finish(),
            T.sortObjects === !0 && C.sort(ht, ot),
            Ze = de.enabled === !1 || de.isPresenting === !1 || de.hasDepthSensing() === !1,
            Ze && me.addToRenderList(C, y),
            this.info.render.frame++,
            Pe === !0 && Re.beginShadows();
            const q = I.state.shadowsArray;
            if (Ie.render(q, y, W),
            Pe === !0 && Re.endShadows(),
            this.info.autoReset === !0 && this.info.reset(),
            (j && Y.hasRenderPass()) === !1) {
                const Se = C.opaque
                  , Me = C.transmissive;
                if (I.setupLights(),
                W.isArrayCamera) {
                    const Ce = W.cameras;
                    if (Me.length > 0)
                        for (let Ne = 0, ze = Ce.length; Ne < ze; Ne++) {
                            const Oe = Ce[Ne];
                            ai(Se, Me, y, Oe)
                        }
                    Ze && me.render(y);
                    for (let Ne = 0, ze = Ce.length; Ne < ze; Ne++) {
                        const Oe = Ce[Ne];
                        Mr(C, y, Oe, Oe.viewport)
                    }
                } else
                    Me.length > 0 && ai(Se, Me, y, W),
                    Ze && me.render(y),
                    Mr(C, y, W)
            }
            G !== null && X === 0 && (k.updateMultisampleRenderTarget(G),
            k.updateRenderTargetMipmap(G)),
            j && Y.end(T),
            y.isScene === !0 && y.onAfterRender(T, y, W),
            Ae.resetDefaultState(),
            J = -1,
            Q = null,
            N.pop(),
            N.length > 0 ? (I = N[N.length - 1],
            Pe === !0 && Re.setGlobalState(T.clippingPlanes, I.state.camera)) : I = null,
            O.pop(),
            O.length > 0 ? C = O[O.length - 1] : C = null
        }
        ;
        function si(y, W, K, j) {
            if (y.visible === !1)
                return;
            if (y.layers.test(W.layers)) {
                if (y.isGroup)
                    K = y.renderOrder;
                else if (y.isLOD)
                    y.autoUpdate === !0 && y.update(W);
                else if (y.isLight)
                    I.pushLight(y),
                    y.castShadow && I.pushShadow(y);
                else if (y.isSprite) {
                    if (!y.frustumCulled || Ye.intersectsSprite(y)) {
                        j && qe.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Pt);
                        const Se = _e.update(y)
                          , Me = y.material;
                        Me.visible && C.push(y, Se, Me, K, qe.z, null)
                    }
                } else if ((y.isMesh || y.isLine || y.isPoints) && (!y.frustumCulled || Ye.intersectsObject(y))) {
                    const Se = _e.update(y)
                      , Me = y.material;
                    if (j && (y.boundingSphere !== void 0 ? (y.boundingSphere === null && y.computeBoundingSphere(),
                    qe.copy(y.boundingSphere.center)) : (Se.boundingSphere === null && Se.computeBoundingSphere(),
                    qe.copy(Se.boundingSphere.center)),
                    qe.applyMatrix4(y.matrixWorld).applyMatrix4(Pt)),
                    Array.isArray(Me)) {
                        const Ce = Se.groups;
                        for (let Ne = 0, ze = Ce.length; Ne < ze; Ne++) {
                            const Oe = Ce[Ne]
                              , Je = Me[Oe.materialIndex];
                            Je && Je.visible && C.push(y, Se, Je, K, qe.z, Oe)
                        }
                    } else
                        Me.visible && C.push(y, Se, Me, K, qe.z, null)
                }
            }
            const ge = y.children;
            for (let Se = 0, Me = ge.length; Se < Me; Se++)
                si(ge[Se], W, K, j)
        }
        function Mr(y, W, K, j) {
            const {opaque: q, transmissive: ge, transparent: Se} = y;
            I.setupLightsView(K),
            Pe === !0 && Re.setGlobalState(T.clippingPlanes, K),
            j && De.viewport(B.copy(j)),
            q.length > 0 && jn(q, W, K),
            ge.length > 0 && jn(ge, W, K),
            Se.length > 0 && jn(Se, W, K),
            De.buffers.depth.setTest(!0),
            De.buffers.depth.setMask(!0),
            De.buffers.color.setMask(!0),
            De.setPolygonOffset(!1)
        }
        function ai(y, W, K, j) {
            if ((K.isScene === !0 ? K.overrideMaterial : null) !== null)
                return;
            if (I.state.transmissionRenderTarget[j.id] === void 0) {
                const Je = st.has("EXT_color_buffer_half_float") || st.has("EXT_color_buffer_float");
                I.state.transmissionRenderTarget[j.id] = new Rn(1,1,{
                    generateMipmaps: !0,
                    type: Je ? kn : hn,
                    minFilter: xi,
                    samples: mt.samples,
                    stencilBuffer: a,
                    resolveDepthBuffer: !1,
                    resolveStencilBuffer: !1,
                    colorSpace: at.workingColorSpace
                })
            }
            const ge = I.state.transmissionRenderTarget[j.id]
              , Se = j.viewport || B;
            ge.setSize(Se.z * T.transmissionResolutionScale, Se.w * T.transmissionResolutionScale);
            const Me = T.getRenderTarget()
              , Ce = T.getActiveCubeFace()
              , Ne = T.getActiveMipmapLevel();
            T.setRenderTarget(ge),
            T.getClearColor(ue),
            fe = T.getClearAlpha(),
            fe < 1 && T.setClearColor(16777215, .5),
            T.clear(),
            Ze && me.render(K);
            const ze = T.toneMapping;
            T.toneMapping = wn;
            const Oe = j.viewport;
            if (j.viewport !== void 0 && (j.viewport = void 0),
            I.setupLightsView(j),
            Pe === !0 && Re.setGlobalState(T.clippingPlanes, j),
            jn(y, K, j),
            k.updateMultisampleRenderTarget(ge),
            k.updateRenderTargetMipmap(ge),
            st.has("WEBGL_multisampled_render_to_texture") === !1) {
                let Je = !1;
                for (let ft = 0, yt = W.length; ft < yt; ft++) {
                    const Et = W[ft]
                      , {object: pt, geometry: be, material: lt, group: nt} = Et;
                    if (lt.side === Bn && pt.layers.test(j.layers)) {
                        const Ft = lt.side;
                        lt.side = Qt,
                        lt.needsUpdate = !0,
                        oi(pt, K, j, be, lt, nt),
                        lt.side = Ft,
                        lt.needsUpdate = !0,
                        Je = !0
                    }
                }
                Je === !0 && (k.updateMultisampleRenderTarget(ge),
                k.updateRenderTargetMipmap(ge))
            }
            T.setRenderTarget(Me, Ce, Ne),
            T.setClearColor(ue, fe),
            Oe !== void 0 && (j.viewport = Oe),
            T.toneMapping = ze
        }
        function jn(y, W, K) {
            const j = W.isScene === !0 ? W.overrideMaterial : null;
            for (let q = 0, ge = y.length; q < ge; q++) {
                const Se = y[q]
                  , {object: Me, geometry: Ce, group: Ne} = Se;
                let ze = Se.material;
                ze.allowOverride === !0 && j !== null && (ze = j),
                Me.layers.test(K.layers) && oi(Me, W, K, Ce, ze, Ne)
            }
        }
        function oi(y, W, K, j, q, ge) {
            y.onBeforeRender(T, W, K, j, q, ge),
            y.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse, y.matrixWorld),
            y.normalMatrix.getNormalMatrix(y.modelViewMatrix),
            q.onBeforeRender(T, W, K, j, y, ge),
            q.transparent === !0 && q.side === Bn && q.forceSinglePass === !1 ? (q.side = Qt,
            q.needsUpdate = !0,
            T.renderBufferDirect(K, W, j, q, y, ge),
            q.side = ri,
            q.needsUpdate = !0,
            T.renderBufferDirect(K, W, j, q, y, ge),
            q.side = Bn) : T.renderBufferDirect(K, W, j, q, y, ge),
            y.onAfterRender(T, W, K, j, q, ge)
        }
        function yn(y, W, K) {
            W.isScene !== !0 && (W = dt);
            const j = x.get(y)
              , q = I.state.lights
              , ge = I.state.shadowsArray
              , Se = q.state.version
              , Me = Le.getParameters(y, q.state, ge, W, K)
              , Ce = Le.getProgramCacheKey(Me);
            let Ne = j.programs;
            j.environment = y.isMeshStandardMaterial ? W.environment : null,
            j.fog = W.fog,
            j.envMap = (y.isMeshStandardMaterial ? se : ne).get(y.envMap || j.environment),
            j.envMapRotation = j.environment !== null && y.envMap === null ? W.environmentRotation : y.envMapRotation,
            Ne === void 0 && (y.addEventListener("dispose", Yt),
            Ne = new Map,
            j.programs = Ne);
            let ze = Ne.get(Ce);
            if (ze !== void 0) {
                if (j.currentProgram === ze && j.lightsStateVersion === Se)
                    return yi(y, Me),
                    ze
            } else
                Me.uniforms = Le.getUniforms(y),
                y.onBeforeCompile(Me, T),
                ze = Le.acquireProgram(Me, Ce),
                Ne.set(Ce, ze),
                j.uniforms = Me.uniforms;
            const Oe = j.uniforms;
            return (!y.isShaderMaterial && !y.isRawShaderMaterial || y.clipping === !0) && (Oe.clippingPlanes = Re.uniform),
            yi(y, Me),
            j.needsLights = nn(y),
            j.lightsStateVersion = Se,
            j.needsLights && (Oe.ambientLightColor.value = q.state.ambient,
            Oe.lightProbe.value = q.state.probe,
            Oe.directionalLights.value = q.state.directional,
            Oe.directionalLightShadows.value = q.state.directionalShadow,
            Oe.spotLights.value = q.state.spot,
            Oe.spotLightShadows.value = q.state.spotShadow,
            Oe.rectAreaLights.value = q.state.rectArea,
            Oe.ltc_1.value = q.state.rectAreaLTC1,
            Oe.ltc_2.value = q.state.rectAreaLTC2,
            Oe.pointLights.value = q.state.point,
            Oe.pointLightShadows.value = q.state.pointShadow,
            Oe.hemisphereLights.value = q.state.hemi,
            Oe.directionalShadowMap.value = q.state.directionalShadowMap,
            Oe.directionalShadowMatrix.value = q.state.directionalShadowMatrix,
            Oe.spotShadowMap.value = q.state.spotShadowMap,
            Oe.spotLightMatrix.value = q.state.spotLightMatrix,
            Oe.spotLightMap.value = q.state.spotLightMap,
            Oe.pointShadowMap.value = q.state.pointShadowMap,
            Oe.pointShadowMatrix.value = q.state.pointShadowMatrix),
            j.currentProgram = ze,
            j.uniformsList = null,
            ze
        }
        function Zi(y) {
            if (y.uniformsList === null) {
                const W = y.currentProgram.getUniforms();
                y.uniformsList = Qr.seqWithValue(W.seq, y.uniforms)
            }
            return y.uniformsList
        }
        function yi(y, W) {
            const K = x.get(y);
            K.outputColorSpace = W.outputColorSpace,
            K.batching = W.batching,
            K.batchingColor = W.batchingColor,
            K.instancing = W.instancing,
            K.instancingColor = W.instancingColor,
            K.instancingMorph = W.instancingMorph,
            K.skinning = W.skinning,
            K.morphTargets = W.morphTargets,
            K.morphNormals = W.morphNormals,
            K.morphColors = W.morphColors,
            K.morphTargetsCount = W.morphTargetsCount,
            K.numClippingPlanes = W.numClippingPlanes,
            K.numIntersection = W.numClipIntersection,
            K.vertexAlphas = W.vertexAlphas,
            K.vertexTangents = W.vertexTangents,
            K.toneMapping = W.toneMapping
        }
        function $i(y, W, K, j, q) {
            W.isScene !== !0 && (W = dt),
            k.resetTextureUnits();
            const ge = W.fog
              , Se = j.isMeshStandardMaterial ? W.environment : null
              , Me = G === null ? T.outputColorSpace : G.isXRRenderTarget === !0 ? G.texture.colorSpace : Xi
              , Ce = (j.isMeshStandardMaterial ? se : ne).get(j.envMap || Se)
              , Ne = j.vertexColors === !0 && !!K.attributes.color && K.attributes.color.itemSize === 4
              , ze = !!K.attributes.tangent && (!!j.normalMap || j.anisotropy > 0)
              , Oe = !!K.morphAttributes.position
              , Je = !!K.morphAttributes.normal
              , ft = !!K.morphAttributes.color;
            let yt = wn;
            j.toneMapped && (G === null || G.isXRRenderTarget === !0) && (yt = T.toneMapping);
            const Et = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color
              , pt = Et !== void 0 ? Et.length : 0
              , be = x.get(j)
              , lt = I.state.lights;
            if (Pe === !0 && (tt === !0 || y !== Q)) {
                const Dt = y === Q && j.id === J;
                Re.setState(j, y, Dt)
            }
            let nt = !1;
            j.version === be.__version ? (be.needsLights && be.lightsStateVersion !== lt.state.version || be.outputColorSpace !== Me || q.isBatchedMesh && be.batching === !1 || !q.isBatchedMesh && be.batching === !0 || q.isBatchedMesh && be.batchingColor === !0 && q.colorTexture === null || q.isBatchedMesh && be.batchingColor === !1 && q.colorTexture !== null || q.isInstancedMesh && be.instancing === !1 || !q.isInstancedMesh && be.instancing === !0 || q.isSkinnedMesh && be.skinning === !1 || !q.isSkinnedMesh && be.skinning === !0 || q.isInstancedMesh && be.instancingColor === !0 && q.instanceColor === null || q.isInstancedMesh && be.instancingColor === !1 && q.instanceColor !== null || q.isInstancedMesh && be.instancingMorph === !0 && q.morphTexture === null || q.isInstancedMesh && be.instancingMorph === !1 && q.morphTexture !== null || be.envMap !== Ce || j.fog === !0 && be.fog !== ge || be.numClippingPlanes !== void 0 && (be.numClippingPlanes !== Re.numPlanes || be.numIntersection !== Re.numIntersection) || be.vertexAlphas !== Ne || be.vertexTangents !== ze || be.morphTargets !== Oe || be.morphNormals !== Je || be.morphColors !== ft || be.toneMapping !== yt || be.morphTargetsCount !== pt) && (nt = !0) : (nt = !0,
            be.__version = j.version);
            let Ft = be.currentProgram;
            nt === !0 && (Ft = yn(j, W, q));
            let Ln = !1
              , kt = !1
              , ci = !1;
            const xt = Ft.getUniforms()
              , Bt = be.uniforms;
            if (De.useProgram(Ft.program) && (Ln = !0,
            kt = !0,
            ci = !0),
            j.id !== J && (J = j.id,
            kt = !0),
            Ln || Q !== y) {
                De.buffers.depth.getReversed() && y.reversedDepth !== !0 && (y._reversedDepth = !0,
                y.updateProjectionMatrix()),
                xt.setValue(F, "projectionMatrix", y.projectionMatrix),
                xt.setValue(F, "viewMatrix", y.matrixWorldInverse);
                const zt = xt.map.cameraPosition;
                zt !== void 0 && zt.setValue(F, Be.setFromMatrixPosition(y.matrixWorld)),
                mt.logarithmicDepthBuffer && xt.setValue(F, "logDepthBufFC", 2 / (Math.log(y.far + 1) / Math.LN2)),
                (j.isMeshPhongMaterial || j.isMeshToonMaterial || j.isMeshLambertMaterial || j.isMeshBasicMaterial || j.isMeshStandardMaterial || j.isShaderMaterial) && xt.setValue(F, "isOrthographic", y.isOrthographicCamera === !0),
                Q !== y && (Q = y,
                kt = !0,
                ci = !0)
            }
            if (be.needsLights && (lt.state.directionalShadowMap.length > 0 && xt.setValue(F, "directionalShadowMap", lt.state.directionalShadowMap, k),
            lt.state.spotShadowMap.length > 0 && xt.setValue(F, "spotShadowMap", lt.state.spotShadowMap, k),
            lt.state.pointShadowMap.length > 0 && xt.setValue(F, "pointShadowMap", lt.state.pointShadowMap, k)),
            q.isSkinnedMesh) {
                xt.setOptional(F, q, "bindMatrix"),
                xt.setOptional(F, q, "bindMatrixInverse");
                const Dt = q.skeleton;
                Dt && (Dt.boneTexture === null && Dt.computeBoneTexture(),
                xt.setValue(F, "boneTexture", Dt.boneTexture, k))
            }
            q.isBatchedMesh && (xt.setOptional(F, q, "batchingTexture"),
            xt.setValue(F, "batchingTexture", q._matricesTexture, k),
            xt.setOptional(F, q, "batchingIdTexture"),
            xt.setValue(F, "batchingIdTexture", q._indirectTexture, k),
            xt.setOptional(F, q, "batchingColorTexture"),
            q._colorsTexture !== null && xt.setValue(F, "batchingColorTexture", q._colorsTexture, k));
            const jt = K.morphAttributes;
            if ((jt.position !== void 0 || jt.normal !== void 0 || jt.color !== void 0) && Ke.update(q, K, Ft),
            (kt || be.receiveShadow !== q.receiveShadow) && (be.receiveShadow = q.receiveShadow,
            xt.setValue(F, "receiveShadow", q.receiveShadow)),
            j.isMeshGouraudMaterial && j.envMap !== null && (Bt.envMap.value = Ce,
            Bt.flipEnvMap.value = Ce.isCubeTexture && Ce.isRenderTargetTexture === !1 ? -1 : 1),
            j.isMeshStandardMaterial && j.envMap === null && W.environment !== null && (Bt.envMapIntensity.value = W.environmentIntensity),
            Bt.dfgLUT !== void 0 && (Bt.dfgLUT.value = Hm()),
            kt && (xt.setValue(F, "toneMappingExposure", T.toneMappingExposure),
            be.needsLights && Sr(Bt, ci),
            ge && j.fog === !0 && He.refreshFogUniforms(Bt, ge),
            He.refreshMaterialUniforms(Bt, j, Ge, Ve, I.state.transmissionRenderTarget[y.id]),
            Qr.upload(F, Zi(be), Bt, k)),
            j.isShaderMaterial && j.uniformsNeedUpdate === !0 && (Qr.upload(F, Zi(be), Bt, k),
            j.uniformsNeedUpdate = !1),
            j.isSpriteMaterial && xt.setValue(F, "center", q.center),
            xt.setValue(F, "modelViewMatrix", q.modelViewMatrix),
            xt.setValue(F, "normalMatrix", q.normalMatrix),
            xt.setValue(F, "modelMatrix", q.matrixWorld),
            j.isShaderMaterial || j.isRawShaderMaterial) {
                const Dt = j.uniformsGroups;
                for (let zt = 0, Ei = Dt.length; zt < Ei; zt++) {
                    const rn = Dt[zt];
                    le.update(rn, Ft),
                    le.bind(rn, Ft)
                }
            }
            return Ft
        }
        function Sr(y, W) {
            y.ambientLightColor.needsUpdate = W,
            y.lightProbe.needsUpdate = W,
            y.directionalLights.needsUpdate = W,
            y.directionalLightShadows.needsUpdate = W,
            y.pointLights.needsUpdate = W,
            y.pointLightShadows.needsUpdate = W,
            y.spotLights.needsUpdate = W,
            y.spotLightShadows.needsUpdate = W,
            y.rectAreaLights.needsUpdate = W,
            y.hemisphereLights.needsUpdate = W
        }
        function nn(y) {
            return y.isMeshLambertMaterial || y.isMeshToonMaterial || y.isMeshPhongMaterial || y.isMeshStandardMaterial || y.isShadowMaterial || y.isShaderMaterial && y.lights === !0
        }
        this.getActiveCubeFace = function() {
            return b
        }
        ,
        this.getActiveMipmapLevel = function() {
            return X
        }
        ,
        this.getRenderTarget = function() {
            return G
        }
        ,
        this.setRenderTargetTextures = function(y, W, K) {
            const j = x.get(y);
            j.__autoAllocateDepthBuffer = y.resolveDepthBuffer === !1,
            j.__autoAllocateDepthBuffer === !1 && (j.__useRenderToTexture = !1),
            x.get(y.texture).__webglTexture = W,
            x.get(y.depthTexture).__webglTexture = j.__autoAllocateDepthBuffer ? void 0 : K,
            j.__hasExternalTextures = !0
        }
        ,
        this.setRenderTargetFramebuffer = function(y, W) {
            const K = x.get(y);
            K.__webglFramebuffer = W,
            K.__useDefaultFramebuffer = W === void 0
        }
        ;
        const on = F.createFramebuffer();
        this.setRenderTarget = function(y, W=0, K=0) {
            G = y,
            b = W,
            X = K;
            let j = null
              , q = !1
              , ge = !1;
            if (y) {
                const Me = x.get(y);
                if (Me.__useDefaultFramebuffer !== void 0) {
                    De.bindFramebuffer(F.FRAMEBUFFER, Me.__webglFramebuffer),
                    B.copy(y.viewport),
                    H.copy(y.scissor),
                    ee = y.scissorTest,
                    De.viewport(B),
                    De.scissor(H),
                    De.setScissorTest(ee),
                    J = -1;
                    return
                } else if (Me.__webglFramebuffer === void 0)
                    k.setupRenderTarget(y);
                else if (Me.__hasExternalTextures)
                    k.rebindTextures(y, x.get(y.texture).__webglTexture, x.get(y.depthTexture).__webglTexture);
                else if (y.depthBuffer) {
                    const ze = y.depthTexture;
                    if (Me.__boundDepthTexture !== ze) {
                        if (ze !== null && x.has(ze) && (y.width !== ze.image.width || y.height !== ze.image.height))
                            throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
                        k.setupDepthRenderbuffer(y)
                    }
                }
                const Ce = y.texture;
                (Ce.isData3DTexture || Ce.isDataArrayTexture || Ce.isCompressedArrayTexture) && (ge = !0);
                const Ne = x.get(y).__webglFramebuffer;
                y.isWebGLCubeRenderTarget ? (Array.isArray(Ne[W]) ? j = Ne[W][K] : j = Ne[W],
                q = !0) : y.samples > 0 && k.useMultisampledRTT(y) === !1 ? j = x.get(y).__webglMultisampledFramebuffer : Array.isArray(Ne) ? j = Ne[K] : j = Ne,
                B.copy(y.viewport),
                H.copy(y.scissor),
                ee = y.scissorTest
            } else
                B.copy(ie).multiplyScalar(Ge).floor(),
                H.copy(ae).multiplyScalar(Ge).floor(),
                ee = we;
            if (K !== 0 && (j = on),
            De.bindFramebuffer(F.FRAMEBUFFER, j) && De.drawBuffers(y, j),
            De.viewport(B),
            De.scissor(H),
            De.setScissorTest(ee),
            q) {
                const Me = x.get(y.texture);
                F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_CUBE_MAP_POSITIVE_X + W, Me.__webglTexture, K)
            } else if (ge) {
                const Me = W;
                for (let Ce = 0; Ce < y.textures.length; Ce++) {
                    const Ne = x.get(y.textures[Ce]);
                    F.framebufferTextureLayer(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0 + Ce, Ne.__webglTexture, K, Me)
                }
            } else if (y !== null && K !== 0) {
                const Me = x.get(y.texture);
                F.framebufferTexture2D(F.FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, Me.__webglTexture, K)
            }
            J = -1
        }
        ,
        this.readRenderTargetPixels = function(y, W, K, j, q, ge, Se, Me=0) {
            if (!(y && y.isWebGLRenderTarget)) {
                ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                return
            }
            let Ce = x.get(y).__webglFramebuffer;
            if (y.isWebGLCubeRenderTarget && Se !== void 0 && (Ce = Ce[Se]),
            Ce) {
                De.bindFramebuffer(F.FRAMEBUFFER, Ce);
                try {
                    const Ne = y.textures[Me]
                      , ze = Ne.format
                      , Oe = Ne.type;
                    if (!mt.textureFormatReadable(ze)) {
                        ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        return
                    }
                    if (!mt.textureTypeReadable(Oe)) {
                        ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        return
                    }
                    W >= 0 && W <= y.width - j && K >= 0 && K <= y.height - q && (y.textures.length > 1 && F.readBuffer(F.COLOR_ATTACHMENT0 + Me),
                    F.readPixels(W, K, j, q, he.convert(ze), he.convert(Oe), ge))
                } finally {
                    const Ne = G !== null ? x.get(G).__webglFramebuffer : null;
                    De.bindFramebuffer(F.FRAMEBUFFER, Ne)
                }
            }
        }
        ,
        this.readRenderTargetPixelsAsync = async function(y, W, K, j, q, ge, Se, Me=0) {
            if (!(y && y.isWebGLRenderTarget))
                throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
            let Ce = x.get(y).__webglFramebuffer;
            if (y.isWebGLCubeRenderTarget && Se !== void 0 && (Ce = Ce[Se]),
            Ce)
                if (W >= 0 && W <= y.width - j && K >= 0 && K <= y.height - q) {
                    De.bindFramebuffer(F.FRAMEBUFFER, Ce);
                    const Ne = y.textures[Me]
                      , ze = Ne.format
                      , Oe = Ne.type;
                    if (!mt.textureFormatReadable(ze))
                        throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
                    if (!mt.textureTypeReadable(Oe))
                        throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
                    const Je = F.createBuffer();
                    F.bindBuffer(F.PIXEL_PACK_BUFFER, Je),
                    F.bufferData(F.PIXEL_PACK_BUFFER, ge.byteLength, F.STREAM_READ),
                    y.textures.length > 1 && F.readBuffer(F.COLOR_ATTACHMENT0 + Me),
                    F.readPixels(W, K, j, q, he.convert(ze), he.convert(Oe), 0);
                    const ft = G !== null ? x.get(G).__webglFramebuffer : null;
                    De.bindFramebuffer(F.FRAMEBUFFER, ft);
                    const yt = F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE, 0);
                    return F.flush(),
                    await fu(F, yt, 4),
                    F.bindBuffer(F.PIXEL_PACK_BUFFER, Je),
                    F.getBufferSubData(F.PIXEL_PACK_BUFFER, 0, ge),
                    F.deleteBuffer(Je),
                    F.deleteSync(yt),
                    ge
                } else
                    throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")
        }
        ,
        this.copyFramebufferToTexture = function(y, W=null, K=0) {
            const j = Math.pow(2, -K)
              , q = Math.floor(y.image.width * j)
              , ge = Math.floor(y.image.height * j)
              , Se = W !== null ? W.x : 0
              , Me = W !== null ? W.y : 0;
            k.setTexture2D(y, 0),
            F.copyTexSubImage2D(F.TEXTURE_2D, K, 0, 0, Se, Me, q, ge),
            De.unbindTexture()
        }
        ;
        const li = F.createFramebuffer()
          , Ji = F.createFramebuffer();
        this.copyTextureToTexture = function(y, W, K=null, j=null, q=0, ge=null) {
            ge === null && (q !== 0 ? (hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),
            ge = q,
            q = 0) : ge = 0);
            let Se, Me, Ce, Ne, ze, Oe, Je, ft, yt;
            const Et = y.isCompressedTexture ? y.mipmaps[ge] : y.image;
            if (K !== null)
                Se = K.max.x - K.min.x,
                Me = K.max.y - K.min.y,
                Ce = K.isBox3 ? K.max.z - K.min.z : 1,
                Ne = K.min.x,
                ze = K.min.y,
                Oe = K.isBox3 ? K.min.z : 0;
            else {
                const jt = Math.pow(2, -q);
                Se = Math.floor(Et.width * jt),
                Me = Math.floor(Et.height * jt),
                y.isDataArrayTexture ? Ce = Et.depth : y.isData3DTexture ? Ce = Math.floor(Et.depth * jt) : Ce = 1,
                Ne = 0,
                ze = 0,
                Oe = 0
            }
            j !== null ? (Je = j.x,
            ft = j.y,
            yt = j.z) : (Je = 0,
            ft = 0,
            yt = 0);
            const pt = he.convert(W.format)
              , be = he.convert(W.type);
            let lt;
            W.isData3DTexture ? (k.setTexture3D(W, 0),
            lt = F.TEXTURE_3D) : W.isDataArrayTexture || W.isCompressedArrayTexture ? (k.setTexture2DArray(W, 0),
            lt = F.TEXTURE_2D_ARRAY) : (k.setTexture2D(W, 0),
            lt = F.TEXTURE_2D),
            F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL, W.flipY),
            F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL, W.premultiplyAlpha),
            F.pixelStorei(F.UNPACK_ALIGNMENT, W.unpackAlignment);
            const nt = F.getParameter(F.UNPACK_ROW_LENGTH)
              , Ft = F.getParameter(F.UNPACK_IMAGE_HEIGHT)
              , Ln = F.getParameter(F.UNPACK_SKIP_PIXELS)
              , kt = F.getParameter(F.UNPACK_SKIP_ROWS)
              , ci = F.getParameter(F.UNPACK_SKIP_IMAGES);
            F.pixelStorei(F.UNPACK_ROW_LENGTH, Et.width),
            F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, Et.height),
            F.pixelStorei(F.UNPACK_SKIP_PIXELS, Ne),
            F.pixelStorei(F.UNPACK_SKIP_ROWS, ze),
            F.pixelStorei(F.UNPACK_SKIP_IMAGES, Oe);
            const xt = y.isDataArrayTexture || y.isData3DTexture
              , Bt = W.isDataArrayTexture || W.isData3DTexture;
            if (y.isDepthTexture) {
                const jt = x.get(y)
                  , Dt = x.get(W)
                  , zt = x.get(jt.__renderTarget)
                  , Ei = x.get(Dt.__renderTarget);
                De.bindFramebuffer(F.READ_FRAMEBUFFER, zt.__webglFramebuffer),
                De.bindFramebuffer(F.DRAW_FRAMEBUFFER, Ei.__webglFramebuffer);
                for (let rn = 0; rn < Ce; rn++)
                    xt && (F.framebufferTextureLayer(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, x.get(y).__webglTexture, q, Oe + rn),
                    F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, x.get(W).__webglTexture, ge, yt + rn)),
                    F.blitFramebuffer(Ne, ze, Se, Me, Je, ft, Se, Me, F.DEPTH_BUFFER_BIT, F.NEAREST);
                De.bindFramebuffer(F.READ_FRAMEBUFFER, null),
                De.bindFramebuffer(F.DRAW_FRAMEBUFFER, null)
            } else if (q !== 0 || y.isRenderTargetTexture || x.has(y)) {
                const jt = x.get(y)
                  , Dt = x.get(W);
                De.bindFramebuffer(F.READ_FRAMEBUFFER, li),
                De.bindFramebuffer(F.DRAW_FRAMEBUFFER, Ji);
                for (let zt = 0; zt < Ce; zt++)
                    xt ? F.framebufferTextureLayer(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, jt.__webglTexture, q, Oe + zt) : F.framebufferTexture2D(F.READ_FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, jt.__webglTexture, q),
                    Bt ? F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, Dt.__webglTexture, ge, yt + zt) : F.framebufferTexture2D(F.DRAW_FRAMEBUFFER, F.COLOR_ATTACHMENT0, F.TEXTURE_2D, Dt.__webglTexture, ge),
                    q !== 0 ? F.blitFramebuffer(Ne, ze, Se, Me, Je, ft, Se, Me, F.COLOR_BUFFER_BIT, F.NEAREST) : Bt ? F.copyTexSubImage3D(lt, ge, Je, ft, yt + zt, Ne, ze, Se, Me) : F.copyTexSubImage2D(lt, ge, Je, ft, Ne, ze, Se, Me);
                De.bindFramebuffer(F.READ_FRAMEBUFFER, null),
                De.bindFramebuffer(F.DRAW_FRAMEBUFFER, null)
            } else
                Bt ? y.isDataTexture || y.isData3DTexture ? F.texSubImage3D(lt, ge, Je, ft, yt, Se, Me, Ce, pt, be, Et.data) : W.isCompressedArrayTexture ? F.compressedTexSubImage3D(lt, ge, Je, ft, yt, Se, Me, Ce, pt, Et.data) : F.texSubImage3D(lt, ge, Je, ft, yt, Se, Me, Ce, pt, be, Et) : y.isDataTexture ? F.texSubImage2D(F.TEXTURE_2D, ge, Je, ft, Se, Me, pt, be, Et.data) : y.isCompressedTexture ? F.compressedTexSubImage2D(F.TEXTURE_2D, ge, Je, ft, Et.width, Et.height, pt, Et.data) : F.texSubImage2D(F.TEXTURE_2D, ge, Je, ft, Se, Me, pt, be, Et);
            F.pixelStorei(F.UNPACK_ROW_LENGTH, nt),
            F.pixelStorei(F.UNPACK_IMAGE_HEIGHT, Ft),
            F.pixelStorei(F.UNPACK_SKIP_PIXELS, Ln),
            F.pixelStorei(F.UNPACK_SKIP_ROWS, kt),
            F.pixelStorei(F.UNPACK_SKIP_IMAGES, ci),
            ge === 0 && W.generateMipmaps && F.generateMipmap(lt),
            De.unbindTexture()
        }
        ,
        this.initRenderTarget = function(y) {
            x.get(y).__webglFramebuffer === void 0 && k.setupRenderTarget(y)
        }
        ,
        this.initTexture = function(y) {
            y.isCubeTexture ? k.setTextureCube(y, 0) : y.isData3DTexture ? k.setTexture3D(y, 0) : y.isDataArrayTexture || y.isCompressedArrayTexture ? k.setTexture2DArray(y, 0) : k.setTexture2D(y, 0),
            De.unbindTexture()
        }
        ,
        this.resetState = function() {
            b = 0,
            X = 0,
            G = null,
            De.reset(),
            Ae.reset()
        }
        ,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    get coordinateSystem() {
        return bn
    }
    get outputColorSpace() {
        return this._outputColorSpace
    }
    set outputColorSpace(e) {
        this._outputColorSpace = e;
        const t = this.getContext();
        t.drawingBufferColorSpace = at._getDrawingBufferColorSpace(e),
        t.unpackColorSpace = at._getUnpackColorSpace()
    }
}
var is = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Ys = {}, gl;
function Wm() {
    return gl || (gl = 1,
    (function() {
        var i;
        function e(s) {
            var c = 0;
            return function() {
                return c < s.length ? {
                    done: !1,
                    value: s[c++]
                } : {
                    done: !0
                }
            }
        }
        var t = typeof Object.defineProperties == "function" ? Object.defineProperty : function(s, c, h) {
            return s == Array.prototype || s == Object.prototype || (s[c] = h.value),
            s
        }
        ;
        function n(s) {
            s = [typeof globalThis == "object" && globalThis, s, typeof window == "object" && window, typeof self == "object" && self, typeof is == "object" && is];
            for (var c = 0; c < s.length; ++c) {
                var h = s[c];
                if (h && h.Math == Math)
                    return h
            }
            throw Error("Cannot find global object")
        }
        var r = n(this);
        function a(s, c) {
            if (c)
                e: {
                    var h = r;
                    s = s.split(".");
                    for (var M = 0; M < s.length - 1; M++) {
                        var w = s[M];
                        if (!(w in h))
                            break e;
                        h = h[w]
                    }
                    s = s[s.length - 1],
                    M = h[s],
                    c = c(M),
                    c != M && c != null && t(h, s, {
                        configurable: !0,
                        writable: !0,
                        value: c
                    })
                }
        }
        a("Symbol", function(s) {
            function c(D) {
                if (this instanceof c)
                    throw new TypeError("Symbol is not a constructor");
                return new h(M + (D || "") + "_" + w++,D)
            }
            function h(D, P) {
                this.h = D,
                t(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: P
                })
            }
            if (s)
                return s;
            h.prototype.toString = function() {
                return this.h
            }
            ;
            var M = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_"
              , w = 0;
            return c
        }),
        a("Symbol.iterator", function(s) {
            if (s)
                return s;
            s = Symbol("Symbol.iterator");
            for (var c = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), h = 0; h < c.length; h++) {
                var M = r[c[h]];
                typeof M == "function" && typeof M.prototype[s] != "function" && t(M.prototype, s, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return o(e(this))
                    }
                })
            }
            return s
        });
        function o(s) {
            return s = {
                next: s
            },
            s[Symbol.iterator] = function() {
                return this
            }
            ,
            s
        }
        function l(s) {
            var c = typeof Symbol < "u" && Symbol.iterator && s[Symbol.iterator];
            return c ? c.call(s) : {
                next: e(s)
            }
        }
        function u(s) {
            if (!(s instanceof Array)) {
                s = l(s);
                for (var c, h = []; !(c = s.next()).done; )
                    h.push(c.value);
                s = h
            }
            return s
        }
        var f = typeof Object.assign == "function" ? Object.assign : function(s, c) {
            for (var h = 1; h < arguments.length; h++) {
                var M = arguments[h];
                if (M)
                    for (var w in M)
                        Object.prototype.hasOwnProperty.call(M, w) && (s[w] = M[w])
            }
            return s
        }
        ;
        a("Object.assign", function(s) {
            return s || f
        });
        var p = typeof Object.create == "function" ? Object.create : function(s) {
            function c() {}
            return c.prototype = s,
            new c
        }
        , m;
        if (typeof Object.setPrototypeOf == "function")
            m = Object.setPrototypeOf;
        else {
            var g;
            e: {
                var S = {
                    a: !0
                }
                  , E = {};
                try {
                    E.__proto__ = S,
                    g = E.a;
                    break e
                } catch {}
                g = !1
            }
            m = g ? function(s, c) {
                if (s.__proto__ = c,
                s.__proto__ !== c)
                    throw new TypeError(s + " is not extensible");
                return s
            }
            : null
        }
        var A = m;
        function _(s, c) {
            if (s.prototype = p(c.prototype),
            s.prototype.constructor = s,
            A)
                A(s, c);
            else
                for (var h in c)
                    if (h != "prototype")
                        if (Object.defineProperties) {
                            var M = Object.getOwnPropertyDescriptor(c, h);
                            M && Object.defineProperty(s, h, M)
                        } else
                            s[h] = c[h];
            s.ya = c.prototype
        }
        function d() {
            this.m = !1,
            this.j = null,
            this.i = void 0,
            this.h = 1,
            this.v = this.s = 0,
            this.l = null
        }
        function L(s) {
            if (s.m)
                throw new TypeError("Generator is already running");
            s.m = !0
        }
        d.prototype.u = function(s) {
            this.i = s
        }
        ;
        function U(s, c) {
            s.l = {
                ma: c,
                na: !0
            },
            s.h = s.s || s.v
        }
        d.prototype.return = function(s) {
            this.l = {
                return: s
            },
            this.h = this.v
        }
        ;
        function C(s, c, h) {
            return s.h = h,
            {
                value: c
            }
        }
        function I(s) {
            this.h = new d,
            this.i = s
        }
        function O(s, c) {
            L(s.h);
            var h = s.h.j;
            return h ? N(s, "return"in h ? h.return : function(M) {
                return {
                    value: M,
                    done: !0
                }
            }
            , c, s.h.return) : (s.h.return(c),
            Y(s))
        }
        function N(s, c, h, M) {
            try {
                var w = c.call(s.h.j, h);
                if (!(w instanceof Object))
                    throw new TypeError("Iterator result " + w + " is not an object");
                if (!w.done)
                    return s.h.m = !1,
                    w;
                var D = w.value
            } catch (P) {
                return s.h.j = null,
                U(s.h, P),
                Y(s)
            }
            return s.h.j = null,
            M.call(s.h, D),
            Y(s)
        }
        function Y(s) {
            for (; s.h.h; )
                try {
                    var c = s.i(s.h);
                    if (c)
                        return s.h.m = !1,
                        {
                            value: c.value,
                            done: !1
                        }
                } catch (h) {
                    s.h.i = void 0,
                    U(s.h, h)
                }
            if (s.h.m = !1,
            s.h.l) {
                if (c = s.h.l,
                s.h.l = null,
                c.na)
                    throw c.ma;
                return {
                    value: c.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        }
        function T(s) {
            this.next = function(c) {
                return L(s.h),
                s.h.j ? c = N(s, s.h.j.next, c, s.h.u) : (s.h.u(c),
                c = Y(s)),
                c
            }
            ,
            this.throw = function(c) {
                return L(s.h),
                s.h.j ? c = N(s, s.h.j.throw, c, s.h.u) : (U(s.h, c),
                c = Y(s)),
                c
            }
            ,
            this.return = function(c) {
                return O(s, c)
            }
            ,
            this[Symbol.iterator] = function() {
                return this
            }
        }
        function v(s) {
            function c(M) {
                return s.next(M)
            }
            function h(M) {
                return s.throw(M)
            }
            return new Promise(function(M, w) {
                function D(P) {
                    P.done ? M(P.value) : Promise.resolve(P.value).then(c, h).then(D, w)
                }
                D(s.next())
            }
            )
        }
        function b(s) {
            return v(new T(new I(s)))
        }
        a("Promise", function(s) {
            function c(P) {
                this.i = 0,
                this.j = void 0,
                this.h = [],
                this.u = !1;
                var V = this.l();
                try {
                    P(V.resolve, V.reject)
                } catch (Z) {
                    V.reject(Z)
                }
            }
            function h() {
                this.h = null
            }
            function M(P) {
                return P instanceof c ? P : new c(function(V) {
                    V(P)
                }
                )
            }
            if (s)
                return s;
            h.prototype.i = function(P) {
                if (this.h == null) {
                    this.h = [];
                    var V = this;
                    this.j(function() {
                        V.m()
                    })
                }
                this.h.push(P)
            }
            ;
            var w = r.setTimeout;
            h.prototype.j = function(P) {
                w(P, 0)
            }
            ,
            h.prototype.m = function() {
                for (; this.h && this.h.length; ) {
                    var P = this.h;
                    this.h = [];
                    for (var V = 0; V < P.length; ++V) {
                        var Z = P[V];
                        P[V] = null;
                        try {
                            Z()
                        } catch (ce) {
                            this.l(ce)
                        }
                    }
                }
                this.h = null
            }
            ,
            h.prototype.l = function(P) {
                this.j(function() {
                    throw P
                })
            }
            ,
            c.prototype.l = function() {
                function P(ce) {
                    return function(ve) {
                        Z || (Z = !0,
                        ce.call(V, ve))
                    }
                }
                var V = this
                  , Z = !1;
                return {
                    resolve: P(this.I),
                    reject: P(this.m)
                }
            }
            ,
            c.prototype.I = function(P) {
                if (P === this)
                    this.m(new TypeError("A Promise cannot resolve to itself"));
                else if (P instanceof c)
                    this.L(P);
                else {
                    e: switch (typeof P) {
                    case "object":
                        var V = P != null;
                        break e;
                    case "function":
                        V = !0;
                        break e;
                    default:
                        V = !1
                    }
                    V ? this.F(P) : this.s(P)
                }
            }
            ,
            c.prototype.F = function(P) {
                var V = void 0;
                try {
                    V = P.then
                } catch (Z) {
                    this.m(Z);
                    return
                }
                typeof V == "function" ? this.M(V, P) : this.s(P)
            }
            ,
            c.prototype.m = function(P) {
                this.v(2, P)
            }
            ,
            c.prototype.s = function(P) {
                this.v(1, P)
            }
            ,
            c.prototype.v = function(P, V) {
                if (this.i != 0)
                    throw Error("Cannot settle(" + P + ", " + V + "): Promise already settled in state" + this.i);
                this.i = P,
                this.j = V,
                this.i === 2 && this.K(),
                this.H()
            }
            ,
            c.prototype.K = function() {
                var P = this;
                w(function() {
                    if (P.D()) {
                        var V = r.console;
                        typeof V < "u" && V.error(P.j)
                    }
                }, 1)
            }
            ,
            c.prototype.D = function() {
                if (this.u)
                    return !1;
                var P = r.CustomEvent
                  , V = r.Event
                  , Z = r.dispatchEvent;
                return typeof Z > "u" ? !0 : (typeof P == "function" ? P = new P("unhandledrejection",{
                    cancelable: !0
                }) : typeof V == "function" ? P = new V("unhandledrejection",{
                    cancelable: !0
                }) : (P = r.document.createEvent("CustomEvent"),
                P.initCustomEvent("unhandledrejection", !1, !0, P)),
                P.promise = this,
                P.reason = this.j,
                Z(P))
            }
            ,
            c.prototype.H = function() {
                if (this.h != null) {
                    for (var P = 0; P < this.h.length; ++P)
                        D.i(this.h[P]);
                    this.h = null
                }
            }
            ;
            var D = new h;
            return c.prototype.L = function(P) {
                var V = this.l();
                P.T(V.resolve, V.reject)
            }
            ,
            c.prototype.M = function(P, V) {
                var Z = this.l();
                try {
                    P.call(V, Z.resolve, Z.reject)
                } catch (ce) {
                    Z.reject(ce)
                }
            }
            ,
            c.prototype.then = function(P, V) {
                function Z(Fe, Te) {
                    return typeof Fe == "function" ? function(Xe) {
                        try {
                            ce(Fe(Xe))
                        } catch (et) {
                            ve(et)
                        }
                    }
                    : Te
                }
                var ce, ve, We = new c(function(Fe, Te) {
                    ce = Fe,
                    ve = Te
                }
                );
                return this.T(Z(P, ce), Z(V, ve)),
                We
            }
            ,
            c.prototype.catch = function(P) {
                return this.then(void 0, P)
            }
            ,
            c.prototype.T = function(P, V) {
                function Z() {
                    switch (ce.i) {
                    case 1:
                        P(ce.j);
                        break;
                    case 2:
                        V(ce.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + ce.i)
                    }
                }
                var ce = this;
                this.h == null ? D.i(Z) : this.h.push(Z),
                this.u = !0
            }
            ,
            c.resolve = M,
            c.reject = function(P) {
                return new c(function(V, Z) {
                    Z(P)
                }
                )
            }
            ,
            c.race = function(P) {
                return new c(function(V, Z) {
                    for (var ce = l(P), ve = ce.next(); !ve.done; ve = ce.next())
                        M(ve.value).T(V, Z)
                }
                )
            }
            ,
            c.all = function(P) {
                var V = l(P)
                  , Z = V.next();
                return Z.done ? M([]) : new c(function(ce, ve) {
                    function We(Xe) {
                        return function(et) {
                            Fe[Xe] = et,
                            Te--,
                            Te == 0 && ce(Fe)
                        }
                    }
                    var Fe = []
                      , Te = 0;
                    do
                        Fe.push(void 0),
                        Te++,
                        M(Z.value).T(We(Fe.length - 1), ve),
                        Z = V.next();
                    while (!Z.done)
                }
                )
            }
            ,
            c
        });
        function X(s, c) {
            s instanceof String && (s += "");
            var h = 0
              , M = !1
              , w = {
                next: function() {
                    if (!M && h < s.length) {
                        var D = h++;
                        return {
                            value: c(D, s[D]),
                            done: !1
                        }
                    }
                    return M = !0,
                    {
                        done: !0,
                        value: void 0
                    }
                }
            };
            return w[Symbol.iterator] = function() {
                return w
            }
            ,
            w
        }
        a("Array.prototype.keys", function(s) {
            return s || function() {
                return X(this, function(c) {
                    return c
                })
            }
        }),
        a("Array.prototype.fill", function(s) {
            return s || function(c, h, M) {
                var w = this.length || 0;
                for (0 > h && (h = Math.max(0, w + h)),
                (M == null || M > w) && (M = w),
                M = Number(M),
                0 > M && (M = Math.max(0, w + M)),
                h = Number(h || 0); h < M; h++)
                    this[h] = c;
                return this
            }
        });
        function G(s) {
            return s || Array.prototype.fill
        }
        a("Int8Array.prototype.fill", G),
        a("Uint8Array.prototype.fill", G),
        a("Uint8ClampedArray.prototype.fill", G),
        a("Int16Array.prototype.fill", G),
        a("Uint16Array.prototype.fill", G),
        a("Int32Array.prototype.fill", G),
        a("Uint32Array.prototype.fill", G),
        a("Float32Array.prototype.fill", G),
        a("Float64Array.prototype.fill", G),
        a("Object.is", function(s) {
            return s || function(c, h) {
                return c === h ? c !== 0 || 1 / c === 1 / h : c !== c && h !== h
            }
        }),
        a("Array.prototype.includes", function(s) {
            return s || function(c, h) {
                var M = this;
                M instanceof String && (M = String(M));
                var w = M.length;
                for (h = h || 0,
                0 > h && (h = Math.max(h + w, 0)); h < w; h++) {
                    var D = M[h];
                    if (D === c || Object.is(D, c))
                        return !0
                }
                return !1
            }
        }),
        a("String.prototype.includes", function(s) {
            return s || function(c, h) {
                if (this == null)
                    throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
                if (c instanceof RegExp)
                    throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
                return this.indexOf(c, h || 0) !== -1
            }
        });
        var J = this || self;
        function Q(s, c) {
            s = s.split(".");
            var h = J;
            s[0]in h || typeof h.execScript > "u" || h.execScript("var " + s[0]);
            for (var M; s.length && (M = s.shift()); )
                s.length || c === void 0 ? h[M] && h[M] !== Object.prototype[M] ? h = h[M] : h = h[M] = {} : h[M] = c
        }
        function B(s) {
            var c;
            e: {
                if ((c = J.navigator) && (c = c.userAgent))
                    break e;
                c = ""
            }
            return c.indexOf(s) != -1
        }
        var H = Array.prototype.map ? function(s, c) {
            return Array.prototype.map.call(s, c, void 0)
        }
        : function(s, c) {
            for (var h = s.length, M = Array(h), w = typeof s == "string" ? s.split("") : s, D = 0; D < h; D++)
                D in w && (M[D] = c.call(void 0, w[D], D, s));
            return M
        }
          , ee = {}
          , ue = null;
        function fe(s) {
            var c = s.length
              , h = 3 * c / 4;
            h % 3 ? h = Math.floor(h) : "=.".indexOf(s[c - 1]) != -1 && (h = "=.".indexOf(s[c - 2]) != -1 ? h - 2 : h - 1);
            var M = new Uint8Array(h)
              , w = 0;
            return Ee(s, function(D) {
                M[w++] = D
            }),
            w !== h ? M.subarray(0, w) : M
        }
        function Ee(s, c) {
            function h(Z) {
                for (; M < s.length; ) {
                    var ce = s.charAt(M++)
                      , ve = ue[ce];
                    if (ve != null)
                        return ve;
                    if (!/^[\s\xa0]*$/.test(ce))
                        throw Error("Unknown base64 encoding at char: " + ce)
                }
                return Z
            }
            Ve();
            for (var M = 0; ; ) {
                var w = h(-1)
                  , D = h(0)
                  , P = h(64)
                  , V = h(64);
                if (V === 64 && w === -1)
                    break;
                c(w << 2 | D >> 4),
                P != 64 && (c(D << 4 & 240 | P >> 2),
                V != 64 && c(P << 6 & 192 | V))
            }
        }
        function Ve() {
            if (!ue) {
                ue = {};
                for (var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), c = ["+/=", "+/", "-_=", "-_.", "-_"], h = 0; 5 > h; h++) {
                    var M = s.concat(c[h].split(""));
                    ee[h] = M;
                    for (var w = 0; w < M.length; w++) {
                        var D = M[w];
                        ue[D] === void 0 && (ue[D] = w)
                    }
                }
            }
        }
        var Ge = typeof Uint8Array < "u"
          , ht = !(B("Trident") || B("MSIE")) && typeof J.btoa == "function";
        function ot(s) {
            if (!ht) {
                var c;
                c === void 0 && (c = 0),
                Ve(),
                c = ee[c];
                for (var h = Array(Math.floor(s.length / 3)), M = c[64] || "", w = 0, D = 0; w < s.length - 2; w += 3) {
                    var P = s[w]
                      , V = s[w + 1]
                      , Z = s[w + 2]
                      , ce = c[P >> 2];
                    P = c[(P & 3) << 4 | V >> 4],
                    V = c[(V & 15) << 2 | Z >> 6],
                    Z = c[Z & 63],
                    h[D++] = ce + P + V + Z
                }
                switch (ce = 0,
                Z = M,
                s.length - w) {
                case 2:
                    ce = s[w + 1],
                    Z = c[(ce & 15) << 2] || M;
                case 1:
                    s = s[w],
                    h[D] = c[s >> 2] + c[(s & 3) << 4 | ce >> 4] + Z + M
                }
                return h.join("")
            }
            for (c = ""; 10240 < s.length; )
                c += String.fromCharCode.apply(null, s.subarray(0, 10240)),
                s = s.subarray(10240);
            return c += String.fromCharCode.apply(null, s),
            btoa(c)
        }
        var ie = RegExp("[-_.]", "g");
        function ae(s) {
            switch (s) {
            case "-":
                return "+";
            case "_":
                return "/";
            case ".":
                return "=";
            default:
                return ""
            }
        }
        function we(s) {
            if (!ht)
                return fe(s);
            ie.test(s) && (s = s.replace(ie, ae)),
            s = atob(s);
            for (var c = new Uint8Array(s.length), h = 0; h < s.length; h++)
                c[h] = s.charCodeAt(h);
            return c
        }
        var Ye;
        function Pe() {
            return Ye || (Ye = new Uint8Array(0))
        }
        var tt = {}
          , Pt = typeof Uint8Array.prototype.slice == "function"
          , Be = 0
          , qe = 0;
        function dt(s) {
            var c = 0 > s;
            s = Math.abs(s);
            var h = s >>> 0;
            s = Math.floor((s - h) / 4294967296),
            c && (h = l(bt(h, s)),
            c = h.next().value,
            s = h.next().value,
            h = c),
            Be = h >>> 0,
            qe = s >>> 0
        }
        var Ze = typeof BigInt == "function";
        function bt(s, c) {
            return c = ~c,
            s ? s = ~s + 1 : c += 1,
            [s, c]
        }
        function F(s, c) {
            this.i = s >>> 0,
            this.h = c >>> 0
        }
        function wt(s) {
            if (!s)
                return st || (st = new F(0,0));
            if (!/^-?\d+$/.test(s))
                return null;
            if (16 > s.length)
                dt(Number(s));
            else if (Ze)
                s = BigInt(s),
                Be = Number(s & BigInt(4294967295)) >>> 0,
                qe = Number(s >> BigInt(32) & BigInt(4294967295));
            else {
                var c = +(s[0] === "-");
                qe = Be = 0;
                for (var h = s.length, M = c, w = (h - c) % 6 + c; w <= h; M = w,
                w += 6)
                    M = Number(s.slice(M, w)),
                    qe *= 1e6,
                    Be = 1e6 * Be + M,
                    4294967296 <= Be && (qe += Be / 4294967296 | 0,
                    Be %= 4294967296);
                c && (c = l(bt(Be, qe)),
                s = c.next().value,
                c = c.next().value,
                Be = s,
                qe = c)
            }
            return new F(Be,qe)
        }
        var st;
        function mt(s, c) {
            return Error("Invalid wire type: " + s + " (at position " + c + ")")
        }
        function De() {
            return Error("Failed to read varint, encoding is invalid.")
        }
        function R(s, c) {
            return Error("Tried to read past the end of the data " + c + " > " + s)
        }
        function x() {
            throw Error("Invalid UTF8")
        }
        function k(s, c) {
            return c = String.fromCharCode.apply(null, c),
            s == null ? c : s + c
        }
        var ne = void 0, se, te = typeof TextDecoder < "u", Ue, _e = typeof TextEncoder < "u", Le;
        function He(s) {
            if (s !== tt)
                throw Error("illegal external caller")
        }
        function oe(s, c) {
            if (He(c),
            this.V = s,
            s != null && s.length === 0)
                throw Error("ByteString should be constructed with non-empty values")
        }
        function pe() {
            return Le || (Le = new oe(null,tt))
        }
        function Re(s) {
            He(tt);
            var c = s.V;
            return c = c == null || Ge && c != null && c instanceof Uint8Array ? c : typeof c == "string" ? we(c) : null,
            c == null ? c : s.V = c
        }
        function Ie(s) {
            if (typeof s == "string")
                return {
                    buffer: we(s),
                    C: !1
                };
            if (Array.isArray(s))
                return {
                    buffer: new Uint8Array(s),
                    C: !1
                };
            if (s.constructor === Uint8Array)
                return {
                    buffer: s,
                    C: !1
                };
            if (s.constructor === ArrayBuffer)
                return {
                    buffer: new Uint8Array(s),
                    C: !1
                };
            if (s.constructor === oe)
                return {
                    buffer: Re(s) || Pe(),
                    C: !0
                };
            if (s instanceof Uint8Array)
                return {
                    buffer: new Uint8Array(s.buffer,s.byteOffset,s.byteLength),
                    C: !1
                };
            throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")
        }
        function me(s, c) {
            this.i = null,
            this.m = !1,
            this.h = this.j = this.l = 0,
            Ke(this, s, c)
        }
        function Ke(s, c, h) {
            h = h === void 0 ? {} : h,
            s.S = h.S === void 0 ? !1 : h.S,
            c && (c = Ie(c),
            s.i = c.buffer,
            s.m = c.C,
            s.l = 0,
            s.j = s.i.length,
            s.h = s.l)
        }
        me.prototype.reset = function() {
            this.h = this.l
        }
        ;
        function z(s, c) {
            if (s.h = c,
            c > s.j)
                throw R(s.j, c)
        }
        function xe(s) {
            var c = s.i
              , h = s.h
              , M = c[h++]
              , w = M & 127;
            if (M & 128 && (M = c[h++],
            w |= (M & 127) << 7,
            M & 128 && (M = c[h++],
            w |= (M & 127) << 14,
            M & 128 && (M = c[h++],
            w |= (M & 127) << 21,
            M & 128 && (M = c[h++],
            w |= M << 28,
            M & 128 && c[h++] & 128 && c[h++] & 128 && c[h++] & 128 && c[h++] & 128 && c[h++] & 128)))))
                throw De();
            return z(s, h),
            w
        }
        function he(s, c) {
            if (0 > c)
                throw Error("Tried to read a negative byte length: " + c);
            var h = s.h
              , M = h + c;
            if (M > s.j)
                throw R(c, s.j - h);
            return s.h = M,
            h
        }
        var Ae = [];
        function le() {
            this.h = []
        }
        le.prototype.length = function() {
            return this.h.length
        }
        ,
        le.prototype.end = function() {
            var s = this.h;
            return this.h = [],
            s
        }
        ;
        function re(s, c, h) {
            for (; 0 < h || 127 < c; )
                s.h.push(c & 127 | 128),
                c = (c >>> 7 | h << 25) >>> 0,
                h >>>= 7;
            s.h.push(c)
        }
        function de(s, c) {
            for (; 127 < c; )
                s.h.push(c & 127 | 128),
                c >>>= 7;
            s.h.push(c)
        }
        function ke(s, c) {
            if (Ae.length) {
                var h = Ae.pop();
                Ke(h, s, c),
                s = h
            } else
                s = new me(s,c);
            this.h = s,
            this.j = this.h.h,
            this.i = this.l = -1,
            this.setOptions(c)
        }
        ke.prototype.setOptions = function(s) {
            s = s === void 0 ? {} : s,
            this.ca = s.ca === void 0 ? !1 : s.ca
        }
        ,
        ke.prototype.reset = function() {
            this.h.reset(),
            this.j = this.h.h,
            this.i = this.l = -1
        }
        ;
        function gt(s) {
            var c = s.h;
            if (c.h == c.j)
                return !1;
            s.j = s.h.h;
            var h = xe(s.h) >>> 0;
            if (c = h >>> 3,
            h &= 7,
            !(0 <= h && 5 >= h))
                throw mt(h, s.j);
            if (1 > c)
                throw Error("Invalid field number: " + c + " (at position " + s.j + ")");
            return s.l = c,
            s.i = h,
            !0
        }
        function rt(s) {
            switch (s.i) {
            case 0:
                if (s.i != 0)
                    rt(s);
                else
                    e: {
                        s = s.h;
                        for (var c = s.h, h = c + 10, M = s.i; c < h; )
                            if ((M[c++] & 128) === 0) {
                                z(s, c);
                                break e
                            }
                        throw De()
                    }
                break;
            case 1:
                s = s.h,
                z(s, s.h + 8);
                break;
            case 2:
                s.i != 2 ? rt(s) : (c = xe(s.h) >>> 0,
                s = s.h,
                z(s, s.h + c));
                break;
            case 5:
                s = s.h,
                z(s, s.h + 4);
                break;
            case 3:
                c = s.l;
                do {
                    if (!gt(s))
                        throw Error("Unmatched start-group tag: stream EOF");
                    if (s.i == 4) {
                        if (s.l != c)
                            throw Error("Unmatched end-group tag");
                        break
                    }
                    rt(s)
                } while (!0);
                break;
            default:
                throw mt(s.i, s.j)
            }
        }
        var Yt = [];
        function dn() {
            this.j = [],
            this.i = 0,
            this.h = new le
        }
        function Yn(s, c) {
            c.length !== 0 && (s.j.push(c),
            s.i += c.length)
        }
        function xr(s, c) {
            if (c = c.R) {
                Yn(s, s.h.end());
                for (var h = 0; h < c.length; h++)
                    Yn(s, Re(c[h]) || Pe())
            }
        }
        var tn = typeof Symbol == "function" && typeof Symbol() == "symbol" ? Symbol() : void 0;
        function Dn(s, c) {
            return tn ? s[tn] |= c : s.A !== void 0 ? s.A |= c : (Object.defineProperties(s, {
                A: {
                    value: c,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            }),
            c)
        }
        function Ki(s, c) {
            tn ? s[tn] && (s[tn] &= ~c) : s.A !== void 0 && (s.A &= ~c)
        }
        function At(s) {
            var c;
            return tn ? c = s[tn] : c = s.A,
            c ?? 0
        }
        function Nt(s, c) {
            tn ? s[tn] = c : s.A !== void 0 ? s.A = c : Object.defineProperties(s, {
                A: {
                    value: c,
                    configurable: !0,
                    writable: !0,
                    enumerable: !1
                }
            })
        }
        function si(s) {
            return Dn(s, 1),
            s
        }
        function Mr(s, c) {
            Nt(c, (s | 0) & -51)
        }
        function ai(s, c) {
            Nt(c, (s | 18) & -41)
        }
        var jn = {};
        function oi(s) {
            return s !== null && typeof s == "object" && !Array.isArray(s) && s.constructor === Object
        }
        var yn, Zi = [];
        Nt(Zi, 23),
        yn = Object.freeze(Zi);
        function yi(s) {
            if (At(s.o) & 2)
                throw Error("Cannot mutate an immutable Message")
        }
        function $i(s) {
            var c = s.length;
            (c = c ? s[c - 1] : void 0) && oi(c) ? c.g = 1 : (c = {},
            s.push((c.g = 1,
            c)))
        }
        function Sr(s) {
            var c = s.i + s.G;
            return s.B || (s.B = s.o[c] = {})
        }
        function nn(s, c) {
            return c === -1 ? null : c >= s.i ? s.B ? s.B[c] : void 0 : s.o[c + s.G]
        }
        function on(s, c, h, M) {
            yi(s),
            li(s, c, h, M)
        }
        function li(s, c, h, M) {
            s.j && (s.j = void 0),
            c >= s.i || M ? Sr(s)[c] = h : (s.o[c + s.G] = h,
            (s = s.B) && c in s && delete s[c])
        }
        function Ji(s, c, h, M) {
            var w = nn(s, c);
            Array.isArray(w) || (w = yn);
            var D = At(w);
            if (D & 1 || si(w),
            M)
                D & 2 || Dn(w, 2),
                h & 1 || Object.freeze(w);
            else {
                M = !(h & 2);
                var P = D & 2;
                h & 1 || !P ? M && D & 16 && !P && Ki(w, 16) : (w = si(Array.prototype.slice.call(w)),
                li(s, c, w))
            }
            return w
        }
        function y(s, c) {
            var h = nn(s, c)
              , M = h == null ? h : typeof h == "number" || h === "NaN" || h === "Infinity" || h === "-Infinity" ? Number(h) : void 0;
            return M != null && M !== h && li(s, c, M),
            M
        }
        function W(s, c, h, M, w) {
            s.h || (s.h = {});
            var D = s.h[h]
              , P = Ji(s, h, 3, w);
            if (!D) {
                var V = P;
                D = [];
                var Z = !!(At(s.o) & 16);
                P = !!(At(V) & 2);
                var ce = V;
                !w && P && (V = Array.prototype.slice.call(V));
                for (var ve = P, We = 0; We < V.length; We++) {
                    var Fe = V[We]
                      , Te = c
                      , Xe = !1;
                    if (Xe = Xe === void 0 ? !1 : Xe,
                    Fe = Array.isArray(Fe) ? new Te(Fe) : Xe ? new Te : void 0,
                    Fe !== void 0) {
                        Te = Fe.o;
                        var et = Xe = At(Te);
                        P && (et |= 2),
                        Z && (et |= 16),
                        et != Xe && Nt(Te, et),
                        Te = et,
                        ve = ve || !!(2 & Te),
                        D.push(Fe)
                    }
                }
                return s.h[h] = D,
                Z = At(V),
                c = Z | 33,
                c = ve ? c & -9 : c | 8,
                Z != c && (ve = V,
                Object.isFrozen(ve) && (ve = Array.prototype.slice.call(ve)),
                Nt(ve, c),
                V = ve),
                ce !== V && li(s, h, V),
                (w || M && P) && Dn(D, 2),
                M && Object.freeze(D),
                D
            }
            return w || (w = Object.isFrozen(D),
            M && !w ? Object.freeze(D) : !M && w && (D = Array.prototype.slice.call(D),
            s.h[h] = D)),
            D
        }
        function K(s, c, h) {
            var M = !!(At(s.o) & 2);
            if (c = W(s, c, h, M, M),
            s = Ji(s, h, 3, M),
            !(M || At(s) & 8)) {
                for (M = 0; M < c.length; M++) {
                    if (h = c[M],
                    At(h.o) & 2) {
                        var w = pt(h, !1);
                        w.j = h
                    } else
                        w = h;
                    h !== w && (c[M] = w,
                    s[M] = w.o)
                }
                Dn(s, 8)
            }
            return c
        }
        function j(s, c, h) {
            if (h != null && typeof h != "number")
                throw Error("Value of float/double field must be a number|null|undefined, found " + typeof h + ": " + h);
            on(s, c, h)
        }
        function q(s, c, h, M, w) {
            yi(s);
            var D = W(s, h, c, !1, !1);
            return h = M ?? new h,
            s = Ji(s, c, 2, !1),
            w != null ? (D.splice(w, 0, h),
            s.splice(w, 0, h.o)) : (D.push(h),
            s.push(h.o)),
            h.C() && Ki(s, 8),
            h
        }
        function ge(s, c) {
            return s ?? c
        }
        function Se(s, c, h) {
            return h = h === void 0 ? 0 : h,
            ge(y(s, c), h)
        }
        var Me;
        function Ce(s) {
            switch (typeof s) {
            case "number":
                return isFinite(s) ? s : String(s);
            case "object":
                if (s)
                    if (Array.isArray(s)) {
                        if ((At(s) & 128) !== 0)
                            return s = Array.prototype.slice.call(s),
                            $i(s),
                            s
                    } else {
                        if (Ge && s != null && s instanceof Uint8Array)
                            return ot(s);
                        if (s instanceof oe) {
                            var c = s.V;
                            return c == null ? "" : typeof c == "string" ? c : s.V = ot(c)
                        }
                    }
            }
            return s
        }
        function Ne(s, c, h, M) {
            if (s != null) {
                if (Array.isArray(s))
                    s = ze(s, c, h, M !== void 0);
                else if (oi(s)) {
                    var w = {}, D;
                    for (D in s)
                        w[D] = Ne(s[D], c, h, M);
                    s = w
                } else
                    s = c(s, M);
                return s
            }
        }
        function ze(s, c, h, M) {
            var w = At(s);
            M = M ? !!(w & 16) : void 0,
            s = Array.prototype.slice.call(s);
            for (var D = 0; D < s.length; D++)
                s[D] = Ne(s[D], c, h, M);
            return h(w, s),
            s
        }
        function Oe(s) {
            return s.ja === jn ? s.toJSON() : Ce(s)
        }
        function Je(s, c) {
            s & 128 && $i(c)
        }
        function ft(s, c, h) {
            if (h = h === void 0 ? ai : h,
            s != null) {
                if (Ge && s instanceof Uint8Array)
                    return s.length ? new oe(new Uint8Array(s),tt) : pe();
                if (Array.isArray(s)) {
                    var M = At(s);
                    return M & 2 ? s : c && !(M & 32) && (M & 16 || M === 0) ? (Nt(s, M | 2),
                    s) : (s = ze(s, ft, M & 4 ? ai : h, !0),
                    c = At(s),
                    c & 4 && c & 2 && Object.freeze(s),
                    s)
                }
                return s.ja === jn ? Et(s) : s
            }
        }
        function yt(s, c, h, M, w, D, P) {
            if (s = s.h && s.h[h]) {
                if (M = At(s),
                M & 2 ? M = s : (D = H(s, Et),
                ai(M, D),
                Object.freeze(D),
                M = D),
                yi(c),
                P = M == null ? yn : si([]),
                M != null) {
                    for (D = !!M.length,
                    s = 0; s < M.length; s++) {
                        var V = M[s];
                        D = D && !(At(V.o) & 2),
                        P[s] = V.o
                    }
                    D = (D ? 8 : 0) | 1,
                    s = At(P),
                    (s & D) !== D && (Object.isFrozen(P) && (P = Array.prototype.slice.call(P)),
                    Nt(P, s | D)),
                    c.h || (c.h = {}),
                    c.h[h] = M
                } else
                    c.h && (c.h[h] = void 0);
                li(c, h, P, w)
            } else
                on(c, h, ft(M, D, P), w)
        }
        function Et(s) {
            return At(s.o) & 2 || (s = pt(s, !0),
            Dn(s.o, 2)),
            s
        }
        function pt(s, c) {
            var h = s.o
              , M = [];
            Dn(M, 16);
            var w = s.constructor.h;
            if (w && M.push(w),
            w = s.B,
            w) {
                M.length = h.length,
                M.fill(void 0, M.length, h.length);
                var D = {};
                M[M.length - 1] = D
            }
            (At(h) & 128) !== 0 && $i(M),
            c = c || s.C() ? ai : Mr,
            D = s.constructor,
            Me = M,
            M = new D(M),
            Me = void 0,
            s.R && (M.R = s.R.slice()),
            D = !!(At(h) & 16);
            for (var P = w ? h.length - 1 : h.length, V = 0; V < P; V++)
                yt(s, M, V - s.G, h[V], !1, D, c);
            if (w)
                for (var Z in w)
                    yt(s, M, +Z, w[Z], !0, D, c);
            return M
        }
        function be(s, c, h) {
            s == null && (s = Me),
            Me = void 0;
            var M = this.constructor.i || 0
              , w = 0 < M
              , D = this.constructor.h
              , P = !1;
            if (s == null) {
                s = D ? [D] : [];
                var V = 48
                  , Z = !0;
                w && (M = 0,
                V |= 128),
                Nt(s, V)
            } else {
                if (!Array.isArray(s) || D && D !== s[0])
                    throw Error();
                var ce = V = Dn(s, 0);
                if ((Z = (16 & ce) !== 0) && ((P = (32 & ce) !== 0) || (ce |= 32)),
                w) {
                    if (128 & ce)
                        M = 0;
                    else if (0 < s.length) {
                        var ve = s[s.length - 1];
                        if (oi(ve) && "g"in ve) {
                            M = 0,
                            ce |= 128,
                            delete ve.g;
                            var We = !0, Fe;
                            for (Fe in ve) {
                                We = !1;
                                break
                            }
                            We && s.pop()
                        }
                    }
                } else if (128 & ce)
                    throw Error();
                V !== ce && Nt(s, ce)
            }
            this.G = (D ? 0 : -1) - M,
            this.h = void 0,
            this.o = s;
            e: {
                if (D = this.o.length,
                M = D - 1,
                D && (D = this.o[M],
                oi(D))) {
                    this.B = D,
                    this.i = M - this.G;
                    break e
                }
                c !== void 0 && -1 < c ? (this.i = Math.max(c, M + 1 - this.G),
                this.B = void 0) : this.i = Number.MAX_VALUE
            }
            if (!w && this.B && "g"in this.B)
                throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');
            if (h) {
                c = Z && !P && !0,
                w = this.i;
                var Te;
                for (Z = 0; Z < h.length; Z++)
                    P = h[Z],
                    P < w ? (P += this.G,
                    (M = s[P]) ? lt(M, c) : s[P] = yn) : (Te || (Te = Sr(this)),
                    (M = Te[P]) ? lt(M, c) : Te[P] = yn)
            }
        }
        be.prototype.toJSON = function() {
            return ze(this.o, Oe, Je)
        }
        ,
        be.prototype.C = function() {
            return !!(At(this.o) & 2)
        }
        ;
        function lt(s, c) {
            if (Array.isArray(s)) {
                var h = At(s)
                  , M = 1;
                !c || h & 2 || (M |= 16),
                (h & M) !== M && Nt(s, h | M)
            }
        }
        be.prototype.ja = jn,
        be.prototype.toString = function() {
            return this.o.toString()
        }
        ;
        function nt(s, c, h) {
            if (h) {
                var M = {}, w;
                for (w in h) {
                    var D = h[w]
                      , P = D.qa;
                    P || (M.J = D.wa || D.oa.W,
                    D.ia ? (M.aa = zt(D.ia),
                    P = (function(V) {
                        return function(Z, ce, ve) {
                            return V.J(Z, ce, ve, V.aa)
                        }
                    }
                    )(M)) : D.ka ? (M.Z = Ei(D.da.P, D.ka),
                    P = (function(V) {
                        return function(Z, ce, ve) {
                            return V.J(Z, ce, ve, V.Z)
                        }
                    }
                    )(M)) : P = M.J,
                    D.qa = P),
                    P(c, s, D.da),
                    M = {
                        J: M.J,
                        aa: M.aa,
                        Z: M.Z
                    }
                }
            }
            xr(c, s)
        }
        var Ft = Symbol();
        function Ln(s, c, h) {
            return s[Ft] || (s[Ft] = function(M, w) {
                return c(M, w, h)
            }
            )
        }
        function kt(s) {
            var c = s[Ft];
            if (!c) {
                var h = us(s);
                c = function(M, w) {
                    return to(M, w, h)
                }
                ,
                s[Ft] = c
            }
            return c
        }
        function ci(s) {
            var c = s.ia;
            if (c)
                return kt(c);
            if (c = s.va)
                return Ln(s.da.P, c, s.ka)
        }
        function xt(s) {
            var c = ci(s)
              , h = s.da
              , M = s.oa.U;
            return c ? function(w, D) {
                return M(w, D, h, c)
            }
            : function(w, D) {
                return M(w, D, h)
            }
        }
        function Bt(s, c) {
            var h = s[c];
            return typeof h == "function" && h.length === 0 && (h = h(),
            s[c] = h),
            Array.isArray(h) && (Qi in h || rn in h || 0 < h.length && typeof h[0] == "function") ? h : void 0
        }
        function jt(s, c, h, M, w, D) {
            c.P = s[0];
            var P = 1;
            if (s.length > P && typeof s[P] != "number") {
                var V = s[P++];
                h(c, V)
            }
            for (; P < s.length; ) {
                h = s[P++];
                for (var Z = P + 1; Z < s.length && typeof s[Z] != "number"; )
                    Z++;
                switch (V = s[P++],
                Z -= P,
                Z) {
                case 0:
                    M(c, h, V);
                    break;
                case 1:
                    (Z = Bt(s, P)) ? (P++,
                    w(c, h, V, Z)) : M(c, h, V, s[P++]);
                    break;
                case 2:
                    Z = P++,
                    Z = Bt(s, Z),
                    w(c, h, V, Z, s[P++]);
                    break;
                case 3:
                    D(c, h, V, s[P++], s[P++], s[P++]);
                    break;
                case 4:
                    D(c, h, V, s[P++], s[P++], s[P++], s[P++]);
                    break;
                default:
                    throw Error("unexpected number of binary field arguments: " + Z)
                }
            }
            return c
        }
        var Dt = Symbol();
        function zt(s) {
            var c = s[Dt];
            if (!c) {
                var h = cs(s);
                c = function(M, w) {
                    return no(M, w, h)
                }
                ,
                s[Dt] = c
            }
            return c
        }
        function Ei(s, c) {
            var h = s[Dt];
            return h || (h = function(M, w) {
                return nt(M, w, c)
            }
            ,
            s[Dt] = h),
            h
        }
        var rn = Symbol();
        function tc(s, c) {
            s.push(c)
        }
        function nc(s, c, h) {
            s.push(c, h.W)
        }
        function ic(s, c, h, M) {
            var w = zt(M)
              , D = cs(M).P
              , P = h.W;
            s.push(c, function(V, Z, ce) {
                return P(V, Z, ce, D, w)
            })
        }
        function rc(s, c, h, M, w, D) {
            var P = Ei(M, D)
              , V = h.W;
            s.push(c, function(Z, ce, ve) {
                return V(Z, ce, ve, M, P)
            })
        }
        function cs(s) {
            var c = s[rn];
            return c || (c = jt(s, s[rn] = [], tc, nc, ic, rc),
            Qi in s && rn in s && (s.length = 0),
            c)
        }
        var Qi = Symbol();
        function sc(s, c) {
            s[0] = c
        }
        function ac(s, c, h, M) {
            var w = h.U;
            s[c] = M ? function(D, P, V) {
                return w(D, P, V, M)
            }
            : w
        }
        function oc(s, c, h, M, w) {
            var D = h.U
              , P = kt(M)
              , V = us(M).P;
            s[c] = function(Z, ce, ve) {
                return D(Z, ce, ve, V, P, w)
            }
        }
        function lc(s, c, h, M, w, D, P) {
            var V = h.U
              , Z = Ln(M, w, D);
            s[c] = function(ce, ve, We) {
                return V(ce, ve, We, M, Z, P)
            }
        }
        function us(s) {
            var c = s[Qi];
            return c || (c = jt(s, s[Qi] = {}, sc, ac, oc, lc),
            Qi in s && rn in s && (s.length = 0),
            c)
        }
        function to(s, c, h) {
            for (; gt(c) && c.i != 4; ) {
                var M = c.l
                  , w = h[M];
                if (!w) {
                    var D = h[0];
                    D && (D = D[M]) && (w = h[M] = xt(D))
                }
                if (!w || !w(c, s, M)) {
                    w = c,
                    M = s,
                    D = w.j,
                    rt(w);
                    var P = w;
                    if (!P.ca) {
                        if (w = P.h.h - D,
                        P.h.h = D,
                        P = P.h,
                        w == 0)
                            w = pe();
                        else {
                            if (D = he(P, w),
                            P.S && P.m)
                                w = P.i.subarray(D, D + w);
                            else {
                                P = P.i;
                                var V = D;
                                w = D + w,
                                w = V === w ? Pe() : Pt ? P.slice(V, w) : new Uint8Array(P.subarray(V, w))
                            }
                            w = w.length == 0 ? pe() : new oe(w,tt)
                        }
                        (D = M.R) ? D.push(w) : M.R = [w]
                    }
                }
            }
            return s
        }
        function no(s, c, h) {
            for (var M = h.length, w = M % 2 == 1, D = w ? 1 : 0; D < M; D += 2)
                (0,
                h[D + 1])(c, s, h[D]);
            nt(s, c, w ? h[0] : void 0)
        }
        function er(s, c) {
            return {
                U: s,
                W: c
            }
        }
        var pn = er(function(s, c, h) {
            if (s.i !== 5)
                return !1;
            s = s.h;
            var M = s.i
              , w = s.h
              , D = M[w]
              , P = M[w + 1]
              , V = M[w + 2];
            return M = M[w + 3],
            z(s, s.h + 4),
            P = (D << 0 | P << 8 | V << 16 | M << 24) >>> 0,
            s = 2 * (P >> 31) + 1,
            D = P >>> 23 & 255,
            P &= 8388607,
            on(c, h, D == 255 ? P ? NaN : 1 / 0 * s : D == 0 ? s * Math.pow(2, -149) * P : s * Math.pow(2, D - 150) * (P + Math.pow(2, 23))),
            !0
        }, function(s, c, h) {
            if (c = y(c, h),
            c != null) {
                de(s.h, 8 * h + 5),
                s = s.h;
                var M = +c;
                M === 0 ? 0 < 1 / M ? Be = qe = 0 : (qe = 0,
                Be = 2147483648) : isNaN(M) ? (qe = 0,
                Be = 2147483647) : (M = (h = 0 > M ? -2147483648 : 0) ? -M : M,
                34028234663852886e22 < M ? (qe = 0,
                Be = (h | 2139095040) >>> 0) : 11754943508222875e-54 > M ? (M = Math.round(M / Math.pow(2, -149)),
                qe = 0,
                Be = (h | M) >>> 0) : (c = Math.floor(Math.log(M) / Math.LN2),
                M *= Math.pow(2, -c),
                M = Math.round(8388608 * M),
                16777216 <= M && ++c,
                qe = 0,
                Be = (h | c + 127 << 23 | M & 8388607) >>> 0)),
                h = Be,
                s.h.push(h >>> 0 & 255),
                s.h.push(h >>> 8 & 255),
                s.h.push(h >>> 16 & 255),
                s.h.push(h >>> 24 & 255)
            }
        })
          , cc = er(function(s, c, h) {
            if (s.i !== 0)
                return !1;
            var M = s.h
              , w = 0
              , D = s = 0
              , P = M.i
              , V = M.h;
            do {
                var Z = P[V++];
                w |= (Z & 127) << D,
                D += 7
            } while (32 > D && Z & 128);
            for (32 < D && (s |= (Z & 127) >> 4),
            D = 3; 32 > D && Z & 128; D += 7)
                Z = P[V++],
                s |= (Z & 127) << D;
            if (z(M, V),
            128 > Z)
                M = w >>> 0,
                Z = s >>> 0,
                (s = Z & 2147483648) && (M = ~M + 1 >>> 0,
                Z = ~Z >>> 0,
                M == 0 && (Z = Z + 1 >>> 0)),
                M = 4294967296 * Z + (M >>> 0);
            else
                throw De();
            return on(c, h, s ? -M : M),
            !0
        }, function(s, c, h) {
            c = nn(c, h),
            c != null && (typeof c == "string" && wt(c),
            c != null && (de(s.h, 8 * h),
            typeof c == "number" ? (s = s.h,
            dt(c),
            re(s, Be, qe)) : (h = wt(c),
            re(s.h, h.i, h.h))))
        })
          , uc = er(function(s, c, h) {
            return s.i !== 0 ? !1 : (on(c, h, xe(s.h)),
            !0)
        }, function(s, c, h) {
            if (c = nn(c, h),
            c != null && c != null)
                if (de(s.h, 8 * h),
                s = s.h,
                h = c,
                0 <= h)
                    de(s, h);
                else {
                    for (c = 0; 9 > c; c++)
                        s.h.push(h & 127 | 128),
                        h >>= 7;
                    s.h.push(1)
                }
        })
          , io = er(function(s, c, h) {
            if (s.i !== 2)
                return !1;
            var M = xe(s.h) >>> 0;
            s = s.h;
            var w = he(s, M);
            if (s = s.i,
            te) {
                var D = s, P;
                (P = se) || (P = se = new TextDecoder("utf-8",{
                    fatal: !0
                })),
                s = w + M,
                D = w === 0 && s === D.length ? D : D.subarray(w, s);
                try {
                    var V = P.decode(D)
                } catch (We) {
                    if (ne === void 0) {
                        try {
                            P.decode(new Uint8Array([128]))
                        } catch {}
                        try {
                            P.decode(new Uint8Array([97])),
                            ne = !0
                        } catch {
                            ne = !1
                        }
                    }
                    throw !ne && (se = void 0),
                    We
                }
            } else {
                V = w,
                M = V + M,
                w = [];
                for (var Z = null, ce, ve; V < M; )
                    ce = s[V++],
                    128 > ce ? w.push(ce) : 224 > ce ? V >= M ? x() : (ve = s[V++],
                    194 > ce || (ve & 192) !== 128 ? (V--,
                    x()) : w.push((ce & 31) << 6 | ve & 63)) : 240 > ce ? V >= M - 1 ? x() : (ve = s[V++],
                    (ve & 192) !== 128 || ce === 224 && 160 > ve || ce === 237 && 160 <= ve || ((D = s[V++]) & 192) !== 128 ? (V--,
                    x()) : w.push((ce & 15) << 12 | (ve & 63) << 6 | D & 63)) : 244 >= ce ? V >= M - 2 ? x() : (ve = s[V++],
                    (ve & 192) !== 128 || (ce << 28) + (ve - 144) >> 30 !== 0 || ((D = s[V++]) & 192) !== 128 || ((P = s[V++]) & 192) !== 128 ? (V--,
                    x()) : (ce = (ce & 7) << 18 | (ve & 63) << 12 | (D & 63) << 6 | P & 63,
                    ce -= 65536,
                    w.push((ce >> 10 & 1023) + 55296, (ce & 1023) + 56320))) : x(),
                    8192 <= w.length && (Z = k(Z, w),
                    w.length = 0);
                V = k(Z, w)
            }
            return on(c, h, V),
            !0
        }, function(s, c, h) {
            if (c = nn(c, h),
            c != null) {
                var M = !1;
                if (M = M === void 0 ? !1 : M,
                _e) {
                    if (M && /(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(c))
                        throw Error("Found an unpaired surrogate");
                    c = (Ue || (Ue = new TextEncoder)).encode(c)
                } else {
                    for (var w = 0, D = new Uint8Array(3 * c.length), P = 0; P < c.length; P++) {
                        var V = c.charCodeAt(P);
                        if (128 > V)
                            D[w++] = V;
                        else {
                            if (2048 > V)
                                D[w++] = V >> 6 | 192;
                            else {
                                if (55296 <= V && 57343 >= V) {
                                    if (56319 >= V && P < c.length) {
                                        var Z = c.charCodeAt(++P);
                                        if (56320 <= Z && 57343 >= Z) {
                                            V = 1024 * (V - 55296) + Z - 56320 + 65536,
                                            D[w++] = V >> 18 | 240,
                                            D[w++] = V >> 12 & 63 | 128,
                                            D[w++] = V >> 6 & 63 | 128,
                                            D[w++] = V & 63 | 128;
                                            continue
                                        } else
                                            P--
                                    }
                                    if (M)
                                        throw Error("Found an unpaired surrogate");
                                    V = 65533
                                }
                                D[w++] = V >> 12 | 224,
                                D[w++] = V >> 6 & 63 | 128
                            }
                            D[w++] = V & 63 | 128
                        }
                    }
                    c = w === D.length ? D : D.subarray(0, w)
                }
                de(s.h, 8 * h + 2),
                de(s.h, c.length),
                Yn(s, s.h.end()),
                Yn(s, c)
            }
        })
          , ro = er(function(s, c, h, M, w) {
            if (s.i !== 2)
                return !1;
            c = q(c, h, M),
            h = s.h.j,
            M = xe(s.h) >>> 0;
            var D = s.h.h + M
              , P = D - h;
            if (0 >= P && (s.h.j = D,
            w(c, s, void 0, void 0, void 0),
            P = D - s.h.h),
            P)
                throw Error("Message parsing ended unexpectedly. Expected to read " + (M + " bytes, instead read " + (M - P) + " bytes, either the data ended unexpectedly or the message misreported its own length"));
            return s.h.h = D,
            s.h.j = h,
            !0
        }, function(s, c, h, M, w) {
            if (c = K(c, M, h),
            c != null)
                for (M = 0; M < c.length; M++) {
                    var D = s;
                    de(D.h, 8 * h + 2);
                    var P = D.h.end();
                    Yn(D, P),
                    P.push(D.i),
                    D = P,
                    w(c[M], s),
                    P = s;
                    var V = D.pop();
                    for (V = P.i + P.h.length() - V; 127 < V; )
                        D.push(V & 127 | 128),
                        V >>>= 7,
                        P.i++;
                    D.push(V),
                    P.i++
                }
        });
        function fs(s) {
            return function(c, h) {
                e: {
                    if (Yt.length) {
                        var M = Yt.pop();
                        M.setOptions(h),
                        Ke(M.h, c, h),
                        c = M
                    } else
                        c = new ke(c,h);
                    try {
                        var w = us(s)
                          , D = to(new w.P, c, w);
                        break e
                    } finally {
                        w = c.h,
                        w.i = null,
                        w.m = !1,
                        w.l = 0,
                        w.j = 0,
                        w.h = 0,
                        w.S = !1,
                        c.l = -1,
                        c.i = -1,
                        100 > Yt.length && Yt.push(c)
                    }
                    D = void 0
                }
                return D
            }
        }
        function hs(s) {
            return function() {
                var c = new dn;
                no(this, c, cs(s)),
                Yn(c, c.h.end());
                for (var h = new Uint8Array(c.i), M = c.j, w = M.length, D = 0, P = 0; P < w; P++) {
                    var V = M[P];
                    h.set(V, D),
                    D += V.length
                }
                return c.j = [h],
                h
            }
        }
        function Ti(s) {
            be.call(this, s)
        }
        _(Ti, be);
        var so = [Ti, 1, uc, 2, pn, 3, io, 4, io];
        Ti.prototype.l = hs(so);
        function ds(s) {
            be.call(this, s, -1, fc)
        }
        _(ds, be),
        ds.prototype.addClassification = function(s, c) {
            return q(this, 1, Ti, s, c),
            this
        }
        ;
        var fc = [1]
          , ao = fs([ds, 1, ro, so]);
        function Ai(s) {
            be.call(this, s)
        }
        _(Ai, be);
        var oo = [Ai, 1, pn, 2, pn, 3, pn, 4, pn, 5, pn];
        Ai.prototype.l = hs(oo);
        function lo(s) {
            be.call(this, s, -1, hc)
        }
        _(lo, be);
        var hc = [1]
          , co = fs([lo, 1, ro, oo]);
        function yr(s) {
            be.call(this, s)
        }
        _(yr, be);
        var uo = [yr, 1, pn, 2, pn, 3, pn, 4, pn, 5, pn, 6, cc]
          , dc = fs(uo);
        yr.prototype.l = hs(uo);
        function fo(s, c, h) {
            if (h = s.createShader(h === 0 ? s.VERTEX_SHADER : s.FRAGMENT_SHADER),
            s.shaderSource(h, c),
            s.compileShader(h),
            !s.getShaderParameter(h, s.COMPILE_STATUS))
                throw Error(`Could not compile WebGL shader.

` + s.getShaderInfoLog(h));
            return h
        }
        function ho(s) {
            return K(s, Ti, 1).map(function(c) {
                var h = nn(c, 1);
                return {
                    index: h ?? 0,
                    score: Se(c, 2),
                    label: nn(c, 3) != null ? ge(nn(c, 3), "") : void 0,
                    displayName: nn(c, 4) != null ? ge(nn(c, 4), "") : void 0
                }
            })
        }
        function po(s) {
            return {
                x: Se(s, 1),
                y: Se(s, 2),
                z: Se(s, 3),
                visibility: y(s, 4) != null ? Se(s, 4) : void 0
            }
        }
        function mo(s) {
            return s.map(function(c) {
                return K(co(c), Ai, 1).map(po)
            })
        }
        function ps(s, c) {
            this.i = s,
            this.h = c,
            this.m = 0
        }
        function go(s, c, h) {
            return pc(s, c),
            typeof s.h.canvas.transferToImageBitmap == "function" ? Promise.resolve(s.h.canvas.transferToImageBitmap()) : h ? Promise.resolve(s.h.canvas) : typeof createImageBitmap == "function" ? createImageBitmap(s.h.canvas) : (s.j === void 0 && (s.j = document.createElement("canvas")),
            new Promise(function(M) {
                s.j.height = s.h.canvas.height,
                s.j.width = s.h.canvas.width,
                s.j.getContext("2d", {}).drawImage(s.h.canvas, 0, 0, s.h.canvas.width, s.h.canvas.height),
                M(s.j)
            }
            ))
        }
        function pc(s, c) {
            var h = s.h;
            if (s.s === void 0) {
                var M = fo(h, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, 0)
                  , w = fo(h, `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`, 1)
                  , D = h.createProgram();
                if (h.attachShader(D, M),
                h.attachShader(D, w),
                h.linkProgram(D),
                !h.getProgramParameter(D, h.LINK_STATUS))
                    throw Error(`Could not compile WebGL program.

` + h.getProgramInfoLog(D));
                M = s.s = D,
                h.useProgram(M),
                w = h.getUniformLocation(M, "sampler0"),
                s.l = {
                    O: h.getAttribLocation(M, "aVertex"),
                    N: h.getAttribLocation(M, "aTex"),
                    xa: w
                },
                s.v = h.createBuffer(),
                h.bindBuffer(h.ARRAY_BUFFER, s.v),
                h.enableVertexAttribArray(s.l.O),
                h.vertexAttribPointer(s.l.O, 2, h.FLOAT, !1, 0, 0),
                h.bufferData(h.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), h.STATIC_DRAW),
                h.bindBuffer(h.ARRAY_BUFFER, null),
                s.u = h.createBuffer(),
                h.bindBuffer(h.ARRAY_BUFFER, s.u),
                h.enableVertexAttribArray(s.l.N),
                h.vertexAttribPointer(s.l.N, 2, h.FLOAT, !1, 0, 0),
                h.bufferData(h.ARRAY_BUFFER, new Float32Array([0, 1, 0, 0, 1, 0, 1, 1]), h.STATIC_DRAW),
                h.bindBuffer(h.ARRAY_BUFFER, null),
                h.uniform1i(w, 0)
            }
            M = s.l,
            h.useProgram(s.s),
            h.canvas.width = c.width,
            h.canvas.height = c.height,
            h.viewport(0, 0, c.width, c.height),
            h.activeTexture(h.TEXTURE0),
            s.i.bindTexture2d(c.glName),
            h.enableVertexAttribArray(M.O),
            h.bindBuffer(h.ARRAY_BUFFER, s.v),
            h.vertexAttribPointer(M.O, 2, h.FLOAT, !1, 0, 0),
            h.enableVertexAttribArray(M.N),
            h.bindBuffer(h.ARRAY_BUFFER, s.u),
            h.vertexAttribPointer(M.N, 2, h.FLOAT, !1, 0, 0),
            h.bindFramebuffer(h.DRAW_FRAMEBUFFER ? h.DRAW_FRAMEBUFFER : h.FRAMEBUFFER, null),
            h.clearColor(0, 0, 0, 0),
            h.clear(h.COLOR_BUFFER_BIT),
            h.colorMask(!0, !0, !0, !0),
            h.drawArrays(h.TRIANGLE_FAN, 0, 4),
            h.disableVertexAttribArray(M.O),
            h.disableVertexAttribArray(M.N),
            h.bindBuffer(h.ARRAY_BUFFER, null),
            s.i.bindTexture2d(0)
        }
        function mc(s) {
            this.h = s
        }
        var gc = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]);
        function _c(s, c) {
            return c + s
        }
        function _o(s, c) {
            window[s] = c
        }
        function vc(s) {
            var c = document.createElement("script");
            return c.setAttribute("src", s),
            c.setAttribute("crossorigin", "anonymous"),
            new Promise(function(h) {
                c.addEventListener("load", function() {
                    h()
                }, !1),
                c.addEventListener("error", function() {
                    h()
                }, !1),
                document.body.appendChild(c)
            }
            )
        }
        function xc() {
            return b(function(s) {
                switch (s.h) {
                case 1:
                    return s.s = 2,
                    C(s, WebAssembly.instantiate(gc), 4);
                case 4:
                    s.h = 3,
                    s.s = 0;
                    break;
                case 2:
                    return s.s = 0,
                    s.l = null,
                    s.return(!1);
                case 3:
                    return s.return(!0)
                }
            })
        }
        function ms(s) {
            if (this.h = s,
            this.listeners = {},
            this.l = {},
            this.L = {},
            this.s = {},
            this.v = {},
            this.M = this.u = this.ga = !0,
            this.I = Promise.resolve(),
            this.fa = "",
            this.D = {},
            this.locateFile = s && s.locateFile || _c,
            typeof window == "object")
                var c = window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/";
            else if (typeof location < "u")
                c = location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/";
            else
                throw Error("solutions can only be loaded on a web page or in a web worker");
            if (this.ha = c,
            s.options) {
                c = l(Object.keys(s.options));
                for (var h = c.next(); !h.done; h = c.next()) {
                    h = h.value;
                    var M = s.options[h].default;
                    M !== void 0 && (this.l[h] = typeof M == "function" ? M() : M)
                }
            }
        }
        i = ms.prototype,
        i.close = function() {
            return this.j && this.j.delete(),
            Promise.resolve()
        }
        ;
        function Mc(s) {
            var c, h, M, w, D, P, V, Z, ce, ve, We;
            return b(function(Fe) {
                switch (Fe.h) {
                case 1:
                    return s.ga ? (c = s.h.files === void 0 ? [] : typeof s.h.files == "function" ? s.h.files(s.l) : s.h.files,
                    C(Fe, xc(), 2)) : Fe.return();
                case 2:
                    if (h = Fe.i,
                    typeof window == "object")
                        return _o("createMediapipeSolutionsWasm", {
                            locateFile: s.locateFile
                        }),
                        _o("createMediapipeSolutionsPackedAssets", {
                            locateFile: s.locateFile
                        }),
                        P = c.filter(function(Te) {
                            return Te.data !== void 0
                        }),
                        V = c.filter(function(Te) {
                            return Te.data === void 0
                        }),
                        Z = Promise.all(P.map(function(Te) {
                            var Xe = Er(s, Te.url);
                            if (Te.path !== void 0) {
                                var et = Te.path;
                                Xe = Xe.then(function(Tt) {
                                    return s.overrideFile(et, Tt),
                                    Promise.resolve(Tt)
                                })
                            }
                            return Xe
                        })),
                        ce = Promise.all(V.map(function(Te) {
                            return Te.simd === void 0 || Te.simd && h || !Te.simd && !h ? vc(s.locateFile(Te.url, s.ha)) : Promise.resolve()
                        })).then(function() {
                            var Te, Xe, et;
                            return b(function(Tt) {
                                if (Tt.h == 1)
                                    return Te = window.createMediapipeSolutionsWasm,
                                    Xe = window.createMediapipeSolutionsPackedAssets,
                                    et = s,
                                    C(Tt, Te(Xe), 2);
                                et.i = Tt.i,
                                Tt.h = 0
                            })
                        }),
                        ve = (function() {
                            return b(function(Te) {
                                return s.h.graph && s.h.graph.url ? Te = C(Te, Er(s, s.h.graph.url), 0) : (Te.h = 0,
                                Te = void 0),
                                Te
                            })
                        }
                        )(),
                        C(Fe, Promise.all([ce, Z, ve]), 7);
                    if (typeof importScripts != "function")
                        throw Error("solutions can only be loaded on a web page or in a web worker");
                    return M = c.filter(function(Te) {
                        return Te.simd === void 0 || Te.simd && h || !Te.simd && !h
                    }).map(function(Te) {
                        return s.locateFile(Te.url, s.ha)
                    }),
                    importScripts.apply(null, u(M)),
                    w = s,
                    C(Fe, createMediapipeSolutionsWasm(Module), 6);
                case 6:
                    w.i = Fe.i,
                    s.m = new OffscreenCanvas(1,1),
                    s.i.canvas = s.m,
                    D = s.i.GL.createContext(s.m, {
                        antialias: !1,
                        alpha: !1,
                        ua: typeof WebGL2RenderingContext < "u" ? 2 : 1
                    }),
                    s.i.GL.makeContextCurrent(D),
                    Fe.h = 4;
                    break;
                case 7:
                    if (s.m = document.createElement("canvas"),
                    We = s.m.getContext("webgl2", {}),
                    !We && (We = s.m.getContext("webgl", {}),
                    !We))
                        return alert("Failed to create WebGL canvas context when passing video frame."),
                        Fe.return();
                    s.K = We,
                    s.i.canvas = s.m,
                    s.i.createContext(s.m, !0, !0, {});
                case 4:
                    s.j = new s.i.SolutionWasm,
                    s.ga = !1,
                    Fe.h = 0
                }
            })
        }
        function Sc(s) {
            var c, h, M, w, D, P, V, Z;
            return b(function(ce) {
                if (ce.h == 1) {
                    if (s.h.graph && s.h.graph.url && s.fa === s.h.graph.url)
                        return ce.return();
                    if (s.u = !0,
                    !s.h.graph || !s.h.graph.url) {
                        ce.h = 2;
                        return
                    }
                    return s.fa = s.h.graph.url,
                    C(ce, Er(s, s.h.graph.url), 3)
                }
                for (ce.h != 2 && (c = ce.i,
                s.j.loadGraph(c)),
                h = l(Object.keys(s.D)),
                M = h.next(); !M.done; M = h.next())
                    w = M.value,
                    s.j.overrideFile(w, s.D[w]);
                if (s.D = {},
                s.h.listeners)
                    for (D = l(s.h.listeners),
                    P = D.next(); !P.done; P = D.next())
                        V = P.value,
                        Ac(s, V);
                Z = s.l,
                s.l = {},
                s.setOptions(Z),
                ce.h = 0
            })
        }
        i.reset = function() {
            var s = this;
            return b(function(c) {
                s.j && (s.j.reset(),
                s.s = {},
                s.v = {}),
                c.h = 0
            })
        }
        ,
        i.setOptions = function(s, c) {
            var h = this;
            if (c = c || this.h.options) {
                for (var M = [], w = [], D = {}, P = l(Object.keys(s)), V = P.next(); !V.done; D = {
                    X: D.X,
                    Y: D.Y
                },
                V = P.next())
                    if (V = V.value,
                    !(V in this.l && this.l[V] === s[V])) {
                        this.l[V] = s[V];
                        var Z = c[V];
                        Z !== void 0 && (Z.onChange && (D.X = Z.onChange,
                        D.Y = s[V],
                        M.push((function(ce) {
                            return function() {
                                var ve;
                                return b(function(We) {
                                    if (We.h == 1)
                                        return C(We, ce.X(ce.Y), 2);
                                    ve = We.i,
                                    ve === !0 && (h.u = !0),
                                    We.h = 0
                                })
                            }
                        }
                        )(D))),
                        Z.graphOptionXref && (V = Object.assign({}, {
                            calculatorName: "",
                            calculatorIndex: 0
                        }, Z.graphOptionXref, {
                            valueNumber: Z.type === 1 ? s[V] : 0,
                            valueBoolean: Z.type === 0 ? s[V] : !1,
                            valueString: Z.type === 2 ? s[V] : ""
                        }),
                        w.push(V)))
                    }
                (M.length !== 0 || w.length !== 0) && (this.u = !0,
                this.H = (this.H === void 0 ? [] : this.H).concat(w),
                this.F = (this.F === void 0 ? [] : this.F).concat(M))
            }
        }
        ;
        function yc(s) {
            var c, h, M, w, D, P, V;
            return b(function(Z) {
                switch (Z.h) {
                case 1:
                    if (!s.u)
                        return Z.return();
                    if (!s.F) {
                        Z.h = 2;
                        break
                    }
                    c = l(s.F),
                    h = c.next();
                case 3:
                    if (h.done) {
                        Z.h = 5;
                        break
                    }
                    return M = h.value,
                    C(Z, M(), 4);
                case 4:
                    h = c.next(),
                    Z.h = 3;
                    break;
                case 5:
                    s.F = void 0;
                case 2:
                    if (s.H) {
                        for (w = new s.i.GraphOptionChangeRequestList,
                        D = l(s.H),
                        P = D.next(); !P.done; P = D.next())
                            V = P.value,
                            w.push_back(V);
                        s.j.changeOptions(w),
                        w.delete(),
                        s.H = void 0
                    }
                    s.u = !1,
                    Z.h = 0
                }
            })
        }
        i.initialize = function() {
            var s = this;
            return b(function(c) {
                return c.h == 1 ? C(c, Mc(s), 2) : c.h != 3 ? C(c, Sc(s), 3) : C(c, yc(s), 0)
            })
        }
        ;
        function Er(s, c) {
            var h, M;
            return b(function(w) {
                return c in s.L ? w.return(s.L[c]) : (h = s.locateFile(c, ""),
                M = fetch(h).then(function(D) {
                    return D.arrayBuffer()
                }),
                s.L[c] = M,
                w.return(M))
            })
        }
        i.overrideFile = function(s, c) {
            this.j ? this.j.overrideFile(s, c) : this.D[s] = c
        }
        ,
        i.clearOverriddenFiles = function() {
            this.D = {},
            this.j && this.j.clearOverriddenFiles()
        }
        ,
        i.send = function(s, c) {
            var h = this, M, w, D, P, V, Z, ce, ve, We;
            return b(function(Fe) {
                switch (Fe.h) {
                case 1:
                    return h.h.inputs ? (M = 1e3 * (c ?? performance.now()),
                    C(Fe, h.I, 2)) : Fe.return();
                case 2:
                    return C(Fe, h.initialize(), 3);
                case 3:
                    for (w = new h.i.PacketDataList,
                    D = l(Object.keys(s)),
                    P = D.next(); !P.done; P = D.next())
                        if (V = P.value,
                        Z = h.h.inputs[V]) {
                            e: {
                                var Te = s[V];
                                switch (Z.type) {
                                case "video":
                                    var Xe = h.s[Z.stream];
                                    if (Xe || (Xe = new ps(h.i,h.K),
                                    h.s[Z.stream] = Xe),
                                    Xe.m === 0 && (Xe.m = Xe.i.createTexture()),
                                    typeof HTMLVideoElement < "u" && Te instanceof HTMLVideoElement)
                                        var et = Te.videoWidth
                                          , Tt = Te.videoHeight;
                                    else
                                        typeof HTMLImageElement < "u" && Te instanceof HTMLImageElement ? (et = Te.naturalWidth,
                                        Tt = Te.naturalHeight) : (et = Te.width,
                                        Tt = Te.height);
                                    Tt = {
                                        glName: Xe.m,
                                        width: et,
                                        height: Tt
                                    },
                                    et = Xe.h,
                                    et.canvas.width = Tt.width,
                                    et.canvas.height = Tt.height,
                                    et.activeTexture(et.TEXTURE0),
                                    Xe.i.bindTexture2d(Xe.m),
                                    et.texImage2D(et.TEXTURE_2D, 0, et.RGBA, et.RGBA, et.UNSIGNED_BYTE, Te),
                                    Xe.i.bindTexture2d(0),
                                    Xe = Tt;
                                    break e;
                                case "detections":
                                    for (Xe = h.s[Z.stream],
                                    Xe || (Xe = new mc(h.i),
                                    h.s[Z.stream] = Xe),
                                    Xe.data || (Xe.data = new Xe.h.DetectionListData),
                                    Xe.data.reset(Te.length),
                                    Tt = 0; Tt < Te.length; ++Tt) {
                                        et = Te[Tt];
                                        var St = Xe.data
                                          , Vt = St.setBoundingBox
                                          , ln = Tt
                                          , $t = et.la
                                          , ct = new yr;
                                        if (j(ct, 1, $t.ra),
                                        j(ct, 2, $t.sa),
                                        j(ct, 3, $t.height),
                                        j(ct, 4, $t.width),
                                        j(ct, 5, $t.rotation),
                                        on(ct, 6, $t.pa),
                                        $t = ct.l(),
                                        Vt.call(St, ln, $t),
                                        et.ea)
                                            for (St = 0; St < et.ea.length; ++St) {
                                                ct = et.ea[St],
                                                Vt = Xe.data,
                                                ln = Vt.addNormalizedLandmark,
                                                $t = Tt,
                                                ct = Object.assign({}, ct, {
                                                    visibility: ct.visibility ? ct.visibility : 0
                                                });
                                                var Gt = new Ai;
                                                j(Gt, 1, ct.x),
                                                j(Gt, 2, ct.y),
                                                j(Gt, 3, ct.z),
                                                ct.visibility && j(Gt, 4, ct.visibility),
                                                ct = Gt.l(),
                                                ln.call(Vt, $t, ct)
                                            }
                                        if (et.ba)
                                            for (St = 0; St < et.ba.length; ++St)
                                                Vt = Xe.data,
                                                ln = Vt.addClassification,
                                                $t = Tt,
                                                ct = et.ba[St],
                                                Gt = new Ti,
                                                j(Gt, 2, ct.score),
                                                ct.index && on(Gt, 1, ct.index),
                                                ct.label && on(Gt, 3, ct.label),
                                                ct.displayName && on(Gt, 4, ct.displayName),
                                                ct = Gt.l(),
                                                ln.call(Vt, $t, ct)
                                    }
                                    Xe = Xe.data;
                                    break e;
                                default:
                                    Xe = {}
                                }
                            }
                            switch (ce = Xe,
                            ve = Z.stream,
                            Z.type) {
                            case "video":
                                w.pushTexture2d(Object.assign({}, ce, {
                                    stream: ve,
                                    timestamp: M
                                }));
                                break;
                            case "detections":
                                We = ce,
                                We.stream = ve,
                                We.timestamp = M,
                                w.pushDetectionList(We);
                                break;
                            default:
                                throw Error("Unknown input config type: '" + Z.type + "'")
                            }
                        }
                    return h.j.send(w),
                    C(Fe, h.I, 4);
                case 4:
                    w.delete(),
                    Fe.h = 0
                }
            })
        }
        ;
        function Ec(s, c, h) {
            var M, w, D, P, V, Z, ce, ve, We, Fe, Te, Xe, et, Tt;
            return b(function(St) {
                switch (St.h) {
                case 1:
                    if (!h)
                        return St.return(c);
                    for (M = {},
                    w = 0,
                    D = l(Object.keys(h)),
                    P = D.next(); !P.done; P = D.next())
                        V = P.value,
                        Z = h[V],
                        typeof Z != "string" && Z.type === "texture" && c[Z.stream] !== void 0 && ++w;
                    1 < w && (s.M = !1),
                    ce = l(Object.keys(h)),
                    P = ce.next();
                case 2:
                    if (P.done) {
                        St.h = 4;
                        break
                    }
                    if (ve = P.value,
                    We = h[ve],
                    typeof We == "string")
                        return et = M,
                        Tt = ve,
                        C(St, Tc(s, ve, c[We]), 14);
                    if (Fe = c[We.stream],
                    We.type === "detection_list") {
                        if (Fe) {
                            for (var Vt = Fe.getRectList(), ln = Fe.getLandmarksList(), $t = Fe.getClassificationsList(), ct = [], Gt = 0; Gt < Vt.size(); ++Gt) {
                                var Kn = dc(Vt.get(Gt))
                                  , bc = Se(Kn, 1)
                                  , wc = Se(Kn, 2)
                                  , Rc = Se(Kn, 3)
                                  , Cc = Se(Kn, 4)
                                  , Pc = Se(Kn, 5, 0)
                                  , Tr = void 0;
                                Tr = Tr === void 0 ? 0 : Tr,
                                Kn = {
                                    la: {
                                        ra: bc,
                                        sa: wc,
                                        height: Rc,
                                        width: Cc,
                                        rotation: Pc,
                                        pa: ge(nn(Kn, 6), Tr)
                                    },
                                    ea: K(co(ln.get(Gt)), Ai, 1).map(po),
                                    ba: ho(ao($t.get(Gt)))
                                },
                                ct.push(Kn)
                            }
                            Vt = ct
                        } else
                            Vt = [];
                        M[ve] = Vt,
                        St.h = 7;
                        break
                    }
                    if (We.type === "proto_list") {
                        if (Fe) {
                            for (Vt = Array(Fe.size()),
                            ln = 0; ln < Fe.size(); ln++)
                                Vt[ln] = Fe.get(ln);
                            Fe.delete()
                        } else
                            Vt = [];
                        M[ve] = Vt,
                        St.h = 7;
                        break
                    }
                    if (Fe === void 0) {
                        St.h = 3;
                        break
                    }
                    if (We.type === "float_list") {
                        M[ve] = Fe,
                        St.h = 7;
                        break
                    }
                    if (We.type === "proto") {
                        M[ve] = Fe,
                        St.h = 7;
                        break
                    }
                    if (We.type !== "texture")
                        throw Error("Unknown output config type: '" + We.type + "'");
                    return Te = s.v[ve],
                    Te || (Te = new ps(s.i,s.K),
                    s.v[ve] = Te),
                    C(St, go(Te, Fe, s.M), 13);
                case 13:
                    Xe = St.i,
                    M[ve] = Xe;
                case 7:
                    We.transform && M[ve] && (M[ve] = We.transform(M[ve])),
                    St.h = 3;
                    break;
                case 14:
                    et[Tt] = St.i;
                case 3:
                    P = ce.next(),
                    St.h = 2;
                    break;
                case 4:
                    return St.return(M)
                }
            })
        }
        function Tc(s, c, h) {
            var M;
            return b(function(w) {
                return typeof h == "number" || h instanceof Uint8Array || h instanceof s.i.Uint8BlobList ? w.return(h) : h instanceof s.i.Texture2dDataOut ? (M = s.v[c],
                M || (M = new ps(s.i,s.K),
                s.v[c] = M),
                w.return(go(M, h, s.M))) : w.return(void 0)
            })
        }
        function Ac(s, c) {
            for (var h = c.name || "$", M = [].concat(u(c.wants)), w = new s.i.StringList, D = l(c.wants), P = D.next(); !P.done; P = D.next())
                w.push_back(P.value);
            D = s.i.PacketListener.implement({
                onResults: function(V) {
                    for (var Z = {}, ce = 0; ce < c.wants.length; ++ce)
                        Z[M[ce]] = V.get(ce);
                    var ve = s.listeners[h];
                    ve && (s.I = Ec(s, Z, c.outs).then(function(We) {
                        We = ve(We);
                        for (var Fe = 0; Fe < c.wants.length; ++Fe) {
                            var Te = Z[M[Fe]];
                            typeof Te == "object" && Te.hasOwnProperty && Te.hasOwnProperty("delete") && Te.delete()
                        }
                        We && (s.I = We)
                    }))
                }
            }),
            s.j.attachMultiListener(w, D),
            w.delete()
        }
        i.onResults = function(s, c) {
            this.listeners[c || "$"] = s
        }
        ,
        Q("Solution", ms),
        Q("OptionType", {
            BOOL: 0,
            NUMBER: 1,
            ta: 2,
            0: "BOOL",
            1: "NUMBER",
            2: "STRING"
        });
        function vo(s) {
            return s === void 0 && (s = 0),
            s === 1 ? "hand_landmark_full.tflite" : "hand_landmark_lite.tflite"
        }
        function xo(s) {
            var c = this;
            s = s || {},
            this.h = new ms({
                locateFile: s.locateFile,
                files: function(h) {
                    return [{
                        url: "hands_solution_packed_assets_loader.js"
                    }, {
                        simd: !1,
                        url: "hands_solution_wasm_bin.js"
                    }, {
                        simd: !0,
                        url: "hands_solution_simd_wasm_bin.js"
                    }, {
                        data: !0,
                        url: vo(h.modelComplexity)
                    }]
                },
                graph: {
                    url: "hands.binarypb"
                },
                inputs: {
                    image: {
                        type: "video",
                        stream: "input_frames_gpu"
                    }
                },
                listeners: [{
                    wants: ["multi_hand_landmarks", "multi_hand_world_landmarks", "image_transformed", "multi_handedness"],
                    outs: {
                        image: "image_transformed",
                        multiHandLandmarks: {
                            type: "proto_list",
                            stream: "multi_hand_landmarks",
                            transform: mo
                        },
                        multiHandWorldLandmarks: {
                            type: "proto_list",
                            stream: "multi_hand_world_landmarks",
                            transform: mo
                        },
                        multiHandedness: {
                            type: "proto_list",
                            stream: "multi_handedness",
                            transform: function(h) {
                                return h.map(function(M) {
                                    return ho(ao(M))[0]
                                })
                            }
                        }
                    }
                }],
                options: {
                    useCpuInference: {
                        type: 0,
                        graphOptionXref: {
                            calculatorType: "InferenceCalculator",
                            fieldName: "use_cpu_inference"
                        },
                        default: typeof window != "object" || window.navigator === void 0 ? !1 : "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document
                    },
                    selfieMode: {
                        type: 0,
                        graphOptionXref: {
                            calculatorType: "GlScalerCalculator",
                            calculatorIndex: 1,
                            fieldName: "flip_horizontal"
                        }
                    },
                    maxNumHands: {
                        type: 1,
                        graphOptionXref: {
                            calculatorType: "ConstantSidePacketCalculator",
                            calculatorName: "ConstantSidePacketCalculator",
                            fieldName: "int_value"
                        }
                    },
                    modelComplexity: {
                        type: 1,
                        graphOptionXref: {
                            calculatorType: "ConstantSidePacketCalculator",
                            calculatorName: "ConstantSidePacketCalculatorModelComplexity",
                            fieldName: "int_value"
                        },
                        onChange: function(h) {
                            var M, w, D;
                            return b(function(P) {
                                return P.h == 1 ? (M = vo(h),
                                w = "third_party/mediapipe/modules/hand_landmark/" + M,
                                C(P, Er(c.h, M), 2)) : (D = P.i,
                                c.h.overrideFile(w, D),
                                P.return(!0))
                            })
                        }
                    },
                    minDetectionConfidence: {
                        type: 1,
                        graphOptionXref: {
                            calculatorType: "TensorsToDetectionsCalculator",
                            calculatorName: "handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",
                            fieldName: "min_score_thresh"
                        }
                    },
                    minTrackingConfidence: {
                        type: 1,
                        graphOptionXref: {
                            calculatorType: "ThresholdingCalculator",
                            calculatorName: "handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",
                            fieldName: "threshold"
                        }
                    }
                }
            })
        }
        i = xo.prototype,
        i.close = function() {
            return this.h.close(),
            Promise.resolve()
        }
        ,
        i.onResults = function(s) {
            this.h.onResults(s)
        }
        ,
        i.initialize = function() {
            var s = this;
            return b(function(c) {
                return C(c, s.h.initialize(), 0)
            })
        }
        ,
        i.reset = function() {
            this.h.reset()
        }
        ,
        i.send = function(s) {
            var c = this;
            return b(function(h) {
                return C(h, c.h.send(s), 0)
            })
        }
        ,
        i.setOptions = function(s) {
            this.h.setOptions(s)
        }
        ,
        Q("Hands", xo),
        Q("HAND_CONNECTIONS", [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [0, 17], [17, 18], [18, 19], [19, 20]]),
        Q("VERSION", "0.4.1675469240")
    }
    ).call(Ys)),
    Ys
}
var Xm = Wm(), js = {}, _l;
function qm() {
    return _l || (_l = 1,
    (function() {
        function i(v) {
            var b = 0;
            return function() {
                return b < v.length ? {
                    done: !1,
                    value: v[b++]
                } : {
                    done: !0
                }
            }
        }
        var e = typeof Object.defineProperties == "function" ? Object.defineProperty : function(v, b, X) {
            return v == Array.prototype || v == Object.prototype || (v[b] = X.value),
            v
        }
        ;
        function t(v) {
            v = [typeof globalThis == "object" && globalThis, v, typeof window == "object" && window, typeof self == "object" && self, typeof is == "object" && is];
            for (var b = 0; b < v.length; ++b) {
                var X = v[b];
                if (X && X.Math == Math)
                    return X
            }
            throw Error("Cannot find global object")
        }
        var n = t(this);
        function r(v, b) {
            if (b)
                e: {
                    var X = n;
                    v = v.split(".");
                    for (var G = 0; G < v.length - 1; G++) {
                        var J = v[G];
                        if (!(J in X))
                            break e;
                        X = X[J]
                    }
                    v = v[v.length - 1],
                    G = X[v],
                    b = b(G),
                    b != G && b != null && e(X, v, {
                        configurable: !0,
                        writable: !0,
                        value: b
                    })
                }
        }
        r("Symbol", function(v) {
            function b(Q) {
                if (this instanceof b)
                    throw new TypeError("Symbol is not a constructor");
                return new X(G + (Q || "") + "_" + J++,Q)
            }
            function X(Q, B) {
                this.g = Q,
                e(this, "description", {
                    configurable: !0,
                    writable: !0,
                    value: B
                })
            }
            if (v)
                return v;
            X.prototype.toString = function() {
                return this.g
            }
            ;
            var G = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_"
              , J = 0;
            return b
        }),
        r("Symbol.iterator", function(v) {
            if (v)
                return v;
            v = Symbol("Symbol.iterator");
            for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), X = 0; X < b.length; X++) {
                var G = n[b[X]];
                typeof G == "function" && typeof G.prototype[v] != "function" && e(G.prototype, v, {
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        return a(i(this))
                    }
                })
            }
            return v
        });
        function a(v) {
            return v = {
                next: v
            },
            v[Symbol.iterator] = function() {
                return this
            }
            ,
            v
        }
        function o(v) {
            var b = typeof Symbol < "u" && Symbol.iterator && v[Symbol.iterator];
            return b ? b.call(v) : {
                next: i(v)
            }
        }
        function l() {
            this.i = !1,
            this.g = null,
            this.o = void 0,
            this.j = 1,
            this.m = 0,
            this.h = null
        }
        function u(v) {
            if (v.i)
                throw new TypeError("Generator is already running");
            v.i = !0
        }
        l.prototype.l = function(v) {
            this.o = v
        }
        ;
        function f(v, b) {
            v.h = {
                F: b,
                G: !0
            },
            v.j = v.m
        }
        l.prototype.return = function(v) {
            this.h = {
                return: v
            },
            this.j = this.m
        }
        ;
        function p(v) {
            this.g = new l,
            this.h = v
        }
        function m(v, b) {
            u(v.g);
            var X = v.g.g;
            return X ? g(v, "return"in X ? X.return : function(G) {
                return {
                    value: G,
                    done: !0
                }
            }
            , b, v.g.return) : (v.g.return(b),
            S(v))
        }
        function g(v, b, X, G) {
            try {
                var J = b.call(v.g.g, X);
                if (!(J instanceof Object))
                    throw new TypeError("Iterator result " + J + " is not an object");
                if (!J.done)
                    return v.g.i = !1,
                    J;
                var Q = J.value
            } catch (B) {
                return v.g.g = null,
                f(v.g, B),
                S(v)
            }
            return v.g.g = null,
            G.call(v.g, Q),
            S(v)
        }
        function S(v) {
            for (; v.g.j; )
                try {
                    var b = v.h(v.g);
                    if (b)
                        return v.g.i = !1,
                        {
                            value: b.value,
                            done: !1
                        }
                } catch (X) {
                    v.g.o = void 0,
                    f(v.g, X)
                }
            if (v.g.i = !1,
            v.g.h) {
                if (b = v.g.h,
                v.g.h = null,
                b.G)
                    throw b.F;
                return {
                    value: b.return,
                    done: !0
                }
            }
            return {
                value: void 0,
                done: !0
            }
        }
        function E(v) {
            this.next = function(b) {
                return u(v.g),
                v.g.g ? b = g(v, v.g.g.next, b, v.g.l) : (v.g.l(b),
                b = S(v)),
                b
            }
            ,
            this.throw = function(b) {
                return u(v.g),
                v.g.g ? b = g(v, v.g.g.throw, b, v.g.l) : (f(v.g, b),
                b = S(v)),
                b
            }
            ,
            this.return = function(b) {
                return m(v, b)
            }
            ,
            this[Symbol.iterator] = function() {
                return this
            }
        }
        function A(v) {
            function b(G) {
                return v.next(G)
            }
            function X(G) {
                return v.throw(G)
            }
            return new Promise(function(G, J) {
                function Q(B) {
                    B.done ? G(B.value) : Promise.resolve(B.value).then(b, X).then(Q, J)
                }
                Q(v.next())
            }
            )
        }
        r("Promise", function(v) {
            function b(B) {
                this.h = 0,
                this.i = void 0,
                this.g = [],
                this.o = !1;
                var H = this.j();
                try {
                    B(H.resolve, H.reject)
                } catch (ee) {
                    H.reject(ee)
                }
            }
            function X() {
                this.g = null
            }
            function G(B) {
                return B instanceof b ? B : new b(function(H) {
                    H(B)
                }
                )
            }
            if (v)
                return v;
            X.prototype.h = function(B) {
                if (this.g == null) {
                    this.g = [];
                    var H = this;
                    this.i(function() {
                        H.l()
                    })
                }
                this.g.push(B)
            }
            ;
            var J = n.setTimeout;
            X.prototype.i = function(B) {
                J(B, 0)
            }
            ,
            X.prototype.l = function() {
                for (; this.g && this.g.length; ) {
                    var B = this.g;
                    this.g = [];
                    for (var H = 0; H < B.length; ++H) {
                        var ee = B[H];
                        B[H] = null;
                        try {
                            ee()
                        } catch (ue) {
                            this.j(ue)
                        }
                    }
                }
                this.g = null
            }
            ,
            X.prototype.j = function(B) {
                this.i(function() {
                    throw B
                })
            }
            ,
            b.prototype.j = function() {
                function B(ue) {
                    return function(fe) {
                        ee || (ee = !0,
                        ue.call(H, fe))
                    }
                }
                var H = this
                  , ee = !1;
                return {
                    resolve: B(this.A),
                    reject: B(this.l)
                }
            }
            ,
            b.prototype.A = function(B) {
                if (B === this)
                    this.l(new TypeError("A Promise cannot resolve to itself"));
                else if (B instanceof b)
                    this.C(B);
                else {
                    e: switch (typeof B) {
                    case "object":
                        var H = B != null;
                        break e;
                    case "function":
                        H = !0;
                        break e;
                    default:
                        H = !1
                    }
                    H ? this.v(B) : this.m(B)
                }
            }
            ,
            b.prototype.v = function(B) {
                var H = void 0;
                try {
                    H = B.then
                } catch (ee) {
                    this.l(ee);
                    return
                }
                typeof H == "function" ? this.D(H, B) : this.m(B)
            }
            ,
            b.prototype.l = function(B) {
                this.u(2, B)
            }
            ,
            b.prototype.m = function(B) {
                this.u(1, B)
            }
            ,
            b.prototype.u = function(B, H) {
                if (this.h != 0)
                    throw Error("Cannot settle(" + B + ", " + H + "): Promise already settled in state" + this.h);
                this.h = B,
                this.i = H,
                this.h === 2 && this.B(),
                this.H()
            }
            ,
            b.prototype.B = function() {
                var B = this;
                J(function() {
                    if (B.I()) {
                        var H = n.console;
                        typeof H < "u" && H.error(B.i)
                    }
                }, 1)
            }
            ,
            b.prototype.I = function() {
                if (this.o)
                    return !1;
                var B = n.CustomEvent
                  , H = n.Event
                  , ee = n.dispatchEvent;
                return typeof ee > "u" ? !0 : (typeof B == "function" ? B = new B("unhandledrejection",{
                    cancelable: !0
                }) : typeof H == "function" ? B = new H("unhandledrejection",{
                    cancelable: !0
                }) : (B = n.document.createEvent("CustomEvent"),
                B.initCustomEvent("unhandledrejection", !1, !0, B)),
                B.promise = this,
                B.reason = this.i,
                ee(B))
            }
            ,
            b.prototype.H = function() {
                if (this.g != null) {
                    for (var B = 0; B < this.g.length; ++B)
                        Q.h(this.g[B]);
                    this.g = null
                }
            }
            ;
            var Q = new X;
            return b.prototype.C = function(B) {
                var H = this.j();
                B.s(H.resolve, H.reject)
            }
            ,
            b.prototype.D = function(B, H) {
                var ee = this.j();
                try {
                    B.call(H, ee.resolve, ee.reject)
                } catch (ue) {
                    ee.reject(ue)
                }
            }
            ,
            b.prototype.then = function(B, H) {
                function ee(Ve, Ge) {
                    return typeof Ve == "function" ? function(ht) {
                        try {
                            ue(Ve(ht))
                        } catch (ot) {
                            fe(ot)
                        }
                    }
                    : Ge
                }
                var ue, fe, Ee = new b(function(Ve, Ge) {
                    ue = Ve,
                    fe = Ge
                }
                );
                return this.s(ee(B, ue), ee(H, fe)),
                Ee
            }
            ,
            b.prototype.catch = function(B) {
                return this.then(void 0, B)
            }
            ,
            b.prototype.s = function(B, H) {
                function ee() {
                    switch (ue.h) {
                    case 1:
                        B(ue.i);
                        break;
                    case 2:
                        H(ue.i);
                        break;
                    default:
                        throw Error("Unexpected state: " + ue.h)
                    }
                }
                var ue = this;
                this.g == null ? Q.h(ee) : this.g.push(ee),
                this.o = !0
            }
            ,
            b.resolve = G,
            b.reject = function(B) {
                return new b(function(H, ee) {
                    ee(B)
                }
                )
            }
            ,
            b.race = function(B) {
                return new b(function(H, ee) {
                    for (var ue = o(B), fe = ue.next(); !fe.done; fe = ue.next())
                        G(fe.value).s(H, ee)
                }
                )
            }
            ,
            b.all = function(B) {
                var H = o(B)
                  , ee = H.next();
                return ee.done ? G([]) : new b(function(ue, fe) {
                    function Ee(ht) {
                        return function(ot) {
                            Ve[ht] = ot,
                            Ge--,
                            Ge == 0 && ue(Ve)
                        }
                    }
                    var Ve = []
                      , Ge = 0;
                    do
                        Ve.push(void 0),
                        Ge++,
                        G(ee.value).s(Ee(Ve.length - 1), fe),
                        ee = H.next();
                    while (!ee.done)
                }
                )
            }
            ,
            b
        });
        var _ = typeof Object.assign == "function" ? Object.assign : function(v, b) {
            for (var X = 1; X < arguments.length; X++) {
                var G = arguments[X];
                if (G)
                    for (var J in G)
                        Object.prototype.hasOwnProperty.call(G, J) && (v[J] = G[J])
            }
            return v
        }
        ;
        r("Object.assign", function(v) {
            return v || _
        });
        var d = this || self
          , L = {
            facingMode: "user",
            width: 640,
            height: 480
        };
        function U(v, b) {
            this.video = v,
            this.i = 0,
            this.h = Object.assign(Object.assign({}, L), b)
        }
        U.prototype.stop = function() {
            var v = this, b, X, G, J;
            return A(new E(new p(function(Q) {
                if (v.g) {
                    for (b = v.g.getTracks(),
                    X = o(b),
                    G = X.next(); !G.done; G = X.next())
                        J = G.value,
                        J.stop();
                    v.g = void 0
                }
                Q.j = 0
            }
            )))
        }
        ,
        U.prototype.start = function() {
            var v = this, b;
            return A(new E(new p(function(X) {
                return navigator.mediaDevices && navigator.mediaDevices.getUserMedia || alert("No navigator.mediaDevices.getUserMedia exists."),
                b = v.h,
                X.return(navigator.mediaDevices.getUserMedia({
                    video: {
                        facingMode: b.facingMode,
                        width: b.width,
                        height: b.height
                    }
                }).then(function(G) {
                    I(v, G)
                }).catch(function(G) {
                    var J = "Failed to acquire camera feed: " + G;
                    throw console.error(J),
                    alert(J),
                    G
                }))
            }
            )))
        }
        ;
        function C(v) {
            window.requestAnimationFrame(function() {
                O(v)
            })
        }
        function I(v, b) {
            v.g = b,
            v.video.srcObject = b,
            v.video.onloadedmetadata = function() {
                v.video.play(),
                C(v)
            }
        }
        function O(v) {
            var b = null;
            v.video.paused || v.video.currentTime === v.i || (v.i = v.video.currentTime,
            b = v.h.onFrame()),
            b ? b.then(function() {
                C(v)
            }) : C(v)
        }
        var N = ["Camera"]
          , Y = d;
        N[0]in Y || typeof Y.execScript > "u" || Y.execScript("var " + N[0]);
        for (var T; N.length && (T = N.shift()); )
            N.length || U === void 0 ? Y[T] && Y[T] !== Object.prototype[T] ? Y = Y[T] : Y = Y[T] = {} : Y[T] = U
    }
    ).call(js)),
    js
}
var Ym = qm();
class jm {
    constructor() {
        this.videoElement = document.getElementById("input-video"),
        this.hands = null,
        this.camera = null,
        this.latestResults = null
    }
    async init() {
        this.hands = new Xm.Hands({
            locateFile: e => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${e}`
        }),
        this.hands.setOptions({
            maxNumHands: 1,
            modelComplexity: 1,
            minDetectionConfidence: .5,
            minTrackingConfidence: .5
        }),
        this.hands.onResults(this.onResults.bind(this)),
        this.isProcessing = !1,
        this.camera = new Ym.Camera(this.videoElement,{
            onFrame: async () => {
                if (this.isProcessing)
                    return;
                this.isProcessing = !0;
                const e = setTimeout( () => {
                    this.isProcessing && (console.warn("Frame processing timed out, resetting flag"),
                    this.isProcessing = !1)
                }
                , 1e3);
                try {
                    await this.hands.send({
                        image: this.videoElement
                    })
                } catch (t) {
                    console.error("MediaPipe error:", t)
                } finally {
                    clearTimeout(e),
                    this.isProcessing = !1
                }
            }
            ,
            width: 1280,
            height: 720
        })
    }
    start() {
        this.camera.start()
    }
    onResults(e) {
        this.latestResults = e
    }
    getHandData() {
        if (!this.latestResults || !this.latestResults.multiHandLandmarks || this.latestResults.multiHandLandmarks.length === 0)
            return null;
        const e = this.latestResults.multiHandLandmarks[0];
        if (!e || e.some(E => isNaN(E.x) || isNaN(E.y) || isNaN(E.z)))
            return null;
        const t = e[0]
          , n = [4, 8, 12, 16, 20];
        let r = 0;
        for (const E of n) {
            const A = e[E]
              , _ = Math.sqrt(Math.pow(A.x - t.x, 2) + Math.pow(A.y - t.y, 2) + Math.pow(A.z - t.z, 2));
            r += _
        }
        const a = r / 5
          , o = Math.min(Math.max((a - .15) / .3, 0), 1)
          , l = (1 - t.x) * 2 - 1
          , u = -(t.y * 2 - 1)
          , f = -t.z * 5
          , p = e[4]
          , m = e[8]
          , S = Math.sqrt(Math.pow(p.x - m.x, 2) + Math.pow(p.y - m.y, 2) + Math.pow(p.z - m.z, 2)) < .03;
        return isNaN(l) || isNaN(u) || isNaN(o) ? null : {
            position: {
                x: l,
                y: u,
                z: f
            },
            openness: o,
            isPinch: S,
            landmarks: e
        }
    }
}
class Km {
    constructor(e) {
        this.scene = e,
        this.particleCount = 5e3,
        this.particles = null,
        this.geometry = null,
        this.material = null,
        this.currentTemplate = "sphere",
        this.targetPositions = [],
        this.currentPositions = [],
        this.init()
    }
    init() {
        this.geometry = new Sn,
        this.currentPositions = new Float32Array(this.particleCount * 3),
        this.targetPositions = new Float32Array(this.particleCount * 3);
        for (let e = 0; e < this.particleCount * 3; e++)
            this.currentPositions[e] = (Math.random() - .5) * 10;
        this.geometry.setAttribute("position", new Mn(this.currentPositions,3)),
        this.material = new Yl({
            color: 16777215,
            size: .05,
            transparent: !0,
            opacity: .8,
            blending: Ks
        }),
        this.particles = new Gu(this.geometry,this.material),
        this.scene.add(this.particles),
        this.generateTemplate("sphere")
    }
    generateTemplate(e) {
        this.currentTemplate = e;
        for (let t = 0; t < this.particleCount; t++) {
            let n, r, a;
            if (e === "sphere") {
                const l = Math.random() * Math.PI * 2
                  , u = Math.acos(2 * Math.random() - 1);
                n = 1.5 * Math.sin(u) * Math.cos(l),
                r = 1.5 * Math.sin(u) * Math.sin(l),
                a = 1.5 * Math.cos(u)
            } else if (e === "heart") {
                const o = Math.random() * Math.PI * 2
                  , l = 16 * Math.pow(Math.sin(o), 3)
                  , u = 13 * Math.cos(o) - 5 * Math.cos(2 * o) - 2 * Math.cos(3 * o) - Math.cos(4 * o)
                  , f = .1;
                n = l * f,
                r = u * f,
                a = (Math.random() - .5) * .2
            } else if (e === "flower") {
                const l = Math.random() * Math.PI * 4
                  , u = Math.random() * Math.PI
                  , f = 1 + Math.sin(5 * l / 2);
                n = f * Math.cos(l) * Math.sin(u) * 1,
                r = f * Math.sin(l) * Math.sin(u) * 1,
                a = f * Math.cos(u) + Math.sin(l * 2) * .5
            } else if (e === "saturn")
                if (t < this.particleCount * .3) {
                    const l = Math.random() * Math.PI * 2
                      , u = Math.acos(2 * Math.random() - 1);
                    n = .8 * Math.sin(u) * Math.cos(l),
                    r = .8 * Math.sin(u) * Math.sin(l),
                    a = .8 * Math.cos(u)
                } else {
                    const o = 1.5 + Math.random() * 1
                      , l = Math.random() * Math.PI * 2;
                    n = o * Math.cos(l),
                    r = (Math.random() - .5) * .1,
                    a = o * Math.sin(l);
                    const u = Math.PI / 6
                      , f = r * Math.cos(u) - a * Math.sin(u)
                      , p = r * Math.sin(u) + a * Math.cos(u);
                    r = f,
                    a = p
                }
            else if (e === "fireworks") {
                const o = Math.random() * Math.PI * 2
                  , l = Math.acos(2 * Math.random() - 1)
                  , u = Math.random() * 3;
                n = u * Math.sin(l) * Math.cos(o),
                r = u * Math.sin(l) * Math.sin(o),
                a = u * Math.cos(l)
            } else
                n = 0,
                r = 0,
                a = 0;
            this.targetPositions[t * 3] = n,
            this.targetPositions[t * 3 + 1] = r,
            this.targetPositions[t * 3 + 2] = a
        }
    }
    nextTemplate() {
        const e = ["sphere", "heart", "flower", "saturn", "fireworks", "trail"]
          , n = (e.indexOf(this.currentTemplate) + 1) % e.length;
        this.generateTemplate(e[n]);
        const r = document.getElementById("current-shape");
        r && (r.innerText = `Shape: ${e[n]}`)
    }
    update(e) {
        if (!e) {
            this.particles.rotation.y += .002;
            return
        }
        const {position: t, openness: n, isPinch: r} = e;
        if (isNaN(t.x) || isNaN(t.y) || isNaN(n))
            return;
        const a = t.x * 5
          , o = t.y * 3
          , l = (t.z || 0) * 2
          , u = this.geometry.attributes.position.array
          , f = .08
          , p = .5 + n * 2;
        if (this.currentTemplate === "trail") {
            this.trailPointer || (this.trailPointer = 0);
            const A = 20;
            for (let _ = 0; _ < A; _++) {
                const d = (this.trailPointer + _) % this.particleCount
                  , L = d * 3
                  , U = d * 3 + 1
                  , C = d * 3 + 2;
                u[L] = a + (Math.random() - .5) * .2,
                u[U] = o + (Math.random() - .5) * .2,
                u[C] = l + (Math.random() - .5) * .2,
                this.targetPositions[L] = (Math.random() - .5) * .05,
                this.targetPositions[U] = (Math.random() - .5) * .05,
                this.targetPositions[C] = (Math.random() - .5) * .05
            }
            this.trailPointer = (this.trailPointer + A) % this.particleCount;
            for (let _ = 0; _ < this.particleCount; _++) {
                const d = _ * 3
                  , L = _ * 3 + 1
                  , U = _ * 3 + 2;
                u[d] += this.targetPositions[d],
                u[L] += this.targetPositions[L],
                u[U] += this.targetPositions[U],
                this.targetPositions[d] *= .95,
                this.targetPositions[L] *= .95,
                this.targetPositions[U] *= .95
            }
        } else
            for (let A = 0; A < this.particleCount; A++) {
                const _ = A * 3
                  , d = A * 3 + 1
                  , L = A * 3 + 2
                  , U = this.targetPositions[_] * p + a
                  , C = this.targetPositions[d] * p + o
                  , I = this.targetPositions[L] * p + l;
                u[_] += (U - u[_]) * f,
                u[d] += (C - u[d]) * f,
                u[L] += (I - u[L]) * f
            }
        this.geometry.attributes.position.needsUpdate = !0;
        const m = Date.now() * .001
          , g = 1 - n + Math.sin(m) * .1
          , S = n * .5 + Math.cos(m) * .1
          , E = n + Math.sin(m + 1) * .1;
        this.material.color.setRGB(g, S, E),
        this.currentTemplate !== "trail" && (this.particles.rotation.y += .005,
        this.particles.rotation.x = t.y * .5)
    }
}
async function Zm() {
    const i = new Fu
      , e = new fn(75,window.innerWidth / window.innerHeight,.1,1e3);
    e.position.z = 5;
    const t = new km({
        antialias: !0
    });
    t.setSize(window.innerWidth, window.innerHeight),
    document.getElementById("app").appendChild(t.domElement);
    const n = new Km(i)
      , r = new jm;
    await r.init(),
    r.start();
    let a = !1;
    function o() {
        requestAnimationFrame(o);
        const l = r.getHandData();
        l && (l.isPinch ? a || (n.nextTemplate(),
        a = !0) : a = !1),
        n.update(l),
        t.render(i, e)
    }
    o(),
    window.addEventListener("resize", () => {
        e.aspect = window.innerWidth / window.innerHeight,
        e.updateProjectionMatrix(),
        t.setSize(window.innerWidth, window.innerHeight)
    }
    )
}
Zm();
