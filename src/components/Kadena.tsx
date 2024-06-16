import React from 'react'
import { createIcon } from '../createIcon'

export const Kadena = createIcon({
    path: (
        <>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.4615 21.4615H16.0005L10.3846 12.9227L13.6043 9.69231L21.4615 21.4615Z"
                fill="url(#Kadena_a)"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 2.30769H15.293L8.53847 9.10548V15.2308L21 2.30769Z"
                fill="url(#Kadena_b)"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.92308 2.30769H8.76923V21.4615H3.92308V2.30769Z"
                fill="#ED0A8F"
            ></path>
            <defs>
                <linearGradient
                    id="Kadena_a"
                    x1="12.5884"
                    y1="11.2824"
                    x2="18.7919"
                    y2="21.1314"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FA9E5A"></stop>
                    <stop offset="1" stopColor="#F20992"></stop>
                </linearGradient>
                <linearGradient
                    id="Kadena_b"
                    x1="8.76817"
                    y1="11.7509"
                    x2="18.1287"
                    y2="2.64817"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FA9E5A"></stop>
                    <stop offset="1" stopColor="#F20992"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
