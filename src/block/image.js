import classnames from 'classnames';

import { ChevronLeft, ChevronRight, Edit3, X, Link2 as Link } from 'react-feather';

const { Button, ButtonGroup } = wp.components;
const { __ } = wp.i18n;

export default function Image( props ) {
	const {
		image,
		onSelect,
		isSelected,
		isFirstItem,
		isLastItem,
		onMoveBackward,
		onMoveForward,
		onRemove,
	} = props;

	return (
		<figure onClick={ onSelect } className={ classnames( { 'is-selected': isSelected } ) }>
			<img className="guten-slide-image" src={ image.url } alt={ image.alt } />
			<ButtonGroup className="is-left">
				<Button
					icon={ <ChevronLeft /> }
					onClick={ isFirstItem ? undefined : onMoveBackward }
					label={ __( 'Move image backward' ) }
					aria-disabled={ isFirstItem }
					disabled={ ! isSelected }
				/>
				<Button
					icon={ <ChevronRight /> }
					onClick={ isLastItem ? undefined : onMoveForward }
					label={ __( 'Move image forward' ) }
					aria-disabled={ isLastItem }
					disabled={ ! isSelected }
				/>
			</ButtonGroup>
			<ButtonGroup className="is-right">
				<Button
					icon={ <Edit3 /> }
					onClick={ () => ( {} ) }
					label={ __( 'Replace image' ) }
					disabled={ ! isSelected }
				/>
				<Button
					icon={ <Link /> }
					onClick={ () => ( {} ) }
					label={ __( 'Insert link' ) }
					disabled={ ! isSelected }
				/>
				<Button
					icon={ <X /> }
					onClick={ onRemove }
					label={ __( 'Remove image' ) }
					disabled={ ! isSelected }
				/>
			</ButtonGroup>

		</figure>
	);
}
