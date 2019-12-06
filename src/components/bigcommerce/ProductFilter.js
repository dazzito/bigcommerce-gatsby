import React, { createContext, useState, useEffec, useContext } from 'react';
import CartContext from '../../context/CartProvider';
import Spinner from '../spinner/Spinner';
import Checkbox from '../front/Checkbox';
import Collapsible from '../front/Collapsible';

import styled from 'styled-components';
import { flexbox, space, layout, typography, color, background } from 'styled-system';

const Tab = styled.div`
	justify-content: space-between;
	display: flex;
  flex: 1;
  padding: 0 0.5em;
`;
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

const Label = styled.div`
	margin: 0 1em;
	white-space: nowrap;
	${flexbox}
	${layout}
`;

const CollapsibleStyling = {
	padding: '1em',
};

const gemstoneType = [
	'Emerald',
	'Garnet',
	'Kunzite',
	'Morganite',
	'Opal',
	'Sphalerite',
	'Tanzanite',
	'Tsavorite',
	'Fluorite',
	'Peridot',
	'Quartz',
	'Zandrite',
	'Zircon',
	'Actinolite',
	'Adamite',
	'Afghanite',
	'Agate',
	'Akoya Pearl',
	'Alexandrite',
	'Amber',
	'Amethyst',
	'Andalusite',
	'Apatite',
	'Aquamarine',
	'Aragonite',
	'Artnuvo Quartz Triplets',
	'Bastnaesite',
	'Beryl',
	'Bixbite',
	'Black Opal',
	'Boulder Opal',
	'Calcite',
	'Carnelian',
	'Chalcedony',
	'Chondrodite',
	'Chrome Diopside',
	'Chrome Tourmaline',
	'Chrysoberyl',
	'Citrine',
	'Clinohumite',
	'Conch Pearl',
	'Copal',
	'Copper Ore',
	'Cor-de-Rosa Morganite',
	'Danburite',
	'Demantoid',
	'Diamond',
	'Diaspore',
	'Diopside',
	'Dolomite',
	'Euclase',
	'Fabulite Strontium Titanate',
	'Feldspar',
	'Fire Opal',
	'Freshwater Pearl',
	'Fuchsite',
	'Genusis Pearls',
	'Goldenite',
	'Grossularite',
	'Hackmanite',
	'Hambergite',
	'Hemimorphite',
	'Herderite',
	'Hessonite',
	'Idocrase',
	'Indicolite',
	'Kornerupine',
	'Kutamani Tanzanite',
	'Kyanite',
	'Madeira Citrine',
	'Mahaleo Ruby',
	'Mahaleo Sapphire',
	'Manchurian Peridot',
	'Masasi Blue Garnet',
	'Masasi Bordeaux Garnet',
	'Melo Melo Pearl',
	'Moissanite',
	'Moldavite',
	'Moonstone',
	'Multi-Stone',
	'Obsidian',
	'Olmiite',
	'Padparadscha Sapphire',
	'Paesina',
	'Pearls',
	'Pietersite',
	'Pollucite',
	'Prasiolite',
	'Pyrite',
	'Pyrope',
	'Quartzite',
	'Rainbow Moonstone',
	'Rhodochrosite',
	'Rhodolite',
	'Rhodonite',
	'Rose Quartz',
	'Rubellite',
	'Ruby',
	'Rutilated Quartz',
	'Sapphire',
	'Scapolite',
	'Scheelite',
	'Shanseres',
	'Sillimanite',
	'Sinhalite',
	'Smoky Quartz',
	'South Sea Pearl',
	'Spessartite',
	'Sphene',
	'Spinel',
	'Spodumene',
	'Staurolite',
	'Stibnite',
	'Strontium Titanate',
	'Sunstone',
	'Tahitian Pearl',
	'Topaz',
	'Tourmalinated Quartz',
	'Tourmaline',
	'Triphane',
	'Triplite',
	'Turquoise',
	'Uvarovite',
	'Variscite',
	'Vesuvianite',
	'Xaxim',
	'Zoisite',
	'Zultanite',
];


const ItemType = ["Bracelet","Earrings","Jewelry Pouch","Jewelry Set","Necklace","Pendant","Ring","Wrist Watch","Anklet","Belt","Book","Bracelet Helper","Brooch","Brooch Back Converter","Caplet","Card Holder","Casting Set","Chain Extender","Cleaning Accessory","Cleaning Solution","Clutch","Cufflinks","Earring Castings","Earring Semi-Mounts","Enhancer","Gemstone And Setting Kit","Hair Clip","Jewelry Box","Jewelry Cleaner","Jewelry Roll","Jewelry Sealer","Key Chain","Mask","Money Clip","Pendant Casting","Pendant Semi-Mount","Ring Casting","Ring Holder","Ring Semi-Mount","Rosary","Shortener","Slide","Tie Bar","Tie Clip","Tie Tac","Toe Ring","Watch Accessory","Watch Box"];

const CheckboxFilter = {
	isUnder25: false,
	is25To50: false,
	is50to100: false,
	is100to500: false,
	isOver500: false,
};

