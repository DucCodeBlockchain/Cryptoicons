import React from 'react'
import { createIcon } from '../createIcon'

export const BeamBadge = createIcon({
    rectFill: '#1E1E1E',
    path: (
        <>
            <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                fill="black"
            ></path>
            <path
                d="M11.9999 21.123C17.0384 21.123 21.1229 17.0385 21.1229 12.0001C21.1229 6.96157 17.0384 2.87708 11.9999 2.87708C6.96145 2.87708 2.87695 6.96157 2.87695 12.0001C2.87695 17.0385 6.96145 21.123 11.9999 21.123Z"
                fill="black"
                stroke="white"
                strokeWidth="0.833333"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9531 14.0372H15.3021L11.954 8.23595V8.23663V4.72034L18.5157 15.904H11.9531V14.0372Z"
                fill="#0B76FF"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9527 14.0372L11.9531 15.904H5.38995L11.9518 4.72034L11.9522 8.23663L11.9518 8.23595L8.60374 14.0372H11.9527Z"
                fill="#24C1FF"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9532 9.6759V13.3555L9.87708 13.3593L11.9532 9.6759Z"
                fill="#39FFF2"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9531 9.6759L14.0289 13.3593L11.9531 13.3555V9.6759Z"
                fill="#00E2C2"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.84973 8.5376L11.9532 11.8862V12.3547L3.84973 10.3457V8.5376Z"
                fill="url(#BeamBadge_a)"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.0561 7.1333L11.9531 11.8861V12.0146L20.0561 8.67143V7.1333Z"
                fill="url(#BeamBadge_b)"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.0497 11.7521L11.9531 12.3542V12.221L20.0497 10.2117V11.7521Z"
                fill="url(#BeamBadge_c)"
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.0561 8.73608L11.9531 12.0224V12.2211L20.0561 10.1449V8.73608Z"
                fill="url(#BeamBadge_d)"
            ></path>
            <defs>
                <linearGradient
                    id="BeamBadge_a"
                    x1="3.84973"
                    y1="10.4461"
                    x2="9.51598"
                    y2="10.4461"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="white" stopOpacity="0"></stop>
                    <stop offset="1" stopColor="white"></stop>
                </linearGradient>
                <linearGradient
                    id="BeamBadge_b"
                    x1="19.7996"
                    y1="8.67471"
                    x2="14.5734"
                    y2="9.10663"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FD76FD" stopOpacity="0"></stop>
                    <stop offset="1" stopColor="#FF51FF"></stop>
                </linearGradient>
                <linearGradient
                    id="BeamBadge_c"
                    x1="19.7216"
                    y1="11.1636"
                    x2="15.5989"
                    y2="11.1636"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5300FF" stopOpacity="0"></stop>
                    <stop offset="1" stopColor="#9D6EFF"></stop>
                </linearGradient>
                <linearGradient
                    id="BeamBadge_d"
                    x1="19.8103"
                    y1="9.9701"
                    x2="15.8254"
                    y2="11.181"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#AE60D6" stopOpacity="0"></stop>
                    <stop offset="1" stopColor="#AB38E6"></stop>
                </linearGradient>
            </defs>
        </>
    ),
})
