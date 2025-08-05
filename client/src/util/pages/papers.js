import './styles/papers.css'
import { paperData } from './data/data';

const Papers = () => {
    return (
        <>
        {paperData.map((item) => (
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
                    <p>{item.desc}</p>
                </div>
            </a>
        ))}
        </>
    )
}

export default Papers;