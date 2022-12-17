/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,tsx}",
        "./pages/**/*.{html,tsx}"
    ],
    theme: {
        screens: {
            'md': '1025px'
        },
        extend: {
            colors: {
                neutral: {
                    0: '#FFFFFF',
                    100: '#F5F9FF',
                    200: '#E6EDF7',
                    300: '#DAE4F2',
                    500: '#8FA3BF',
                    600: '#7C899C',
                    900: '#252F3D'
                },
                green: {
                    default: '#29CC74',
                    light: '#CCFFE3'
                },
                red: {
                    default: '#E07F4F',
                    light: '#FFDFD9'
                },
                brand: {
                    light: '#E5F0FF',
                    "light-2": '#CCE1FF',
                }
            },
            boxShadow: {
                "elevation-1": "0px 2px 12px rgba(0, 0, 0, 0.08)"
            },
            backgroundImage: {
                brandGradient: 'linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)',
                'brandGradient/50': 'linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%);',
                brandGradientHover: 'linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)',
                illustration: 'linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%, #EAC0E9 106.58%)',
                section: 'linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)',
                aerolab: 'linear-gradient(180deg, #FF8800 0%, #FF6600 100%)'
            },
            fontFamily: {
                monserrat: ['Montserrat', 'sans-serif'],
            },
            letterSpacing: {
                24: '0.24em',
            },
            height: {
                hug: '48px',
                logo: '24px',
                logoResponsive: '20px',
            },
            width: {
                hug: '156px',
                fill: '1464px',
                logo: '24px',
                logoResponsive: '20px',
            },
            minWidth: {
                hug: '156px',
                fill: '1464px'
            },
            maxWidth: {
                hug: '156px',
                fill: '1464px'
            },
        },
    },
    plugins: [],
};
