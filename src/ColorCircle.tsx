import classNames from 'classnames';
import './ColorCircle.scss';

interface Props {
  color: string;
  changeColor: (color: string) => void;
  activeColor: string;
}

export const ColorCircle: React.FC<Props> = (props: Props) => {
  const { color, changeColor, activeColor } = props;

  return (
    <div
      className={classNames('colorCircle', {
        'colorCircle--active': color === activeColor,
      })}
      onClick={() => changeColor(color)}
    >
      <div
        className='circle-color circle'
        style={{ backgroundColor: color }}
      />
      <div className="circle-black circle" />
      <div className="circle-white circle" />
      <div 
        className="circle-color-small circle" 
        style={{ backgroundColor: color }}
      />
    </div>
  );
}