(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/0LD":
/*!**************************!*\
  !*** ./src/view/App.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise */ "5s+n");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_pesquisa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/pesquisa */ "lq03");
/* harmony import */ var _MostraEntrada_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MostraEntrada.jsx */ "gpr2");
/* harmony import */ var _Data_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Data.jsx */ "HKFe");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-google-login */ "3HZZ");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_8__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var estadoInicial = {
  clientId: undefined,
  data: undefined,
  entradaDiario: undefined,
  diario: undefined,
  viewAtual: 'login',
  cssBotao: 'button is-dark',
  pesquisando: false,
  logado: false,
  userToken: undefined
};

function useModelo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(estadoInicial),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useState, 2),
      estado = _useState2[0],
      setEstado = _useState2[1];

  function onDeslogado() {
    setEstado(_objectSpread(_objectSpread({}, estadoInicial), {}, {
      clientId: estado.clientId
    }));
  }

  function onLogado(res) {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      entradaDiario: undefined,
      pesquisando: false,
      logado: true,
      userToken: res.tokenId
    }));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function deuErro(erro) {
      setEstado(_objectSpread(_objectSpread({}, estadoInicial), {}, {
        nomeBotao: erro.message,
        cssBotao: 'button is-black',
        pesquisando: false
      }));
    }

    window.fetch('/chave').then(function (resposta) {
      return resposta.json();
    }).then(function (googleKey) {
      return setEstado(_objectSpread(_objectSpread({}, estadoInicial), {}, {
        clientId: googleKey
      }));
    }).catch(function (erro) {
      return deuErro(erro);
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function onDiarioCarregado(diario) {
      setEstado(_objectSpread(_objectSpread({}, estado), {}, {
        diario: diario
      }));
    }

    if (estado.logado) {
      Object(_model_pesquisa__WEBPACK_IMPORTED_MODULE_5__["carregaDados"])(estado.userToken).then(function (diario) {
        return onDiarioCarregado(diario);
      });
    }
  }, [estado.logado]);

  function onDataInvalida() {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      pesquisando: false
    }));
  }

  function onDataValida(novaData) {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      data: novaData,
      pesquisando: false,
      logado: estado.logado
    }));
  }

  function onPesquisando() {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      pesquisando: true,
      cssBotao: 'button is-dark is-loading'
    }));
  }

  function alteraEntrada(ev) {
    var novaEntrada = ev.target.value;
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      entradaTexto: novaEntrada
    }));
  }

  function mostraAreaTexto() {
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      cssEntradaTexto: 'box',
      viewAtual: 'modo edição'
    }));
  }

  function onAdicionaEntrada() {
    Object(_model_pesquisa__WEBPACK_IMPORTED_MODULE_5__["adiciona"])(estado.userToken, estado.data, estado.entradaTexto, estado.diario);
    setEstado(_objectSpread(_objectSpread({}, estado), {}, {
      viewAtual: 'cadastro sucesso'
    }));
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    function onEntradaEncontrada(entrada) {
      setEstado(function (estado) {
        return _objectSpread(_objectSpread({}, estado), {}, {
          entradaDiario: entrada,
          cssBotao: 'button is-dark',
          pesquisando: false,
          viewAtual: 'entrada'
        });
      });
    }

    function onSemEntrada() {
      setEstado(function (estado) {
        return _objectSpread(_objectSpread({}, estado), {}, {
          entradaDiario: undefined,
          cssBotao: 'button is-dark',
          pesquisando: false,
          viewAtual: 'sem entrada'
        });
      });
    }

    if (estado.pesquisando) {
      var entrada = Object(_model_pesquisa__WEBPACK_IMPORTED_MODULE_5__["pesquisa"])(estado.diario, estado.data);
      if (entrada) onEntradaEncontrada(entrada);else onSemEntrada();
    }
  }, [estado.pesquisando]);
  return [estado, {
    onDataInvalida: onDataInvalida,
    onDataValida: onDataValida,
    onPesquisando: onPesquisando,
    onLogado: onLogado,
    onDeslogado: onDeslogado,
    onAdicionaEntrada: onAdicionaEntrada,
    mostraAreaTexto: mostraAreaTexto,
    alteraEntrada: alteraEntrada
  }];
}

function App() {
  var _useModelo = useModelo(),
      _useModelo2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_3___default()(_useModelo, 2),
      estado = _useModelo2[0],
      _useModelo2$ = _useModelo2[1],
      onDataValida = _useModelo2$.onDataValida,
      onDataInvalida = _useModelo2$.onDataInvalida,
      onPesquisando = _useModelo2$.onPesquisando,
      onLogado = _useModelo2$.onLogado,
      onDeslogado = _useModelo2$.onDeslogado,
      onAdicionaEntrada = _useModelo2$.onAdicionaEntrada,
      mostraAreaTexto = _useModelo2$.mostraAreaTexto,
      alteraEntrada = _useModelo2$.alteraEntrada;

  var oEntrada;
  var area;
  var logoutBtn;

  if (estado.viewAtual === 'entrada') {
    console.log('modo entrada');
    oEntrada = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MostraEntrada_jsx__WEBPACK_IMPORTED_MODULE_6__["MostraEntrada"], {
      entrada: estado.entradaDiario
    });
  } else if (estado.viewAtual === 'sem entrada') {
    console.log('modo sem entrada');
    oEntrada = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MostraEntrada_jsx__WEBPACK_IMPORTED_MODULE_6__["MostraSemEntrada"], {
      mostraAreaTexto: mostraAreaTexto
    });
  } else if (estado.viewAtual === 'modo edição') {
    oEntrada = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MostraEntrada_jsx__WEBPACK_IMPORTED_MODULE_6__["MostraEdicao"], {
      onAdicionaEntrada: onAdicionaEntrada,
      alteraEntrada: alteraEntrada,
      data: estado.data
    });
  } else if (estado.viewAtual === 'cadastro sucesso') {
    oEntrada = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_MostraEntrada_jsx__WEBPACK_IMPORTED_MODULE_6__["MostraSucesso"], null);
  }

  if (estado.logado) {
    logoutBtn = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_8__["GoogleLogout"], {
      buttonText: "Logout",
      onLogoutSuccess: onDeslogado
    });
    area = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, logoutBtn, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Data_jsx__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onDataValida: onDataValida,
      onDataInvalida: onDataInvalida
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("button", {
      className: estado.cssBotao,
      onClick: onPesquisando
    }, "pesquisar"), oEntrada);
  } else if (estado.clientId) {
    area = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_google_login__WEBPACK_IMPORTED_MODULE_8___default.a, {
      clientId: estado.clientId,
      buttonText: "Login",
      onSuccess: onLogado,
      onFailure: function onFailure(res) {
        return console.log(res);
      },
      cookiePolicy: 'single_host_origin'
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "container is-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "message"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "message-header"
  }, "UFSC - CTC - INE - INE5646 :: App Di\xE1rio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "box"
  }, area)));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "HKFe":
