import Head from 'next/head'
import React from 'react'

function SetHeaders({ title, description, url }) {
    return (
        <>
            <Head>
                <title>{title || 'IFSC Code Finder Title'}</title>
                <meta name="description" content={description || 'IFSC Code Finder Description'} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta property="og:title" content={title || 'IFSC Code Finder Title'} />
                <meta property="og:description" content={description || 'IFSC Code Finder Description'} />
                <meta property="og:url" content={url ? `https://ifsccodefinder.com${url}` : "https://ifsccodefinder.com"} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="logo192.png" />
                <meta property="og:site_name" content="IFSC Code Finder" />
            </Head>
        </>
    )
}

export default SetHeaders
