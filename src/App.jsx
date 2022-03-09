//ECMAscript 5
var textoVar = "texto var 1";

//ECMAscript 6
let textoLet = "texto let 1";
const textoConst = "texto const 1";

textoVar = "texto var 2";
textoLet = "texto let 2";
// textoConst = "texto const 2";

var textoVar = "texto var 3";
// let textoLet = "texto let 3";
// const textoConst = "texto const 3";

if (true){
var textoVar = 5;
let textoLet = 10;
//textoConst = 15;
}

const App = () => {
return (
<div className="App">
<h1>{textoVar}</h1>
<h1>{textoLet}</h1>
<h1>{textoConst}</h1>
</div>
);
}

export default App;
