import React, { createContext, useState, useEffec, useContext } from "react";
import CartContext from "../../context/CartProvider";
import Spinner from "../spinner/Spinner";
import Checkbox from "../front/Checkbox";
import Collapsible from "../front/Collapsible";

import styled from "styled-components";
import {flexbox , space, layout, typography, color, background} from 'styled-system'

const Wrapper = styled.div`
  height: fit-content;
 
    padding: 1em;
  span {
    width: 100%;
  }
`;

const Button = styled.button`
  background: #fafafa;
  border: solid #f6f6f6;
  color: #606060;
  transition: all ease 0.1s 0.2s;

  &:hover {
    background: #363636;
    border: solid #363636;
    color: white;
  }
`;

const Label = styled.label`
  margin: 0 1em;
  white-space: nowrap;
  ${flexbox}
  ${layout}
`;

const CollapsibleStyling = {
  padding: "1em"
};



const productTypeList = 


[    "Emerald",    "Garnet",    "Kunzite",    "Morganite",    "Opal",    "Sphalerite",    "Tanzanite",    "Tsavorite",    "Fluorite",    "Peridot",    "Quartz",    "Zandrite",    "Zircon",    "Actinolite",    "Adamite",    "Afghanite",    "Agate",    "Akoya Pearl",    "Alexandrite",    "Amber",    "Amethyst",    "Andalusite",    "Apatite",    "Aquamarine",    "Aragonite",    "Artnuvo Quartz Triplets",    "Bastnaesite",    "Beryl",    "Bixbite",    "Black Opal",    "Boulder Opal",    "Calcite",    "Carnelian",    "Chalcedony",    "Chondrodite",    "Chrome Diopside",    "Chrome Tourmaline",    "Chrysoberyl",    "Citrine",    "Clinohumite",    "Conch Pearl",    "Copal",    "Copper Ore",    "Cor-de-Rosa Morganite",    "Danburite",    "Demantoid",    "Diamond",    "Diaspore",    "Diopside",    "Dolomite",    "Euclase",    "Fabulite Strontium Titanate",    "Feldspar",    "Fire Opal",    "Freshwater Pearl",    "Fuchsite",    "Genusis Pearls",    "Goldenite",    "Grossularite",    "Hackmanite",    "Hambergite",    "Hemimorphite",    "Herderite",    "Hessonite",    "Idocrase",    "Indicolite",    "Kornerupine",    "Kutamani Tanzanite",    "Kyanite",    "Madeira Citrine",    "Mahaleo Ruby",    "Mahaleo Sapphire",    "Manchurian Peridot",    "Masasi Blue Garnet",    "Masasi Bordeaux Garnet",    "Melo Melo Pearl",    "Moissanite",    "Moldavite",    "Moonstone",    "Multi-Stone",    "Obsidian",    "Olmiite",    "Padparadscha Sapphire",    "Paesina",    "Pearls",    "Pietersite",    "Pollucite",    "Prasiolite",    "Pyrite",    "Pyrope",    "Quartzite",    "Rainbow Moonstone",    "Rhodochrosite",    "Rhodolite",    "Rhodonite",    "Rose Quartz",    "Rubellite",    "Ruby",    "Rutilated Quartz",    "Sapphire",    "Scapolite",    "Scheelite",    "Shanseres",    "Sillimanite",    "Sinhalite",    "Smoky Quartz",    "South Sea Pearl",    "Spessartite",    "Sphene",    "Spinel",    "Spodumene",    "Staurolite",    "Stibnite",    "Strontium Titanate",    "Sunstone",    "Tahitian Pearl",    "Topaz",    "Tourmalinated Quartz",    "Tourmaline",    "Triphane",    "Triplite",    "Turquoise",    "Uvarovite",    "Variscite",    "Vesuvianite",    "Xaxim",    "Zoisite",    "Zultanite"]




;







const ProductFilter = ({}) => {
  const value = useContext(CartContext);
  const addToCart = value && value.addToCart;
  const addingToCart = value && value.state.addingToCart;
  const isLoading = value && value.state.cartLoading;

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  React.useEffect(() => {
    let results = [];
    // const results = people.filter(person =>
    //   person.toLowerCase().includes(searchTerm)
    // );
    setSearchResults(results);
  }, [searchTerm]);

  //CHECKBOXES

  const [isChecked, setIsChecked] = useState(false);

  const changeHandler = () => {
    setIsChecked(!isChecked);

    // onChange && onChange(event);
  };

  return (
    <Wrapper>
      FILTER 0.1
      {/* <label>

<input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />


</label> */}
      <Collapsible
      open={true}
        transitionTime={100}
        easing="cubic-bezier(0.445, 0.050, 0.550, 0.950)"
        tabIndex={0}
        trigger="Price"
      >
        <Label  flex={1}>
          <Checkbox checked={isChecked} onChange={changeHandler} />

          <span style={{ marginLeft: 8 }}>Under $25</span>
        </Label>

        <Label  flex={1}>
          <Checkbox checked={isChecked} onChange={changeHandler} />

          <span style={{ marginLeft: 8 }}>$25 - $50</span>
        </Label>

        <Label  flex={1}>
          <Checkbox checked={isChecked} onChange={changeHandler} />

          <span style={{ marginLeft: 8 }}>$50 - $100</span>
        </Label>

        <Label  flex={1}>
          <Checkbox checked={isChecked} onChange={changeHandler} />

          <span style={{ marginLeft: 8 }}>$100 - $500</span>
        </Label>

        <Label  flex={1}>
          <Checkbox checked={isChecked} onChange={changeHandler} />

          <span style={{ marginLeft: 8 }}>Over $500</span>
        </Label>
      </Collapsible>
     
     
      <Collapsible
        open={true}
        transitionTime={100}
        easing="cubic-bezier(0.445, 0.050, 0.550, 0.950)"
        tabIndex={1}
        trigger="Type"
      >
        {productTypeList.map(function(item, i) {
          return(
          <Label width="100%">
            <Checkbox checked={isChecked} onChange={changeHandler} />

            <span style={{ marginLeft: 8 }}>{item}</span>
          </Label>
        )})}


      </Collapsible>
      {/* <Button
    type="submit"
    disabled={addingToCart === productId}
    onClick={() => {addingToCart ? alert("ALready loading") : value.addNotification('loading'); addToCart(productId, variantId);}}>
    {addingToCart === productId ? <span>Adding to Cart <Spinner width="10px" height="10px" ml="6px"/></span> : children}
  </Button>
 */}
    </Wrapper>
  );
};

export default ProductFilter;