/*!***************************!*\
  !*** ./src/view/Data.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "rB9j");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split */ "EnZy");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "J4zp");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






function useModelo() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  function validaData(data) {
    var campos = data.split('-');

    if (campos.length !== 3) {
      return false;
    }

    if (campos[0].length !== 4 || campos[1].length !== 2 || campos[2].length !== 2) {
      return false;
    }

    if (isNaN(parseInt(campos[0], 10)) || parseInt(campos[0], 10) < 1970 || isNaN(parseInt(campos[1], 10)) || isNaN(parseInt(campos[2], 10))) {
      return false;
    }

    return !isNaN(Date.parse(data));
  }

  return [data, {
    setData: setData,
    validaData: validaData
  }];
}

var Data = function Data(props) {
  var _useModelo = useModelo(),
      _useModelo2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_useModelo, 2),
      data = _useModelo2[0],
      _useModelo2$ = _useModelo2[1],
      setData = _useModelo2$.setData,
      validaData = _useModelo2$.validaData;

  function alteraData(ev) {
    var novaData = ev.target.value;
    setData(novaData);

    if (validaData(novaData)) {
      props.onDataValida(novaData);
    } else {
      props.onDataInvalida();
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", {
    className: "input",
    type: "text",
    title: "Exemplo: 2019-03-27",
    placeholder: "AAAA-MM-DD",
    value: data,
    onChange: alteraData
  });
};

Data.propTypes = {
  onDataValida: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  onDataInvalida: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Data);

/***/ }),

/***/ "KMgT":
/*!******************************!*\
  !*** ./src/model/modelos.js ***!
  \******************************/
/*! exports provided: EntradaDiario, Diario */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntradaDiario", function() { return EntradaDiario; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Diario", function() { return Diario; });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);



var EntradaDiario = function EntradaDiario(data, conteudo) {
  _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, EntradaDiario);

  this.conteudo = conteudo;
  this.data = data;
};

var Diario = /*#__PURE__*/function () {
  function Diario() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Diario);

    this.entradas = {};
    this.num_entradas = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0___default()(Diario, [{
    key: "addEntrada",
    value: function addEntrada(entrada) {
      this.entradas[entrada.data] = entrada;
      this.num_entradas++;
    }
  }, {
    key: "getEntrada",
    value: function getEntrada(data) {
      if (data in this.entradas) return this.entradas[data];
    }
  }]);

  return Diario;
}();



/***/ }),

/***/ "gpr2":
/*!************************************!*\
  !*** ./src/view/MostraEntrada.jsx ***!
  \************************************/
/*! exports provided: MostraEntrada, MostraSemEntrada, MostraSucesso, MostraEdicao */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraEntrada", function() { return MostraEntrada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraSemEntrada", function() { return MostraSemEntrada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraSucesso", function() { return MostraSucesso; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MostraEdicao", function() { return MostraEdicao; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "17x9");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model_modelos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/modelos */ "KMgT");




var MostraEntrada = function MostraEntrada(props) {
  var entrada = props.entrada;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "card-header-title has-background-primary"
  }, "Di\xE1rio do Dia ", entrada.data)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content"
  }, entrada.conteudo));
};

var MostraSemEntrada = function MostraSemEntrada(props) {
  var mostraAreaTexto = props.mostraAreaTexto;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "card-header-title has-background-warning"
  }, "Sem entrada nesta data.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button is-dark",
    onClick: mostraAreaTexto
  }, "adicionar entrada"));
};

var MostraSucesso = function MostraSucesso() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "card-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "card-header-title has-background-success"
  }, "Dados registrados com sucesso.")));
};

var MostraEdicao = function MostraEdicao(props) {
  var onAdicionaEntrada = props.onAdicionaEntrada;
  var alteraEntrada = props.alteraEntrada;
  var data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "input",
    type: "text",
    title: 'Nova entrada para' + data,
    placeholder: "Fale sobre seu dia",
    onChange: alteraEntrada
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "button is-dark",
    onClick: onAdicionaEntrada
  }, "submeter"));
};

MostraEntrada.propTypes = {
  entrada: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_model_modelos__WEBPACK_IMPORTED_MODULE_2__["EntradaDiario"]).isRequired
};
MostraSemEntrada.propTypes = {
  mostraAreaTexto: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
MostraEdicao.propTypes = {
  onAdicionaEntrada: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  alteraEntrada: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};


/***/ }),

/***/ "lq03":
/*!*******************************!*\
  !*** ./src/model/pesquisa.js ***!
  \*******************************/
/*! exports provided: pesquisa, carregaDados, adiciona */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pesquisa", function() { return pesquisa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carregaDados", function() { return carregaDados; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adiciona", function() { return adiciona; });
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map */ "2B1R");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "07d7");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.promise */ "5s+n");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime */ "ls82");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "yXPU");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modelos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modelos */ "KMgT");







function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var URL_BASE = 'https://localhost:3000/diario';

