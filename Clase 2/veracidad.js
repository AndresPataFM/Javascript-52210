// === Veracidad ===

// Booleanos
// Tipo de dato que indica veracidad
true
false

// == Truthy/Falsey ==
// Cuando a JS uno le "forza" evaluar la veracidad de algo, a ciertos valores

// Truthy
/*
    numeros distintos a 0
    strings no vacios
    objetos menos document.all (los arrays son objetos)
    Infinity
*/

// Falsey
/* 
    null
    undefined
    NaN
    0
    -0
    0n <--- Esto es un BigInt 0
    "" <--- String vacio
    document.all <--- objeto documento del DOM
*/

// Conversiones de tipo
// A Js, en un descenso a la locura, se le ocurrio que ciertos valosres eran lo suficientemente parecidos. Hay más pero por ahora nos interesan estos:
/*
    false ⇌ 0 ⇌ "false"
    true ⇌ 1 ⇌ "true"
    0 ⇌ "0"  ⇌ false
    "" ⇌ 0  ⇌ false
*/

// == Operadores de comparación y lógicos ==
// = Lógica =
/* 
🔹 AND &&
Compara la veracidad de 2 valores y si ambos son verdaderos, retorna verdadero

a && b

true && true ➡️ true
true && false ➡️ false
false && true ➡️ false
false && false ➡️ false

🔹 OR ||
Compara la veracidad de 2 valores y si uno de los dos es verdaderos, retorna verdadero

a || b

true || true ➡️ true
true || false ➡️ true
false || true ➡️ true
false || false ➡️ false

🔹 NOT !
Invierte la veracidad del argumento

!a

!true ➡️ false
!false ➡️ true

🔹 Prioridades 
Primero por el tipo de operador (en orden descendiente)
!
&&
||
Luego se resuelve de izq a der a misma prioridad y/o arriba para abajo


*/
// = Comparación =
// Estos valores retornan un booleano
/*
🔹 mayor y menor > <
Para diferenciarlos, leanlo de izquierda a derecha, la "boca" del cocodrilo come al más grande

a < b ➡️ a es menor que b
a > b ➡️ a es mayor que b

De respetarse, retorna ture, sino false

2 < 3 ➡️ true
2 < 2 ➡️ false
2 < 1 ➡️ false

2 > 3 ➡️ false
2 > 2 ➡️ false
2 > 1 ➡️ true


Cosas raras:
-Si se comparan dos tipos de datos distintos, Js va a hacer conversiones de tipo hasta podr compararlos
-Si se comparan 2 strings revisa su orden en unicode UTF-16 de cada caracter hasta encontrar uno que sea mayor que el otro, al encontrarlo declara cual es mayor
-En arrays se ve un comportamiento igual al string, revisa en orden los valores hasta encontrar el mayor y ahí para
-Se rompe con objetos que no son arrays, siempre da falso

🔹 mayor igual y menor igual
Similar con el anterior, el = va siempre despues del <>, acuerdense que es como se lee, sino van a tratar de asignar un valor

a <= b ➡️ a es menor o igual que b
a >= b ➡️ a es mayor o igual que b

2 <= 3 ➡️ true
2 <= 2 ➡️ true
2 <= 1 ➡️ false

2 >= 3 ➡️ false
2 >= 2 ➡️ true
2 >= 1 ➡️ true

Cosas raras:
-Las 3 primeras son iguales que la anterior
-En objetos que no son arrays, =< y >= es true

🔹 Estrictamente igual ===
El estrictamente igual compara 2 valores y si el valor y el tipo de dato es el mismo, retorna verdadero

a === b ➡️ a estrictamente igual que b

1 === 1 ➡️ true
1 === "1" ➡️ false
1 === 1.0 ➡️ true, es la unica excepción a la regla el que x y x.0000000 son iguales, ya que Js corta los 0 extra a los números, dejandolo como X
1 === "hola" ➡️ false
1 === "uno" ➡️ false

🔹 Estrictamente distinto !==
Igual al anterior pero invierte su veracidad, cuando ants era true, ahora es false y viceversa

a !== b ➡️ a es estrictamente distinto de b

1 !== 1 ➡️ false
1 !== "1" ➡️ true
1 !== 1.0 ➡️ false
1 !== "hola" ➡️ true
1 !== "uno" ➡️ true

Eviten comparar objetos, se van a volver locos

🔹 Similar ==
El similar, compara los valores de 2, pero Js intenta hacer cambios de tipo para ver si encuentra una igualdad

a == b ➡️ a es similar a b

1 == 1 ➡️ true
1 == "1" ➡️ true
1 == 1.0 ➡️ true
1 == "hola" ➡️ false
1 == "uno" ➡️ false
1 == "true" ➡️ false

Uno se suele marear por lo que puse una tabla en imagenes

🔹 Distinto !=
Agarra los resultados de similar y los invierte.

a != b ➡️ a es distinto de b

1 != 1 ➡️ false
1 != "1" ➡️ false
1 != 1.0 ➡️ false
1 != "hola" ➡️ true
1 != "uno" ➡️ true
1 != "true" ➡️ true
*/

// -------------------------------
/* Gracias a 
https://images.ctfassets.net/pzhspng2mvip/4Yjbirf0erVGNX9UgqgTaM/a31e6676df6fd6416a074e98e195534d/vE9vrNwmf.png 
https://algassert.com/visualization/2014/03/27/Better-JS-Equality-Table.html
https://i.imgur.com/rWoBHj4.png
por las imagenes
*/
// función que evalua veraidad
function veracidad(elemento){
    elemento? 
    console.log("true/truthy")
    :
    console.log("false/falsey")
}
veracidad(1)