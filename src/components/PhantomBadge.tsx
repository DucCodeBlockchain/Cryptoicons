import React from 'react'
import { createIcon } from '../createIcon'

export const PhantomBadge = createIcon({
    rectFill: '#5444BD',
    path: (
        <>
            <path
                d="M19.8087 11.1132H17.8809C17.8809 7.18462 14.685 4 10.7424 4C6.84858 4 3.68287 7.10665 3.60539 10.968C3.52523 14.9594 7.28322 18.4254 11.2893 18.4254H11.7933C15.3251 18.4254 20.0589 15.6704 20.7985 12.3136C20.9351 11.6949 20.4446 11.1132 19.8087 11.1132ZM7.87763 11.2883C7.87763 11.8136 7.4464 12.2433 6.91917 12.2433C6.39193 12.2433 5.96073 11.8134 5.96073 11.2883V9.74323C5.96073 9.21789 6.39193 8.78819 6.91917 8.78819C7.4464 8.78819 7.87763 9.21789 7.87763 9.74323V11.2883ZM11.2057 11.2883C11.2057 11.8136 10.7745 12.2433 10.2473 12.2433C9.72004 12.2433 9.28887 11.8134 9.28887 11.2883V9.74323C9.28887 9.21789 9.72024 8.78819 10.2473 8.78819C10.7745 8.78819 11.2057 9.21789 11.2057 9.74323V11.2883Z"
                fill="url(#PhantomBadge_a)"
            ></path>
            <defs>
                <linearGradient
                    id="PhantomBadge_a"
                    x1="12.2128"
                    y1="4"
                    x2="12.2128"
                    y2="18.4254"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white"></stop>
                    <stop
                        offset="1"
                        stopColor="white"
                        stopOpacity="0.82"
                    ></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
