import React from 'react';

import {AddNewItem} from './AddNewItem';
import {Column} from './Column';
import {CustomDragLayer} from './CustomDragLayer';

import {useAppState} from '../state/AppStateContext';
import {addColumn} from '../state/actions';

import {AppContainer} from '../styles';

export const App = () => {
	const {columns, dispatch} = useAppState();

	return (
		<AppContainer>
			<CustomDragLayer />
			{columns.map(column => (
				<Column
					id={column.id}
					key={column.id}
					text={column.text}
				/>
			))}
			<AddNewItem
				toggleButtonText="+ Add another column"
				onAddItem={text => dispatch(addColumn(text))}
			/>
		</AppContainer>
	);
};
