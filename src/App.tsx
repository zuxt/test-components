/** @format */

import './App.css';

import Select from './components/Select/Select';
import MultiSelect from './components/MultiSelect/MultiSelect';
import EmailSubscribe from './components/EmailSubscribe/EmailSubscribe';
import ProductModal from './components/ProductModal/ProductModal';

import { useState } from 'react';
import { TselectOption } from './components/Select/Select';

import { TproductData } from './components/ProductModal/ProductModal';

const options: TselectOption[] = [
	{ label: 'option 1', value: 1 },
	{ label: 'option 2', value: 2 },
	{ label: 'option 3', value: 3 },
	{ label: 'option 4', value: 4 },
	{ label: 'option 5', value: 5 },
	{ label: 'option 6', value: 6 },
	{ label: 'option 7', value: 7 },
];

const productData: TproductData = {
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
		</>
	);
}

export default App;
