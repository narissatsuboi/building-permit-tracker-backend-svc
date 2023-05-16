import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#fff',
        },
        secondary: {
            main: '#000',
        },
        status: {
            blue: 'blue',
            green: '#43AA8B',
            orange: '#F8961E',
            yellow: '#F9C74F',
            red: '#F94144',
            grey: '#adb5bd',
        }

    },
    typography: {
        fontSize: 12,
        fontFamily: [
            'Inter',
            'sans-serif',
        ].join(','),
    }
})

export default theme