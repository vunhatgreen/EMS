import React from 'react'

export function Box(props) {
    return (
        <div className="box">
            {props.children}
        </div>
    )
}
export function BoxHeader(props) {
    return (
        <div className="box-head">
            {props.children}
        </div>
    )
}
export function BoxTitle(props) {
    return (
        <div className="box-title">
            {props.children}
        </div>
    )
}
export function BoxBody(props) {
    return (
        <div className="box-body">
            {props.children}
        </div>
    )
}
export function BoxFooter(props) {
    return (
        <div className="box-footer">
            {props.children}
        </div>
    )
}
