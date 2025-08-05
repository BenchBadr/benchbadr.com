import './styles/papers.css'
import { paperData } from './data/data';
import Drawing from '../components/Drawing';
import { PathPreview } from '../ui/elements/previews';

const Papers = () => {
    return (
        <>
            <PathPreview path={['Papers']} isFile={true} icon={'article'}/>
            <Drawing path="papers.svg" maxHeight='300px'/>
            <PapersChild data={paperData}/>
        </>
    )
}


const PapersChild = ({data}) => {
    return (
        <div className='paper-grid'>
        {data.map((item) => (
            <a className='paper-item' href={`https://drive.google.com/file/d/${item.googleId}/view`} target={`_blank`}>
                <div className='img-parent'>
                    <img src={`https://lh3.googleusercontent.com/d/${item.googleId}=w1600`}/>
                </div>
                <div className='infos'>
                    <span className='header'>{item.title}</span>
                    <div className='icon-bar'>
                        {item?.lang && <span>
                            <span className="icon">translate</span>
                            <span>{{'en':'🇬🇧','fr':'🇫🇷'}[item.lang]}</span>
                        </span>}
                        {item?.date && <span>
                            <span className="icon">calendar_today</span>
                            {item.date}
                        </span>}
                    </div>
                    <div className='tags-container'>
                        {item.tags && item.tags.length && item.tags.map((item) => (
                            <span className='tag'>#{item}</span>
                        ))}
                    </div>
                    <p>{item.desc}</p>
                </div>
            </a>
        ))}
        </div>
    )
}

export default Papers;