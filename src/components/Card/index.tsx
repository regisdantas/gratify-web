import React from "react";
import { CardContainer } from "./styles";
import { FiTrash2 } from "react-icons/fi";
import { isJsonString } from "../../utils";
import { TbPinned, TbPinnedOff } from "react-icons/tb";
interface ICardProps {
  id: string;
  number: number;
  date: string;
  content: string;
  onDeleteCard: any;
  onChangeContent: any;
}

const defaultContent = {
  title: "",
  type: "record",
  text: "",
  color: "red",
  pinned: false,
};

const Card: React.FC<ICardProps> = ({
  id,
  number,
  date,
  content,
  onDeleteCard,
  onChangeContent,
}: ICardProps) => {
  const textRef = React.useRef<HTMLSpanElement>(null);
  const titleRef = React.useRef<HTMLSpanElement>(null);

  const objContent = isJsonString(content)
    ? JSON.parse(content)
    : { ...defaultContent, text: content };
  return (
    <CardContainer key={id} color={objContent.color}>
      <div className="ContentContainer">
        <header>
          <strong>
            {objContent.pinned ? (
              <TbPinnedOff title="Unpin note" size={24} onClick={() => onChangeContent(id, JSON.stringify({...objContent, pinned: false}))}/>
            ) : (
              <TbPinned title="Pin note" size={24} onClick={() => onChangeContent(id, JSON.stringify({...objContent, pinned: true}))} />
            )}
            {/* <input type={'checkbox'} checked={objContent.pinned} onChange={e => onChangeContent(id, JSON.stringify({...objContent, pinned: e.target.checked}))} /> */}
            <select
              title="Note type"
              value={objContent.type}
              onChange={(e) =>
                onChangeContent(
                  id,
                  JSON.stringify({ ...objContent, type: e.target.value })
                )
              }
            >
              <option value="note">Note</option>
              <option value="gratitude">Gratitude</option>
              <option value="journal">Journal</option>
            </select>
            <strong>
              <span
                title="Note name"
                ref={titleRef}
                role="textbox"
                contentEditable
                data-placeholder="Give me a name"
                onBlur={(e) =>
                  onChangeContent(
                    id,
                    JSON.stringify({ ...objContent, title: e.target.innerText })
                  )
                }
              >
                {objContent.title}
              </span>
              <span>{date}</span>
            </strong>
          </strong>

          <FiTrash2  title="Delete note" onClick={(e) => onDeleteCard(id)}></FiTrash2>
        </header>
        <span
          title="Note content"
          ref={textRef}
          role="textbox"
          contentEditable
          data-placeholder="What do you have for today?"
          onBlur={(e) =>
            onChangeContent(
              id,
              JSON.stringify({ ...objContent, text: e.target.innerText })
            )
          }
          suppressContentEditableWarning={true}
        >
          {objContent.text}
        </span>
      </div>
    </CardContainer>
  );
};

export default Card;