const ProductFilter = ({}) => {
	const value = useContext(CartContext);
	const addToCart = value && value.addToCart;
	const addingToCart = value && value.state.addingToCart;
	const isLoading = value && value.state.cartLoading;

	const [searchTerm, setSearchTerm] = React.useState('');
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
	const [isChecked_Price, setIsChecked_Price] = useState(0);

	const [isChecked_GemstoneType, setIsChecked_GemstoneType] = useState(Array(gemstoneType.length).fill(false));
	const [isChecked_GemstoneType_Count, setIsChecked_GemstoneType_Count] = useState(0);

	const [isChecked_ItemType, setIsChecked_ItemType] = useState(Array(ItemType.length).fill(false));
	const [isChecked_ItemType_Count, setIsChecked_ItemType_Count] = useState(0);

	// const [is25To50, setIs25To50] = useState(false);
	// const [is50To100, setIs50To100] = useState(false);
	// const [is100To500, setIs100To500] = useState(false);
	// const [isOver500, setIsOver500] = useState(false);

	const handleGemstoneTypeCheckbox = i => {
		

		let temp = isChecked_GemstoneType;
		temp[i] = !temp[i];
		setIsChecked_GemstoneType([...isChecked_GemstoneType, temp]);

		if (temp[i]) {
			setIsChecked_GemstoneType_Count(isChecked_GemstoneType_Count + 1);
		} else {
			setIsChecked_GemstoneType_Count(isChecked_GemstoneType_Count - 1);
		}
  };
  
  const handleProductTypeCheckbox = i => {


		let temp = isChecked_ItemType;
		temp[i] = !temp[i];
		setIsChecked_ItemType([...isChecked_ItemType, temp]);

		if (temp[i]) {
			setIsChecked_ItemType_Count(isChecked_ItemType_Count + 1);
		} else {
			setIsChecked_ItemType_Count(isChecked_ItemType_Count - 1);
		}
	};


	return (
		<Wrapper>
			<h3>Search Filter</h3>
			{/* <label>

<input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />


</label> */}
			<Collapsible
				open={false}
				transitionTime={100}
				easing="cubic-bezier(0.445, 0.050, 0.550, 0.950)"
				tabIndex={0}
				trigger={
					<Tab>
						<strong>Price</strong>
					</Tab>
				}
			>
				<Label flex={'40%'}>
					<Checkbox checked={isChecked_Price == 0} onChange={() => setIsChecked_Price(0)} />

					<span style={{ marginLeft: 8 }}>All</span>
				</Label>

				<Label flex={'40%'}>
					<Checkbox checked={isChecked_Price == 1} onChange={() => setIsChecked_Price(1)} />

					<span style={{ marginLeft: 8 }}>Under $25</span>
				</Label>

				<Label flex={'40%'}>
					<Checkbox checked={isChecked_Price == 2} onChange={() => setIsChecked_Price(2)} />

					<span style={{ marginLeft: 8 }}>$25 - $50</span>
				</Label>

				<Label flex={'40%'}>
					<Checkbox checked={isChecked_Price == 3} onChange={() => setIsChecked_Price(3)} />

					<span style={{ marginLeft: 8 }}>$50 - $100</span>
				</Label>

				<Label flex={'40%'}>
					<Checkbox checked={isChecked_Price == 4} onChange={() => setIsChecked_Price(4)} />

					<span style={{ marginLeft: 8 }}>$100 - $500</span>
				</Label>

				<Label flex={'40%'}>
					<Checkbox checked={isChecked_Price == 5} onChange={() => setIsChecked_Price(5)} />

					<span style={{ marginLeft: 8 }}>Over $500</span>
				</Label>
			</Collapsible>
			<Collapsible
				open={false}
				transitionTime={100}
				easing="cubic-bezier(0.445, 0.050, 0.550, 0.950)"
				tabIndex={1}
				trigger={
					<Tab>
						<strong>Gemstone</strong>
						<small>{isChecked_GemstoneType_Count} selected</small>
					</Tab>
				}
			>
				{gemstoneType.map(function(item, i) {
					return (
						<Label width="100%">
							<Checkbox checked={isChecked_GemstoneType[i]} onChange={() => handleGemstoneTypeCheckbox(i)} />

							<span style={{ marginLeft: 8 }}>{item}</span>
						</Label>
					);
				})}
			</Collapsible>

      <Collapsible
				open={false}
				transitionTime={100}
				easing="cubic-bezier(0.445, 0.050, 0.550, 0.950)"
				tabIndex={1}
				trigger={
					<Tab>
						<strong>Product Type</strong>
						<small>{isChecked_ItemType_Count} selected</small>
					</Tab>
				}
			>
				{ItemType.map(function(item, i) {
					return (
						<Label width="100%">
							<Checkbox checked={isChecked_ItemType[i]} onChange={() => handleProductTypeCheckbox(i)} />

							<span style={{ marginLeft: 8 }}>{item}</span>
						</Label>
					);
				})}
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
