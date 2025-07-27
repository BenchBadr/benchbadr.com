import React, { useState, useEffect, useContext, useRef, useCallback } from 'react';
import { ThemeContext } from '../../ctx/ThemeContext';

async function getWikipediaSummary(searchTerm, language='en') {
    const url = `https://${language}.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(searchTerm)}`;
    const response = await fetch(url);
    const data = await response.json();
  
    if (response.ok) {
      if (data.type === 'standard') {
        const { title, extract, thumbnail } = data;
        return { title, desc: extract, img_url: thumbnail?.source };
      } else if (data.type === 'disambiguation') {
        const { title, extract, content_urls } = data;
        return { title, desc: `${extract}`, img_url: null };
      } else {
        return { title: searchTerm, desc: 'Wikipedia page not found', img_url: null };
      }
    } else {
      return { title: searchTerm, desc: 'Wikipedia page not found', img_url: null };
    }
  }
  

  const Content = ({child}) => {
    if (child){
    if (!(child.startsWith('wiki:')))
    return (
      <div className='wikipedia-tooltip' style={{padding:'5px',fontFamily:'sans-serif', width:'auto', maxWidth:'320px'}}>
        {child}
      </div>
    )
    return <Wiki searchTerm={child.slice(5)}/>
    }
    return null
  }
  
  
export const Wiki = ({searchTerm}) => {
    const [loading, setLoading] = useState(0);
    const [res, setRes] = useState('');
    const {mode} = useContext(ThemeContext)
  
    useEffect(() => {
      setLoading(1);
      const list = searchTerm.split('/')
      getWikipediaSummary(list.length>1 ? list.slice(1).join("/ ") : list[0], list.length>1 ? list[0] : 'en')
        .then((data) => {
          setLoading(0);
          setRes(data);
        })
        .catch((error) => {
          setRes({ desc: `Wikipedia search failed for "${searchTerm}".`, img_url: null });
        });
    }, []);
  
    return (
        <div className='wikipedia-tooltip'>
        {loading ? (
          <center>
            <div className='loading' style={{ position: 'static', padding: 0, margin: 0 }}></div>
          </center>
        ) : res ? (
          <div className='tooltip-content'>
            <span className='description reset'>
            <h2>{res.title}</h2>
            <a className='reset' style={{fontFamily:'sans-serif'}}>{res.desc}</a>
            <center>
                <img src={mode!=='dark' ? `https://en.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg` : `https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Wikipedia-logo-white.svg/2560px-Wikipedia-logo-white.svg.png`} style={{borderRadius:0,paddingTop:'20px'}}/>
            </center>
            </span>
            {res.img_url && (
              <img className='thumbnail' src={res.img_url} alt="Wikipedia thumbnail" />
            )}
          </div>
        ) : (
          <a href={`https://en.wikipedia.org/wiki/${searchTerm}`}>
            Wikipedia Search for "{searchTerm}"
          </a>
        )}
      </div>
    );
  }

  export const Tooltip = ({ children, foot, footnote=1 }) => {
      const [isTooltipVisible, setTooltipVisible] = useState(false);
      const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
      const [tooltipDimensions, setTooltipDimensions] = useState({ width: 0, height: 0 });
      const tooltipRef = useRef(null);
  
      const handleMouseEnter = (event) => {
          setTooltipVisible(true);
          setTooltipPosition({ x: event.clientX, y: event.clientY });
      };
  
      const handleMouseLeave = () => {
          setTooltipVisible(false);
      };
  
      useEffect(() => {
          if (tooltipRef.current) {
              setTooltipDimensions({
                  width: tooltipRef.current.offsetWidth,
                  height: tooltipRef.current.offsetHeight,
              });
          }
      }, [isTooltipVisible]);
  
      const calculateTooltipPosition = () => {
          const { innerWidth, innerHeight } = window;
          const { width: tooltipWidth, height: tooltipHeight } = tooltipDimensions;
          const padding = 10; 
  
          let left = tooltipPosition.x;
          let top = tooltipPosition.y;
  
          if (left + tooltipWidth + padding > innerWidth) {
              left = innerWidth - tooltipWidth - padding;
          }
          if (top + tooltipHeight + padding > innerHeight) {
              top = innerHeight - tooltipHeight - padding;
          }
          if (left < padding) {
              left = padding;
          }
          if (top < padding) {
              top = padding;
          }
  
          return { left, top };
      };
  
      const tooltipStyle = {
          position: 'fixed',
          ...calculateTooltipPosition(),
      };
  
  
      return (
          <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='content'>
              {footnote ? <sup>{children}</sup> : children}
              {isTooltipVisible && children.props && children.props.href.startsWith('#user-content-fn-') ? (
                <a style={{position:'relative',zIndex:100000}}>
                  <div ref={tooltipRef} style={tooltipStyle}>
                      <Content child={footnote ? foot[parseInt(children.props ? children.props.children : null) - 1] : foot} />
                  </div>
                </a>
              ) : null}
          </a>
      );
  };
  

