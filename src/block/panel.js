
const { InspectorControls } = wp.blockEditor;
const { Fragment } = wp.element;
const { ToggleControl, PanelBody, RangeControl, TextControl } = wp.components;
const { __ } = wp.i18n;

export default function Panel( props ) {
	const { setAttributes, attributes: {
		autoplay,
		autoplayTimeout,
		autoplaySpeed,
		navButtons,
		navPrevText,
		navNextText,
		sliderDots,
		dotHeight,
		dotWidth,
		dotSpacing,
	} } = props;

	return (
		<InspectorControls key={ 'settings' }>
			<PanelBody initialOpen={ true } title={ __( 'Slider Settings' ) } >
				<ToggleControl
					checked={ autoplay }
					label={ __( 'Autoplay slider' ) }
					onChange={ value => setAttributes( { autoplay: value } ) }
				/>
				{
					autoplay && (
						<Fragment>
							<RangeControl
								label={ __( 'Autoplay timeout' ) }
								min={ 500 }
								max={ 4000 }
								help={ __( 'Timeout represents in milliseconds' ) }
								onChange={ value => setAttributes( { autoplayTimeout: value } ) }
								step={ 100 }
								value={ autoplayTimeout }
							/><RangeControl
								label={ __( 'Autoplay speed' ) }
								min={ 500 }
								max={ 4000 }
								help={ __( 'Speed represents in milliseconds' ) }
								onChange={ value => setAttributes( { autoplaySpeed: value } ) }
								step={ 100 }
								value={ autoplaySpeed }
							/>
						</Fragment>
					)
				}
			</PanelBody>
			<PanelBody initialOpen={ false } title={ __( 'Navigation Buttons' ) } >
				<ToggleControl
					checked={ navButtons }
					onChange={ value => setAttributes( { navButtons: value } ) }
					label={ __( 'Next/Prev buttons' ) }
				/>

				{ navButtons && (
					<Fragment>
						<TextControl
							label={ __( 'Prev button text' ) }
							value={ navPrevText }
							onChange={ value => setAttributes( { navPrevText: value } ) }
						/>
						<TextControl
							label={ __( 'Next button text' ) }
							value={ navNextText }
							onChange={ value => setAttributes( { navNextText: value } ) }
						/>
					</Fragment>
				) }

			</PanelBody>

			<PanelBody title={ __( 'Slider dots' ) } initialOpen={ false }>

				<ToggleControl
					checked={ sliderDots }
					onChange={ value => setAttributes( { sliderDots: value } ) }
					label={ __( 'Slider dots' ) }
				/>

				{
					sliderDots && (
						<Fragment>
							<RangeControl
								label={ __( 'Dot width' ) }
								min={ 5 }
								max={ 30 }
								onChange={ value => setAttributes( { dotWidth: value } ) }
								value={ dotWidth }
								step={ 1 }
							/>

							<RangeControl
								label={ __( 'Dot height' ) }
								min={ 5 }
								max={ 30 }
								onChange={ value => setAttributes( { dotHeight: value } ) }
								value={ dotHeight }
								step={ 1 }
							/>

							<RangeControl
								label={ __( 'Dot spacing' ) }
								min={ 5 }
								max={ 30 }
								step={ 1 }
								onChange={ value => setAttributes( { dotSpacing: value } ) }
								value={ dotSpacing }
							/>
						</Fragment>
					)
				}

			</PanelBody>
		</InspectorControls>
	);
}