function carregaDados(_x) {
  return _carregaDados.apply(this, arguments);
}

function _carregaDados() {
  _carregaDados = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(userToken) {
    var entradas, diario, _iterator, _step, entrada;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return acessaEntradas(userToken);

          case 2:
            entradas = _context.sent;
            diario = new _modelos__WEBPACK_IMPORTED_MODULE_6__["Diario"]();
            _iterator = _createForOfIteratorHelper(entradas);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                entrada = _step.value;
                diario.addEntrada(entrada);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _context.abrupt("return", diario);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _carregaDados.apply(this, arguments);
}

function acessaEntradas(_x2) {
  return _acessaEntradas.apply(this, arguments);
}

function _acessaEntradas() {
  _acessaEntradas = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2(userToken) {
    var u, jsonData, resp, respJSON;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            u = "".concat(URL_BASE, "/busca/");
            jsonData = JSON.stringify({
              token: userToken
            });
            _context2.next = 4;
            return window.fetch(u, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: jsonData
            });

          case 4:
            resp = _context2.sent;

            if (!(resp.ok === false)) {
              _context2.next = 7;
              break;
            }

            throw new Error('Não foi possível acessar dados no servidor.');

          case 7:
            _context2.next = 9;
            return resp.json();

          case 9:
            respJSON = _context2.sent;
            return _context2.abrupt("return", processaRespostaServidor(respJSON));

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _acessaEntradas.apply(this, arguments);
}

function processaRespostaServidor(respJSON) {
  var qtdEncontrada = respJSON.length;
  var entradas = qtdEncontrada === 0 ? [] : respJSON;
  return entradas.map(function (entrada) {
    return objToEntrada(entrada);
  });
}

function objToEntrada(entrada) {
  return new _modelos__WEBPACK_IMPORTED_MODULE_6__["EntradaDiario"](entrada.data, entrada.conteudo);
}

function adiciona(_x3, _x4, _x5, _x6) {
  return _adiciona.apply(this, arguments);
}

function _adiciona() {
  _adiciona = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3(userToken, data, entrada, diario) {
    var u, jsonData, resp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            u = "".concat(URL_BASE, "/adiciona/");
            jsonData = JSON.stringify({
              token: userToken,
              data: data,
              entrada: entrada
            });
            _context3.next = 4;
            return window.fetch(u, {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: jsonData
            });

          case 4:
            resp = _context3.sent;

            if (!(resp.ok === false)) {
              _context3.next = 7;
              break;
            }

            throw new Error('Não foi possível acessar dados no servidor.');

          case 7:
            diario.addEntrada(objToEntrada({
              data: data,
              conteudo: entrada
            }));

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _adiciona.apply(this, arguments);
}

function pesquisa(diario, data) {
  return diario.getEntrada(data);
}



/***/ }),

/***/ "tjUo":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bulma/css/bulma.min.css */ "60Zk");
/* harmony import */ var bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bulma_css_bulma_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _view_App_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/App.jsx */ "/0LD");





var elem = document.createElement('div');
document.body.appendChild(elem);
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_view_App_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), elem);

