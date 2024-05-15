import { useState } from "react";
//import Axios from "axios";
import { species } from "./data.js";
import { getImg } from "./utils.js";
import "./styles.css";

function DexButton({ name, onDexClick, drag }) {
  //if drag, ret button without onclick
  //mby change class to change color or stg
  return (
    <button class="dexbutton" onClick={onDexClick}>
      {name}
    </button>
  );
}

export default function App() {
  const [id, setId] = useState("lileaf");
  const [drag, setDrag] = useState(false);

  function handleDexClick(key) {
    setId(key);
  }
  const buttons = [];
  const keys = Object.keys(species);
  const size = keys.length;

  for (let i = 0; i < size; i++) {
    buttons.push(
      <DexButton
        name={species[keys[i]].tgname}
        onDexClick={() => handleDexClick(keys[i])}
        d={drag}
      />
    );
  }

  let spec = species[id];

  return (
    <>
      <div class="main">
        <h1>MonStar Chart</h1>
        <div class="box">
          <div class="left">{buttons}</div>

          <div class="right">
            <div class="title">
              <h2>{spec.tgname}</h2>
            </div>
            <div class="imag">
              <img src={getImg(spec)} height="312" width="312" />
            </div>
            <p>the {spec.tgspec || "something"} monstar</p>
            <p>{spec.tgtype} type</p>
            <p>{spec.tgdesc || "(blurb)"}</p>
            <table>
              <tr>
                <td>Stat1</td>
                <td>{spec.tgbase.tghp}</td>
              </tr>
              <tr>
                <td>Stat2</td>
                <td>{spec.tgbase.tgatk}</td>
              </tr>
              <tr>
                <td>Stat3</td>
                <td>{spec.tgbase.tgdef}</td>
              </tr>
              <tr>
                <td>Stat4</td>
                <td>{spec.tgbase.tgluck}</td>
              </tr>
              <tr>
                <td>Stat5</td>
                <td>{spec.tgbase.tgskill}</td>
              </tr>
              <tr>
                <td>Stat6</td>
                <td>{spec.tgbase.tgspeed}</td>
              </tr>
            </table>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}

//NEXT: basemoves is being deprecated. for each levelup move, spawn a move row object, plus functionality to add/remove rows.
//stats...
//with comparison to average stats, percent of mons which share the type
