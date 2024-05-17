import Image from "next/image";
import React from "react";
import Card from "../components/shape";

export default function Home() {
  var cards = [];
  const colors = ["red", "green", "blue"];
  const shapes = ["oval", "square", "triangle"];
  const shades = ["solid", "gradient", "striped"];
  for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
      for (let k=1; k<=3; k++) {
        for (let l = 1; l <= 3; l++) {
          cards.push([i, j, k, l]);
        }
      }
    }
  }
  function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }
  console.log(cards);
  shuffle(cards);
  console.log(cards);
  const card_grid = cards.map((card, _) => {
    return <Card color={colors[card[0]-1]} shape={shapes[card[1]-1]} shade={shades[card[2]-1]} number={card[3]} />;
  });
  console.log(card_grid);

  return <div>{card_grid}</div>;
}
