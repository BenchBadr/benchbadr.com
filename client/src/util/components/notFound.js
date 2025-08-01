const NotFound = () => {
    return (
        <>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div
                    style={{
                        width: '300px',
                        height: '300px',
                        maxWidth:'100%',
                        backgroundColor: 'var(--text)',
                        mask: 'url(/assets/404.svg) no-repeat center',
                        maskSize: 'contain',
                        WebkitMask: 'url(/assets/404.svg) no-repeat center',
                        WebkitMaskSize: 'contain'
                    }}
                />
            </div>

        </>
    );
}

export default NotFound;