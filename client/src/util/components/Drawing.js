const Drawing = ({ 
    path, 
    maxWidth = '100%', 
    maxHeight = '50vh' 
}) => {
    return (
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div
                style={{
                    maxWidth: maxWidth,
                    maxHeight: maxHeight,
                    width: '100%',
                    height: '100%',
                    aspectRatio: '1',
                    backgroundColor: 'var(--draw)',
                    mask: `url(/assets/${path}) no-repeat center`,
                    maskSize: 'contain',
                    WebkitMask: `url(/assets/${path}) no-repeat center`,
                    WebkitMaskSize: 'contain'
                }}
            />
        </div>
    );
}

export default Drawing;
