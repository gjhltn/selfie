import React from 'react'
import styled from 'styled-components'
import CONFIG from '../../config.json'

const All = styled.div`
	background: ${props => props.colour};
	height: 100vh;
	width: 100vw;
	display: flex;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

export const Root = () => (
	<All colour={CONFIG.backgroundColour}>
		<h1>Hello world</h1>
		<p>The regular website goes here.</p>
		<p>{ "#{REPO}}" } </p>
	</All>
)
