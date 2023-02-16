/** @format */

import './App.css';

import Select from './components/Select/Select';
import MultiSelect from './components/MultiSelect/MultiSelect';
import EmailSubscribe from './components/EmailSubscribe/EmailSubscribe';
import ProductModal from './components/ProductModal/ProductModal';
import ImageGallery from './components/ImageGallery/ImageGallery';

import { useState } from 'react';
import { TselectOption } from './components/Select/Select';

import { TproductData } from './components/ProductModal/ProductModal';

import { Timages } from './components/ImageGallery/ImageGallery';
import image1 from './assets/images/image1.jpg';
import image2 from './assets/images/image2.jpg';
import image3 from './assets/images/image3.jpg';
import image4 from './assets/images/image4.jpg';
import image5 from './assets/images/image5.jpg';
import image6 from './assets/images/image6.jpg';

const testForGallery: Timages[] = [
	{
		name: 'someName1',
		type: 'vector',
		title: 'SomeTitle 1',
		image: image1,
		likes: 345,
		dislikes: 232,
		isBookmarked: false,
	},
	{
		name: 'someName2',
		type: 'vector',
		title: 'SomeTitle 2',
		image: image2,
		likes: 2345,
		dislikes: 22,
		isBookmarked: false,
	},
	{
		name: 'someName3',
		type: 'vector',
		title: 'SomeTitle 3',
		image: image3,
		likes: 123,
		dislikes: 1,
		isBookmarked: true,
	},
	{
		name: 'someName4',
		type: 'vector',
		title: 'SomeTitle 4',
		image: image4,
		likes: 657,
		dislikes: 45,
		isBookmarked: false,
	},
	{
		name: 'someName5',
		type: 'vector',
		title: 'SomeTitle 5',
		image: image5,
		likes: 764,
		dislikes: 55,
		isBookmarked: true,
	},
	{
		name: 'someName6',
		type: 'vector',
		title: 'SomeTitle 6',
		image: image6,
		likes: 789,
		dislikes: 88,
		isBookmarked: false,
	},
];

const options: TselectOption[] = [
	{ label: 'option 1', value: 1 },
	{ label: 'option 2', value: 2 },
	{ label: 'option 3', value: 3 },
	{ label: 'option 4', value: 4 },
	{ label: 'option 5', value: 5 },
	{ label: 'option 6', value: 6 },
	{ label: 'option 7', value: 7 },
];

import image from './assets/images/headphone.png';

const productData: TproductData = {
	image: image,
	name: 'headsetPink',
	title: 'Ultra COOL headset, PINK',
	isFreeShipping: true,
	priceNew: 599,
	priceOld: 890,
	currency: '$',
	stock: 37,
};

function App() {
	const [value, setValue] = useState<TselectOption | undefined>(options[0]);
	const [multiVal, setMultiVal] = useState<TselectOption[]>([options[0]]);

	const emailSubscribeHandler = (email: string) => {
		console.log(email);
	};

	const productModalHandler = (name: string) => {
		console.log(name);
	};

	const imageGalleryHandler = (path: string) => {
		console.log(path);
	};

	return (
		<>
			<Select
				options={options}
				value={value}
				onChange={(o) => setValue(o)}
			/>

			<br />

			<MultiSelect
				options={options}
				value={multiVal}
				onChange={(o) => setMultiVal(o)}
			/>

			<br />
			<div className='emailSubscribe-container'>
				<EmailSubscribe callbackFn={emailSubscribeHandler} />
			</div>
			<br />

			<div className='productModal-container'>
				<ProductModal
					productData={productData}
					addToCartFnc={productModalHandler}
					compareFnc={productModalHandler}
					saveFnc={productModalHandler}
				/>
			</div>

			<br />

			<div className='imageGallery-container'>
				<ImageGallery
					images={testForGallery}
					uploadCallbackFnc={imageGalleryHandler}
				/>
			</div>
		</>
	);
}

export default App;
