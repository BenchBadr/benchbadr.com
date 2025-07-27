import { useState, useRef, useEffect } from 'react';

function Details({ children, ...props }) {
  const [open, setOpen] = useState(props.open);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);


  const summary = children.find(child => child.type === 'summary');
  const content = children.filter(child => child.type !== 'summary');

  useEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  return (
    <div {...props} className='details' open={open}>
      <div
        onClick={() => setOpen(!open)}
        style={{ cursor: 'pointer' }}
      >
        {summary}
      </div>

      <div
        ref={contentRef}
        style={{
          height: height,
          overflow: 'hidden',
          transition: 'height 0.1s ease',
        }}
      >
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Details;