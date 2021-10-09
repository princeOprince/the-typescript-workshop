var Suit;
(function (Suit) {
    Suit[Suit["Hearts"] = 0] = "Hearts";
    Suit[Suit["Diamonds"] = 1] = "Diamonds";
    Suit[Suit["Clubs"] = 2] = "Clubs";
    Suit[Suit["Spades"] = 3] = "Spades";
})(Suit || (Suit = {}));
console.log(Suit);
console.log();
var Suit2;
(function (Suit2) {
    Suit2[Suit2["Hearts"] = 10] = "Hearts";
    Suit2[Suit2["Diamonds"] = 20] = "Diamonds";
    Suit2[Suit2["Clubs"] = 30] = "Clubs";
    Suit2[Suit2["Spades"] = 40] = "Spades";
})(Suit2 || (Suit2 = {}));
console.log(Suit2);
console.log();
var Suit3;
(function (Suit3) {
    Suit3["Hearts"] = "hearts";
    Suit3["Diamonds"] = "diamonds";
    Suit3["Clubs"] = "clubs";
    Suit3["Spades"] = "spades";
})(Suit3 || (Suit3 = {}));
console.log(Suit3);
