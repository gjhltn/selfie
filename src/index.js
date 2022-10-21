import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App'
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<div>
			<Toaster
				toastOptions={{
					className: '',
					style: {
						fontWeight: 'bold',
						color: '#000'
					}
				}}
			/>
		</div>
		<App />
	</React.StrictMode>
)

// reportWebVitals(console.log);
