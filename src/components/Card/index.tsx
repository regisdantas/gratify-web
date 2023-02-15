import React from 'react';
import { CardContainer } from './styles';
import { FiTrash2 } from 'react-icons/fi';
import { isJsonString } from '../../utils';
interface ICardProps {
  id: string;
  number: number;
  content: string;
  onDeleteCard: any;
  onChangeContent: any;
}

const defaultContent = {
  type: 'record',
  text: '',
  color: 'red',
  fixed: false,
}

const Card: React.FC<ICardProps> = ({
  id,
  number,
  content,
  onDeleteCard,
  onChangeContent
}: ICardProps) => {
  const textRef = React.useRef<HTMLSpanElement>(null);

  const objContent = isJsonString(content)?JSON.parse(content):{...defaultContent, text: content};
  return (
    <CardContainer key={id} color={objContent.color}>
      <div className="ContentContainer">
        <header>
          <strong>
          <input type={'checkbox'} checked={objContent.fixed} onChange={e => onChangeContent(id, JSON.stringify({...objContent, fixed: e.target.checked}))} />
          {number}#
            <select value={objContent.type} onChange={e => onChangeContent(id, JSON.stringify({...objContent, type: e.target.value}))}>
              <option value="note">Note</option>
              <option value="gratitude">Gratitude</option>
              <option value="record">Record</option>
            </select>
            </strong>
          <FiTrash2 onClick={e => onDeleteCard(id)}></FiTrash2>
        </header>
        <span
          ref={textRef}
          role="textbox"
          contentEditable
          data-placeholder='What do you have for today?'
          onBlur={e => onChangeContent(id, JSON.stringify({...objContent, text: e.target.innerText}))}
          suppressContentEditableWarning={true}
        >
          {objContent.text}
        </span>
      </div>
    </CardContainer>
  );
};

export default Card;
