const NotFound = ({blog = 0}) => {
    return (
        <>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div
                    style={{
                        maxWidth: '300px',
                        maxHeight: '300px',
                        width: '100%',
                        height: '100%',
                        aspectRatio: '1',
                        backgroundColor: 'var(--draw)',
                        mask: `url(/assets/${['404', 'NotFound'][blog]}.svg) no-repeat center`,
                        maskSize: 'contain',
                        WebkitMask: `url(/assets/${['404', 'NotFound'][blog]}.svg) no-repeat center`,
                        WebkitMaskSize: 'contain'
                    }}
                />
            </div>

        </>
    );
}

export default NotFound;