async function getPageMeta(url) {
  try {
    const response = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
    const data = await response.json();
    
    if (response.ok && data.data) {
      return {
        title: data.data.title,
        desc: data.data.description,
        date: data.date
      };
    } else {
      throw new Error('Failed to fetch metadata');
    }
  } catch (error) {
    console.error('Error fetching page metadata:', error);
    return {
      title: null,
      desc: null,
      date:null
    };
  }
}



export const ExtRefs = ({data, language}) => {
  const [metaData, setMetaData] = useState({});

  useEffect(() => {
    const fetchMetaData = async () => {
      if (data && Array.isArray(data)) {
        const metaPromises = data.map(async (item, idx) => {
          const meta = await getPageMeta(item);
          return { idx, meta };
        });
        
        const results = await Promise.all(metaPromises);

        const metaMap = {};
        results.forEach(({ idx, meta }) => {
          metaMap[idx] = meta;
        });
        setMetaData(metaMap);
      }
    };

    fetchMetaData();
  }, [data]);

  function capitalize(str) {
    if (!str) return '';
    return str[0].toUpperCase() + str.slice(1);
  }


  return (
    <>
      <h3 className='cop-title'>{{'en':'External references','fr':'Références externes'}[language]}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {data && Array.isArray(data) && data.map((item, idx) => {
          const url = new URL(item);
          const domain = url.hostname.replace('www.', '');
          const webData = metaData[idx];
          const plac_title = capitalize(domain.split('.')[0])

          if (domain === 'youtube.com') {
            return <YoutubeRef url={url.href} data={webData} key={idx}/>
          }
          
          return (
            <div key={idx} className='ext-refs'>
              <div className='center-vert'>
                <img src={`https://www.google.com/s2/favicons?sz=64&domain_url=${domain}`} alt='favicon' className='icon'/>
                
                <div className='text-block'>
                  <a>{plac_title}</a>
                  <a className='domain'>{url.host}</a>
                </div>
              </div>

              <a className='page-title link' href={url.href} target={`_blank`}>{webData?.title || domain} | {webData?.domain_title || plac_title}</a>
              <p className='page-desc'>{webData?.desc || `Link to ${plac_title}`}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

const YoutubeRef = ({url, data, idx}) => {
  const id = url.split('/')[3].split('?v=')[1].split('&')[0];

  return (
    <div className='ext-refs youtube' key={idx}>
      <div className='center-vert'>
        <a className='thumbnail' href={url} target={'_blank'}>
          <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}/>
          <div className='material-icons'>play_arrow</div>
        </a>

        <div className='text-block'>
          <a className='youtube-title' href={url} target={`_blank`}>
            <img src={`https://www.google.com/s2/favicons?sz=64&domain_url=https://youtube.com`} alt='favicon' className='icon'/>
            {data?.title || 'Youtube'}</a>
          <p className='page-desc'>{data?.desc || url}</p>
        </div>
      </div>
    </div>
  )
}