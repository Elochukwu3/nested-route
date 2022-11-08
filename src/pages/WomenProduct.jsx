import React from "react";
import { WomenCloth } from "../objects.js";
import Mapping from "./Mapping.js";


export default function WomenProduct() {
  return (
    <div>
      <Mapping item={WomenCloth} header={"Women Wears"}/>
    </div>
  );
}
