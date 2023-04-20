import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#CED4DA',
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
        fontFamily: [
            'Inter',
            'sans-serif',
        ].join(','),
    }
})

export default theme