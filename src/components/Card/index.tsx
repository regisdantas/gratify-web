import React from 'react';
import { CardContainer } from './styles';
import { FiTrash2 } from 'react-icons/fi';

interface ICardProps {
  id: string;
  content: string;
  onDeleteCard: any;
  onChangeContent: any;
}

const Card: React.FC<ICardProps> = ({
  id,
  content,
  onDeleteCard,
  onChangeContent
}: ICardProps) => {
  const textRef = React.useRef<HTMLSpanElement>(null);
  return (
    <CardContainer key={id} >
      <div className="ContentContainer">
        <header>
          <strong>id: {id}</strong>
          <FiTrash2 onClick={e => onDeleteCard(id)}></FiTrash2>
        </header>
        <span
          ref={textRef}
          role="textbox"
          contentEditable
          data-placeholder='What are you grateful for this day?'
          onBlur={e => onChangeContent(id, e.currentTarget.innerText)}
          suppressContentEditableWarning={true}
        >
          {content}
        </span>
      </div>
    </CardContainer>
  );
};

export default Card;
