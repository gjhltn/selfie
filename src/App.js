import { createHashRouter, RouterProvider } from 'react-router-dom'

import { Root } from './components/Root'
import { Selfie } from './components/Selfie'

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <div>Routing error!</div>
	},
	{
		path: '/configure',
		element: <Selfie />
	}
])

const App = () => <RouterProvider router={router} />

export default App
