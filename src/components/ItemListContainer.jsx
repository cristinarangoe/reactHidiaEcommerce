import React from 'react'

export default function ItemListContainer({saludo}) {
    return (
        <>
        <div className="text-red-800 text-xl font-medium font-sans ml-2 mt-3">
            <p>{saludo}</p>
        </div>
        </>

    )
}

