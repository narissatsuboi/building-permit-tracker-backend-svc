import React from 'react'
import { ThemeProvider } from 'theme-ui'
import preset from '@rebass/preset'

function App() {
return (
	<ThemeProvider theme={preset}>
		<h1
		  sx={{
			color: 'primary',
			fontFamily: 'heading',
		  }}>
		  Hello
		</h1>
	  </ThemeProvider>
	)
}
export default App; 