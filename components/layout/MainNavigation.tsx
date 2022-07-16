import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { forwardRef, useState, useContext } from 'react';

import { CgShoppingCart } from 'react-icons/cg';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import subDays from 'date-fns/subDays';

import AppContext from '../../store/AppContext';
import { GildedRose, ItemExtra } from '../../components/products/UpdateProducts';
import THEME from '../../constants/theme';

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
	background-color: ${THEME.fullContrast};
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
		color: ${THEME.midContrast};
	}

	& a:hover,
	& a:active,
	& a.active,
	& .resetButtonStyle:hover,
	& .resetButtonStyle:active,
	& .resetButtonStyle.active {
		color: ${THEME.highlight};

		& svg {
			color: ${THEME.highlight};
		}
	}

	& .resetButtonStyle {
		cursor: pointer;
		font-size: 1.5rem;
		color: ${THEME.midContrast};
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
			color: ${THEME.midContrast};
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
		color: ${THEME.highlight};
	}
`;

const BadgeContainer = styled.div`
	width: 15px;
	height: 15px;
	margin-left: -8px;
	border-radius: 100%;
	background-color: ${THEME.badge};
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;

	& strong {
		color: ${THEME.highlight};
		font-size: 0.5rem;
	}
`;

const MainNavigation = () => {
	const appCtx = useContext(AppContext);
	const [startDate, setStartDate] = useState(new Date());
	const router = useRouter();

	// eslint-disable-next-line react/display-name
	const DateCustomInput = forwardRef<HTMLButtonElement>((props: any, ref) => (
		<button className="resetButtonStyle" onClick={props.onClick} ref={ref}>
			Set Date
		</button>
	));

	const daysBetween = (startDateValue, endDateValue) => {
		return Math.round((endDateValue.getTime() - startDateValue.getTime()) / (24 * 60 * 60 * 1000));
	};

	const onChangeDateHandler = (date) => {
		setStartDate(date);

		let additionalDays = daysBetween(startDate, date);
		const newData = [...appCtx.products];
		const gildedRoseClass = new GildedRose(newData);
		const nextDay = additionalDays > 0;

		while (additionalDays != 0) {
			if (additionalDays != 0) {
				const newProductsList: ItemExtra[] = gildedRoseClass.updateQuality(nextDay);
				appCtx.setProducts(newProductsList);
			}

			additionalDays -= additionalDays > 0 ? 1 : -1;
		}
	};

	let setMenuContent;

	if (router.asPath == '/cart' || router.asPath == '/add-product') {
		setMenuContent = <Link href="/">Products</Link>;
	} else {
		setMenuContent = <DatePicker selected={startDate} onChange={onChangeDateHandler} shouldCloseOnSelect={false} minDate={subDays(new Date(), 0)} customInput={<DateCustomInput />} />;
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
};

export default MainNavigation;
