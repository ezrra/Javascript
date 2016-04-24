/**
 * CommonJS es un sistema de sistema de modulos sincorno. Es un estandar.
 * La carga de modulos es un modelo asincrono que empieza con un modulo inicial, al cargar ese modulo carga  sus dependencias, y las dependencias, etc.
 * CommonJS es muy sencillo
 * 
 */

var Complex = function (r, i) {

    this.r = r instanceof Complex ? r.r : r;
    this.i = r instanceof Complex ? r.i : (i || 0);
}

module.exports = Complex;