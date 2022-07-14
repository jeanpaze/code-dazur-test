import styled from '@emotion/styled';
import Link from 'next/link';
import { forwardRef, useState, useContext } from 'react';
import DatePicker from 'react-datepicker';
import subDays from 'date-fns/subDays';
import AppContext from '../../store/AppContext';
import { GildedRose } from '../../components/products/UpdateProducts';
import { CgShoppingCart } from 'react-icons/cg';
import { useRouter } from 'next/router';
import Image from 'next/image';

import 'react-datepicker/dist/react-datepicker.css';

const HeaderContainer = styled.header`
	position: fixed;
	top: 0;
	width: 100%;
	height: 5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	white-space: nowrap;
	background-color: #063970;
	padding: 0 10%;
`;

const NavigationContainer = styled.nav`
	& ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		align-items: center;
	}

	& li {
		margin-left: 3rem;
	}

	& a {
		text-decoration: none;
		font-size: 1.5rem;
		color: #abdbe3;
	}

	& a:hover,
	& a:active,
	& a.active,
	& .resetButtonStyle:hover,
	& .resetButtonStyle:active,
	& .resetButtonStyle.active {
		color: white;

		& svg {
			color: white;
		}
	}

	& .resetButtonStyle {
		cursor: pointer;
		font-size: 1.5rem;
		color: #abdbe3;
		border: none;
		margin: 0;
		padding: 0;
		width: auto;
		overflow: visible;
		background: transparent;
		line-height: normal;
		text-align: inherit;
		outline: none;

		& svg {
			color: #abdbe3;
		}
	}
`;

const CartButtonContainer = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;

	& svg {
		width: 27px;
		height: 27px;
		color: white;
	}
`;

const BadgeContainer = styled.div`
	width: 15px;
	height: 15px;
	margin-left: -8px;
	border-radius: 100%;
	background-color: red;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;

	& strong {
		color: white;
		font-size: 0.5rem;
	}
`;

function MainNavigation() {
	const appCtx = useContext(AppContext);
	const [startDate, setStartDate] = useState(new Date());
	const router = useRouter();

	const DateCustomInput = forwardRef(({ onClick }, ref) => (
		<button className="resetButtonStyle" onClick={onClick} ref={ref}>
			Set Date
		</button>
	));

	const daysBetween = (startDate, endDate) => {
		return Math.round((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
	};

	const onChangeDateHandler = (date) => {
		setStartDate(date);

		const additionalDays = daysBetween(startDate, date);
		console.log(additionalDays);

		// todo: make it work
		let newData = [...appCtx.products];
		// for (let i = 0; i < days; i++) {
		// 	newData = updateQuality(newData);
		// }
		const newProductsList = new GildedRose(newData).updateQuality();
		appCtx.setProducts(newProductsList);
	};

	let setMenuContent;

	if (router.asPath == '/cart') {
		setMenuContent = <Link href="/">Products</Link>;
	} else {
		setMenuContent = <DatePicker selected={startDate} onChange={onChangeDateHandler} minDate={subDays(new Date(), 0)} customInput={<DateCustomInput />} />;
	}

	return (
		<HeaderContainer>
			<div>
				<Link href="/">
					<a>
						<Image src="/images/code-dazur.svg" alt="logo" width={40} height={40} />
					</a>
				</Link>
			</div>
			<NavigationContainer>
				<ul>
					<li>{setMenuContent}</li>
					<li>
						<Link href="/cart">
							<CartButtonContainer className="resetButtonStyle">
								<CgShoppingCart />
								<BadgeContainer className={appCtx.totalCart > 0 ? '' : 'hide'}>
									<strong>{appCtx.totalCart}</strong>
								</BadgeContainer>
							</CartButtonContainer>
						</Link>
					</li>
				</ul>
			</NavigationContainer>
		</HeaderContainer>
	);
}

export default MainNavigation;