import { FC, useState } from "react";
import { MoneyCardProps } from './types/MoneyCard';


export const MoneyCard: FC<MoneyCardProps> = (item: MoneyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
      <div
        className="about__money__card"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? 
           <img src={`${item.img}--white.svg`} alt={item.img_alt} className="about__money__card__image"/>
          : <img src={`${item.img}.svg`} alt={item.img_alt} className="about__money__card__image"/>
        }
        <div className="about__money__card__titles">
          <h1 className="about__money__card__title">{item.title}</h1>
          <p className="about__money__card__subtitle">{item.subtitle}</p>
        </div>
      </div>
  )
}