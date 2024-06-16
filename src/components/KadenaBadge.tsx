import React from 'react'
import { createIcon } from '../createIcon'

export const KadenaBadge = createIcon({
    rectFill: 'white',
    path: (
        <>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.0769 20.4656H15.3824L10.5547 13.1251L13.3225 10.3481L20.0769 20.4656Z"
                fill="url(#KadenaBadge_a)"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.6802 4H14.7742L8.96762 9.84371V15.1093L19.6802 4Z"
                fill="url(#KadenaBadge_b)"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 4H9.16599V20.4656H5V4Z"
                fill="#ED0A8F"
            ></path>
            <defs>
                <linearGradient
                    id="KadenaBadge_a"
                    x1="12.4491"
                    y1="11.7151"
                    x2="17.782"
                    y2="20.1817"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FA9E5A"></stop>
                    <stop offset="1" stopColor="#F20992"></stop>
                </linearGradient>
                <linearGradient
                    id="KadenaBadge_b"
                    x1="9.16509"
                    y1="12.1178"
                    x2="17.2118"
                    y2="4.29269"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FA9E5A"></stop>
                    <stop offset="1" stopColor="#F20992"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
