//loop one
document.write("LOOP ONE")
document.write("<br>")
for (i=0; i<5; i++) {
    document.write("I love homework <br>")
}
document.write("<br>")

//loop two
document.write("LOOP TWO")
document.write("<br>")
var x = 0
for (i=0; i<5; i++) {
    document.write(i + "<br>")
}
document.write("<br> ")

//loop three
document.write("LOOP THREE")
document.write("<br>")

for (i=15; i<30; i++) {
    if (i % 3)
    document.write(i + "<br>")
}
document.write("<br> ")

//loop four
document.write("LOOP FOUR" + "<br>")
for (i=0; i<4; i++) {
    for (j=0; j<4; j++){
        document.write("🦴")
    }
    document.write("<br>")
}
document.write("<br> ")

//loop five
document.write("LOOP FIVE")
document.write("<br>")

for(i=1;i<=7;i++) {
    for(j=1;j<=i;j++){
        document.write(" 🦴 ")
    }
    document.write("<br/>")
}
document.write("<br> ")

//loop six
document.write("LOOP SIX")
document.write("<br>")

rows = 7
for( i=1; i<=rows; i++) {
    for(k=1; k<=( rows-i ); k++) {
        document.write("~")
    }
    for(j=1; j<=i; j++) {
        document.write("🦴") 
    }
    document.write("<br/>")
}
document.write("<br>")

//loop seven
document.write("LOOP SEVEN")
document.write("<br>")
for (i=1; i<=5; i++) {
    for (j=1; j<=i; j++) {
        for (k=2; k<=j; k++){
            document.write("🦴")
        }
        document.write("🦴")
        document.write("<br>")
    }
    document.write("<br>")
}