/***/ })

},[["tjUo","runtime","vendors"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9BcHAuanN4Iiwid2VicGFjazovLy8uL3NyYy92aWV3L0RhdGEuanN4Iiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9tb2RlbG9zLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L01vc3RyYUVudHJhZGEuanN4Iiwid2VicGFjazovLy8uL3NyYy9tb2RlbC9wZXNxdWlzYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiZXN0YWRvSW5pY2lhbCIsImNsaWVudElkIiwidW5kZWZpbmVkIiwiZGF0YSIsImVudHJhZGFEaWFyaW8iLCJkaWFyaW8iLCJ2aWV3QXR1YWwiLCJjc3NCb3RhbyIsInBlc3F1aXNhbmRvIiwibG9nYWRvIiwidXNlclRva2VuIiwidXNlTW9kZWxvIiwidXNlU3RhdGUiLCJlc3RhZG8iLCJzZXRFc3RhZG8iLCJvbkRlc2xvZ2FkbyIsIm9uTG9nYWRvIiwicmVzIiwidG9rZW5JZCIsInVzZUVmZmVjdCIsImRldUVycm8iLCJlcnJvIiwibm9tZUJvdGFvIiwibWVzc2FnZSIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3Bvc3RhIiwianNvbiIsImdvb2dsZUtleSIsImNhdGNoIiwib25EaWFyaW9DYXJyZWdhZG8iLCJjYXJyZWdhRGFkb3MiLCJvbkRhdGFJbnZhbGlkYSIsIm9uRGF0YVZhbGlkYSIsIm5vdmFEYXRhIiwib25QZXNxdWlzYW5kbyIsImFsdGVyYUVudHJhZGEiLCJldiIsIm5vdmFFbnRyYWRhIiwidGFyZ2V0IiwidmFsdWUiLCJlbnRyYWRhVGV4dG8iLCJtb3N0cmFBcmVhVGV4dG8iLCJjc3NFbnRyYWRhVGV4dG8iLCJvbkFkaWNpb25hRW50cmFkYSIsImFkaWNpb25hIiwib25FbnRyYWRhRW5jb250cmFkYSIsImVudHJhZGEiLCJvblNlbUVudHJhZGEiLCJwZXNxdWlzYSIsIkFwcCIsIm9FbnRyYWRhIiwiYXJlYSIsImxvZ291dEJ0biIsImNvbnNvbGUiLCJsb2ciLCJzZXREYXRhIiwidmFsaWRhRGF0YSIsImNhbXBvcyIsInNwbGl0IiwibGVuZ3RoIiwiaXNOYU4iLCJwYXJzZUludCIsIkRhdGUiLCJwYXJzZSIsIkRhdGEiLCJwcm9wcyIsImFsdGVyYURhdGEiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIkVudHJhZGFEaWFyaW8iLCJjb250ZXVkbyIsIkRpYXJpbyIsImVudHJhZGFzIiwibnVtX2VudHJhZGFzIiwiTW9zdHJhRW50cmFkYSIsIk1vc3RyYVNlbUVudHJhZGEiLCJNb3N0cmFTdWNlc3NvIiwiTW9zdHJhRWRpY2FvIiwiaW5zdGFuY2VPZiIsInN0cmluZyIsIlVSTF9CQVNFIiwiYWNlc3NhRW50cmFkYXMiLCJhZGRFbnRyYWRhIiwidSIsImpzb25EYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsInRva2VuIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXNwIiwib2siLCJFcnJvciIsInJlc3BKU09OIiwicHJvY2Vzc2FSZXNwb3N0YVNlcnZpZG9yIiwicXRkRW5jb250cmFkYSIsIm1hcCIsIm9ialRvRW50cmFkYSIsImdldEVudHJhZGEiLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHO0FBQ3BCQyxVQUFRLEVBQUNDLFNBRFc7QUFFcEJDLE1BQUksRUFBRUQsU0FGYztBQUdwQkUsZUFBYSxFQUFFRixTQUhLO0FBSXBCRyxRQUFNLEVBQUVILFNBSlk7QUFLcEJJLFdBQVMsRUFBRSxPQUxTO0FBTXBCQyxVQUFRLEVBQUUsZ0JBTlU7QUFPcEJDLGFBQVcsRUFBRSxLQVBPO0FBUXBCQyxRQUFNLEVBQUUsS0FSWTtBQVNwQkMsV0FBUyxFQUFFUjtBQVRTLENBQXRC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Q0MsRUFBTCxLQUFZLEtBTmxCO0FBQUE7QUFBQTtBQUFBOztBQUFBLGtCQU9VLElBQUlDLEtBQUosQ0FBVSw2Q0FBVixDQVBWOztBQUFBO0FBU0U1RixrQkFBTSxDQUFDaUYsVUFBUCxDQUFrQmdCLFlBQVksQ0FBQztBQUFDbkcsa0JBQUksRUFBRUEsSUFBUDtBQUFhdUUsc0JBQVEsRUFBRTFCO0FBQXZCLGFBQUQsQ0FBOUI7O0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVlBLFNBQVNFLFFBQVQsQ0FBbUI3QyxNQUFuQixFQUEyQkYsSUFBM0IsRUFBaUM7QUFDL0IsU0FBT0UsTUFBTSxDQUFDa0csVUFBUCxDQUFrQnBHLElBQWxCLENBQVA7QUFDRDs7Ozs7Ozs7Ozs7Ozs7QUN0REQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNcUcsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUVBRCxRQUFRLENBQUNYLElBQVQsQ0FBY2EsV0FBZCxDQUEwQkgsSUFBMUI7QUFDQUksZ0RBQVEsQ0FBQ0MsTUFBVCxlQUFnQiwyREFBQyxxREFBRCxPQUFoQixFQUF5QkwsSUFBekIsRSIsImZpbGUiOiJtYWluLjk5NzQyNTRkNDExMWE1YTk4NmIzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7cGVzcXVpc2EsIGNhcnJlZ2FEYWRvcywgYWRpY2lvbmF9IGZyb20gJy4uL21vZGVsL3Blc3F1aXNhJ1xuaW1wb3J0IHtNb3N0cmFFbnRyYWRhLCBNb3N0cmFTZW1FbnRyYWRhLCBNb3N0cmFTdWNlc3NvLCBNb3N0cmFFZGljYW99IGZyb20gJy4vTW9zdHJhRW50cmFkYS5qc3gnXG5pbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEuanN4J1xuaW1wb3J0IEdvb2dsZUxvZ2luLCB7IEdvb2dsZUxvZ291dCB9IGZyb20gJ3JlYWN0LWdvb2dsZS1sb2dpbidcblxuY29uc3QgZXN0YWRvSW5pY2lhbCA9IHtcbiAgY2xpZW50SWQ6dW5kZWZpbmVkLFxuICBkYXRhOiB1bmRlZmluZWQsXG4gIGVudHJhZGFEaWFyaW86IHVuZGVmaW5lZCxcbiAgZGlhcmlvOiB1bmRlZmluZWQsXG4gIHZpZXdBdHVhbDogJ2xvZ2luJyxcbiAgY3NzQm90YW86ICdidXR0b24gaXMtZGFyaycsXG4gIHBlc3F1aXNhbmRvOiBmYWxzZSxcbiAgbG9nYWRvOiBmYWxzZSxcbiAgdXNlclRva2VuOiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gdXNlTW9kZWxvKCkge1xuXG4gIGNvbnN0IFtlc3RhZG8sIHNldEVzdGFkb10gPSB1c2VTdGF0ZShlc3RhZG9JbmljaWFsKVxuXG4gIGZ1bmN0aW9uIG9uRGVzbG9nYWRvKCl7XG4gICAgc2V0RXN0YWRvKHsuLi5lc3RhZG9JbmljaWFsLCBjbGllbnRJZDogZXN0YWRvLmNsaWVudElkfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uTG9nYWRvKHJlcyl7XG4gICAgc2V0RXN0YWRvKHsuLi5lc3RhZG8sIGVudHJhZGFEaWFyaW86IHVuZGVmaW5lZCwgXG4gICAgICBwZXNxdWlzYW5kbzogZmFsc2UsICBsb2dhZG86IHRydWUsIHVzZXJUb2tlbjpyZXMudG9rZW5JZH0pICBcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gZGV1RXJybyhlcnJvKSB7XG4gICAgICBzZXRFc3RhZG8oey4uLmVzdGFkb0luaWNpYWwsIG5vbWVCb3RhbzogZXJyby5tZXNzYWdlLCBjc3NCb3RhbzogJ2J1dHRvbiBpcy1ibGFjaycsIHBlc3F1aXNhbmRvOiBmYWxzZX0pXG4gICAgfVxuICAgIFxuICAgIHdpbmRvdy5mZXRjaCgnL2NoYXZlJylcbiAgICAgIC50aGVuKHJlc3Bvc3RhID0+IHJlc3Bvc3RhLmpzb24oKSlcbiAgICAgIC50aGVuKGdvb2dsZUtleSA9PiBzZXRFc3RhZG8oey4uLmVzdGFkb0luaWNpYWwsIGNsaWVudElkOiBnb29nbGVLZXl9KSlcbiAgICAgIC5jYXRjaChlcnJvID0+IGRldUVycm8oZXJybykpXG4gIH0sIFtdKVxuXG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgZnVuY3Rpb24gb25EaWFyaW9DYXJyZWdhZG8oZGlhcmlvKXtcbiAgICAgIHNldEVzdGFkbyh7Li4uZXN0YWRvLCBkaWFyaW86IGRpYXJpb30pXG4gICAgfVxuICAgIGlmKGVzdGFkby5sb2dhZG8pe1xuICAgICAgY2FycmVnYURhZG9zKGVzdGFkby51c2VyVG9rZW4pXG4gICAgICAgIC50aGVuKGRpYXJpbyA9PiBvbkRpYXJpb0NhcnJlZ2FkbyhkaWFyaW8pKVxuICAgIH1cbiAgfSwgW2VzdGFkby5sb2dhZG9dKVxuXG4gIGZ1bmN0aW9uIG9uRGF0YUludmFsaWRhICgpIHtcbiAgICBzZXRFc3RhZG8oey4uLmVzdGFkbywgcGVzcXVpc2FuZG86IGZhbHNlfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uRGF0YVZhbGlkYSAobm92YURhdGEpIHtcbiAgICBzZXRFc3RhZG8oey4uLmVzdGFkbywgZGF0YTogbm92YURhdGEsIFxuICAgICAgcGVzcXVpc2FuZG86IGZhbHNlLCAgbG9nYWRvOiBlc3RhZG8ubG9nYWRvfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uUGVzcXVpc2FuZG8oKSB7XG4gICAgc2V0RXN0YWRvKHsuLi5lc3RhZG8sIHBlc3F1aXNhbmRvOiB0cnVlLFxuICAgICAgY3NzQm90YW86ICdidXR0b24gaXMtZGFyayBpcy1sb2FkaW5nJ30pXG4gIH1cbiAgZnVuY3Rpb24gYWx0ZXJhRW50cmFkYSAoZXYpIHtcbiAgICBjb25zdCBub3ZhRW50cmFkYSA9IGV2LnRhcmdldC52YWx1ZVxuICAgIHNldEVzdGFkbyh7Li4uZXN0YWRvLCBlbnRyYWRhVGV4dG86IG5vdmFFbnRyYWRhfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vc3RyYUFyZWFUZXh0bygpe1xuICAgIHNldEVzdGFkbyh7Li4uZXN0YWRvLCAgIGNzc0VudHJhZGFUZXh0bzogJ2JveCcsIHZpZXdBdHVhbDogJ21vZG8gZWRpw6fDo28nfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQWRpY2lvbmFFbnRyYWRhKCl7XG4gICAgYWRpY2lvbmEoZXN0YWRvLnVzZXJUb2tlbiwgZXN0YWRvLmRhdGEsIGVzdGFkby5lbnRyYWRhVGV4dG8sIGVzdGFkby5kaWFyaW8pXG4gICAgc2V0RXN0YWRvKHsuLi5lc3RhZG8sIHZpZXdBdHVhbDogJ2NhZGFzdHJvIHN1Y2Vzc28nfSlcbiAgfVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIG9uRW50cmFkYUVuY29udHJhZGEgKGVudHJhZGEpIHtcbiAgICAgIHNldEVzdGFkbyhlc3RhZG8gPT4gKHsuLi5lc3RhZG8sIGVudHJhZGFEaWFyaW86IGVudHJhZGEsIGNzc0JvdGFvOiAnYnV0dG9uIGlzLWRhcmsnLCBwZXNxdWlzYW5kbzogZmFsc2UsIHZpZXdBdHVhbDogJ2VudHJhZGEnfSkpXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TZW1FbnRyYWRhKCl7XG4gICAgICBzZXRFc3RhZG8oZXN0YWRvID0+ICh7Li4uZXN0YWRvLCBlbnRyYWRhRGlhcmlvOiB1bmRlZmluZWQsIGNzc0JvdGFvOiAnYnV0dG9uIGlzLWRhcmsnLCBcbiAgICAgICAgcGVzcXVpc2FuZG86IGZhbHNlLCB2aWV3QXR1YWw6ICdzZW0gZW50cmFkYSd9KSlcbiAgICB9XG4gIFxuICAgIGlmIChlc3RhZG8ucGVzcXVpc2FuZG8pIHtcbiAgICAgIGxldCBlbnRyYWRhID0gcGVzcXVpc2EoZXN0YWRvLmRpYXJpbywgZXN0YWRvLmRhdGEpXG4gICAgICBpZihlbnRyYWRhKVxuICAgICAgICBvbkVudHJhZGFFbmNvbnRyYWRhKGVudHJhZGEpXG4gICAgICBlbHNlXG4gICAgICAgIG9uU2VtRW50cmFkYSgpXG4gICAgfVxuICB9LCBbZXN0YWRvLnBlc3F1aXNhbmRvXSlcblxuXG5cbiAgXG4gIHJldHVybiBbIGVzdGFkbywgIHtvbkRhdGFJbnZhbGlkYSwgb25EYXRhVmFsaWRhLCBvblBlc3F1aXNhbmRvLCBvbkxvZ2Fkbywgb25EZXNsb2dhZG8sIG9uQWRpY2lvbmFFbnRyYWRhLCBtb3N0cmFBcmVhVGV4dG8sIGFsdGVyYUVudHJhZGF9IF1cbn1cblxuXG5mdW5jdGlvbiBBcHAgKCkge1xuICBjb25zdCBbIGVzdGFkbywgIHtvbkRhdGFWYWxpZGEsIG9uRGF0YUludmFsaWRhLCBvblBlc3F1aXNhbmRvLCBvbkxvZ2Fkbywgb25EZXNsb2dhZG8sIG9uQWRpY2lvbmFFbnRyYWRhLCBtb3N0cmFBcmVhVGV4dG8sIGFsdGVyYUVudHJhZGF9IF0gPSB1c2VNb2RlbG8oKVxuXG5cbiAgbGV0IG9FbnRyYWRhXG4gIGxldCBhcmVhXG4gIGxldCBsb2dvdXRCdG5cblxuXG4gIGlmIChlc3RhZG8udmlld0F0dWFsID09PSAnZW50cmFkYScpIHtcbiAgICBjb25zb2xlLmxvZygnbW9kbyBlbnRyYWRhJylcbiAgICBvRW50cmFkYSA9IDxNb3N0cmFFbnRyYWRhIGVudHJhZGE9e2VzdGFkby5lbnRyYWRhRGlhcmlvfSAvPlxuICB9XG4gIGVsc2UgaWYgKGVzdGFkby52aWV3QXR1YWwgPT09ICdzZW0gZW50cmFkYScpe1xuICAgIGNvbnNvbGUubG9nKCdtb2RvIHNlbSBlbnRyYWRhJylcblxuICAgIG9FbnRyYWRhID0gPE1vc3RyYVNlbUVudHJhZGEgbW9zdHJhQXJlYVRleHRvPXttb3N0cmFBcmVhVGV4dG99IC8+XG4gIH1cbiAgZWxzZSBpZiAoZXN0YWRvLnZpZXdBdHVhbCA9PT0gJ21vZG8gZWRpw6fDo28nKVxuICB7XG4gICAgb0VudHJhZGEgPSA8TW9zdHJhRWRpY2FvIG9uQWRpY2lvbmFFbnRyYWRhPXtvbkFkaWNpb25hRW50cmFkYX0gXG4gICAgICBhbHRlcmFFbnRyYWRhPXthbHRlcmFFbnRyYWRhfSBcbiAgICAgIGRhdGE9e2VzdGFkby5kYXRhfSAvPlxuICB9XG4gIGVsc2UgaWYgKGVzdGFkby52aWV3QXR1YWwgPT09ICdjYWRhc3RybyBzdWNlc3NvJyl7XG4gICAgb0VudHJhZGEgPSA8TW9zdHJhU3VjZXNzbyAvPlxuICB9XG5cbiAgaWYgKGVzdGFkby5sb2dhZG8pe1xuICAgIGxvZ291dEJ0biA9IDxHb29nbGVMb2dvdXRcbiAgICAgIGJ1dHRvblRleHQ9XCJMb2dvdXRcIlxuICAgICAgb25Mb2dvdXRTdWNjZXNzPXtvbkRlc2xvZ2Fkb31cbiAgICAvPlxuICAgIGFyZWEgPSA8PlxuICAgICAge2xvZ291dEJ0bn1cbiAgICAgIDxEYXRhIG9uRGF0YVZhbGlkYT17b25EYXRhVmFsaWRhfSBvbkRhdGFJbnZhbGlkYT17b25EYXRhSW52YWxpZGF9Lz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtlc3RhZG8uY3NzQm90YW99XG4gICAgICAgIG9uQ2xpY2s9e29uUGVzcXVpc2FuZG99PlxuICAgICAgICAgICAgcGVzcXVpc2FyXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtvRW50cmFkYX1cbiAgICA8Lz5cbiAgfVxuICBlbHNlIGlmIChlc3RhZG8uY2xpZW50SWQpe1xuICAgIGFyZWEgPSA8R29vZ2xlTG9naW5cbiAgICAgIGNsaWVudElkPXtlc3RhZG8uY2xpZW50SWR9XG4gICAgICBidXR0b25UZXh0PVwiTG9naW5cIlxuICAgICAgb25TdWNjZXNzPXtvbkxvZ2Fkb31cbiAgICAgIG9uRmFpbHVyZT17cmVzID0+IGNvbnNvbGUubG9nKHJlcyl9XG4gICAgICBjb29raWVQb2xpY3k9eydzaW5nbGVfaG9zdF9vcmlnaW4nfVxuICAgIC8+XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgaXMtZmx1aWQnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J21lc3NhZ2UnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVzc2FnZS1oZWFkZXInPlxuICAgICAgICAgICAgVUZTQyAtIENUQyAtIElORSAtIElORTU2NDYgOjogQXBwIERpw6FyaW9cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnPlxuICAgICAgICAgIHthcmVhfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApICBcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5cblxuZnVuY3Rpb24gdXNlTW9kZWxvKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgnJylcblxuXG4gIGZ1bmN0aW9uIHZhbGlkYURhdGEgKGRhdGEpIHtcbiAgICBjb25zdCBjYW1wb3MgPSBkYXRhLnNwbGl0KCctJylcbiAgICBpZiAoY2FtcG9zLmxlbmd0aCAhPT0gMykge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIGlmIChjYW1wb3NbMF0ubGVuZ3RoICE9PSA0IHx8XG4gICAgICAgICAgY2FtcG9zWzFdLmxlbmd0aCAhPT0gMiB8fFxuICAgICAgICAgIGNhbXBvc1syXS5sZW5ndGggIT09IDIpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChpc05hTihwYXJzZUludChjYW1wb3NbMF0sIDEwKSkgfHxcbiAgICAgICAgICBwYXJzZUludChjYW1wb3NbMF0sIDEwKSA8IDE5NzAgfHxcbiAgICAgICAgICBpc05hTihwYXJzZUludChjYW1wb3NbMV0sIDEwKSkgfHxcbiAgICAgICAgICBpc05hTihwYXJzZUludChjYW1wb3NbMl0sIDEwKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHJldHVybiAhaXNOYU4oRGF0ZS5wYXJzZShkYXRhKSlcbiAgfVxuXG4gIHJldHVybiBbZGF0YSwge3NldERhdGEsIHZhbGlkYURhdGF9XVxufVxuXG5cbmNvbnN0IERhdGEgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2RhdGEsIHtzZXREYXRhLCB2YWxpZGFEYXRhfV0gPSB1c2VNb2RlbG8oKVxuXG4gIGZ1bmN0aW9uIGFsdGVyYURhdGEgKGV2KSB7XG4gICAgY29uc3Qgbm92YURhdGEgPSBldi50YXJnZXQudmFsdWVcbiAgICBzZXREYXRhKG5vdmFEYXRhKVxuICAgIGlmICh2YWxpZGFEYXRhKG5vdmFEYXRhKSkge1xuICAgICAgcHJvcHMub25EYXRhVmFsaWRhKG5vdmFEYXRhKVxuICAgIH0gZWxzZSB7XG4gICAgICBwcm9wcy5vbkRhdGFJbnZhbGlkYSgpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8aW5wdXQgY2xhc3NOYW1lPSdpbnB1dCdcbiAgICAgIHR5cGU9J3RleHQnXG4gICAgICB0aXRsZT0nRXhlbXBsbzogMjAxOS0wMy0yNydcbiAgICAgIHBsYWNlaG9sZGVyPSdBQUFBLU1NLUREJ1xuICAgICAgdmFsdWU9e2RhdGF9XG4gICAgICBvbkNoYW5nZT17YWx0ZXJhRGF0YX0vPlxuICApXG59XG5cbkRhdGEucHJvcFR5cGVzID0ge1xuICBvbkRhdGFWYWxpZGE6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uRGF0YUludmFsaWRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhdGFcbiIsIlxuY2xhc3MgRW50cmFkYURpYXJpb3tcbiAgY29uc3RydWN0b3IgKGRhdGEsIGNvbnRldWRvKXtcbiAgICB0aGlzLmNvbnRldWRvID0gY29udGV1ZG9cbiAgICB0aGlzLmRhdGEgPSBkYXRhXG4gIH1cbn1cblxuY2xhc3MgRGlhcmlve1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMuZW50cmFkYXMgPSB7fVxuICAgIHRoaXMubnVtX2VudHJhZGFzID0gMFxuICB9XG5cbiAgYWRkRW50cmFkYShlbnRyYWRhKXtcbiAgICB0aGlzLmVudHJhZGFzW2VudHJhZGEuZGF0YV0gPSBlbnRyYWRhXG4gICAgdGhpcy5udW1fZW50cmFkYXMrK1xuICB9XG5cbiAgZ2V0RW50cmFkYShkYXRhKXtcbiAgICBpZiAoZGF0YSBpbiB0aGlzLmVudHJhZGFzKVxuICAgICAgcmV0dXJuIHRoaXMuZW50cmFkYXNbZGF0YV1cbiAgfVxufVxuXG5leHBvcnQge0VudHJhZGFEaWFyaW8sIERpYXJpb30iLCJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEVudHJhZGFEaWFyaW8gfSBmcm9tICcuLi9tb2RlbC9tb2RlbG9zJ1xuXG5jb25zdCBNb3N0cmFFbnRyYWRhID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGVudHJhZGEgPSBwcm9wcy5lbnRyYWRhXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdjYXJkLWhlYWRlcic+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZC1oZWFkZXItdGl0bGUgaGFzLWJhY2tncm91bmQtcHJpbWFyeSc+XG4gICAgICAgICAgRGnDoXJpbyBkbyBEaWEge2VudHJhZGEuZGF0YX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjYXJkLWNvbnRlbnQnPlxuICAgICAgICB7ZW50cmFkYS5jb250ZXVkb31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmNvbnN0IE1vc3RyYVNlbUVudHJhZGEgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgbW9zdHJhQXJlYVRleHRvID0gcHJvcHMubW9zdHJhQXJlYVRleHRvXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nY2FyZCc+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdjYXJkLWhlYWRlcic+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZC1oZWFkZXItdGl0bGUgaGFzLWJhY2tncm91bmQtd2FybmluZyc+XG4gICAgICAgICAgU2VtIGVudHJhZGEgbmVzdGEgZGF0YS4gXG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvaDE+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnV0dG9uIGlzLWRhcmsnXG4gICAgICAgIG9uQ2xpY2s9e21vc3RyYUFyZWFUZXh0b30+XG4gICAgICAgICAgICAgIGFkaWNpb25hciBlbnRyYWRhXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cbmNvbnN0IE1vc3RyYVN1Y2Vzc28gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhcmQnPlxuICAgICAgPGgxIGNsYXNzTmFtZT0nY2FyZC1oZWFkZXInPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmQtaGVhZGVyLXRpdGxlIGhhcy1iYWNrZ3JvdW5kLXN1Y2Nlc3MnPlxuICAgICAgICAgIERhZG9zIHJlZ2lzdHJhZG9zIGNvbSBzdWNlc3NvLiBcbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9oMT5cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuY29uc3QgTW9zdHJhRWRpY2FvID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG9uQWRpY2lvbmFFbnRyYWRhID0gcHJvcHMub25BZGljaW9uYUVudHJhZGFcbiAgY29uc3QgYWx0ZXJhRW50cmFkYSA9IHByb3BzLmFsdGVyYUVudHJhZGFcbiAgY29uc3QgZGF0YSA9IHByb3BzLmRhdGFcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdib3gnPlxuICAgICAgPGlucHV0IGNsYXNzTmFtZT0naW5wdXQnXG4gICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgIHRpdGxlPXsnTm92YSBlbnRyYWRhIHBhcmEnICsgZGF0YX1cbiAgICAgICAgcGxhY2Vob2xkZXI9J0ZhbGUgc29icmUgc2V1IGRpYSdcbiAgICAgICAgb25DaGFuZ2U9e2FsdGVyYUVudHJhZGF9Lz5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidXR0b24gaXMtZGFyaydcbiAgICAgICAgb25DbGljaz17b25BZGljaW9uYUVudHJhZGF9PlxuICAgICAgICBzdWJtZXRlclxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTW9zdHJhRW50cmFkYS5wcm9wVHlwZXMgPSB7XG4gIGVudHJhZGE6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEVudHJhZGFEaWFyaW8pLmlzUmVxdWlyZWRcbn1cblxuTW9zdHJhU2VtRW50cmFkYS5wcm9wVHlwZXMgPSB7XG4gIG1vc3RyYUFyZWFUZXh0bzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxufVxuXG5Nb3N0cmFFZGljYW8ucHJvcFR5cGVzID0ge1xuICBvbkFkaWNpb25hRW50cmFkYTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgYWx0ZXJhRW50cmFkYTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGF0YTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59XG5cbmV4cG9ydCB7TW9zdHJhRW50cmFkYSwgTW9zdHJhU2VtRW50cmFkYSwgTW9zdHJhU3VjZXNzbywgTW9zdHJhRWRpY2FvfVxuIiwiaW1wb3J0IHsgRW50cmFkYURpYXJpbywgRGlhcmlvIH0gZnJvbSAnLi9tb2RlbG9zJ1xuXG5jb25zdCBVUkxfQkFTRSA9ICdodHRwczovL2xvY2FsaG9zdDozMDAwL2RpYXJpbydcblxuYXN5bmMgZnVuY3Rpb24gY2FycmVnYURhZG9zICh1c2VyVG9rZW4pIHtcbiAgY29uc3QgZW50cmFkYXMgPSBhd2FpdCBhY2Vzc2FFbnRyYWRhcyh1c2VyVG9rZW4pXG4gIGNvbnN0IGRpYXJpbyA9IG5ldyBEaWFyaW8oKVxuICBmb3IobGV0IGVudHJhZGEgb2YgZW50cmFkYXMpe1xuICAgIGRpYXJpby5hZGRFbnRyYWRhKGVudHJhZGEpXG4gIH1cbiAgcmV0dXJuIGRpYXJpb1xufVxuXG5hc3luYyBmdW5jdGlvbiBhY2Vzc2FFbnRyYWRhcyAoIHVzZXJUb2tlbikge1xuICBjb25zdCB1ID0gYCR7VVJMX0JBU0V9L2J1c2NhL2BcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7dG9rZW46IHVzZXJUb2tlbn0pXG4gIFxuICBjb25zdCByZXNwID0gYXdhaXQgd2luZG93LmZldGNoKHUsIHsgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogeydjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbid9LFxuICAgIGJvZHk6IGpzb25EYXRhfSlcbiAgICBcbiAgaWYgKHJlc3Aub2sgPT09IGZhbHNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOw6NvIGZvaSBwb3Nzw612ZWwgYWNlc3NhciBkYWRvcyBubyBzZXJ2aWRvci4nKVxuICB9XG4gIGNvbnN0IHJlc3BKU09OID0gYXdhaXQgcmVzcC5qc29uKClcbiAgcmV0dXJuIHByb2Nlc3NhUmVzcG9zdGFTZXJ2aWRvcihyZXNwSlNPTilcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc2FSZXNwb3N0YVNlcnZpZG9yIChyZXNwSlNPTikge1xuICBjb25zdCBxdGRFbmNvbnRyYWRhID0gcmVzcEpTT04ubGVuZ3RoXG4gIGNvbnN0IGVudHJhZGFzID1cbiAgICBxdGRFbmNvbnRyYWRhID09PSAwID8gW10gOiByZXNwSlNPTlxuXG4gIHJldHVybiBlbnRyYWRhcy5tYXAoZW50cmFkYSA9PiBvYmpUb0VudHJhZGEoZW50cmFkYSkpXG59XG5cbmZ1bmN0aW9uIG9ialRvRW50cmFkYSAoZW50cmFkYSkge1xuICByZXR1cm4gbmV3IEVudHJhZGFEaWFyaW8oIGVudHJhZGEuZGF0YSwgZW50cmFkYS5jb250ZXVkbylcbn1cblxuYXN5bmMgZnVuY3Rpb24gYWRpY2lvbmEgKCB1c2VyVG9rZW4sIGRhdGEsIGVudHJhZGEsIGRpYXJpbykge1xuICBjb25zdCB1ID0gYCR7VVJMX0JBU0V9L2FkaWNpb25hL2BcbiAgY29uc3QganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeSh7dG9rZW46IHVzZXJUb2tlbiwgZGF0YTogZGF0YSwgZW50cmFkYTogZW50cmFkYX0pXG4gIGNvbnN0IHJlc3AgPSBhd2FpdCB3aW5kb3cuZmV0Y2godSwgeyBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7J2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ30sXG4gICAgYm9keToganNvbkRhdGF9KVxuICBpZiAocmVzcC5vayA9PT0gZmFsc2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ07Do28gZm9pIHBvc3PDrXZlbCBhY2Vzc2FyIGRhZG9zIG5vIHNlcnZpZG9yLicpXG4gIH1cbiAgZGlhcmlvLmFkZEVudHJhZGEob2JqVG9FbnRyYWRhKHtkYXRhOiBkYXRhLCBjb250ZXVkbzogZW50cmFkYX0pKVxufVxuXG5mdW5jdGlvbiBwZXNxdWlzYSAoZGlhcmlvLCBkYXRhKSB7XG4gIHJldHVybiBkaWFyaW8uZ2V0RW50cmFkYShkYXRhKVxufVxuXG5cbmV4cG9ydCB7cGVzcXVpc2EsIGNhcnJlZ2FEYWRvcywgYWRpY2lvbmF9XG4iLCJpbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBBcHAgZnJvbSAnLi92aWV3L0FwcC5qc3gnXG5pbXBvcnQgJ2J1bG1hL2Nzcy9idWxtYS5taW4uY3NzJ1xuXG5jb25zdCBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtKVxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGVsZW0pIl0sInNvdXJjZVJvb3QiOiIifQ==