'use client';

import { createTheme, MantineColorsTuple } from '@mantine/core';

const navy: MantineColorsTuple = [
    '#eef5fc',
    '#dbe4f0',
    '#b3c6e2',
    '#89a7d5',
    '#658cc9',
    '#4e7bc2',
    '#4172bf',
    '#335fa9',
    '#2a5497',
    '#002C5F' // Index 9: The exact User requested color
];

const orange: MantineColorsTuple = [
    '#fff0e3',
    '#ffe1cd',
    '#ffc29b',
    '#ffa264',
    '#ff8536',
    '#ff7318',
    '#ff6906',
    '#e55700',
    '#cb4c00',
    '#FF7A00' // Index 9: The exact User requested color
];

export const theme = createTheme({
    colors: {
        navy,
        orange,
    },
    primaryColor: 'navy',
    primaryShade: 9,

    fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',

    components: {
        Button: {
            defaultProps: {
                color: 'orange',
                radius: 'md',
            },
            styles: {
                root: {
                    fontWeight: 600,
                }
            }
        },
        Container: {
            defaultProps: {
                size: 'lg',
            }
        },
        Input: {
            defaultProps: {
                radius: 'md',
            }
        },
        Card: {
            defaultProps: {
                radius: 'md',
                shadow: 'sm',
                withBorder: true,
            }
        }
    },
});
