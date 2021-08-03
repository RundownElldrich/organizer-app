import React from 'react';

import {AddNewItem} from './AddNewItem';
import {Column} from './Column';
import {CustomDragLayer} from './CustomDragLayer';

import {useAppState} from './state/AppStateContext';
import {addColumn} from './state/actions';

import {AppContainer} from './styles';

export const App = () => {
	const {columns, dispatch} = useAppState();

	return (
		<AppContainer>
			<CustomDragLayer />
			{columns.map(list => (
				<Column
					id={list.id}
					key={list.id}
					text={list.text}
				/>
			))}
			<AddNewItem
				toggleButtonText="+ Add another list"
				onAddItem={text => dispatch(addColumn(text))}
			/>
		</AppContainer>
	);
};
