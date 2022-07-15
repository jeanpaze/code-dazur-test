import styled from '@emotion/styled';
import Link from 'next/link';
import { forwardRef, useState, useContext } from 'react';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import DatePicker from 'react-datepicker';
import subDays from 'date-fns/subDays';
// @ts-expect-error TS(6142): Module '../../store/AppContext' was resolved to '/... Remove this comment to see the full error message
import AppContext from '../../store/AppContext';
// @ts-expect-error TS(6142): Module '../../components/products/UpdateProducts' ... Remove this comment to see the full error message
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

// @ts-expect-error TS(2339): Property 'onClick' does not exist on type '{}'.
	const DateCustomInput = forwardRef(({ onClick }, ref) => (
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		<button className="resetButtonStyle" onClick={onClick} ref={ref}>
			Set Date
		</button>
	));

// @ts-expect-error TS(7006): Parameter 'startDate' implicitly has an 'any' type... Remove this comment to see the full error message
	const daysBetween = (startDate, endDate) => {
		return Math.round((endDate.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
	};

// @ts-expect-error TS(7006): Parameter 'date' implicitly has an 'any' type.
	const onChangeDateHandler = (date) => {
		setStartDate(date);

		let additionalDays = daysBetween(startDate, date);
		const newData = [...(appCtx as any).products];
		const gildedRoseClass = new GildedRose(newData);
		const nextDay = additionalDays > 0;

		// console.log('additionalDays: ', additionalDays);

		while (additionalDays != 0) {
			if (additionalDays != 0) {
				console.log('additionalDays: ', additionalDays);
				const newProductsList = gildedRoseClass.updateQuality(nextDay);
				(appCtx as any).setProducts(newProductsList);
			}

			additionalDays -= additionalDays > 0 ? 1 : -1;
		}
	};

	let setMenuContent;

	if (router.asPath == '/cart') {
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		setMenuContent = <Link href="/">Products</Link>;
	} else {
// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
		setMenuContent = <DatePicker selected={startDate} onChange={onChangeDateHandler} shouldCloseOnSelect={false} minDate={subDays(new Date(), 0)} customInput={<DateCustomInput />} />;
	}

// @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
	return (<HeaderContainer>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
			<div>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<Link href="/">
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<a>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
						<Image src="/images/code-dazur.svg" alt="logo" width={40} height={40}/>
					</a>
				</Link>
			</div>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
			<NavigationContainer>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
				<ul>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<li>{setMenuContent}</li>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
					<li>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
						<Link href="/cart">
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
							<CartButtonContainer className="resetButtonStyle">
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
								<CgShoppingCart />
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
								<BadgeContainer className={(appCtx as any).totalCart > 0 ? '' : 'hide'}>
{/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
									<strong>{(appCtx as any).totalCart}</strong>
								</BadgeContainer>
							</CartButtonContainer>
						</Link>
					</li>
				</ul>
			</NavigationContainer>
		</HeaderContainer>);
}

export default MainNavigation;
